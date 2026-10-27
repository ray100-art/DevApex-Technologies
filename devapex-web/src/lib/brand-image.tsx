// Shared JSX for generated PNG assets (social previews, app icons).
// ImageResponse supports a subset of CSS: flexbox only, inline styles.

export const brand = {
  ink: "#0b1b33",
  brand: "#0b62c4",
  accent: "#14b8a6",
};

export function Mark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32">
      <rect width="32" height="32" rx="8" fill={brand.brand} />
      <path d="M8 23 L16 8 L24 23" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="8" r="2.4" fill={brand.accent} />
    </svg>
  );
}

export function SocialCard({ eyebrow, title, footer }: { eyebrow: string; title: string; footer: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: brand.ink,
        padding: "72px 80px",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <Mark size={64} />
        <div style={{ display: "flex", fontSize: 34, fontWeight: 700 }}>
          DevApex<span style={{ fontWeight: 400, color: "#94a3b8", marginLeft: 10 }}>Technologies</span>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ display: "flex", fontSize: 26, color: brand.accent, textTransform: "uppercase", letterSpacing: 3 }}>
          {eyebrow}
        </div>
        <div style={{ display: "flex", fontSize: 60, fontWeight: 700, lineHeight: 1.15, maxWidth: 1000 }}>{title}</div>
      </div>
      <div style={{ display: "flex", fontSize: 26, color: "#cbd5e1" }}>{footer}</div>
    </div>
  );
}
