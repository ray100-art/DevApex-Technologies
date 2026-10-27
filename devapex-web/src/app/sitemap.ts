import type { MetadataRoute } from "next";
import { caseStudies, services } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/work", "/process", "/about", "/contact", "/quote", "/privacy", "/terms"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}` })),
    ...services.map((s) => ({ url: `${site.url}/services/${s.slug}` })),
    ...caseStudies.map((c) => ({ url: `${site.url}/work/${c.slug}` })),
  ];
}
