import type { Metadata } from "next";
import { principles, process } from "@/lib/content";
import { Container, PageHero, SectionHeading } from "@/components/ui";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  alternates: { canonical: "/process" },
  title: "How we work",
  description: "Our four-step delivery process, payment terms and what you can expect working with DevApex Technologies.",
};

const terms = [
  { title: "Payment in milestones", body: "Typically 50% to start, 30% at a working demo and 20% at handover. Pay by M-Pesa, bank transfer or card." },
  { title: "Written change requests", body: "If your needs change mid-project, we price the change and agree it in writing before doing the work." },
  { title: "Tax-compliant invoicing", body: "Every invoice is issued through KRA eTIMS so you can claim it as a business expense." },
  { title: "Your data is protected", body: "We sign a data processing agreement and follow the Data Protection Act, 2019." },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="How we work"
        title="No surprises: what happens from first call to launch"
        intro="Most failed IT projects fail on scope, communication and money, not on code. Our process is designed to remove all three risks."
      />

      <section className="py-20">
        <Container>
          <ol className="relative space-y-10 border-l-2 border-line pl-8 sm:pl-12">
            {process.map((p) => (
              <li key={p.step} className="relative">
                <span className="absolute -left-[45px] flex h-8 w-8 items-center justify-center rounded-full bg-brand font-mono text-xs font-semibold text-white sm:-left-[61px]">
                  {p.step}
                </span>
                <div className="flex flex-wrap items-baseline gap-3">
                  <h2 className="text-2xl font-semibold text-ink">{p.name}</h2>
                  <span className="text-sm font-medium text-muted">{p.time}</span>
                </div>
                <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">{p.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-surface py-20">
        <Container>
          <SectionHeading eyebrow="Commercial terms" title="Fair, written and predictable" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {terms.map((t) => (
              <div key={t.title} className="rounded-xl bg-white p-6 ring-1 ring-line">
                <h3 className="font-semibold text-ink">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="Our principles" title="What you can hold us to" />
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
