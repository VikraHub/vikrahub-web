import { Metadata } from 'next';
import { promises as fs } from 'fs';
import path from 'path';
import MarkdownPage from '@/components/MarkdownPage';

export const metadata: Metadata = {
  title: 'About • VikraHub',
  description: 'VikraHub is a platform where creativity, innovation, and youth potential are transformed into opportunity and impact. Learn our story, mission, and what we stand for.',
  alternates: {
    canonical: 'https://vikrahub.com/about',
  },
};

async function getMarkdownContent() {
  const filePath = path.join(process.cwd(), 'content', 'pages', '📄 About VikraHub.md');
  try {
    const content = await fs.readFile(filePath, 'utf8');
    return content;
  } catch (error) {
    console.error('Failed to read About markdown file:', error);
    throw new Error('About page content not found. Build failed.');
  }
}

export default async function AboutPage() {
  const markdown = await getMarkdownContent();

  return <MarkdownPage markdown={markdown} />;
}
