import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/content";
import { Container, PageHero } from "@/components/ui";
import { ServiceIcon } from "@/components/service-icon";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  alternates: { canonical: "/services" },
  title: "Services",
  description: "Custom software, AI and data solutions, IT support and networking, and training for Kenyan organisations.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Technology services with a clear scope and a clear price"
        intro="Each service starts with a short, paid first step so you can judge our work before committing to a larger project."
      />
      <section className="py-20">
        <Container className="space-y-6">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group grid gap-6 rounded-xl border border-line p-7 transition-colors hover:border-brand md:grid-cols-[auto_1fr_auto] md:items-center"
            >
              <ServiceIcon icon={s.icon} />
              <div>
                <h2 className="text-xl font-semibold text-ink">{s.name}</h2>
                <p className="mt-2 max-w-2xl leading-relaxed text-muted">{s.short}</p>
                <p className="mt-3 text-sm text-ink-soft">
                  {s.packages.map((p) => p.name).join(" · ")}
                </p>
              </div>
              <div className="flex items-center gap-4 md:flex-col md:items-end">
                <span className="text-sm font-medium text-ink">{s.packages[0].price}</span>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Details <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </Container>
      </section>
      <CtaBand title="Not sure which service you need?" body="Describe the problem in your own words and we will recommend the smallest sensible first step." />
    </>
  );
}
