// app/layout.tsx
// @ts-ignore: next/font/google types not available in this environment
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../../components/theme-provider';
import { Navigation } from '../../components/navigation';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata = {
  title: 'Rihobot Elias | Senior Software Engineer',
  description: 'Senior Software Engineer specializing in AI/ML, Full-Stack Development, and Cloud Architecture. CGPA 3.7 at Wolkite University.',
  keywords: ['Software Engineer', 'AI/ML', 'Full-Stack', 'Ethiopia', 'React Native', 'Node.js'],
  authors: [{ name: 'Rihobot Elias Bogale' }],
  creator: 'Rihobot Elias',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rihobot-elias.vercel.app',
    title: 'Rihobot Elias | Senior Software Engineer',
    description: 'Senior Software Engineer specializing in AI/ML and Full-Stack Development',
    siteName: 'Rihobot Elias Portfolio',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="pt-16">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}