import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { caseStudies, industries, principles, process, services } from "@/lib/content";
import { whatsappLink } from "@/lib/site";
import { Button, Container, Eyebrow, SectionHeading } from "@/components/ui";
import { ServiceIcon } from "@/components/service-icon";
import { ProjectCard } from "@/components/project-card";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  const featured = caseStudies.filter((c) => c.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <Container className="relative grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <Eyebrow light>Software · AI & data · IT · Training</Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-balance text-white sm:text-5xl xl:text-[3.5rem]">
              Replace spreadsheets and guesswork with systems your team trusts.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              DevApex Technologies builds custom software, data and AI solutions, and reliable IT for Kenyan organisations,
              with M-Pesa built in, fixed prices agreed upfront, and a team you can actually reach.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/quote" variant="light">
                Request a quote <ArrowRight size={16} aria-hidden />
              </Button>
              <Button href={whatsappLink()} variant="ghostLight" external>
                Chat on WhatsApp
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
            <p className="text-sm font-semibold text-white">Every engagement includes</p>
            <ul className="mt-5 space-y-4">
              {[
                "A written scope and fixed price before work starts",
                "Working software to review every two weeks",
                "M-Pesa, eTIMS and data protection designed in",
                "Full ownership of your code and data",
                "Staff training and a clear support plan",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-slate-200">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title="Four ways we help organisations run better"
            intro="Start with the problem you have today. We combine these services when a project needs more than one."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-xl border border-line p-7 transition-all hover:-translate-y-0.5 hover:border-brand hover:shadow-lg"
              >
                <ServiceIcon icon={s.icon} />
                <h3 className="mt-5 text-xl font-semibold text-ink">{s.name}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.short}</p>
                <p className="mt-4 text-sm font-medium text-ink-soft">{s.packages[0].price}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Learn more <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Industries */}
      <section className="bg-surface py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Who we work with"
            title="Built around how Kenyan organisations really operate"
            intro="We focus on sectors where money moves through M-Pesa, records still live on paper, and better data changes outcomes."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((i) => (
              <div key={i.name} className="bg-white p-6">
                <h3 className="font-semibold text-ink">{i.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{i.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured work */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Featured work"
              title="Proof, not promises"
              intro="Systems we have built for real Kenyan problems, with source code you can inspect and live demos where available."
            />
            <Button href="/work" variant="secondary" className="shrink-0">
              All work <ArrowRight size={16} aria-hidden />
            </Button>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featured.map((c) => (
              <ProjectCard key={c.slug} project={c} />
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-ink py-20 sm:py-24">
        <Container>
          <SectionHeading
            light
            eyebrow="How we work"
            title="A clear process, from first call to long-term support"
            intro="No vague timelines or surprise invoices. You know what happens next at every stage."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="rounded-xl border border-white/10 p-6">
                <p className="font-mono text-sm text-accent">{p.step}</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{p.name}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400">{p.time}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Principles */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Why DevApex" title="What you can hold us to" center />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <div key={p.title}>
                <div className="h-1 w-10 rounded bg-brand" />
                <h3 className="mt-4 font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
