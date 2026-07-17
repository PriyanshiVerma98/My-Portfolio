import { projects } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/project/ProjectCard";

export default function Projects() {
  return (
    <section id="work" className="px-6 py-24 lg:pl-24 lg:pr-10 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          hash="7bd4e10"
          eyebrow="feat: projects"
          title=" Work"
        description="A selection of full-stack projects that demonstrate my ability to design, develop, and deploy scalable web applications. Each project highlights the problem, the solution, the technologies used, and the key engineering decisions behind it."
        />

        <div className="mt-14 grid gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
