import { Metadata } from 'next';
import { promises as fs } from 'fs';
import path from 'path';
import MarkdownPage from '@/components/MarkdownPage';

export const metadata: Metadata = {
  title: 'Vision, Mission & Values • VikraHub',
  description:
    'The vision, mission, objectives, and core values that guide VikraHub — a platform where creativity, innovation, and youth potential are transformed into opportunity and impact.',
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
