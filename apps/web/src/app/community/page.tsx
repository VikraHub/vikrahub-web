import { Metadata } from 'next';
import { promises as fs } from 'fs';
import path from 'path';
import MarkdownPage from '@/components/MarkdownPage';

export const metadata: Metadata = {
  title: 'Community • VikraHub',
  description:
    'Explore the VikraHub community and how collaboration, belonging, and shared growth help young people move forward together.',
  alternates: {
    canonical: 'https://vikrahub.com/community',
  },
};

async function getMarkdownContent() {
  const filePath = path.join(process.cwd(), 'content', 'pages', 'Community.md');
  try {
    const content = await fs.readFile(filePath, 'utf8');
    return content;
  } catch (error) {
    console.error('Failed to read Community markdown file:', error);
    throw new Error('Community page content not found. Build failed.');
  }
}

export default async function CommunityPage() {
  const markdown = await getMarkdownContent();

  return <MarkdownPage markdown={markdown} />;
}
