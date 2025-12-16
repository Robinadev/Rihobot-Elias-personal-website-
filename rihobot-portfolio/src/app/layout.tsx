// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rihobot Elias | Senior Software Engineer',
  description: 'Senior Software Engineer specializing in AI/ML, Full-Stack Development, and Cloud Architecture',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}