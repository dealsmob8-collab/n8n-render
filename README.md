# Ses ICT Hub – E-commerce Storefront

Production-ready, mobile-first electronics store for Ses ICT Hub in Kenya.

## Tech Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Prisma + SQLite (easy swap to Postgres)
- Zustand cart state
- Server components + minimal client components

## Setup

```bash
npm install
```

Create `.env`:

```bash
DATABASE_URL="file:./dev.db"
```

## Prisma & Seeding

```bash
npm run prisma:generate
npm run prisma:migrate -- --name init
npm run prisma:seed
```

## Run locally

```bash
npm run dev
```

## Editing Products
- Update inventory in `prisma/seed.ts`.
- Re-run `npm run prisma:seed` to refresh sample data.

## WhatsApp Orders
- WhatsApp link uses `buildWhatsAppOrderMessage` + `getWhatsAppLink` in `lib/whatsapp.ts`.
- Cart and product pages include prefilled WhatsApp CTAs.

## Deployment (Vercel)
1. Push repo to GitHub.
2. Create a new Vercel project.
3. Set `DATABASE_URL` to your hosted database (Postgres recommended).
4. Run Prisma migrations:
   ```bash
   npx prisma migrate deploy
   ```
5. Trigger a production build.

## Folder Structure

- `app/` – App Router pages and layouts
- `components/` – UI components
- `lib/` – Utilities, cart store, WhatsApp helpers
- `prisma/` – Schema and seed data
- `tests/` – Unit tests (Vitest)
