import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TE SHOW THE PING',
  description: 'A fan-made Teshow & Ping archive and update hub.',
  icons: { icon: '/favicon.svg' }
}

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>
}
