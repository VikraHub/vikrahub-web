# ============================================================================
# VikraHub Public Web (Next.js 14) — Multi-stage Dockerfile
# Stages: deps → build → production
# ============================================================================

# ---------------------------------------------------------------------------
# Stage: deps – install node_modules
# ---------------------------------------------------------------------------
FROM node:20-alpine AS deps

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

# ---------------------------------------------------------------------------
# Stage: build – compile Next.js app
# ---------------------------------------------------------------------------
FROM deps AS build

WORKDIR /app

COPY . .
COPY --from=deps /app/node_modules ./node_modules

# Build-time env (NEXT_PUBLIC_* are inlined at build time)
ARG NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
ARG NEXT_PUBLIC_SITE_URL=http://127.0.0.1:3001

ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL \
    NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL \
    NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# ---------------------------------------------------------------------------
# Stage: production – run Next.js standalone
# ---------------------------------------------------------------------------
FROM node:20-alpine AS production

WORKDIR /app

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3001 \
    HOSTNAME=0.0.0.0

# Copy only what's needed to run
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/next.config.js ./next.config.js

# Ensure the node user can write to the Next.js cache directory
RUN mkdir -p /app/.next/cache && chown -R node:node /app/.next/cache

EXPOSE 3001

USER node

HEALTHCHECK --interval=15s --timeout=3s --start-period=10s --retries=3 \
    CMD wget -qO- http://localhost:3001/ || exit 1

CMD ["npx", "next", "start", "-p", "3001"]
