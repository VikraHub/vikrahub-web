/**
 * FeaturedCard Component
 *
 * Displays a content card with creator info, stats, and type badge
 */

import Link from 'next/link';
import Image from 'next/image';
import { TypeBadge } from './TypeBadge';
import { ContentData } from './types';

interface FeaturedCardProps {
  content: ContentData;
}

export function FeaturedCard({ content }: FeaturedCardProps) {
  // Determine the public route based on content type
  const getContentRoute = () => {
    const type = content.type.toLowerCase();
    if (type === 'post') return `/ssr/post/${content.id}`;
    if (type === 'blog') return `/ssr/blog/${content.url || content.id}`;
    if (type === 'work' || type === 'portfolio') return `/ssr/work/${content.id}`;
    return `/ssr/post/${content.id}`; // fallback
  };

  const formatCount = (count: number): string => {
    if (count >= 1000) return `${(count / 1000).toFixed(1)}k`;
    return count.toString();
  };

  return (
    <Link
      href={getContentRoute()}
      style={{
        display: 'block',
        backgroundColor: '#000223',
        border: '1.5px solid rgba(255, 160, 0, 0.2)',
        borderRadius: '12px',
        padding: '16px',
        transition: 'all 0.3s ease',
        textDecoration: 'none',
        color: 'inherit',
        height: '100%',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.borderColor = 'rgba(255, 160, 0, 0.6)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 160, 0, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'rgba(255, 160, 0, 0.2)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Type Badge */}
      <div style={{ marginBottom: '12px' }}>
        <TypeBadge type={content.type} />
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: '16px',
          fontWeight: 600,
          color: '#ffffff',
          marginBottom: '12px',
          lineHeight: '1.4',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
        }}
      >
        {content.title}
      </h3>

      {/* Creator Info */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '12px',
        }}
      >
        {content.author.avatar_url && (
          <Image
            src={content.author.avatar_url}
            alt={content.author.display_name || content.author.username}
            width={24}
            height={24}
            unoptimized
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
        )}
        <span
          style={{
            fontSize: '13px',
            color: '#ffa000',
            fontWeight: 500,
          }}
        >
          {content.author.display_name || content.author.username}
        </span>
      </div>

      {/* Stats */}
      <div
        style={{
          display: 'flex',
          gap: '16px',
          fontSize: '12px',
          color: 'rgba(255, 255, 255, 0.6)',
        }}
      >
        {content.counts.likes > 0 && (
          <span>
            <i className="fa-solid fa-heart" aria-hidden="true" /> {formatCount(content.counts.likes)}
          </span>
        )}
        {content.counts.comments > 0 && (
          <span>
            <i className="fa-solid fa-comment" aria-hidden="true" /> {formatCount(content.counts.comments)}
          </span>
        )}
        {content.counts.views && content.counts.views > 0 && (
          <span>
            <i className="fa-solid fa-eye" aria-hidden="true" /> {formatCount(content.counts.views)}
          </span>
        )}
      </div>
    </Link>
  );
}
