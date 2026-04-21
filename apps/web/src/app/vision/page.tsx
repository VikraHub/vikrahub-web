import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Vision, Mission & Values',
  description:
    'The vision, mission, objectives, and core values that guide VikraHub as a growing platform rooted in South Sudan and built for long-term impact.',
  alternates: {
    canonical: 'https://vikrahub.com/vision',
  },
  openGraph: {
    title: 'Vision, Mission & Values',
    description:
      'The guiding vision, mission, objectives, and core values behind VikraHub as a growing platform in South Sudan.',
    url: 'https://vikrahub.com/vision',
  },
  twitter: {
    title: 'Vision, Mission & Values',
    description:
      'The guiding vision, mission, objectives, and core values behind VikraHub as a growing platform in South Sudan.',
  },
};

const objectives = [
  {
    icon: 'fa-solid fa-palette',
    title: 'Empower creative and innovative talent',
    text: 'Support young people whose ideas, skills, and originality deserve stronger visibility and opportunity.',
  },
  {
    icon: 'fa-solid fa-people-group',
    title: 'Promote collaboration and community',
    text: 'Create a connected environment where shared learning, support, and partnership can grow.',
  },
  {
    icon: 'fa-solid fa-globe',
    title: 'Expand digital opportunities',
    text: 'Open stronger pathways to exposure, access, and participation in South Sudan’s digital economy.',
  },
  {
    icon: 'fa-solid fa-lightbulb',
    title: 'Encourage innovation and problem-solving',
    text: 'Make space for bold ideas and practical solutions that respond to real challenges.',
  },
  {
    icon: 'fa-solid fa-bolt',
    title: 'Strengthen youth empowerment',
    text: 'Equip young people with the confidence, structure, and support needed to move forward.',
  },
  {
    icon: 'fa-solid fa-laptop-code',
    title: 'Advance digital growth',
    text: 'Help talent build capability, explore digital tools, and keep developing over time.',
  },
  {
    icon: 'fa-solid fa-seedling',
    title: 'Create meaningful impact',
    text: 'Focus on outcomes that generate social, economic, and educational value in local communities.',
  },
];

const values = [
  {
    icon: 'fa-solid fa-palette',
    title: 'Creativity',
    text: 'We believe creativity drives expression and transformation. VikraHub exists to support the act of creating and the people behind it.',
  },
  {
    icon: 'fa-solid fa-lightbulb',
    title: 'Innovation',
    text: 'We value bold ideas and future-focused solutions. Every tool and feature is guided by whether it genuinely helps people do better, more impactful work.',
  },
  {
    icon: 'fa-solid fa-hand-holding-heart',
    title: 'Empowerment',
    text: 'We are building support that helps young people gain tools, visibility, and confidence to move from potential toward progress.',
  },
  {
    icon: 'fa-solid fa-handshake',
    title: 'Collaboration',
    text: 'We believe growth is stronger when people work together. VikraHub fosters a culture of shared learning, honest feedback, and mutual respect.',
  },
  {
    icon: 'fa-solid fa-circle-nodes',
    title: 'Inclusion',
    text: 'We welcome diverse talents, ideas, and backgrounds. Everyone deserves a space where their voice and contribution are valued.',
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Integrity',
    text: 'We act with honesty, purpose, and responsibility. Trust is earned through transparency and consistency.',
  },
  {
    icon: 'fa-solid fa-bullseye',
    title: 'Impact',
    text: 'We are committed to meaningful change — work that creates positive social, economic, and educational value in communities.',
  },
  {
    icon: 'fa-solid fa-arrow-up-right-dots',
    title: 'Growth',
    text: 'We embrace learning, progress, and continuous improvement. Long-term development matters more than short-term metrics.',
  },
];

export default function VisionPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Foundations</span>
          <h1 className={styles.heroTitle}>
            The vision, mission, objectives, and values that guide how VikraHub builds
          </h1>
          <p className={styles.heroIntro}>
            VikraHub is guided by a clear vision, a focused mission, and a set of foundations that
            put people, integrity, and impact first. These foundations guide a growing platform in
            South Sudan that is being built to support creativity, innovation, and youth potential
            with practical direction and long-term ambition.
          </p>
        </div>
      </section>

      <section className={styles.statementSection}>
        <div className={styles.statementInner}>
          <div className={styles.statementContent}>
            <div className={styles.sectionAccent} />
            <span className={styles.sectionEyebrow}>Vision</span>
            <h2 className={styles.sectionTitle}>
              An aspirational direction for what VikraHub can become
            </h2>
          </div>
          <div className={styles.statementCard}>
            <span className={styles.statementLabel}>Vision</span>
            <p className={styles.statementText}>
              To grow from South Sudan into a leading platform where creativity, innovation, and
              technology empower young people to unlock opportunities, build solutions, and
              contribute to the future of Africa.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.missionSection}>
        <div className={styles.missionInner}>
          <div className={styles.missionCard}>
            <span className={styles.statementLabel}>Mission</span>
            <p className={styles.statementTextLight}>
              To empower creatives, innovators, and young changemakers by building a serious,
              growing platform in South Sudan for visibility, collaboration, digital growth, and
              meaningful opportunity.
            </p>
          </div>
          <div className={styles.missionContent}>
            <span className={styles.sectionEyebrow}>Mission</span>
            <h2 className={styles.sectionTitleLight}>
              A practical commitment to how the platform serves
            </h2>
            <p className={styles.sectionTextLight}>
              The mission keeps VikraHub grounded in action. It defines the role of the platform as
              a place being built for visibility, connection, development, and opportunity, not
              just aspiration.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.objectivesSection}>
        <div className={styles.objectivesInner}>
          <span className={styles.sectionEyebrow}>Objectives</span>
          <h2 className={styles.sectionTitle}>What these foundations are designed to achieve</h2>
          <div className={styles.objectivesGrid}>
            {objectives.map((objective) => (
              <article key={objective.title} className={styles.objectiveCard}>
                <div className={styles.objectiveIcon}>
                  <i className={objective.icon} aria-hidden="true" />
                </div>
                <h3 className={styles.objectiveTitle}>{objective.title}</h3>
                <p className={styles.objectiveText}>{objective.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className={styles.valuesInner}>
          <span className={styles.sectionEyebrow}>Core Values</span>
          <h2 className={styles.sectionTitleLight}>The principles that shape every decision</h2>
          <div className={styles.valuesGrid}>
            {values.map((value) => (
              <article key={value.title} className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <i className={value.icon} aria-hidden="true" />
                </div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueText}>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.foundationsSection}>
        <div className={styles.foundationsInner}>
          <div className={styles.foundationsLeft}>
            <div className={styles.sectionAccent} />
            <span className={styles.sectionEyebrow}>Why It Matters</span>
            <h2 className={styles.sectionTitle}>Why these foundations matter</h2>
          </div>
          <div className={styles.foundationsText}>
            <p>
              These principles are not aspirational slogans. They guide how VikraHub is being built
              today, what we choose to prioritize, and how we serve the people who trust the
              platform.
            </p>
            <p>
              They keep the platform focused on opportunity, accountable in its decisions, and
              clear about the kind of growth it aims to support in South Sudan first and, over
              time, beyond. As VikraHub grows, these foundations remain constant.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Build with a platform guided by clear principles</h2>
          <p className={styles.ctaText}>
            Join VikraHub to grow in a space shaped by creativity, innovation, integrity,
            collaboration, and meaningful opportunity.
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
