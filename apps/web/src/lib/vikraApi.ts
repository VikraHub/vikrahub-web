/**
 * VikraHub Public API Client
 * Read-only public content fetching for vikrahub.com
 */

/**
 * Return the correct API base URL depending on runtime context.
 * - Server-side (SSR): use INTERNAL_API_URL (e.g. http://backend:8000 inside Docker)
 *   falling back to NEXT_PUBLIC_API_URL.
 * - Client-side (browser): always use the build-time NEXT_PUBLIC_API_URL.
 */
function getApiBaseUrl(): string {
  if (typeof window === 'undefined') {
    // Server-side: prefer the runtime-only internal URL
    return process.env.INTERNAL_API_URL || process.env.NEXT_PUBLIC_API_URL || 'https://api.vikrahub.com';
  }
  return process.env.NEXT_PUBLIC_API_URL || 'https://api.vikrahub.com';
}

const API_BASE_URL = getApiBaseUrl();

export interface Creator {
  username: string;
  display_name?: string;
  avatar?: string;
  avatar_small?: string;    // 100x100px optimized
  avatar_medium?: string;   // 200x200px optimized
  avatar_large?: string;    // 400x400px optimized
}

export interface PublicContent {
  type: 'post' | 'blog' | 'portfolio';
  id: string;
  title: string;
  excerpt?: string;
  cover_image?: string;
  creator: Creator;
  published_at: string;
  canonical_url: string;
}

export interface DiscoverResponse {
  results: PublicContent[];
  next: string | null;
}

class VikraApiError extends Error {
  constructor(
    message: string,
    public status?: number,
    public endpoint?: string
  ) {
    super(message);
    this.name = 'VikraApiError';
  }
}

/**
 * Fetch featured work (homepage spotlight)
 * Revalidates every 15 minutes
 */
export async function fetchFeaturedWork(limit: number = 6): Promise<PublicContent[]> {
  const endpoint = `/api/v1/content/public/featured/?limit=${limit}`;
  const url = `${API_BASE_URL}${endpoint}`;

  try {
    const response = await fetch(url, {
      next: { revalidate: 900 }, // 15 minutes
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new VikraApiError(
        `Failed to fetch featured work: ${response.statusText}`,
        response.status,
        endpoint
      );
    }

    const data = await response.json();

    // Handle both array and paginated response formats
    const results = Array.isArray(data) ? data : data.results || [];

    return results;
  } catch (error) {
    if (error instanceof VikraApiError) {
      throw error;
    }

    throw new VikraApiError(
      `Network error fetching featured work: ${error instanceof Error ? error.message : 'Unknown error'}`,
      undefined,
      endpoint
    );
  }
}

/**
 * Fetch discover content (first page)
 * Revalidates every 3 minutes
 */
export async function fetchDiscoverContent(limit: number = 12): Promise<DiscoverResponse> {
  const endpoint = `/api/v1/content/public/discover/?limit=${limit}`;
  const url = `${API_BASE_URL}${endpoint}`;

  try {
    const response = await fetch(url, {
      next: { revalidate: 180 }, // 3 minutes
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new VikraApiError(
        `Failed to fetch discover content: ${response.statusText}`,
        response.status,
        endpoint
      );
    }

    const data = await response.json();

    return {
      results: data.results || [],
      next: data.next || null,
    };
  } catch (error) {
    if (error instanceof VikraApiError) {
      throw error;
    }

    throw new VikraApiError(
      `Network error fetching discover content: ${error instanceof Error ? error.message : 'Unknown error'}`,
      undefined,
      endpoint
    );
  }
}

/**
 * Fetch next page of discover content (client-side only)
 * Used by "Load More" button
 */
export async function fetchDiscoverMore(nextUrl: string): Promise<DiscoverResponse> {
  try {
    const response = await fetch(nextUrl, {
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new VikraApiError(
        `Failed to fetch more content: ${response.statusText}`,
        response.status,
        nextUrl
      );
    }

    const data = await response.json();

    return {
      results: data.results || [],
      next: data.next || null,
    };
  } catch (error) {
    if (error instanceof VikraApiError) {
      throw error;
    }

    throw new VikraApiError(
      `Network error fetching more content: ${error instanceof Error ? error.message : 'Unknown error'}`,
      undefined,
      nextUrl
    );
  }
}
