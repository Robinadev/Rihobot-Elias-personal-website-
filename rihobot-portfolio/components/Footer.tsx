// components/footer.tsx
import { Github, Linkedin, Mail } from "lucide-react"
import { PROFILE } from "@/components/portfolio-data"

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container site-footer__inner">
        <a className="site-logo" href="#home" aria-label={`${PROFILE.name}, back to top`}>
          <span className="site-logo__mark">RE</span>
          <span>Rihobot <strong>Elias</strong></span>
        </a>
        <p>Full-stack and AI software engineer · {PROFILE.location}</p>
        <div className="site-footer__links" aria-label="Social links">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github aria-hidden="true" /></a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin aria-hidden="true" /></a>
          <a href={`mailto:${PROFILE.email}`} aria-label="Email"><Mail aria-hidden="true" /></a>
        </div>
        <span className="site-footer__copyright">© {new Date().getFullYear()} Rihobot Elias Bogale</span>
      </div>
    </footer>
  )
}
