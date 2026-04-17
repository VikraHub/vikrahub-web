# Repo Boundary — vikrahub-web

This document defines what this repository owns, what it depends on, and what it does NOT own.

## What This Repo Is

The **public-facing marketing and content website** for VikraHub, deployed at `www.vikrahub.com`.

- Static pages (About, Vision, Terms, Privacy, How It Works)
- Homepage with featured/discover content from the API
- SSR pages for Open Graph / social media previews (`/ssr/*`)

## What This Repo Does NOT Own

| Concern                  | Owner                                     |
| ------------------------ | ----------------------------------------- |
| User authentication      | Main VikraHub repo (`app.vikrahub.com`)   |
| User dashboard / app UI  | Main VikraHub repo (`app.vikrahub.com`)   |
| Backend API              | Main VikraHub repo (`api.vikrahub.com`)   |
| Database / data models   | Main VikraHub repo                        |
| User-generated content   | Main VikraHub repo                        |
| DNS / domain config      | Infrastructure                            |

## External Dependencies

### Runtime

| Dependency         | URL / Endpoint                   | Purpose                         |
| ------------------ | -------------------------------- | ------------------------------- |
| Backend API        | `NEXT_PUBLIC_API_URL`            | Featured content, discover feed, public content SSR |
| Google Fonts       | `fonts.googleapis.com`           | Raleway font family             |
| Font Awesome CDN   | `cdnjs.cloudflare.com`           | Icon font                       |
| Cloudinary         | `res.cloudinary.com`             | Image hosting (user uploads)    |
| UI Avatars         | `ui-avatars.com`                 | Fallback avatar generation      |

### Build / Deploy

| Service  | Purpose                                |
| -------- | -------------------------------------- |
| Vercel   | Hosting, CI/CD, edge network           |
| GitHub   | Source control, Actions CI             |

## Hardcoded Domain References

The following domains are referenced in code and config:

- `app.vikrahub.com` — redirect target in `next.config.js`, CTA links in header/footer
- `api.vikrahub.com` — default API URL fallback in `vikraApi.ts` and `.env.production`
- `vikrahub.com` — image optimization domain allowlist in `next.config.js`

If the domain architecture changes, update these locations.

## API Contract

This repo consumes the following public API endpoints (read-only):

| Endpoint                                         | Used By         |
| ------------------------------------------------ | --------------- |
| `/api/content/public/content/{kind}/{ref}/`       | `api.ts` (SSR)  |
| `/api/content/public/featured/`                   | `api.ts`        |
| `/api/content/public/posts/`                      | `api.ts`        |
| `/api/content/public/blogs/`                      | `api.ts`        |
| `/api/content/public/works/`                      | `api.ts`        |
| `/api/v1/content/public/featured/`                | `vikraApi.ts`   |
| `/api/v1/content/public/discover/`                | `vikraApi.ts`   |

If these endpoints change in the API repo, this repo must be updated.
