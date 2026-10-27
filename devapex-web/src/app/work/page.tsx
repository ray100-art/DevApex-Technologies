import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/content";
import { Container, PageHero } from "@/components/ui";
import { ProjectCard } from "@/components/project-card";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  alternates: { canonical: "/work" },
  title: "Work",
  description:
    "Systems built by DevApex Technologies: smart parking with M-Pesa, a national training registry, AI clinical decision support, e-commerce and school management.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Systems we have designed and built"
        intro="Each project below is our own work, with the source code open for you to inspect and a live demo where one exists. They are products and prototypes we built to solve real Kenyan problems, not client logos borrowed for show."
      />
      <section className="py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((c) => (
              <ProjectCard key={c.slug} project={c} />
            ))}
            <div className="flex flex-col justify-center rounded-xl border border-dashed border-line p-7">
              <h2 className="text-xl font-semibold text-ink">Your project could be next</h2>
              <p className="mt-3 leading-relaxed text-muted">
                We are taking on a small number of founding clients who get close founder attention and preferential
                rates in exchange for a published case study.
              </p>
              <Link href="/quote" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                Start a conversation <ArrowRight size={15} aria-hidden />
              </Link>
            </div>
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
