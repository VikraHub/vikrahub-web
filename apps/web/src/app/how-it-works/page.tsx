import { Metadata } from 'next';
import { promises as fs } from 'fs';
import path from 'path';
import MarkdownPage from '@/components/MarkdownPage';

export const metadata: Metadata = {
  title: 'How It Works • VikraHub',
  description:
    'Learn how VikraHub works — discover the platform, join the community, connect with people and ideas, and explore opportunities for growth and impact.',
  alternates: {
    canonical: 'https://vikrahub.com/how-it-works',
  },
};

async function getMarkdownContent() {
  const filePath = path.join(
    process.cwd(),
    'content',
    'pages',
    '📄 How It Works.md',
  );
  try {
    const content = await fs.readFile(filePath, 'utf8');
    return content;
  } catch (error) {
    console.error('Failed to read How It Works markdown file:', error);
    throw new Error('How It Works page content not found. Build failed.');
  }
}

export default async function HowItWorksPage() {
  const markdown = await getMarkdownContent();

  return <MarkdownPage markdown={markdown} />;
}
