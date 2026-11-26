import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cpu,
  ExternalLink,
  GitBranch,
  Github,
  Layers,
  Wrench,
} from "lucide-react";
import { PROJECTS, SITE_CONFIG } from "@/data/portfolio";
import { ProjectVisual } from "@/components/ui/ProjectVisual";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} | ${SITE_CONFIG.name}`,
      description: project.description,
    },
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: CaseStudyPageProps) {
  const { slug } = await params;
  const index = PROJECTS.findIndex((p) => p.slug === slug);

  if (index === -1) {
    notFound();
  }

  const project = PROJECTS[index];
  const prevProject = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(index + 1) % PROJECTS.length];

  return (
    <article className="pt-28 pb-24 sm:pt-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Breadcrumb */}
        <div>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] px-4 py-2 text-xs font-mono text-[var(--text-secondary)] transition-colors hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Header */}
        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            {project.category.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/10 px-3 py-1 text-xs font-mono text-[var(--accent-primary)]"
              >
                {cat}
              </span>
            ))}
            <span className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] px-3 py-1 text-xs font-mono text-[var(--text-muted)]">
              {project.role}
            </span>
          </div>

          <h1 className="font-serif-display text-3xl sm:text-5xl font-normal tracking-tight text-[var(--text-primary)]">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl leading-relaxed text-[var(--text-secondary)]">
            {project.tagline}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--text-primary)] px-5 py-3 text-sm font-semibold text-[var(--bg-primary)] transition-opacity hover:opacity-90"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Open Live Demo</span>
              </a>
            ) : (
              <Link
                href={`/?inquiry=${encodeURIComponent(project.title)}#contact`}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--text-primary)] px-5 py-3 text-sm font-semibold text-[var(--bg-primary)] transition-opacity hover:opacity-90"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Request Walkthrough / Live Demo</span>
              </Link>
            )}

            <a
              href={project.repoUrl ?? SITE_CONFIG.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--bg-card)] px-5 py-3 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
            >
              <Github className="h-4 w-4" />
              <span>
                {project.repoUrl ? "Frontend Repository" : "View GitHub Profile"}
              </span>
            </a>

            {project.backendRepoUrl ? (
              <a
                href={project.backendRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--bg-card)] px-5 py-3 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
              >
                <GitBranch className="h-4 w-4" />
                <span>Backend Repository</span>
              </a>
            ) : null}
          </div>
        </header>

        {/* System Preview */}
        <ProjectVisual theme={project.visualTheme} title={project.title} />

        {/* Problem + Description */}
        <section className="grid gap-6 md:grid-cols-2">
          <div className="glass-panel rounded-2xl p-6 sm:p-7 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--accent-secondary)]">
              <Wrench className="h-4 w-4" />
              <span>Problem Being Solved</span>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
              {project.problemSolved}
            </p>
          </div>

          <div className="glass-panel rounded-2xl p-6 sm:p-7 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)]">
              <Layers className="h-4 w-4" />
              <span>Solution Overview</span>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
              {project.description}
            </p>
          </div>
        </section>

        {/* System Data Flow */}
        <section className="glass-panel rounded-3xl p-6 sm:p-8 space-y-5">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)]">
            <GitBranch className="h-4 w-4" />
            <span>Execution &amp; Data Flow</span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {project.dataFlow.map((step, idx) => (
              <div
                key={step}
                className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-primary)]/60 p-4 space-y-2"
              >
                <span className="inline-block font-mono text-xs font-semibold text-[var(--accent-primary)]">
                  STEP 0{idx + 1}
                </span>
                <p className="text-sm leading-relaxed text-[var(--text-primary)]">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Features + Architecture Highlights */}
        <section className="grid gap-6 md:grid-cols-2">
          <div className="glass-panel rounded-2xl p-6 sm:p-7 space-y-4">
            <h2 className="text-xl font-semibold text-[var(--text-primary)]">
              Key Features Implemented
            </h2>
            <ul className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
              {project.keyFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[var(--accent-primary)] shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel rounded-2xl p-6 sm:p-7 space-y-4">
            <h2 className="text-xl font-semibold text-[var(--text-primary)]">
              Architecture Highlights
            </h2>
            <ul className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
              {project.architectureHighlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Cpu className="mt-0.5 h-4 w-4 text-[var(--accent-secondary)] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Engineering Challenges */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
            Engineering Challenges &amp; Decisions
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {project.engineeringChallenges.map((entry) => (
              <div
                key={entry.challenge}
                className="glass-panel rounded-2xl p-6 space-y-3"
              >
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-amber-500 dark:text-amber-300">
                    Challenge
                  </span>
                  <p className="mt-1 text-sm font-medium text-[var(--text-primary)]">
                    {entry.challenge}
                  </p>
                </div>
                <div className="border-t border-[var(--border-subtle)] pt-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--accent-primary)]">
                    Approach
                  </span>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {entry.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Used */}
        <section className="glass-panel rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
            Technologies Used
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)]/70 px-3 py-1.5 text-xs font-mono text-[var(--text-primary)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Previous / Next Navigation */}
        <nav
          aria-label="Case study pagination"
          className="grid gap-4 border-t border-[var(--border-subtle)] pt-8 sm:grid-cols-2"
        >
          <Link
            href={`/projects/${prevProject.slug}`}
            className="glass-panel card-interactive rounded-2xl p-5 flex items-center justify-between gap-4"
          >
            <div>
              <span className="text-[11px] font-mono text-[var(--text-muted)]">
                PREVIOUS CASE STUDY
              </span>
              <p className="mt-1 text-base font-semibold text-[var(--text-primary)]">
                {prevProject.title}
              </p>
            </div>
            <ArrowLeft className="h-4 w-4 text-[var(--accent-primary)] shrink-0" />
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="glass-panel card-interactive rounded-2xl p-5 flex items-center justify-between gap-4 text-right"
          >
            <ArrowRight className="h-4 w-4 text-[var(--accent-primary)] shrink-0" />
            <div>
              <span className="text-[11px] font-mono text-[var(--text-muted)]">
                NEXT CASE STUDY
              </span>
              <p className="mt-1 text-base font-semibold text-[var(--text-primary)]">
                {nextProject.title}
              </p>
            </div>
          </Link>
        </nav>
      </div>
    </article>
  );
}
