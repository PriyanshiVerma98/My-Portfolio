"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { achievements } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

function Counter({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState("0");

  const numeric = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!inView) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || numeric === 0) {
      // This effect only runs once the counter scrolls into view; setting
      // the final value directly (skipping the count-up) is intentional.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDisplay(value);
      return;
    }

    let frame;
    const duration = 1200;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(`${Math.round(eased * numeric)}${suffix}`);
      if (progress < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, numeric, suffix, value]);

  return (
    <span ref={ref} className="font-display text-5xl font-semibold text-signal sm:text-6xl">
      {display}
    </span>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="px-6 py-24 lg:pl-24 lg:pr-10 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          hash="b02d9e4"
          eyebrow="feat: achievements"
          title="Numbers, not adjectives"
          description="Achievements and progress that hold up on their own — track record over promises."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {achievements.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-line bg-surface/60 p-8"
            >
              <Counter value={item.stat} />
              <p className="mt-3 font-display text-base font-semibold">{item.label}</p>
              <p className="mt-1 text-sm text-muted">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
