/**
 * PublicCTABox - Call-to-Action component for public pages
 * Used in: SSR detail pages to encourage sign-up/exploration
 */

import Link from 'next/link';

interface PublicCTABoxProps {
  message?: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export default function PublicCTABox({
  message = "Want to see more? Join VikraHub to discover amazing creators and opportunities.",
  primaryText = "Continue on VikraHub →",
  primaryHref = "https://app.vikrahub.com",
  secondaryText = "Explore more",
  secondaryHref = "/",
}: PublicCTABoxProps) {
  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(255, 160, 0, 0.08) 0%, rgba(255, 160, 0, 0.03) 100%)',
      border: '2px solid rgba(255, 160, 0, 0.3)',
      borderRadius: 'var(--vh-radius-xl)',
      padding: 'clamp(40px, 6vw, 56px)',
      textAlign: 'center',
      marginTop: '64px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative glow */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        right: '-10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(255, 160, 0, 0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Message */}
      <p style={{
        fontSize: 'clamp(18px, 3vw, 22px)',
        fontWeight: 600,
        color: 'var(--vh-text)',
        marginBottom: '28px',
        lineHeight: 1.5,
        maxWidth: '560px',
        margin: '0 auto 28px',
        position: 'relative',
      }}>
        {message}
      </p>

      {/* CTA Buttons */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        position: 'relative',
      }}>
        {/* Primary CTA */}
        <a
          href={primaryHref}
          style={{
            display: 'inline-block',
            padding: '18px 40px',
            background: 'linear-gradient(135deg, #ffa000 0%, #ffb020 100%)',
            color: '#000223',
            textDecoration: 'none',
            borderRadius: 'var(--vh-radius-md)',
            fontWeight: 700,
            fontSize: '17px',
            minWidth: '260px',
            maxWidth: '400px',
            width: '100%',
            boxShadow: '0 6px 20px rgba(255, 160, 0, 0.4)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            border: 'none',
            cursor: 'pointer',
          }}
          className="vh-cta-primary"
        >
          {primaryText}
        </a>

        {/* Secondary CTA */}
        <Link
          href={secondaryHref}
          style={{
            display: 'inline-block',
            padding: '16px 32px',
            background: 'transparent',
            color: 'var(--vh-accent)',
            textDecoration: 'none',
            border: '2px solid rgba(255, 160, 0, 0.5)',
            borderRadius: 'var(--vh-radius-md)',
            fontWeight: 600,
            fontSize: '16px',
            minWidth: '200px',
            maxWidth: '400px',
            width: '100%',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
          }}
          className="vh-cta-secondary"
        >
          {secondaryText}
        </Link>
      </div>
    </div>
  );
}
