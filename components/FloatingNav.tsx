import Link from 'next/link'
import type { Bootstrap } from '@/lib/types'
import { safeHref } from '@/lib/utils'

export default function FloatingNav({ data }: { data: Bootstrap }) {
  const links = [...data.navigation].filter(n => n.enabled !== false).sort((a,b) => Number(a.sort_order)-Number(b.sort_order))
  return <nav className="floating-nav" aria-label="Primary navigation">
    <Link className="brand-mark" href="/" aria-label="TE SHOW THE PING home"><img src="/logo.png" alt="TE SHOW THE PING" /></Link>
    <div className="nav-scroll">
      {links.map((n) => <Link key={n.nav_id} href={safeHref(n.href, '/')}>{n.label}</Link>)}
    </div>
    <Link className="nav-bell" href="/events#notifications" aria-label="Notifications">◌</Link>
  </nav>
}
