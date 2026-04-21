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

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const bingSiteVerification = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL('https://vikrahub.com'),
  title: {
    default: 'VikraHub — Create. Innovate. Connect. Inspire.',
    template: '%s • VikraHub',
  },
  description:
    'VikraHub is a growing platform in South Sudan supporting creativity, innovation, and youth potential through visibility, collaboration, digital growth, and meaningful opportunity.',
  icons: {
    icon: '/favicon.svg',
  },
  manifest: '/manifest.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    google: googleSiteVerification,
    ...(bingSiteVerification
      ? {
          other: {
            'msvalidate.01': bingSiteVerification,
          },
        }
      : {}),
  },
  alternates: {
    canonical: 'https://vikrahub.com',
  },
  openGraph: {
    type: 'website',
    siteName: 'VikraHub',
    title: 'VikraHub — Create. Innovate. Connect. Inspire.',
    description:
      'VikraHub is a growing platform in South Sudan supporting creativity, innovation, and youth potential through visibility, collaboration, digital growth, and meaningful opportunity.',
    url: 'https://vikrahub.com',
    locale: 'en_US',
    images: [
      {
        url: 'https://vikrahub.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'VikraHub — Create. Innovate. Connect. Inspire.',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VikraHub — Create. Innovate. Connect. Inspire.',
    description:
      'VikraHub is a growing platform in South Sudan supporting creativity, innovation, and youth potential through visibility, collaboration, digital growth, and meaningful opportunity.',
    images: [
      {
        url: 'https://vikrahub.com/twitter-default.png',
        width: 1200,
        height: 600,
        alt: 'VikraHub — Create. Innovate. Connect. Inspire.',
      },
    ],
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://vikrahub.com/#organization',
  name: 'VikraHub',
  url: 'https://vikrahub.com',
  logo: 'https://vikrahub.com/vikrahub-logo.svg',
  description:
    'VikraHub is a growing platform in South Sudan supporting creativity, innovation, and youth potential through visibility, collaboration, digital growth, and meaningful opportunity.',
  areaServed: 'South Sudan',
  sameAs: [
    'https://www.facebook.com/profile.php?id=61578402903635',
    'https://linkedin.com/company/vikrahub',
    'https://instagram.com/vikrahub',
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
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
