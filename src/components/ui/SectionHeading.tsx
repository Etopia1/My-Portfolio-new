interface SectionHeadingProps {
  index?: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl space-y-2.5 ${alignment}`}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
        {eyebrow}
      </p>

      <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-[2.6rem] font-normal tracking-tight leading-[1.14] text-[var(--text-primary)]">
        {title}
      </h2>

      {description ? (
        <p className="pt-1 text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
