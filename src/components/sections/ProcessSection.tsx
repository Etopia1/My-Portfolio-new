"use client";

import { motion } from "framer-motion";
import { Code2, PenTool, Rocket, Search } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover",
    description:
      "I learn about your goals, audience, and system constraints.",
    icon: Search,
  },
  {
    step: "02",
    title: "Architect",
    description:
      "I structure clean schemas, APIs, and interfaces focused on clarity.",
    icon: PenTool,
  },
  {
    step: "03",
    title: "Develop",
    description:
      "I bring systems to life with clean, modular TypeScript & backend code.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Launch",
    description:
      "I test, evaluate edge cases, and ship fast, reliable experiences.",
    icon: Rocket,
  },
] as const;

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative scroll-mt-24 border-t border-[var(--border-subtle)] bg-[var(--bg-primary)] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-3">
            <SectionHeading eyebrow="My Process" title="How I Work" />
          </div>

          <div className="lg:col-span-9 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.35, delay: idx * 0.06 }}
                  className="relative flex flex-col items-center text-center space-y-3"
                >
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)]">
                    <span className="absolute -left-5 top-1/2 -translate-y-1/2 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--bg-secondary)] text-[9px] font-mono font-semibold text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                      {item.step}
                    </span>
                    <Icon className="h-4 w-4 stroke-[1.6]" />
                  </div>

                  {idx < PROCESS_STEPS.length - 1 ? (
                    <div
                      aria-hidden="true"
                      className="hidden lg:flex items-center absolute top-6 left-[calc(50%+34px)] right-[calc(-50%+34px)]"
                    >
                      <span className="w-full border-t border-dashed border-[var(--border-strong)]" />
                      <span className="text-[10px] text-[var(--border-strong)] -ml-1">
                        ›
                      </span>
                    </div>
                  ) : null}

                  <h3 className="text-xs sm:text-sm font-semibold text-[var(--text-primary)]">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
