import Link from 'next/link';
import Image from 'next/image';
import styles from './SiteFooter.module.css';

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          {/* Brand column */}
          <div className={styles.brand}>
            <div className={styles.logoRow}>
              <Image
                src="/vikrahub-logo.svg"
                alt=""
                width={36}
                height={36}
              />
              <strong className={styles.brandName}>VikraHub</strong>
            </div>
            <p className={styles.tagline}>
              A platform for creatives to publish work, build reputation, and connect with opportunities.
            </p>
          </div>

          {/* Link columns */}
          <nav className={styles.columns} aria-label="Footer navigation">
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Platform</h4>
              <Link href="/how-it-works">How It Works</Link>
              <Link href="https://app.vikrahub.com">Open App</Link>
              <Link href="https://app.vikrahub.com?auth=signup">Create Account</Link>
              <Link href="https://app.vikrahub.com/creators">Browse Creators</Link>
            </div>

            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Company</h4>
              <Link href="/about">About</Link>
              <Link href="/vision">Vision & Values</Link>
            </div>

            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Legal</h4>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </div>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} VikraHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
