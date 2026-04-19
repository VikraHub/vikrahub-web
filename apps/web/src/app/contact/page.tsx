import { Metadata } from 'next';
import { promises as fs } from 'fs';
import path from 'path';
import MarkdownPage from '@/components/MarkdownPage';

export const metadata: Metadata = {
  title: 'Contact • VikraHub',
  description: 'Get in touch with VikraHub for collaboration, partnerships, community engagement, and general inquiries.',
  alternates: {
    canonical: 'https://vikrahub.com/contact',
  },
};

async function getMarkdownContent() {
  const filePath = path.join(process.cwd(), 'content', 'pages', 'Contact.md');
  try {
    const content = await fs.readFile(filePath, 'utf8');
    return content;
  } catch (error) {
    console.error('Failed to read Contact markdown file:', error);
    throw new Error('Contact page content not found. Build failed.');
  }
}

export default async function ContactPage() {
  const markdown = await getMarkdownContent();

  return (
    <MarkdownPage
      markdown={markdown}
      eyebrow="Get in Touch"
      intro="We would love to hear from you — whether it is about collaboration, partnerships, or just saying hello."
    />
  );
}
