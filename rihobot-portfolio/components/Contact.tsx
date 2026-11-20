import { ArrowUpRight, Mail, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-24 py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-primary px-6 py-9 text-primary-foreground sm:px-10 sm:py-12 lg:flex lg:items-end lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">Get in touch</p>
            <h2 id="contact-title" className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Let&apos;s build something useful.</h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-primary-foreground/80 sm:text-base">
              For full-stack, mobile, and AI product opportunities, reach me directly by email or connect on LinkedIn.
            </p>
          </div>
          <div className="mt-7 flex flex-col items-start gap-3 lg:mt-0 lg:items-end">
            <a className="inline-flex items-center gap-2 rounded-xl bg-surface px-5 py-3 text-sm font-semibold text-foreground transition-opacity hover:opacity-90" href="mailto:rihobotelias123@gmail.com">
              <Mail aria-hidden="true" className="h-4 w-4" /> Email Rihobot <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <p className="inline-flex items-center gap-2 text-sm text-primary-foreground/80"><MapPin aria-hidden="true" className="h-4 w-4" />Addis Ababa, Ethiopia</p>
          </div>
        </div>
      </div>
    </section>
  )
}
