/** @type {import('next').NextConfig} */
const nextConfig = {
  // Redirects for domain architecture
  async redirects() {
    return [
      // Redirect /app to app.vikrahub.com
      {
        source: '/app/:path*',
        destination: 'https://app.vikrahub.com/:path*',
        permanent: false,
      },
    ];
  },

  // Proxy /api/* requests to the backend
  async rewrites() {
    const backendUrl = process.env.INTERNAL_API_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
    return [
      {
        source: '/api/:path*',
        destination: `${backendUrl}/api/:path*`,
      },
    ];
  },

  // Image optimization
  images: {
    domains: ['res.cloudinary.com', 'vikrahub.com', 'ui-avatars.com', 'localhost'],
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
  },
}

module.exports = nextConfig
