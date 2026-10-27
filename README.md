# DevApex Technologies

Website and business system for **DevApex Technologies**, a Kenyan company building custom
software, AI and data solutions, and reliable IT for growing organisations.

| Folder | Contents |
|---|---|
| [`devapex-web/`](devapex-web/) | Company website and (next) admin dashboard: Next.js 16, TypeScript, Tailwind CSS, PostgreSQL, Prisma |
| [`docs/`](docs/) | Competitor review and website quality audit |

## Quick start

```bash
cd devapex-web
npm install
cp .env.example .env     # set DATABASE_URL
npx prisma migrate dev
npm run dev              # http://localhost:3000
```

See [`devapex-web/README.md`](devapex-web/README.md) for structure, the pre-launch checklist and the roadmap.

## Quality

Lighthouse: Accessibility 100 · SEO 100 · Best Practices 100 · Performance 85 to 93 (mobile).
Details in [`docs/quality-audit.md`](docs/quality-audit.md).

## Roadmap

1. Public website (done)
2. Admin: login and roles, leads CRM, content management
3. Billing: quotes, invoices, M-Pesa Daraja and card payments
4. Training and careers
