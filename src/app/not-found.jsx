import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-wider text-signal">
        404: git checkout not-found
      </p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-md text-muted">
        The page you&apos;re looking for was never committed. Let&apos;s get
        you back to something that ships.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-signal px-6 py-3 font-mono text-xs uppercase tracking-wider text-ink"
      >
        Back home
      </Link>
    </section>
  );
}
