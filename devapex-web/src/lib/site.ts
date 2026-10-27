// Company details used across the site. Values marked TODO must be replaced
// with real details before launch (see README "Before launch").
export const site = {
  name: "DevApex Technologies",
  shortName: "DevApex",
  tagline: "Software, AI and IT systems for growing Kenyan organisations",
  description:
    "DevApex Technologies builds custom software, AI and data systems, and reliable IT infrastructure for Kenyan businesses, with M-Pesa built in and local support you can reach.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  location: "Nairobi, Kenya",
  email: "hello@devapex.co.ke", // TODO: confirm domain and mailbox
  phone: "+254 110 908 913", // founder's number until a dedicated business line exists
  whatsapp: "254110908913",
  hours: "Mon to Fri, 8:00 to 18:00 EAT",
  github: "https://github.com/ray100-art",
};

export const founder = {
  name: "Brian Ndung'u",
  role: "Founder & Lead Engineer",
  education: "BSc Computer Science, Chuka University",
  linkedin: "https://www.linkedin.com/in/brian-ndung-u-7a0a31345/",
  github: "https://github.com/ray100-art",
  portfolio: "https://ray100-art.github.io",
};

export const whatsappLink = (text = "Hello DevApex, I'd like to discuss a project.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/process", label: "How we work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
