# VikraHub SSR - Open Graph Implementation

Next.js App Router implementation for server-side rendering of public content with proper Open Graph meta tags for social media sharing.

## Features

- ✅ Server-side rendering of public content (posts, blogs, portfolio)
- ✅ Dynamic Open Graph tags for social media
- ✅ Twitter Card support
- ✅ Automatic redirect to React SPA for interactivity
- ✅ Fallback content for crawlers
- ✅ Safe handling of private/unpublished content

## Quick Start

### Install Dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

Server runs on `http://localhost:3001`

### Build for Production

```bash
npm run build
npm start
```

## Environment Variables

Create `.env.local`:

```bash
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_SITE_URL=http://localhost:3001
```

For production, create `.env.production`:

```bash
NEXT_PUBLIC_API_URL=https://api.vikrahub.com
NEXT_PUBLIC_SITE_URL=https://www.vikrahub.com
```

## Routes

### SSR Routes (Public Content)
- `/ssr/post/[id]` - Post detail with OG tags
- `/ssr/blog/[slug]` - Blog detail with OG tags
- `/ssr/work/[id]` - Portfolio item with OG tags

These routes are accessed via friendly URLs:
- `/posts/:id` → `/ssr/post/:id`
- `/blogs/:slug` → `/ssr/blog/:slug`
- `/portfolio/:id` → `/ssr/work/:id`

## Architecture

```
User Request → Next.js SSR → Django API → Render with OG tags → Redirect to SPA
                              (public endpoint)
```

1. Social crawler requests content URL
2. Next.js fetches data from Django public API
3. Generates page with full OG metadata
4. Returns HTML to crawler
5. Browser users get redirected to React SPA

## Testing

### Test OG Tags Locally

```bash
# View rendered HTML
curl http://localhost:3001/posts/1

# Extract OG tags
curl http://localhost:3001/posts/1 | grep "og:"
```

### Test with Social Media Debuggers

- Facebook: https://developers.facebook.com/tools/debug/
- Twitter: https://cards-dev.twitter.com/validator
- LinkedIn: https://www.linkedin.com/post-inspector/

## API Integration

Consumes Django public content endpoint:

```
GET /api/content/public/content/{kind}/{ref}/
```

Where:
- `kind`: 'post', 'blog', or 'work'
- `ref`: numeric ID or slug

Returns content with:
- `og_image` - Absolute URL to image
- `og_url` - Absolute URL to content
- `canonical_url` - Canonical URL
- Full content metadata

## Project Structure

```
apps/web/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home / landing page
│   │   ├── about/page.tsx      # About page
│   │   ├── privacy/page.tsx    # Privacy policy
│   │   ├── terms/page.tsx      # Terms of service
│   │   └── ssr/                # SSR routes
│   │       ├── post/[id]/      # Post detail with OG tags
│   │       ├── blog/[slug]/    # Blog detail with OG tags
│   │       └── work/[id]/      # Portfolio detail with OG tags
│   ├── components/             # Shared components
│   └── lib/
│       ├── api.ts              # API client
│       ├── vikraApi.ts         # VikraHub API helpers
│       └── reading-time.ts     # Reading time utility
├── content/                    # Content assets
├── public/                     # Static files
├── next.config.js              # Next.js config + rewrites
├── tsconfig.json               # TypeScript config
└── package.json                # Next.js 14.0.4
```

## Adding New Content Types

1. Create new route: `src/app/ssr/{type}/[id]/page.tsx`
2. Implement `generateMetadata` async function
3. Call `fetchPublicContent` with correct kind
4. Add rewrite rule in `next.config.js`
5. Test with real content

Example structure to copy: `src/app/ssr/post/[id]/page.tsx`

## Deployment

### Vercel (Recommended)
```bash
vercel --prod
```

### Render
```bash
npm run build
npm start
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3001
CMD ["npm", "start"]
```

## Troubleshooting

### OG tags not showing
- View page source (not DevTools inspector)
- Ensure `generateMetadata` is async
- Check API response includes og_image

### 404 errors
- Verify content is public and published in Django
- Check NEXT_PUBLIC_API_URL is correct
- Test API endpoint directly

### Redirects not working
- Enable JavaScript in browser
- Check console for errors
- Verify React SPA is running

## Performance

- SSR response time: ~300ms
- No caching (always fresh data)
- Future: Add ISR for popular content

## Security

- No authentication required
- Only public content accessible
- No user-specific data in SSR
- Client-side redirect for interactivity

## Related Documentation

- [SSR Integration Guide](../SSR_INTEGRATION_GUIDE.md)
- [Architecture Document](../../ARCHITECTURE.md)
- [Backend API](../backend/content/public_views.py)

---

**Status:** Production Ready
**Version:** 1.0.0
**Last Updated:** January 3, 2026
