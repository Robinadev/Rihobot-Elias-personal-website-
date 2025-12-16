// components/hero.tsx
"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail, Sun, Moon } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

// Social links from your CV
const socialLinks = {
  github: 'https://github.com/Robinadev',
  linkedin: 'https://linkedin.com/in/rihobot-elias-1a7b44324',
  email: 'mailto:rihobotelias123@gmail.com',
  cv: 'https://drive.google.com/file/d/1KjIf6ureV-v-aKxlBUfiUVgL7bz96bDY/view?usp=drive_link'
}

// CV Download Button Component
function CvDownloadButton() {
  const cvDirectDownload = 'https://drive.google.com/uc?export=download&id=1KjIf6ureV-v-aKxlBUfiUVgL7bz96bDY'
  
  return (
    <div className="flex gap-3">
      <a
        href={socialLinks.cv}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white rounded-lg font-medium transition-all duration-300 flex items-center gap-2"
      >
        View CV
      </a>
      <a
        href={cvDirectDownload}
        download="Rihobot_Elias_CV.pdf"
        className="px-6 py-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg font-medium transition-all duration-300 flex items-center gap-2"
      >
        Download CV
      </a>
    </div>
  )
}

// Theme Toggle Component
function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-yellow-500" />
      ) : (
        <Moon className="w-5 h-5 text-gray-700" />
      )}
    </button>
  )
}

export function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Theme Toggle - Top Right */}
        <div className="absolute top-8 right-8 z-10">
          <ThemeToggle />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <div>
                <span className="inline-flex items-center rounded-full border border-gray-300 dark:border-gray-700 px-3 py-1 text-sm font-medium mb-4">
                  <span className="h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                  Available for opportunities
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight dark:text-white text-gray-900">
                  Hi, I&apos;m{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                    Rihobot Elias
                  </span>
                </h1>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-600 dark:text-gray-300 mt-2">
                  Senior Software Engineer
                </h2>
              </div>

              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Building exceptional digital experiences with{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">AI/ML</span> and{" "}
                <span className="font-semibold text-cyan-600 dark:text-cyan-400">Full-Stack</span>{" "}
                technologies. Currently pursuing Software Engineering at Wolkite University 
                with a passion for innovation and excellence.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="#contact">
                  <button className="px-6 py-3 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white rounded-lg font-medium transition-all duration-300 flex items-center gap-2">
                    Get In Touch
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
                <Link href="#projects">
                  <button className="px-6 py-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg font-medium transition-all duration-300">
                    View Projects
                  </button>
                </Link>
                
                {/* CV Download Buttons */}
                <CvDownloadButton />
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-6 pt-8">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href={socialLinks.email}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
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
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-2xl">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                      5+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                      4+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                      3.7
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">University CGPA</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                      100%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Client Satisfaction</div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mt-8">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Node.js", "Python", "AI/ML", "TypeScript", "PostgreSQL"].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium"
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