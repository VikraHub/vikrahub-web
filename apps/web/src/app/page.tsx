import Link from 'next/link';
import { Metadata } from 'next';
import FeaturedWorkSection from '@/components/home/FeaturedWorkSection';
import DiscoverSection from '@/components/home/DiscoverSection';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './page.module.css';

// Use dynamic rendering until backend is stable
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'VikraHub — Create. Innovate. Connect. Inspire.',
  description:
    'A growing platform where creativity, innovation, and youth potential in South Sudan can be seen, supported, and developed.',
  alternates: {
    canonical: 'https://vikrahub.com',
  },
  openGraph: {
    title: 'VikraHub — Create. Innovate. Connect. Inspire.',
    description:
      'A growing platform where creativity, innovation, and youth potential in South Sudan can be seen, supported, and developed.',
    url: 'https://vikrahub.com',
  },
  twitter: {
    title: 'VikraHub — Create. Innovate. Connect. Inspire.',
    description:
      'A growing platform where creativity, innovation, and youth potential in South Sudan can be seen, supported, and developed.',
  },
};

const challengePoints = [
  {
    icon: 'fa-solid fa-eye-slash',
    title: 'Limited visibility',
    text: 'Strong work and promising ideas often go unseen because the right audiences and pathways remain out of reach.',
  },
  {
    icon: 'fa-solid fa-users-slash',
    title: 'Weak collaborative spaces',
    text: 'Too few digital spaces are built to help young creatives and innovators connect meaningfully and build together.',
  },
  {
    icon: 'fa-solid fa-laptop-code',
    title: 'Uneven digital support',
    text: 'Access to the tools, exposure, and learning needed for digital growth is still limited for many young people.',
  },
  {
    icon: 'fa-solid fa-arrow-up-right-dots',
    title: 'Opportunity gaps',
    text: 'Potential stalls when grants, partnerships, mentorship, and career pathways are difficult to find or enter.',
  },
];

const solutionPillars = [
  {
    icon: 'fa-solid fa-bullhorn',
    title: 'Visibility for talent and ideas',
    text: 'Create space for meaningful work to be seen in a platform designed to surface real talent, not empty noise.',
  },
  {
    icon: 'fa-solid fa-people-group',
    title: 'Community and collaboration',
    text: 'Build within a growing network where people can share feedback, ideas, encouragement, and momentum.',
  },
  {
    icon: 'fa-solid fa-microchip',
    title: 'Innovation and digital growth',
    text: 'Support experimentation, digital learning, and practical capability over time.',
  },
  {
    icon: 'fa-solid fa-briefcase',
    title: 'Access to opportunities',
    text: 'Create pathways toward grants, internships, partnerships, mentorship, and growth opportunities.',
  },
];

const audienceGroups = [
  { icon: 'fa-solid fa-pen-fancy', label: 'Creatives and artists' },
  { icon: 'fa-solid fa-rocket', label: 'Innovators and problem-solvers' },
  { icon: 'fa-solid fa-code', label: 'Developers and digital builders' },
  { icon: 'fa-solid fa-graduation-cap', label: 'Students and emerging professionals' },
  { icon: 'fa-solid fa-bolt', label: 'Youth leaders and changemakers' },
];

const proofPoints = [
  {
    value: 'Visibility',
    text: 'A clearer public starting point for work, ideas, and potential in South Sudan.',
  },
  {
    value: 'Connection',
    text: 'A growing network for collaboration, feedback, and momentum.',
  },
  {
    value: 'Opportunity',
    text: 'Early pathways to partnerships, learning, and future growth.',
  },
];

const featureSections = [
  {
    eyebrow: 'Community',
    title: 'A platform powered by people',
    body:
      'VikraHub is being built around community — a space where creatives, innovators, and changemakers in South Sudan can share ideas, support each other, and grow together. Every voice matters, and every contribution helps shape what the platform becomes.',
    bullets: [
      'Join a growing network that values contribution over hype.',
      'Find people with shared ambition, interests, and goals.',
      'Grow in public through collaboration, exchange, and encouragement.',
    ],
    href: '/community',
    cta: 'Explore the Community',
    icon: 'fa-solid fa-people-group',
    tone: 'light',
  },
  {
    eyebrow: 'Innovation',
    title: 'Where ideas become solutions',
    body:
      'VikraHub supports creativity, experimentation, digital innovation, and practical problem-solving. The goal is to help youth-led ideas in South Sudan move from concept toward useful, real-world progress.',
    bullets: [
      'Create with intention using digital tools and emerging technology.',
      'Turn concepts into experiments, prototypes, and real work.',
      'Build a culture of practical, future-facing problem solving.',
    ],
    href: '/innovation',
    cta: 'Discover Innovation',
    icon: 'fa-solid fa-lightbulb',
    tone: 'dark',
  },
  {
    eyebrow: 'Opportunity',
    title: 'Connecting talent to growth',
    body:
      'VikraHub is being built to create clearer pathways toward mentorship, partnerships, internships, grants, exposure, and digital growth — helping young talent in South Sudan move from potential toward visible progress.',
    bullets: [
      'Discover opportunities that reward strong work and clear ambition.',
      'Strengthen readiness through visibility, networks, and digital growth.',
      'Move from hidden potential to practical momentum.',
    ],
    href: '/why-vikrahub',
    cta: 'Learn Why VikraHub',
    icon: 'fa-solid fa-arrow-trend-up',
    tone: 'light',
  },
];

