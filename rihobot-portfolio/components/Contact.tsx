// components/contact.tsx
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { PROFILE } from "@/components/portfolio-data"

export function Contact() {
  return (
    <section id="contact" className="section-shell contact-section" aria-labelledby="contact-title">
      <div className="site-container contact-card">
        <div className="contact-card__copy">
          <p className="eyebrow">Make something useful</p>
          <h2 id="contact-title">Have a project in mind?</h2>
          <p>If you&apos;d like to discuss a collaboration, an idea, or my work, the best way to reach me is by email.</p>
          <a className="button button--primary" href={`mailto:${PROFILE.email}`}>
            <Mail aria-hidden="true" /> Email Rihobot <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className="contact-card__details">
          <p><MapPin aria-hidden="true" /> {PROFILE.location}</p>
          <a href={PROFILE.github} target="_blank" rel="noreferrer"><Github aria-hidden="true" /> GitHub <ArrowUpRight aria-hidden="true" /></a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" /> LinkedIn <ArrowUpRight aria-hidden="true" /></a>
          <a href={`mailto:${PROFILE.email}`}><Mail aria-hidden="true" /> {PROFILE.email} <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  )
}
