"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, FolderGit2, GitBranch, Github, Layers } from "lucide-react";
import { GITHUB_SPOTLIGHTS, SITE_CONFIG } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function GitHubSection() {
  return (
    <section
      id="github"
      className="relative scroll-mt-24 border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]/55 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Open Source & Architecture"
            title="GitHub Engineering Profile"
            description={`Explore ${SITE_CONFIG.githubStats.publicRepos} public repositories on github.com/${SITE_CONFIG.githubStats.username}—organized into decoupled frontend clients and production-ready Express, TypeScript, and Python/Django backends.`}
          />

          <a
            href={SITE_CONFIG.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start rounded-md bg-[var(--accent-primary)] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[var(--accent-primary-hover)] shrink-0"
          >
            <Github className="h-4 w-4" />
            <span>Visit github.com/{SITE_CONFIG.githubStats.username}</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Summary Architecture Strip */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="glass-panel rounded-xl p-5 space-y-1">
            <p className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
              Public Repositories
            </p>
            <p className="font-serif-display text-3xl text-[var(--text-primary)]">
              {SITE_CONFIG.githubStats.publicRepos}
            </p>
            <p className="text-xs text-[var(--text-secondary)]">
              Active since {SITE_CONFIG.githubStats.memberSince}
            </p>
          </div>
          <div className="glass-panel rounded-xl p-5 space-y-1">
            <p className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
              Primary Languages
            </p>
            <p className="font-serif-display text-2xl text-[var(--text-primary)]">
              TS · JS · Python
            </p>
            <p className="text-xs text-[var(--text-secondary)]">
              Next.js, React, Express 5 &amp; Django REST
            </p>
          </div>
          <div className="glass-panel rounded-xl p-5 space-y-1">
            <p className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
              Architecture Pattern
            </p>
            <p className="font-serif-display text-2xl text-[var(--text-primary)]">
              Client + API Pairs
            </p>
            <p className="text-xs text-[var(--text-secondary)]">
              Decoupled frontend &amp; backend services
            </p>
          </div>
          <div className="glass-panel rounded-xl p-5 space-y-1">
            <p className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
              Live Vercel Apps
            </p>
            <p className="font-serif-display text-3xl text-[var(--text-primary)]">
              {SITE_CONFIG.githubStats.liveDeployments} Verified
            </p>
            <p className="text-xs text-[var(--text-secondary)]">
              Production frontends linked below
            </p>
          </div>
        </div>

        {/* Decoupled Frontend + Backend Repository Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {GITHUB_SPOTLIGHTS.map((repo, idx) => (
            <motion.article
              key={repo.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="glass-panel card-interactive flex flex-col justify-between rounded-xl p-5 space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-0.5">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[var(--accent-primary)]">
                      <Layers className="h-3 w-3" />
                      <span>{repo.domain}</span>
                    </span>
                    <h3 className="text-sm font-bold text-[var(--text-primary)] font-mono">
                      {repo.name}
                    </h3>
                    {repo.pairName ? (
                      <p className="inline-flex items-center gap-1 text-[11px] font-mono text-[var(--text-muted)]">
                        <GitBranch className="h-3 w-3 text-[var(--accent-primary)]" />
                        <span>+ {repo.pairName}</span>
                      </p>
                    ) : null}
                  </div>
                  <span className="rounded bg-[var(--accent-soft)] px-2 py-0.5 text-[10px] font-mono text-[var(--accent-primary)] shrink-0">
                    {repo.language}
                  </span>
                </div>

                <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                  {repo.summary}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {repo.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-2 py-0.5 text-[10px] font-mono text-[var(--text-secondary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[var(--border-subtle)] pt-3 text-xs">
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={repo.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-[var(--text-primary)] hover:text-[var(--accent-primary)]"
                  >
                    <FolderGit2 className="h-3.5 w-3.5" />
                    <span>Frontend</span>
                  </a>
                  {repo.backendUrl ? (
                    <a
                      href={repo.backendUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-[var(--text-secondary)] hover:text-[var(--accent-primary)]"
                    >
                      <GitBranch className="h-3.5 w-3.5" />
                      <span>Backend</span>
                    </a>
                  ) : null}
                </div>

                {repo.liveUrl ? (
                  <a
                    href={repo.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-[var(--accent-primary)] hover:underline"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>Live App</span>
                  </a>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
