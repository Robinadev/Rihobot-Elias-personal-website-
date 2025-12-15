// components/footer.tsx
import Link from "next/link"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" />
              <span className="font-bold text-lg">
                <span className="text-gradient">Rihobot</span> Elias
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Senior Software Engineer & AI/ML Enthusiast
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/rihobot-elias"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/rihobot-elias-la7b44324"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:rihobotelias123@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Rihobot Elias Bogale. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2 flex items-center justify-center gap-1">
            Made with <Heart className="h-3 w-3 fill-red-500 text-red-500" /> in Ethiopia
          </p>
        </div>
      </div>
    </footer>
  )
}