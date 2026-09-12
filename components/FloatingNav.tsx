import Link from 'next/link'
import type { Bootstrap } from '@/lib/types'
import { safeHref } from '@/lib/utils'
import ThemeToggle from './ThemeToggle'
import NotificationBell from './NotificationBell'

export default function FloatingNav({ data }: { data: Bootstrap }) {
  const links = [...data.navigation].filter(n => n.enabled !== false && String(n.enabled).toLowerCase()!=='false').sort((a,b) => Number(a.sort_order)-Number(b.sort_order))
  const showLogo=String(data.site.header_show_logo||'true').toLowerCase()!=='false'
  const showTheme=String(data.site.show_theme_toggle||'true').toLowerCase()!=='false'
  return <nav className="floating-nav" aria-label="Primary navigation">
    <Link className="brand-mark" href="/" aria-label="TE SHOW THE PING home">{showLogo?<img src="/logo.png" alt="TE SHOW THE PING" />:<span>{data.site.site_name||'TEPi'}</span>}</Link>
    <div className="nav-scroll">{links.map(n=><Link key={n.nav_id} href={safeHref(n.href,'/')}>{n.label}</Link>)}</div>
    <div className="nav-tools">{showTheme&&<ThemeToggle label={data.site.theme_toggle_label||'Theme'}/>}<NotificationBell notifications={data.notifications} ui={data.ui}/></div>
  </nav>
}
