import { notFound } from 'next/navigation'
import { getBootstrap, findMedia } from '@/lib/content'
import SiteShell from '@/components/SiteShell'
import MediaImage from '@/components/MediaImage'
import { formatDate } from '@/lib/utils'

export default async function EventDetail({params}:{params:{slug:string}}){ const data=await getBootstrap(); const e=data.events.find(x=>x.slug===params.slug&&x.enabled!==false); if(!e)notFound(); const m=findMedia(data,e.featured_media_id); return <SiteShell data={data}><section className="detail-page page-pad"><p className="eyebrow">{data.ui.event_label||'Event'} • {e.event_type}</p><h1>{e.title}</h1><p className="lede">{e.short_info}</p><MediaImage src={m?.url} alt={m?.alt_text||e.title} className="wide-media"/><div className="detail-copy"><p><strong>Date:</strong> {formatDate(e.start_date)} {e.start_time||''}</p>{e.location&&<p><strong>Location:</strong> {e.location}</p>}<p>{e.description}</p>{e.online_url&&<a className="button primary" href={e.online_url} target="_blank" rel="noreferrer">{data.ui.event_link||'Event link'}</a>}</div></section></SiteShell> }
