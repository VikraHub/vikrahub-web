'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './SiteHeader.module.css';

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="VikraHub Home">
          <Image
            src="/vikrahub-logo.svg"
            alt=""
            width={32}
            height={32}
            className={styles.logo}
          />
          <span className={styles.brandName}>VikraHub</span>
        </Link>

        <nav id="site-nav" className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`} aria-label="Main navigation">
          <Link href="/about" className={styles.navLink} onClick={closeMenu}>
            About
          </Link>
          <Link href="/why-vikrahub" className={styles.navLink} onClick={closeMenu}>
            Why VikraHub
          </Link>
          <Link href="/community" className={styles.navLink} onClick={closeMenu}>
            Community
          </Link>
          <Link href="/innovation" className={styles.navLink} onClick={closeMenu}>
            Innovation
          </Link>
          <Link href="/contact" className={styles.navLink} onClick={closeMenu}>
            Contact
          </Link>
          <Link
            href="https://app.vikrahub.com?auth=signup"
            className={styles.ctaLink}
            onClick={closeMenu}
          >
            Join VikraHub
          </Link>
        </nav>

        <button
          className={`${styles.menuToggle} ${menuOpen ? styles.menuToggleOpen : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
      </div>
    </header>
  );
}
