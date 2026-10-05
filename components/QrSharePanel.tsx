"use client"

import { useEffect, useState } from 'react'

const QR_URL = 'https://tepisclovernotes.vercel.app/qr'

export default function QrSharePanel() {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.body.classList.add('qr-modal-open')
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('qr-modal-open')
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(QR_URL)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <>
      <button className="qr-share-trigger" type="button" onClick={() => setOpen(true)}>
        <span className="qr-share-trigger-icon" aria-hidden="true">↗</span>
        <span>Share</span>
      </button>

      {open && (
        <div className="qr-share-backdrop" role="presentation" onMouseDown={() => setOpen(false)}>
          <section
            className="qr-share-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="qr-share-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className="qr-share-close" type="button" aria-label="Close QR sharing panel" onClick={() => setOpen(false)}>×</button>
            <p className="qr-kicker">Permanent QR</p>
            <h2 id="qr-share-title">Share Teshow &amp; Ping PH</h2>
            <p className="qr-share-intro">One QR for this social-links page. The QR itself stays the same even when the links on this page are updated.</p>

            <div className="qr-share-code-frame">
              <img src="/qr/teshow-ping-socials-qr.png" alt="QR code for the Teshow and Ping PH social links page" />
            </div>

            <p className="qr-share-url">tepisclovernotes.vercel.app/qr</p>

            <div className="qr-share-actions">
              <button className="button primary" type="button" onClick={copyLink}>{copied ? 'Copied!' : 'Copy link'}</button>
              <a className="button ghost" href="/qr/teshow-ping-socials-qr.png" download>Download PNG</a>
              <a className="button ghost" href="/qr/teshow-ping-socials-qr.svg" download>Download SVG</a>
            </div>
          </section>
        </div>
      )}
    </>
  )
}
