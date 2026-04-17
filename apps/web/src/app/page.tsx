import Link from 'next/link';
import Image from 'next/image';
import FeaturedWorkSection from '@/components/home/FeaturedWorkSection';
import DiscoverSection from '@/components/home/DiscoverSection';
import styles from './page.module.css';

// Use dynamic rendering until backend is stable
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Home() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.logoWrapper}>
            <Image
              src="/vikrahub-logo.svg"
              alt="VikraHub"
              width={60}
              height={60}
              className={styles.logoIcon}
              priority
            />
            <h1 className={styles.brandName}>VikraHub</h1>
          </div>
          <p className={styles.label}>Platform for creatives</p>
          <h2 className={styles.slogan}>Create. Connect. Inspire.</h2>
          <p className={styles.description}>
            Publish your skills, connect with other creatives, and turn your ideas into opportunities.
          </p>

          <div className={styles.ctaGroup}>
            <Link href="#featured" className={styles.btnPrimary}>
              Explore Content
            </Link>
            <Link href="https://app.vikrahub.com" className={styles.btnSecondary}>
              Open VikraHub App
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <FeaturedWorkSection />

      {/* Discover Content Section */}
      <DiscoverSection />

      {/* Why VikraHub Section */}
      <section className={styles.whySection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Built for Creatives Who Ship</h2>
          <p className={styles.sectionSubtitle}>
            VikraHub exists to help you move from ideas to proof of work — and from proof of work to real opportunities.
          </p>

          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Publish with Purpose</h3>
              <p>Build a portfolio of real projects that proves your skills — not just a polished profile.</p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <i className="fas fa-comments"></i>
              </div>
              <h3>Grow through Feedback</h3>
              <p>Get constructive input from fellow creatives who understand the craft, not just the likes.</p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Connect with Intent</h3>
              <p>Find collaborators and opportunities based on shared goals — not algorithms.</p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <i className="fas fa-seedling"></i>
              </div>
              <h3>Build Long-Term Reputation</h3>
              <p>Consistency matters more than virality. Every project you ship adds to your creative record.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section className={styles.conversion}>
        <div className={styles.container}>
          <div className={styles.conversionCard}>
            <h2>Start Building Your Creative Record</h2>
            <p>Join a growing community of designers, photographers, writers, and developers who are proving their skills through real work.</p>

            <div className={styles.ctaGroup}>
              <Link href="https://app.vikrahub.com?auth=signup" className={styles.btnPrimary}>
                Create Your Account
              </Link>
              <Link href="https://app.vikrahub.com?auth=login" className={styles.btnSecondary}>
                Log In
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
