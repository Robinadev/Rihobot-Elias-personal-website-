// components/hero.tsx
"use client"
// In Navigation.tsx or Hero.tsx
import CvDownloadButton from '@/components/CVdownloadbutton';

// In your component return:
<CvDownloadButton />
import { motion } from "framer-motion"
import { Button } from "../components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
// In your Hero or Footer component, use these links:
const socialLinks = {
  github: 'https://github.com/Robinadev',
  linkedin: 'https://linkedin.com/in/rihobot-elias-1a7b44324', // Corrected from CV
  email: 'mailto:rihobotelias123@gmail.com',
  cv: 'https://drive.google.com/file/d/1KjIf6ureV-v-aKxlBUfiUVgL7bz96bDY/view?usp=drive_link'
}

// Update your existing social link buttons to use these URLs
export function Hero() {
  return (

    <section className="min-h-[90vh] flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <div>
                <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium mb-4">
                  <span className="h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                  Available for opportunities
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  Hi, I&apos;m{" "}
                  <span className="text-gradient">Rihobot Elias</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-muted-foreground mt-2">
                  Senior Software Engineer
                </h2>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Building exceptional digital experiences with{" "}
                <span className="font-semibold text-primary">AI/ML</span> and{" "}
                <span className="font-semibold text-primary">Full-Stack</span>{" "}
                technologies. Currently pursuing Software Engineering at Wolkite University 
                <span className="font-bold text-green-400">3.7</span>.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="#contact">
                  <Button size="lg" className="gap-2">
                    Get In Touch
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#projects">
                  <Button size="lg" variant="outline" className="gap-2">
                    View Projects
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-6 pt-8">
                <Link
                  href="https://github.com/rihobot-elias"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href="https://linkedin.com/in/rihobot-elias-la7b44324"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link
                  href="mailto:rihobotelias123@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl" />
              <div className="relative bg-card rounded-2xl border p-8 shadow-2xl">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-gradient">5+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-gradient">4+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-gradient">3.7</div>
                    <div className="text-sm text-muted-foreground">University CGPA</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-gradient">100%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mt-8">
                  <h3 className="text-sm font-medium mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Node.js", "Python", "AI/ML", "TypeScript", "PostgreSQL"].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
    </section>
  )
}