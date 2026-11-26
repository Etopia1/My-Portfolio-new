export default function Loading() {
  return (
    <div className="flex min-h-[75vh] flex-col items-center justify-center gap-4 px-4 pt-24">
      <div className="relative flex h-12 w-12 items-center justify-center">
        <span className="absolute inset-0 animate-ping rounded-full border border-[var(--accent-primary)]/40" />
        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-strong)] bg-[var(--bg-elevated)] font-mono text-sm font-bold text-[var(--accent-primary)]">
          AE
        </span>
      </div>
      <p className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--text-muted)]">
        Loading view...
      </p>
    </div>
  );
}
