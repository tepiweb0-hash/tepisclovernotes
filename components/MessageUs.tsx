"use client"
import { useState } from 'react'
import type { Bootstrap } from '@/lib/types'
import { safeHref } from '@/lib/utils'

export default function MessageUs({ data }: { data: Bootstrap }) {
  const [open,setOpen]=useState(false)
  if (String(data.site.enable_message_us).toLowerCase() === 'false') return null
  const links=data.messageLinks.filter(x=>x.enabled!==false&&String(x.enabled).toLowerCase()!=='false').sort((a,b)=>Number(a.sort_order)-Number(b.sort_order))
  return <div className={`message-us ${open?'open':''}`}>
    {open&&<div className="message-menu"><p className="eyebrow">{data.site.message_us_label||'Message us'}</p>{links.length?links.map(l=>l.url?<a key={l.link_id} href={safeHref(l.url)} target="_blank" rel="noreferrer">{l.label}<span>↗</span></a>:<span className="message-option-disabled" key={l.link_id}>{l.label}<small>Add link in CMS</small></span>):<p className="message-empty">Contact links can be added anytime from CMS → Message Us.</p>}</div>}
    <button className="message-fab" type="button" onClick={()=>setOpen(v=>!v)} aria-expanded={open}><span aria-hidden="true">{open?'×':'✦'}</span><b>{data.site.message_us_label||'Message Us'}</b></button>
  </div>
}
