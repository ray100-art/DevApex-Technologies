import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/lib/content";

const kindStyles: Record<CaseStudy["kind"], string> = {
  Product: "bg-emerald-50 text-emerald-700",
  "Working prototype": "bg-sky-50 text-sky-700",
  "In development": "bg-amber-50 text-amber-700",
};

export function KindBadge({ kind }: { kind: CaseStudy["kind"] }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-medium ${kindStyles[kind]}`}>{kind}</span>;
}

export function ProjectCard({ project }: { project: CaseStudy }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex flex-col rounded-xl border border-line bg-white p-7 transition-all hover:-translate-y-0.5 hover:border-brand hover:shadow-lg"
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-medium text-brand">{project.sector}</span>
        <KindBadge kind={project.kind} />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-ink">{project.name}</h3>
      <p className="mt-3 flex-1 leading-relaxed text-muted">{project.summary}</p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 4).map((t) => (
          <span key={t} className="rounded-full bg-surface px-2.5 py-1 text-xs text-ink-soft">{t}</span>
        ))}
      </div>
      <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand">
        Read case study <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden />
      </span>
    </Link>
  );
}
