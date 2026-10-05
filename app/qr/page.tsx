import type { Metadata } from 'next'
import { safeHref } from '@/lib/utils'
import QrSharePanel from '@/components/QrSharePanel'

export const metadata: Metadata = {
  title: 'Social Links',
  description: 'Official Teshow & Ping PH social links in one place.',
  robots: { index: true, follow: true }
}

type LinkItem = {
  id: string
  label: string
  url: string
  platform: 'instagram' | 'x' | 'website'
  helper: string
}

const links: LinkItem[] = [
  {
    id: 'instagram',
    label: 'Instagram',
    url: 'https://www.instagram.com/teshowpingph',
    platform: 'instagram',
    helper: '@teshowpingph'
  },
  {
    id: 'x',
    label: 'X / Twitter',
    url: 'https://x.com/teshowpingph_',
    platform: 'x',
    helper: '@teshowpingph_'
  },
  {
    id: 'website',
    label: 'Official Website',
    url: 'https://tepisclovernotes.vercel.app',
    platform: 'website',
    helper: 'tepisclovernotes.vercel.app'
  }
]

function PlatformIcon({ platform }: { platform: LinkItem['platform'] }) {
  if (platform === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" className="qr-social-icon-svg" aria-hidden="true" focusable="false">
        <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5.2" fill="none" stroke="currentColor" strokeWidth="1.9" />
        <circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" strokeWidth="1.9" />
        <circle cx="17.25" cy="6.85" r="1.2" fill="currentColor" />
      </svg>
    )
  }

  if (platform === 'x') {
    return (
      <svg viewBox="0 0 24 24" className="qr-social-icon-svg" aria-hidden="true" focusable="false">
        <path
          d="M5 4.5h3.7l4.1 5.38 4.76-5.38H19l-5.52 6.25L20 19.5h-3.72l-4.39-5.75-5.08 5.75H5.25l5.85-6.63z"
          fill="currentColor"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className="qr-social-icon-svg" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3.9 12h16.2M12 3.5c2.15 2.38 3.25 5.36 3.25 8.5S14.15 18.12 12 20.5c-2.15-2.38-3.25-5.36-3.25-8.5S9.85 5.88 12 3.5Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function QrLandingPage() {
  return (
    <main className="qr-landing">
      <div className="qr-landing-orb qr-orb-one" aria-hidden="true" />
      <div className="qr-landing-orb qr-orb-two" aria-hidden="true" />

      <section className="qr-linktree-card" aria-labelledby="qr-title">
        <p className="qr-kicker">Teshow &amp; Ping PH</p>
        <h1 id="qr-title">Find us everywhere.</h1>
        <p className="qr-intro">All our official links in one place.</p>

        <div className="qr-links" aria-label="Official links">
          {links.map((item) => (
            <a
              key={item.id}
              href={safeHref(item.url)}
              target="_blank"
              rel="noreferrer"
              className="qr-social-link"
            >
              <span className="qr-social-icon" aria-hidden="true"><PlatformIcon platform={item.platform} /></span>
              <span className="qr-social-copy"><b>{item.label}</b><small>{item.helper}</small></span>
              <span className="qr-social-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>

        <QrSharePanel />

        <p className="qr-footnote">Permanent destination: tepisclovernotes.vercel.app/qr</p>
      </section>
    </main>
  )
}
