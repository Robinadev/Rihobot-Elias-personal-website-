// components/experience.tsx
"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    company: "ManaShakti",
    role: "Full-Stack Developer / Backend Lead",
    period: "2024 - Present",
    location: "Remote",
    description: [
      "Led backend API development and Supabase schema design for AI-powered wellness app",
      "Implemented voice-first interaction model using LLM-driven content and ElevenLabs TTS",
      "Built React data visualization features with Three.js for interactive progress tracking",
      "Managed end-to-end app integration with React Native frontend and Node.js backend",
    ],
    tech: ["React Native", "Node.js", "Supabase", "OpenAI", "Three.js"],
  },
  {
    company: "IntellVerse",
    role: "Full Stack Developer Intern",
    period: "Oct 2025 - Present",
    location: "Tel Aviv, Israel",
    description: [
      "Working on AI-powered tourism platform with intelligent itinerary generation",
      "Implementing real-time attraction recommendations using OpenAI GPT-4",
      "Developing microservices architecture with NestJS and Redis geospatial services",
    ],
    tech: ["Next.js", "NestJS", "PostgreSQL", "Redis", "OpenAI"],
  },
  {
    company: "BrainBite",
    role: "Front End Engineer",
    period: "Oct 2025 - Dec 2025",
    location: "Netherlands",
    description: [
      "Developed frontend features for educational platform",
      "Implemented responsive UI components with TypeScript",
      "Collaborated with backend team for API integration",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    company: "Xion Computing",
    role: "Backend Developer Intern",
    period: "Feb 2024 - May 2024",
    location: "Addis Ababa, Ethiopia",
    description: [
      "Built WhatsApp-Addis Event Listing & Ticketing Platform",
      "Implemented real-time seat availability with WebSockets",
      "Developed payment processing and ticket management systems",
    ],
    tech: ["Next.js", "NestJS", "MySQL", "Redis", "Socket.io"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-xl text-muted-foreground">
            My professional journey in software engineering
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden lg:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative mb-12 lg:mb-0 ${
                index % 2 === 0 ? "lg:text-right lg:pr-8" : "lg:pl-8"
              } lg:w-1/2 lg:${index % 2 === 0 ? "mr-auto" : "ml-auto"}`}
            >
              <div
                className={`bg-card border rounded-xl p-6 shadow-lg ${
                  index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background hidden lg:block" />

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                      <div className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {exp.company}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground">
                        • {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}