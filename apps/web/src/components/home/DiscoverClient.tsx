'use client';

import { useState } from 'react';
import { PublicContent, fetchDiscoverMore } from '@/lib/vikraApi';
import PublicContentCard from '@/components/public/PublicContentCard';
import styles from './DiscoverSection.module.css';

interface DiscoverClientProps {
  initialContent: PublicContent[];
  initialNext: string | null;
}

export default function DiscoverClient({ initialContent, initialNext }: DiscoverClientProps) {
  const [content, setContent] = useState<PublicContent[]>(initialContent);
  const [nextUrl, setNextUrl] = useState<string | null>(initialNext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLoadMore = async () => {
    if (!nextUrl || loading) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetchDiscoverMore(nextUrl);
      setContent((prev) => [...prev, ...response.results]);
      setNextUrl(response.next);
    } catch (err) {
      setError('Failed to load more content. Please try again.');
      console.error('Load more error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={styles.grid}>
        {content.filter(item => item != null && item.id).map((item) => {
          // Extract appropriate identifier from canonical URL
          let urlIdentifier = item.id;
          if (item.canonical_url) {
            const urlParts = item.canonical_url.split('/').filter(part => part);
            urlIdentifier = urlParts[urlParts.length - 1] || item.id;
          }

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const contentData: any = {
            id: item.id,
            type: item.type,
            url: urlIdentifier, // Extracted from canonical_url (slug for blogs, ID for posts/works)
            title: item.title,
            summary: item.excerpt || '',
            content: item.excerpt || '',
            author: {
              id: 0,
              username: item.creator?.username || '',
              display_name: item.creator?.display_name,
              avatar: item.creator?.avatar,
              avatar_small: item.creator?.avatar_small,
              avatar_medium: item.creator?.avatar_medium,
            },
            counts: {
              likes: 0,
              comments: 0,
              views: 0,
            },
            createdAt: item.published_at,
            publishedAt: item.published_at,
            og_image: item.cover_image || '',
            og_url: item.canonical_url,
            canonical_url: item.canonical_url,
          };

          return (
            <PublicContentCard
              key={item.id}
              content={contentData}
              variant="standard"
            />
          );
        })}
      </div>

      {error && (
        <div className={styles.errorMessage}>
          {error}
        </div>
      )}

      {nextUrl && (
        <div className={styles.loadMoreContainer}>
          <button
            onClick={handleLoadMore}
            disabled={loading}
            className={styles.loadMoreButton}
          >
            {loading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}

      {!nextUrl && content.length > 0 && (
        <div className={styles.endMessage}>
          You&apos;ve reached the end! 🎉
        </div>
      )}
    </>
  );
}
