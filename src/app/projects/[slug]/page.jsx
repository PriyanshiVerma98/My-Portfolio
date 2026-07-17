import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, site } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import MagneticLink from "@/components/ui/MagneticLink";
 import Image from "next/image";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.oneLiner,
    openGraph: {
      title: `${project.name} — ${site.name}`,
      description: project.oneLiner,
    },
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="px-6 pb-24 pt-32 lg:pl-24 lg:pr-10 lg:pt-40">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-signal"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M19 12H5M11 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to work
        </Link>

        <Reveal className="mt-8">
          <p className="font-mono text-xs text-muted">
            <span className="text-signal">{project.hash}</span> · {project.year} · {project.role}
          </p>
          <h1 className="mt-3 text-balance font-display text-4xl font-semibold tracking-tight sm:text-6xl">
            {project.name}
          </h1>
          <p className="mt-5 max-w-xl text-balance text-lg leading-relaxed text-muted">
            {project.oneLiner}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-signal px-6 py-3 font-mono text-xs uppercase tracking-wider text-ink"
            >
              Live site
            </a>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line px-6 py-3 font-mono text-xs uppercase tracking-wider transition-colors hover:border-signal hover:text-signal"
            >
              Source code
            </a>
          </div>
        </Reveal>

       <div className="mt-16 relative aspect-video w-full overflow-hidden rounded-2xl border border-line"> <Image
  src={`/projects/${project.slug}.png`}
  alt={`${project.name} preview`}
  fill
  sizes="(max-width: 768px) 100vw, 768px"
  className="object-cover"
/> </div>

        <div className="mt-16 grid gap-16">
          <Reveal>
            <h2 className="font-mono text-xs uppercase tracking-wider text-signal">The problem</h2>
            <p className="mt-4 text-balance text-lg leading-relaxed text-muted">{project.problem}</p>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-mono text-xs uppercase tracking-wider text-signal">The approach</h2>
            <p className="mt-4 text-balance text-lg leading-relaxed text-muted">{project.approach}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-mono text-xs uppercase tracking-wider text-signal">Key decisions</h2>
            <ul className="mt-4 space-y-3">
              {project.decisions.map((decision) => (
                <li key={decision} className="flex items-start gap-3 text-lg leading-relaxed text-muted">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                  {decision}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <h2 className="font-mono text-xs uppercase tracking-wider text-signal">Outcome</h2>
            <p className="mt-4 text-balance text-lg leading-relaxed text-muted">{project.outcome}</p>
          </Reveal>
        </div>

        <div className="mt-20 border-t border-line pt-10">
          <p className="font-mono text-xs uppercase tracking-wider text-muted">Next project</p>
          <MagneticLink
            href={`/projects/${next.slug}`}
            className="mt-3 inline-block font-display text-3xl font-semibold tracking-tight text-signal sm:text-5xl"
          >
            {next.name} →
          </MagneticLink>
        </div>
      </div>
    </article>
  );
}
