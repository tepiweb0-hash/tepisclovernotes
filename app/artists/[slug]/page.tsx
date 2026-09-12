import { notFound } from 'next/navigation'
import { getBootstrap, findMedia } from '@/lib/content'
import SiteShell from '@/components/SiteShell'
import MediaImage from '@/components/MediaImage'
import SeriesCard from '@/components/SeriesCard'
import { formatDate } from '@/lib/utils'

export async function generateMetadata({params}:{params:{slug:string}}){ const data=await getBootstrap(); const a=data.artists.find(x=>x.slug===params.slug); return { title:a?.seo_title||a?.full_name||'Artist', description:a?.seo_description||a?.quick_info } }

export default async function ArtistDetail({params}:{params:{slug:string}}){
  const data=await getBootstrap(); const artist=data.artists.find(a=>a.slug===params.slug && a.status==='published'); if(!artist)notFound()
  const media=findMedia(data,artist.hero_media_id||artist.profile_media_id)
  const roles=data.seriesCast.filter(c=>c.artist_id===artist.artist_id&&c.enabled!==false).sort((a,b)=>Number(a.billing_order)-Number(b.billing_order))
  const series=roles.map(r=>data.series.find(s=>s.series_id===r.series_id)).filter(Boolean)
  const timeline=data.artistTimeline.filter(t=>t.artist_id===artist.artist_id&&t.enabled!==false).sort((a,b)=>String(a.date).localeCompare(String(b.date)))
  const achievements=data.artistAchievements.filter(x=>x.artist_id===artist.artist_id&&x.enabled!==false).sort((a,b)=>Number(a.sort_order)-Number(b.sort_order))
  return <SiteShell data={data}>
    <section className="artist-detail-hero page-pad"><div><p className="eyebrow">Artist profile</p><h1>{artist.full_name}</h1><div className="role-list">{roles.map(r=>{const s=data.series.find(x=>x.series_id===r.series_id);return <p key={r.cast_id}><strong>{r.character_name}</strong> in {s?.title||'Series'}</p>})}</div><p className="lede small">{artist.bio}</p><div className="fact-pills"><span>Born {formatDate(artist.birth_date)}</span>{artist.agency&&<span>{artist.agency}</span>}{artist.height_cm&&<span>{artist.height_cm} cm</span>}</div></div><MediaImage src={media?.url} alt={media?.alt_text||artist.display_name} className="artist-hero-image" eager/></section>
    <section className="page-pad"><div className="section-heading"><div><p className="eyebrow">Journey</p><h2>{data.ui.timeline_label||'Timeline'}</h2></div></div><div className="timeline">{timeline.map(t=><article key={t.timeline_id}><span>{t.year_label||formatDate(t.date)}</span><div><h3>{t.title}</h3><p>{t.description}</p></div></article>)}</div></section>
    <section className="page-pad"><div className="section-heading"><div><p className="eyebrow">Milestones</p><h2>{data.ui.achievements_label||'Achievements'}</h2></div></div>{achievements.length?<div className="achievement-grid">{achievements.map(a=><article className="achievement-card" key={a.achievement_id}><p className="eyebrow">{a.organization}</p><h3>{a.title}</h3><p>{a.description}</p></article>)}</div>:<div className="empty-card"><p>Achievements can be added from the CMS at any time.</p></div>}</section>
    <section className="page-pad"><div className="section-heading"><div><p className="eyebrow">Filmography</p><h2>{data.ui.series_label||'Series'}</h2></div></div><div className="series-grid compact">{series.map((s:any)=><SeriesCard key={s.series_id} series={s} data={data}/>)}</div></section>
  </SiteShell>
}
