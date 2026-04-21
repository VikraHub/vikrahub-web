import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'How It Works',
  description:
    'Learn how VikraHub works as a growing platform in South Sudan: discover the platform, begin building visibility, connect with others, and grow over time.',
  alternates: {
    canonical: 'https://vikrahub.com/how-it-works',
  },
  openGraph: {
    title: 'How It Works',
    description:
      'Discover how young people in South Sudan can begin visibility, connection, and growth through VikraHub.',
    url: 'https://vikrahub.com/how-it-works',
  },
  twitter: {
    title: 'How It Works',
    description:
      'Discover how young people in South Sudan can begin visibility, connection, and growth through VikraHub.',
  },
};

const journeySteps = [
  {
    id: 'discover',
    eyebrow: 'Step 1',
    title: 'Discover VikraHub',
    icon: 'fa-solid fa-compass',
    body: 'Explore what VikraHub is about. The public website helps you understand the mission, see real work, and learn how the platform is being built in South Sudan.',
    points: [
      'See featured proof from creatives and innovators.',
      'Understand why the platform exists and who it serves.',
      'Get a clear view of the culture and direction before joining.',
    ],
    tone: 'light',
  },
  {
    id: 'join',
    eyebrow: 'Step 2',
    title: 'Join the platform',
    icon: 'fa-solid fa-user-plus',
    body: 'Joining is your first step into VikraHub. Whether you are an artist, developer, student, innovator, or youth leader, your profile helps your work become more visible and easier to follow.',
    points: [
      'Sign up and present who you are with clarity.',
      'Create visibility for your interests, skills, and direction.',
      'Start your journey in a platform being built for real growth, not noise.',
    ],
    tone: 'dark',
  },
  {
    id: 'connect',
    eyebrow: 'Step 3',
    title: 'Connect with people and ideas',
    icon: 'fa-solid fa-people-group',
    body: 'VikraHub is being built around meaningful community. Share your work, exchange feedback, collaborate on ideas, and build relationships that strengthen your journey.',
    points: [
      'Discover people aligned with your purpose.',
      'Collaborate in a culture of respect and shared learning.',
      'Build trust through contribution and consistency.',
    ],
    tone: 'light',
  },
  {
    id: 'explore',
    eyebrow: 'Step 4',
    title: 'Explore innovation and opportunity',
    icon: 'fa-solid fa-lightbulb',
    body: 'As you engage, VikraHub helps you discover practical pathways such as collaboration, mentorship, partnerships, and digital growth opportunities as they continue to develop.',
    points: [
      'Find pathways that can support your next steps.',
      'Explore innovation through practical experimentation and tools.',
      'Turn potential into visible progress over time.',
    ],
    tone: 'dark',
  },
  {
    id: 'grow',
    eyebrow: 'Step 5',
    title: 'Grow with purpose',
    icon: 'fa-solid fa-arrow-up-right-dots',
    body: 'VikraHub is being built for long-term development. Over time, your visibility, network, and experience can grow into stronger capability and deeper impact.',
    points: [
      'Build momentum through continuous growth.',
      'Develop a stronger public profile and track record.',
      'Create meaningful value for yourself and your community.',
    ],
    tone: 'light',
  },
];

export default function HowItWorksPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>How It Works</span>
          <h1 className={styles.heroTitle}>
            A simple journey from talent and ideas to visibility, collaboration, and opportunity
          </h1>
          <p className={styles.heroIntro}>
            VikraHub is a growing platform in South Sudan that helps young people begin a clear
            path: discover the platform, start building visibility, connect with people and ideas,
            explore practical opportunities, and keep growing with purpose.
          </p>
        </div>
      </section>

      <section className={styles.journeySection}>
        <div className={styles.journeyInner}>
          {journeySteps.map((step) => (
            <article
              key={step.id}
              className={`${styles.stepBlock} ${step.tone === 'dark' ? styles.stepBlockDark : styles.stepBlockLight}`}
            >
              <div className={styles.stepContent}>
                <span className={styles.stepEyebrow}>{step.eyebrow}</span>
                <h2 className={step.tone === 'dark' ? styles.stepTitleDark : styles.stepTitleLight}>
                  {step.title}
                </h2>
                <p className={step.tone === 'dark' ? styles.stepBodyDark : styles.stepBodyLight}>
                  {step.body}
                </p>
              </div>

              <div className={step.tone === 'dark' ? styles.stepCardDark : styles.stepCardLight}>
                <div className={styles.stepIcon}>
                  <i className={step.icon} aria-hidden="true" />
                </div>
                <ul className={styles.stepPoints}>
                  {step.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.summarySection}>
        <div className={styles.summaryInner}>
          <div className={styles.summaryAccent} />
          <span className={styles.summaryEyebrow}>What This Means</span>
          <h2 className={styles.summaryTitle}>
            VikraHub is more than a sign-up page. It is a growing platform where visibility,
            connection, and progress can take shape over time.
          </h2>
          <p className={styles.summaryText}>
            Everything you discover on the public website is the beginning of a practical journey.
            The platform experience is being built to help you learn, collaborate, create, and move
            toward meaningful opportunities with purpose and direction.
          </p>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ready to start your journey?</h2>
          <p className={styles.ctaText}>
            Join VikraHub and start building visibility, connection, and momentum in a growing
            platform rooted in South Sudan.
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
