// Placeholder wordmark until the brand identity is designed.
export function Logo({ light }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="var(--color-brand)" />
        <path d="M8 23 L16 8 L24 23" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="8" r="2.4" fill="var(--color-accent)" />
      </svg>
      <span className={`text-lg font-semibold tracking-tight ${light ? "text-white" : "text-ink"}`}>
        DevApex<span className={`font-normal ${light ? "text-slate-400" : "text-muted"}`}> Technologies</span>
      </span>
    </span>
  );
}
