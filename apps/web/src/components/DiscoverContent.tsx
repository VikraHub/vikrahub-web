/**
 * DiscoverContent Component
 *
 * Displays latest content organized by type
 * Calm, readable layout with clear separation
 */

import PublicContentCard from './public/PublicContentCard';
import { ContentData } from './types';

interface DiscoverContentProps {
  posts: ContentData[];
  blogs: ContentData[];
  works: ContentData[];
}

export function DiscoverContent({ posts, blogs, works }: DiscoverContentProps) {
  // Filter out undefined/null items from all arrays
  const validPosts = posts.filter((item) => item != null && item.id && item.type);
  const validBlogs = blogs.filter((item) => item != null && item.id && item.type);
  const validWorks = works.filter((item) => item != null && item.id && item.type);

  const hasAnyContent = validPosts.length > 0 || validBlogs.length > 0 || validWorks.length > 0;

  if (!hasAnyContent) {
    return (
      <div
        style={{
          textAlign: 'center',
          padding: '60px 20px',
          color: 'rgba(255, 250, 254, 0.5)',
        }}
      >
        <p style={{ fontSize: '16px' }}>No content available yet.</p>
        <p style={{ fontSize: '14px', marginTop: '8px' }}>
          Check back soon for creative work from our community.
        </p>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      {/* Posts Section */}
      {validPosts.length > 0 && (
        <div>
          <h3
            style={{
              fontSize: '20px',
              fontWeight: 600,
              color: 'rgba(255, 250, 254, 0.9)',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
            }}
          >
            Latest Posts
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '20px',
            }}
          >
            {validPosts.map((post) => (
              <PublicContentCard key={post.id} content={post} variant="standard" />
            ))}
          </div>
        </div>
      )}

      {/* Blogs Section */}
      {validBlogs.length > 0 && (
        <div>
          <h3
            style={{
              fontSize: '20px',
              fontWeight: 600,
              color: 'rgba(255, 250, 254, 0.9)',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
            }}
          >
            Latest Blogs
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '20px',
            }}
          >
            {validBlogs.map((blog) => (
              <PublicContentCard key={blog.id} content={blog} variant="standard" />
            ))}
          </div>
        </div>
      )}

      {/* Portfolio/Works Section */}
      {validWorks.length > 0 && (
        <div>
          <h3
            style={{
              fontSize: '20px',
              fontWeight: 600,
              color: 'rgba(255, 250, 254, 0.9)',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
            }}
          >
            Latest Portfolio Work
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '20px',
            }}
          >
            {validWorks.map((work) => (
              <PublicContentCard key={work.id} content={work} variant="standard" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
