/**
 * Generates every logo asset the site needs from one source lockup image.
 *
 *   node scripts/generate-logo.mjs [path-to-source]
 *
 * The source is the full "World of ESG" lockup (sphere mark above the wordmark)
 * on a white background. The script:
 *
 *   1. knocks the white background out to transparency,
 *   2. finds the blank band between the mark and the wordmark automatically,
 *      so the sphere can be isolated without hardcoded crop coordinates,
 *   3. writes each asset at the size the site actually uses.
 *
 * Outputs:
 *   public/images/logo/logo.png        512x512  sphere only, transparent — used in all 7 UI slots
 *   public/images/logo/logo-full.png   full lockup, transparent — for decks / wide placements
 *   public/apple-touch-icon.png        180x180  flattened on white (iOS ignores alpha)
 *   public/favicon-192/96/48/32/16.png browser tab + Google Search icons
 *                                     (Search needs >=48px, so 48/96/192 exist)
 *   public/og-image.jpg                1200x630 social share card (was missing entirely)
 */

import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import fs from 'node:fs/promises'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SRC =
  process.argv[2] ||
  'C:/Users/aruln/Downloads/WhatsApp Image 2026-08-28 at 1.34.16 PM.jpeg'

// White knockout thresholds, on mean luminance. Values between the two get a
// partial alpha so anti-aliased edges stay smooth instead of turning jagged.
const OPAQUE_BELOW = 235
const CLEAR_ABOVE = 250

/** Replace the white background with transparency. */
async function knockOutWhite(src) {
  const { data, info } = await sharp(src)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  const { width, height, channels } = info
  for (let i = 0; i < data.length; i += channels) {
    const lum = (data[i] + data[i + 1] + data[i + 2]) / 3
    let alpha
    if (lum >= CLEAR_ABOVE) alpha = 0
    else if (lum <= OPAQUE_BELOW) alpha = 255
    else alpha = Math.round((255 * (CLEAR_ABOVE - lum)) / (CLEAR_ABOVE - OPAQUE_BELOW))
    data[i + 3] = Math.min(data[i + 3], alpha)
  }
  return { data, width, height, channels }
}

/**
 * Locate the blank horizontal band separating the sphere from the wordmark.
 * Returns the y coordinate to cut at — no hardcoded crop box, so this still
 * works if the lockup's proportions change.
 */
function findGapRow({ data, width, height, channels }) {
  const rowHasInk = []
  for (let y = 0; y < height; y++) {
    let ink = false
    for (let x = 0; x < width; x++) {
      if (data[(y * width + x) * channels + 3] > 16) {
        ink = true
        break
      }
    }
    rowHasInk.push(ink)
  }

  // Search the middle band only, so the outer white margins aren't picked.
  const from = Math.floor(height * 0.25)
  const to = Math.floor(height * 0.75)
  let best = { start: -1, len: 0 }
  let runStart = -1

  for (let y = from; y <= to; y++) {
    if (!rowHasInk[y]) {
      if (runStart === -1) runStart = y
    } else if (runStart !== -1) {
      const len = y - runStart
      if (len > best.len) best = { start: runStart, len }
      runStart = -1
    }
  }
  if (runStart !== -1 && to - runStart > best.len) best = { start: runStart, len: to - runStart }

  if (best.start === -1) return Math.floor(height * 0.55) // fallback
  return best.start + Math.floor(best.len / 2)
}

/** Trim transparent edges, then pad to a square canvas with a little breathing room. */
async function squareMark(buffer, size) {
  const trimmed = await sharp(buffer).trim().png().toBuffer({ resolveWithObject: true })
  const { width, height } = trimmed.info
  const side = Math.max(width, height)
  const pad = Math.round(side * 0.04)
  const canvas = side + pad * 2

  const left = Math.round((canvas - width) / 2)
  const top = Math.round((canvas - height) / 2)

  // Two passes on purpose: sharp runs extend() *after* resize() within a single
  // pipeline, which would pad the already-resized image and overshoot the target.
  const padded = await sharp(trimmed.data)
    .extend({
      top,
      bottom: canvas - height - top,
      left,
      right: canvas - width - left,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer()

  return sharp(padded)
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    // The mark is flat colour, so a quantised palette cuts file size by ~10x
    // with no visible loss. logo.png loads on every page view.
    .png({ compressionLevel: 9, palette: true, quality: 90, effort: 10 })
    .toBuffer()
}

async function main() {
  try {
    await fs.access(SRC)
  } catch {
    console.error(`\n  Source image not found:\n    ${SRC}\n`)
    console.error('  Pass the path explicitly:  node scripts/generate-logo.mjs <path>\n')
    process.exit(1)
  }

  console.log(`  source: ${SRC}`)

  const raw = await knockOutWhite(SRC)
  const { data, width, height, channels } = raw
  const rawOpts = { raw: { width, height, channels } }

  // Whole lockup, background removed.
  const fullPng = await sharp(data, rawOpts).png().toBuffer()
  const fullTrimmed = await sharp(fullPng)
    .trim()
    .png({ compressionLevel: 9, palette: true, quality: 90, effort: 10 })
    .toBuffer()

  // Sphere mark only — everything above the blank band.
  const cutY = findGapRow(raw)
  console.log(`  mark/wordmark split detected at y=${cutY} of ${height}`)
  const markPng = await sharp(data, rawOpts)
    .extract({ left: 0, top: 0, width, height: cutY })
    .png()
    .toBuffer()

  const logo512 = await squareMark(markPng, 512)
  const logo180 = await squareMark(markPng, 180)
  // Google Search requires a favicon of at least 48x48, ideally a multiple of
  // 48 — 16/32 alone leave it falling back to whatever it cached previously.
  const logo192 = await squareMark(markPng, 192)
  const logo96 = await squareMark(markPng, 96)
  const logo48 = await squareMark(markPng, 48)
  const logo32 = await squareMark(markPng, 32)
  const logo16 = await squareMark(markPng, 16)

  const out = [
    ['public/images/logo/logo.png', logo512],
    ['public/images/logo/logo-full.png', fullTrimmed],
    ['public/favicon-192.png', logo192],
    ['public/favicon-96.png', logo96],
    ['public/favicon-48.png', logo48],
    ['public/favicon-32.png', logo32],
    ['public/favicon-16.png', logo16],
  ]

  // iOS composites touch icons on black if they carry alpha — flatten on white.
  out.push([
    'public/apple-touch-icon.png',
    await sharp(logo180).flatten({ background: '#ffffff' }).png().toBuffer(),
  ])

  // Social card. JPEG has no alpha, so the lockup sits on the brand off-white.
  const card = await sharp({
    create: { width: 1200, height: 630, channels: 4, background: '#ffffff' },
  })
    .composite([
      { input: await sharp(fullTrimmed).resize({ width: 820, fit: 'inside' }).toBuffer() },
    ])
    .jpeg({ quality: 88 })
    .toBuffer()
  out.push(['public/og-image.jpg', card])

  for (const [rel, buf] of out) {
    const dest = path.join(root, rel)
    await fs.mkdir(path.dirname(dest), { recursive: true })
    await fs.writeFile(dest, buf)
    const meta = await sharp(buf).metadata()
    console.log(
      `  wrote ${rel.padEnd(34)} ${String(meta.width).padStart(4)}x${String(meta.height).padEnd(4)} ${(buf.length / 1024).toFixed(0)} KB`
    )
  }

  console.log('\n  Done.\n')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
