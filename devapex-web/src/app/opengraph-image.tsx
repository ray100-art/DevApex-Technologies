import { ImageResponse } from "next/og";
import { SocialCard } from "@/lib/brand-image";

export const alt = "DevApex Technologies: software, AI and IT systems for Kenyan organisations";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <SocialCard
        eyebrow="Software · AI & data · IT · Training"
        title="Replace spreadsheets and guesswork with systems your team trusts."
        footer="Nairobi, Kenya · M-Pesa built in · Fixed prices agreed upfront"
      />
    ),
    size,
  );
}
