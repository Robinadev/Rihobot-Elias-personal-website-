// components/projects.tsx
"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Globe } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "ManaShakti",
    description: "AI-powered voice-first wellness app delivering personalized reflections and micro-practices using LLM-driven content.",
    image: "/projects/manashakti.jpg",
    tech: ["React Native", "Node.js", "Supabase", "OpenAI", "ElevenLabs"],
    links: {
      live: "https://manashakti.app",
      github: "https://github.com/manashakti",
    },
    featured: true,
  },
  {
    title: "London AI Guide",
    description: "AI-powered tourism platform with intelligent itinerary generation, real-time recommendations, and personalized content delivery.",
    image: "/projects/london-ai-guide.jpg",
    tech: ["Next.js 14", "NestJS", "PostgreSQL", "Redis", "GPT-4"],
    links: {
      live: "https://london-ai-guide.com",
      github: "https://github.com/london-ai-guide",
    },
    featured: true,
  },
  {
    title: "FoodWagen",
    description: "Modern food delivery platform with restaurant discovery, food search, and order management system.",
    image: "/projects/foodwagen.jpg",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Prisma", "Stripe"],
    links: {
      live: "https://foodwagen.vercel.app",
      github: "https://github.com/foodwagen",
    },
    featured: true,
  },
  {
    title: "Fruit Recognition Model",
    description: "Deep learning system for fruit classification using CNN architecture with TensorFlow and Keras.",
    image: "/projects/fruit-recognition.jpg",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN"],
    links: {
      live: null,
      github: "https://github.com/fruit-recognition",
    },
    featured: false,
  },
  {
    title: "WhatsApp-Addis Platform",
    description: "Event listing and ticketing platform with real-time seat availability and payment processing.",
    image: "/projects/whatsapp-addis.jpg",
    tech: ["Next.js", "NestJS", "MySQL", "Redis", "Socket.io"],
    links: {
      live: null,
      github: "https://github.com/whatsapp-addis",
    },
    featured: false,
  },
  {
    title: "Finance Management System",
    description: "Secure financial management dashboard with user authentication and transaction tracking.",
    image: "/projects/finance-mgmt.jpg",
    tech: ["React", "TypeScript", "Chakra UI", "Node.js", "PostgreSQL"],
    links: {
      live: "https://finance-app.vercel.app",
      github: "https://github.com/finance-mgmt",
    },
    featured: false,
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">
            Showcasing my best work and open-source contributions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border bg-card hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden bg-muted">
                {/* Project image placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                  <div className="text-4xl font-bold text-muted-foreground/20">
                    {project.title.charAt(0)}
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  {project.links.github && (
                    <Link
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </Link>
                  )}
                  {project.links.live && (
                    <Link
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <Globe className="h-4 w-4" />
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>

              {project.featured && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium">
                    Featured
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="https://github.com/rihobot-elias" target="_blank">
            <Button size="lg" variant="outline" className="gap-2">
              View All Projects on GitHub
              <ExternalLink className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}