"use client";

import Link from "next/link";
import { ArrowRight, ArrowUp } from "lucide-react";
import { PROJECTS, SITE_CONFIG } from "@/data/portfolio";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="no-print border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="group inline-flex items-center">
              <BrandLogo size="sm" />
            </Link>
            <p className="max-w-xs text-xs leading-relaxed text-[var(--text-secondary)]">
              Engineering scalable full-stack web applications, real-time
              backends, and evaluated AI systems from Lagos, Nigeria for remote
              teams worldwide.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--text-primary)]">
              Navigation
            </p>
            <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
              <li>
                <Link href="/" className="hover:text-[var(--accent-primary)] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-[var(--accent-primary)] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-[var(--accent-primary)] transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[var(--accent-primary)] transition-colors">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Case Studies */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--text-primary)]">
              Resources
            </p>
            <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
              <li>
                <Link href="/#process" className="hover:text-[var(--accent-primary)] transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="hover:text-[var(--accent-primary)] transition-colors">
                  Tech Stack
                </Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-[var(--accent-primary)] transition-colors">
                  Resume / CV
                </Link>
              </li>
              <li>
                <Link href={`/projects/${PROJECTS[0].slug}`} className="hover:text-[var(--accent-primary)] transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--text-primary)]">
              Follow
            </p>
            <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
              <li>
                <a
                  href={SITE_CONFIG.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent-primary)] transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent-primary)] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-[var(--accent-primary)] transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.social.previousPortfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent-primary)] transition-colors"
                >
                  Archive Portfolio
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Action Box matching bottom-right reference footer */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--text-primary)]">
              Work Together
            </p>
            <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
              Open to remote full-stack roles, API builds, and AI evaluation.
            </p>
            <Link
              href="/#contact"
              className="inline-flex w-full items-center justify-between rounded-md border border-[var(--border-subtle)] bg-[var(--bg-card)] px-3 py-2 text-xs font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent-primary)]"
            >
              <span>Start a conversation</span>
              <span className="flex h-6 w-6 items-center justify-center rounded bg-[var(--accent-primary)] text-white">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[var(--border-subtle)] pt-6 text-xs text-[var(--text-muted)] sm:flex-row sm:items-center">
          <p>
            © {year} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/resume" className="hover:text-[var(--text-primary)]">
              Printable CV
            </Link>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-primary)]"
            >
              <span>Back to top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
