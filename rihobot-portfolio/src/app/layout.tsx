// app/layout.tsx
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { AIChatbot } from "@/components/AIChatbot"
import { Footer } from "@/components/Footer"
import { Navigation } from "@/components/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Rihobot Elias Bogale — Full-Stack & AI Software Engineer",
    template: "%s | Rihobot Elias Bogale",
  },
  description: "Portfolio of Rihobot Elias Bogale, a full-stack and AI software engineer based in Addis Ababa, Ethiopia.",
  openGraph: {
    title: "Rihobot Elias Bogale — Full-Stack & AI Software Engineer",
    description: "Selected product work, experience, and engineering toolkit.",
    type: "website",
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0d1116" },
    { media: "(prefers-color-scheme: light)", color: "#f7f5ef" },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Navigation />
          <main className="pt-[4.25rem]">{children}</main>
          <AIChatbot />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
