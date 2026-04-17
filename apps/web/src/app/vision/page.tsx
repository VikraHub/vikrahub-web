import { Metadata } from 'next';
import { promises as fs } from 'fs';
import path from 'path';
import MarkdownPage from '@/components/MarkdownPage';

export const metadata: Metadata = {
  title: 'Vision, Mission & Values • VikraHub',
  description:
    'What VikraHub stands for. Our vision, mission, and the core values that guide how we build a platform for creatives.',
  alternates: {
    canonical: 'https://vikrahub.com/vision',
  },
};

async function getMarkdownContent() {
  const filePath = path.join(
    process.cwd(),
    'content',
    'pages',
    '📄 Vision Mission Values.md',
  );
  try {
    const content = await fs.readFile(filePath, 'utf8');
    return content;
  } catch (error) {
    console.error('Failed to read Vision markdown file:', error);
    throw new Error('Vision page content not found. Build failed.');
  }
}

export default async function VisionPage() {
  const markdown = await getMarkdownContent();

  return <MarkdownPage markdown={markdown} />;
}
