// components/navigation.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { Download, Menu, Moon, Sun, X } from "lucide-react"
import { useTheme } from "next-themes"
import { PROFILE } from "@/components/portfolio-data"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <header className="site-header">
      <div className="site-container site-header__inner">
        {/* Logo */}
        <Link href="#home" className="site-logo" aria-label={`${PROFILE.name}, home`} onClick={closeMenu}>
          <span className="site-logo__mark">RE</span>
          <span>Rihobot <strong>Elias</strong></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => <Link key={item.name} href={item.href}>{item.name}</Link>)}
        </nav>

        {/* Right Side Actions */}
        <div className="site-header__actions">
          {/* Theme Toggle */}
          <button className="icon-button theme-toggle" type="button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle color theme">
            <Sun className="theme-toggle__sun" aria-hidden="true" />
            <Moon className="theme-toggle__moon" aria-hidden="true" />
          </button>

          {/* Download CV */}
          <a className="header-cv" href={PROFILE.cv} download><Download aria-hidden="true" /> CV</a>

          {/* Mobile Menu Button */}
          <button
            className="icon-button mobile-menu-toggle"
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
          <div className="site-container mobile-nav__inner">
            {navItems.map((item) => <Link key={item.name} href={item.href} onClick={closeMenu}>{item.name}</Link>)}
            <a className="button button--primary" href={PROFILE.cv} download onClick={closeMenu}><Download aria-hidden="true" /> Download CV</a>
          </div>
        </nav>
      )}
    </header>
  )
}
