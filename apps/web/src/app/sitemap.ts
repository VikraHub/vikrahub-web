import type { MetadataRoute } from 'next';

const SITE_URL = 'https://vikrahub.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Keep sitemap focused on stable public pages.
  // Dynamic SSR share routes are intentionally excluded for now.
  const routes = [
    '/',
    '/about',
    '/why-vikrahub',
    '/innovation',
    '/community',
    '/contact',
    '/vision',
    '/how-it-works',
    '/privacy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }));
}