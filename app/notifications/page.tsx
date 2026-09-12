import { getBootstrap } from '@/lib/content'
import SiteShell from '@/components/SiteShell'

export default async function NotificationPage(){ const data=await getBootstrap(); const rows=data.notifications.filter(n=>n.status==='published'&&n.enabled!==false).sort((a,b)=>String(b.publish_at).localeCompare(String(a.publish_at))); return <SiteShell data={data}><section className="page-hero page-pad"><p className="eyebrow">Notifications</p><h1>Release, event & site notices.</h1></section><section className="page-pad notification-list">{rows.map(n=><article key={n.notification_id}><span>{n.type}</span><div><h3>{n.title}</h3><p>{n.message}</p></div></article>)}</section></SiteShell> }
