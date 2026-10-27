import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { caseStudies, principles } from "@/lib/content";
import { founder } from "@/lib/site";
import { Container, Eyebrow, PageHero, SectionHeading } from "@/components/ui";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About",
  description: "Why DevApex Technologies exists, who builds your systems, and how we work with Kenyan organisations.",
};

const expertise = [
  { area: "Backend & APIs", items: "Java, Spring Boot, Python, FastAPI, SQLAlchemy, Hibernate" },
  { area: "Frontend & mobile", items: "React, TypeScript, Next.js, Tailwind CSS, TanStack Query, Android" },
  { area: "Data", items: "PostgreSQL, MySQL, Flyway, Alembic, reporting and analytics" },
  { area: "AI & ML", items: "LLM integration (Llama via Groq), structured outputs, computer vision, expert systems" },
  { area: "Payments", items: "M-Pesa Daraja: STK Push, idempotent callbacks, reconciliation" },
  { area: "Quality & DevOps", items: "JUnit, pytest, Playwright, Docker, Nginx, GitHub Actions, Linux" },
];

const links = [
  { label: "GitHub", href: founder.github },
  { label: "LinkedIn", href: founder.linkedin },
  { label: "Portfolio", href: founder.portfolio },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About DevApex"
        title="A Kenyan technology company built on evidence, not hype"
        intro="DevApex Technologies helps organisations replace manual work with reliable systems, use their data to make better decisions, and keep their IT running."
      />

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <SectionHeading eyebrow="Why we exist" title="Too many organisations pay for technology that does not work for them" />
          <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              Across Kenya, SACCOs reconcile M-Pesa payments by hand, schools chase fee arrears in notebooks, and managers
              wait days for reports that should take minutes. Many have already paid for software that was abandoned,
              unsupported, or never fitted the way they work.
            </p>
            <p>
              We started DevApex to do this differently: understand the process first, agree scope and price in writing,
              show working software every two weeks, and measure the result against goals agreed at the start.
            </p>
            <p>
              We have already built {caseStudies.length} systems of our own, from smart parking with M-Pesa to a national
              training registry and AI clinical decision support. You can{" "}
              <Link href="/work" className="font-medium text-brand underline">
                inspect the work and the code
              </Link>{" "}
              before you trust us with yours.
            </p>
          </div>
        </Container>
      </section>

      {/* Founder */}
      <section className="bg-surface py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Eyebrow>Who builds your system</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink">{founder.name}</h2>
            <p className="mt-1 font-medium text-brand">{founder.role}</p>
            <p className="mt-1 text-sm text-muted">{founder.education}</p>
            <p className="mt-6 leading-relaxed text-ink-soft">
              A software engineer focused on the part of a system you cannot see: the backend, the data and the
              integrations that have to keep working when the network drops, the payment callback arrives twice, or a
              thousand users log in at once. Every DevApex project is led personally by the founder, from the discovery
              workshop to launch.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-white px-4 py-2 text-sm font-medium text-ink hover:border-brand hover:text-brand"
                >
                  {l.label} <ExternalLink size={14} aria-hidden />
                </a>
              ))}
            </div>
          </div>
          <div className="rounded-xl bg-white p-7 ring-1 ring-line">
            <h3 className="font-semibold text-ink">Technical expertise</h3>
            <dl className="mt-5 divide-y divide-line">
              {expertise.map((e) => (
                <div key={e.area} className="grid gap-1 py-4 sm:grid-cols-[160px_1fr] sm:gap-4">
                  <dt className="text-sm font-medium text-ink">{e.area}</dt>
                  <dd className="text-sm leading-relaxed text-muted">{e.items}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="Our principles" title="How we behave when nobody is checking" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {principles.map((p) => (
              <div key={p.title} className="rounded-xl bg-surface p-6">
                <h3 className="font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand title="Let's talk about your organisation" />
    </>
  );
}
