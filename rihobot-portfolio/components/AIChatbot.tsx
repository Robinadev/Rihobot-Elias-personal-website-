"use client"

import { useMemo, useState, type FormEvent } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { MessageCircle, Send, Sparkles, X } from "lucide-react"

const suggestions = [
  "Tell me about Rihobot's experience",
  "What has he built with AI?",
  "Which technologies does he use?",
]

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const transport = useMemo(
    () => new DefaultChatTransport({
      api: "/api/chat",
      prepareSendMessagesRequest: ({ messages }) => ({
        body: { messages: messages.slice(-12) },
      }),
    }),
    [],
  )
  const { messages, sendMessage, status, error, clearError } = useChat({ transport })
  const isBusy = status === "submitted" || status === "streaming"

  function submitMessage(text: string) {
    const trimmedText = text.trim()
    if (!trimmedText || isBusy) return
    if (error) clearError()
    void sendMessage({ text: trimmedText })
    setInput("")
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    submitMessage(input)
  }

  return (
    <div className="chat-widget">
      {isOpen && (
        <section className="chat-panel" id="portfolio-chat-panel" role="dialog" aria-labelledby="portfolio-chat-title">
          <header className="chat-panel__header">
            <div className="chat-panel__identity">
              <span className="chat-panel__mark"><Sparkles aria-hidden="true" /></span>
              <div>
                <h2 id="portfolio-chat-title">Ask about Rihobot</h2>
                <p>Portfolio AI · grounded in the CV</p>
              </div>
            </div>
            <button className="icon-button chat-panel__close" type="button" onClick={() => setIsOpen(false)} aria-label="Close portfolio assistant">
              <X aria-hidden="true" />
            </button>
          </header>

          <div className="chat-panel__messages" role="log" aria-live="polite" aria-relevant="additions text" aria-label="Conversation">
            {messages.length === 0 ? (
              <div className="chat-welcome">
                <span className="chat-welcome__eyebrow">A quick introduction</span>
                <p>Hi, I can answer questions about Rihobot&apos;s experience, projects, education, and technical toolkit.</p>
                <div className="chat-suggestions">
                  {suggestions.map((suggestion) => (
                    <button key={suggestion} type="button" onClick={() => submitMessage(suggestion)} disabled={isBusy}>
                      {suggestion}<span aria-hidden="true">↗</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <ol className="chat-message-list">
                {messages.map((message) => {
                  const text = message.parts
                    .filter((part) => part.type === "text")
                    .map((part) => part.text)
                    .join("")

                  if (!text) return null

                  return (
                    <li className={`chat-message chat-message--${message.role}`} key={message.id}>
                      <span className="chat-message__speaker">{message.role === "user" ? "You" : "Assistant"}</span>
                      <article className="chat-message__content">{text}</article>
                    </li>
                  )
                })}
              </ol>
            )}
            {isBusy && <p className="chat-status" role="status">Thinking through the CV…</p>}
            {error && <p className="chat-error" role="alert">The assistant couldn&apos;t respond right now. Please try again or email Rihobot directly.</p>}
          </div>

          <form className="chat-composer" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="portfolio-chat-input">Ask a question about Rihobot</label>
            <textarea
              id="portfolio-chat-input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about experience or projects…"
              maxLength={1400}
              rows={1}
              disabled={isBusy}
            />
            <button className="chat-composer__send" type="submit" aria-label="Send message" disabled={!input.trim() || isBusy}>
              <Send aria-hidden="true" />
            </button>
          </form>
          <p className="chat-panel__note">Please don&apos;t share private information.</p>
        </section>
      )}

      <button
        className={`chat-launcher${isOpen ? " chat-launcher--open" : ""}`}
        type="button"
        aria-expanded={isOpen}
        aria-controls="portfolio-chat-panel"
        aria-label={isOpen ? "Close portfolio assistant" : "Open portfolio assistant"}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X aria-hidden="true" /> : <MessageCircle aria-hidden="true" />}
        <span>{isOpen ? "Close" : "Ask AI"}</span>
      </button>
    </div>
  )
}
