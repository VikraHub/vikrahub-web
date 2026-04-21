import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'How It Works',
  description:
    'Learn how VikraHub works — discover the platform, join the community, connect with people and ideas, and explore opportunities for growth and impact.',
  alternates: {
    canonical: 'https://vikrahub.com/how-it-works',
  },
  openGraph: {
    title: 'How It Works',
    description:
      'Discover the platform, join the community, and explore opportunities for growth and impact.',
    url: 'https://vikrahub.com/how-it-works',
  },
  twitter: {
    title: 'How It Works',
    description:
      'Discover the platform, join the community, and explore opportunities for growth and impact.',
  },
};

const journeySteps = [
  {
    id: 'discover',
    eyebrow: 'Step 1',
    title: 'Discover VikraHub',
    icon: 'fa-solid fa-compass',
    body: 'Explore what VikraHub is all about. The public website helps you understand the mission, see real work, and discover the people and ideas shaping the ecosystem.',
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
    body: 'Joining is your entry into the VikraHub ecosystem. Whether you are an artist, developer, student, innovator, or youth leader, your profile gives your work a credible home.',
    points: [
      'Sign up and present who you are with clarity.',
      'Create visibility for your interests, skills, and direction.',
      'Enter a platform built to support growth, not noise.',
    ],
    tone: 'dark',
  },
  {
    id: 'connect',
    eyebrow: 'Step 3',
    title: 'Connect with people and ideas',
    icon: 'fa-solid fa-people-group',
    body: 'VikraHub is built around meaningful community. Share your work, exchange feedback, collaborate on projects, and build relationships that strengthen your journey.',
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
    body: 'As you engage, VikraHub helps connect talent to pathways that matter: mentorship, training, partnerships, internships, grants, and digital growth opportunities.',
    points: [
      'Access practical pathways for advancement.',
      'Explore innovation through experimentation and tools.',
      'Move from potential toward real outcomes.',
    ],
    tone: 'dark',
  },
  {
    id: 'grow',
    eyebrow: 'Step 5',
    title: 'Grow with purpose',
    icon: 'fa-solid fa-arrow-up-right-dots',
    body: 'VikraHub is designed for long-term development. Over time, your visibility, network, and opportunities compound into stronger capability and deeper impact.',
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
            VikraHub helps young people move forward through a clear path: discover the platform,
            join the ecosystem, connect with people and ideas, explore innovation and opportunity,
            and keep growing with purpose.
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
            VikraHub is not just a place to sign up. It is a long-term platform for visibility,
            growth, and meaningful progress.
          </h2>
          <p className={styles.summaryText}>
            Everything you discover on the public website is the beginning of a bigger journey. The
            platform experience is designed to help you learn, collaborate, create, and access
            opportunities with purpose and direction.
          </p>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ready to start your journey?</h2>
          <p className={styles.ctaText}>
            Join VikraHub and move from hidden potential to visible, connected, and opportunity-ready
            growth.
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
