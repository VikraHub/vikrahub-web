import Link from 'next/link';
import Image from 'next/image';
import styles from './SiteFooter.module.css';

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
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
              A platform where creativity, innovation, and youth potential are transformed into opportunity and impact.
            </p>
          </div>

          <nav className={styles.columns} aria-label="Footer navigation">
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Explore</h4>
              <Link href="/about">About</Link>
              <Link href="/why-vikrahub">Why VikraHub</Link>
              <Link href="/community">Community</Link>
              <Link href="/innovation">Innovation</Link>
              <Link href="/contact">Contact</Link>
            </div>

            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Platform</h4>
              <Link href="/vision">Vision & Values</Link>
              <Link href="https://app.vikrahub.com">Open App</Link>
              <Link href="https://app.vikrahub.com?auth=signup">Join VikraHub</Link>
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
