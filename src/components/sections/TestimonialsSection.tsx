"use client";

import Link from "next/link";
import { ShieldCheck, UserCheck } from "lucide-react";
import { TESTIMONIALS } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TestimonialsSection() {
  const hasRealTestimonials = TESTIMONIALS.length > 0;

  return (
    <section
      id="testimonials"
      className="relative scroll-mt-24 bg-[var(--bg-primary)] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left Header matching "CLIENTS SAY / Kind Words" */}
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Clients Say" title="Kind Words" />
          </div>

          {/* Right Quote Cards + 4-dot indicator matching screenshot */}
          <div className="lg:col-span-8 space-y-5">
            {hasRealTestimonials ? (
              <div className="grid gap-5 sm:grid-cols-2">
                {TESTIMONIALS.map((item) => (
                  <blockquote
                    key={item.id}
                    className="glass-panel flex flex-col justify-between rounded-xl p-6 space-y-5"
                  >
                    <div className="space-y-2">
                      <span
                        aria-hidden="true"
                        className="font-serif-display text-4xl leading-none text-[var(--border-strong)] select-none"
                      >
                        “
                      </span>
                      <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">
                        {item.quote}
                      </p>
                    </div>
                    <footer className="flex items-center gap-3 pt-2">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--bg-secondary)] text-xs font-semibold text-[var(--text-primary)]">
                        {item.author.slice(0, 2).toUpperCase()}
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-[var(--text-primary)]">
                          {item.author}
                        </p>
                        <p className="text-[11px] text-[var(--text-muted)]">
                          {item.role}, {item.company}
                        </p>
                      </div>
                    </footer>
                  </blockquote>
                ))}
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="glass-panel flex flex-col justify-between rounded-xl p-6 space-y-5">
                  <div className="space-y-1">
                    <span
                      aria-hidden="true"
                      className="font-serif-display text-4xl leading-none text-[var(--border-strong)] select-none"
                    >
                      “
                    </span>
                    <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">
                      Active remote contributor delivering structured manual &amp;
                      exploratory QA, reproducible defect reports, and rubric-based
                      AI evaluation across distributed international teams.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 pt-1">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--bg-secondary)] text-[var(--accent-primary)]">
                      <ShieldCheck className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-[var(--text-primary)]">
                        uTest · Test.io · Testlio · OneForma · Outlier
                      </p>
                      <p className="text-[11px] text-[var(--text-muted)]">
                        Verified Remote Platforms · 2024 – Present
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass-panel flex flex-col justify-between rounded-xl p-6 space-y-5">
                  <div className="space-y-1">
                    <span
                      aria-hidden="true"
                      className="font-serif-display text-4xl leading-none text-[var(--border-strong)] select-none"
                    >
                      “
                    </span>
                    <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">
                      Verified client testimonials slot (editable in{" "}
                      <code className="font-mono text-[11px] text-[var(--text-primary)]">
                        src/data/portfolio.ts
                      </code>
                      ). Zero fabricated quotes are used; client references are
                      shared directly upon request.
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--bg-secondary)] text-[var(--accent-primary)]">
                        <UserCheck className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-[var(--text-primary)]">
                          References Available
                        </p>
                        <p className="text-[11px] text-[var(--text-muted)]">
                          Editable Testimonial Slot
                        </p>
                      </div>
                    </div>
                    <Link
                      href="/?service=References%20%26%20Project%20Inquiry#contact"
                      className="text-[11px] font-semibold text-[var(--accent-primary)] hover:underline"
                    >
                      Request →
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Minimal pagination dots echoing screenshot */}
            <div className="flex items-center justify-center gap-2 pt-1" aria-hidden="true">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--text-primary)]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--border-strong)]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--border-strong)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
