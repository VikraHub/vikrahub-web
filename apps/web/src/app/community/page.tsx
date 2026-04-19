import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Community • VikraHub',
  description:
    'Explore the VikraHub community and how collaboration, belonging, and shared growth help young people move forward together.',
  alternates: {
    canonical: 'https://vikrahub.com/community',
  },
};

const whyHighlights = [
  {
    icon: 'fa-solid fa-heart',
    text: '<strong>Belonging</strong> — Community creates a sense of place where young people feel seen and valued.',
  },
  {
    icon: 'fa-solid fa-shield-halved',
    text: '<strong>Confidence</strong> — Shared encouragement helps people take bolder steps toward their goals.',
  },
  {
    icon: 'fa-solid fa-arrows-up-to-line',
    text: '<strong>Collective progress</strong> — People move further together than they ever could alone.',
  },
];

const looksLikeItems = [
  {
    icon: 'fa-solid fa-link',
    title: 'Connection',
    text: 'Connecting with creatives, innovators, and peers who share your drive and ambition.',
  },
  {
    icon: 'fa-solid fa-comments',
    title: 'Idea Sharing',
    text: 'Sharing ideas, work, and perspectives in a space built for meaningful exchange.',
  },
  {
    icon: 'fa-solid fa-book-open',
    title: 'Learning',
    text: 'Learning through conversations, content, and resources that help you grow.',
  },
  {
    icon: 'fa-solid fa-handshake',
    title: 'Collaboration',
    text: 'Collaborating on projects and initiatives that create real impact together.',
  },
  {
    icon: 'fa-solid fa-user-graduate',
    title: 'Mentorship & Opportunity',
    text: 'Discovering opportunities for mentorship, growth, and increased visibility.',
  },
  {
    icon: 'fa-solid fa-hands-holding',
    title: 'Support Culture',
    text: 'Supporting one another through a shared culture of encouragement and respect.',
  },
];

const opportunityItems = [
  {
    icon: 'fa-solid fa-eye',
    title: 'Visibility',
    text: 'Get your work and ideas seen by a wider audience.',
  },
  {
    icon: 'fa-solid fa-people-arrows',
    title: 'Partnerships',
    text: 'Find collaborators and build meaningful working relationships.',
  },
  {
    icon: 'fa-solid fa-compass',
    title: 'Mentorship',
    text: 'Connect with people who can guide and support your growth.',
  },
  {
    icon: 'fa-solid fa-chart-line',
    title: 'Growth',
    text: 'Engage with pathways that support your development.',
  },
];

const audiences = [
  { icon: 'fa-solid fa-pen-fancy', label: 'Creatives & Artists' },
  { icon: 'fa-solid fa-rocket', label: 'Innovators & Problem-Solvers' },
  { icon: 'fa-solid fa-code', label: 'Developers & Digital Builders' },
  { icon: 'fa-solid fa-graduation-cap', label: 'Students & Emerging Professionals' },
  { icon: 'fa-solid fa-bolt', label: 'Youth Leaders & Changemakers' },
  { icon: 'fa-solid fa-seedling', label: 'Anyone Ready to Learn & Grow' },
];

