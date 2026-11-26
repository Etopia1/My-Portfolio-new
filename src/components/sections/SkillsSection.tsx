"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Layers3 } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState<string>(SKILL_CATEGORIES[0].id);

  const selectedCategory =
    SKILL_CATEGORIES.find((cat) => cat.id === activeTab) ?? SKILL_CATEGORIES[0];

  return (
    <section
      id="skills"
      className="relative scroll-mt-24 border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]/55 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Technical Stack"
            title="Production-tested tools across web, data & AI."
            description="Select a category to inspect the exact technologies, frameworks, and operational workflows applied across projects."
          />

          <div
            role="tablist"
            aria-label="Skill categories"
            className="flex flex-wrap gap-2"
          >
            {SKILL_CATEGORIES.map((category) => {
              const isSelected = category.id === activeTab;
              return (
                <button
                  key={category.id}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  onClick={() => setActiveTab(category.id)}
                  className={`rounded-md px-3.5 py-2 text-[11px] font-semibold uppercase tracking-wider transition-colors ${
                    isSelected
                      ? "bg-[var(--accent-primary)] text-white"
                      : "border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="space-y-5"
          >
            <div className="glass-panel flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-xl px-5 py-4">
              <div className="flex items-center gap-3">
                <Layers3 className="h-4 w-4 text-[var(--accent-primary)] shrink-0" />
                <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                  {selectedCategory.description}
                </p>
              </div>
              <span className="text-[11px] font-mono text-[var(--text-muted)] shrink-0">
                {selectedCategory.items.length} capabilities
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {selectedCategory.items.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22, delay: idx * 0.025 }}
                  className="glass-panel card-interactive rounded-xl p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[var(--accent-primary)] shrink-0" />
                      <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                        {skill.name}
                      </h3>
                    </div>
                    <span className="rounded bg-[var(--accent-soft)] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[var(--accent-primary)]">
                      {skill.focus}
                    </span>
                  </div>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">
                    {skill.context}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
