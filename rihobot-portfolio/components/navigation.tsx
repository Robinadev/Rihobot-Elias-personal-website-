"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { Download, Menu, Moon, Sun, X } from "lucide-react"
import { useTheme } from "next-themes"

const navItems = [
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Work", href: "/#projects" },
  { name: "Skills", href: "/#skills" },
  { name: "Education", href: "/#education" },
  { name: "Contact", href: "/#contact" },
]

const cvPath = "/Rihobot_Elias_Bogale_CV.pdf"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-background/90 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/#about" className="group flex min-w-0 items-center gap-3" aria-label="Rihobot Elias Bogale, home">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary font-mono text-sm font-bold text-primary-foreground">RB</span>
            <span className="truncate text-sm font-semibold tracking-tight text-foreground sm:text-base">Rihobot Elias Bogale</span>
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-5 lg:flex">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-xs font-medium text-muted-foreground transition-colors hover:text-primary">{item.name}</Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              aria-label="Toggle color theme"
              className="grid h-10 w-10 place-items-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {mounted && resolvedTheme === "dark" ? <Sun aria-hidden="true" className="h-4 w-4" /> : <Moon aria-hidden="true" className="h-4 w-4" />}
            </button>
            <a href={cvPath} download className="cv-button cv-button-primary hidden sm:inline-flex">
              <Download aria-hidden="true" className="h-4 w-4" /> CV
            </a>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-xl text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
              onClick={() => setIsOpen((open) => !open)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-line lg:hidden"
            >
              <div className="grid gap-1 py-3">
                {navItems.map((item) => (
                  <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">{item.name}</Link>
                ))}
                <a href={cvPath} download className="cv-button cv-button-primary mt-2 justify-center"><Download aria-hidden="true" className="h-4 w-4" /> Download CV</a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
