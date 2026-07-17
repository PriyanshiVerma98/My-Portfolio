

import { site, timeline, certifications, aboutStats } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section id="about" className="px-6 py-24 lg:pl-24 lg:pr-10 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading hash="f4a71c0" eyebrow="docs: about" title="About" />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal delay={0.1}>
            <p className="text-balance text-lg leading-relaxed text-muted">
              {site.summary}
            </p>
            <p className="mt-5 text-balance leading-relaxed text-muted">
              Outside of shipping projects, I spend a lot of time in the
              editor solving problems — 100+ and counting on GeeksforGeeks
              and LeetCode — because I&apos;d rather understand how something
              works underneath than just get it working. I&apos;ve also taken
              that habit into hackathons, competing at HackOrbit and the
              internal round of Smart India Hackathon.
            </p>

            <div className="mt-8">
              <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">
                Certifications
              </p>
              <ul className="space-y-2">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-2 text-sm text-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.15} className="rounded-2xl border border-line bg-surface/60 p-6">
              <dl className="divide-y divide-line">
                {aboutStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0"
                  >
                    <dt className="font-mono text-xs uppercase tracking-wider text-muted">
                      {stat.label}
                    </dt>
                    <dd className="text-right font-display text-sm font-semibold">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.25}>
              <ol className="mt-10 space-y-8 border-l border-line pl-6">
                {timeline.map((item) => (
                  <li key={item.hash} className="relative">
                    <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full border border-signal bg-bg" />
                    <p className="font-mono text-xs text-muted">
                      <span className="text-signal">{item.hash}</span> · {item.date}
                    </p>
                    <p className="mt-1 font-display text-lg font-semibold">
                      {item.title}
                    </p>
                    <p className="text-sm text-muted">{item.place}</p>
                    <p className="mt-1 text-sm text-muted">{item.detail}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}