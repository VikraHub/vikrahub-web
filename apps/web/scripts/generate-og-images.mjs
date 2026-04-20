/**
 * Generate static OG images for VikraHub.
 *
 * Uses satori (JSX → SVG) + @resvg/resvg-js (SVG → PNG),
 * the same pipeline that next/og uses internally.
 *
 * Usage:
 *   node scripts/generate-og-images.mjs
 *
 * Outputs:
 *   public/og-default.png   (1200×630)
 *   public/twitter-default.png (1200×600)
 */

import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

// ── Fetch fonts ──────────────────────────────────────────────
async function loadFonts() {
  // Use static (non-variable) font files from Google Fonts CSS API
  const [ralewayBold, figtreeMedium] = await Promise.all([
    fetch(
      'https://fonts.gstatic.com/s/raleway/v37/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVs9pYCP.ttf',
    ).then((r) => r.arrayBuffer()),
    fetch(
      'https://fonts.gstatic.com/s/figtree/v9/_Xmz-HUzqDCFdgfMsYiV_F7wfS-Bs_dNQF5e.ttf',
    ).then((r) => r.arrayBuffer()),
  ]);
  return { ralewayBold, figtreeMedium };
}

// ── Shared branded card markup ───────────────────────────────
function brandedCard(height) {
  // Scale factors based on height (630 = OG, 600 = Twitter)
  const isOG = height === 630;
  const taglineSize = isOG ? 48 : 44;
  const descSize = isOG ? 22 : 20;
  const brandSize = isOG ? 36 : 32;
  const logoSize = isOG ? 48 : 44;
  const logoFontSize = isOG ? 24 : 22;
  const padding = isOG ? '60px 80px' : '50px 70px';

  return {
    type: 'div',
    props: {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000223',
        padding,
        position: 'relative',
      },
      children: [
        // Top accent bar
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '6px',
              backgroundColor: '#ffa000',
            },
          },
        },
        // Brand row
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '32px',
            },
            children: [
              // V circle
              {
                type: 'div',
                props: {
                  style: {
                    width: `${logoSize}px`,
                    height: `${logoSize}px`,
                    borderRadius: '50%',
                    backgroundColor: '#ffa000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: `${logoFontSize}px`,
                    fontWeight: 700,
                    color: '#000223',
                    fontFamily: 'Raleway',
                  },
                  children: 'V',
                },
              },
              // Brand name
              {
                type: 'span',
                props: {
                  style: {
                    fontFamily: 'Raleway',
                    fontSize: `${brandSize}px`,
                    fontWeight: 700,
                    color: '#ffffff',
                    letterSpacing: '-0.02em',
                  },
                  children: 'VikraHub',
                },
              },
            ],
          },
        },
        // Tagline
        {
          type: 'div',
          props: {
            style: {
              fontFamily: 'Raleway',
              fontSize: `${taglineSize}px`,
              fontWeight: 700,
              color: '#ffffff',
              textAlign: 'center',
              lineHeight: 1.2,
              marginBottom: '24px',
              maxWidth: '900px',
            },
            children: 'Create. Innovate. Connect. Inspire.',
          },
        },
        // Description
        {
          type: 'div',
          props: {
            style: {
              fontFamily: 'Figtree',
              fontSize: `${descSize}px`,
              color: 'rgba(255, 255, 255, 0.7)',
              textAlign: 'center',
              lineHeight: 1.6,
              maxWidth: '750px',
            },
            children:
              'A platform where creativity, innovation, and youth potential are transformed into opportunity and impact.',
          },
        },
        // Bottom domain
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              bottom: '40px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            },
            children: {
              type: 'span',
              props: {
                style: {
                  fontFamily: 'Figtree',
                  fontSize: '16px',
                  color: '#ffa000',
                  fontWeight: 500,
                },
                children: 'vikrahub.com',
              },
            },
          },
        },
      ],
    },
  };
}

// ── Render to PNG ────────────────────────────────────────────
async function renderPng(markup, width, height, fonts) {
  const svg = await satori(markup, {
    width,
    height,
    fonts,
  });

  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: width },
  });
  return resvg.render().asPng();
}

// ── Main ─────────────────────────────────────────────────────
async function main() {
  console.log('Fetching fonts…');
  const { ralewayBold, figtreeMedium } = await loadFonts();

  const fonts = [
    { name: 'Raleway', data: ralewayBold, weight: 700, style: 'normal' },
    { name: 'Figtree', data: figtreeMedium, weight: 500, style: 'normal' },
  ];

  mkdirSync(publicDir, { recursive: true });

  // OG image (1200 × 630)
  console.log('Generating og-default.png (1200×630)…');
  const ogPng = await renderPng(brandedCard(630), 1200, 630, fonts);
  writeFileSync(join(publicDir, 'og-default.png'), ogPng);
  console.log(`  ✓ ${ogPng.length} bytes`);

  // Twitter image (1200 × 600)
  console.log('Generating twitter-default.png (1200×600)…');
  const twPng = await renderPng(brandedCard(600), 1200, 600, fonts);
  writeFileSync(join(publicDir, 'twitter-default.png'), twPng);
  console.log(`  ✓ ${twPng.length} bytes`);

  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
