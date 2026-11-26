"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  Copy,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { SERVICES, SITE_CONFIG } from "@/data/portfolio";

interface FormState {
  name: string;
  email: string;
  service: string;
  subject: string;
  message: string;
  website: string;
}

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  service: SERVICES[0].title,
  subject: "",
  message: "",
  website: "",
};

export function ContactSection() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {}
  );
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get("service");
    const inquiryParam = params.get("inquiry");

    if (serviceParam || inquiryParam) {
      setForm((prev) => ({
        ...prev,
        service: serviceParam || prev.service,
        subject: inquiryParam
          ? `Project Demo & Architecture Inquiry: ${inquiryParam}`
          : prev.subject,
      }));
    }
  }, []);

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (form.name.trim().length < 2) {
      nextErrors.name = "Please enter your name (at least 2 characters).";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (form.subject.trim().length < 3) {
      nextErrors.subject = "Please add a short subject line.";
    }
    if (form.message.trim().length < 15) {
      nextErrors.message =
        "Please share a few details about your project or role (min 15 characters).";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus({ type: "idle", message: "" });
    if (!validate()) return;

    setSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        message?: string;
        error?: string;
      };

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Unable to send your message right now.");
      }

      setStatus({
        type: "success",
        message:
          data.message ||
          "Message received! Thank you for reaching out—I will reply promptly.",
      });
      setForm(INITIAL_STATE);
      setErrors({});
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please email me directly.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE_CONFIG.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      setCopiedEmail(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 bg-[var(--bg-primary)] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Warm-stone Editorial CTA Banner matching bottom card of screenshot */}
        <div className="relative overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-7 py-9 sm:px-10 sm:py-11">
          {/* Subtle geometric circuit hand/node accent on far right matching reference */}
          <svg
            aria-hidden="true"
            viewBox="0 0 180 140"
            className="pointer-events-none absolute right-0 bottom-0 hidden h-36 w-44 text-[var(--border-strong)] opacity-60 lg:block"
            fill="none"
          >
            <path
              d="M175 110L125 85L92 60M125 85L86 92M125 85L108 38M155 130L100 112"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="92" cy="60" r="5" fill="currentColor" />
            <circle cx="86" cy="92" r="4" fill="currentColor" />
            <circle cx="108" cy="38" r="4" fill="currentColor" />
            <circle cx="66" cy="112" r="14" fill="var(--accent-primary)" fillOpacity="0.35" />
          </svg>

          <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5 space-y-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">
                Let&apos;s Create Something Great
              </p>
              <h2 className="font-serif-display text-3xl sm:text-[2.1rem] font-normal leading-[1.16] text-[var(--text-primary)]">
                Have a project in mind?
                <br />
                I&apos;d love to hear about it.
              </h2>
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2.5 rounded-sm bg-[var(--accent-primary)] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[var(--accent-primary-hover)]"
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="lg:col-span-6 grid gap-5 sm:grid-cols-3">
              <div className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 text-[var(--text-muted)] shrink-0" />
                <div className="min-w-0 space-y-0.5">
                  <p className="text-xs font-semibold text-[var(--text-primary)]">
                    Email
                  </p>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="block truncate text-[11px] text-[var(--text-secondary)] hover:text-[var(--accent-primary)]"
                  >
                    {SITE_CONFIG.email}
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center gap-1 text-[10px] font-mono text-[var(--accent-primary)] hover:underline"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="h-3 w-3" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 text-[var(--text-muted)] shrink-0" />
                <div className="space-y-0.5">
                  <p className="text-xs font-semibold text-[var(--text-primary)]">
                    Phone
                  </p>
                  <a
                    href={`tel:${SITE_CONFIG.phoneRaw}`}
                    className="block text-[11px] text-[var(--text-secondary)] hover:text-[var(--accent-primary)]"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 text-[var(--text-muted)] shrink-0" />
                <div className="space-y-0.5">
                  <p className="text-xs font-semibold text-[var(--text-primary)]">
                    Location
                  </p>
                  <p className="text-[11px] text-[var(--text-secondary)]">
                    {SITE_CONFIG.location} · Remote
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Validated Contact Form */}
        <form
          id="contact-form"
          onSubmit={handleSubmit}
          noValidate
          className="glass-panel rounded-xl p-6 sm:p-8 space-y-5"
        >
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, website: e.target.value }))
            }
            className="hidden"
            aria-hidden="true"
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-1.5">
              <label
                htmlFor="contact-name"
                className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--text-secondary)]"
              >
                Your Name *
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, name: e.target.value }))
                }
                placeholder="Jane Doe"
                className="w-full rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-primary)] focus:outline-none"
              />
              {errors.name ? (
                <p className="text-xs text-rose-600 dark:text-rose-400">
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="contact-email"
                className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--text-secondary)]"
              >
                Email Address *
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, email: e.target.value }))
                }
                placeholder="jane@company.com"
                className="w-full rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-primary)] focus:outline-none"
              />
              {errors.email ? (
                <p className="text-xs text-rose-600 dark:text-rose-400">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="contact-service"
                className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--text-secondary)]"
              >
                Engagement / Service
              </label>
              <select
                id="contact-service"
                name="service"
                value={form.service}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, service: e.target.value }))
                }
                className="w-full rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none"
              >
                {SERVICES.map((svc) => (
                  <option key={svc.id} value={svc.title}>
                    {svc.title}
                  </option>
                ))}
                <option value="Full-Time / Remote Engineering Role">
                  Full-Time / Remote Engineering Role
                </option>
                <option value="References & Project Inquiry">
                  References &amp; Project Inquiry
                </option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="contact-subject"
                className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--text-secondary)]"
              >
                Subject *
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                required
                value={form.subject}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, subject: e.target.value }))
                }
                placeholder="Next.js App / Engineering Role"
                className="w-full rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-primary)] focus:outline-none"
              />
              {errors.subject ? (
                <p className="text-xs text-rose-600 dark:text-rose-400">
                  {errors.subject}
                </p>
              ) : null}
            </div>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="contact-message"
              className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--text-secondary)]"
            >
              Project Details or Message *
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, message: e.target.value }))
              }
              placeholder="Share your goals, timeline, tech stack, or role details..."
              className="w-full resize-y rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-primary)] focus:outline-none"
            />
            {errors.message ? (
              <p className="text-xs text-rose-600 dark:text-rose-400">
                {errors.message}
              </p>
            ) : null}
          </div>

          {status.type !== "idle" ? (
            <div
              role="status"
              className={`rounded-sm border px-4 py-3 text-sm ${
                status.type === "success"
                  ? "border-emerald-600/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                  : "border-rose-600/30 bg-rose-500/10 text-rose-700 dark:text-rose-300"
              }`}
            >
              {status.message}
            </div>
          ) : null}

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs text-[var(--text-muted)]">
              Direct email:{" "}
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="underline hover:text-[var(--accent-primary)]"
              >
                {SITE_CONFIG.email}
              </a>
            </p>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-[var(--accent-primary)] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[var(--accent-primary-hover)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="h-3.5 w-3.5" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
