# Andrew Etopia — Full-Stack Developer & Software Engineer Portfolio

A modern, production-ready developer portfolio built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **GSAP**, **React Three Fiber / Three.js**, **Lucide React**, and **Supabase-ready API routes**.

All biographical details, experience, education, certifications, skills, and project histories are sourced directly from Andrew Etopia's verified resume with clearly marked editable placeholders for optional items (per-project repository/live URLs and client testimonials).

---

## Key Features

- **Interactive 3D Hero Canvas**: Subtle React Three Fiber / Three.js topological wireframe & particle field with automatic WebGL fallback and `prefers-reduced-motion` support.
- **Sticky Navigation & Scroll-Spy**: Glassmorphic header with active section tracking, smooth scrolling, mobile navigation drawer, and Light/Dark theme toggle.
- **Dedicated Project Case Studies (`/projects/[slug]`)**: Full case-study pages for all 5 technical projects with problem statements, execution data flows, engineering challenges, and pagination.
- **Interactive Filtering & Tabs**: Category filtering across projects (`All`, `Full-Stack`, `Real-Time`, `AI & Vector`, `Commerce`, `Mobile & Maps`) and interactive skill domain tabs.
- **GSAP ScrollTrigger Timeline**: Smooth scroll-triggered experience & education timeline.
- **Printable & Downloadable CV (`/resume` + `public/Andrew-Etopia-CV.pdf`)**: Web-native printable resume plus direct PDF download.
- **Validated Contact Form (`POST /api/contact`)**: Client & server validation, honeypot spam guard, and optional Supabase persistence.
- **SEO & Metadata**: Open Graph image generation (`opengraph-image.tsx`), `sitemap.xml`, `robots.txt`, semantic HTML, and custom 404/loading states.

---

## Project Structure

```text
├── public/
│   └── Andrew-Etopia-CV.pdf          # Downloadable CV PDF
├── scripts/
│   └── generate-cv-pdf.mjs           # Script to regenerate the downloadable CV PDF
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts      # Contact form API route (Supabase-ready)
│   │   ├── projects/[slug]/page.tsx  # Dynamic project case study pages
│   │   ├── resume/page.tsx           # Printable CV route
│   │   ├── globals.css               # Theme variables & utility layers
│   │   ├── layout.tsx                # Root layout, fonts, SEO & analytics
│   │   ├── loading.tsx               # Custom loading state
│   │   ├── not-found.tsx             # Custom 404 page
│   │   ├── opengraph-image.tsx       # Dynamic OG card image
│   │   ├── page.tsx                  # Main portfolio landing page
│   │   ├── robots.ts                 # Robots.txt generator
│   │   └── sitemap.ts                # Sitemap.xml generator
│   ├── components/
│   │   ├── layout/                   # Navbar & Footer
│   │   ├── providers/                # ThemeProvider (light/dark)
│   │   ├── sections/                 # Hero, About, Skills, Projects, Experience, Services, Testimonials, Contact
│   │   ├── three/                    # HeroCanvas (React Three Fiber)
│   │   └── ui/                       # CustomCursor, SectionHeading, ProjectVisual, PrintButton
│   ├── data/
│   │   └── portfolio.ts              # Central portfolio data & editable placeholders
│   └── types/
│       └── portfolio.ts              # TypeScript interfaces
├── .env.example
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## Installation & Local Development

1. **Install dependencies**:

   ```bash
   pnpm install
   ```

2. **Configure environment variables**:

   Copy `.env.example` to `.env.local`:

   ```bash
   cp .env.example .env.local
   ```

3. **Run the development server**:

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

4. **Type-check, lint, and production build**:

   ```bash
   pnpm typecheck
   pnpm lint
   pnpm build
   ```

---

## Environment Variable Configuration

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical base URL used for Open Graph, sitemap, and `robots.txt`. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional | Google Analytics 4 measurement ID (`G-XXXXXXXXXX`). |
| `NEXT_PUBLIC_SUPABASE_URL` | Optional | Supabase project URL for persisting contact form messages. |
| `SUPABASE_SERVICE_ROLE_KEY` | Optional | Server-side Supabase service key used only in `src/app/api/contact/route.ts`. |

### Optional Supabase Table Setup

If you connect Supabase, run this SQL in the Supabase SQL Editor:

```sql
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text not null,
  service text,
  message text not null,
  created_at timestamptz not null default now()
);
```

---

## Editable Placeholders Guide

Personal information missing from the source CV is clearly marked with `[EDITABLE PLACEHOLDER]` in `src/data/portfolio.ts`:

- **Project Demo & Repo URLs**: Update `liveUrl` and `repoUrl` inside `PROJECTS` in `src/data/portfolio.ts` whenever individual project URLs are public.
- **Client Testimonials**: Add verified client quotes inside `TESTIMONIALS` in `src/data/portfolio.ts`.
- **Replaceable PDF**: Replace `public/Andrew-Etopia-CV.pdf` with any updated CV export (or customize `scripts/generate-cv-pdf.mjs`).

---

## Deploying to Vercel

1. Push this repository to GitHub (`github.com/Etopia1`).
2. Import the repository in [Vercel](https://vercel.com/new).
3. Add environment variables from `.env.example` in **Project Settings → Environment Variables**.
4. Click **Deploy** — Next.js App Router, API routes, static case study pages, and Open Graph image generation work automatically with zero custom server configuration.
