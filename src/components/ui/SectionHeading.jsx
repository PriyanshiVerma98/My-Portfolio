import Reveal from "@/components/ui/Reveal";

export default function SectionHeading({ hash, eyebrow, title, description }) {
  return (
    <Reveal className="max-w-2xl">
      <p className="mb-4 font-mono text-xs uppercase tracking-wider text-signal">
        {hash ? <span className="text-muted">{hash} </span> : null}
        {eyebrow}
      </p>
      <h2 className="text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-balance text-base leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
