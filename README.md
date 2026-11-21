# Mailbox Atlas: virtual mailbox prices and fees, sourced

Static Astro site (personal project, not Secret Boston). Same structure as Screening Atlas.

    npm install && npm run build   # -> dist/

Live: https://mailboxatlas.com/ (GitHub Pages, gh-pages branch; public/CNAME sets the domain; DNS on Vercel).
Defaults build for https://mailboxatlas.com. For the github.io path: SITE_URL=https://michellemccormack.github.io/mailbox-atlas BASE_PATH=/mailbox-atlas/ npm run build.

Rules: every price links to the provider's own page (src/data/sources.js). If a figure isn't on a source page, put an em dash (—) in the table cell; never invent a value, and never show an "unverified", "not captured", or "affiliate link pending" badge on the published site.
Affiliate links: <Aff id="travelingmailbox|ipostal1|anytimemailbox|postscanmail|usglobalmail|stable|earthclassmail|virtualpostmail" .../>. Only approved programs (listed in the approved set in Aff.astro, with the tracking href) show the small "affiliate link" tag. Unapproved Aff links must render as ordinary outbound links with no badge.
Raw captures: research/. Next pages: PAGE-QUEUE.md.
