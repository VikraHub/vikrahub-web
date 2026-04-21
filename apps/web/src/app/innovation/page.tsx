import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Innovation',
  description:
    'Explore how VikraHub, a growing platform in South Sudan, supports innovation, experimentation, practical problem-solving, and digital growth.',
  alternates: {
    canonical: 'https://vikrahub.com/innovation',
  },
  openGraph: {
    title: 'Innovation at VikraHub',
    description:
      'Explore how VikraHub in South Sudan supports bold thinking, digital experimentation, and youth-led innovation in practical ways.',
    url: 'https://vikrahub.com/innovation',
  },
  twitter: {
    title: 'Innovation at VikraHub',
    description:
      'Explore how VikraHub in South Sudan supports bold thinking, digital experimentation, and youth-led innovation in practical ways.',
  },
};

const focusAreas = [
  {
    icon: 'fa-solid fa-robot',
    title: 'AI and Emerging Technology',
    text: 'Creating space to explore practical uses of artificial intelligence, automation, and digital tools that can support young people and local communities.',
  },
  {
    icon: 'fa-solid fa-microchip',
    title: 'Digital Innovation',
    text: 'Supporting practical use of technology to solve local challenges, improve everyday processes, and create meaningful new experiences.',
  },
  {
    icon: 'fa-solid fa-rocket',
    title: 'Startup and Solution Building',
    text: 'Supporting early ideas, prototypes, and concepts that can grow into real ventures or community-driven solutions over time.',
  },
  {
    icon: 'fa-solid fa-flask',
    title: 'Research and Experimentation',
    text: 'Creating room for curiosity, learning, and testing practical approaches in a fast-changing digital environment.',
  },
  {
    icon: 'fa-solid fa-users-gear',
    title: 'Youth-Led Problem Solving',
    text: 'Helping young people identify real challenges and shape creative, practical responses that can create local value.',
  },
];

const valueItems = [
  {
    icon: 'fa-solid fa-lightbulb',
    title: 'Bold Thinking',
    text: 'Encouraging ideas that challenge the status quo in practical, grounded ways.',
  },
  {
    icon: 'fa-solid fa-laptop-code',
    title: 'Future-Ready Skills',
    text: 'Supporting digital capability growth for a changing world.',
  },
  {
    icon: 'fa-solid fa-vial',
    title: 'Experimentation',
    text: 'Creating space for testing, learning, and iterating over time.',
  },
  {
    icon: 'fa-solid fa-people-group',
    title: 'Collaboration & Visibility',
    text: 'Helping ideas gain visibility, direction, and community feedback.',
  },
  {
    icon: 'fa-solid fa-bullseye',
    title: 'Real Problem Solving',
    text: 'Encouraging technology-supported solutions for real local challenges.',
  },
];

const mattersPoints = [
  {
    icon: 'fa-solid fa-chart-line',
    text: '<strong>Confidence</strong> — Innovation strengthens self-belief and the courage to build something new.',
  },
  {
    icon: 'fa-solid fa-globe-africa',
    text: '<strong>Digital participation</strong> — It expands access and enables young people in South Sudan to shape their digital future.',
  },
  {
    icon: 'fa-solid fa-hammer',
    text: '<strong>Tools and systems</strong> — A new generation builds what the next generation will use.',
  },
];

const audiences = [
  { icon: 'fa-solid fa-pen-fancy', label: 'Creatives & Artists' },
  { icon: 'fa-solid fa-code', label: 'Developers & Builders' },
  { icon: 'fa-solid fa-rocket', label: 'Innovators & Entrepreneurs' },
  { icon: 'fa-solid fa-graduation-cap', label: 'Students & Researchers' },
  { icon: 'fa-solid fa-bolt', label: 'Changemakers & Problem-Solvers' },
];

