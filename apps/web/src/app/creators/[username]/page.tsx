import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { fetchPublicCreatorProfile, PublicContent } from '@/lib/vikraApi';
import styles from './page.module.css';

const PUBLIC_SITE_ORIGIN = 'https://vikrahub.com';
const DEFAULT_OG_IMAGE = `${PUBLIC_SITE_ORIGIN}/og-default.png`;

interface CreatorProfilePageProps {
  params: {
    username: string;
  };
}

function isHttpUrl(value: string | undefined): boolean {
  if (!value) return false;
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

function normalizeAvatarUrl(avatarUrl: string | undefined): string {
  return isHttpUrl(avatarUrl) ? avatarUrl as string : DEFAULT_OG_IMAGE;
}

function getCanonicalProfileUrl(username: string): string {
  return `${PUBLIC_SITE_ORIGIN}/creators/${encodeURIComponent(username)}`;
}

function extractIdentifierFromCanonical(canonicalUrl: string | undefined, fallbackId: string): string {
  if (!canonicalUrl) return fallbackId;

  try {
    const url = new URL(canonicalUrl);
    const parts = url.pathname.split('/').filter(Boolean);
    return parts[parts.length - 1] || fallbackId;
  } catch {
    const parts = canonicalUrl.split('/').filter(Boolean);
    return parts[parts.length - 1] || fallbackId;
  }
}

function getContentHref(item: PublicContent): string {
  const identifier = extractIdentifierFromCanonical(item.canonical_url, item.id);

  if (item.type === 'blog') {
    return `/ssr/blog/${identifier}`;
  }

  if (item.type === 'portfolio') {
    return `/ssr/work/${identifier}`;
  }

  return `/ssr/post/${identifier}`;
}

function getContentTypeLabel(type: PublicContent['type']): string {
  if (type === 'portfolio') return 'Work';
  if (type === 'blog') return 'Blog';
  return 'Post';
}

function formatDate(dateValue: string): string {
  return new Date(dateValue).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function getProfileDescription(
  displayName: string,
  username: string,
  bio: string | undefined,
  activityCount: number
): string {
  if (bio && bio.trim().length > 0) {
    return `${bio.trim().slice(0, 145)}${bio.trim().length > 145 ? '...' : ''}`;
  }

  return `${displayName} (@${username}) is a creator on VikraHub, a growing platform in South Sudan. Public activity: ${activityCount} published item${activityCount === 1 ? '' : 's'}.`;
}

function getValidSameAsLinks(sameAs: string[] | undefined): string[] {
  if (!sameAs || sameAs.length === 0) return [];

  return sameAs.filter((link) => {
    if (!isHttpUrl(link)) return false;
    try {
      const url = new URL(link);
      return url.hostname !== 'app.vikrahub.com';
    } catch {
      return false;
    }
  });
}

export async function generateMetadata({ params }: CreatorProfilePageProps): Promise<Metadata> {
  const profile = await fetchPublicCreatorProfile(params.username);
  const canonical = getCanonicalProfileUrl(params.username);

  if (!profile) {
    return {
      title: 'Creator Not Found',
      description: 'This creator profile is not available on VikraHub public web.',
      alternates: {
        canonical,
      },
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const displayName = profile.display_name || profile.username;
  const title = `${displayName} on VikraHub`;
  const description = getProfileDescription(
    displayName,
    profile.username,
    profile.bio,
    profile.activity.length
  );
  const avatarImage = normalizeAvatarUrl(profile.avatar);
  const profileCanonical = getCanonicalProfileUrl(profile.username);

  return {
    title,
    description,
    alternates: {
      canonical: profileCanonical,
    },
    robots: {
      index: false,
      follow: true,
      googleBot: {
        index: false,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      type: 'profile',
      title,
      description,
      url: profileCanonical,
      images: [
        {
          url: avatarImage,
          width: 1200,
          height: 630,
          alt: `${displayName} on VikraHub`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [avatarImage],
    },
  };
}

export default async function CreatorProfilePage({ params }: CreatorProfilePageProps) {
  const profile = await fetchPublicCreatorProfile(params.username);

  if (!profile) {
    notFound();
  }

  const displayName = profile.display_name || profile.username;
  const avatarImage = profile.avatar && isHttpUrl(profile.avatar)
    ? profile.avatar
    : `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=ffa000&color=fff&size=240`;

  const description = getProfileDescription(
    displayName,
    profile.username,
    profile.bio,
    profile.activity.length
  );
  const canonicalUrl = getCanonicalProfileUrl(profile.username);
  const appProfileUrl = isHttpUrl(profile.app_profile_url)
    ? profile.app_profile_url as string
    : `https://app.vikrahub.com/${encodeURIComponent(profile.username)}`;

  const sameAs = getValidSameAsLinks(profile.same_as);

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: displayName,
    url: canonicalUrl,
    image: normalizeAvatarUrl(profile.avatar),
    description: profile.bio || undefined,
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };

  const sortedActivity = [...profile.activity].sort((a, b) => {
    const aTime = new Date(a.published_at).getTime();
    const bTime = new Date(b.published_at).getTime();
    return bTime - aTime;
  });

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroCard}>
            <div className={styles.avatarWrap}>
              <Image
                src={avatarImage}
                alt={displayName}
                width={140}
                height={140}
                className={styles.avatar}
              />
            </div>

            <div className={styles.heroBody}>
              <span className="vh-badge">Public Creator Profile</span>
              <h1 className={styles.name}>{displayName}</h1>
              <p className={styles.username}>@{profile.username}</p>

              {(profile.role || profile.location) && (
                <p className={styles.metaLine}>
                  {profile.role || 'Creator'}
                  {profile.location ? ` • ${profile.location}` : ''}
                </p>
              )}

              <p className={styles.bio}>
                {profile.bio || 'This creator is active on VikraHub, a growing platform rooted in South Sudan.'}
              </p>

              <div className={styles.heroStats}>
                <div className={styles.statCard}>
                  <span className={styles.statValue}>{sortedActivity.length}</span>
                  <span className={styles.statLabel}>Public items</span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statValue}>Phase A</span>
                  <span className={styles.statLabel}>SEO state</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.activitySection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Public Activity</span>
            <h2 className={styles.sectionTitle}>Published work and content</h2>
            <p className={styles.sectionText}>
              Publicly visible activity shown from VikraHub content channels. This page is available
              for profile discovery while indexing remains tightly controlled in Phase A.
            </p>
          </div>

          {sortedActivity.length === 0 ? (
            <div className={styles.emptyState}>
              <p>No public activity is available yet for this creator.</p>
            </div>
          ) : (
            <div className={styles.activityGrid}>
              {sortedActivity.slice(0, 12).map((item) => (
                <article key={`${item.type}-${item.id}`} className={styles.activityCard}>
                  <div className={styles.activityTop}>
                    <span className={styles.typeBadge}>{getContentTypeLabel(item.type)}</span>
                    <span className={styles.dateText}>{formatDate(item.published_at)}</span>
                  </div>
                  <h3 className={styles.activityTitle}>{item.title}</h3>
                  {item.excerpt && <p className={styles.activityExcerpt}>{item.excerpt}</p>}
                  <Link href={getContentHref(item)} className={styles.activityLink}>
                    Open public preview
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>Explore more from this creator</h2>
            <p className={styles.ctaText}>
              Continue in the VikraHub app for deeper interaction, profile updates, and ongoing
              community engagement.
            </p>
            <div className={styles.ctaActions}>
              <a href={appProfileUrl} target="_blank" rel="noopener noreferrer" className="vh-cta-primary">
                View in VikraHub App
              </a>
              <Link href="/" className="vh-cta-secondary">
                Back to Public Web
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.noteSection}>
        <div className="container">
          <p className={styles.noteText}>{description}</p>
        </div>
      </section>
    </main>
  );
}