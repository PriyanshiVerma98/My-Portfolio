import { site } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line px-6 py-10 lg:pl-24 lg:pr-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="font-mono text-xs text-muted">
          © {year} {site.name}. Built with Next.js &amp; Tailwind CSS.
        </div>
        <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-wider">
          <a href={site.github} target="_blank" rel="noreferrer" className="text-muted transition-colors hover:text-signal">
            GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="text-muted transition-colors hover:text-signal">
            LinkedIn
          </a>
          <a href={`mailto:${site.email}`} className="text-muted transition-colors hover:text-signal">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
