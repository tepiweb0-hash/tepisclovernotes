import type { Bootstrap } from './types'

const EMPTY: Bootstrap = {
  ok: false,
  site: {}, ui: {}, theme: {}, fonts: [], navigation: [], socials: [], messageLinks: [],
  pages: [], sections: [], sectionItems: [], media: [], artists: [], artistTimeline: [],
  artistAchievements: [], series: [], seriesCast: [], episodes: [], episodeCast: [], galleries: [], gallerySettings: [],
  news: [], events: [], notifications: [], homeFeatures: []
}

export async function getBootstrap(): Promise<Bootstrap> {
  const base = process.env.CONTENT_API_URL?.trim() || 'https://script.google.com/macros/s/AKfycbwITXEZ5o3d5B0fPeKSCGi78riViufjo2HcBjQG5V_lo9z04ss-V8ssiX7h70ZRhfY5/exec'
  if (!base) return { ...EMPTY, error: 'CONTENT_API_URL is not configured.' }
  try {
    const joiner = base.includes('?') ? '&' : '?'
    const res = await fetch(`${base}${joiner}action=bootstrap`, {
      cache: 'no-store',
      headers: { Accept: 'application/json' }
    })
    if (!res.ok) throw new Error(`Content API returned ${res.status}`)
    const json = await res.json()
    const media = Array.isArray(json?.media)
      ? json.media.map((item: any) => ({
          ...item,
          url: item?.file_id ? `https://lh3.googleusercontent.com/d/${encodeURIComponent(String(item.file_id))}` : item?.url
        }))
      : []
    return { ...EMPTY, ...json, media, ok: json?.ok !== false }
  } catch (error) {
    return { ...EMPTY, error: error instanceof Error ? error.message : 'Unable to load content.' }
  }
}

export function findMedia(data: Bootstrap, mediaId?: string) {
  return mediaId ? data.media.find((m) => m.media_id === mediaId) : undefined
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
