/**
 * PublicContentCard - Unified card component for public content display
 *
 * Consolidates FeaturedCard, DiscoverCard, and original PublicContentCard
 * Implements WCAG AA accessibility, consistent spacing, and visual hierarchy
 *
 * @component
 * @example
 * <PublicContentCard
 *   content={contentData}
 *   variant="featured"  // or "standard"
 * />
 */

import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';

interface Author {
  id?: number;
  name?: string;
  display_name?: string;
  username?: string;
  avatar?: string;
  avatar_small?: string;
  avatar_medium?: string;
  avatar_large?: string;
}

interface Counts {
  likes: number;
  comments: number;
  views?: number;
}

interface ContentData {
  id: string;
  type: string;
  title: string;
  summary?: string;
  content?: string;
  og_image?: string;
  url?: string;
  author: Author;
  publishedAt?: string;
  createdAt?: string;
  counts: Counts;
}

interface PublicContentCardProps {
  content: ContentData;
  variant?: 'featured' | 'standard';
}

/**
 * Smart text truncation that respects word boundaries
 */
function truncateText(text: string, maxLength: number = 140): string {
  const clean = text
    .replace(/<[^>]*>/g, '')  // Remove HTML tags
    .replace(/&[a-z]+;/gi, ' ')  // Remove HTML entities
    .trim();

  if (clean.length <= maxLength) return clean;

  // Find last space before maxLength
  const truncated = clean.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');

  return truncated.substring(0, lastSpace > 0 ? lastSpace : maxLength) + '...';
}

/**
 * Format engagement counts (1234 → 1.2k)
 */
function formatCount(count: number): string {
  if (count >= 1000) return `${(count / 1000).toFixed(1)}k`;
  return count.toString();
}