export default function CommunityPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Community</span>
          <h1 className={styles.heroTitle}>
            A network built on collaboration, belonging, and shared growth
          </h1>
          <p className={styles.heroIntro}>
            At the heart of VikraHub is community. A space where creatives, innovators, developers,
            students, and young changemakers connect, share ideas, support one another, and grow
            together.
          </p>
        </div>
      </section>

      {/* ── What Community Means ── */}
      <section className={styles.meaningSection}>
        <div className={styles.meaningInner}>
          <div className={styles.meaningLeft}>
            <div className={styles.sectionAccent} />
            <h2 className={styles.sectionTitle}>
              What community means at VikraHub
            </h2>
          </div>
          <div className={styles.meaningText}>
            <p>
              Community at VikraHub is more than gathering people in one place. It is about creating
              an environment where collaboration, encouragement, and shared learning can flourish.
            </p>
            <p>
              It is a community where young people can exchange knowledge, discover inspiration,
              build relationships, and find support as they develop their talents and ideas. VikraHub
              becomes not only a platform, but also a living network of people moving forward
              together.
            </p>
          </div>
        </div>
      </section>

      {/* ── Why Community Matters ── */}
      <section className={styles.whySection}>
        <div className={styles.whyInner}>
          <div className={styles.whyContent}>
            <h2>Why community matters</h2>
            <p>
              Across Africa, many talented young people struggle in isolation. They may have ideas,
              skills, and ambition, but not enough spaces where they can connect with others who
              understand their journey.
            </p>
            <p>
              Community matters because it turns creativity into collaboration and ambition into
              collective progress.
            </p>
          </div>
          <div className={styles.whyHighlights}>
            {whyHighlights.map((h, i) => (
              <div key={i} className={styles.whyHighlight}>
                <i className={`${h.icon} ${styles.whyHighlightIcon}`} aria-hidden="true" />
                <p
                  className={styles.whyHighlightText}
                  dangerouslySetInnerHTML={{ __html: h.text }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What Community Looks Like ── */}
      <section className={styles.looksSection}>
        <div className={styles.looksInner}>
          <span className={styles.sectionEyebrow}>In Practice</span>
          <h2 className={styles.sectionTitle}>What community looks like</h2>
          <div className={styles.looksGrid}>
            {looksLikeItems.map((item) => (
              <div key={item.title} className={styles.looksCard}>
                <div className={styles.looksIcon}>
                  <i className={item.icon} aria-hidden="true" />
                </div>
                <h3 className={styles.looksCardTitle}>{item.title}</h3>
                <p className={styles.looksCardText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Collaboration at the Core ── */}
      <section className={styles.collabSection}>
        <div className={styles.collabInner}>
          <span className={styles.collabLabel}>At the Core</span>
          <h2 className={styles.collabTitle}>
            Collaboration is how ideas become clearer, projects become stronger, and people become
            more confident
          </h2>
          <div className={styles.collabText}>
            <p>
              Collaboration is one of the strongest foundations of VikraHub. The platform is designed
              to help people learn from each other, exchange perspectives, and build stronger work
              through shared effort.
            </p>
            <p>
              In the VikraHub community, collaboration is not only an activity. It is part of the
              culture — how we grow, how we create, and how we move forward together.
            </p>
          </div>
        </div>
      </section>

      {/* ── Community and Opportunity ── */}
      <section className={styles.opportunitySection}>
        <div className={styles.opportunityInner}>
          <span className={styles.sectionEyebrow}>Opportunity</span>
          <h2 className={styles.sectionTitle}>Community as a pathway to growth</h2>
          <div className={styles.opportunityContent}>
            <p className={styles.opportunityText}>
              By being part of a connected ecosystem, young people can gain exposure, discover
              partnerships, find mentors, and engage with opportunities that support their
              development in the creative and digital economy.
            </p>
          </div>
          <div className={styles.opportunityGrid}>
            {opportunityItems.map((o) => (
              <div key={o.title} className={styles.opportunityCard}>
                <div className={styles.opportunityCardIcon}>
                  <i className={o.icon} aria-hidden="true" />
                </div>
                <h3 className={styles.opportunityCardTitle}>{o.title}</h3>
                <p className={styles.opportunityCardText}>{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who the Community Is For ── */}
      <section className={styles.audienceSection}>
        <div className={styles.audienceInner}>
          <span className={styles.sectionEyebrow}>Built For</span>
          <h2 className={styles.sectionTitle}>Who the community is for</h2>
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
          <h2 className={styles.ctaTitle}>Join a community that grows with purpose</h2>
          <p className={styles.ctaText}>
            Become part of VikraHub and connect with a network of creatives, innovators, and young
            changemakers who are learning, building, and shaping the future together.
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
