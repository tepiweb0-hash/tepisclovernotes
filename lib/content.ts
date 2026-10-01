import { collection, getDocs } from 'firebase/firestore'
import { db } from './firebase'
import type { Bootstrap } from './types'

const EMPTY: Bootstrap = {
  ok: false,
  site: {}, ui: {}, theme: {}, fonts: [], navigation: [], socials: [], messageLinks: [],
  pages: [], sections: [], sectionItems: [], media: [], artists: [], artistTimeline: [],
  artistAchievements: [], series: [], seriesCast: [], episodes: [], episodeCast: [], galleries: [], gallerySettings: [],
  news: [], events: [], notifications: [], homeFeatures: []
}

const COLLECTIONS = {
  fonts: 'fonts',
  navigation: 'navigation',
  socials: 'socials',
  messageLinks: 'message_links',
  pages: 'pages',
  sections: 'sections',
  sectionItems: 'section_items',
  media: 'media',
  artists: 'artists',
  artistTimeline: 'artist_timeline',
  artistAchievements: 'artist_achievements',
  series: 'series',
  seriesCast: 'series_cast',
  episodes: 'episodes',
  episodeCast: 'episode_cast',
  galleries: 'galleries',
  gallerySettings: 'gallery_settings',
  news: 'news',
  events: 'events',
  notifications: 'notifications',
  homeFeatures: 'home_features',
} as const

async function rows(name: string) {
  const snap = await getDocs(collection(db, name))
  return snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
}

async function keyValueMap(name: string, keyField: string, valueField: string) {
  const data = await rows(name)
  return Object.fromEntries(
    data
      .filter((item: any) => item[keyField] !== undefined && item[keyField] !== '')
      .map((item: any) => [String(item[keyField]), String(item[valueField] ?? '')])
  )
}

export async function getBootstrap(): Promise<Bootstrap> {
  try {
    const [site, ui, theme, ...resultSets] = await Promise.all([
      keyValueMap('site_settings', 'key', 'value'),
      keyValueMap('ui_text', 'key', 'value'),
      keyValueMap('theme', 'token', 'value'),
      ...Object.values(COLLECTIONS).map(rows),
    ])

    const resultKeys = Object.keys(COLLECTIONS) as (keyof typeof COLLECTIONS)[]
    const payload: any = { ...EMPTY, ok: true, generatedAt: new Date().toISOString(), site, ui, theme }
    resultKeys.forEach((key, index) => { payload[key] = resultSets[index] ?? [] })
    return payload
  } catch (error) {
    return {
      ...EMPTY,
      error: error instanceof Error ? error.message : 'Unable to load Firebase content.'
    }
  }
}

export function findMedia(data: Bootstrap, mediaId?: string) {
  return mediaId ? data.media.find((m) => m.media_id === mediaId || m.id === mediaId) : undefined
}

export function published<T extends Record<string, any>>(rows: T[]) {
  return rows.filter((row) => {
    if (row.enabled === false || String(row.enabled).toLowerCase() === 'false') return false
    if ('status' in row && row.status && !['published', 'airing', 'active', 'released', 'scheduled', 'completed', 'ready'].includes(String(row.status))) return false
    return true
  })
}

export function sortRows<T extends Record<string, any>>(rows: T[]) {
  return [...rows].sort((a,b) => Number(a.sort_order ?? 9999) - Number(b.sort_order ?? 9999))
}
