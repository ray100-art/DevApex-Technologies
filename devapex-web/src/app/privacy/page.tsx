import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy" },
  title: "Privacy policy",
  description: "How DevApex Technologies collects, uses and protects personal data under Kenya's Data Protection Act, 2019.",
};

// DRAFT: have an advocate review before launch.
export default function PrivacyPage() {
  return (
    <Container className="max-w-3xl py-16">
      <h1 className="text-4xl font-semibold tracking-tight text-ink">Privacy policy</h1>
      <p className="mt-3 text-sm text-muted">Last updated: October 2026</p>
      <div className="mt-10 space-y-8 leading-relaxed text-ink-soft [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
        <section>
          <h2>Who we are</h2>
          <p className="mt-3">
            {site.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is the data controller for personal data collected through this website.
            We process personal data in line with the Data Protection Act, 2019 of Kenya.
          </p>
        </section>
        <section>
          <h2>What we collect</h2>
          <ul>
            <li>Details you submit in our forms: name, email, phone number, organisation and your message.</li>
            <li>Standard server logs (such as IP address and pages requested), kept briefly for security and troubleshooting.</li>
          </ul>
          <p className="mt-3">
            This website does not use advertising or tracking cookies. If we add analytics in future, we will update this
            policy first.
          </p>
        </section>
        <section>
          <h2>Why we use it</h2>
          <ul>
            <li>To respond to your enquiry and prepare proposals (on the basis of your consent and steps before a contract).</li>
            <li>To deliver services and issue invoices once you become a client (performance of a contract and legal obligation).</li>
            <li>To keep our website secure and working (legitimate interest).</li>
          </ul>
          <p className="mt-3">We do not sell your personal data or use it for unrelated marketing without your consent.</p>
        </section>
        <section>
          <h2>How long we keep it</h2>
          <p className="mt-3">
            Enquiries that do not become projects are deleted after 24 months. Client and financial records are kept for
            the period required by Kenyan tax law.
          </p>
        </section>
        <section>
          <h2>Who we share it with</h2>
          <p className="mt-3">
            Only service providers that help us run the business, such as hosting, email and payment providers, under
            agreements that require them to protect your data. Some providers may store data outside Kenya with
            appropriate safeguards.
          </p>
        </section>
        <section>
          <h2>Your rights</h2>
          <p className="mt-3">
            You may ask to access, correct or delete your personal data, object to its processing, or withdraw consent at
            any time by emailing <a href={`mailto:${site.email}`} className="text-brand underline">{site.email}</a>. You
            may also complain to the Office of the Data Protection Commissioner.
          </p>
        </section>
      </div>
    </Container>
  );
}
