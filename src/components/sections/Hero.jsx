"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { site } from "@/lib/data";
import MagneticLink from "@/components/ui/MagneticLink";

export default function Hero() {
  const rootRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set("[data-hero-line]", { opacity: 1, y: 0 });
        gsap.set("[data-hero-fade]", { opacity: 1, y: 0 });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.fromTo(
        "[data-hero-line]",
        { yPercent: 130, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.1, stagger: 0.08 }
      ).fromTo(
        "[data-hero-fade]",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.08 },
        "-=0.5"
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={rootRef}
      className="relative flex min-h-[92vh] flex-col justify-center px-6 pt-24 lg:pl-24 lg:pr-10"
    >
      <div className="mx-auto w-full max-w-6xl">
        <p
          data-hero-fade
          className="mb-6 font-mono text-sm uppercase tracking-wider text-muted"
        >
          {site.name} · {site.role} · {site.location}
        </p>

        <h1 className="font-display text-[13vw] font-semibold leading-[0.95] tracking-tight sm:text-[9vw] lg:text-[6.4vw]">
          <span className="block overflow-hidden">
            <span data-hero-line className="block">
              I build full-stack
            </span>
          </span>
          <span className="block overflow-hidden">
            <span data-hero-line className="block text-signal">
              products, end to end.
            </span>
          </span>
        </h1>

        <p
          data-hero-fade
          className="mt-8 max-w-xl text-balance text-lg leading-relaxed text-muted"
        >
          Final-year B.Tech Information Technology student and MERN Stack Developer passionate about building scalable, user-centric web applications. Experienced in React.js, Node.js, Express.js, and MongoDB, with strong foundations in Java, Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, and Computer Networks.
        </p>

        <div data-hero-fade className="mt-10 flex flex-wrap items-center gap-4">
          <MagneticLink
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 font-mono text-xs uppercase tracking-wider text-ink transition-transform"
          >
            View work
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 4v16M12 20l6-6M12 20l-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </MagneticLink>
          <MagneticLink
            href={site.resumeUrl}
            external
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-xs uppercase tracking-wider transition-colors hover:border-signal hover:text-signal"
          >
            Resume
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </MagneticLink>
        </div>
      </div>
    </section>
  );
}
