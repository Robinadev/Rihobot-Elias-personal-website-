// components/skills.tsx
"use client"

import { motion } from "framer-motion"
import { Code, Database, Cloud, Cpu, Smartphone } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: [
      { name: "JavaScript/TypeScript", level: 95 },
      { name: "Python", level: 85 },
      { name: "Java", level: 90 },
      { name: "SQL", level: 88 },
      { name: "Dart", level: 75 },
    ],
  },
  {
    title: "Frontend",
    icon: Smartphone,
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "React Native", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Three.js", level: 80 },
      { name: "Flutter", level: 78 },
    ],
  },
  {
    title: "Backend",
    icon: Database,
    skills: [
      { name: "Node.js/Express", level: 92 },
      { name: "NestJS", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "Redis", level: 82 },
      { name: "Supabase", level: 90 },
    ],
  },
  {
    title: "AI/ML",
    icon: Cpu,
    skills: [
      { name: "OpenAI API", level: 88 },
      { name: "TensorFlow/Keras", level: 80 },
      { name: "Computer Vision", level: 75 },
      { name: "NLP", level: 78 },
      { name: "Prompt Engineering", level: 85 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "Vercel", level: 90 },
      { name: "Docker", level: 82 },
      { name: "Git/GitHub", level: 95 },
      { name: "CI/CD", level: 85 },
      { name: "AWS Basics", level: 75 },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-card border rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Top 5% Scorer",
                issuer: "Ethiopian Entrance Qualification",
                year: "2021",
                description: "Scored 627/700 placing in top 5% nationally",
              },
              {
                title: "AI Career Essentials",
                issuer: "ALX Africa",
                year: "2023",
                description: "Fundamentals of AI and machine learning",
              },
              {
                title: "Data Structures & Algorithms",
                issuer: "Great Learning",
                year: "2023",
                description: "Advanced algorithms in Java",
              },
            ].map((cert, index) => (
              <div
                key={cert.title}
                className="bg-card border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-lg">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}