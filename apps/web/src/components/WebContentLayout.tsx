/**
 * WebContentLayout Component - VikraHub Brand Edition
 *
 * UX Purpose: Public content landing page for social traffic
 * - Shows value first (content preview)
 * - Soft CTA to continue (no forced redirect)
 * - Fast, clean, readable
 * - Mobile-first responsive
 * - VikraHub dark theme with orange accents
 *
 * Philosophy: Progressive disclosure > forced walls
 * Let users discover, then invite them to engage deeper
 */

import Link from 'next/link';
import Image from 'next/image';
import { ContentData } from './types';

interface WebContentLayoutProps {
  content: ContentData;
  continueUrl: string;
  contentType: 'post' | 'blog' | 'portfolio';
}

export function WebContentLayout({ content, continueUrl, contentType }: WebContentLayoutProps) {
  // Content type labels for display
  const typeLabels = {
    post: 'POST',
    blog: 'ARTICLE',
    portfolio: 'PROJECT',
  };

  // CTA text based on content type
  const ctaText = {
    post: 'Continue reading on VikraHub →',
    blog: 'Continue reading on VikraHub →',
    portfolio: 'View project on VikraHub →',
  };

  // Get creator avatar
  const creatorAvatar = content.author.avatar_url ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(content.author.display_name || content.author.username)}&background=ffa000&color=000223`;

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      <style dangerouslySetInnerHTML={{__html: `
        body {
          background: #000223;
          margin: 0;
          padding: 0;
        }

        .web-content-page {
          min-height: 100vh;
          background: #000223;
          color: #fffafe;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
        }

        .content-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 80px 24px 60px;
        }

        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 250, 254, 0.7);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 32px;
          padding: 8px 16px;
          border-radius: 6px;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .back-button:hover {
          color: #ffa000;
          background: rgba(255, 160, 0, 0.08);
          border-color: rgba(255, 160, 0, 0.2);
        }

        .content-header {
          margin-bottom: 32px;
        }

        .content-type {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          color: #ffa000;
          background: rgba(255, 160, 0, 0.12);
          padding: 6px 14px;
          border-radius: 20px;
          margin-bottom: 20px;
          border: 1px solid rgba(255, 160, 0, 0.25);
        }

        .content-title {
          font-size: 40px;
          font-weight: 800;
          line-height: 1.3;
          margin: 0 0 28px 0;
          color: #fffafe;
          letter-spacing: -0.5px;
        }

        .author-section {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 24px;
          background: rgba(255, 250, 254, 0.04);
          border: 1px solid rgba(255, 160, 0, 0.15);
          border-radius: 12px;
          margin-bottom: 32px;
        }

        .author-avatar-img {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 2px solid rgba(255, 160, 0, 0.3);
          object-fit: cover;
        }

        .author-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .author-name {
          font-weight: 600;
          color: #fffafe;
          font-size: 16px;
        }

        .content-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 13px;
          color: rgba(255, 250, 254, 0.6);
        }

        .meta-separator {
          color: rgba(255, 160, 0, 0.4);
        }

        .engagement-stats {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: rgba(255, 250, 254, 0.7);
          padding: 6px 12px;
          background: rgba(255, 160, 0, 0.08);
          border-radius: 6px;
          border: 1px solid rgba(255, 160, 0, 0.15);
        }

        .stat-icon {
          font-size: 14px;
        }

        .cover-image-wrapper {
          margin-bottom: 40px;
          border-radius: 16px;
          overflow: hidden;
          border: 2px solid rgba(255, 160, 0, 0.2);
          box-shadow: 0 8px 32px rgba(255, 160, 0, 0.15);
        }

        .cover-image {
          width: 100%;
          height: auto;
          display: block;
          max-height: 500px;
          object-fit: cover;
        }

        .content-body {
          background: rgba(255, 250, 254, 0.03);
          border: 1px solid rgba(255, 160, 0, 0.12);
          border-radius: 16px;
          padding: 32px;
          margin-bottom: 32px;
        }

        .content-excerpt {
          font-size: 17px;
          line-height: 1.8;
          color: rgba(255, 250, 254, 0.85);
          margin: 0;
        }

        .content-excerpt p {
          margin-bottom: 16px;
        }

        .cta-section {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 32px;
          background: rgba(255, 160, 0, 0.05);
          border: 2px solid rgba(255, 160, 0, 0.25);
          border-radius: 16px;
          margin-bottom: 32px;
          box-shadow: 0 8px 24px rgba(255, 160, 0, 0.1);
        }

        .cta-message {
          text-align: center;
          color: rgba(255, 250, 254, 0.8);
          font-size: 15px;
          margin-bottom: 8px;
        }

        .cta-primary {
          display: inline-block;
          padding: 16px 32px;
          background: #ffa000;
          color: #000223;
          text-decoration: none;
          border-radius: 10px;
          font-weight: 700;
          font-size: 16px;
          text-align: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(255, 160, 0, 0.3);
          border: none;
        }

        .cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255, 160, 0, 0.4);
          background: #ffb020;
        }

        .cta-secondary {
          display: inline-block;
          padding: 14px 28px;
          background: transparent;
          color: #ffa000;
          text-decoration: none;
          border: 1.5px solid rgba(255, 160, 0, 0.5);
          border-radius: 10px;
          font-weight: 600;
          font-size: 15px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .cta-secondary:hover {
          background: rgba(255, 160, 0, 0.12);
          border-color: #ffa000;
          transform: translateY(-1px);
        }

        .vikrahub-badge {
          text-align: center;
          padding: 32px 20px;
          color: rgba(255, 250, 254, 0.5);
          font-size: 14px;
          border-top: 1px solid rgba(255, 160, 0, 0.1);
        }

        .vikrahub-logo {
          font-weight: 800;
          color: #ffa000;
          letter-spacing: 0.5px;
        }

        .badge-tagline {
          margin-top: 8px;
          font-size: 13px;
          color: rgba(255, 250, 254, 0.4);
        }

        @media (max-width: 768px) {
          .content-container {
            padding: 72px 16px 40px;
          }

          .content-title {
            font-size: 28px;
          }

          .author-section {
            padding: 16px;
          }

          .content-body {
            padding: 24px 20px;
          }

          .cta-section {
            padding: 24px 20px;
          }

          .engagement-stats {
            flex-wrap: wrap;
            gap: 12px;
          }
        }

        @media (max-width: 640px) {
          .content-title {
            font-size: 24px;
          }

          .cta-primary,
          .cta-secondary {
            padding: 14px 24px;
            font-size: 14px;
          }

          .content-excerpt {
            font-size: 16px;
          }

          .back-button {
            font-size: 13px;
          }
        }
      `}} />

      <div className="web-content-page">
        <div className="content-container">
          {/* Back button */}
          <Link href="/" className="back-button">
            <i className="fas fa-arrow-left"></i>
            <span>Back to Home</span>
          </Link>

          {/* Header with type and title */}
          <header className="content-header">
            <div className="content-type">{typeLabels[contentType]}</div>
            <h1 className="content-title">{content.title || 'Untitled'}</h1>
          </header>

          {/* Author section with engagement stats */}
          <div className="author-section">
            <Image
              src={creatorAvatar}
              alt={content.author.display_name || content.author.username}
              width={48}
              height={48}
              className="author-avatar-img"
            />
            <div className="author-info">
              <span className="author-name">
                {content.author.display_name || content.author.username}
              </span>
              <div className="content-meta">
                <time dateTime={content.createdAt}>
                  {new Date(content.createdAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
                {content.counts && content.counts.views != null && content.counts.views > 0 && (
                  <>
                    <span className="meta-separator">•</span>
                    <span>{content.counts.views.toLocaleString()} views</span>
                  </>
                )}
              </div>
            </div>
            {content.counts && (
              <div className="engagement-stats">
                {content.counts.likes != null && content.counts.likes > 0 && (
                  <div className="stat-item">
                    <i className="fas fa-heart stat-icon"></i>
                    <span>{content.counts.likes.toLocaleString()}</span>
                  </div>
                )}
                {content.counts.comments != null && content.counts.comments > 0 && (
                  <div className="stat-item">
                    <i className="fas fa-comment stat-icon"></i>
                    <span>{content.counts.comments}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Cover image if available */}
          {content.media && content.media.length > 0 && content.media[0].type === 'image' && (
            <div className="cover-image-wrapper">
              <Image
                src={content.media[0].url}
                alt={content.title || 'Cover image'}
                width={900}
                height={500}
                className="cover-image"
                priority
              />
            </div>
          )}

          {/* Content body */}
          <div className="content-body">
            <div
              className="content-excerpt"
              dangerouslySetInnerHTML={{
                __html: content.content || content.summary || 'No content available.'
              }}
            />
          </div>

          {/* Call to Action Section */}
          <div className="cta-section">
            <p className="cta-message">
              Want to engage with this content? Join the conversation on VikraHub
            </p>
            <Link
              href={continueUrl}
              className="cta-primary"
            >
              {ctaText[contentType]}
            </Link>
            <Link href="/" className="cta-secondary">
              Explore more content
            </Link>
          </div>

          {/* VikraHub badge */}
          <div className="vikrahub-badge">
            <div>
              Shared from <span className="vikrahub-logo">VikraHub</span>
            </div>
            <div className="badge-tagline">
              Platform for creatives to connect, share, and grow
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
