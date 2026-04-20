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
import styles from './PublicContentCard.module.css';

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

  const cardClasses = [
    'vh-content-card',
    styles.card,
    content?.og_image
      ? (isFeatured ? styles.cardFeaturedImage : styles.cardWithImage)
      : styles.cardNoImage,
  ].join(' ');

  return (
    <Link
      href={href}
      className={cardClasses}
      aria-label={`Read ${content?.type || 'content'}: ${content?.title || 'Untitled'} by ${authorName}`}
    >
      {/* Cover Image */}
      {content?.og_image && (
        <div className={`${styles.coverImage} ${isFeatured ? styles.coverImageFeatured : ''}`}>
          <Image
            src={content.og_image}
            alt={content?.title || 'Content image'}
            fill
            className={styles.coverImg}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            quality={75}
            loading="lazy"
          />
          <div className={styles.badgeOverlay}>
            <span className="vh-badge">{content?.type || 'Content'}</span>
          </div>
        </div>
      )}

      {/* Card Content */}
      <div className={`${styles.cardBody} ${isFeatured ? styles.cardBodyFeatured : ''}`}>
        {/* Type badge (if no image) */}
        {!content?.og_image && (
          <div className={styles.badgeInline}>
            <span className="vh-badge">{content?.type || 'Content'}</span>
          </div>
        )}

        {/* Title */}
        <h3 className={`vh-card-title ${styles.title} ${isFeatured ? styles.titleFeatured : ''}`}>
          {content?.title || 'Untitled'}
        </h3>

        {/* Excerpt */}
        {excerpt && (
          <p className={styles.excerpt}>{excerpt}</p>
        )}

        {/* Footer: Creator + Engagement */}
        <div className={styles.footer}>
          <div className={styles.creator}>
            <Image
              src={authorAvatar}
              alt={authorName}
              width={40}
              height={40}
              className={styles.avatar}
            />
            <div className={styles.creatorInfo}>
              <p className={styles.creatorName}>{authorName}</p>
              {formattedDate && (
                <p className={styles.creatorDate}>{formattedDate}</p>
              )}
            </div>
          </div>

          {/* Engagement Stats */}
          <div className={`vh-card-stats ${styles.stats}`}>
            {content?.counts?.likes > 0 && (
              <span className={styles.stat} aria-label={`${content.counts.likes} likes`}>
                <i className={`fa-solid fa-heart ${styles.statIconAccent}`} aria-hidden="true" />
                {formatCount(content.counts.likes)}
              </span>
            )}
            {content?.counts?.comments > 0 && (
              <span className={styles.stat} aria-label={`${content.counts.comments} comments`}>
                <i className={`fa-solid fa-comment ${styles.statIcon}`} aria-hidden="true" />
                {formatCount(content.counts.comments)}
              </span>
            )}
            {content?.counts?.views && content.counts.views > 0 && (
              <span className={styles.stat} aria-label={`${content.counts.views} views`}>
                <i className={`fa-solid fa-eye ${styles.statIcon}`} aria-hidden="true" />
                {formatCount(content.counts.views)}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
