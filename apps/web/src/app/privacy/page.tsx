import { Metadata } from 'next';
import { promises as fs } from 'fs';
import path from 'path';
import MarkdownPage from '@/components/MarkdownPage';

export const metadata: Metadata = {
  title: 'Privacy Policy • VikraHub',
  description: 'Learn how VikraHub collects, uses, and protects your information. Your privacy matters.',
  alternates: {
    canonical: 'https://vikrahub.com/privacy',
  },
};

async function getMarkdownContent() {
  const filePath = path.join(process.cwd(), 'content', 'pages', '📄 Privacy Policy.md');
  try {
    const content = await fs.readFile(filePath, 'utf8');
    return content;
  } catch (error) {
    console.error('Failed to read Privacy Policy markdown file:', error);
    throw new Error('Privacy Policy content not found. Build failed.');
  }
}

export default async function PrivacyPage() {
  const markdown = await getMarkdownContent();

  return <MarkdownPage markdown={markdown} />;
}
