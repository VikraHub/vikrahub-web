import Link from 'next/link';
import FeaturedWorkSection from '@/components/home/FeaturedWorkSection';
import DiscoverSection from '@/components/home/DiscoverSection';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './page.module.css';

// Use dynamic rendering until backend is stable
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'VikraHub',
    url: 'https://vikrahub.com',
    description: 'A platform where creativity, innovation, and youth potential are transformed into opportunity and impact.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://app.vikrahub.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
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
              className="vh-cta-primary"
            >
              Join VikraHub
            </Link>
            <Link
              href="https://app.vikrahub.com"
              className="vh-cta-secondary"
            >
              Open App
            </Link>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <ScrollReveal>
      <section className={styles.narrativeSection}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>The Challenge</span>
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
      </ScrollReveal>

      {/* The Solution */}
      <ScrollReveal>
      <section className={styles.solutionSection}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>The Solution</span>
          <h2 className={styles.sectionTitle}>How VikraHub helps</h2>
          <div className={styles.pillarsGrid}>
            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon} aria-hidden="true">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4M12 8h.01"/>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                  <path d="M9 9h.01M15 9h.01"/>
                </svg>
              </div>
              <h3>Visibility for talent and ideas</h3>
              <p>
                Showcase your work, skills, and creativity to a wider audience
                that values substance over vanity metrics.
              </p>
            </div>
            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon} aria-hidden="true">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>Community and collaboration</h3>
              <p>
                Join a network of like-minded creatives and innovators who share
                knowledge, feedback, and motivation.
              </p>
            </div>
            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon} aria-hidden="true">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                </svg>
              </div>
              <h3>Innovation and digital growth</h3>
              <p>
                Access tools, resources, and learning pathways that sharpen your
                digital skills and fuel innovation.
              </p>
            </div>
            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon} aria-hidden="true">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <h3>Access to opportunities</h3>
              <p>
                Connect with mentorships, partnerships, internships, grants, and
                pathways that turn potential into progress.
              </p>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Who It Is For */}
      <ScrollReveal>
      <section className={styles.audienceSection}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>Who It Is For</span>
          <h2 className={styles.sectionTitle}>Built for a rising generation of creators and changemakers</h2>
          <ul className={styles.audienceList}>
            <li>Creatives and artists</li>
            <li>Innovators and problem-solvers</li>
            <li>Developers and digital builders</li>
            <li>Students and emerging professionals</li>
            <li>Youth leaders and changemakers</li>
          </ul>
        </div>
      </section>
      </ScrollReveal>

      {/* Community */}
      <ScrollReveal>
      <section className={styles.narrativeSection}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>Community</span>
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
      </ScrollReveal>

      {/* Innovation */}
      <ScrollReveal>
      <section className={styles.solutionSection}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>Innovation</span>
          <h2 className={styles.sectionTitle}>Where ideas become solutions</h2>
          <p className={styles.sectionBody}>
            VikraHub supports creativity, experimentation, digital innovation,
            AI exploration, and practical problem-solving. We believe in
            youth-led solutions that respond to real challenges and create
            lasting value.
          </p>
          <Link href="/innovation" className={styles.sectionCta}>
            Discover Innovation →
          </Link>
        </div>
      </section>
      </ScrollReveal>

      {/* Opportunity */}
      <ScrollReveal>
      <section className={styles.narrativeSection}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>Opportunity</span>
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
      </ScrollReveal>

      {/* Trust */}
      <ScrollReveal>
      <section className={styles.trustSection}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>Why Trust VikraHub</span>
          <h2 className={styles.sectionTitle}>
            Built with purpose and guided by values
          </h2>
          <p className={styles.sectionBody}>
            VikraHub is built on a clear vision, a focused mission, and values
            that put people first. We are transparent about what we stand for
            and accountable for how we build. This is a platform rooted in
            integrity, not hype.
          </p>
          <Link href="/vision" className={styles.sectionCta}>
            Our Vision, Mission &amp; Values →
          </Link>
        </div>
      </section>
      </ScrollReveal>

      {/* Featured Work Section */}
      <FeaturedWorkSection />

      {/* Discover Content Section */}
      <DiscoverSection />

      {/* Final CTA */}
      <ScrollReveal>
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
                className="vh-cta-primary"
              >
                Join VikraHub
              </Link>
              <Link
                href="https://app.vikrahub.com"
                className="vh-cta-secondary"
              >
                Open App
              </Link>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>
    </div>
  );
}
