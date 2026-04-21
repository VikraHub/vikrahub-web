import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Why VikraHub',
  description:
    'Learn why VikraHub exists as a growing platform rooted in South Sudan and being built to support visibility, collaboration, digital growth, and meaningful opportunity.',
  alternates: {
    canonical: 'https://vikrahub.com/why-vikrahub',
  },
  openGraph: {
    title: 'Why VikraHub',
    description:
      'Talent deserves visibility, connection, and support. Learn why VikraHub is being built in South Sudan.',
    url: 'https://vikrahub.com/why-vikrahub',
  },
  twitter: {
    title: 'Why VikraHub',
    description:
      'Talent deserves visibility, connection, and support. Learn why VikraHub is being built in South Sudan.',
  },
};

const problems = [
  {
    icon: 'fa-solid fa-eye-slash',
    title: 'Limited Visibility',
    text: 'In South Sudan, many talented young people still struggle to get their work seen by the right audiences, networks, and opportunities.',
  },
  {
    icon: 'fa-solid fa-users-slash',
    title: 'Few Collaborative Spaces',
    text: 'Meaningful digital spaces where young creatives and innovators in South Sudan can connect and build together remain rare.',
  },
  {
    icon: 'fa-solid fa-laptop-code',
    title: 'Weak Digital Support',
    text: 'Access to tools, guidance, and platforms for digital growth is still limited for many young people in South Sudan.',
  },
  {
    icon: 'fa-solid fa-lock',
    title: 'Limited Access to Opportunity',
    text: 'Potential goes unnoticed, not because it does not exist, but because clear pathways to opportunity are still missing.',
  },
];

const pillars = [
  {
    icon: 'fa-solid fa-eye',
    title: 'Visibility',
    text: 'VikraHub is being built to help young people showcase their talent, ideas, and work so they can be recognized and valued.',
  },
  {
    icon: 'fa-solid fa-people-group',
    title: 'Community',
    text: 'VikraHub is being built to create space where creatives, innovators, developers, and changemakers can connect and grow together.',
  },
  {
    icon: 'fa-solid fa-lightbulb',
    title: 'Innovation',
    text: 'VikraHub supports bold thinking, digital experimentation, and practical problem-solving as part of a growing platform journey.',
  },
  {
    icon: 'fa-solid fa-door-open',
    title: 'Opportunity',
    text: 'VikraHub is being built to create stronger pathways toward mentorship, partnerships, exposure, training, and growth opportunities.',
  },
];

const mattersHighlights = [
  {
    icon: 'fa-solid fa-palette',
    text: '<strong>Creativity</strong> is becoming a stronger force in local economies and communities.',
  },
  {
    icon: 'fa-solid fa-microchip',
    text: '<strong>Technology</strong> is reshaping how young people in South Sudan can learn, build, and create impact.',
  },
  {
    icon: 'fa-solid fa-bolt',
    text: '<strong>Youth potential</strong> should not be ignored — it should be supported and developed into opportunity.',
  },
];

const audiences = [
  { icon: 'fa-solid fa-pen-fancy', label: 'Creatives & Artists' },
  { icon: 'fa-solid fa-rocket', label: 'Innovators & Problem-Solvers' },
  { icon: 'fa-solid fa-code', label: 'Developers & Digital Builders' },
  { icon: 'fa-solid fa-graduation-cap', label: 'Students & Emerging Professionals' },
  { icon: 'fa-solid fa-bolt', label: 'Youth Leaders & Changemakers' },
];

