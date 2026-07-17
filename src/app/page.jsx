import Hero from "@/components/sections/Hero";
import TechMarquee from "@/components/sections/TechMarquee";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <Projects />
      <Achievements />
      <About />
      <Contact />
    </>
  );
}
