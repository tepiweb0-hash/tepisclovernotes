"use client"
import { useMemo, useState } from 'react'
import Link from 'next/link'

function ymd(d: Date) { return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}` }

export default function Calendar({ events, episodes, labels = {} }: { events: any[], episodes: any[], labels?: Record<string,string> }) {
  const initial = new Date()
  const [cursor, setCursor] = useState(new Date(initial.getFullYear(), initial.getMonth(), 1))
  const [selected, setSelected] = useState(ymd(initial))
  const items = useMemo(() => {
    const map: Record<string, any[]> = {}
    const push = (date: string, item: any) => { if (!date) return; (map[date] ||= []).push(item) }
    events.filter(e => e.enabled !== false).forEach(e => push(String(e.start_date).slice(0,10), { type:'event', title:e.title, href:`/events/${e.slug}`, info:e.short_info }))
    episodes.filter(e => e.enabled !== false).forEach(e => push(String(e.release_date).slice(0,10), { type:'episode', title:e.title, href:`/series/${e.series_slug || ''}`, info:e.release_time ? `Release ${e.release_time}` : 'Episode release' }))
    return map
  }, [events, episodes])

  const first = new Date(cursor.getFullYear(), cursor.getMonth(), 1)
  const start = new Date(first); start.setDate(first.getDate() - first.getDay())
  const days = Array.from({length:42}, (_,i) => { const d=new Date(start); d.setDate(start.getDate()+i); return d })
  const monthLabel = new Intl.DateTimeFormat('en', { month:'long', year:'numeric' }).format(cursor)
  const selectedItems = items[selected] || []
  return <div className="calendar-shell">
    <div className="calendar-head"><button onClick={()=>setCursor(new Date(cursor.getFullYear(),cursor.getMonth()-1,1))}>←</button><h2>{monthLabel}</h2><button onClick={()=>setCursor(new Date(cursor.getFullYear(),cursor.getMonth()+1,1))}>→</button></div>
    <div className="weekday-row">{['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(x=><span key={x}>{x}</span>)}</div>
    <div className="calendar-grid">{days.map(d => {
      const key=ymd(d), inMonth=d.getMonth()===cursor.getMonth(), dayItems=items[key]||[]
      return <button key={key} className={`calendar-day ${!inMonth?'muted':''} ${selected===key?'selected':''}`} onClick={()=>setSelected(key)}>
        <span className="day-num">{d.getDate()}</span>
        <span className="day-events">{dayItems.slice(0,2).map((x,i)=><span key={i}>{x.title}</span>)}{dayItems.length>2 && <span>+{dayItems.length-2} more</span>}</span>
      </button>
    })}</div>
    <div className="selected-day"><p className="eyebrow">{labels.selected_date || 'Selected date'}</p><h3>{selected}</h3>{selectedItems.length ? selectedItems.map((x,i)=><div className="event-row" key={i}><div><strong>{x.title}</strong><p>{x.info}</p></div><Link className="button ghost" href={x.href}>See {x.type}</Link></div>) : <p>{labels.no_events || 'No events or releases on this date.'}</p>}</div>
  </div>
}
