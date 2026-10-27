import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, XCircle } from "lucide-react";
import { caseStudies, getService, services } from "@/lib/content";
import { Button, Container, PageHero, SectionHeading } from "@/components/ui";
import { CtaBand } from "@/components/cta-band";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return { title: service.name, description: service.short, alternates: { canonical: `/services/${slug}` } };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = caseStudies.filter((c) => c.services.includes(service.slug));

  return (
    <>
      <PageHero eyebrow={service.name} title={service.headline} intro={service.intro}>
        <Button href={`/quote?service=${service.slug}`}>Request a quote</Button>
        <Button href="#packages" variant="secondary">See packages</Button>
      </PageHero>

      {/* Problems */}
      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <SectionHeading eyebrow="Sound familiar?" title="Problems we are usually called in to fix" />
          <ul className="space-y-4">
            {service.problems.map((p) => (
              <li key={p} className="flex gap-3 rounded-lg border border-line p-4 text-ink-soft">
                <XCircle size={20} className="mt-0.5 shrink-0 text-rose-500" aria-hidden />
                {p}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Deliverables */}
      <section className="bg-surface py-20">
        <Container>
          <SectionHeading eyebrow="What we deliver" title={`What ${service.name.toLowerCase()} covers`} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {service.deliverables.map((d) => (
              <div key={d.title} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-line">
                <h3 className="font-semibold text-ink">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{d.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Packages */}
      <section id="packages" className="scroll-mt-20 py-20">
        <Container>
          <SectionHeading
            eyebrow="Packages"
            title="Start small, scale when it works"
            intro="Starting prices help you plan. Your fixed price is confirmed in writing after a short discovery conversation. Prices exclude VAT."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {service.packages.map((p, idx) => (
              <div
                key={p.name}
                className={`flex flex-col rounded-xl p-7 ${idx === 1 ? "bg-ink text-white" : "border border-line"}`}
              >
                <h3 className={`text-lg font-semibold ${idx === 1 ? "text-white" : "text-ink"}`}>{p.name}</h3>
                <p className={`mt-1 text-sm ${idx === 1 ? "text-slate-300" : "text-muted"}`}>{p.summary}</p>
                <p className={`mt-5 text-2xl font-semibold ${idx === 1 ? "text-white" : "text-ink"}`}>{p.price}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.includes.map((i) => (
                    <li key={i} className={`flex gap-2 text-sm ${idx === 1 ? "text-slate-200" : "text-ink-soft"}`}>
                      <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-accent" aria-hidden />
                      {i}
                    </li>
                  ))}
                </ul>
                <Button
                  href={`/quote?service=${service.slug}&package=${encodeURIComponent(p.name)}`}
                  variant={idx === 1 ? "light" : "secondary"}
                  className="mt-8"
                >
                  Get a quote
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Stack + related work */}
      <section className="bg-surface py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Tools" title="Technology we use" />
            <div className="mt-6 flex flex-wrap gap-2">
              {service.stack.map((t) => (
                <span key={t} className="rounded-full bg-white px-3 py-1.5 text-sm text-ink-soft ring-1 ring-line">{t}</span>
              ))}
            </div>
          </div>
          {related.length > 0 && (
            <div>
              <SectionHeading eyebrow="Related work" title="See it in practice" />
              <ul className="mt-6 space-y-3">
                {related.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/work/${c.slug}`} className="block rounded-lg bg-white p-5 ring-1 ring-line hover:ring-brand">
                      <p className="font-semibold text-ink">{c.name}</p>
                      <p className="mt-1 text-sm text-muted">{c.sector} · {c.kind}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Container>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="FAQs" title="Common questions" />
          <div className="mt-8 divide-y divide-line border-y border-line">
            {service.faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-ink">
                  {f.q}
                  <span className="ml-4 text-brand transition-transform group-open:rotate-45" aria-hidden>+</span>
                </summary>
                <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                name: service.name,
                description: service.intro,
                provider: { "@type": "Organization", name: "DevApex Technologies" },
                areaServed: "KE",
              },
              {
                "@type": "FAQPage",
                mainEntity: service.faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              },
            ],
          }),
        }}
      />
    </>
  );
}
