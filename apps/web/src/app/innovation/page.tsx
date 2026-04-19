import { Metadata } from 'next';
import { promises as fs } from 'fs';
import path from 'path';
import MarkdownPage from '@/components/MarkdownPage';

export const metadata: Metadata = {
  title: 'Innovation • VikraHub',
  description:
    'Explore how VikraHub supports innovation, technology, experimentation, and youth-led problem solving.',
  alternates: {
    canonical: 'https://vikrahub.com/innovation',
  },
};

async function getMarkdownContent() {
  const filePath = path.join(process.cwd(), 'content', 'pages', 'Innovation.md');
  try {
    const content = await fs.readFile(filePath, 'utf8');
    return content;
  } catch (error) {
    console.error('Failed to read Innovation markdown file:', error);
    throw new Error('Innovation page content not found. Build failed.');
  }
}

export default async function InnovationPage() {
  const markdown = await getMarkdownContent();

  return (
    <MarkdownPage
      markdown={markdown}
      eyebrow="Ideas & Impact"
      intro="A space for bold thinking, digital experimentation, and youth-led solutions that create lasting change."
    />
  );
}
