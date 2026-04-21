import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'VikraHub',
    short_name: 'VikraHub',
    description:
      'A growing platform in South Sudan supporting creativity, innovation, and youth potential.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#184a8b',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
  };
}