export default function PublicContentCard({
  content,
  variant = 'standard',
}: PublicContentCardProps) {
  // Determine route based on content type
  const href = useMemo(() => {
    if (!content?.type) return '/';
    const type = content.type.toLowerCase();
    const identifier = content.url || content.id;
    if (type === 'post') return `/ssr/post/${identifier}`;
    if (type === 'blog') return `/ssr/blog/${identifier}`;
    if (type === 'work' || type === 'portfolio') return `/ssr/work/${identifier}`;
    return `/ssr/post/${identifier}`;
  }, [content?.type, content?.id, content?.url]);

  // Get author name and avatar with size optimization
  const authorName = content?.author?.display_name || content?.author?.username || content?.author?.name || 'Anonymous';
  const authorAvatar = content?.author?.avatar_small || content?.author?.avatar ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(authorName)}&background=ffa000&color=fff&size=80`;

  // Format date
  const formattedDate = useMemo(() => {
    const dateStr = content?.publishedAt || content?.createdAt;
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  }, [content?.publishedAt, content?.createdAt]);

  // Get excerpt with smart truncation
  const excerpt = useMemo(() => {
    const text = content?.summary || content?.content || '';
    return truncateText(text, variant === 'featured' ? 120 : 140);
  }, [content?.summary, content?.content, variant]);

  // Guard: Return null if content is undefined
  if (!content) {
    console.error('PublicContentCard: content prop is undefined');
    return null;
  }

  // Variant-specific styles
  const isFeatured = variant === 'featured';
  const cardPadding = isFeatured ? 'clamp(12px, 3vw, 16px)' : 'clamp(16px, 4vw, 20px)';

  return (
    <Link
      href={href}
      className="vh-content-card"
      aria-label={`Read ${content?.type || 'content'}: ${content?.title || 'Untitled'} by ${authorName}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none',
        minHeight: content?.og_image ? (isFeatured ? '420px' : '480px') : '280px',
        maxHeight: content?.og_image ? (isFeatured ? '420px' : '480px') : '380px',
        maxWidth: '420px',
        width: '100%',
      }}
    >
      {/* Cover Image - 16:9 aspect ratio */}
      {content?.og_image && (
        <div style={{
          position: 'relative',
          width: '100%',
          height: isFeatured ? '160px' : '200px',
          minHeight: isFeatured ? '160px' : '200px',
          maxHeight: isFeatured ? '160px' : '200px',
          borderRadius: 'var(--vh-radius-lg) var(--vh-radius-lg) 0 0',
          overflow: 'hidden',
          backgroundColor: 'var(--vh-surface-1)',
          flexShrink: 0,
        }}>
          <Image
            src={content.og_image}
            alt={content?.title || 'Content image'}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            quality={75}
            loading="lazy"
          />
          {/* Type badge overlay on image */}
          <div style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
          }}>
            <span className="vh-badge">{content?.type || 'Content'}</span>
          </div>
        </div>
      )}

      {/* Card Content */}
      <div style={{
        padding: cardPadding,
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        minHeight: 0,
        overflow: 'hidden',
      }}>
        {/* Type badge (if no image) */}
        {!content?.og_image && (
          <div style={{ marginBottom: 'var(--vh-spacing-sm)' }}>
            <span className="vh-badge">{content?.type || 'Content'}</span>
          </div>
        )}

        {/* Title - 2 line clamp */}
        <h3
          className="vh-card-title"
          style={{
            fontSize: isFeatured ? 'clamp(15px, 3.5vw, 16px)' : 'clamp(16px, 4vw, 18px)',
            fontWeight: 700,
            color: 'var(--vh-text)',
            marginBottom: 'clamp(8px, 2vw, 12px)',
            lineHeight: 1.4,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {content?.title || 'Untitled'}
        </h3>

        {/* Excerpt - 3 line clamp */}
        {excerpt && (
          <p style={{
            fontSize: 'clamp(13px, 3vw, 14px)',
            color: 'var(--vh-text-secondary)',
            lineHeight: 1.6,
            marginBottom: 'clamp(12px, 3vw, 16px)',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
          }}>
            {excerpt}
          </p>
        )}

        {/* Footer: Creator + Engagement */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 'clamp(12px, 3vw, 16px)',
          borderTop: '1px solid var(--vh-border)',
          gap: 'clamp(8px, 2vw, 12px)',
          flexWrap: 'wrap',
        }}>
          {/* Creator Info */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            minWidth: 0,
            flex: 1,
          }}>
            <Image
              src={authorAvatar}
              alt={authorName}
              width={40}
              height={40}
              style={{
                borderRadius: '50%',
                flexShrink: 0,
              }}
            />
            <div style={{ minWidth: 0 }}>
              <p style={{
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--vh-text)',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}>
                {authorName}
              </p>
              {formattedDate && (
                <p style={{
                  fontSize: '11px',
                  color: 'var(--vh-text-secondary)',
                }}>
                  {formattedDate}
                </p>
              )}
            </div>
          </div>

          {/* Engagement Stats */}
          <div
            className="vh-card-stats"
            style={{
              display: 'flex',
              gap: '12px',
              fontSize: '12px',
              color: 'var(--vh-text-secondary)',
              flexShrink: 0,
            }}
          >
            {content?.counts?.likes > 0 && (
              <span
                aria-label={`${content.counts.likes} likes`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  minWidth: '44px',
                  minHeight: '24px',
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="var(--vh-accent)"
                  aria-hidden="true"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                {formatCount(content.counts.likes)}
              </span>
            )}
            {content?.counts?.comments > 0 && (
              <span
                aria-label={`${content.counts.comments} comments`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  minWidth: '44px',
                  minHeight: '24px',
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                {formatCount(content.counts.comments)}
              </span>
            )}
            {content?.counts?.views && content.counts.views > 0 && (
              <span
                aria-label={`${content.counts.views} views`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  minWidth: '44px',
                  minHeight: '24px',
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
                {formatCount(content.counts.views)}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
