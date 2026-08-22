/**
 * POST /api/booking — delivers a "Book a Call" request to the company inbox.
 *
 * Runs as a Vercel Serverless Function (any file under /api is auto-deployed as
 * one; no route config needed).
 *
 * Setup — one environment variable in Vercel → Settings → Environment Variables:
 *
 *   RESEND_API_KEY   an API key from https://resend.com  (free tier is enough)
 *
 * Optional overrides:
 *   BOOKING_TO_EMAIL    destination inbox        (default hello@worldofesg.in)
 *   BOOKING_FROM_EMAIL  verified sender address  (default onboarding@resend.dev)
 *
 * Until RESEND_API_KEY is set this returns 503 with { code: 'not_configured' },
 * which the client treats as a signal to fall back to a prefilled mailto so a
 * visitor's request is never silently lost.
 */

const TO_EMAIL = process.env.BOOKING_TO_EMAIL || 'hello@worldofesg.in'
// Resend's shared sandbox sender works without domain verification, but only
// delivers to the account owner's address. Verify worldofesg.in in Resend and
// set BOOKING_FROM_EMAIL to something like bookings@worldofesg.in for real use.
const FROM_EMAIL = process.env.BOOKING_FROM_EMAIL || 'World of ESG <onboarding@resend.dev>'

interface BookingPayload {
  name?: unknown
  email?: unknown
  company?: unknown
  topic?: unknown
  date?: unknown
  time?: unknown
  note?: unknown
}

const str = (v: unknown, max = 2000): string =>
  typeof v === 'string' ? v.trim().slice(0, max) : ''

/** Escape user input before interpolating into the HTML email body. */
const esc = (s: string): string =>
  s.replace(/[&<>"']/g, (c) => {
    switch (c) {
      case '&':
        return '&amp;'
      case '<':
        return '&lt;'
      case '>':
        return '&gt;'
      case '"':
        return '&quot;'
      default:
        return '&#39;'
    }
  })

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const body: BookingPayload = typeof req.body === 'string' ? safeParse(req.body) : req.body || {}

  const name = str(body.name, 120)
  const email = str(body.email, 200)
  const company = str(body.company, 160)
  const topic = str(body.topic, 120)
  const date = str(body.date, 40)
  const time = str(body.time, 20)
  const note = str(body.note, 4000)

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required', code: 'invalid' })
  }
  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'That email address looks invalid', code: 'invalid' })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return res.status(503).json({
      error: 'Email delivery is not configured on the server',
      code: 'not_configured',
    })
  }

  const rows: Array<[string, string]> = [
    ['Name', name],
    ['Email', email],
    ['Company', company || '—'],
    ['Topic', topic || '—'],
    ['Preferred date', date || '—'],
    ['Preferred time', time || '—'],
    ['Note', note || '—'],
  ]

  const html = `
    <div style="font-family:system-ui,-apple-system,'Segoe UI',sans-serif;max-width:560px">
      <h2 style="color:#1D6B43;margin:0 0 4px">New call request</h2>
      <p style="color:#465348;margin:0 0 20px">Submitted via worldofesg.in</p>
      <table cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse">
        ${rows
          .map(
            ([k, v]) => `<tr>
          <td style="padding:9px 0;border-bottom:1px solid #E7E2D8;color:#7C877E;font-size:13px;width:150px;vertical-align:top">${k}</td>
          <td style="padding:9px 0;border-bottom:1px solid #E7E2D8;color:#243128;font-size:14px;white-space:pre-wrap">${esc(v)}</td>
        </tr>`
          )
          .join('')}
      </table>
    </div>`

  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n')

  try {
    const resend = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        // So hitting Reply in the inbox replies to the person who enquired.
        reply_to: email,
        subject: `Call request — ${name}${company ? ` (${company})` : ''}`,
        html,
        text,
      }),
    })

    if (!resend.ok) {
      const detail = await resend.text()
      console.error('Resend rejected the request:', resend.status, detail)
      return res
        .status(502)
        .json({ error: 'Email provider rejected the request', code: 'upstream' })
    }

    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Booking email failed:', error)
    return res.status(500).json({ error: 'Could not send the request', code: 'failed' })
  }
}

function safeParse(s: string): BookingPayload {
  try {
    return JSON.parse(s)
  } catch {
    return {}
  }
}
