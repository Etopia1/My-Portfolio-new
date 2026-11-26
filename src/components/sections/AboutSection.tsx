"use client";

import { motion } from "framer-motion";
import { Award, Compass, Cpu, Target, Wrench } from "lucide-react";
import { ABOUT_PROFILE, CERTIFICATIONS } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PILLAR_ICONS = [Wrench, Compass, Cpu, Target];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 py-20 sm:py-24 bg-[var(--bg-primary)]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left column: Biography & Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            <SectionHeading
              eyebrow="About Me"
              title={ABOUT_PROFILE.headline}
            />

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
              {ABOUT_PROFILE.biography.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="glass-panel rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-primary)]">
                <Award className="h-4 w-4" />
                <span>Verified Certifications</span>
              </div>
              <div className="grid gap-2.5">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.title}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-4 py-3"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-[var(--text-primary)]">
                      {cert.title}
                    </span>
                    <span className="text-[11px] font-mono text-[var(--text-muted)]">
                      {cert.issuer} · {cert.mode}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column: 4 Engineering Pillars */}
          <div className="lg:col-span-6 grid gap-4 sm:grid-cols-2">
            {ABOUT_PROFILE.pillars.map((pillar, idx) => {
              const Icon = PILLAR_ICONS[idx % PILLAR_ICONS.length];
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                  className="glass-panel card-interactive flex flex-col justify-between rounded-xl p-6"
                >
                  <div className="space-y-3.5">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent-primary)]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="text-base font-semibold text-[var(--text-primary)]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">
                      {pillar.body}
                    </p>
                  </div>
                  <div className="mt-5 flex items-center justify-between border-t border-[var(--border-subtle)] pt-3 text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
                    <span>Principle 0{idx + 1}</span>
                    <span className="text-[var(--accent-primary)]">Core</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
