import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '../../components/navigation';
import { Footer } from '../../components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rihobot Elias | Senior Software Engineer',
  description: 'Senior Software Engineer specializing in AI/ML, Full-Stack Development, and Cloud Architecture',
  keywords: ['Software Engineer', 'AI/ML', 'Full-Stack', 'React', 'Node.js', 'Ethiopia'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}