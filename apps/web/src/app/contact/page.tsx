import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contact • VikraHub',
  description:
    'Get in touch with VikraHub for collaboration, partnerships, community engagement, and general inquiries.',
  alternates: {
    canonical: 'https://vikrahub.com/contact',
  },
};

const pathways = [
  {
    icon: 'fa-solid fa-envelope',
    title: 'General Inquiry',
    text: 'Questions about VikraHub, what we do, or how to get involved.',
  },
  {
    icon: 'fa-solid fa-handshake',
    title: 'Partnership',
    text: 'Explore collaboration with organizations, institutions, and programs.',
  },
  {
    icon: 'fa-solid fa-people-group',
    title: 'Collaboration',
    text: 'Work together on projects, initiatives, or creative opportunities.',
  },
  {
    icon: 'fa-solid fa-users',
    title: 'Community',
    text: 'Learn about joining the VikraHub community or engaging with members.',
  },
  {
    icon: 'fa-solid fa-door-open',
    title: 'Opportunity',
    text: 'Programs, events, mentorship, and other growth-oriented pathways.',
  },
  {
    icon: 'fa-solid fa-newspaper',
    title: 'Media / Press',
    text: 'Press inquiries, media coverage, speaking, and public engagement.',
  },
];

const topics = [
  { icon: 'fa-solid fa-circle-info', label: 'General inquiries about VikraHub' },
  { icon: 'fa-solid fa-handshake', label: 'Partnerships and collaborations' },
  { icon: 'fa-solid fa-users', label: 'Community and youth engagement' },
  { icon: 'fa-solid fa-microchip', label: 'Innovation, technology, and AI' },
  { icon: 'fa-solid fa-calendar', label: 'Events, programs, and opportunities' },
  { icon: 'fa-solid fa-newspaper', label: 'Media, speaking, and press' },
  { icon: 'fa-solid fa-life-ring', label: 'Support and getting started' },
  { icon: 'fa-solid fa-lightbulb', label: 'Ideas, feedback, and suggestions' },
];

export default function ContactPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Contact</span>
          <h1 className={styles.heroTitle}>
            Let&apos;s connect around ideas, partnerships, and purpose
          </h1>
          <p className={styles.heroIntro}>
            VikraHub is open to meaningful conversations with creatives, innovators, partners,
            supporters, institutions, and young people who believe in the power of creativity,
            innovation, and youth empowerment.
          </p>
        </div>
      </section>

      {/* ── Why Connect ── */}
      <section className={styles.whySection}>
        <div className={styles.whyInner}>
          <div className={styles.whyLeft}>
            <div className={styles.sectionAccent} />
            <h2 className={styles.sectionTitle}>
              Why connect with VikraHub
            </h2>
          </div>
          <div className={styles.whyText}>
            <p>
              A public platform should not only explain its mission — it should also make it easy for
              people to reach out, ask questions, and begin meaningful conversations.
            </p>
            <p>
              For VikraHub, contact is more than an inquiry form. It is an invitation to engage with
              a platform that exists to empower creatives, innovators, and young changemakers through
              visibility, collaboration, digital growth, and meaningful opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact Pathways ── */}
      <section className={styles.pathwaysSection}>
        <div className={styles.pathwaysInner}>
          <span className={styles.sectionEyebrow}>Ways to Connect</span>
          <h2 className={styles.sectionTitleLight}>Choose the right pathway</h2>
          <div className={styles.pathwaysGrid}>
            {pathways.map((p) => (
              <div key={p.title} className={styles.pathwayCard}>
                <div className={styles.pathwayIcon}>
                  <i className={p.icon} aria-hidden="true" />
                </div>
                <h3 className={styles.pathwayCardTitle}>{p.title}</h3>
                <p className={styles.pathwayCardText}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Information ── */}
      <section className={styles.contactSection}>
        <div className={styles.contactInner}>
          <span className={styles.sectionEyebrow}>Get in Touch</span>
          <h2 className={styles.sectionTitle}>Reach VikraHub directly</h2>
          <div className={styles.contactGrid}>
            <div className={styles.contactCard}>
              <div className={styles.contactCardIcon}>
                <i className="fa-solid fa-envelope" aria-hidden="true" />
              </div>
              <h3 className={styles.contactCardTitle}>Email</h3>
              <p className={styles.contactCardValue}>
                <a href="mailto:hello@vikrahub.com">hello@vikrahub.com</a>
              </p>
            </div>
            <div className={styles.contactCard}>
              <div className={styles.contactCardIcon}>
                <i className="fa-brands fa-whatsapp" aria-hidden="true" />
              </div>
              <h3 className={styles.contactCardTitle}>WhatsApp</h3>
              <p className={styles.contactCardValue}>
                <a
                  href="https://wa.me/254700000000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Send a message
                </a>
              </p>
            </div>
            <div className={styles.contactCard}>
              <div className={styles.contactCardIcon}>
                <i className="fa-solid fa-globe" aria-hidden="true" />
              </div>
              <h3 className={styles.contactCardTitle}>Social</h3>
              <p className={styles.contactCardValue}>
                <a
                  href="https://twitter.com/vikrahub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @vikrahub
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What People Can Reach Out About ── */}
      <section className={styles.topicsSection}>
        <div className={styles.topicsInner}>
          <span className={styles.sectionEyebrow}>Topics</span>
          <h2 className={styles.sectionTitle}>What you can reach out about</h2>
          <div className={styles.topicsGrid}>
            {topics.map((t) => (
              <div key={t.label} className={styles.topicItem}>
                <i className={`${t.icon} ${styles.topicIcon}`} aria-hidden="true" />
                <span className={styles.topicLabel}>{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reassurance ── */}
      <section className={styles.reassuranceSection}>
        <div className={styles.reassuranceInner}>
          <span className={styles.reassuranceLabel}>Open to Connection</span>
          <p className={styles.reassuranceText}>
            Whether you want to collaborate, ask a question, explore a partnership, or simply learn
            more — VikraHub is open to meaningful connection. Every conversation matters.
          </p>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Start the conversation</h2>
          <p className={styles.ctaText}>
            Join a platform where creativity, innovation, and youth potential come together to create
            opportunity, connection, and impact.
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
