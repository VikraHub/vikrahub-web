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
          <h2 className={styles.slogan}>Create. Innovate. Connect. Inspire.</h2>
          <p className={styles.subheadline}>
            A platform where creativity, innovation, and youth potential are
            transformed into opportunity and impact.
          </p>
          <p className={styles.description}>
            VikraHub empowers creatives, innovators, and young changemakers
            through visibility, collaboration, digital growth, and meaningful
            opportunity across Africa.
          </p>

          <div className={styles.ctaGroup}>
            <Link
              href="https://app.vikrahub.com?auth=signup"
              className={styles.btnPrimary}
            >
              Join VikraHub
            </Link>
            <Link
              href="https://app.vikrahub.com"
              className={styles.btnSecondary}
            >
              Open App
            </Link>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className={styles.narrativeSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Too much talent, too little access</h2>
          <p className={styles.sectionBody}>
            Across Africa, talented young people face limited visibility for
            their work, weak access to meaningful opportunities, few
            collaborative spaces, and a lack of platforms that connect potential
            to growth. Ideas go unseen, skills stay hidden, and changemakers
            struggle to find the support they need to thrive.
          </p>
        </div>
      </section>

      {/* The Solution */}
      <section className={styles.solutionSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>How VikraHub helps</h2>
          <div className={styles.pillarsGrid}>
            <div className={styles.pillarCard}>
              <span className={styles.pillarEmoji} role="img" aria-label="Visibility">🔦</span>
              <h3>Visibility for talent and ideas</h3>
              <p>
                Showcase your work, skills, and creativity to a wider audience
                that values substance over vanity metrics.
              </p>
            </div>
            <div className={styles.pillarCard}>
              <span className={styles.pillarEmoji} role="img" aria-label="Community">🤝</span>
              <h3>Community and collaboration</h3>
              <p>
                Join a network of like-minded creatives and innovators who share
                knowledge, feedback, and motivation.
              </p>
            </div>
            <div className={styles.pillarCard}>
              <span className={styles.pillarEmoji} role="img" aria-label="Innovation">💡</span>
              <h3>Innovation and digital growth</h3>
              <p>
                Access tools, resources, and learning pathways that sharpen your
                digital skills and fuel innovation.
              </p>
            </div>
            <div className={styles.pillarCard}>
              <span className={styles.pillarEmoji} role="img" aria-label="Opportunities">🚀</span>
              <h3>Access to opportunities</h3>
              <p>
                Connect with mentorships, partnerships, internships, grants, and
                pathways that turn potential into progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It Is For */}
      <section className={styles.audienceSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Who VikraHub is for</h2>
          <ul className={styles.audienceList}>
            <li>Creatives and artists</li>
            <li>Innovators and problem-solvers</li>
            <li>Developers and digital builders</li>
            <li>Students and emerging professionals</li>
            <li>Youth leaders and changemakers</li>
          </ul>
        </div>
      </section>

      {/* Community */}
      <section className={styles.narrativeSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>A platform powered by people</h2>
          <p className={styles.sectionBody}>
            VikraHub is built around community — a space where creatives,
            innovators, and changemakers share ideas, support each other, and
            grow together. Every voice matters, and every contribution strengthens
            the ecosystem.
          </p>
          <Link href="/community" className={styles.sectionCta}>
            Explore the Community →
          </Link>
        </div>
      </section>

      {/* Innovation */}
      <section className={styles.solutionSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Where ideas become solutions</h2>
          <p className={styles.sectionBody}>
            From hackathons to creative challenges, VikraHub provides spaces
            where bold ideas are developed, tested, and brought to life. We
            celebrate innovation that solves real problems and creates lasting
            value.
          </p>
          <Link href="/innovation" className={styles.sectionCta}>
            Discover Innovation →
          </Link>
        </div>
      </section>

      {/* Opportunity */}
      <section className={styles.narrativeSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Connecting talent to growth</h2>
          <p className={styles.sectionBody}>
            VikraHub opens doors to mentorship, partnerships, training,
            internships, grants, exposure, and growth pathways — giving young
            talent the support and structure they need to move from potential to
            impact.
          </p>
          <Link href="/why-vikrahub" className={styles.sectionCta}>
            Learn Why VikraHub →
          </Link>
        </div>
      </section>

      {/* Trust */}
      <section className={styles.trustSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Built with purpose and guided by values
          </h2>
          <p className={styles.sectionBody}>
            Everything we build is rooted in a clear vision, a focused mission,
            and a set of core values that put people, integrity, and impact
            first. VikraHub isn&apos;t just a platform — it&apos;s a commitment
            to the growth and dignity of every person who uses it.
          </p>
          <Link href="/vision" className={styles.sectionCta}>
            Our Vision, Mission &amp; Values →
          </Link>
        </div>
      </section>

      {/* Featured Work Section */}
      <FeaturedWorkSection />

      {/* Discover Content Section */}
      <DiscoverSection />

      {/* Final CTA */}
      <section className={styles.conversion}>
        <div className={styles.container}>
          <div className={styles.conversionCard}>
            <h2>Join a platform built for growth and impact</h2>
            <p>
              Whether you create, innovate, or lead — VikraHub is your space to
              grow, connect, and turn your potential into something the world can
              see.
            </p>

            <div className={styles.ctaGroup}>
              <Link
                href="https://app.vikrahub.com?auth=signup"
                className={styles.btnPrimary}
              >
                Join VikraHub
              </Link>
              <Link
                href="https://app.vikrahub.com"
                className={styles.btnSecondary}
              >
                Open App
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
