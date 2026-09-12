import { notFound } from 'next/navigation'
import { getBootstrap, findMedia } from '@/lib/content'
import SiteShell from '@/components/SiteShell'
import MediaImage from '@/components/MediaImage'
import { formatDate } from '@/lib/utils'

export default async function NewsDetail({params}:{params:{slug:string}}){ const data=await getBootstrap(); const n=data.news.find(x=>x.slug===params.slug&&x.status==='published'); if(!n)notFound(); const m=findMedia(data,n.featured_media_id); return <SiteShell data={data}><article className="detail-page page-pad"><p className="eyebrow">News • {formatDate(n.publish_date)}</p><h1>{n.title}</h1><p className="lede">{n.excerpt}</p><MediaImage src={m?.url} alt={m?.alt_text||n.title} className="wide-media"/><div className="prose"><p>{n.body}</p>{n.source_url&&<p><a href={n.source_url} target="_blank" rel="noreferrer">{data.ui.original_source||'Original source'} ↗</a></p>}</div></article></SiteShell> }
