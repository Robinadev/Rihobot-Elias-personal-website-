// components/hero.tsx
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { PROFILE } from "@/components/portfolio-data"

export function Hero() {
  return (
    <section id="home" className="hero section-shell" aria-labelledby="hero-title">
      <div className="site-container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span className="status-dot" /> FULL-STACK · AI · SOFTWARE ENGINEERING</p>
          <h1 id="hero-title">Web, mobile &amp; AI—<span>built for the real world.</span></h1>
          <p className="hero-summary">
            I&apos;m {PROFILE.name}, a software engineer who builds thoughtful digital products—from responsive interfaces and backend systems to practical AI features.
          </p>

          <div className="hero-actions">
            <a className="button button--primary" href="#projects">Explore selected work <ArrowDown aria-hidden="true" /></a>
            <a className="button button--quiet" href="#contact">Get in touch <ArrowUpRight aria-hidden="true" /></a>
            <a className="button button--outline" href={PROFILE.cv} download>
              <Download aria-hidden="true" /> Download CV
            </a>
          </div>

          <div className="hero-socials" aria-label="Contact and social links">
            <span className="hero-location"><MapPin aria-hidden="true" /> {PROFILE.location}</span>
            <span className="hero-socials__links">
              {/* Social links from your CV */}
              <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="Rihobot on GitHub"><Github aria-hidden="true" /></a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="Rihobot on LinkedIn"><Linkedin aria-hidden="true" /></a>
              <a href={`mailto:${PROFILE.email}`} aria-label={`Email ${PROFILE.name}`}><Mail aria-hidden="true" /></a>
            </span>
          </div>
        </div>

        <aside className="hero-visual" aria-label="A snapshot of Rihobot's engineering focus">
          <div className="hero-visual__orb" aria-hidden="true"><span /><span /></div>
          <div className="hero-console">
            <div className="hero-console__top">
              <span className="hero-console__lights" aria-hidden="true"><i /><i /><i /></span>
              <span>approach.ts</span>
              <span className="hero-console__index">RE / 01</span>
            </div>
            <pre className="hero-console__code"><code>{`const engineer = {
  focus: ["web", "mobile", "AI"],
  approach: "product-minded",
  base: "Addis Ababa, Ethiopia",
};`}</code></pre>
            <div className="hero-console__footer">
              <span><i aria-hidden="true" /> Building across the stack</span>
              <span>2022 — 2026</span>
            </div>
          </div>
          <div className="hero-stamp" aria-hidden="true"><span>RE</span><span>SOFTWARE<br />ENGINEER</span></div>
        </aside>
      </div>
    </section>
  )
}
