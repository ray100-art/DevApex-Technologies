# DevApex Technologies: Website & Admin System

Company website and (next phase) admin dashboard for DevApex Technologies.

**Stack:** Next.js 16 (App Router, Cache Components) · TypeScript · Tailwind CSS 4 · PostgreSQL · Prisma 7 · Zod

## Getting started

```bash
npm install
cp .env.example .env        # then fill in DATABASE_URL
npx prisma migrate dev      # create the database tables
npm run dev                 # http://localhost:3000
```

The public site runs without a database. In development, form submissions are logged to the terminal
until `DATABASE_URL` is set. In production, a missing database makes the form show an error, so no
enquiry is silently lost.

## Structure

```
src/
  app/                 Pages (home, services, work, process, about, contact, quote, legal)
  components/          Shared UI: header, footer, forms, buttons
  lib/
    site.ts            Company details: phone, email, WhatsApp
    content.ts         Services, packages, prices, case studies, process
    leads.ts           Server action that validates and saves enquiries
    db.ts              Prisma client
prisma/schema.prisma   Database schema
```

Most copy changes are made in `src/lib/content.ts` and `src/lib/site.ts`. The admin CMS will replace this.

## Before launch

- [ ] Real phone, WhatsApp and email in `src/lib/site.ts` (currently placeholders)
- [ ] Confirm starting prices in `src/lib/content.ts` against the competitor review
- [ ] Logo and brand colours (`src/components/logo.tsx`, `src/app/globals.css`)
- [ ] Advocate review of `/privacy` and `/terms`
- [ ] Production database and `NEXT_PUBLIC_SITE_URL`
- [ ] Proof-read every page; no placeholder text or `#` links
- [ ] Lighthouse 90+ on mobile; usability test with 5 target users

## Roadmap

1. **Public website** (done: first version)
2. **Admin core:** login and roles, leads CRM, content management
3. **Billing:** quotes, invoices, M-Pesa Daraja and card payments
4. **Training & careers**
