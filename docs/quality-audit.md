# Website Quality Audit

Audit of `devapex-web`, 27 October 2026. Production build, measured locally.

## Results

| Standard | Tool / method | Result |
|---|---|---|
| Accessibility (WCAG 2.2 AA) | Lighthouse + contrast calculation on every colour pair | **100** on all audited pages; all text ≥ 4.5:1 |
| SEO | Lighthouse | **100** on all audited pages |
| Best practices | Lighthouse | **100** on all audited pages |
| Performance (mobile, slow 4G, 4× CPU) | Lighthouse | **85 to 93**; layout shift **0** |
| Security headers (OWASP) | `curl -I` | CSP, HSTS, nosniff, frame DENY, Referrer, Permissions, COOP; `X-Powered-By` removed |
| Responsive | Puppeteer at 390 px + desktop screenshots | No horizontal overflow on 10 pages; mobile menu works |
| Forms | Puppeteer functional test | Preselect, validation, `aria-invalid`, no-database safeguard all pass |
| Links | `curl` on every outbound link | All return 200 (LinkedIn blocks bots with 999, opens in browsers) |
| Build | `tsc`, ESLint, `next build` | No errors or warnings |

Performance measured on a laptop running the server and the audit at once. A CDN host (e.g. Vercel)
normally scores higher. Re-run Lighthouse against the live URL after launch.

## Fixed during the audit

- Default Next.js favicon and starter SVGs replaced with DevApex icon, Apple touch icon and web manifest
- Social share images (WhatsApp, LinkedIn, X) for the site and every case study
- Security headers added; framework version no longer advertised
- Canonical URLs on every page; FAQ and Service structured data on service pages; founder and
  GitHub linked in Organization data
- Contrast failures fixed: brand blue darkened, placeholder text, WhatsApp button
- Quote form layout shift removed (CLS 0.417 → 0)
- Page content no longer shipped in client JavaScript; unused mono font removed
- Error page added; reduced-motion support
- Privacy policy corrected: it claimed analytics the site does not use
- Hero headline resized (was five lines on laptop screens)

## Known limitations

- `script-src 'unsafe-inline'` in the CSP: needed for Next.js inline scripts on statically
  generated pages. Nonce-based CSP would force every page to render per request.
- Unknown `/services/*` and `/work/*` addresses return HTTP 200 with a "Page not found" page
  marked `noindex` (streaming behaviour with Cache Components). Search engines will not index them.

## Before launch (owner actions)

- [ ] Company email on the real domain (site shows `hello@devapex.co.ke`)
- [ ] Logo designed; replace the placeholder mark in `logo.tsx`, `icon.svg`, `brand-image.tsx`
- [ ] KRA eTIMS registration: the site promises eTIMS invoices
- [ ] Advocate review of `/privacy` and `/terms`
- [ ] Production database and `NEXT_PUBLIC_SITE_URL` (social images and canonical URLs use it)
- [ ] Google Search Console + Google Business Profile after go-live
