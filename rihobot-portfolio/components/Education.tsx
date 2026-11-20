import { Award, GraduationCap } from "lucide-react"

const credentials = [
  { title: "Artificial Intelligence Career Essentials", issuer: "ALX" },
  { title: "Data Structures and Algorithms in Java (Intermediate)", issuer: "Great Learning" },
  { title: "Top 5% Scorer", issuer: "Ethiopian National Entrance Qualification" },
]

export function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="scroll-mt-24 border-y border-line bg-muted py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-9 border-b border-line pb-6">
          <p className="cv-kicker">Education & recognition</p>
          <h2 id="education-title" className="cv-section-title">Education &amp; credentials</h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.1fr_1fr]">
          <article className="rounded-2xl border border-line bg-surface p-6 sm:p-7">
            <div className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <GraduationCap aria-hidden="true" className="h-5 w-5" />
              </span>
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-wide text-primary">May 2022 — Jun 2026</p>
                <h3 className="mt-2 text-lg font-semibold text-foreground">Bachelor of Software Engineering</h3>
                <p className="mt-1 text-sm text-muted-foreground">Wolkite University · Wolkite, Ethiopia</p>
                <p className="mt-3 text-sm font-medium text-foreground">CGPA 3.7</p>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  Coursework: AI and machine learning, web and mobile application development, data structures and algorithms, and project management.
                </p>
              </div>
            </div>
          </article>

          <div className="grid gap-3 sm:grid-cols-2">
            {credentials.map((credential) => (
              <article key={credential.title} className="flex gap-3 rounded-2xl border border-line bg-surface p-5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Award aria-hidden="true" className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold leading-5 text-foreground">{credential.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">{credential.issuer}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
