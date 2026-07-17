import { site } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticLink from "@/components/ui/MagneticLink";
import Reveal from "@/components/ui/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 lg:pl-24 lg:pr-10 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading hash="e91b6a3" eyebrow="feat: contact" title="Let's build something" />

        <Reveal delay={0.15} className="mt-10">
          <MagneticLink
            href={`mailto:${site.email}`}
            className="inline-block text-balance font-display text-4xl font-semibold tracking-tight text-signal sm:text-6xl lg:text-7xl"
          >
            {site.email}
          </MagneticLink>
        </Reveal>

        <Reveal delay={0.25} className="mt-10 flex flex-wrap gap-4">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line px-6 py-3 font-mono text-xs uppercase tracking-wider transition-colors hover:border-signal hover:text-signal"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line px-6 py-3 font-mono text-xs uppercase tracking-wider transition-colors hover:border-signal hover:text-signal"
          >
            LinkedIn
          </a>
          <a
            href={`tel:${site.phone}`}
            className="rounded-full border border-line px-6 py-3 font-mono text-xs uppercase tracking-wider transition-colors hover:border-signal hover:text-signal"
          >
            {site.phone}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
