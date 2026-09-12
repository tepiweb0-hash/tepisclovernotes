import type { Bootstrap } from '@/lib/types'
import FloatingNav from './FloatingNav'
import Footer from './Footer'
import MessageUs from './MessageUs'

const cssColor=(v:any,fallback:string)=>/^#[0-9a-f]{3,8}$/i.test(String(v||''))?String(v):fallback
const cssLength=(v:any,fallback:string)=>/^\d+(\.\d+)?(px|rem|em|%)$/.test(String(v||''))?String(v):fallback
const fontFamily=(v:any,fallback:string)=>String(v||'').replace(/[^a-zA-Z0-9 _-]/g,'').trim()||fallback

export default function SiteShell({data,children}:{data:Bootstrap,children:React.ReactNode}){
  const bodyFont=data.fonts.find(f=>f.role==='body'&&f.enabled!==false)
  const headingFont=data.fonts.find(f=>f.role==='heading'&&f.enabled!==false)
  const fontUrls=Array.from(new Set(data.fonts.filter(f=>f.enabled!==false&&/^https:\/\/fonts\.googleapis\.com\//.test(String(f.google_css_url||''))).map(f=>String(f.google_css_url))))
  const style:any={
    '--navy':cssColor(data.theme.color_navy,'#163B63'),'--frost':cssColor(data.theme.color_frost,'#DDEAF5'),'--pink':cssColor(data.theme.color_pink,'#D7BEC5'),'--green':cssColor(data.theme.color_clover,'#52B848'),'--ink':cssColor(data.theme.color_ink,'#14212B'),'--paper':cssColor(data.theme.color_paper,'#F7F9FB'),
    '--dark-bg':cssColor(data.theme.dark_bg,'#0A1520'),'--dark-surface':cssColor(data.theme.dark_surface,'#102638'),'--dark-surface-alt':cssColor(data.theme.dark_surface_alt,'#17354B'),'--dark-text':cssColor(data.theme.dark_text,'#F4F8FB'),'--dark-muted':cssColor(data.theme.dark_muted,'#A7BBC9'),'--dark-line':cssColor(data.theme.dark_line,'#29465D'),
    '--radius':cssLength(data.theme.radius_card,'28px'),'--font-body':`'${fontFamily(bodyFont?.family,'Inter')}', Inter, sans-serif`,'--font-heading':`'${fontFamily(headingFont?.family,'Manrope')}', Manrope, sans-serif`
  }
  return <div className="site-theme" style={style}>{fontUrls.map(url=><link key={url} rel="stylesheet" href={url}/>)}<FloatingNav data={data}/><main>{children}</main><Footer data={data}/><MessageUs data={data}/></div>
}
