import { Metadata } from 'next';
import { promises as fs } from 'fs';
import path from 'path';
import MarkdownPage from '@/components/MarkdownPage';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'By using VikraHub, you agree to these terms. Learn about platform rules, content ownership, and community standards.',
  alternates: {
    canonical: 'https://vikrahub.com/terms',
  },
  openGraph: {
    type: 'website',
    title: 'Terms of Service',
    description:
      'Platform rules, content ownership, and community standards for VikraHub.',
    url: 'https://vikrahub.com/terms',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service',
    description:
      'Platform rules, content ownership, and community standards for VikraHub.',
    images: ['https://vikrahub.com/twitter-default.png'],
  },
};

async function getMarkdownContent() {
  const filePath = path.join(process.cwd(), 'content', 'pages', '📄 Terms of Service.md');
  try {
    const content = await fs.readFile(filePath, 'utf8');
    return content;
  } catch (error) {
    console.error('Failed to read Terms of Service markdown file:', error);
    throw new Error('Terms of Service content not found. Build failed.');
  }
}

export default async function TermsPage() {
  const markdown = await getMarkdownContent();

  return <MarkdownPage markdown={markdown} showBottomCta={false} />;
}
