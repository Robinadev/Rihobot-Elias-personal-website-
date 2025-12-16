import { Hero } from '@/components/Hero'
import { Experience } from  '@/components/Experience'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/Skills';
import { Contact } from '../../components/Contact';
import { ThemeProvider } from '../../components/theme-provider';
// import { Blog } from '@/components/Blog';
export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
        {/* <Blog /> */}
      <Skills />
      <Contact />
       <ThemeProvider />
    </>
  )
}