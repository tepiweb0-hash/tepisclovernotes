PATCH 01

Replace these files in the current Vercel project:
- styles.css
- app.js
- artists.html
- merch.html
- vercel.json (new)

vercel.json enables clean URLs, so:
  /artists.html -> /artists
  /series.html  -> /series
  /merch.html   -> /merch
  /teshow.html  -> /teshow
etc.

After redeploying, Vercel will serve the .html files without showing .html in the browser URL.

Patch also includes:
- glass overlay burger menu with no hero/layout shift
- burger remains visible on dark Series pages
- Artists landing: one full-width artist section at a time
- mobile artist photo auto-cycle remains supported
- Merch: 2 products/row desktop/tablet, 1/row phone
- footer logo has no background/card
