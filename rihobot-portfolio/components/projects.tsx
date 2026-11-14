// components/projects.tsx
import { ArrowUpRight } from "lucide-react"
import { ADDITIONAL_PROJECTS, FEATURED_PROJECTS, PROFILE } from "@/components/portfolio-data"

export function Projects() {
  return (
    <section id="projects" className="section-shell" aria-labelledby="projects-title">
      <div className="site-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work · from my CV</p>
            <h2 id="projects-title" className="section-title">Products, not just screens.</h2>
          </div>
          <p className="section-intro">A selection of mobile, web, and AI projects from my CV. Each card focuses on the problem space and the engineering behind it.</p>
        </div>

        <div className="project-grid">
          {FEATURED_PROJECTS.map((project) => (
            <article className="project-card" key={project.title}>
              <div className={`project-art project-art--${project.visual}`} aria-hidden="true">
                <span className="project-art__index">{project.index} / PROJECT</span>
                <span className="project-art__category">{project.category}</span>
                <div className="project-art__title">
                  <span className="project-art__monogram">{project.monogram}</span>
                  <span>{project.artwork}</span>
                </div>
                <span className="project-art__orbit" />
              </div>
              <div className="project-card__body">
                <div className="project-card__heading">
                  <div>
                    <p className="project-card__category">{project.category}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <span className="project-card__number">{project.index}</span>
                </div>
                <p className="project-card__description">{project.description}</p>
                <ul className="tag-list" aria-label={`${project.title} technologies`}>
                  {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <details className="more-projects">
          <summary>More projects listed in my CV <span aria-hidden="true">+</span></summary>
          <div className="more-projects__grid">
            {ADDITIONAL_PROJECTS.map((project) => (
              <article className="more-projects__item" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </details>

        <a className="text-link projects-github" href={PROFILE.github} target="_blank" rel="noreferrer">
          Browse GitHub profile <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
