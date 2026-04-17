/**
 * FeaturedGrid Component
 *
 * Displays a responsive grid of featured content cards
 */

import Link from 'next/link';
import PublicContentCard from './public/PublicContentCard';
import { ContentData } from './types';

interface FeaturedGridProps {
  content: ContentData[];
}

export function FeaturedGrid({ content }: FeaturedGridProps) {
  // Filter out undefined/null items
  const validContent = content.filter((item) => item != null && item.id && item.type);

  if (validContent.length === 0) {
    return (
      <div
        style={{
          textAlign: 'center',
          padding: '60px 20px',
          color: 'rgba(255, 250, 254, 0.6)',
        }}
      >
        <p>No featured content available at the moment.</p>
        <p style={{ marginTop: '8px' }}>Check back soon!</p>
      </div>
    );
  }

  return (
    <div>
      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px',
          marginBottom: '40px',
        }}
      >
        {validContent.map((item) => (
          <PublicContentCard key={`${item.type}-${item.id}`} content={item} variant="featured" />
        ))}
      </div>

      {/* View More Link */}
      <div style={{ textAlign: 'center' }}>
        <Link
          href="https://app.vikrahub.com"
          style={{
            display: 'inline-block',
            padding: '12px 32px',
            backgroundColor: 'transparent',
            border: '2px solid rgba(255, 160, 0, 0.4)',
            borderRadius: '8px',
            color: '#ffa000',
            fontSize: '15px',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 160, 0, 0.1)';
            e.currentTarget.style.borderColor = '#ffa000';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.borderColor = 'rgba(255, 160, 0, 0.4)';
          }}
        >
          View more content →
        </Link>
      </div>
    </div>
  );
}
