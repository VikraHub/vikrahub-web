/**
 * PublicContentHeader - Reusable header for SSR detail pages
 * Used in: /ssr/post/[id], /ssr/blog/[slug], /ssr/work/[id]
 */

import Image from 'next/image';

interface PublicContentHeaderProps {
  type: string; // "Post", "Blog", "Work"
  title: string;
  creator: {
    name: string;
    avatar?: string;
    avatar_small?: string;
    avatar_medium?: string;
  };
  date: string;
  views?: number;
  readingTime?: number; // in minutes
  engagement?: {
    likes?: number;
    comments?: number;
  };
}

export default function PublicContentHeader({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type,
  title,
  creator,
  date,
  views,
  readingTime,
  engagement,
}: PublicContentHeaderProps) {
  // Use optimized avatar size (prefer avatar_medium for headers, fallback to avatar)
  const avatarUrl = creator.avatar_medium || creator.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(creator.name)}&background=ffa000&color=fff&size=80`;

  return (
    <div style={{
      maxWidth: '900px',
      margin: '0 auto',
      padding: 'clamp(20px, 5vw, 32px) clamp(16px, 4vw, 24px)',
      textAlign: 'left',
    }}>
      {/* Title - No badge, content speaks for itself */}
      <h1 style={{
        fontSize: 'clamp(28px, 4.5vw, 38px)',
        fontWeight: 700,
        color: 'var(--vh-text)',
        marginBottom: '24px',
        lineHeight: 1.3,
        fontFamily: 'var(--vh-font-display)',
      }}>
        {title}
      </h1>

      {/* Author Block - Improved layout */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '20px',
      }}>
        {/* Avatar */}
        <Image
          src={avatarUrl}
          alt={creator.name}
          width={48}
          height={48}
          style={{
            borderRadius: '50%',
            border: '2px solid var(--vh-border)',
            flexShrink: 0,
          }}
        />

        {/* Name + Metadata stacked */}
        <div>
          <p style={{
            fontSize: '15px',
            fontWeight: 600,
            color: 'var(--vh-text)',
            margin: 0,
            marginBottom: '4px',
          }}>
            {creator.name}
          </p>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '12px',
            color: 'var(--vh-text-muted)',
            flexWrap: 'wrap',
          }}>
            {/* Date */}
            <span style={{ whiteSpace: 'nowrap' }}>
              {date}
            </span>

            {/* Reading Time */}
            {readingTime !== undefined && (
              <>
                <span style={{ opacity: 0.5 }}>•</span>
                <span style={{ whiteSpace: 'nowrap' }}>
                  {readingTime} min read
                </span>
              </>
            )}

            {/* Views */}
            {views !== undefined && (
              <>
                <span style={{ opacity: 0.5 }}>•</span>
                <span style={{ whiteSpace: 'nowrap' }}>
                  👁 {views.toLocaleString()} views
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Engagement Stats Bar - Separated from author */}
      {engagement && (engagement.likes !== undefined || engagement.comments !== undefined) && (
        <div style={{
          display: 'flex',
          gap: '12px',
          padding: '16px 0',
          borderTop: '1px solid var(--vh-border)',
          borderBottom: '1px solid var(--vh-border)',
          marginBottom: '32px',
        }}>
          {engagement.likes !== undefined && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              background: 'rgba(255, 160, 0, 0.12)',
              border: '1px solid rgba(255, 160, 0, 0.3)',
              borderRadius: '24px',
              fontSize: '13px',
              color: 'var(--vh-accent)',
              fontWeight: 600,
            }}>
              <span style={{ fontSize: '16px' }}>♥</span>
              <span>{engagement.likes.toLocaleString()}</span>
            </div>
          )}
          {engagement.comments !== undefined && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              background: 'var(--vh-surface)',
              border: '1px solid var(--vh-border)',
              borderRadius: '24px',
              fontSize: '13px',
              color: 'var(--vh-text-muted)',
              fontWeight: 600,
            }}>
              <span style={{ fontSize: '16px' }}>💬</span>
              <span>{engagement.comments.toLocaleString()}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
