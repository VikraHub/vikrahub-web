import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Post Not Found - VikraHub',
  description: 'The post you are looking for does not exist or is not available.',
};

export default function NotFound() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'var(--vh-bg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    }}>
      <div style={{
        maxWidth: '600px',
        textAlign: 'center',
        background: 'var(--vh-surface-2)',
        border: '1px solid var(--vh-border)',
        borderRadius: 'var(--vh-radius-xl)',
        padding: 'clamp(40px, 8vw, 64px)',
      }}>
        {/* Icon */}
        <div style={{
          fontSize: '64px',
          marginBottom: '24px',
          opacity: 0.5,
        }}>
          📋
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: 'clamp(24px, 5vw, 32px)',
          fontWeight: 700,
          color: 'var(--vh-text)',
          marginBottom: '16px',
          fontFamily: 'var(--vh-font-display)',
        }}>
          Post Not Found
        </h1>

        {/* Description */}
        <p style={{
          fontSize: '16px',
          color: 'var(--vh-text-muted)',
          lineHeight: 1.6,
          marginBottom: '32px',
        }}>
          This post may be private, unpublished, or does not exist.
        </p>

        {/* Actions */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          alignItems: 'center',
        }}>
          <Link
            href="/"
            style={{
              display: 'inline-block',
              padding: '16px 32px',
              background: 'linear-gradient(135deg, #ffa000 0%, #ffb020 100%)',
              color: '#000223',
              textDecoration: 'none',
              borderRadius: 'var(--vh-radius-md)',
              fontWeight: 700,
              fontSize: '16px',
              minWidth: '200px',
              boxShadow: '0 4px 16px rgba(255, 160, 0, 0.3)',
              transition: 'all 0.3s ease',
            }}
          >
            Discover Content
          </Link>

          <Link
            href="https://app.vikrahub.com"
            style={{
              display: 'inline-block',
              padding: '14px 28px',
              background: 'transparent',
              color: 'var(--vh-accent)',
              textDecoration: 'none',
              border: '2px solid rgba(255, 160, 0, 0.5)',
              borderRadius: 'var(--vh-radius-md)',
              fontWeight: 600,
              fontSize: '15px',
              minWidth: '200px',
              transition: 'all 0.3s ease',
            }}
          >
            Go to VikraHub App
          </Link>
        </div>
      </div>
    </main>
  );
}
