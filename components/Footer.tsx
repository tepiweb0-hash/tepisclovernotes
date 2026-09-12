import type { Bootstrap } from '@/lib/types'
import { safeHref } from '@/lib/utils'

export default function Footer({ data }: { data: Bootstrap }) {
  return <footer className="site-footer">
    <div><img src="/logo.png" alt="TE SHOW THE PING" className="footer-logo" /><p>{data.site.official_disclaimer || 'Fan-made website. Not officially affiliated with GMMTV.'}</p></div>
    <div className="footer-socials">
      {data.socials.filter(s => s.enabled !== false && s.url).sort((a,b) => Number(a.sort_order)-Number(b.sort_order)).map(s => <a key={s.social_id} href={safeHref(s.url)} target="_blank" rel="noreferrer">{s.label}</a>)}
    </div>
  </footer>
}
