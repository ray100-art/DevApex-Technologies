import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { services } from "@/lib/content";
import { site, whatsappLink } from "@/lib/site";
import { Container } from "./ui";
import { Logo } from "./logo";
import { CurrentYear } from "./current-year";

export function Footer() {
  return (
    <footer className="bg-ink text-slate-300">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo light />
          <p className="mt-4 text-sm leading-relaxed text-slate-400">{site.tagline}.</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Services</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Company</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/work" className="hover:text-white">Work</Link></li>
            <li><Link href="/process" className="hover:text-white">How we work</Link></li>
            <li><Link href="/quote" className="hover:text-white">Request a quote</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Get in touch</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden />
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-white">{site.phone}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden />
              <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden />
              <span>{site.location}</span>
            </li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:text-white">
                Chat on WhatsApp
              </a>
            </li>
            <li>
              <a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Our code on GitHub
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; <CurrentYear /> {site.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of service</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
