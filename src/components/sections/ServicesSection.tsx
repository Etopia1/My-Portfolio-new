"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Database,
  Layers,
  Layout,
  Server,
  ShieldCheck,
  Sparkles,
  Webhook,
  Workflow,
} from "lucide-react";
import { SERVICES } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ICON_MAP = {
  Layers,
  Layout,
  Server,
  Webhook,
  Database,
  Sparkles,
  Workflow,
  ShieldCheck,
};

export function ServicesSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? SERVICES : SERVICES.slice(0, 4);

  return (
    <section
      id="services"
      className="relative scroll-mt-24 border-t border-[var(--border-subtle)] py-16 sm:py-20 bg-[var(--bg-primary)]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-3 space-y-4">
            <SectionHeading eyebrow="What I Do" title="Services" />
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-primary)] hover:underline"
            >
              {showAll ? "Show Core 4 Services" : "View All 8 Capabilities →"}
            </button>
          </div>

          <div className="lg:col-span-9 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {visibleServices.map((service, idx) => {
              const Icon = ICON_MAP[service.iconName];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  className="space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--accent-primary)] text-white">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="text-sm font-semibold leading-snug text-[var(--text-primary)]">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                    {service.summary}
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
