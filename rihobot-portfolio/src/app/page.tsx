import { About } from "@/components/About"
import { Contact } from "@/components/Contact"
import { Experience } from "@/components/Experience"
import { Hero } from "@/components/Hero"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/Skills"
// import { Blog } from '@/components/Blog';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      {/* <Blog /> */}
      <Skills />
      <Contact />
    </>
  )
}
