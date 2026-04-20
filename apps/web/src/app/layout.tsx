import { Metadata } from 'next';
import { Raleway, Figtree } from 'next/font/google';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import './globals.css';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
  variable: '--font-raleway',
});

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-figtree',
});

export const metadata: Metadata = {
  title: 'VikraHub — Create. Innovate. Connect. Inspire.',
  description:
    'A platform where creativity, innovation, and youth potential are transformed into opportunity and impact.',
  icons: {
    icon: '/favicon.svg',
  },
  alternates: {
    canonical: 'https://vikrahub.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${raleway.variable} ${figtree.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>
        <a href="#main-content" className="vh-skip-link">Skip to main content</a>
        <SiteHeader />
        <div id="main-content" />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
