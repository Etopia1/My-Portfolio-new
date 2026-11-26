"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, FileDown, Menu, Moon, Sun, X } from "lucide-react";
import { SITE_CONFIG } from "@/data/portfolio";
import { useTheme } from "@/components/providers/ThemeProvider";
import { BrandLogo } from "@/components/ui/BrandLogo";

const NAV_LINKS = [
  { id: "hero", label: "HOME", href: "/" },
  { id: "about", label: "ABOUT", href: "/#about" },
  { id: "projects", label: "WORK", href: "/#projects" },
  { id: "services", label: "SERVICES", href: "/#services" },
  { id: "process", label: "PROCESS", href: "/#process" },
  { id: "github", label: "GITHUB", href: "/#github" },
  { id: "contact", label: "CONTACT", href: "/#contact" },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const elements = NAV_LINKS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.1, 0.35, 0.6],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`no-print fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--border-subtle)] bg-[var(--bg-primary)]/95 backdrop-blur-md py-3.5"
          : "bg-[var(--bg-primary)]/85 backdrop-blur-sm py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Hexagonal AE Brand Logo */}
        <Link
          href="/"
          aria-label={`${SITE_CONFIG.name} Home`}
          className="group inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] rounded-sm"
        >
          <BrandLogo />
        </Link>

        {/* Centered clean editorial links */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-7"
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === "/"
                ? activeSection === link.id
                : link.id === "projects" && pathname.startsWith("/projects");

            return (
              <Link
                key={link.id}
                href={link.href}
                className={`relative py-1.5 text-[10px] font-semibold tracking-[0.18em] uppercase transition-colors ${
                  isActive
                    ? "text-[var(--text-primary)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                {link.label}
                {isActive ? (
                  <motion.span
                    layoutId="editorialNavUnderline"
                    transition={{ type: "spring", stiffness: 360, damping: 32 }}
                    className="absolute inset-x-0 -bottom-0.5 h-[1.5px] bg-[var(--text-primary)]"
                  />
                ) : null}
              </Link>
            );
          })}
          <Link
            href="/resume"
            className={`relative py-1.5 text-[10px] font-semibold tracking-[0.18em] uppercase transition-colors ${
              pathname === "/resume"
                ? "text-[var(--text-primary)]"
                : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            }`}
          >
            CV
          </Link>
        </nav>

        {/* Right Actions: Theme toggle + LET'S TALK CTA */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            className="flex h-9 w-9 items-center justify-center rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
          >
            {theme === "dark" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
          </button>

          <Link
            href="/#contact"
            className="hidden md:inline-flex items-center gap-2.5 rounded-sm bg-[var(--accent-primary)] px-5 py-2.5 text-[10px] font-semibold tracking-[0.18em] uppercase text-white transition-colors hover:bg-[var(--accent-primary-hover)]"
          >
            <span>Let&apos;s Talk</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            className="flex h-9 w-9 items-center justify-center rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] lg:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="border-b border-[var(--border-subtle)] bg-[var(--bg-primary)] lg:hidden overflow-hidden"
          >
            <nav
              aria-label="Mobile navigation"
              className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between rounded-sm px-3 py-2.5 text-xs font-semibold tracking-[0.16em] uppercase text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="h-3.5 w-3.5 text-[var(--accent-primary)]" />
                </Link>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2 border-t border-[var(--border-subtle)] pt-3">
                <Link
                  href="/resume"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-1.5 rounded-sm border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2.5 text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)]"
                >
                  <FileDown className="h-3.5 w-3.5 text-[var(--accent-primary)]" />
                  <span>Resume</span>
                </Link>
                <Link
                  href="/#contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-1.5 rounded-sm bg-[var(--accent-primary)] px-3 py-2.5 text-xs font-semibold uppercase tracking-wider text-white"
                >
                  <span>Let&apos;s Talk</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
