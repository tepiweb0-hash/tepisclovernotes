import { notFound } from 'next/navigation'
import { getBootstrap, findMedia } from '@/lib/content'
import SiteShell from '@/components/SiteShell'
import MediaImage from '@/components/MediaImage'
import MediaGallery from '@/components/MediaGallery'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'

export async function generateMetadata({params}:{params:{slug:string}}){ const d=await getBootstrap(); const s=d.series.find(x=>x.slug===params.slug); return {title:s?.seo_title||s?.title||'Series',description:s?.seo_description||s?.short_synopsis} }

export default async function SeriesDetail({params}:{params:{slug:string}}){
  const data=await getBootstrap(); const series=data.series.find(s=>s.slug===params.slug && ['published','airing','completed'].includes(String(s.status))); if(!series)notFound()
  const poster=findMedia(data,series.hero_media_id||series.poster_media_id)
  const cast=data.seriesCast.filter(c=>c.series_id===series.series_id&&c.enabled!==false).sort((a,b)=>Number(a.billing_order)-Number(b.billing_order))
  const eps=data.episodes.filter(e=>e.series_id===series.series_id&&e.enabled!==false).sort((a,b)=>Number(a.episode_number)-Number(b.episode_number))
  const galRows=data.galleries.filter(g=>g.entity_type==='series'&&g.entity_id===series.series_id&&g.enabled!==false).sort((a,b)=>Number(a.sort_order)-Number(b.sort_order))
  const galMedia=galRows.map(g=>findMedia(data,g.media_id)).filter(Boolean) as any[]
  const gs=data.gallerySettings.find(g=>g.entity_type==='series'&&g.entity_id===series.series_id&&g.enabled!==false)
  return <SiteShell data={data}>
    <section className="series-detail-hero page-pad"><MediaImage src={poster?.url} alt={poster?.alt_text||series.title} className="series-detail-poster" eager/><div><p className="eyebrow">{series.year} • {series.status}</p><h1>{series.title}</h1><p className="lede small">{series.synopsis}</p><div className="fact-pills">{series.genre&&<span>{series.genre}</span>}{series.release_day&&<span>{series.release_day} {series.release_time}</span>}{series.network&&<span>{series.network}</span>}</div>{series.trailer_url&&<a className="button primary" href={series.trailer_url} target="_blank" rel="noreferrer">{data.ui.official_trailer||'Official Trailer'}</a>}</div></section>
    <section className="page-pad"><div className="section-heading"><div><p className="eyebrow">{data.ui.cast_label||'Cast'}</p><h2>{data.ui.main_cast||'Main cast'}</h2></div></div><div className="cast-strip">{cast.map(c=>{const a=data.artists.find(x=>x.artist_id===c.artist_id);const m=findMedia(data,a?.profile_media_id);return <Link href={a?`/artists/${a.slug}`:'#'} className="cast-card" key={c.cast_id}><MediaImage src={m?.url} alt={a?.display_name} className="cast-image"/><strong>{a?.display_name||'Artist'}</strong><span>{c.character_name}</span></Link>})}</div></section>
    <section className="page-pad"><div className="section-heading"><div><p className="eyebrow">{data.ui.release_schedule||'Release schedule'}</p><h2>{data.ui.episodes_label||'Episodes'}</h2></div></div><div className="episode-list">{eps.length?eps.map(e=><article key={e.episode_id}><div><span>EP {e.episode_number}</span><h3>{e.title}</h3><p>{e.summary||'Episode details can be updated from the CMS.'}</p></div><time>{formatDate(e.release_date)} {e.release_time||''}</time></article>):<div className="empty-card"><p>Episodes can be added from the CMS.</p></div>}</div></section>
    {galMedia.length>0&&<section className="page-pad subtle-gallery"><div className="section-heading"><div><p className="eyebrow">{data.ui.photos_label||'Photos'}</p><h2>{data.ui.album_label||'Album'}</h2></div></div><MediaGallery items={galMedia} mode={gs?.display_mode||'carousel'} interval={Number(gs?.interval_ms||4500)}/></section>}
  </SiteShell>
}
