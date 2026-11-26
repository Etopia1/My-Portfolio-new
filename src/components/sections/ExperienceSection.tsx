"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { EDUCATION, EXPERIENCE } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || !containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".timeline-item", {
        opacity: 0,
        y: 24,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative scroll-mt-24 border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]/55 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Experience & Education"
          title="Background & Credentials"
          description="Four years of independent full-stack software delivery alongside international QA testing, AI evaluation, and ongoing Statistics & Software Development degrees."
        />

        <div className="grid gap-10 lg:grid-cols-12">
          {/* Experience Timeline */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-primary)]">
              <Briefcase className="h-4 w-4" />
              <span>Professional Experience</span>
            </div>

            <div className="relative space-y-6 border-l border-[var(--border-strong)] pl-6 sm:pl-8">
              {EXPERIENCE.map((item) => (
                <article
                  key={item.id}
                  className="timeline-item glass-panel relative rounded-xl p-6"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -left-[31px] sm:-left-[39px] top-7 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-[var(--accent-primary)] bg-[var(--bg-primary)]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-primary)]" />
                  </span>

                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <span className="inline-block rounded bg-[var(--accent-soft)] px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[var(--accent-primary)] mb-1.5">
                        {item.type}
                      </span>
                      <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                        {item.role}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-[var(--text-secondary)]">
                        {item.organization}
                      </p>
                    </div>
                    <div className="text-left sm:text-right font-mono text-xs text-[var(--text-muted)] space-y-1">
                      <p className="text-[var(--text-primary)] font-medium">
                        {item.period}
                      </p>
                      <p className="inline-flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span>{item.location}</span>
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">
                    {item.summary}
                  </p>

                  <ul className="mt-3.5 space-y-1.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <span className="mt-2 h-1 w-1 rounded-full bg-[var(--accent-primary)] shrink-0" />
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-1.5 border-t border-[var(--border-subtle)] pt-3.5">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-2 py-0.5 text-[10px] font-mono text-[var(--text-secondary)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Education Track */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-primary)]">
              <GraduationCap className="h-4 w-4" />
              <span>Education</span>
            </div>

            <div className="space-y-4">
              {EDUCATION.map((edu) => (
                <article
                  key={edu.id}
                  className="timeline-item glass-panel rounded-xl p-6 space-y-3"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded bg-[var(--accent-soft)] px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[var(--accent-primary)]">
                      {edu.status}
                    </span>
                    <span className="text-[11px] font-mono text-[var(--text-muted)]">
                      {edu.location}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold leading-snug text-[var(--text-primary)]">
                    {edu.institution}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                    {edu.program}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {edu.focus.map((topic) => (
                      <span
                        key={topic}
                        className="rounded border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-2 py-0.5 text-[11px] text-[var(--text-secondary)]"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
