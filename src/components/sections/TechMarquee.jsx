import { techStack } from "@/lib/data";

export default function TechMarquee() {
  const items = [...techStack, ...techStack];

  return (
    <section id="stack" className="border-y border-line py-8">
      <div className="group flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {items.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="flex items-center gap-3 whitespace-nowrap font-display text-2xl font-medium text-muted/70 sm:text-3xl"
            >
              {tech}
              <span className="text-signal" aria-hidden="true">
                /
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
