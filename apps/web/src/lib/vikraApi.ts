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

export interface PublicCreatorProfile {
  username: string;
  display_name?: string;
  bio?: string;
  avatar?: string;
  location?: string;
  role?: string;
  same_as?: string[];
  app_profile_url?: string;
  activity: PublicContent[];
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

function normalizeContentType(type: string | undefined): 'post' | 'blog' | 'portfolio' {
  const normalized = (type || '').toLowerCase();
  if (normalized === 'blog') return 'blog';
  if (normalized === 'portfolio' || normalized === 'work') return 'portfolio';
  return 'post';
}

function normalizePublicContent(item: unknown): PublicContent | null {
  if (!item || typeof item !== 'object') return null;

  const raw = item as Record<string, unknown>;
  const creatorRaw = (raw.creator || raw.author || {}) as Record<string, unknown>;
  const creatorUsername =
    typeof creatorRaw.username === 'string' ? creatorRaw.username : undefined;

  const idValue =
    typeof raw.id === 'string' || typeof raw.id === 'number'
      ? String(raw.id)
      : undefined;

  const titleValue = typeof raw.title === 'string' ? raw.title : undefined;
  if (!idValue || !titleValue || !creatorUsername) return null;

  return {
    type: normalizeContentType(raw.type as string | undefined),
    id: idValue,
    title: titleValue,
    excerpt: typeof raw.excerpt === 'string'
      ? raw.excerpt
      : typeof raw.summary === 'string'
        ? raw.summary
        : undefined,
    cover_image: typeof raw.cover_image === 'string'
      ? raw.cover_image
      : typeof raw.og_image === 'string'
        ? raw.og_image
        : undefined,
    creator: {
      username: creatorUsername,
      display_name:
        typeof creatorRaw.display_name === 'string'
          ? creatorRaw.display_name
          : typeof creatorRaw.name === 'string'
            ? creatorRaw.name
            : undefined,
      avatar:
        typeof creatorRaw.avatar === 'string'
          ? creatorRaw.avatar
          : typeof creatorRaw.avatar_url === 'string'
            ? creatorRaw.avatar_url
            : undefined,
      avatar_small: typeof creatorRaw.avatar_small === 'string' ? creatorRaw.avatar_small : undefined,
      avatar_medium: typeof creatorRaw.avatar_medium === 'string' ? creatorRaw.avatar_medium : undefined,
      avatar_large: typeof creatorRaw.avatar_large === 'string' ? creatorRaw.avatar_large : undefined,
    },
    published_at:
      typeof raw.published_at === 'string'
        ? raw.published_at
        : typeof raw.publishedAt === 'string'
          ? raw.publishedAt
          : typeof raw.createdAt === 'string'
            ? raw.createdAt
            : new Date().toISOString(),
    canonical_url:
      typeof raw.canonical_url === 'string'
        ? raw.canonical_url
        : typeof raw.url === 'string'
          ? raw.url
          : '',
  };
}

function normalizeProfilePayload(raw: unknown): PublicCreatorProfile | null {
  if (!raw || typeof raw !== 'object') return null;

  const data = raw as Record<string, unknown>;
  const profileContainer =
    (data.profile as Record<string, unknown> | undefined) ||
    (data.creator as Record<string, unknown> | undefined) ||
    (data.user as Record<string, unknown> | undefined) ||
    data;

  const username =
    typeof profileContainer.username === 'string' ? profileContainer.username : undefined;

  if (!username) return null;

  const activityRaw =
    (data.activity as unknown[]) ||
    (data.content as unknown[]) ||
    (data.results as unknown[]) ||
    [];

  const activity = Array.isArray(activityRaw)
    ? activityRaw
        .map(normalizePublicContent)
        .filter((item): item is PublicContent => item !== null)
    : [];

  const sameAsRaw =
    (profileContainer.same_as as unknown[]) ||
    (profileContainer.sameAs as unknown[]) ||
    [];

  return {
    username,
    display_name:
      typeof profileContainer.display_name === 'string'
        ? profileContainer.display_name
        : typeof profileContainer.name === 'string'
          ? profileContainer.name
          : undefined,
    bio:
      typeof profileContainer.bio === 'string'
        ? profileContainer.bio
        : typeof profileContainer.summary === 'string'
          ? profileContainer.summary
          : typeof profileContainer.about === 'string'
            ? profileContainer.about
            : undefined,
    avatar:
      typeof profileContainer.avatar === 'string'
        ? profileContainer.avatar
        : typeof profileContainer.avatar_url === 'string'
          ? profileContainer.avatar_url
          : undefined,
    location: typeof profileContainer.location === 'string' ? profileContainer.location : undefined,
    role: typeof profileContainer.role === 'string' ? profileContainer.role : undefined,
    same_as: Array.isArray(sameAsRaw)
      ? sameAsRaw.filter((url): url is string => typeof url === 'string')
      : [],
    app_profile_url:
      typeof profileContainer.app_profile_url === 'string'
        ? profileContainer.app_profile_url
        : typeof profileContainer.profile_url === 'string'
          ? profileContainer.profile_url
          : undefined,
    activity,
  };
}

async function fetchJson(endpoint: string): Promise<unknown> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    cache: 'no-store',
    headers: {
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    throw new VikraApiError(
      `Failed to fetch endpoint: ${response.statusText}`,
      response.status,
      endpoint
    );
  }

  return response.json();
}

/**
 * Phase A creator profile fetch strategy:
 * 1) Try explicit public profile endpoints if available.
 * 2) Fallback to public discover/featured feeds and infer creator activity by username.
 * Returns null when no public creator footprint is found.
 */
export async function fetchPublicCreatorProfile(username: string): Promise<PublicCreatorProfile | null> {
  const normalizedUsername = username.trim().toLowerCase();
  if (!normalizedUsername) return null;

  const candidateEndpoints = [
    `/api/v1/content/public/creators/${encodeURIComponent(normalizedUsername)}/`,
    `/api/v1/content/public/creator/${encodeURIComponent(normalizedUsername)}/`,
    `/api/v1/creators/public/${encodeURIComponent(normalizedUsername)}/`,
    `/api/v1/profiles/public/${encodeURIComponent(normalizedUsername)}/`,
    `/api/content/public/creators/${encodeURIComponent(normalizedUsername)}/`,
  ];

  for (const endpoint of candidateEndpoints) {
    try {
      const payload = await fetchJson(endpoint);
      const parsed = normalizeProfilePayload(payload);

      if (parsed && parsed.username.toLowerCase() === normalizedUsername) {
        return parsed;
      }
    } catch (error) {
      if (error instanceof VikraApiError && error.status === 404) {
        continue;
      }
    }
  }

  // Fallback: infer creator from currently available public content feeds.
  try {
    const [discover, featured] = await Promise.all([
      fetchDiscoverContent(60),
      fetchFeaturedWork(24),
    ]);

    const all = [...discover.results, ...featured];
    const activity = all.filter(
      (item) => item.creator?.username?.toLowerCase() === normalizedUsername
    );

    if (activity.length === 0) {
      return null;
    }

    const first = activity[0];
    return {
      username: first.creator.username,
      display_name: first.creator.display_name,
      bio: undefined,
      avatar: first.creator.avatar_large || first.creator.avatar_medium || first.creator.avatar,
      location: undefined,
      role: 'Creator on VikraHub',
      same_as: [],
      app_profile_url: `https://app.vikrahub.com/${encodeURIComponent(first.creator.username)}`,
      activity,
    };
  } catch {
    return null;
  }
}
