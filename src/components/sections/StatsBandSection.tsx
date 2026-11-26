"use client";

import { motion } from "framer-motion";
import { Award, FolderGit2, Globe2, Rocket } from "lucide-react";

const STATS = [
  {
    icon: Award,
    value: "4+",
    label: "Years Experience",
  },
  {
    icon: FolderGit2,
    value: "45+",
    label: "GitHub Repositories",
  },
  {
    icon: Rocket,
    value: "6",
    label: "Live Vercel Apps",
  },
  {
    icon: Globe2,
    value: "Remote",
    label: "Global Collaboration",
  },
] as const;

export function StatsBandSection() {
  return (
    <section
      aria-label="Key engineering metrics"
      className="relative overflow-hidden border-y border-[var(--border-subtle)] bg-[var(--bg-secondary)] py-14 sm:py-16"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 180"
        className="pointer-events-none absolute inset-0 h-full w-full text-[var(--border-strong)] opacity-55"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 40H140L170 70H260M1200 130H1030L1000 100H900M0 140H95L125 110"
          stroke="currentColor"
          strokeWidth="1"
        />
        <circle cx="260" cy="70" r="3" fill="currentColor" />
        <circle cx="900" cy="100" r="3" fill="currentColor" />
      </svg>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="flex flex-col items-center text-center space-y-2"
              >
                <Icon className="h-6 w-6 stroke-[1.5] text-[var(--text-muted)]" />
                <p className="font-serif-display text-3xl sm:text-4xl font-normal tracking-tight text-[var(--text-primary)]">
                  {stat.value}
                </p>
                <p className="text-xs font-medium text-[var(--text-secondary)]">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
