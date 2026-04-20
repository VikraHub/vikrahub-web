import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'VikraHub — Create. Innovate. Connect. Inspire.';
export const size = { width: 1200, height: 600 };
export const contentType = 'image/png';

export default async function Image() {
  const [ralewayBold, figtreeMedium] = await Promise.all([
    fetch(
      'https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyC0ISg.ttf',
    ).then((r) => r.arrayBuffer()),
    fetch(
      'https://fonts.gstatic.com/s/figtree/v6/Flkp9PGOyMkh-IC1tDXq.ttf',
    ).then((r) => r.arrayBuffer()),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000223',
          padding: '50px 80px',
          position: 'relative',
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            backgroundColor: '#ffa000',
          }}
        />

        {/* Brand name */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '28px',
          }}
        >
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: '#ffa000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '22px',
              fontWeight: 700,
              color: '#000223',
              fontFamily: 'Raleway',
            }}
          >
            V
          </div>
          <span
            style={{
              fontFamily: 'Raleway',
              fontSize: '32px',
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '-0.02em',
            }}
          >
            VikraHub
          </span>
        </div>

        {/* Tagline */}
        <h1
          style={{
            fontFamily: 'Raleway',
            fontSize: '44px',
            fontWeight: 700,
            color: '#ffffff',
            textAlign: 'center',
            lineHeight: 1.2,
            margin: '0 0 20px',
            maxWidth: '860px',
          }}
        >
          Create. Innovate. Connect. Inspire.
        </h1>

        {/* Description */}
        <p
          style={{
            fontFamily: 'Figtree',
            fontSize: '20px',
            color: 'rgba(255, 255, 255, 0.7)',
            textAlign: 'center',
            lineHeight: 1.6,
            margin: 0,
            maxWidth: '700px',
          }}
        >
          A platform where creativity, innovation, and youth potential are
          transformed into opportunity and impact.
        </p>

        {/* Bottom domain */}
        <div
          style={{
            position: 'absolute',
            bottom: '36px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span
            style={{
              fontFamily: 'Figtree',
              fontSize: '16px',
              color: '#ffa000',
              fontWeight: 500,
            }}
          >
            vikrahub.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Raleway',
          data: ralewayBold,
          weight: 700,
          style: 'normal',
        },
        {
          name: 'Figtree',
          data: figtreeMedium,
          weight: 500,
          style: 'normal',
        },
      ],
    },
  );
}
