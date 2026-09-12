import Link from 'next/link'
import { getBootstrap, findMedia, published } from '@/lib/content'
import SiteShell from '@/components/SiteShell'
import ConnectionNotice from '@/components/ConnectionNotice'
import MediaImage from '@/components/MediaImage'
import NewsGrid from '@/components/NewsGrid'

export default async function Home() {
  const data = await getBootstrap()
  if (!data.ok) return <SiteShell data={data}><ConnectionNotice message={data.error} /></SiteShell>
  const features = data.homeFeatures.filter(f=>f.enabled!==false).sort((a,b)=>Number(a.sort_order)-Number(b.sort_order))
  const hero = features.find(f=>f.slot==='hero')
  const current = features.find(f=>f.slot==='current_series')
  const artists = features.filter(f=>f.slot==='artist_showcase')
  const artistHeading = features.find(f=>f.slot==='artist_heading')
  const newsHeading = features.find(f=>f.slot==='news_heading')
  const homePage = data.pages.find(p=>p.page_id==='page-home')
  const heroMedia = findMedia(data, hero?.media_id_override)
  const currentSeries = data.series.find(s=>s.series_id===current?.entity_id)
  const currentMedia = findMedia(data, current?.media_id_override || currentSeries?.poster_media_id)
  return <SiteShell data={data}>
    <section className="home-hero page-pad">
      <div className="hero-glow"></div>
      <p className="eyebrow">{homePage?.hero_eyebrow || hero?.slot || 'Home'}</p>
      <h1>{hero?.title_override || homePage?.hero_title || data.site.site_name || 'TE SHOW THE PING'}</h1>
      <p className="lede">{hero?.copy_override || homePage?.hero_body || data.site.site_tagline}</p>
      {heroMedia && <MediaImage src={heroMedia.url} alt={heroMedia.alt_text} className="hero-art" eager />}
      {hero?.button_href && <Link className="button primary" href={hero.button_href}>{hero.button_label || 'Explore'}</Link>}
    </section>

    {currentSeries && <section className="current-series page-pad">
      <div className="section-heading centered"><div><p className="eyebrow">{current?.title_override || data.ui.current_series_label || 'Current series'}</p><h2>{currentSeries.title}</h2></div></div>
      <MediaImage src={currentMedia?.url} alt={currentMedia?.alt_text || currentSeries.title} className="current-series-image" />
      <div className="center-copy"><p className="lede small">{currentSeries.short_synopsis}</p><Link className="button primary" href={`/series/${currentSeries.slug}`}>{current?.button_label || data.ui.view_series || 'View Series'}</Link></div>
    </section>}

    <section className="page-pad artist-showcases"><div className="section-heading"><div><p className="eyebrow">{artistHeading?.title_override || 'Artists'}</p><h2>{artistHeading?.copy_override || 'Meet the artists'}</h2></div><Link href={artistHeading?.button_href || '/artists'}>{artistHeading?.button_label || 'View artists'} →</Link></div>
      {artists.map((f,i)=>{ const artist=data.artists.find(a=>a.artist_id===f.entity_id); const media=findMedia(data,f.media_id_override||artist?.profile_media_id); if(!artist)return null; return <article className={`split-showcase ${i%2===1?'reverse':''}`} key={f.feature_id}><div className="split-copy"><p className="eyebrow">{data.ui.artist_label || 'Artist'} {String(i+1).padStart(2,'0')}</p><h2>{artist.display_name}</h2><p className="lede small">{artist.quick_info}</p><p>{artist.bio}</p><Link className="button primary" href={`/artists/${artist.slug}`}>{data.ui.full_info || 'Full Info'}</Link></div><MediaImage src={media?.url} alt={media?.alt_text||artist.display_name} className="split-image" /></article>})}
    </section>

    <section className="page-pad"><div className="section-heading"><div><p className="eyebrow">{newsHeading?.title_override || 'Updates'}</p><h2>{newsHeading?.copy_override || 'News'}</h2></div><Link href={newsHeading?.button_href || '/news'}>{newsHeading?.button_label || 'See all'} →</Link></div><NewsGrid data={data} rows={undefined} /></section>
  </SiteShell>
}
