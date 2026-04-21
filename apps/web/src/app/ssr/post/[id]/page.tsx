import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { fetchPublicContent, APIError } from '@/lib/api';
import { calculateReadingTime } from '@/lib/reading-time';
import PublicContentHeader from '@/components/public/PublicContentHeader';
import PublicCTABox from '@/components/public/PublicCTABox';
import styles from '../../SSRDetail.module.css';

const PUBLIC_SHARE_ORIGIN = 'https://vikrahub.com';
const DEFAULT_OG_IMAGE = `${PUBLIC_SHARE_ORIGIN}/og-default.png`;

function getPublicSsrUrl(path: string): string {
  return `${PUBLIC_SHARE_ORIGIN}${path}`;
}

function getOgImageUrl(imageUrl?: string): string {
  if (!imageUrl) {
    return DEFAULT_OG_IMAGE;
  }

  try {
    return new URL(imageUrl).toString();
  } catch {
    return DEFAULT_OG_IMAGE;
  }
}

interface PostPageProps {
  params: {
    id: string;
  };
}

/**
 * Generate metadata for Open Graph tags
 * This runs on the server and generates proper OG tags for social sharing
 */
export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  try {
    const content = await fetchPublicContent('post', params.id);

    const title = content.title || 'Post on VikraHub';
    const description = content.summary || content.content?.substring(0, 160) || 'Check out this post on VikraHub';
    const canonicalUrl = getPublicSsrUrl(`/ssr/post/${params.id}`);
    const metadataUrl = canonicalUrl;
    const image = getOgImageUrl(content.og_image);

    return {
      title,
      description,
      openGraph: {
        type: 'article',
        title,
        description,
        url: metadataUrl,
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
        canonical: canonicalUrl,
      },
    };
  } catch (error) {
    // If content not found, return basic metadata
    if (error instanceof APIError && error.status === 404) {
      return {
        title: 'Post Not Found - VikraHub',
        description: 'This post is not available.',
      };
    }

    // For other errors, return generic metadata
    return {
      title: 'VikraHub',
      description: 'Platform for creatives',
    };
  }
}

/**
 * Post Detail Page - Public Web Content Version
 *
 * UX Philosophy:
 * - Show value first: Display actual content preview, not a loading flash
 * - Soft CTA: Invite users to continue, don't force redirect
 * - Progressive disclosure: Let them discover, then choose to engage
 * - Trust building: Real page validates the link worked
 *
 * Technical:
 * - Server-side rendered with full Open Graph metadata
 * - No auto-redirect (user-initiated navigation only)
 * - Clean, readable, fast-loading public page
 * - Works perfectly for social media crawlers
 */
export default async function PostPage({ params }: PostPageProps) {
  let content;

  try {
    content = await fetchPublicContent('post', params.id);
  } catch (error) {
    if (error instanceof APIError && error.status === 404) {
      notFound();
    }
    throw error;
  }

  // Extract ID from content.url (e.g., "/posts/123") for proper app navigation
  const id = content.url.split('/').pop() || params.id;
  const continueUrl = `https://app.vikrahub.com/posts/${id}`;

  return (
    <main className={styles.page}>
      <a href="#main-content" className="vh-skip-link">
        Skip to content
      </a>

      <div className={styles.backNav}>
        <div className={styles.backNavInner}>
          <Link href="/" aria-label="Go back to discover more content" className="vh-back-link">
            <span aria-hidden="true">←</span>
            Discover More
          </Link>
        </div>
      </div>

      <article id="main-content" className={styles.article}>
        <PublicContentHeader
          type="Post"
          title={content.title}
          creator={{
            name: content.author.display_name || content.author.username,
            avatar: content.author.avatar,
          }}
          date={new Date(content.publishedAt || content.createdAt).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
          readingTime={calculateReadingTime(content.content || '')}
          views={content.counts?.views}
          engagement={{
            likes: content.counts?.likes,
            comments: content.counts?.comments,
          }}
        />

        {content.og_image && (
          <div className={styles.coverWrap}>
            <div className={styles.coverFrame}>
              <Image
                src={content.og_image}
                alt={content.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 900px"
                quality={85}
              />
            </div>
          </div>
        )}

        <div
          className={`vh-content-body ${styles.contentBody}`}
          dangerouslySetInnerHTML={{ __html: content.content || '' }}
        />

        {content.media && content.media.length > 0 && (
          <div className={styles.gallery}>
            <h2 className={styles.galleryTitle}>Images</h2>
            <div className={styles.galleryGrid}>
              {content.media.map((media: { url: string }, index: number) => (
                <div key={index} className={styles.galleryItem}>
                  <Image
                    src={media.url}
                    alt={`${content.title} - Image ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    quality={85}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <PublicCTABox
          message="Want to engage with this content? Join the conversation on VikraHub"
          primaryText="Continue reading on VikraHub →"
          primaryHref={continueUrl}
          secondaryText="Explore more content"
          secondaryHref="/"
        />
      </article>

      <footer className={styles.ssrFooter}>
        <div className={styles.ssrFooterInner}>
          <p className={styles.sharedFrom}>
            Shared from <span className={styles.sharedBrand}>VikraHub</span>
          </p>
          <p className={styles.footerTagline}>
            Platform for creatives to connect, share, and grow
          </p>
          <div className={styles.footerLinks}>
            <Link href="/about">About</Link>
            <span>•</span>
            <Link href="/terms">Terms</Link>
            <span>•</span>
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
