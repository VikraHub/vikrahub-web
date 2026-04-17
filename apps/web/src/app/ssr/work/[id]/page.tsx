import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { fetchPublicContent, APIError } from '@/lib/api';
import { calculateReadingTime } from '@/lib/reading-time';
import PublicContentHeader from '@/components/public/PublicContentHeader';
import PublicCTABox from '@/components/public/PublicCTABox';

interface WorkPageProps {
  params: {
    id: string;
  };
}

/**
 * Generate metadata for Open Graph tags - Portfolio/Work item
 */
export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  try {
    const content = await fetchPublicContent('work', params.id);

    const title = content.title;
    const description = content.summary || content.content?.substring(0, 160) || '';
    const image = content.og_image;
    const url = content.og_url;

    return {
      title,
      description,
      openGraph: {
        type: 'article',
        title,
        description,
        url,
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
        publishedTime: content.publishedAt || content.createdAt,
        modifiedTime: content.updatedAt,
        authors: [content.author.display_name || content.author.username],
        tags: content.tags,
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [image],
        creator: `@${content.author.username}`,
      },
      alternates: {
        canonical: content.canonical_url,
      },
    };
  } catch (error) {
    if (error instanceof APIError && error.status === 404) {
      return {
        title: 'Portfolio Item Not Found - VikraHub',
        description: 'This portfolio item is not available.',
      };
    }

    return {
      title: 'VikraHub',
      description: 'Platform for creatives',
    };
  }
}

/**
 * Portfolio/Work Detail Page - SSR Version
 */
export default async function WorkPage({ params }: WorkPageProps) {
  let content;

  try {
    content = await fetchPublicContent('work', params.id);
  } catch (error) {
    if (error instanceof APIError && error.status === 404) {
      notFound();
    }
    throw error;
  }

  // Extract ID from content.url (e.g., "/portfolio/123") for proper app navigation
  const id = content.url.split('/').pop() || params.id;
  const continueUrl = `https://app.vikrahub.com/portfolio/${id}`;

  return (
    <main style={{
      minHeight: '100vh',
      background: 'var(--vh-bg)',
      paddingBottom: '0',
    }}>
      {/* Skip Link for Accessibility */}
      <a
        href="#main-content"
        className="vh-skip-link"
        style={{
          position: 'absolute',
          top: '-100px',
          left: '0',
          background: 'var(--vh-accent)',
          color: 'var(--vh-bg)',
          padding: '12px 24px',
          zIndex: 9999,
          fontWeight: 600,
          textDecoration: 'none',
          borderRadius: '0 0 8px 0',
        }}
      >
        Skip to content
      </a>

      {/* Back Navigation */}
      <div style={{
        padding: '20px 24px',
        borderBottom: '1px solid var(--vh-border)',
        background: 'rgba(255, 250, 254, 0.02)',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Link
            href="/"
            aria-label="Go back to discover more content"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--vh-text)',
              fontSize: '14px',
              fontWeight: 600,
              padding: '8px 16px',
              borderRadius: '8px',
              transition: 'all 0.2s',
              background: 'transparent',
            }}
            className="vh-back-link"
          >
            <span style={{ fontSize: '16px' }} aria-hidden="true">←</span>
            Discover More
          </Link>
        </div>
      </div>

      {/* Main Content Container */}
      <article id="main-content" style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '0 clamp(16px, 5vw, 32px) 48px',
      }}>
        {/* Content Header */}
        <PublicContentHeader
          type="Portfolio"
          title={content.title}
          creator={{
            name: content.author.display_name || content.author.username,
            avatar: content.author.avatar,
          }}
          date={new Date(content.publishedAt || content.createdAt).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}          readingTime={calculateReadingTime(content.content || '')}          views={content.counts?.views}
          engagement={{
            likes: content.counts?.likes,
            comments: content.counts?.comments,
          }}
        />

        {/* Cover Image - Only show if exists */}
        {content.og_image && (
          <div style={{
            marginBottom: '48px',
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16 / 9',
              maxHeight: '500px',
              overflow: 'hidden',
              borderRadius: '12px',
            }}>
              <Image
                src={content.og_image}
                alt={content.title}
                fill
                style={{ objectFit: 'cover' }}
                priority
                sizes="(max-width: 768px) 100vw, 900px"
                quality={85}
              />
            </div>
          </div>
        )}

        {/* Content Body - Rich Text */}
        <div
          className="vh-content-body"
          style={{
            marginBottom: '48px',
            color: 'var(--vh-text)',
            lineHeight: 1.8,
          }}
          dangerouslySetInnerHTML={{ __html: content.content || '' }}
        />

        {/* Media Gallery - Show all additional images */}
        {content.media && content.media.length > 0 && (
          <div style={{
            marginBottom: '48px',
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              marginBottom: '24px',
              color: 'var(--vh-text)',
            }}>Project Images</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
            }}>
              {content.media.map((media, index) => (
                <div
                  key={index}
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '4 / 3',
                    overflow: 'hidden',
                    borderRadius: '12px',
                  }}
                >
                  <Image
                    src={media.url}
                    alt={`${content.title} - Image ${index + 1}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 450px"
                    quality={85}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <PublicCTABox
          message="Want to engage with this content? Join the conversation on VikraHub"
          primaryText="View on VikraHub →"
          primaryHref={continueUrl}
          secondaryText="Explore more content"
          secondaryHref="/"
        />
      </article>


      {/* Footer */}
      <footer style={{
        marginTop: '80px',
        padding: '48px 24px 32px',
        borderTop: '2px solid rgba(255, 160, 0, 0.2)',
        background: 'linear-gradient(180deg, transparent 0%, rgba(255, 250, 254, 0.02) 100%)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <p style={{
            fontSize: '15px',
            color: 'var(--vh-text)',
            marginBottom: '12px',
            fontWeight: 600,
          }}>
            Shared from <span style={{
              color: 'var(--vh-accent)',
              fontWeight: 700,
              fontSize: '16px',
            }}>VikraHub</span>
          </p>
          <p style={{
            fontSize: '13px',
            color: 'var(--vh-text-muted)',
            lineHeight: 1.6,
            marginBottom: '20px',
          }}>
            Platform for creatives to connect, share, and grow
          </p>
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            fontSize: '12px',
            color: 'var(--vh-text-muted)',
          }}>
            <Link href="/about" style={{ transition: 'color 0.2s' }}>About</Link>
            <span>•</span>
            <Link href="/terms" style={{ transition: 'color 0.2s' }}>Terms</Link>
            <span>•</span>
            <Link href="/privacy" style={{ transition: 'color 0.2s' }}>Privacy</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