export default function InnovationPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Innovation</span>
          <h1 className={styles.heroTitle}>
            Practical innovation for real challenges in South Sudan
          </h1>
          <p className={styles.heroIntro}>
            VikraHub is a growing platform being built in South Sudan to support bold thinking,
            digital experimentation, and practical problem-solving. It creates space for young
            innovators, creatives, developers, and changemakers to explore ideas, test solutions,
            and build direction through technology.
          </p>
        </div>
      </section>

      {/* ── What Innovation Means ── */}
      <section className={styles.meaningSection}>
        <div className={styles.meaningInner}>
          <div className={styles.meaningLeft}>
            <div className={styles.sectionAccent} />
            <h2 className={styles.sectionTitle}>
              What innovation means at VikraHub
            </h2>
          </div>
          <div className={styles.meaningText}>
            <p>
              Innovation at VikraHub means applying creativity and digital thinking to real needs in
              South Sudan. It encourages young people to think boldly, test ideas, and turn
              knowledge into practical action.
            </p>
            <p>
              It is not about technology for its own sake. It is about using innovation to respond
              to real local problems, open pathways, and strengthen communities over time.
            </p>
            <p>
              This reflects VikraHub&apos;s commitment to supporting young people as they create with
              purpose, confidence, and clear direction.
            </p>
          </div>
        </div>
      </section>

      {/* ── Why It Matters ── */}
      <section className={styles.mattersSection}>
        <div className={styles.mattersInner}>
          <div className={styles.mattersContent}>
            <h2>Why it matters</h2>
            <p>
              In South Sudan, many young people have strong ideas and creative potential, but still
              have limited access to spaces that support experimentation, collaboration, and
              visibility. VikraHub is being built to help close that gap.
            </p>
            <p>
              Innovation matters because it helps a new generation build practical tools and systems
              for a changing world, expanding digital participation and creating lasting local
              value.
            </p>
          </div>
          <div className={styles.mattersPoints}>
            {mattersPoints.map((m, i) => (
              <div key={i} className={styles.mattersPoint}>
                <i className={`${m.icon} ${styles.mattersPointIcon}`} aria-hidden="true" />
                <p
                  className={styles.mattersPointText}
                  dangerouslySetInnerHTML={{ __html: m.text }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Focus Areas ── */}
      <section className={styles.focusSection}>
        <div className={styles.focusInner}>
          <span className={styles.sectionEyebrow}>Focus Areas</span>
          <h2 className={styles.sectionTitle}>What we are building support around</h2>
          <div className={styles.focusGrid}>
            {focusAreas.map((f) => (
              <div key={f.title} className={styles.focusCard}>
                <div className={styles.focusIcon}>
                  <i className={f.icon} aria-hidden="true" />
                </div>
                <h3 className={styles.focusCardTitle}>{f.title}</h3>
                <p className={styles.focusCardText}>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Creates Value ── */}
      <section className={styles.valueSection}>
        <div className={styles.valueInner}>
          <span className={styles.sectionEyebrow}>Impact</span>
          <h2 className={styles.sectionTitle}>How innovation creates value</h2>
          <div className={styles.valueGrid}>
            {valueItems.map((v) => (
              <div key={v.title} className={styles.valueItem}>
                <div className={styles.valueItemIcon}>
                  <i className={v.icon} aria-hidden="true" />
                </div>
                <h3 className={styles.valueItemTitle}>{v.title}</h3>
                <p className={styles.valueItemText}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who It Is For ── */}
      <section className={styles.audienceSection}>
        <div className={styles.audienceInner}>
          <span className={styles.sectionEyebrow}>Built For</span>
          <h2 className={styles.sectionTitle}>Who this space is for</h2>
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

      {/* ── Why It Belongs at VikraHub ── */}
      <section className={styles.belongsSection}>
        <div className={styles.belongsInner}>
          <span className={styles.belongsLabel}>Why It Belongs Here</span>
          <p className={styles.belongsText}>
            Innovation is a direct extension of VikraHub&apos;s mission to support creatives,
            innovators, and young changemakers. It reflects a platform being built in South Sudan
            where creativity, innovation, and technology help young people build solutions, unlock
            opportunities, and contribute to a stronger future.
          </p>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Build ideas that matter</h2>
          <p className={styles.ctaText}>
            Explore innovation at VikraHub and be part of a growing platform in South Sudan where
            creativity, technology, and youth potential come together to shape practical solutions
            and meaningful progress.
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
