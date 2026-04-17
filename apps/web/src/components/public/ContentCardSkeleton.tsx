/**
 * ContentCardSkeleton - Loading skeleton for PublicContentCard
 *
 * Displays during SSR navigation and data loading
 * Uses CSS animations for smooth pulse effect
 *
 * @component
 * @example
 * <ContentCardSkeleton variant="featured" />
 */

interface ContentCardSkeletonProps {
  variant?: 'featured' | 'standard';
}

export default function ContentCardSkeleton({
  variant = 'standard'
}: ContentCardSkeletonProps) {
  const isFeatured = variant === 'featured';
  const cardPadding = isFeatured ? '16px' : '20px';
  const imageHeight = isFeatured ? '160px' : '200px';

  return (
    <div
      className="vh-content-card"
      style={{
        height: '100%',
        pointerEvents: 'none',
      }}
    >
      {/* Cover Image Skeleton */}
      <div
        className="vh-skeleton"
        style={{
          width: '100%',
          height: imageHeight,
          borderRadius: 'var(--vh-radius-lg) var(--vh-radius-lg) 0 0',
          backgroundColor: 'var(--vh-surface-1)',
        }}
      />

      {/* Card Content Skeleton */}
      <div style={{ padding: cardPadding }}>
        {/* Badge Skeleton */}
        <div
          className="vh-skeleton"
          style={{
            width: '60px',
            height: '22px',
            borderRadius: '20px',
            marginBottom: 'var(--vh-spacing-sm)',
          }}
        />

        {/* Title Skeleton - 2 lines */}
        <div style={{ marginBottom: 'var(--vh-spacing-sm)' }}>
          <div
            className="vh-skeleton"
            style={{
              width: '100%',
              height: isFeatured ? '16px' : '18px',
              borderRadius: '4px',
              marginBottom: '8px',
            }}
          />
          <div
            className="vh-skeleton"
            style={{
              width: '75%',
              height: isFeatured ? '16px' : '18px',
              borderRadius: '4px',
            }}
          />
        </div>

        {/* Excerpt Skeleton - 3 lines */}
        <div style={{ marginBottom: 'var(--vh-spacing-md)' }}>
          <div
            className="vh-skeleton"
            style={{
              width: '100%',
              height: '14px',
              borderRadius: '4px',
              marginBottom: '6px',
            }}
          />
          <div
            className="vh-skeleton"
            style={{
              width: '100%',
              height: '14px',
              borderRadius: '4px',
              marginBottom: '6px',
            }}
          />
          <div
            className="vh-skeleton"
            style={{
              width: '60%',
              height: '14px',
              borderRadius: '4px',
            }}
          />
        </div>

        {/* Footer Skeleton */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 'var(--vh-spacing-md)',
          borderTop: '1px solid var(--vh-border)',
          gap: '12px',
        }}>
          {/* Creator Skeleton */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              className="vh-skeleton"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
              }}
            />
            <div>
              <div
                className="vh-skeleton"
                style={{
                  width: '80px',
                  height: '13px',
                  borderRadius: '4px',
                  marginBottom: '4px',
                }}
              />
              <div
                className="vh-skeleton"
                style={{
                  width: '60px',
                  height: '11px',
                  borderRadius: '4px',
                }}
              />
            </div>
          </div>

          {/* Stats Skeleton */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <div
              className="vh-skeleton"
              style={{
                width: '36px',
                height: '14px',
                borderRadius: '4px',
              }}
            />
            <div
              className="vh-skeleton"
              style={{
                width: '36px',
                height: '14px',
                borderRadius: '4px',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
