/**
 * PublicCTABox - Call-to-Action component for public pages
 * Used in: SSR detail pages to encourage sign-up/exploration
 */

import Link from 'next/link';
import styles from './PublicCTABox.module.css';

interface PublicCTABoxProps {
  message?: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export default function PublicCTABox({
  message = "Want to see more? Join VikraHub to discover amazing creators and opportunities.",
  primaryText = "Continue on VikraHub →",
  primaryHref = "https://app.vikrahub.com",
  secondaryText = "Explore more",
  secondaryHref = "/",
}: PublicCTABoxProps) {
  return (
    <div className={styles.box}>
      <div className={styles.glow} />

      <p className={styles.message}>{message}</p>

      <div className={styles.actions}>
        <a
          href={primaryHref}
          className={`vh-cta-primary ${styles.primaryBtn}`}
        >
          {primaryText}
        </a>

        <Link
          href={secondaryHref}
          className={`vh-cta-secondary ${styles.secondaryBtn}`}
        >
          {secondaryText}
        </Link>
      </div>
    </div>
  );
}
