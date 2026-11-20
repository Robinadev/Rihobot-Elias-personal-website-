import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/Footer"

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Rihobot Elias Bogale | Full-Stack & AI Software Engineer",
  description: "CV and selected work of Rihobot Elias Bogale, a full-stack and AI software engineer building web, mobile, and AI-enabled products.",
}

export const viewport: Viewport = {
  themeColor: "#f5f7fa",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
