import type { Metadata } from "next"
import QrDownloadMeme from "@/components/QrDownloadMeme"

export const metadata: Metadata = {
  title: "Download the QR",
  description: "Download the permanent Teshow & Ping PH QR code.",
  robots: { index: false, follow: true }
}

export default function QrDownloadPage() {
  return <QrDownloadMeme />
}
