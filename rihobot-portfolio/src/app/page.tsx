import { Hero } from '@/components/Hero'
import { Experience } from  '@/components/Experience'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/Skills';
import { Contact } from '../../components/Contact';
import { ThemeProvider } from '../../components/theme-provider';
export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
       <ThemeProvider />
    </>
  )
}