import Hero from "@/components/sections/Hero";
import TechMarquee from "@/components/sections/TechMarquee";
import SkillsGrid from "@/components/sections/SkillsGrid";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <SkillsGrid />
      <Projects />
      <Achievements />
      <About />
      <Contact />
    </>
  );
}