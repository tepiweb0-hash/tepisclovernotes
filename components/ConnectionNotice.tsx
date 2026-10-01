export default function ConnectionNotice({ message }: { message?: string }) {
  return <section className="connection-notice page-pad"><div className="empty-card"><p className="eyebrow">Content source</p><h1>Google Sheets is not connected yet.</h1><p>{message || 'Set CONTENT_API_URL in Vercel after deploying the Apps Script API.'}</p></div></section>
}
