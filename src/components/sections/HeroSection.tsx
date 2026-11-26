"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/portfolio";

const HeroCanvas = dynamic(
  () => import("@/components/three/HeroCanvas").then((mod) => mod.HeroCanvas),
  { ssr: false }
);

interface HeroSectionProps {
  profileImageSrc?: string | null;
}

export function HeroSection({ profileImageSrc = null }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-[var(--border-subtle)] bg-[var(--bg-primary)] pt-28 pb-0 sm:pt-36"
    >
      {/* Vertical rotated side accent matching reference */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-5 top-1/2 hidden -translate-y-1/2 -rotate-90 origin-left xl:flex items-center gap-3 text-[9px] font-semibold tracking-[0.34em] uppercase text-[var(--text-muted)]"
      >
        <span className="h-px w-8 bg-[var(--border-strong)]" />
        <span>Lagos · Remote</span>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          {/* Left Editorial Column — clean 1:1 match to screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6 space-y-6 pb-16 sm:pb-24"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">
              Full-Stack Engineering That Connects
            </p>

            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-[3.85rem] font-normal tracking-tight leading-[1.08] text-[var(--text-primary)]">
              I engineer digital systems that are intuitive, intelligent and
              impactful.
            </h1>

            <p className="max-w-lg text-sm sm:text-[15px] leading-relaxed text-[var(--text-secondary)]">
              I&apos;m {SITE_CONFIG.name}, a full-stack developer and software
              engineer crafting scalable React &amp; Next.js applications,
              real-time APIs, and evaluated AI workflows that drive results.
            </p>

            {/* Exact 2-button CTA layout from reference screenshot */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-sm bg-[var(--accent-primary)] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[var(--accent-primary-hover)]"
              >
                <span>View My Work</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-sm border border-[var(--border-strong)] bg-[var(--bg-card)] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text-primary)] transition-colors hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
              >
                <span>Let&apos;s Work Together</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column — clean open visual matching screenshot composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="lg:col-span-6 relative flex items-end justify-center lg:justify-end"
          >
            <div className="relative h-[380px] w-full max-w-[520px] sm:h-[440px]">
              {/* Soft sage circular halo behind center figure */}
              <div
                aria-hidden="true"
                className="absolute left-[44%] top-[48%] h-64 w-64 sm:h-72 sm:w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--bg-secondary)]"
              />

              {/* Faint left & right circuit lines + '+' crosshair */}
              <svg
                aria-hidden="true"
                viewBox="0 0 520 440"
                className="pointer-events-none absolute inset-0 h-full w-full text-[var(--border-strong)]"
                fill="none"
              >
                <path
                  d="M20 110H75L96 132M40 215H86M375 88H430M495 36V56M485 46H505"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <circle cx="20" cy="110" r="2.5" fill="currentColor" />
                <circle cx="86" cy="215" r="2.5" fill="currentColor" />
              </svg>

              {/* Top-right micro-label matching reference */}
              <div className="absolute right-6 top-6 z-20 text-left text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)] leading-relaxed">
                <p>AI + Engineering</p>
                <p>Human + Impact</p>
              </div>

              {/* Right-side subtle AI wireframe / 3D element echoing reference robot profile */}
              <div className="absolute right-0 top-10 h-72 w-72 sm:h-80 sm:w-80 z-10 opacity-75">
                <HeroCanvas />
              </div>

              {/* Center-left Portrait (real photo if public/profile.jpg exists, otherwise clean editorial architectural bust) */}
              <div className="relative z-20 flex h-full w-full items-end justify-center pr-8">
                {profileImageSrc ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={profileImageSrc}
                    alt={`${SITE_CONFIG.name} — ${SITE_CONFIG.title}`}
                    className="h-[340px] sm:h-[400px] w-auto object-contain object-bottom drop-shadow-sm"
                  />
                ) : (
                  <svg
                    viewBox="0 0 320 380"
                    className="h-[340px] sm:h-[395px] w-auto"
                    fill="none"
                    role="img"
                    aria-label={`${SITE_CONFIG.name} editorial portrait silhouette`}
                  >
                    {/* Minimalist editorial engineer portrait silhouette */}
                    <path
                      d="M52 380C58 292 102 256 160 256C218 256 262 292 268 380H52Z"
                      fill="var(--accent-primary)"
                      fillOpacity="0.92"
                    />
                    <path
                      d="M124 260L160 296L196 260"
                      stroke="var(--bg-primary)"
                      strokeWidth="3"
                      fill="var(--bg-card)"
                    />
                    <rect
                      x="139"
                      y="214"
                      width="42"
                      height="48"
                      rx="18"
                      fill="var(--text-primary)"
                      fillOpacity="0.14"
                    />
                    <ellipse
                      cx="160"
                      cy="148"
                      rx="56"
                      ry="68"
                      fill="var(--bg-card)"
                      stroke="var(--border-strong)"
                      strokeWidth="1.5"
                    />
                    {/* Minimalist glasses & hair geometric lines */}
                    <path
                      d="M106 134C106 96 130 74 162 74C194 74 216 96 214 134C204 114 185 106 160 106C136 106 116 114 106 134Z"
                      fill="var(--text-primary)"
                      fillOpacity="0.82"
                    />
                    <rect
                      x="119"
                      y="138"
                      width="34"
                      height="21"
                      rx="5"
                      stroke="var(--text-primary)"
                      strokeWidth="2.2"
                    />
                    <rect
                      x="167"
                      y="138"
                      width="34"
                      height="21"
                      rx="5"
                      stroke="var(--text-primary)"
                      strokeWidth="2.2"
                    />
                    <line
                      x1="153"
                      y1="147"
                      x2="167"
                      y2="147"
                      stroke="var(--text-primary)"
                      strokeWidth="2.2"
                    />
                    {/* Subtle AE badge on shirt */}
                    <text
                      x="160"
                      y="340"
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize="12"
                      fontFamily="monospace"
                      letterSpacing="3"
                    >
                      AE · SWE
                    </text>
                  </svg>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