const trustValues = [
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Clear purpose',
    text: 'The platform is grounded in a defined vision and mission, not vague positioning.',
  },
  {
    icon: 'fa-solid fa-scale-balanced',
    title: 'Values-led decisions',
    text: 'Integrity, inclusion, empowerment, collaboration, and impact guide how VikraHub is built.',
  },
  {
    icon: 'fa-solid fa-handshake-angle',
    title: 'Serious public presence',
    text: 'Every page, message, and interaction is being shaped to feel trustworthy, credible, and intentional.',
  },
];

export default async function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'VikraHub',
    url: 'https://vikrahub.com',
    description:
      'A growing platform where creativity, innovation, and youth potential in South Sudan can be seen, supported, and developed.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://app.vikrahub.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>VikraHub</span>
            <h1 className={styles.heroTitle}>Create. Innovate. Connect. Inspire.</h1>
            <p className={styles.heroLead}>
              A growing platform where creativity, innovation, and youth potential in South Sudan
              can be seen, supported, and developed.
            </p>
            <p className={styles.heroBody}>
              VikraHub is being built to help creatives, innovators, and young changemakers in
              South Sudan gain visibility, connect with others, grow digitally, and move toward
              meaningful opportunity.
            </p>

            <div className={styles.ctaGroup}>
              <a
                href="https://app.vikrahub.com?auth=signup"
                className="vh-cta-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join VikraHub
              </a>
              <a
                href="https://app.vikrahub.com"
                className="vh-cta-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open App
              </a>
            </div>

            <ul className={styles.heroHighlights}>
              <li>
                <i className="fa-solid fa-circle-check" aria-hidden="true" />
                Built for creativity, innovation, and real opportunity.
              </li>
              <li>
                <i className="fa-solid fa-circle-check" aria-hidden="true" />
                Designed to help work, ideas, and people get seen.
              </li>
              <li>
                <i className="fa-solid fa-circle-check" aria-hidden="true" />
                Structured for serious growth, connection, and trust.
              </li>
            </ul>
          </div>

          <aside className={styles.heroPanel} aria-label="VikraHub platform focus">
            <div className={styles.heroPanelCard}>
              <span className={styles.panelLabel}>Why VikraHub matters</span>
              <h2 className={styles.panelTitle}>
                A serious digital starting point for talent, ideas, and growth
              </h2>
              <p className={styles.panelText}>
                VikraHub is being built as a strong public starting point where visibility,
                collaboration, and opportunity can grow over time.
              </p>
            </div>

            <div className={styles.proofGrid}>
              {proofPoints.map((point) => (
                <div key={point.value} className={styles.proofCard}>
                  <span className={styles.proofValue}>{point.value}</span>
                  <p className={styles.proofText}>{point.text}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <ScrollReveal>
        <section className={styles.challengeSection}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionLeadBlock}>
              <span className={styles.sectionEyebrow}>The Challenge</span>
              <h2 className={styles.sectionTitle}>Too much talent, too little access</h2>
              <p className={styles.sectionText}>
                In South Sudan, many talented young people still face limited visibility for their
                work, weak access to meaningful opportunities, too few collaborative spaces, and a
                lack of digital platforms that connect potential to growth. Ideas go unseen,
                skills stay hidden, and changemakers struggle to find the support they need to
                move forward.
              </p>
            </div>

            <div className={styles.challengeGrid}>
              {challengePoints.map((point) => (
                <article key={point.title} className={styles.challengeCard}>
                  <div className={styles.challengeIcon}>
                    <i className={point.icon} aria-hidden="true" />
                  </div>
                  <h3 className={styles.challengeTitle}>{point.title}</h3>
                  <p className={styles.challengeText}>{point.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className={styles.solutionSection}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionLeadBlockCenter}>
              <span className={styles.sectionEyebrow}>The Solution</span>
              <h2 className={styles.sectionTitleDark}>How VikraHub helps</h2>
              <p className={styles.sectionTextDark}>
                VikraHub is being built to create a more serious digital space where young people
                can be seen, build credibility, collaborate, and move toward opportunity with more
                structure.
              </p>
            </div>

            <div className={styles.solutionGrid}>
              {solutionPillars.map((pillar) => (
                <article key={pillar.title} className={styles.solutionCard}>
                  <div className={styles.solutionIcon}>
                    <i className={pillar.icon} aria-hidden="true" />
                  </div>
                  <h3 className={styles.solutionTitle}>{pillar.title}</h3>
                  <p className={styles.solutionText}>{pillar.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className={styles.audienceSection}>
          <div className={styles.sectionInnerSplit}>
            <div>
              <span className={styles.sectionEyebrow}>Who It Is For</span>
              <h2 className={styles.sectionTitleDark}>
                Built for a rising generation of creators and changemakers
              </h2>
              <p className={styles.sectionTextDark}>
                The platform is designed for people with ideas, craft, skills, and ambition who
                need a credible digital home for growth.
              </p>
            </div>

            <div className={styles.audiencePanel}>
              <div className={styles.audienceGrid}>
                {audienceGroups.map((group) => (
                  <span key={group.label} className={styles.audiencePill}>
                    <i className={group.icon} aria-hidden="true" />
                    {group.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {featureSections.map((section) => (
        <ScrollReveal key={section.eyebrow}>
          <section
            className={`${styles.featureSection} ${
              section.tone === 'dark' ? styles.featureSectionDark : styles.featureSectionLight
            }`}
          >
            <div className={styles.sectionInnerSplit}>
              <div className={styles.featureContent}>
                <span className={styles.sectionEyebrow}>{section.eyebrow}</span>
                <h2 className={section.tone === 'dark' ? styles.sectionTitle : styles.sectionTitleDark}>
                  {section.title}
                </h2>
                <p className={section.tone === 'dark' ? styles.sectionText : styles.sectionTextDark}>
                  {section.body}
                </p>
                <Link href={section.href} className={styles.sectionCta}>
                  {section.cta}
                </Link>
              </div>

              <div
                className={`${styles.featurePanel} ${
                  section.tone === 'dark' ? styles.featurePanelDark : styles.featurePanelLight
                }`}
              >
                <div className={styles.featurePanelIcon}>
                  <i className={section.icon} aria-hidden="true" />
                </div>
                <ul className={styles.featureList}>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </ScrollReveal>
      ))}

      <ScrollReveal>
        <section className={styles.trustSection}>
          <div className={styles.sectionInnerSplit}>
            <div>
              <span className={styles.sectionEyebrow}>Trust</span>
              <h2 className={styles.sectionTitle}>Built with purpose and guided by values</h2>
              <p className={styles.sectionText}>
                VikraHub is being built on a clear vision, a focused mission, and values that put
                people first. As the platform grows, we stay transparent about what we stand for
                and accountable for how we build. This is a platform rooted in integrity, not
                hype.
              </p>
              <Link href="/vision" className={styles.sectionCtaOnDark}>
                Our Vision, Mission &amp; Values
              </Link>
            </div>

            <div className={styles.trustGrid}>
              {trustValues.map((value) => (
                <article key={value.title} className={styles.trustCard}>
                  <div className={styles.trustIcon}>
                    <i className={value.icon} aria-hidden="true" />
                  </div>
                  <h3 className={styles.trustTitle}>{value.title}</h3>
                  <p className={styles.trustText}>{value.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <FeaturedWorkSection />
      <DiscoverSection />

      <ScrollReveal>
        <section className={styles.finalCtaSection}>
          <div className={styles.finalCtaInner}>
            <div className={styles.finalCtaCard}>
              <span className={styles.sectionEyebrow}>Start Here</span>
              <h2 className={styles.finalCtaTitle}>Join a growing platform built for meaningful progress</h2>
              <p className={styles.finalCtaText}>
                Whether you create, innovate, or lead, VikraHub is being built as a serious space
                in South Sudan where you can grow, connect, and move your potential toward visible
                progress.
              </p>
              <div className={styles.ctaGroup}>
                <a
                  href="https://app.vikrahub.com?auth=signup"
                  className="vh-cta-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join VikraHub
                </a>
                <a
                  href="https://app.vikrahub.com"
                  className="vh-cta-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open App
                </a>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
