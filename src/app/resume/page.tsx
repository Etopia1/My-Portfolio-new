import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  FileDown,
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import {
  CERTIFICATIONS,
  EDUCATION,
  EXPERIENCE,
  PROJECTS,
  SITE_CONFIG,
  SKILL_CATEGORIES,
} from "@/data/portfolio";
import { PrintButton } from "@/components/ui/PrintButton";

export const metadata: Metadata = {
  title: "Resume / CV",
  description: `Standard Curriculum Vitae for ${SITE_CONFIG.name} — ${SITE_CONFIG.title}.`,
};

export default function ResumePage() {
  return (
    <section className="pt-28 pb-20 sm:pt-32 bg-[var(--bg-primary)]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Action Bar */}
        <div className="no-print flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-card)] px-4 py-2 text-xs font-medium text-[var(--text-secondary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2.5">
            <PrintButton />
            <a
              href={SITE_CONFIG.cvPath}
              download="Andrew-Etopia-CV.pdf"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--accent-primary)] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[var(--accent-primary-hover)]"
            >
              <FileDown className="h-3.5 w-3.5" />
              <span>Download Standard PDF CV</span>
            </a>
          </div>
        </div>

        {/* Standard Executive Tech CV Sheet */}
        <div className="glass-panel rounded-2xl p-6 sm:p-10 space-y-7 print:border-0 print:shadow-none print:p-0">
          {/* Centered Standard CV Header */}
          <header className="border-b border-[var(--border-strong)] pb-5 text-center space-y-2">
            <h1 className="font-serif-display text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
              {SITE_CONFIG.name.toUpperCase()}
            </h1>
            <p className="text-sm sm:text-base font-semibold text-[var(--accent-primary)]">
              {SITE_CONFIG.title} · {SITE_CONFIG.secondaryTitle}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-[var(--text-secondary)] pt-1">
              <span>{SITE_CONFIG.location} (Remote Worldwide)</span>
              <span>|</span>
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="inline-flex items-center gap-1 hover:text-[var(--accent-primary)]"
              >
                <Phone className="h-3 w-3" />
                <span>{SITE_CONFIG.phone}</span>
              </a>
              <span>|</span>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="inline-flex items-center gap-1 hover:text-[var(--accent-primary)]"
              >
                <Mail className="h-3 w-3" />
                <span>{SITE_CONFIG.email}</span>
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-[var(--text-secondary)]">
              <a
                href={SITE_CONFIG.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-[var(--accent-primary)]"
              >
                <Github className="h-3 w-3" />
                <span>github.com/Etopia1 (45 Public Repositories)</span>
              </a>
              <span>|</span>
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-[var(--accent-primary)]"
              >
                <Linkedin className="h-3 w-3" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="space-y-2">
            <h2 className="border-b border-[var(--border-subtle)] pb-1 text-xs font-bold uppercase tracking-[0.16em] text-[var(--accent-primary)]">
              Professional Summary
            </h2>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              Results-oriented Full-Stack Software Engineer and AI Evaluation /
              QA Specialist with 4+ years of hands-on experience designing,
              building, and deploying scalable web and mobile applications,
              decoupled REST/WebSocket backends, workflow automations, and
              evaluated AI systems. Maintains 45+ public GitHub repositories and
              6 live production Vercel deployments across TypeScript, React,
              Next.js, Node.js/Express, Python/Django, PostgreSQL, MongoDB,
              Redis, Socket.IO, Mapbox GL, and Stripe/Paystack integrations.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="space-y-2.5">
            <h2 className="border-b border-[var(--border-subtle)] pb-1 text-xs font-bold uppercase tracking-[0.16em] text-[var(--accent-primary)]">
              Technical Skills &amp; Core Competencies
            </h2>
            <div className="space-y-1.5 text-xs sm:text-sm text-[var(--text-secondary)]">
              {SKILL_CATEGORIES.map((category) => (
                <p key={category.id} className="leading-relaxed">
                  <strong className="font-semibold text-[var(--text-primary)]">
                    {category.label}:{" "}
                  </strong>
                  {category.items.map((item) => item.name).join(" · ")}
                </p>
              ))}
            </div>
          </section>

          {/* Professional Experience */}
          <section className="space-y-4">
            <h2 className="border-b border-[var(--border-subtle)] pb-1 text-xs font-bold uppercase tracking-[0.16em] text-[var(--accent-primary)]">
              Professional Experience
            </h2>
            <div className="space-y-5">
              {EXPERIENCE.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-sm sm:text-base font-semibold text-[var(--text-primary)]">
                      {exp.role}{" "}
                      <span className="font-normal text-[var(--text-secondary)]">
                        — {exp.organization}
                      </span>
                    </h3>
                    <span className="text-xs font-mono text-[var(--text-muted)]">
                      {exp.location} | {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-[var(--text-secondary)]">
                    {exp.highlights.map((bullet) => (
                      <li key={bullet} className="leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Selected Technical Projects with Live & GitHub Links */}
          <section className="space-y-3">
            <h2 className="border-b border-[var(--border-subtle)] pb-1 text-xs font-bold uppercase tracking-[0.16em] text-[var(--accent-primary)]">
              Selected Technical Projects &amp; Live Deployments
            </h2>
            <div className="space-y-3">
              {PROJECTS.map((project) => (
                <div key={project.slug} className="space-y-0.5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--accent-primary)]"
                      >
                        {project.title}
                      </Link>
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-0.5 text-[11px] font-mono text-[var(--accent-primary)] hover:underline"
                        >
                          <ExternalLink className="h-3 w-3" />
                          <span>Live</span>
                        </a>
                      ) : null}
                      {project.repoUrl ? (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-0.5 text-[11px] font-mono text-[var(--text-muted)] hover:text-[var(--accent-primary)]"
                        >
                          <Github className="h-3 w-3" />
                          <span>Repo</span>
                        </a>
                      ) : null}
                    </div>
                    <span className="text-[11px] font-mono text-[var(--text-muted)]">
                      {project.technologies.join(" · ")}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Education & Certifications */}
          <section className="grid gap-6 sm:grid-cols-2 border-t border-[var(--border-subtle)] pt-5">
            <div className="space-y-2.5">
              <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--accent-primary)]">
                Education
              </h2>
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="space-y-0.5">
                  <p className="text-xs sm:text-sm font-semibold text-[var(--text-primary)]">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)]">
                    {edu.program}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-2.5">
              <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--accent-primary)]">
                Certifications
              </h2>
              <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                {CERTIFICATIONS.map((cert) => (
                  <li key={cert.title}>
                    <span className="font-semibold text-[var(--text-primary)]">
                      {cert.title}
                    </span>{" "}
                    — {cert.issuer} ({cert.mode})
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
