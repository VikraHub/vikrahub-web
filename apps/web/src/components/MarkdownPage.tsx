import Link from 'next/link';
import MarkdownRenderer from './MarkdownRenderer';
import styles from './MarkdownPage.module.css';

interface MarkdownPageProps {
  markdown: string;
  /** Small uppercase label above the title */
  eyebrow?: string;
  /** Override the page title instead of using the markdown h1 */
  title?: string;
  /** Short intro paragraph displayed below the title */
  intro?: string;
  /** Show a bottom CTA block linking to the app */
  showBottomCta?: boolean;
  children?: React.ReactNode;
}

/**
 * Extract the first h1 from the markdown and return the remaining content.
 * If no h1 is found, returns the full content with an empty title.
 */
function extractTitle(markdown: string): { title: string; body: string } {
  const match = markdown.match(/^#\s+(.+)$/m);
  if (!match) return { title: '', body: markdown };

  const title = match[1].trim();
  const body = markdown.replace(match[0], '').replace(/^\n+/, '');
  return { title, body };
}

export default function MarkdownPage({
  markdown,
  eyebrow,
  title,
  intro,
  showBottomCta = true,
  children,
}: MarkdownPageProps) {
  const extracted = extractTitle(markdown);
  const pageTitle = title || extracted.title;
  const bodyMarkdown = title ? markdown : extracted.body;

  return (
    <div className={styles.container}>
      {/* Hero region */}
      {pageTitle && (
        <header className={styles.hero}>
          <div className={styles.heroInner}>
            {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
            <h1 className={styles.title}>{pageTitle}</h1>
            {intro && <p className={styles.intro}>{intro}</p>}
          </div>
        </header>
      )}

      <main className={styles.main}>
        {children}
        <MarkdownRenderer content={bodyMarkdown} />
      </main>

      {showBottomCta && (
        <section className={styles.bottomCta}>
          <div className={styles.bottomCtaInner}>
            <h2 className={styles.bottomCtaTitle}>
              Ready to join VikraHub?
            </h2>
            <p className={styles.bottomCtaBody}>
              Be part of a platform where creativity, innovation, and youth
              potential come together to create opportunity and impact.
            </p>
            <div className={styles.ctaGroup}>
              <Link
                href="https://app.vikrahub.com?auth=signup"
                className={styles.btnPrimary}
              >
                Join VikraHub
              </Link>
              <Link
                href="https://app.vikrahub.com"
                className={styles.btnSecondary}
              >
                Open App
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
