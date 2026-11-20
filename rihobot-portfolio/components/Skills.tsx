import { BrainCircuit, Braces, Database, Layers3, Wrench } from "lucide-react"

const skillGroups = [
  {
    label: "Languages",
    icon: Braces,
    items: ["JavaScript", "TypeScript", "Python", "Java", "SQL", "PHP"],
  },
  {
    label: "Frontend & mobile",
    icon: Layers3,
    items: ["React", "Next.js", "React Native", "Expo", "Vue 3", "Nuxt.js", "Flutter", "Tailwind CSS", "Chakra UI", "Material UI", "Three.js"],
  },
  {
    label: "Backend & security",
    icon: Database,
    items: ["Node.js", "Express.js", "NestJS", "REST APIs", "WebSockets", "JWT", "OAuth2"],
  },
  {
    label: "Databases & cloud",
    icon: Wrench,
    items: ["PostgreSQL", "Supabase", "MySQL", "Prisma", "Redis", "Firebase", "Railway", "Render", "Vercel"],
  },
  {
    label: "AI & data",
    icon: BrainCircuit,
    items: ["OpenAI API", "LLM integration", "ElevenLabs", "Whisper", "Google Speech-to-Text", "TensorFlow", "Keras", "Machine learning", "NLP"],
  },
  {
    label: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Bash", "CI/CD"],
  },
]

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="scroll-mt-24 py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-9 flex flex-col gap-3 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="cv-kicker">Technical toolkit</p>
            <h2 id="skills-title" className="cv-section-title">Skills &amp; technologies</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">Tools and technologies used across full-stack, mobile, cloud, and AI product work.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.label} className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary/10 text-primary">
                  <group.icon aria-hidden="true" className="h-4 w-4" />
                </span>
                <h3 className="text-base font-semibold text-foreground">{group.label}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => <li key={item} className="cv-chip">{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
