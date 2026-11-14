// components/skills.tsx
import { CERTIFICATIONS, SKILL_GROUPS } from "@/components/portfolio-data"

export function Skills() {
  return (
    <section id="skills" className="section-shell section-shell--tinted" aria-labelledby="skills-title">
      <div className="site-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Tools in the toolkit</p>
            <h2 id="skills-title" className="section-title">A broad engineering toolkit.</h2>
          </div>
          <p className="section-intro">Technologies and services documented in my CV, grouped by where I use them.</p>
        </div>

        <div className="skills-grid">
          {SKILL_GROUPS.map((group, index) => (
            <article className="skill-card" key={group.title}>
              <span className="skill-card__index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{group.title}</h3>
              <ul className="tag-list">
                {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>

        <div className="credential-row">
          <div>
            <p className="eyebrow">Credentials</p>
            <h3>Learning, recognized.</h3>
          </div>
          <ul>
            {CERTIFICATIONS.map((credential) => <li key={credential}>{credential}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
