// app/page.tsx
import { Hero } from "../../components/Hero";
import { Experience } from "../../components/Experience";
import { Projects } from "../../components/projects";
import { Skills } from "../../components/Skills";
import { Contact } from "../../components/Contact";
import { Footer } from "../../components/Footer"

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}