import { Metadata } from 'next';
import MarkdownRenderer from './MarkdownRenderer';
import styles from './MarkdownPage.module.css';

interface MarkdownPageProps {
  markdown: string;
  children?: React.ReactNode;
}

export default function MarkdownPage({ markdown, children }: MarkdownPageProps) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {children}
        <MarkdownRenderer content={markdown} />
      </main>
    </div>
  );
}
