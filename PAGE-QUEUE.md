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
17. Cheapest virtual mailbox in Texas (state page, with no-income-tax angle)
18. Cheapest virtual mailbox in Florida
19. Cheapest virtual mailbox in Delaware / Wyoming (LLC states)
20. Cheapest virtual mailbox in California / New York (prestige address pricing)
21. Opus Virtual Offices vs Davinci Virtual: virtual office pricing
22. Virtual office vs virtual mailbox: what the extra $50–$90/mo buys
23. Mail forwarding cost comparison (per shipment vs per item)
24. Package forwarding and storage fees compared
25. Virtual mailbox with HIPAA compliance (PostScan $25/mo, USGM, VPM, Stable BAA)
26. How long virtual mailboxes keep your physical mail (storage fees table)
27. Virtual mailbox junk-mail rules: which count junk toward your limit
28. How to change your address to a virtual mailbox (USPS change of address + 1583)
29. Form 1583 for a business: who signs, which IDs, extra recipients
30. Form 1583 rejected: common reasons and fixes (ECM, PostScan lists)
31. Virtual mailbox for Amazon seller / Stripe verification (CMRA rejection risk)
32. ~~Virtual Post Mail pricing~~ DONE 2026-11-22 (/virtual-post-mail-pricing/)
33. iPostal1 vs Traveling Mailbox
34. Anytime Mailbox vs PostScan Mail
35. How to cancel a virtual mailbox and what happens to mail after
36. Virtual mailbox for a nonprofit or church
37. Can I use a virtual mailbox address on my driver's license? (state DMV rules on CMRA/PMB addresses)
38. How to write a virtual mailbox address correctly (PMB vs # vs Suite, USPS addressing rules)
39. Does a virtual mailbox address change your state tax residency? (official state residency/domicile guidance only)
40. ~~Earth Class Mail check deposit subscription vs per-check~~ MERGED into /earth-class-mail-pricing/ and /virtual-mailbox-check-deposit-fees/ (2026-11-21); do not build separately
41. South Dakota mail-forwarding addresses for full-timers: what SD DPS accepts, provider by provider (needs SD DPS confirmation of "virtual only" vs "mail forwarding"; official sources only)
42. USPS Premium Forwarding vs a virtual mailbox for a 3-to-12-month trip: cost by trip length (usps.com PFS fees vs provider plans)
43. Texas and Florida driver's license rules for mail-forwarding (PMB) addresses (official DPS/FLHSMV pages only)
44. LegalZoom Virtual Mail vs Stable registered agent + mailbox bundles (needs LegalZoom RA price from its own page)
45. iPostal1 registered agent ($99/yr) vs Stable ($25/mo) vs VPM (free): which states each covers and the yearly cost (provider pages only)
46. TruLease vs a coworking membership for a business bank address: what VPM's lease includes (VPM pages only; no bank-outcome claims)
47. Virtual mailbox for receiving debit and credit cards: forwarding and pickup rules by provider
48. Mail storage after cancellation: what each provider does for 6 months (CMRA rule, provider FAQs)
