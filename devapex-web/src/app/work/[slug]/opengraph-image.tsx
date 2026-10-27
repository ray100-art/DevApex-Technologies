import { ImageResponse } from "next/og";
import { caseStudies, getCaseStudy } from "@/lib/content";
import { SocialCard } from "@/lib/brand-image";

export const alt = "DevApex Technologies case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  return new ImageResponse(
    (
      <SocialCard
        eyebrow={study ? `Case study · ${study.sector}` : "Case study"}
        title={study?.title ?? "DevApex Technologies"}
        footer={study ? `${study.kind} · ${study.stack.slice(0, 4).join(" · ")}` : "devapex"}
      />
    ),
    size,
  );
}
