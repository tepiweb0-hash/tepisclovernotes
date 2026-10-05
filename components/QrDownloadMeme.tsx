"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

const CAT_IMAGE =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz3_amsafe4U9V63OanM9iTtJoLXLu77O06B3CFzQLjw&s=10"

export default function QrDownloadMeme() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [soundBlocked, setSoundBlocked] = useState(false)

  function playLaugh() {
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime = 0
    audio.play().then(() => setSoundBlocked(false)).catch(() => setSoundBlocked(true))
  }

  useEffect(() => {
    const timer = window.setTimeout(() => {
      playLaugh()
    }, 250)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <main className="qr-download-page">
      <audio ref={audioRef} src="/audio/cat-laugh-meme.mp3" preload="auto" />

      <section className="qr-download-card">
        <p className="qr-download-kicker">Teshow &amp; Ping PH</p>
        <h1>HERE IS THE QR LINK 😭</h1>
        <p className="qr-download-copy">
          You really opened a whole page just to download one QR.
          <br />
          Fine. The cat will assist you.
        </p>

        <button
          type="button"
          className="qr-cat-button"
          onClick={playLaugh}
          aria-label="Play the laughing cat sound"
        >
          <img src={CAT_IMAGE} alt="Laughing and pointing cat meme" />
        </button>

        {soundBlocked && (
          <p className="qr-sound-hint">🔊 Your browser blocked the laugh. Tap the cat. It has something to say.</p>
        )}

        <a
          className="qr-download-main-button"
          href="/qr/teshow-ping-socials-qr.png"
          download="teshow-ping-socials-qr.png"
          onClick={playLaugh}
        >
          Download the QR before the cat judges you
        </a>

        <a
          className="qr-download-svg-button"
          href="/qr/teshow-ping-socials-qr.svg"
          download="teshow-ping-socials-qr.svg"
          onClick={playLaugh}
        >
          Need the fancy print version? Download SVG
        </a>

        <p className="qr-download-small">
          One QR. One permanent destination. Zero excuses. 😹
        </p>

        <Link href="/qr" className="qr-download-back">
          ← Actually, take me back to the social links
        </Link>
      </section>
    </main>
  )
}
