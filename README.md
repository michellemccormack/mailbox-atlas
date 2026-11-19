# Mailbox Atlas: virtual mailbox prices and fees, sourced

Static Astro site (personal project, not Secret Boston). Same structure as Screening Atlas.

    npm install && npm run build   # -> dist/

Live: https://mailboxatlas.com/ (GitHub Pages, gh-pages branch; public/CNAME sets the domain; DNS on Vercel).
Defaults build for https://mailboxatlas.com. For the github.io path: SITE_URL=https://michellemccormack.github.io/mailbox-atlas BASE_PATH=/mailbox-atlas/ npm run build.

Rules: every price links to the provider's own page (src/data/sources.js). Mark unconfirmed items with <Unverified/>.
Affiliate placeholders: <Aff id="travelingmailbox|ipostal1|anytimemailbox|postscanmail|usglobalmail|stable|earthclassmail" .../> (data-affiliate attribute).
Raw captures: research/. Next pages: PAGE-QUEUE.md.
