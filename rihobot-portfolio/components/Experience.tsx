"use client"

import { motion } from "framer-motion"
import { Briefcase, MapPin } from "lucide-react"

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "MINAC Group PLC",
    period: "Jul 2026 — Nov 2026",
    location: "United States · Remote",
    highlights: [
      "Built TalariCloud, Beamline, and Civexa across cloud deployment, mobile connectivity, and property-development software.",
      "Contributed to TalariCloud, a cloud deployment platform supporting GitHub-based deployments and payments in birr and USD.",
      "Developed Beamline, connecting US and Ethiopian users with airtime and voice, text, and data packages.",
      "Built Civexa for zoning analysis, development capacity, site constraints, and financial feasibility.",
    ],
    stack: ["React", "TypeScript", "Node.js", "Payments", "Cloud"],
  },
  {
    role: "Data Analyst Expert",
    company: "AfterQuery",
    period: "Jun 2026 — Oct 2026",
    location: "San Francisco, US · Remote",
    highlights: [
      "Built full-stack applications for AI training and evaluation using TypeScript, React, Node.js, SQL, and REST APIs.",
      "Translated ambiguous requirements into data models, authentication, workflows, and business logic; applied input validation, role-based access control, and structured error handling.",
    ],
    stack: ["TypeScript", "React", "Node.js", "SQL", "REST APIs"],
  },
  {
    role: "Full-Stack Developer",
    company: "Japi Xpress Trading PLC",
    period: "Dec 2025 — May 2026",
    location: "Addis Ababa, Ethiopia",
    highlights: [
      "Developed React Native and TypeScript features for XpressAddis, a live B2C marketplace, and Node.js APIs for products, sellers, orders, and payments.",
      "Integrated Chapa and Telebirr payment gateways and connected mobile interfaces with backend services and SQL databases.",
    ],
    stack: ["React Native", "TypeScript", "Node.js", "Chapa", "Telebirr"],
  },
  {
    role: "Full-Stack Developer Intern",
    company: "IntellVerse",
    period: "Oct 2025 — Present",
    location: "Tel Aviv, Israel · Remote",
    highlights: [
      "Developed London AI Guide using Next.js 14, NestJS, TypeScript, PostgreSQL, Prisma, and Redis.",
      "Implemented AI itineraries and personalized recommendations with OpenAI GPT-4; integrated WebSockets, Google Maps, London transport APIs, and weather services.",
    ],
    stack: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Redis"],
  },
  {
    role: "AI Backend Team Lead / Full-Stack Developer",
    company: "Manaverse Ltd · ManaShakti",
    period: "Oct 2025 — Dec 2025",
    location: "Remote",
    highlights: [
      "Led backend API development and Supabase schema design for an AI-powered, voice-first wellness application.",
      "Integrated OpenAI, ElevenLabs, and Whisper/Google speech-to-text with Node.js/Express TypeScript services and a React Native Expo frontend.",
      "Built React and Three.js progress visualizations and collaborated on API contracts and deployment using Railway and Render.",
    ],
    stack: ["Node.js", "Supabase", "React Native", "OpenAI", "Three.js"],
  },
  {
    role: "Frontend Engineer",
    company: "BrainBite",
    period: "Oct 2025 — Dec 2025",
    location: "Den Bosch, Netherlands · Remote",
    highlights: [
      "Built reusable, responsive interfaces for an AI learning platform using Vue 3, Nuxt.js, Tailwind CSS, and Supabase.",
      "Improved accessibility and connected the frontend with backend and AI services.",
    ],
    stack: ["Vue 3", "Nuxt.js", "Tailwind CSS", "Supabase"],
  },
  {
    role: "Software Engineering Intern",
    company: "CodeAlpha",
    period: "Sep 2024 — Oct 2024",
    location: "India · Remote",
    highlights: [
      "Developed a CNN-based fruit recognition model using Python, TensorFlow, and Keras, including data preparation, augmentation, training, and performance optimization.",
    ],
    stack: ["Python", "TensorFlow", "Keras", "Computer Vision"],
  },
  {
    role: "Extern",
    company: "IgniteXL",
    period: "Sep 2024 — Oct 2024",
    location: "California, US · Remote",
    highlights: [
      "Evaluated beauty and wellness technology startups; conducted market, competitive, and due-diligence analysis across 10 deal submissions and prepared investment summaries.",
    ],
    stack: ["Research", "Market analysis", "Due diligence"],
  },
  {
    role: "Software Engineering Fellow",
    company: "HeadStarter",
    period: "Aug 2024 — Sep 2024",
    location: "New York, US · Remote",
    highlights: [],
    stack: [],
  },
  {
    role: "Backend Developer Intern",
    company: "Xion Computing",
    period: "Feb 2024 — May 2024",
    location: "Addis Ababa, Ethiopia",
    highlights: [
      "Built WhatsApp-Addis, an event listing and ticketing platform with Next.js, NestJS, TypeScript, MySQL, Prisma, and Redis.",
      "Implemented JWT, OAuth2, rate limiting, CSRF protection, and secure transactions; used WebSockets and Redis distributed locks for real-time seat availability and overbooking prevention.",
    ],
    stack: ["Next.js", "NestJS", "MySQL", "Redis", "WebSockets"],
  },
]

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="scroll-mt-24 py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-9 flex flex-col gap-3 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="cv-kicker">Career history</p>
            <h2 id="experience-title" className="cv-section-title">Professional experience</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">Selected responsibilities and outcomes from product, AI, and platform engineering roles.</p>
        </div>

        <div className="space-y-5">
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.role}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.35, delay: Math.min(index * 0.035, 0.2) }}
              className="grid gap-5 rounded-2xl border border-line bg-surface p-5 shadow-sm sm:p-7 lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-8"
            >
              <div className="space-y-2 lg:border-r lg:border-line lg:pr-6">
                <p className="font-mono text-xs font-semibold uppercase tracking-wide text-primary">{experience.period}</p>
                <p className="flex items-center gap-2 text-sm text-muted-foreground"><MapPin aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />{experience.location}</p>
              </div>
              <div>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold leading-snug text-foreground">{experience.role}</h3>
                    <p className="mt-1 flex items-center gap-2 text-sm font-medium text-muted-foreground"><Briefcase aria-hidden="true" className="h-3.5 w-3.5" />{experience.company}</p>
                  </div>
                </div>
                {experience.highlights.length > 0 && (
                  <ul className="mt-4 space-y-2.5">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                        <span aria-hidden="true" className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {experience.stack.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                    {experience.stack.map((technology) => <li key={technology} className="cv-chip">{technology}</li>)}
                  </ul>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
