// components/experience.tsx
import { EXPERIENCE } from "@/components/portfolio-data"

export function Experience() {
  return (
    <section id="experience" className="section-shell section-shell--tinted" aria-labelledby="experience-title">
      <div className="site-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The path so far</p>
            <h2 id="experience-title" className="section-title">Work experience</h2>
          </div>
          <p className="section-intro">A mix of product engineering, applied AI, and collaborative work across remote and local teams.</p>
        </div>

        <ol className="experience-list">
          {EXPERIENCE.map((experience, index) => (
            <li className="experience-entry" key={`${experience.company}-${experience.role}`}>
              <span className="experience-entry__number">{String(index + 1).padStart(2, "0")}</span>
              <article className="experience-card">
                <header className="experience-card__header">
                  <div>
                    <p className="experience-card__company">{experience.company}</p>
                    <h3>{experience.role}</h3>
                  </div>
                  <p className="experience-card__period">{experience.period}</p>
                </header>
                <p className="experience-card__location">{experience.location}</p>
                {experience.highlights.length > 0 && (
                  <ul className="experience-card__highlights">
                    {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                )}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
