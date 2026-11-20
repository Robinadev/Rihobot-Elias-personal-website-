"use client"

import { motion } from "framer-motion"
import { ArrowDown, ArrowUpRight, Download, MapPin } from "lucide-react"

const focusAreas = [
  "Full-stack product engineering",
  "Backend architecture & APIs",
  "AI integrations and workflows",
  "Payments and cloud deployment",
]

export function Hero() {
  return (
    <section id="about" aria-labelledby="profile-title" className="scroll-mt-24 py-14 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(250px,0.7fr)] lg:items-end lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <h1 id="profile-title" className="mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Rihobot Elias <span className="block text-primary">Bogale</span>
            </h1>
            <p className="mt-5 text-lg font-medium text-muted-foreground sm:text-xl">
              Full-Stack &amp; AI Software Engineer
            </p>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Full-stack and AI software engineer building web, mobile, and AI-enabled applications. Experienced in React, Next.js, React Native, Node.js, TypeScript, Python, and SQL, with a focus on backend architecture, API integrations, payment workflows, and cloud deployment.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" />Addis Ababa, Ethiopia</span>
              <a className="cv-link" href="mailto:rihobotelias123@gmail.com">rihobotelias123@gmail.com</a>
              <a className="cv-link inline-flex items-center gap-1" href="https://linkedin.com/in/rihobot-elias-1a7b44324" target="_blank" rel="noreferrer">
                LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="cv-button cv-button-primary" href="/Rihobot_Elias_Bogale_CV.pdf" download>
                <Download className="h-4 w-4" /> Download CV
              </a>
              <a className="cv-button cv-button-secondary" href="#experience">
                Explore experience <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            aria-label="Professional focus"
            className="rounded-2xl border border-line bg-surface p-6 shadow-sm sm:p-7"
          >
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Professional focus</p>
            <ul className="mt-5 divide-y divide-line">
              {focusAreas.map((item) => (
                <li key={item} className="flex gap-4 py-3.5 text-sm leading-6 text-foreground first:pt-0 last:pb-0">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-line pt-5 text-sm leading-6 text-muted-foreground">
              Building practical software across cloud platforms, marketplaces, mobile products, and AI-powered services.
            </p>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
