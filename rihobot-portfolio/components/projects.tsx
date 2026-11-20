"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    name: "TalariCloud",
    category: "Cloud deployment",
    description: "A GitHub-connected deployment platform with payment workflows supporting birr and USD.",
    technologies: ["GitHub", "Cloud", "Payments"],
  },
  {
    name: "Beamline",
    category: "Mobile connectivity",
    description: "A mobile product connecting US and Ethiopian users with airtime and voice, text, and data packages.",
    technologies: ["Mobile", "APIs", "Commerce"],
  },
  {
    name: "Civexa",
    category: "Property intelligence",
    description: "A property-development platform for zoning analysis, development capacity, site constraints, and financial feasibility.",
    technologies: ["Data products", "Analysis", "Web"],
  },
  {
    name: "XpressAddis",
    category: "Live B2C marketplace",
    description: "Marketplace features and Node.js APIs for products, seller listings, orders, and payments, with Chapa and Telebirr integrations.",
    technologies: ["React Native", "TypeScript", "Node.js"],
  },
  {
    name: "London AI Guide",
    category: "AI travel platform",
    description: "Personalized itineraries and attraction recommendations connected to maps, transport, weather, and real-time services.",
    technologies: ["Next.js", "NestJS", "PostgreSQL", "WebSockets"],
  },
  {
    name: "WhatsApp-Addis",
    category: "Event ticketing",
    description: "An event listing and ticketing platform with protected transactions and real-time seat availability to prevent overbooking.",
    technologies: ["Next.js", "NestJS", "MySQL", "Redis"],
  },
  {
    name: "Pantry Tracker",
    category: "AI-assisted food planning",
    description: "A pantry management app with Firebase, Vercel CI/CD, and OpenAI-powered recipe suggestions.",
    technologies: ["Next.js", "Firebase", "Material UI", "OpenAI"],
  },
  {
    name: "Lexify / Chatmosiac",
    category: "AI knowledge tools",
    description: "An LLM-powered searchable knowledge base for SMEs and a custom AI chatbot for NGOs.",
    technologies: ["LLMs", "Search", "Chatbots"],
  },
]

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-24 border-y border-line bg-muted py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-9 flex flex-col gap-3 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="cv-kicker">Selected work</p>
            <h2 id="projects-title" className="cv-section-title">Products &amp; platforms</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">A cross-section of marketplace, cloud, mobile, property, and AI-enabled products from my experience.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.2) }}
              className="group flex min-h-52 flex-col justify-between rounded-2xl border border-line bg-surface p-5 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 sm:p-6"
            >
              <div>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">{project.category}</p>
                <h3 className="mt-3 flex items-center gap-2 text-xl font-semibold text-foreground">
                  {project.name}<ArrowUpRight aria-hidden="true" className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">{project.description}</p>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
                {project.technologies.map((technology) => <li key={technology} className="cv-chip">{technology}</li>)}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
