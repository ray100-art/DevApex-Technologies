import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, FileText, ShieldCheck } from "lucide-react";
import { services } from "@/lib/content";
import { Container, PageHero } from "@/components/ui";
import { LeadForm, LeadFormFromUrl } from "@/components/lead-form";

export const metadata: Metadata = {
  alternates: { canonical: "/quote" },
  title: "Request a quote",
  description: "Tell us about your project and get honest next steps from DevApex Technologies within one working day.",
};

const serviceOptions = services.map(({ slug, name }) => ({ slug, name }));

const next = [
  { icon: Clock, title: "Reply within one working day", body: "A real person reads every enquiry and replies with questions or next steps." },
  { icon: FileText, title: "A short discovery call", body: "30 minutes to understand the problem. Free, with no obligation." },
  { icon: ShieldCheck, title: "A written proposal", body: "Scope, timeline and a fixed price, so you can compare us fairly." },
];

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request a quote"
        title="Tell us what you need"
        intro="The more you tell us about the problem, the more useful our reply will be. You do not need a technical specification."
      />
      <Container className="grid gap-14 py-16 lg:grid-cols-[1fr_320px]">
        <Suspense fallback={<LeadForm variant="quote" serviceOptions={serviceOptions} />}>
          <LeadFormFromUrl variant="quote" serviceOptions={serviceOptions} />
        </Suspense>
        <aside className="h-fit rounded-xl bg-surface p-7">
          <h2 className="font-semibold text-ink">What happens next</h2>
          <ol className="mt-6 space-y-6">
            {next.map(({ icon: Icon, title, body }) => (
              <li key={title} className="flex gap-4">
                <Icon size={20} className="mt-0.5 shrink-0 text-brand" aria-hidden />
                <div>
                  <p className="font-medium text-ink">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </aside>
      </Container>
    </>
  );
}
