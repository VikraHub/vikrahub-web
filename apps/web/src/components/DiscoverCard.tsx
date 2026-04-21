/**
 * DiscoverCard Component
 *
 * Simple, calm card for discovery section
 * Shows: title, author, excerpt, type badge
 */

import Link from 'next/link';
import Image from 'next/image';
import { TypeBadge } from './TypeBadge';
import { ContentData } from './types';

interface DiscoverCardProps {
  content: ContentData;
}

export function DiscoverCard({ content }: DiscoverCardProps) {
  // Determine the public route based on content type
  const getContentRoute = () => {
    const type = content.type.toLowerCase();
    if (type === 'post') return `/ssr/post/${content.id}`;
    if (type === 'blog') return `/ssr/blog/${content.url || content.id}`;
    if (type === 'work' || type === 'portfolio') return `/ssr/work/${content.id}`;
    return `/ssr/post/${content.id}`;
  };

  // Get excerpt - first 120 chars of summary or content
  const excerpt = (content.summary || content.content || '')
    .replace(/<[^>]*>/g, '') // Strip HTML
    .slice(0, 120)
    .trim();

  return (
    <Link
      href={getContentRoute()}
      style={{
        display: 'block',
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 160, 0, 0.15)',
        borderRadius: '8px',
        padding: '20px',
        transition: 'all 0.25s ease',
        textDecoration: 'none',
        color: 'inherit',
        height: '100%',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(255, 160, 0, 0.05)';
        e.currentTarget.style.borderColor = 'rgba(255, 160, 0, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
        e.currentTarget.style.borderColor = 'rgba(255, 160, 0, 0.15)';
      }}
    >
      {/* Type Badge */}
      <div style={{ marginBottom: '12px' }}>
        <TypeBadge type={content.type} />
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: '18px',
          fontWeight: 600,
          color: '#ffffff',
          marginBottom: '10px',
          lineHeight: '1.4',
        }}
      >
        {content.title}
      </h3>

      {/* Excerpt */}
      {excerpt && (
        <p
          style={{
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.65)',
            lineHeight: '1.6',
            marginBottom: '12px',
          }}
        >
          {excerpt}
          {excerpt.length === 120 ? '...' : ''}
        </p>
      )}

      {/* Author */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '13px',
          color: '#ffa000',
        }}
      >
        {content.author.avatar_url && (
          <Image
            src={content.author.avatar_url}
            alt={content.author.display_name || content.author.username}
            width={20}
            height={20}
            unoptimized
            style={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
        )}
        <span>{content.author.display_name || content.author.username}</span>
      </div>
    </Link>
  );
}
