export function safeHref(value?: string, fallback = '#') {
  if (!value) return fallback
  if (value.startsWith('/')) return value
  try {
    const url = new URL(value)
    return ['http:', 'https:'].includes(url.protocol) ? value : fallback
  } catch { return fallback }
}

export function formatDate(value?: string, withYear = true) {
  if (!value) return ''
  const date = new Date(value.includes('T') ? value : `${value}T00:00:00`)
  if (Number.isNaN(date.getTime())) return value
  return new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', ...(withYear ? { year: 'numeric' } : {}) }).format(date)
}

export function pickNews(rows: any[], mode = '2_newest_1_hot') {
  const published = rows.filter((r) => r.status === 'published')
  const newest = [...published].sort((a,b) => String(b.publish_date).localeCompare(String(a.publish_date)))
  const hot = [...published].filter((r) => r.hot === true || String(r.hot).toLowerCase() === 'true')
    .sort((a,b) => Number(b.hot_score || 0) - Number(a.hot_score || 0))
  const unique = (items: any[]) => Array.from(new Map(items.map(i => [i.news_id, i])).values())
  if (mode === '3_newest') return newest.slice(0,3)
  if (mode === '1_newest_2_hot') return unique([...newest.slice(0,1), ...hot.slice(0,2), ...newest]).slice(0,3)
  return unique([...newest.slice(0,2), ...hot.slice(0,1), ...newest]).slice(0,3)
}
