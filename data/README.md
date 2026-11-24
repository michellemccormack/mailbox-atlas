# Datasets

| File | Rows | Source | Pages |
| --- | --- | --- | --- |
| `src/data/anytime-mailbox-locations.json` / `anytime-mailbox-locations.csv` | 2,107 locations in 48 states, D.C. and Puerto Rico (North Dakota and West Virginia had none) | Every location card on Anytime Mailbox's state pages (https://www.anytimemailbox.com/l/usa/<state>), checked November 23, 2026. `source_url` is the state page; `url` is the location's own page. | `/virtual-mailbox-addresses/` and `/virtual-mailbox-addresses/<state>/` (states with 4 or more locations) |

Fields: location name, street, city, state code, ZIP, "starting from" price and its period (month or year), whether the card shows the "Top Rated Mailroom Operator" badge, and `last_checked`. Prices are copied as shown; nothing is estimated. `research/2026-11-23-locations/parse-anytime-mailbox.py` is the parser used on the saved state pages.
