# Mailbox Atlas page queue

Ranked by search intent: buyer/commercial first, then high-volume informational. Five pages per night (Michelle's choice). Every number must be sourced from the provider's own page that night.
Published pages must not show internal notes: no "unverified" or "affiliate link pending" badges, and no "Not captured" or "TODO" text. If a figure is missing, use an em dash (—) in the table cell. Only approved affiliate programs show the small "affiliate link" tag (add the id to the approved set in Aff.astro and use the tracking href). Unapproved <Aff/> links render as ordinary outbound links. Keep [source] citation links.

## Done (launch, 2026-11-19)
- [x] /virtual-mailbox-pricing-comparison/
- [x] /cheapest-virtual-mailbox/
- [x] /usps-form-1583-online-notarization/
- [x] /traveling-mailbox-vs-postscan-mail/

## Done (2026-11-20)
- [x] /ipostal1-vs-anytime-mailbox/ (queue #1). Unverified: Anytime overage/storage/check-deposit/notary fees (operator-set, not published centrally).
- [x] /ipostal1-pricing/ (queue #2). Unverified: whether Select/Premium/Prestige surcharges (+$10/$20/$30) are per month; pickup fee per location.
- [x] /anytime-mailbox-pricing/ (queue #3). Parsed all 2,095 U.S. location cards on 2026-11-20 (research/2026-11-20/atm_us_locations_2026-11-20.csv). Unverified: online notary fee ("nominal"), per-location overage/storage.
- [x] /virtual-mailbox-for-llc/ (queue #4). Sources: TX SOS FAQ + Form 201 instructions, FL Stat. 605.0113/605.0201, CA SOS FAQ, IRS SS-4 instructions. Unverified: USGM's claim that WA/CA bar PMB addresses for LLCs; FL acceptance of CMRA as principal street address; bank policies; ECM registered agent price; Anytime business-name rules.
- [x] /virtual-mailbox-check-deposit-fees/ (queue #9, replaces #5). Unverified: PostScan and Anytime fees (not published); Stable low-volume rate; iPostal1 check-scan charge; whether ECM's $39 check subscription stacks on the plan.
- [~] Queue #5 "Virtual mailbox that doesn't require notarization": SKIPPED as a near-duplicate of /usps-form-1583-online-notarization/, which already covers no-notary providers. Fold any new info into that page instead.
- Also updated: iPostal1 row in /virtual-mailbox-pricing-comparison/ (plan page now reachable via fetch; 30 items, $0.35 overage, $2.25 scan).

## Data notes (2026-11-20)
- USGM pricing page now shows Scale $49*/$65* and Teams $99*/$129* under a Month/Annual toggle; check deposits "free" (no handling fee); extra open-and-scan $3.
- Stable pricing text capture shows Grow $49/mo and Scale $83/mo "when billed yearly"; monthly prices not in static HTML.
- ipostal1.com and travelingmailbox.com return 403 to curl; WebFetch works.

## Done (2026-11-21)
- [x] /earth-class-mail-pricing/ (queue #6). earthclassmail.com/pricing now 301s to legalzoom.com LZ Virtual Mail; prices unchanged vs 2026-11-19. Unverified: personal page says both "starts at $29/mo" and "$39/mo" (no $29 plan shown); no annual price shown.
- [x] /stable-vs-earth-class-mail/ (queue #7). Unverified: LegalZoom registered agent price (not on Virtual Mail page); whether Stable's 50% Grow discount applies to monthly and yearly billing.
- [x] /us-global-mail-vs-traveling-mailbox/ (queue #8). Unverified: TMB extra-user fee; TMB Basic scan rollover (cards say yes, footnote says Extended+ only).
- [x] /virtual-mailbox-for-rvers/ (queue #10). Sources: USPS DMM 508.6 / 508.7, usps.com PFS page, SD DPS DL manual + Residency Affidavit. Unverified: General Delivery fee (DMM lists none); which providers SD treats as "mail forwarding" vs "virtual only"; iPostal1 storage/forwarding (per mail center).
- [x] /virtual-mailbox-from-abroad/ (queue #11). Sources: DMM 508.1.8.3, DMM 608.10.3-10.5, PS 1583, provider 1583 pages. Unverified: Anytime Mailbox notary fee; per-provider acceptance of a second photo ID or I-94 as address ID.
- Also updated: check-deposit page (ECM check subscription stacks on plan, per LegalZoom FAQ), Form 1583 page (ECM "free notarization service"), interlinks on comparison and TMB vs PostScan pages.

## Data notes (2026-11-21)
- legalzoom.com and usestable.com/usglobalmail.com/postscanmail.com fetch fine with curl; travelingmailbox.com, ipostal1.com and help.earthclassmail.com return 403 to curl (use WebFetch).
- Stable monthly prices ($59/$99) are in embedded JSON on the pricing page; static text shows yearly ($49/$83).
- USGM storage: packages $0.10/day now, "$0.10 per lb per day from January 1, 2027" (recheck after Jan 1).

## Done (2026-11-22)
- [x] /virtual-mailbox-for-bank-account/ (queue #12). Sources: 31 CFR 1020.220 (eCFR), Mercury company-address and eligibility help articles, Stable "using your Stable address with Mercury", USGM address-use article, VPM pricing/TruLease/TruResidence, DMM 508.1.8. Only Mercury publishes field-by-field rules; no other bank-specific claims made.
- [x] /virtual-mailbox-vs-po-box/ (queue #14). Sources: USPS Notice 123 (effective Oct 4, 2026) PO Box tables, DMM 508.4 (sizes, Form 1093, street addressing, refunds, Group E), IRS SS-4 instructions, TX SOS FAQ.
- [x] /postscan-mail-pricing/ (queue #15). Pricing page has 11 location tiers (Starter $10-$45 monthly, $100-$450/yr); page and FAQ disagree on mail-storage free days (page: 14 monthly / 30 annual; FAQ: 30). PostScan registered agent page lists states but no price.
- [x] /traveling-mailbox-pricing/ (queue #16). TMB plan cards show rollover on all plans; footnote says Extended+ only (page states both). No annual dollar price shown ("2 months free").
- [x] /virtual-post-mail-pricing/ (queue #32, pulled forward: approved affiliate). Prices are in astro-island JSON props on /virtual-mailbox/pricing/ (not in static text). Free RA only in CA, NV, DE, FL, TX.
- [~] Queue #13 "Virtual address vs registered agent": SKIPPED as a near-duplicate of /virtual-mailbox-for-llc/ (already covers registered office vs mailing address and RA bundles). Added a Virtual Post Mail free-RA row to that page instead.
- Also updated: homepage cards, comparison/TMB-vs-PostScan/LLC interlinks.

## Data notes (2026-11-22)
- virtualpostmail.com, postscanmail.com, usestable.com, legalzoom.com fetch fine with curl; support.mercury.com returns 403 to curl (WebFetch works); travelingmailbox.com and ipostal1.com still need WebFetch.
- Stable registered agent: $25/mo per state, Stable plan required (pricing page). iPostal1 RA: $99/yr with any business plan (VMA page lists 26 jurisdictions).
- VPM says its mailbox "is not a physical address" and "won't work for banking"; TruLease $400-$700/mo, TruResidence $300-$600/mo.

## Done (2026-11-23; all five live-verified HTTP 200 on mailboxatlas.com)
- [x] /cheapest-virtual-mailbox-by-state/ (queue #17-#20 merged into one page instead of four state pages that would only swap the state name). Every Anytime Mailbox location card in TX, FL, DE, WY, CA, NY parsed (research/2026-11-23/atm_6states_2026-11-23.csv); legal notes from TX SOS FAQ, W.S. 17-28-101, 6 Del. C. 18-104, FL 605.0113/0201, CA SOS FAQ. No NY legal claim (dos.ny.gov 403); no Texas income-tax claim made.
- [x] /opus-virtual-offices-vs-davinci/ (queue #21). Opus mail forwarding fee not published (dash). Davinci NYC not used (static HTML shows only part of the 80 listings).
- [x] /virtual-office-vs-virtual-mailbox/ (queue #22).
- [x] /virtual-mailbox-forwarding-fees/ (queue #23).
- [x] /virtual-mailbox-storage-fees/ (queue #24 + #26 merged: package and letter storage on one page). VPM after-free-period fee not published (dash).
- Also updated: homepage cards, Related links on the comparison, cheapest and LLC pages.

## Data notes (2026-11-23)
- opusvirtualoffices.com and davincivirtual.com fetch fine with curl; opus /virtual-offices/pricing is a 404. Davinci city pages list each building with "$N/mo + Discounted setup fee".
- USGM storage help article moved to /articles/11328326 (old 11022343 is 404).
- PostScan Mail FAQ: on cancellation, stored mail is discarded and new mail held 6 months, then returned to sender (useful for #35/#48).

## Done (2026-11-24; all five live-verified HTTP 200 on mailboxatlas.com)
- [x] /hipaa-compliant-virtual-mailbox/ (queue #25). BAA offers: VPM Business+ ($60/$90), PostScan add-on ($25/mo billed annually + $0.50/item), Stable (on request; listed on Custom), USGM (Enterprise only). HHS conduit FAQ for the "why". TMB/iPostal1/Anytime/LegalZoom pricing pages don't mention HIPAA (stated as such, no compliance claim).
- [x] /virtual-mailbox-junk-mail/ (queue #27). Junk excluded at TMB (mark as junk), Stable, LegalZoom, VPM (obvious junk), iPostal1 (most locations); USGM has no piece limit; PostScan counts junk. Anytime: no central rule (omitted from table, noted). CFPB OptOutPrescreen; DMAchoice fee not used (JS-only page).
- [x] /change-address-to-virtual-mailbox/ (queue #28). usps.com forward page ($1.25 online ID fee, temp 15 days-1 yr, permanent 12 mo + Extended), DMM 507 temporary rules, PS 1583 agreement (no COA on termination), DMM 508.1.8 remail, IRS 8822/8822-B, provider COA FAQs.
- [x] /form-1583-for-business/ (queue #29). PS 1583 footnotes (officer signs with title, item 7 fields, place of registration, item 12 members), USGM business-name rules, extra-name fees by provider.
- [x] /form-1583-rejected/ (queue #30). DMM 508.1.8 (deny on mismatch, current IDs, illegible = non-compliant, altered forms invalid), DMM 608.10.5, USGM troubleshooting articles, Stable API docs, ECM/PostScan ID rules, iPostal1 review time.
- Also updated: homepage cards; links from Form 1583, LLC, price comparison and storage pages. gh-pages rebuild also published the state pages' single-BreadcrumbList fix that was on main but not yet deployed.

## Data notes (2026-11-24)
- US Global Mail added an Occasional plan: $25/mo, or $21 billed annually (5 recipients, $2 per scan). Pages that call $65/$49 USGM's cheapest plan (us-global-mail-vs-traveling-mailbox, chooser, comparison) need a refresh.
- hhs.gov returns 403 to curl (WebFetch works). dmachoice.org fee isn't in static HTML.
- Deploy method: GitHub MCP push_files, max 4 files per call (gh CLI is not logged in on the box).

## Done (2026-11-25)
- [x] /ipostal1-vs-traveling-mailbox/ (queue #33). Break-even at 3 opened letters/mo at a Standard iPostal1 address ($9.99 + 3 x $2.25 = $16.74 vs TMB $15). TMB in-person pickup not stated on TMB pages (dash).
- [x] /anytime-mailbox-vs-postscan-mail/ (queue #34). 5 Anytime location pages re-read (unchanged vs 11-20); PostScan prices unchanged vs 11-22; PostScan online notary partners $20 (FAQ).
- [x] /cancel-virtual-mailbox/ (queue #35 + #48 merged). DMM 508.1.8 termination/remail rules + policies for USGM, VPM, TMB, iPostal1, Anytime, PostScan, Stable, ECM.
- [x] /how-to-write-virtual-mailbox-address/ (queue #38). DMM 508.1.8 formats, Pub 28 s.285/s.213; provider address formats (USGM "Suite", iPostal1, Anytime "Unit #").
- [x] /virtual-mailbox-in-person-pickup/ (queue #49). USGM fees ($5 letters; $15 + $1/lb packages), iPostal1, Anytime, PostScan; Stable and VPM no pickup.
- [~] Queue #42 SKIPPED: near-duplicate of /virtual-mailbox-for-rvers/ (PFS $26.40 + $29.70/wk, yearly total) and /virtual-mailbox-forwarding-fees/.
- [~] Queue #50 SKIPPED: near-duplicate of /form-1583-for-business/ (extra-name fees by provider table).
- Also updated: homepage cards; Related/More links on comparison, iPostal1/TMB/PostScan/Anytime pricing, storage, change-of-address, bank, TMB vs PostScan pages.

## Data notes (2026-11-25)
- push via GitHub MCP push_files (git on box has no push credentials). Batches of 4 files.
- Anytime "Full Details" (pickup fee, overage) loads via JS (thShowFullServicePlan); not in static HTML.
- Stable support article 8292017 mentions a "$29.50/month" plan; not used (may be outdated vs pricing page).
- VPM custom pricing details page: $20 service fee + postage to ship mail after a mailbox is closed (not used on page; conflicts with VPM no-remail article).

## Next (ranked)
1. ~~iPostal1 vs Anytime Mailbox~~ DONE 2026-11-20 (both from $9.99; location-set pricing)
2. ~~iPostal1 pricing explained~~ DONE 2026-11-20: what the $9.99 plan includes, by location
3. ~~Anytime Mailbox pricing~~ DONE 2026-11-20: why it ranges from $4.99 to $50
4. ~~Best virtual mailbox for an LLC~~ DONE 2026-11-20 (address use for state filing, bank, IRS)
5. ~~Virtual mailbox that doesn't require notarization~~ SKIPPED (duplicate of Form 1583 page) (Traveling Mailbox, Stable, USGM, ECM self-verify)
6. ~~Earth Class Mail (LegalZoom Virtual Mail) pricing and what changed~~ DONE 2026-11-21
7. ~~Stable vs Earth Class Mail for startups~~ DONE 2026-11-21
8. ~~US Global Mail vs Traveling Mailbox~~ DONE 2026-11-21
9. ~~Virtual mailbox with free check deposit~~ DONE 2026-11-20 (USGM free, Stable $3, TMB $4.95, ECM $39/mo)
10. ~~Best virtual mailbox for RVers and full-time travelers~~ DONE 2026-11-21 (/virtual-mailbox-for-rvers/)
11. ~~Virtual mailbox for digital nomads / expats living abroad (Form 1583 without a US address)~~ DONE 2026-11-21 (/virtual-mailbox-from-abroad/)
12. ~~Can I use a virtual mailbox for my bank account?~~ DONE 2026-11-22 (/virtual-mailbox-for-bank-account/)
13. ~~Virtual address vs registered agent~~ SKIPPED 2026-11-22 (near-duplicate of /virtual-mailbox-for-llc/; VPM row added there)
14. ~~Virtual mailbox vs USPS P.O. Box~~ DONE 2026-11-22 (/virtual-mailbox-vs-po-box/)
15. ~~PostScan Mail pricing~~ DONE 2026-11-22 (/postscan-mail-pricing/)
16. ~~Traveling Mailbox pricing~~ DONE 2026-11-22 (/traveling-mailbox-pricing/)
17. ~~Cheapest virtual mailbox in Texas~~ DONE 2026-11-23 (merged into /cheapest-virtual-mailbox-by-state/)
18. ~~Cheapest virtual mailbox in Florida~~ DONE 2026-11-23 (merged into /cheapest-virtual-mailbox-by-state/)
19. ~~Cheapest virtual mailbox in Delaware / Wyoming~~ DONE 2026-11-23 (merged into /cheapest-virtual-mailbox-by-state/)
20. ~~Cheapest virtual mailbox in California / New York~~ DONE 2026-11-23 (merged into /cheapest-virtual-mailbox-by-state/); do not build separate state pages
21. ~~Opus Virtual Offices vs Davinci Virtual~~ DONE 2026-11-23 (/opus-virtual-offices-vs-davinci/)
22. ~~Virtual office vs virtual mailbox~~ DONE 2026-11-23 (/virtual-office-vs-virtual-mailbox/)
23. ~~Mail forwarding cost comparison~~ DONE 2026-11-23 (/virtual-mailbox-forwarding-fees/)
24. ~~Package forwarding and storage fees compared~~ DONE 2026-11-23 (merged into /virtual-mailbox-storage-fees/ and /virtual-mailbox-forwarding-fees/)
25. ~~Virtual mailbox with HIPAA compliance~~ DONE 2026-11-24 (/hipaa-compliant-virtual-mailbox/)
26. ~~How long virtual mailboxes keep your physical mail~~ DONE 2026-11-23 (/virtual-mailbox-storage-fees/)
27. ~~Virtual mailbox junk-mail rules~~ DONE 2026-11-24 (/virtual-mailbox-junk-mail/)
28. ~~How to change your address to a virtual mailbox~~ DONE 2026-11-24 (/change-address-to-virtual-mailbox/)
29. ~~Form 1583 for a business~~ DONE 2026-11-24 (/form-1583-for-business/)
30. ~~Form 1583 rejected: common reasons and fixes~~ DONE 2026-11-24 (/form-1583-rejected/)
31. Virtual mailbox for Amazon seller / Stripe verification (CMRA rejection risk)
32. ~~Virtual Post Mail pricing~~ DONE 2026-11-22 (/virtual-post-mail-pricing/)
33. ~~iPostal1 vs Traveling Mailbox~~ DONE 2026-11-25 (/ipostal1-vs-traveling-mailbox/)
34. ~~Anytime Mailbox vs PostScan Mail~~ DONE 2026-11-25 (/anytime-mailbox-vs-postscan-mail/)
35. ~~How to cancel a virtual mailbox and what happens to mail after~~ DONE 2026-11-25 (/cancel-virtual-mailbox/, merged with #48) (note: /virtual-mailbox-storage-fees/ has a short "When you cancel" section with DMM 508.1.8; build this as the full provider-by-provider cancellation guide, merge with #48)
36. Virtual mailbox for a nonprofit or church
37. Can I use a virtual mailbox address on my driver's license? (state DMV rules on CMRA/PMB addresses)
38. ~~How to write a virtual mailbox address correctly~~ DONE 2026-11-25 (/how-to-write-virtual-mailbox-address/) (PMB vs # vs Suite, USPS addressing rules)
39. Does a virtual mailbox address change your state tax residency? (official state residency/domicile guidance only)
40. ~~Earth Class Mail check deposit subscription vs per-check~~ MERGED into /earth-class-mail-pricing/ and /virtual-mailbox-check-deposit-fees/ (2026-11-21); do not build separately
41. South Dakota mail-forwarding addresses for full-timers: what SD DPS accepts, provider by provider (needs SD DPS confirmation of "virtual only" vs "mail forwarding"; official sources only)
42. ~~USPS Premium Forwarding vs a virtual mailbox~~ SKIPPED 2026-11-25 (covered by /virtual-mailbox-for-rvers/ and /virtual-mailbox-forwarding-fees/) for a 3-to-12-month trip: cost by trip length (usps.com PFS fees vs provider plans)
43. Texas and Florida driver's license rules for mail-forwarding (PMB) addresses (official DPS/FLHSMV pages only)
44. LegalZoom Virtual Mail vs Stable registered agent + mailbox bundles (needs LegalZoom RA price from its own page)
45. iPostal1 registered agent ($99/yr) vs Stable ($25/mo) vs VPM (free): which states each covers and the yearly cost (provider pages only)
46. TruLease vs a coworking membership for a business bank address: what VPM's lease includes (VPM pages only; no bank-outcome claims)
47. Virtual mailbox for receiving debit and credit cards: forwarding and pickup rules by provider
48. ~~Mail storage after cancellation~~ DONE 2026-11-25 (merged into /cancel-virtual-mailbox/): what each provider does for 6 months (CMRA rule, provider FAQs)
49. ~~Virtual mailbox with in-person pickup~~ DONE 2026-11-25 (/virtual-mailbox-in-person-pickup/): which providers allow it, pickup fees, and ID rules (provider pages only)
50. ~~Extra recipients and business names on a virtual mailbox~~ SKIPPED 2026-11-25 (covered by /form-1583-for-business/): included names and per-name fees by provider (each name needs its own Form 1583)
51. Can I use a virtual mailbox for a Google Business Profile? (Google's own Business Profile guidelines on virtual offices/mailboxes; provider FAQs, e.g. Anytime says Google "may not recognize the address")
52. Receiving Amazon, UPS and FedEx packages at a virtual mailbox: carrier acceptance, package fees and size limits by provider (provider pages only)
53. Can I register to vote or get jury mail at a virtual mailbox address? (official state election office pages only; pick states with clear published rules)
54. Monthly vs annual billing: what each provider's yearly plan actually saves (provider pricing pages)
55. Refund windows and money-back guarantees by provider (30-day rules, "if unused" conditions, annual-plan refunds). Note: /cancel-virtual-mailbox/ already has a short refund list for 6 providers; build only if it adds real depth (trials, prorating, add-on refunds)
56. How long Form 1583 approval takes at each provider (provider help pages; USPS CMRA database rules)
57. Shopping U.S. stores from abroad: international package forwarding fees and consolidation by provider (USGM, iPostal1, TMB, Stable)
58. Virtual mailbox for a trust or estate: Form 1583 for trust names and what providers require (PS 1583, USGM trust-name rules)
