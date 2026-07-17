"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="grid gap-6 rounded-2xl border border-line bg-surface/60 p-6 transition-colors hover:border-signal/60 sm:grid-cols-[1fr_1.4fr] sm:p-8"
      >
        <div className="flex flex-col justify-between">
          <div>
            <p className="font-mono text-xs text-muted">
              <span className="text-signal"></span> · {project.year}
            </p>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              {project.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {project.oneLiner}
            </p>
          </div>

          <span className="mt-6 inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-wider text-signal">
            View case study
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>

        <div className="flex flex-wrap content-start gap-2 sm:justify-end">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </Link>
    </motion.article>
  );
}
