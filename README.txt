TEPIPH Vercel CMS-ready shell v2

1. Deploy the fresh Apps Script CMS package first.
2. Copy its /exec deployment URL.
3. Open config.js in this Vercel package and replace PASTE_APPS_SCRIPT_EXEC_URL_HERE.
4. Deploy all files flat at the project root.

The website contains no hardcoded artist/series/news/event/merch content. Text comes from the new Google Sheet through Apps Script. Images remain placeholders until uploaded in CMS.
Modules/nav/home sections using Visibility_Mode=Auto hide when there is no published content.
