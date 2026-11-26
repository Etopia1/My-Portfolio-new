import { SITE_CONFIG } from "@/data/portfolio";

interface BrandLogoProps {
  size?: "sm" | "md";
  showSubtitle?: boolean;
}

export function BrandLogo({ size = "md", showSubtitle = true }: BrandLogoProps) {
  const iconDimensions = size === "sm" ? "h-8 w-8" : "h-9 w-9";

  return (
    <span className="inline-flex items-center gap-3">
      <svg
        viewBox="0 0 64 64"
        className={`${iconDimensions} shrink-0 transition-transform duration-300 group-hover:scale-105`}
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M32 5L55 18V46L32 59L9 46V18L32 5Z"
          fill="var(--accent-primary)"
          stroke="var(--accent-primary-hover)"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M32 11L49.5 21V43L32 53L14.5 43V21L32 11Z"
          stroke="#ffffff"
          strokeOpacity="0.3"
          strokeWidth="1.2"
        />
        <path
          d="M21.5 42L29.5 21L37.5 42M24.2 36H34.8"
          stroke="#ffffff"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M40 23H45.5M40 31.5H44.5M40 40H45.5"
          stroke="#ffffff"
          strokeOpacity="0.92"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>

      <span className="flex flex-col leading-tight text-left">
        <span className="text-xs font-bold tracking-[0.14em] uppercase text-[var(--text-primary)]">
          {SITE_CONFIG.name}
        </span>
        {showSubtitle ? (
          <span className="text-[9px] font-medium tracking-[0.2em] uppercase text-[var(--text-muted)]">
            Software Engineer
          </span>
        ) : null}
      </span>
    </span>
  );
}
