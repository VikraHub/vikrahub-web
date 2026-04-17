export default function Loading() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'var(--vh-bg)',
      paddingBottom: '0',
    }}>
      {/* Navigation Skeleton */}
      <div style={{
        padding: '20px 24px',
        borderBottom: '1px solid var(--vh-border)',
        background: 'rgba(255, 250, 254, 0.02)',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="vh-skeleton" style={{
            width: '120px',
            height: '20px',
            background: 'var(--vh-surface-2)',
            borderRadius: '4px',
          }} />
        </div>
      </div>

      {/* Content Skeleton */}
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '0 clamp(16px, 5vw, 32px) 48px',
      }}>
        {/* Title Skeleton */}
        <div style={{ padding: 'clamp(20px, 5vw, 32px) 0' }}>
          <div className="vh-skeleton" style={{
            width: '80%',
            height: '40px',
            background: 'var(--vh-surface-2)',
            borderRadius: '8px',
            marginBottom: '16px',
          }} />
          <div className="vh-skeleton" style={{
            width: '60%',
            height: '40px',
            background: 'var(--vh-surface-2)',
            borderRadius: '8px',
            marginBottom: '24px',
          }} />

          {/* Author Skeleton */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div className="vh-skeleton" style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'var(--vh-surface-2)',
            }} />
            <div>
              <div className="vh-skeleton" style={{
                width: '120px',
                height: '16px',
                background: 'var(--vh-surface-2)',
                borderRadius: '4px',
                marginBottom: '6px',
              }} />
              <div className="vh-skeleton" style={{
                width: '180px',
                height: '12px',
                background: 'var(--vh-surface-2)',
                borderRadius: '4px',
              }} />
            </div>
          </div>

          {/* Stats Skeleton */}
          <div style={{
            display: 'flex',
            gap: '12px',
            padding: '16px 0',
            borderTop: '1px solid var(--vh-border)',
            borderBottom: '1px solid var(--vh-border)',
            marginBottom: '32px',
          }}>
            <div className="vh-skeleton" style={{
              width: '80px',
              height: '32px',
              background: 'var(--vh-surface-2)',
              borderRadius: '24px',
            }} />
            <div className="vh-skeleton" style={{
              width: '80px',
              height: '32px',
              background: 'var(--vh-surface-2)',
              borderRadius: '24px',
            }} />
          </div>
        </div>

        {/* Image Skeleton */}
        <div className="vh-skeleton" style={{
          width: '100%',
          aspectRatio: '16 / 9',
          maxHeight: '500px',
          background: 'var(--vh-surface-2)',
          borderRadius: 'var(--vh-radius-lg)',
          marginBottom: '32px',
        }} />

        {/* Content Skeleton */}
        <div style={{
          background: 'var(--vh-surface-2)',
          border: '1.5px solid var(--vh-accent-dim)',
          borderRadius: 'var(--vh-radius-xl)',
          padding: 'var(--vh-spacing-xl)',
          marginBottom: '32px',
        }}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="vh-skeleton"
              style={{
                width: i % 3 === 0 ? '70%' : '100%',
                height: '16px',
                background: 'var(--vh-surface-3)',
                borderRadius: '4px',
                marginBottom: '16px',
              }}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
