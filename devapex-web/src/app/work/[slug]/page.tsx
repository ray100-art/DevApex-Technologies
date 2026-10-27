import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Info } from "lucide-react";
import { caseStudies, getCaseStudy, getService } from "@/lib/content";
import { Container, Eyebrow } from "@/components/ui";
import { KindBadge, ProjectCard } from "@/components/project-card";
import { CtaBand } from "@/components/cta-band";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return { title: study.name, description: study.summary, alternates: { canonical: `/work/${slug}` } };
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight text-ink">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((i) => (
          <li key={i} className="flex gap-3 leading-relaxed text-ink-soft">
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
            {i}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const more = caseStudies.filter((c) => c.slug !== study.slug).slice(0, 2);

  return (
    <>
      <section className="border-b border-line bg-surface">
        <Container className="py-16 sm:py-20">
          <Link href="/work" className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-brand">
            <ArrowLeft size={15} aria-hidden /> All work
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Eyebrow>{study.sector}</Eyebrow>
            <KindBadge kind={study.kind} />
          </div>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{study.title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{study.summary}</p>
          {study.links.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {study.links.map((l, idx) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors ${
                    idx === 0 ? "bg-brand text-white hover:bg-brand-dark" : "border border-line bg-white text-ink hover:border-brand hover:text-brand"
                  }`}
                >
                  {l.label} <ExternalLink size={15} aria-hidden />
                </a>
              ))}
            </div>
          )}
        </Container>
      </section>

      <Container className="grid gap-12 py-16 lg:grid-cols-[1fr_280px]">
        <div className="space-y-14">
          <Block title="The problem" items={study.challenge} />
          <Block title="What it does" items={study.solution} />
          <Block title="Under the hood" items={study.engineering} />
          {study.note && (
            <p className="flex gap-3 rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-amber-900">
              <Info size={18} className="mt-0.5 shrink-0" aria-hidden />
              {study.note}
            </p>
          )}
        </div>

        <aside className="h-fit space-y-6 rounded-xl border border-line p-6 lg:sticky lg:top-24">
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="text-muted">Status</dt>
              <dd className="mt-1 font-medium text-ink">{study.kind}</dd>
            </div>
            <div>
              <dt className="text-muted">Built by</dt>
              <dd className="mt-1 font-medium text-ink">DevApex Technologies (in-house)</dd>
            </div>
            <div>
              <dt className="text-muted">Relevant services</dt>
              <dd className="mt-1 space-y-1">
                {study.services.map((s) => {
                  const svc = getService(s);
                  return svc ? (
                    <Link key={s} href={`/services/${s}`} className="block font-medium text-brand hover:underline">
                      {svc.name}
                    </Link>
                  ) : null;
                })}
              </dd>
            </div>
          </dl>
          <div>
            <p className="text-sm text-muted">Technology</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {study.stack.map((t) => (
                <span key={t} className="rounded-full bg-surface px-2.5 py-1 text-xs text-ink-soft">{t}</span>
              ))}
            </div>
          </div>
        </aside>
      </Container>

      <section className="bg-surface py-16">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight text-ink">More work</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {more.map((c) => (
              <ProjectCard key={c.slug} project={c} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand title="Need something like this for your organisation?" />
    </>
  );
}
