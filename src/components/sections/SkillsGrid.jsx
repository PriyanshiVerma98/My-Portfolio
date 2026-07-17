import { skillCategories } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const icons = {
  code: (
    <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 5l-2 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  ),
  web: (
    <>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M3.5 12h17M12 3.5c2.2 2.3 3.5 5.3 3.5 8.5s-1.3 6.2-3.5 8.5c-2.2-2.3-3.5-5.3-3.5-8.5s1.3-6.2 3.5-8.5Z" stroke="currentColor" strokeWidth="1.6" fill="none" />
    </>
  ),
  backend: (
    <>
      <rect x="4" y="4" width="16" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <rect x="4" y="14" width="16" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <circle cx="7.5" cy="7" r="0.9" fill="currentColor" />
      <circle cx="7.5" cy="17" r="0.9" fill="currentColor" />
    </>
  ),
  db: (
    <>
      <ellipse cx="12" cy="6" rx="7.5" ry="2.6" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M4.5 6v12c0 1.4 3.4 2.6 7.5 2.6s7.5-1.2 7.5-2.6V6" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M4.5 12c0 1.4 3.4 2.6 7.5 2.6s7.5-1.2 7.5-2.6" stroke="currentColor" strokeWidth="1.6" fill="none" />
    </>
  ),
  cpu: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.2" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M9.5 3.5v3M14.5 3.5v3M9.5 17.5v3M14.5 17.5v3M3.5 9.5h3M3.5 14.5h3M17.5 9.5h3M17.5 14.5h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  tools: (
    <path d="M14.5 6.5a3 3 0 1 0-4.2 4.2L4 17l3 3 6.3-6.3a3 3 0 0 0 4.2-4.2l-2 2-2-1-1-2 2-2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
  ),
};

export default function SkillsGrid() {
  return (
    <section className="px-6 pb-24 lg:pl-24 lg:pr-10 lg:pb-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          hash="3c88f01"
          eyebrow="chore: stack"
          title="Tools & technologies"
          description="Grouped by where they show up in the stack — from language fundamentals to what actually ships to production."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <Reveal key={category.label} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-line bg-surface/60 p-6 transition-colors hover:border-signal/50">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-signal">
                    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                      {icons[category.icon]}
                    </svg>
                  </span>
                  <h3 className="font-display text-base font-semibold">
                    {category.label}
                  </h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted transition-colors hover:border-signal hover:text-signal"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}