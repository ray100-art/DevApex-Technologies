import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  alternates: { canonical: "/terms" },
  title: "Terms of service",
  description: "Terms for using the DevApex Technologies website.",
};

// DRAFT: have an advocate review before launch.
export default function TermsPage() {
  return (
    <Container className="max-w-3xl py-16">
      <h1 className="text-4xl font-semibold tracking-tight text-ink">Terms of service</h1>
      <p className="mt-3 text-sm text-muted">Last updated: October 2026</p>
      <div className="mt-10 space-y-8 leading-relaxed text-ink-soft [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink">
        <section>
          <h2>Using this website</h2>
          <p className="mt-3">
            This website is provided by {site.name} for information about our services. By using it you agree to these
            terms. Do not misuse the site, attempt to disrupt it, or submit false information through our forms.
          </p>
        </section>
        <section>
          <h2>Prices and proposals</h2>
          <p className="mt-3">
            Prices shown on this website are starting prices for guidance only and exclude VAT. They are not an offer.
            Every engagement is governed by a written proposal and agreement that sets out scope, price, payment terms
            and ownership.
          </p>
        </section>
        <section>
          <h2>Intellectual property</h2>
          <p className="mt-3">
            The content, design and branding on this website belong to {site.name}. Ownership of work we create for clients
            is defined in each client agreement.
          </p>
        </section>
        <section>
          <h2>Liability</h2>
          <p className="mt-3">
            We work to keep this website accurate and available but do not guarantee it is free of errors or interruptions.
            Nothing on this website is professional advice for your specific situation.
          </p>
        </section>
        <section>
          <h2>Governing law</h2>
          <p className="mt-3">These terms are governed by the laws of Kenya.</p>
        </section>
      </div>
    </Container>
  );
}
