"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import type { ProjectCategory } from "@/types/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectVisual } from "@/components/ui/ProjectVisual";

const CATEGORIES: ProjectCategory[] = [
  "All",
  "Full-Stack",
  "Real-Time",
  "AI & Vector",
  "Commerce",
  "Mobile & Maps",
];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("All");
  const [showAll, setShowAll] = useState(false);

  const categoryMatches =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((project) =>
          project.category.includes(selectedCategory)
        );

  const visibleProjects =
    selectedCategory === "All" && !showAll
      ? categoryMatches.slice(0, 3)
      : categoryMatches;

  return (
    <section
      id="projects"
      className="relative scroll-mt-24 py-16 sm:py-24 bg-[var(--bg-primary)]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header row matching "SELECTED WORK / Featured Projects" + "VIEW ALL PROJECTS ->" */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Selected Work" title="Featured Projects" />

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex flex-wrap gap-1.5">
              {CATEGORIES.map((category) => {
                const active = category === selectedCategory;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-sm px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider transition-colors ${
                      active
                        ? "bg-[var(--accent-primary)] text-white"
                        : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {selectedCategory === "All" ? (
              <button
                type="button"
                onClick={() => setShowAll((prev) => !prev)}
                className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors"
              >
                <span>{showAll ? "Show Top 3" : "View All Projects"}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            ) : null}
          </div>
        </div>

        {/* Clean 3-column crisp white cards matching reference screenshot */}
        <motion.div
          layout
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.article
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="glass-panel card-interactive rounded-xl p-3.5 sm:p-4"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block space-y-4"
                >
                  <ProjectVisual
                    theme={project.visualTheme}
                    title={project.title}
                    compact
                  />

                  <div className="flex items-center justify-between gap-3 px-1 pb-1">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-[0.08em] text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-0.5 text-[11px] text-[var(--text-muted)]">
                        {project.technologies.slice(0, 3).join(", ")}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-[var(--text-secondary)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--accent-primary)] shrink-0" />
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
