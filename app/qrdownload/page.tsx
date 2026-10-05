import type { Metadata } from "next"
import QrDownloadMeme from "@/components/QrDownloadMeme"

export const metadata: Metadata = {
  title: "QR Download",
  description: "Download the TeshowPing PH QR code.",
  robots: { index: false, follow: true }
}

export default function QrDownloadPage() {
  return <QrDownloadMeme />
}
