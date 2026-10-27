import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";
import { Container, PageHero } from "@/components/ui";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact",
  description: "Contact DevApex Technologies in Nairobi by phone, WhatsApp, email or our contact form.",
};

const channels = [
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: whatsappLink(), external: true },
  { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: "Location", value: site.location },
  { icon: Clock, label: "Hours", value: site.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to a person, not a ticket system"
        intro="Use whichever channel suits you. For project enquiries, the quote form helps us prepare a useful reply."
      />
      <Container className="grid gap-14 py-16 lg:grid-cols-[320px_1fr]">
        <ul className="h-fit space-y-5">
          {channels.map(({ icon: Icon, label, value, href, external }) => (
            <li key={label} className="flex gap-4 rounded-xl border border-line p-5">
              <Icon size={20} className="mt-0.5 shrink-0 text-brand" aria-hidden />
              <div>
                <p className="text-sm text-muted">{label}</p>
                {href ? (
                  <a
                    href={href}
                    className="font-medium text-ink hover:text-brand"
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {value}
                  </a>
                ) : (
                  <p className="font-medium text-ink">{value}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
        <div>
          <h2 className="mb-8 text-2xl font-semibold text-ink">Send us a message</h2>
          <LeadForm variant="contact" />
        </div>
      </Container>
    </>
  );
}
