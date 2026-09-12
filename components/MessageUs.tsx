import type { Bootstrap } from '@/lib/types'
import { safeHref } from '@/lib/utils'

export default function MessageUs({ data }: { data: Bootstrap }) {
  if (String(data.site.enable_message_us).toLowerCase() === 'false') return null
  const links = data.messageLinks.filter(x => x.enabled !== false && x.url).sort((a,b) => Number(a.sort_order)-Number(b.sort_order))
  if (!links.length) return null
  return <div className="message-us"><span>Message us</span>{links.map(l => <a key={l.link_id} href={safeHref(l.url)} target="_blank" rel="noreferrer">{l.label}</a>)}</div>
}
