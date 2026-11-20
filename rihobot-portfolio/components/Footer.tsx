import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-line py-7">
      <div className="container mx-auto flex flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-semibold text-foreground">Rihobot Elias Bogale</p>
          <p className="mt-1 text-xs text-muted-foreground">Full-Stack &amp; AI Software Engineer · Addis Ababa, Ethiopia</p>
        </div>
        <nav aria-label="Social links" className="flex items-center gap-2">
          <a className="grid h-9 w-9 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-primary" href="https://github.com/Robinadev" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github aria-hidden="true" className="h-4 w-4" />
          </a>
          <a className="grid h-9 w-9 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-primary" href="https://linkedin.com/in/rihobot-elias-1a7b44324" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin aria-hidden="true" className="h-4 w-4" />
          </a>
          <a className="grid h-9 w-9 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-primary" href="mailto:rihobotelias123@gmail.com" aria-label="Email">
            <Mail aria-hidden="true" className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </footer>
  )
}
