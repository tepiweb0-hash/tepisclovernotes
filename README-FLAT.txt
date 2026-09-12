Teshow × Ping PH — CMS dynamic-route build

All files stay flat in the ZIP root for Vercel.
Only logo.png is a local image asset.

CMS rule:
- SERIES, NEWS, EVENTS, ARTISTS and MERCH item pages are NOT separate per-item HTML files.
- One generic shell is used per content type:
  series-detail.html, news-detail.html, event-detail.html, artist-detail.html, product.html
- Vercel rewrites URLs such as /series/the-dark-dice to the generic shell.
- The slug is read from the URL, then content-api.js finds the matching record from the DB payload.
- Creating a new Series/News/Event/Artist/Merch item in the CMS does not require creating another HTML file.
- Editable images resolve from Google Sheet MEDIA records / Google Drive. Only logo.png remains local.
