"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const commits = [
  { id: "hero", hash: "0a1f9c2", message: "feat: intro" },
  { id: "work", hash: "7bd4e10", message: "feat: projects" },
  { id: "stack", hash: "3c88f01", message: "chore: stack" },
  { id: "achievements", hash: "b02d9e4", message: "feat: achievements" },
  { id: "about", hash: "f4a71c0", message: "docs: about" },
  { id: "contact", hash: "e91b6a3", message: "feat: contact" },
];

// The rail is a git-log metaphor for the page itself: each section is
// a "commit" in the build history of this site, in the real order it
// was written — a structural device grounded in what a developer's
// portfolio actually is, rather than a decorative numbered list.
export default function CommitRail() {
  const fillRef = useRef(null);
  const [positions, setPositions] = useState([]);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    function measure() {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const next = commits.map((c) => {
        const el = document.getElementById(c.id);
        if (!el || docHeight <= 0) return { ...c, pct: 0 };
        const top = el.getBoundingClientRect().top + window.scrollY;
        return { ...c, pct: Math.min(100, (top / docHeight) * 100) };
      });
      setPositions(next);
    }

    measure();
    window.addEventListener("resize", measure);

    let trigger;
    if (!prefersReducedMotion) {
      gsap.registerPlugin(ScrollTrigger);
      trigger = ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
        onUpdate: (self) => {
          if (fillRef.current) {
            fillRef.current.style.height = `${self.progress * 100}%`;
          }
        },
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    commits.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("resize", measure);
      trigger?.kill();
      observer.disconnect();
    };
  }, []);

  return (
    <aside
      aria-hidden="true"
      className="pointer-events-none fixed left-10 top-0 z-40 hidden h-screen lg:block"
    >
      <div className="relative flex h-full items-center">
        <div className="relative h-[70vh] w-px bg-line">
          <div
            ref={fillRef}
            className="absolute top-0 left-0 w-px bg-signal"
            style={{ height: "0%" }}
          />
          {positions.map((c) => (
            <div
              key={c.id}
              className="group pointer-events-auto absolute -left-[3px] flex items-center"
              style={{ top: `${c.pct}%` }}
            >
              <span
                className={`block h-[7px] w-[7px] rounded-full border transition-colors ${
                  active === c.id
                    ? "border-signal bg-signal"
                    : "border-ash bg-bg"
                }`}
              />
              <span className="pointer-events-none absolute left-4 whitespace-nowrap rounded bg-surface px-2 py-1 font-mono text-[10px] text-muted opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
                <span className="text-signal">{c.hash}</span> {c.message}
              </span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
