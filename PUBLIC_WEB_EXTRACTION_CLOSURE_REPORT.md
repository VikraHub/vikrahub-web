# Public Web Extraction Closure Report

**Date:** 17 April 2026
**Author:** Senior Software Architect / Principal Software Engineer
**Scope:** Formal closure review for VikraHub public web extraction

---

## 1. Executive Summary

**The extraction is operationally complete.** Both repositories function independently. The main repo has zero blocking references to the removed `apps/web/` path. The public web repo builds, lints, and typechecks cleanly, has CI gates, documented env vars, and explicit ownership boundaries.

**Confidence level:** High. Both reports were validated against verbatim file evidence — 13 check categories in the main repo, and full config/source audit in the public web repo.

---

## 2. Main Repo Status

**Healthy.** No blocking dependencies remain.

- `docker-compose.yml`, `Makefile`, all CI workflows, all startup scripts, all env files — zero references to `apps/web/`, `WEB_PORT`, or port `3001`
- The `apps/` directory no longer exists in the main repo
- `nginx.vikrahub.conf` still defines `upstream nextjs_ssr` on port `3001` — this is correct, as it routes to the externally deployed public web
- Documentation (`README.md`, `REPO_BOUNDARY.md`, `DOMAIN_ARCHITECTURE_QUICK_REF.md`) accurately reflects the two-repo architecture
- One negligible stale help-text string exists in a non-operational diagnostic script

---

## 3. Public Web Repo Status

**Healthy with minor follow-up.**

- All CI gates pass: lint (0 errors), typecheck (0 errors), build (env vars provided in CI)
- GitHub Actions workflow runs install → lint → typecheck → build on push/PR to `main`
- Environment expectations documented in `.env.example` with required/optional sections
- `REPO_BOUNDARY.md` explicitly maps ownership, external dependencies, hardcoded domains, and consumed API endpoints
- Deployed on Vercel with root directory set to `apps/web`
- Five low/negligible issues remain, none blocking

---

## 4. Remaining Issues

| # | Description | Severity | Owner | Recommended Next Action |
|---|-------------|----------|-------|-------------------------|
| 1 | `verify_ssr_integration.py` line 133 contains stale help text: "Run: `cd apps/web && npm run dev`" | Negligible | Main repo | Update string to reference the separate repo. Not in any CI/CD or build path. |
| 2 | Root README `.env.example` link points to `./.env.example` but file lives at `apps/web/.env.example` | Low | Public web repo | Fix link target to `apps/web/.env.example`. |
| 3 | Inner `apps/web/README.md` still carries pre-extraction title and stale architecture description | Low | Public web repo | Delete or replace with a one-liner pointing to root README. |
| 4 | Dual API clients (`api.ts` and `vikraApi.ts`) have divergent localhost vs production fallback defaults | Low | Public web repo | Document or consolidate when API contracts stabilize. |
| 5 | 3 lint warnings remain (custom font, legacy `<img>` tags in superseded components) | Negligible | Public web repo | Clean up when legacy components are removed. |
| 6 | No `robots.txt` or `sitemap.xml` in public web repo | Low | Public web repo | Add via Next.js `app/robots.ts` and `app/sitemap.ts` when ready for organic traffic. |

**None of these issues create operational risk.** All CI pipelines pass. Both repos build and deploy independently. No issue affects the ability to ship, debug, or onboard.

---

## 5. Closure Recommendation

### CLOSE WITH FOLLOW-UP TASKS

The extraction is complete. Both repositories are operationally independent. CI gates are green. Documentation is aligned. Ownership boundaries are explicit.

The six remaining items are cosmetic or future-readiness concerns. They should be tracked as normal backlog items, not as extraction blockers.
