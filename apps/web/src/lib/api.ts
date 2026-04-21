/**
 * API Service for SSR
 *
 * Fetches public content from Django backend
 */

/**
 * Return the correct API base URL depending on runtime context.
 * - Server-side (SSR): use INTERNAL_API_URL (e.g. http://backend:8000 inside Docker)
 *   falling back to NEXT_PUBLIC_API_URL.
 * - Client-side (browser): always use the build-time NEXT_PUBLIC_API_URL.
 */
function getApiBaseUrl(): string {
  if (typeof window === 'undefined') {
    return process.env.INTERNAL_API_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
  }
  return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
}

const API_BASE_URL = getApiBaseUrl();
const PUBLIC_SITE_ORIGIN = (process.env.NEXT_PUBLIC_SITE_URL || 'https://vikrahub.com').replace(/\/$/, '');

export interface ContentData {
  id: string;
  type: string;
  url: string;
  title: string;
  summary?: string;
  content?: string;
  media?: Array<{ url: string; type: string }>;
  author: {
    id: number;
    username: string;
    display_name?: string;
    avatar?: string;
  };
  tags: string[];
  counts: {
    likes: number;
    comments: number;
    views: number;
    bookmarks: number;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  og_image: string;
  og_url: string;
  canonical_url: string;
}

export class APIError extends Error {
  constructor(
    message: string,
    public status: number,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public data?: any
  ) {
    super(message);
    this.name = 'APIError';
  }
}

/**
 * Fetch public content from Django API
 *
 * @param kind Content type: 'post', 'blog', or 'work'
 * @param ref Content identifier (ID or slug)
 * @returns Content data with OG metadata
 * @throws APIError if content not found or not public
 */
export async function fetchPublicContent(
  kind: 'post' | 'blog' | 'work',
  ref: string
): Promise<ContentData> {
  const url = `${API_BASE_URL}/api/content/public/content/${kind}/${ref}/`;

  try {
    const response = await fetch(url, {
      // No credentials - public API
      cache: 'no-store', // Always fetch fresh for SSR
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new APIError(
        errorData.detail || `Failed to fetch content: ${response.statusText}`,
        response.status,
        errorData
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }

    // Network or other errors
    throw new APIError(
      `Network error: ${error instanceof Error ? error.message : 'Unknown error'}`,
      500
    );
  }
}

/**
 * Fetch featured content for homepage
 *
 * Tries to fetch from featured endpoint, falls back to mixed latest content
 * @returns Array of featured content items
 */
export async function fetchFeaturedContent(): Promise<ContentData[]> {
  try {
    // Try featured endpoint first
    const url = `${API_BASE_URL}/api/content/public/featured/`;
    const response = await fetch(url, {
      cache: 'no-store',
      headers: { 'Accept': 'application/json' },
    });

    if (response.ok) {
      const data = await response.json();
      return data.slice(0, 12); // Limit to 12 items
    }
  } catch {
    console.warn('Featured endpoint failed, using fallback');
  }

  // Fallback: fetch latest from each type and mix
  try {
    const [posts, blogs, works] = await Promise.allSettled([
      fetch(`${API_BASE_URL}/api/content/public/posts/?limit=4`).then(r => r.ok ? r.json() : []),
      fetch(`${API_BASE_URL}/api/content/public/blogs/?limit=4`).then(r => r.ok ? r.json() : []),
      fetch(`${API_BASE_URL}/api/content/public/works/?limit=4`).then(r => r.ok ? r.json() : []),
    ]);

    const allContent: ContentData[] = [
      ...(posts.status === 'fulfilled' ? posts.value : []),
      ...(blogs.status === 'fulfilled' ? blogs.value : []),
      ...(works.status === 'fulfilled' ? works.value : []),
    ];

    // Sort by publishedAt or createdAt, most recent first
    return allContent
      .sort((a, b) => {
        const dateA = new Date(a.publishedAt || a.createdAt).getTime();
        const dateB = new Date(b.publishedAt || b.createdAt).getTime();
        return dateB - dateA;
      })
      .slice(0, 9); // Take top 9
  } catch (error) {
    console.error('Failed to fetch featured content:', error);
    return [];
  }
}

/**
 * Fetch latest content by type for discovery section
 *
 * @returns Object with latest posts, blogs, and works (2 each)
 */
export async function fetchLatestContent(): Promise<{
  posts: ContentData[];
  blogs: ContentData[];
  works: ContentData[];
}> {
  const result = {
    posts: [] as ContentData[],
    blogs: [] as ContentData[],
    works: [] as ContentData[],
  };

  try {
    const [postsRes, blogsRes, worksRes] = await Promise.allSettled([
      fetch(`${API_BASE_URL}/api/content/public/posts/?limit=2`, {
        cache: 'no-store',
        headers: { 'Accept': 'application/json' },
      }),
      fetch(`${API_BASE_URL}/api/content/public/blogs/?limit=2`, {
        cache: 'no-store',
        headers: { 'Accept': 'application/json' },
      }),
      fetch(`${API_BASE_URL}/api/content/public/works/?limit=2`, {
        cache: 'no-store',
        headers: { 'Accept': 'application/json' },
      }),
    ]);

    if (postsRes.status === 'fulfilled' && postsRes.value.ok) {
      result.posts = await postsRes.value.json();
    }
    if (blogsRes.status === 'fulfilled' && blogsRes.value.ok) {
      result.blogs = await blogsRes.value.json();
    }
    if (worksRes.status === 'fulfilled' && worksRes.value.ok) {
      result.works = await worksRes.value.json();
    }
  } catch (error) {
    console.error('Failed to fetch latest content:', error);
  }

  return result;
}

/**
 * Get absolute URL for a path
 */
export function getAbsoluteUrl(path: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001';
  return `${baseUrl.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}

/**
 * Normalize a backend-provided URL to the public web origin for social sharing metadata.
 * Keeps content-specific path/query/hash while preventing app-domain canonical/OG leakage.
 */
export function resolvePublicShareUrl(urlValue: string | undefined, fallbackPath: string): string {
  const normalizedFallbackPath = fallbackPath.startsWith('/') ? fallbackPath : `/${fallbackPath}`;

  if (!urlValue) {
    return `${PUBLIC_SITE_ORIGIN}${normalizedFallbackPath}`;
  }

  // Handle relative URLs directly.
  if (urlValue.startsWith('/')) {
    return `${PUBLIC_SITE_ORIGIN}${urlValue}`;
  }

  try {
    const url = new URL(urlValue);

    if (url.hostname === 'app.vikrahub.com') {
      const publicOrigin = new URL(PUBLIC_SITE_ORIGIN);
      url.protocol = publicOrigin.protocol;
      url.hostname = publicOrigin.hostname;
      url.port = publicOrigin.port;
    }

    return url.toString();
  } catch {
    return `${PUBLIC_SITE_ORIGIN}${normalizedFallbackPath}`;
  }
}
