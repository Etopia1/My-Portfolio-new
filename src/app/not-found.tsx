import Link from "next/link";
import { ArrowLeft, FolderGit2, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[82vh] items-center justify-center px-4 pt-28 pb-20 sm:px-6 lg:px-8">
      <div className="glass-panel max-w-xl w-full rounded-3xl p-8 sm:p-12 text-center space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/10 px-4 py-1.5 text-xs font-mono text-[var(--accent-primary)]">
          <span>ERROR 404 · ROUTE NOT FOUND</span>
        </div>

        <h1 className="font-serif-display text-4xl sm:text-5xl font-normal tracking-tight text-[var(--text-primary)]">
          This endpoint doesn&apos;t exist.
        </h1>

        <p className="text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
          The page or case study you requested may have moved, or the URL might
          have a typo. Head back to the main portfolio or explore my featured
          engineering case studies.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--text-primary)] px-5 py-3 text-sm font-semibold text-[var(--bg-primary)] transition-opacity hover:opacity-90"
          >
            <Home className="h-4 w-4" />
            <span>Back Home</span>
          </Link>

          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--bg-card)] px-5 py-3 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
          >
            <FolderGit2 className="h-4 w-4" />
            <span>View Projects</span>
          </Link>

          <Link
            href="/resume"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Open Resume</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
