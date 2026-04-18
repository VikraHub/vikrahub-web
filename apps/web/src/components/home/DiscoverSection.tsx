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
            <h2 className={styles.sectionTitle}>Ideas, Stories, and Work</h2>
            <p className={styles.sectionSubtitle}>
              Explore what people are building and sharing across the VikraHub ecosystem
            </p>
          </div>

          <div className={styles.emptyState}>
            <div className={styles.emptyStateIcon}>🔍</div>
            <p className={styles.emptyStateText}>
              New ideas and stories from the community will appear here soon.
              <br />
              Check back later!
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
          <h2 className={styles.sectionTitle}>Ideas, Stories, and Work</h2>
          <p className={styles.sectionSubtitle}>
            Explore what people are building and sharing across the VikraHub ecosystem
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
