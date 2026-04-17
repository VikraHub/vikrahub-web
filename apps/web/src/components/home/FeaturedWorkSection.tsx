import { fetchFeaturedWork, PublicContent } from '@/lib/vikraApi';
import PublicContentCard from '@/components/public/PublicContentCard';
import styles from './FeaturedWorkSection.module.css';

export default async function FeaturedWorkSection() {
  let featured: PublicContent[] = [];
  let error = null;

  try {
    featured = await fetchFeaturedWork(6);
  } catch (err) {
    console.error('Failed to load featured work:', err);
    error = err;
  }

  // Empty state
  if (!featured || featured.length === 0) {
    return (
      <section id="featured" className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured Work</h2>
            <p className={styles.sectionSubtitle}>
              Discover creative projects from our community
            </p>
          </div>

          <div className={styles.emptyState}>
            <div className={styles.emptyStateIcon}>🎨</div>
            <p className={styles.emptyStateText}>
              No featured content available at the moment.
              <br />
              Check back soon!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="featured" className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Work</h2>
          <p className={styles.sectionSubtitle}>
            Discover creative projects from our community
          </p>
        </div>

        <div className={styles.grid}>
          {featured.filter(item => item != null && item.id).map((content) => {
            // Extract appropriate identifier from canonical URL
            let urlIdentifier = content.id;
            if (content.canonical_url) {
              const urlParts = content.canonical_url.split('/').filter(part => part);
              urlIdentifier = urlParts[urlParts.length - 1] || content.id;
            }

            const contentData: any = {
              id: content.id,
              type: content.type,
              url: urlIdentifier, // Extracted from canonical_url (slug for blogs, ID for posts/works)
              title: content.title,
              summary: content.excerpt || '',
              content: content.excerpt || '',
              author: {
                id: 0,
                username: content.creator?.username || '',
                display_name: content.creator?.display_name,
                avatar: content.creator?.avatar,
                avatar_small: content.creator?.avatar_small,
                avatar_medium: content.creator?.avatar_medium,
              },
              counts: {
                likes: 0,
                comments: 0,
                views: 0,
              },
              createdAt: content.published_at,
              publishedAt: content.published_at,
              og_image: content.cover_image || '',
              og_url: content.canonical_url,
              canonical_url: content.canonical_url,
            };

            return (
              <PublicContentCard
                key={content.id}
                content={contentData}
                variant="featured"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