export default function WhyVikraHubPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Why VikraHub</span>
          <h1 className={styles.heroTitle}>
            Because young talent in South Sudan deserves visibility, support, and real opportunity
          </h1>
          <p className={styles.heroIntro}>
            VikraHub is a growing platform rooted in South Sudan. It is being built from a simple
            but powerful belief: young people have ideas, talent, and creativity that deserve to be
            seen, supported, and developed into real opportunity.
          </p>
        </div>
      </section>

      {/* ── The Challenge ── */}
      <section className={styles.challengeSection}>
        <div className={styles.challengeInner}>
          <div className={styles.challengeLeft}>
            <div className={styles.sectionAccent} />
            <h2 className={styles.sectionTitle}>The Challenge</h2>
          </div>
          <div className={styles.challengeText}>
            <p>
              In South Sudan, many talented young people still struggle to move forward, not because
              they lack potential, but because the right platforms, networks, and support systems
              are still limited.
            </p>
            <p>
              They may have creative ability, bold ideas, or the desire to solve problems, yet still
              remain unseen, disconnected, and limited by few pathways for growth. This present-day
              reality is one of the clearest reasons VikraHub exists.
            </p>
          </div>
        </div>
      </section>

      {/* ── The Problem We See ── */}
      <section className={styles.problemSection}>
        <div className={styles.problemInner}>
          <span className={styles.sectionEyebrow}>The Problem</span>
          <h2 className={styles.sectionTitleLight}>What young people face today</h2>
          <div className={styles.problemGrid}>
            {problems.map((p) => (
              <div key={p.title} className={styles.problemCard}>
                <div className={styles.problemIcon}>
                  <i className={p.icon} aria-hidden="true" />
                </div>
                <h3 className={styles.problemCardTitle}>{p.title}</h3>
                <p className={styles.problemCardText}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why VikraHub Exists ── */}
      <section className={styles.existsSection}>
        <div className={styles.existsInner}>
          <span className={styles.sectionEyebrow}>Our Purpose</span>
          <h2 className={styles.sectionTitle}>Why VikraHub exists</h2>
          <div className={styles.existsText}>
            <p>
              VikraHub exists because many creatives, innovators, and young people in South Sudan
              still lack the visibility, connection, and digital support needed to move forward. It
              is being built to help move young people from hidden potential toward visible progress.
            </p>
            <p>
              VikraHub recognizes that talent alone is not enough. Young people also need stronger
              structure, support, and pathways that help them connect, grow, and step into
              meaningful opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* ── Our Response / Four Pillars ── */}
      <section className={styles.pillarsSection}>
        <div className={styles.pillarsInner}>
          <span className={styles.sectionEyebrow}>Our Response</span>
          <h2 className={styles.sectionTitle}>Four pillars that drive VikraHub</h2>
          <div className={styles.pillarsGrid}>
            {pillars.map((p) => (
              <div key={p.title} className={styles.pillarCard}>
                <div className={styles.pillarIcon}>
                  <i className={p.icon} aria-hidden="true" />
                </div>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarText}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why It Matters Now ── */}
      <section className={styles.mattersSection}>
        <div className={styles.mattersInner}>
          <div className={styles.mattersContent}>
            <h2>Why it matters now</h2>
            <p>
              In South Sudan, creativity, innovation, and technology are becoming more important in
              shaping livelihoods, communities, and future opportunities. Yet many young people
              still lack the digital platforms and support needed to participate fully.
            </p>
            <p>
              VikraHub matters because it is a serious response in motion. It is being built around
              the belief that youth potential should not be ignored; it should be supported,
              connected, and developed into opportunity and impact.
            </p>
          </div>
          <div className={styles.mattersHighlights}>
            {mattersHighlights.map((h, i) => (
              <div key={i} className={styles.mattersHighlight}>
                <i className={`${h.icon} ${styles.mattersHighlightIcon}`} aria-hidden="true" />
                <p
                  className={styles.mattersHighlightText}
                  dangerouslySetInnerHTML={{ __html: h.text }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who It Is For ── */}
      <section className={styles.audienceSection}>
        <div className={styles.audienceInner}>
          <span className={styles.sectionEyebrow}>Built For</span>
          <h2 className={styles.sectionTitle}>Who VikraHub is for</h2>
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

      {/* ── Final CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Join the movement</h2>
          <p className={styles.ctaText}>
            Join a growing platform rooted in South Sudan and being built to help young creatives
            and innovators gain visibility, build community, explore innovation, and access
            meaningful opportunities over time.
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
