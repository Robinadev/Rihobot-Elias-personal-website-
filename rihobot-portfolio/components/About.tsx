import { ArrowUpRight, GraduationCap, MapPin } from "lucide-react"
import { EDUCATION, PROFILE } from "@/components/portfolio-data"

export function About() {
  return (
    <section id="about" className="section-shell">
      <div className="site-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A little context</p>
            <h2 className="section-title">Curious by nature.<br />Careful in the details.</h2>
          </div>
          <p className="section-intro">
            I&apos;m a full-stack and AI software engineer who enjoys turning a rough idea into a useful, well-crafted product—from mobile interfaces and APIs to the data and AI features behind them.
          </p>
        </div>

        <div className="about-grid">
          <article className="about-note">
            <span className="about-note__index">01 / HOW I WORK</span>
            <p>
              I move comfortably between frontend, backend, and applied AI. My CV reflects hands-on work across product teams, early-stage ideas, and software engineering projects—with a focus on clear interfaces and dependable foundations.
            </p>
            <a className="text-link" href={PROFILE.github} target="_blank" rel="noreferrer">
              Explore my GitHub <ArrowUpRight aria-hidden="true" />
            </a>
          </article>

          <article className="education-card">
            <div className="education-card__top">
              <span className="education-card__icon"><GraduationCap aria-hidden="true" /></span>
              <span className="eyebrow">Education</span>
            </div>
            <h3>{EDUCATION.degree}</h3>
            <p className="education-card__school">{EDUCATION.school}</p>
            <p className="education-card__meta">
              <MapPin aria-hidden="true" /> {EDUCATION.location} <span aria-hidden="true">·</span> {EDUCATION.period}
            </p>
            <div className="education-card__result">
              <span>CGPA</span>
              <strong>{EDUCATION.cgpa}</strong>
            </div>
            <div className="coursework-list" aria-label="Relevant coursework">
              {EDUCATION.coursework.map((course) => <span key={course}>{course}</span>)}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
