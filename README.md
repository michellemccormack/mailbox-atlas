# Mailbox Atlas: virtual mailbox prices and fees, sourced

Static Astro site (personal project, not Secret Boston). Same structure as Screening Atlas.

    npm install && npm run build   # -> dist/

Live (temporary): https://michellemccormack.github.io/mailbox-atlas/ (gh-pages branch).
Defaults build for that github.io path. When a domain is approved: add public/CNAME, then build with
SITE_URL=https://<domain> BASE_PATH=/ npm run build.

Rules: every price links to the provider's own page (src/data/sources.js). Mark unconfirmed items with <Unverified/>.
Affiliate placeholders: <Aff id="travelingmailbox|ipostal1|anytimemailbox|postscanmail|usglobalmail|stable|earthclassmail" .../> (data-affiliate attribute).
Raw captures: research/. Next pages: PAGE-QUEUE.md.
