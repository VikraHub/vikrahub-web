import { Metadata } from 'next';
import { promises as fs } from 'fs';
import path from 'path';
import MarkdownPage from '@/components/MarkdownPage';

export const metadata: Metadata = {
  title: 'Why VikraHub • VikraHub',
  description:
    'Learn why VikraHub exists and how it helps turn creativity, innovation, and youth potential into opportunity and impact.',
  alternates: {
    canonical: 'https://vikrahub.com/why-vikrahub',
  },
};

async function getMarkdownContent() {
  const filePath = path.join(process.cwd(), 'content', 'pages', 'Why VikraHub.md');
  try {
    const content = await fs.readFile(filePath, 'utf8');
    return content;
  } catch (error) {
    console.error('Failed to read Why VikraHub markdown file:', error);
    throw new Error('Why VikraHub page content not found. Build failed.');
  }
}

export default async function WhyVikraHubPage() {
  const markdown = await getMarkdownContent();

  return <MarkdownPage markdown={markdown} />;
}
