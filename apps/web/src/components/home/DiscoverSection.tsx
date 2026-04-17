import { fetchDiscoverContent, DiscoverResponse } from '@/lib/vikraApi';
import DiscoverClient from './DiscoverClient';
import styles from './DiscoverSection.module.css';

export default async function DiscoverSection() {
  let discover: DiscoverResponse = { results: [], next: null };
  try {
    discover = await fetchDiscoverContent(3);
  } catch (err) {
    console.error('Failed to load discover content:', err);
  }

  // Empty state
  if (!discover.results || discover.results.length === 0) {
    return (
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Discover More</h2>
            <p className={styles.sectionSubtitle}>
              Explore the latest from our creative community
            </p>
          </div>

          <div className={styles.emptyState}>
            <div className={styles.emptyStateIcon}>🔍</div>
            <p className={styles.emptyStateText}>
              No content available to discover right now.
              <br />
              Check back soon for new posts!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Discover More</h2>
          <p className={styles.sectionSubtitle}>
            Explore the latest from our creative community
          </p>
        </div>

        <DiscoverClient
          initialContent={discover.results}
          initialNext={discover.next}
        />
      </div>
    </section>
  );
}
