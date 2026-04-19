import { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import './globals.css';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
  variable: '--font-raleway',
});

export const metadata: Metadata = {
  title: 'VikraHub — Create. Innovate. Connect. Inspire.',
  description:
    'A platform where creativity, innovation, and youth potential are transformed into opportunity and impact.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={raleway.variable}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
