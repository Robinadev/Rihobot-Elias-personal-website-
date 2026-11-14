import {
  convertToModelMessages,
  createUIMessageStream,
  createUIMessageStreamResponse,
  generateText,
  type UIMessage,
} from "ai"
import {
  EDUCATION,
  EXPERIENCE,
  FEATURED_PROJECTS,
  PORTFOLIO_ASSISTANT_CONTEXT,
  PROFILE,
  SKILL_GROUPS,
} from "@/components/portfolio-data"

export const maxDuration = 30

const MAX_BODY_BYTES = 24_000
const MAX_MESSAGES = 12
const MAX_MESSAGE_LENGTH = 1_400

type PortfolioMessage = {
  role: "user" | "assistant"
  text: string
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null
}

async function readBoundedJson(request: Request) {
  const contentLength = Number(request.headers.get("content-length"))
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    return { kind: "too-large" as const }
  }

  const reader = request.body?.getReader()
  if (!reader) return { kind: "invalid" as const }

  const decoder = new TextDecoder()
  let body = ""
  let bytesRead = 0

  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    bytesRead += value.byteLength
    if (bytesRead > MAX_BODY_BYTES) {
      await reader.cancel().catch(() => undefined)
      return { kind: "too-large" as const }
    }
    body += decoder.decode(value, { stream: true })
  }

  body += decoder.decode()
  try {
    return { kind: "ok" as const, value: JSON.parse(body) as unknown }
  } catch {
    return { kind: "invalid" as const }
  }
}

function validateMessages(value: unknown): PortfolioMessage[] | null {
  if (!isRecord(value) || !Array.isArray(value.messages)) return null
  if (value.messages.length === 0 || value.messages.length > MAX_MESSAGES) return null

  const messages: PortfolioMessage[] = []

  for (const message of value.messages) {
    if (!isRecord(message) || (message.role !== "user" && message.role !== "assistant")) {
      return null
    }
    if (!Array.isArray(message.parts)) return null

    const text = message.parts
      .filter((part): part is Record<string, unknown> => isRecord(part) && part.type === "text")
      .map((part) => typeof part.text === "string" ? part.text : "")
      .join("")
      .trim()

    if (!text || text.length > MAX_MESSAGE_LENGTH) return null
    messages.push({ role: message.role, text })
  }

  if (messages[messages.length - 1]?.role !== "user") return null
  return messages
}

function createFallbackAnswer(question: string) {
  const normalizedQuestion = question.toLowerCase()
  let answer: string

  if (/\b(ai|artificial intelligence|machine learning|llm|voice|speech)\b/.test(normalizedQuestion)) {
    answer = "CV highlights include ManaShakti, a voice-first wellness product using OpenAI, ElevenLabs, Whisper, and Google Speech-to-Text; AI recipe suggestions for a Pantry Tracker; a separate Node.js chatbot with Firebase authentication; and a fruit-recognition model built with TensorFlow and Keras. BrainBite and the London AI Guide are also listed as AI-powered products."
  } else if (/\b(experience|career|work|role|company|job)\b/.test(normalizedQuestion)) {
    answer = `Recent roles listed on the CV include ${EXPERIENCE.slice(0, 5).map((item) => `${item.role} at ${item.company} (${item.period})`).join("; ")}. It also includes software engineering work at HeadStarter, CodeAlpha, and Xion Computing, plus an externship at IgniteXL focused on investment and market research.`
  } else if (/\b(education|degree|study|university|cgpa|coursework)\b/.test(normalizedQuestion)) {
    answer = `${EDUCATION.degree} from ${EDUCATION.school} in ${EDUCATION.location}, ${EDUCATION.period}, with a ${EDUCATION.cgpa} CGPA. Relevant coursework includes AI and machine learning, web and mobile development, data structures and algorithms, and project management.`
  } else if (/\b(skill|technology|technologies|stack|language|tool)\b/.test(normalizedQuestion)) {
    answer = SKILL_GROUPS.map((group) => `${group.title}: ${group.skills.slice(0, 5).join(", ")}`).join(". ") + "."
  } else if (/\b(contact|email|linkedin|github|reach)\b/.test(normalizedQuestion)) {
    answer = `Rihobot is based in ${PROFILE.location}. You can reach him at ${PROFILE.email}, or find him on GitHub and LinkedIn from the links on this page.`
  } else {
    answer = `Featured work includes ${FEATURED_PROJECTS.map((project) => project.title).join(", ")}. The CV also lists ${EDUCATION.degree} at ${EDUCATION.school} and hands-on experience across full-stack engineering, mobile products, and applied AI.`
  }

  return `Live AI generation is unavailable in this preview right now, but I can still answer from the CV: ${answer}`
}

function writeTextResponse(writer: Parameters<Parameters<typeof createUIMessageStream>[0]["execute"]>[0]["writer"], text: string) {
  const textId = `portfolio-answer-${Date.now()}`
  writer.write({ type: "start" })
  writer.write({ type: "text-start", id: textId })
  for (let index = 0; index < text.length; index += 96) {
    writer.write({ type: "text-delta", id: textId, delta: text.slice(index, index + 96) })
  }
  writer.write({ type: "text-end", id: textId })
}

export async function POST(request: Request) {
  const payload = await readBoundedJson(request)
  if (payload.kind === "too-large") {
    return Response.json({ error: "Message is too long." }, { status: 413 })
  }
  if (payload.kind !== "ok") {
    return Response.json({ error: "Invalid chat request." }, { status: 400 })
  }

  const validatedMessages = validateMessages(payload.value)
  if (!validatedMessages) {
    return Response.json({ error: "Please send a text question about the portfolio." }, { status: 400 })
  }

  const messages: UIMessage[] = validatedMessages.map((message, index) => ({
    id: `portfolio-${index}`,
    role: message.role,
    parts: [{ type: "text", text: message.text }],
  }))

  const stream = createUIMessageStream({
    async execute({ writer }) {
      let answer: string
      try {
        const result = await generateText({
          model: "google/gemini-2.5-flash",
          instructions: PORTFOLIO_ASSISTANT_CONTEXT,
          messages: await convertToModelMessages(messages),
          maxOutputTokens: 320,
          abortSignal: request.signal,
        })
        answer = result.text.trim() || createFallbackAnswer(validatedMessages.at(-1)!.text)
      } catch {
        if (request.signal.aborted) return
        answer = createFallbackAnswer(validatedMessages.at(-1)!.text)
      }
      writeTextResponse(writer, answer)
    },
    onError: () => "The assistant could not prepare a response. Please try again or email Rihobot.",
  })

  return createUIMessageStreamResponse({ stream })
}
