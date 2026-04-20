import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About',
  description:
    'VikraHub is a platform where creativity, innovation, and youth potential are transformed into opportunity and impact. Learn our story, mission, and what we stand for.',
  alternates: {
    canonical: 'https://vikrahub.com/about',
  },
  openGraph: {
    title: 'About VikraHub',
    description:
      'Learn the story, mission, and values behind VikraHub — a platform empowering creatives, innovators, and young changemakers.',
    url: 'https://vikrahub.com/about',
  },
  twitter: {
    title: 'About VikraHub',
    description:
      'Learn the story, mission, and values behind VikraHub — a platform empowering creatives, innovators, and young changemakers.',
  },
};

const challenges = [
  {
    icon: 'fa-solid fa-eye-slash',
    title: 'Limited Visibility',
    text: 'Talented young people struggle to get their work seen by the right audiences and opportunities.',
  },
  {
    icon: 'fa-solid fa-users-slash',
    title: 'Weak Collaboration Spaces',
    text: 'Few digital spaces exist where young creatives and innovators can meaningfully connect and collaborate.',
  },
  {
    icon: 'fa-solid fa-laptop-code',
    title: 'Lack of Digital Support',
    text: 'Access to the tools and platforms needed for digital growth remains limited for many young people.',
  },
  {
    icon: 'fa-solid fa-lock',
    title: 'Limited Access to Opportunity',
    text: 'Potential goes unnoticed — not because it doesn\u2019t exist, but because pathways to opportunity are missing.',
  },
];

const values = [
  { icon: 'fa-solid fa-palette', title: 'Creativity', text: 'Creativity drives expression and transformation.' },
  { icon: 'fa-solid fa-lightbulb', title: 'Innovation', text: 'Bold ideas and future-focused solutions.' },
  { icon: 'fa-solid fa-hand-holding-heart', title: 'Empowerment', text: 'Equipping young people with tools and confidence to thrive.' },
  { icon: 'fa-solid fa-people-group', title: 'Collaboration', text: 'Growth is stronger when people work together.' },
  { icon: 'fa-solid fa-circle-nodes', title: 'Inclusion', text: 'Welcoming diverse talents, ideas, and backgrounds.' },
  { icon: 'fa-solid fa-shield-halved', title: 'Integrity', text: 'Acting with honesty, purpose, and responsibility.' },
  { icon: 'fa-solid fa-bullseye', title: 'Impact', text: 'Committed to meaningful, lasting change.' },
  { icon: 'fa-solid fa-arrow-up-right-dots', title: 'Growth', text: 'Embracing learning, progress, and continuous improvement.' },
];

const audiences = [
  { icon: 'fa-solid fa-pen-fancy', label: 'Creatives & Artists' },
  { icon: 'fa-solid fa-rocket', label: 'Innovators & Problem-Solvers' },
  { icon: 'fa-solid fa-code', label: 'Developers & Digital Builders' },
  { icon: 'fa-solid fa-graduation-cap', label: 'Students & Emerging Professionals' },
  { icon: 'fa-solid fa-bolt', label: 'Youth Leaders & Changemakers' },
];

export default function AboutPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>About</span>
          <h1 className={styles.heroTitle}>
            A platform where creativity, innovation, and youth potential are transformed into opportunity and impact
          </h1>
          <p className={styles.heroIntro}>
            VikraHub is being built to empower creatives, innovators, and young changemakers through
            visibility, collaboration, digital growth, and meaningful opportunity. It exists to help
            young people showcase talent, develop ideas, build networks, explore digital tools, and
            discover opportunities that shape their future.
          </p>
        </div>
      </section>

      {/* ── Brand Story ── */}
      <section className={styles.storySection}>
        <div className={styles.storyInner}>
          <div className={styles.storyLeft}>
            <div className={styles.sectionAccent} />
            <h2 className={styles.sectionTitle}>Our Story</h2>
          </div>
          <div className={styles.storyText}>
            <p>
              VikraHub was born from the belief that young people have ideas, talent, and creativity
              that deserve to be seen, supported, and transformed into real opportunity.
            </p>
            <p>
              Across Africa, talented young people face limited visibility for their work, weak
              access to collaborative spaces, a lack of digital support, and few pathways to
              meaningful opportunities. Too often, potential goes unnoticed — not because it
              doesn&apos;t exist, but because the platforms and systems needed to surface it simply
              aren&apos;t there.
            </p>
            <p>
              VikraHub exists to help change that. It is being built as a space where creativity,
              innovation, and youth ambition can thrive together — and where talent meets the support
              it deserves.
            </p>
          </div>
        </div>
      </section>

      {/* ── Challenges ── */}
      <section className={styles.challengesSection}>
        <div className={styles.challengesInner}>
          <span className={styles.sectionEyebrow}>The Challenge</span>
          <h2 className={styles.sectionTitleLight}>Why VikraHub was created</h2>
          <div className={styles.challengeGrid}>
            {challenges.map((c) => (
              <div key={c.title} className={styles.challengeCard}>
                <div className={styles.challengeIcon}>
                  <i className={c.icon} aria-hidden="true" />
                </div>
                <h3 className={styles.challengeCardTitle}>{c.title}</h3>
                <p className={styles.challengeCardText}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className={styles.valuesSection}>
        <div className={styles.valuesInner}>
          <span className={styles.sectionEyebrow}>Our Principles</span>
          <h2 className={styles.sectionTitle}>What VikraHub stands for</h2>
          <div className={styles.valuesGrid}>
            {values.map((v) => (
              <div key={v.title} className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <i className={v.icon} aria-hidden="true" />
                </div>
                <h3 className={styles.valueCardTitle}>{v.title}</h3>
                <p className={styles.valueCardText}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Audience ── */}
      <section className={styles.audienceSection}>
        <div className={styles.audienceInner}>
          <span className={styles.sectionEyebrow}>Built For</span>
          <h2 className={styles.sectionTitle}>Who VikraHub serves</h2>
          <div className={styles.audienceGrid}>
            {audiences.map((a) => (
              <span key={a.label} className={styles.audiencePill}>
                <i className={`${a.icon} ${styles.audiencePillIcon}`} aria-hidden="true" />
                {a.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className={styles.visionSection}>
        <div className={styles.visionInner}>
          <div className={styles.visionCard}>
            <span className={styles.visionLabel}>Vision</span>
            <p className={styles.visionText}>
              To become a leading platform where creativity, innovation, and technology empower
              young people to unlock opportunities, build solutions, and shape the future of Africa.
            </p>
          </div>
          <div className={styles.visionCard}>
            <span className={styles.visionLabel}>Mission</span>
            <p className={styles.visionText}>
              To empower creatives, innovators, and young changemakers by providing a dynamic
              platform for visibility, collaboration, digital growth, and meaningful opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Be part of what&apos;s next</h2>
          <p className={styles.ctaText}>
            Join a platform where creativity, innovation, and youth potential come together to
            create opportunity, connection, and impact.
          </p>
          <div className={styles.ctaButtons}>
            <a
              href="https://app.vikrahub.com?auth=signup"
              className={styles.ctaPrimary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Join VikraHub
            </a>
            <a
              href="https://app.vikrahub.com"
              className={styles.ctaSecondary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open App
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
