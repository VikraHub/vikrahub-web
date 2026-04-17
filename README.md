# VikraHub Public Web

Public-facing website for [VikraHub](https://www.vikrahub.com) — a platform for creatives to publish work, build reputation, and connect with opportunities.

Built with **Next.js 14** (App Router) and deployed on **Vercel**.

## Quick Start

```bash
npm install
cp .env.example .env.local   # then edit values
npm run dev                   # → http://localhost:3001
```

All commands run from the project root (`apps/web/`).

## Scripts

| Command            | Purpose                        |
| ------------------ | ------------------------------ |
| `npm run dev`      | Start dev server (port 3001)   |
| `npm run build`    | Production build               |
| `npm run start`    | Serve production build         |
| `npm run lint`     | ESLint check                   |
| `npm run typecheck`| TypeScript type checking       |

## Environment Variables

See [`.env.example`](.env.example) for all variables.

| Variable               | Required | Description                              |
| ---------------------- | -------- | ---------------------------------------- |
| `NEXT_PUBLIC_API_URL`  | Yes      | Backend API URL (inlined at build time)  |
| `NEXT_PUBLIC_SITE_URL` | Yes      | Canonical site URL for metadata          |
| `INTERNAL_API_URL`     | No       | Server-side API URL (Docker networking)  |

## Architecture

```
src/
  app/              ← Pages and routes
  components/       ← React components
  lib/              ← API clients and utilities
content/            ← Static markdown pages (About, Terms, etc.)
public/             ← Static assets (favicon, logo)
next.config.js      ← Next.js configuration
```

### Domain Architecture

| Domain               | Purpose                                        |
| -------------------- | ---------------------------------------------- |
| `www.vikrahub.com`   | This repo — public website                     |
| `app.vikrahub.com`   | Main application (main VikraHub repo)          |
| `api.vikrahub.com`   | Backend API (main VikraHub repo)               |

### Key Routes

- `/` — Homepage with featured work and discover feed
- `/about`, `/vision`, `/how-it-works` — Static content pages
- `/privacy`, `/terms` — Legal pages
- `/ssr/post/[id]`, `/ssr/blog/[slug]`, `/ssr/work/[id]` — SSR pages with Open Graph tags for social sharing

## Deployment

- **Platform**: Vercel
- **Root Directory**: `apps/web` (set in Vercel project settings)
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- Environment variables must be set in Vercel dashboard.

### Docker (alternative)

```bash
docker build \
  --build-arg NEXT_PUBLIC_API_URL=https://api.vikrahub.com \
  --build-arg NEXT_PUBLIC_SITE_URL=https://www.vikrahub.com \
  -t vikrahub-web .
docker run -p 3001:3001 vikrahub-web
```

## CI

GitHub Actions runs on every push and PR to `main`:
- Install dependencies
- Lint
- Type check
- Build

See [`.github/workflows/ci.yml`](.github/workflows/ci.yml).
