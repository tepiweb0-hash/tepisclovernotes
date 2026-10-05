"use client"

import { useRef, useState } from "react"

const CAT_IMAGE =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz3_amsafe4U9V63OanM9iTtJoLXLu77O06B3CFzQLjw&s=10"

export default function QrDownloadMeme() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [downloading, setDownloading] = useState(false)

  async function handleDownload() {
    if (downloading) return
    setDownloading(true)

    const audio = audioRef.current
    if (audio) {
      audio.currentTime = 0
      try {
        await audio.play()
      } catch {
        // The download will still continue even if the browser blocks audio.
      }
    }

    window.setTimeout(() => {
      const a = document.createElement("a")
      a.href = "/qr/teshow-ping-socials-qr.png"
      a.download = "teshow-ping-socials-qr.png"
      document.body.appendChild(a)
      a.click()
      a.remove()
      setDownloading(false)
    }, 1200)
  }

  return (
    <main className="qr-joke-page">
      <audio
        ref={audioRef}
        src="/audio/cat-laugh-meme.mp3"
        preload="auto"
        playsInline
      />

      <div className="qr-joke-cat">
        <img src={CAT_IMAGE} alt="Laughing and pointing cat meme" />
      </div>

      <button
        type="button"
        className="qr-joke-download"
        onClick={handleDownload}
        disabled={downloading}
      >
        {downloading ? "😹 Wait for it..." : "Download the real QR code"}
      </button>
    </main>
  )
}
