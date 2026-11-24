import rows from '../data/anytime-mailbox-locations.json';
export const SITE = 'https://mailboxatlas.com';
export const CHECKED = '2026-11-23';
export const CHECKED_TEXT = 'November 23, 2026';
export const MIN_PAGE = 4; // states with fewer listed locations stay on the hub table only
export const money = (n) => (n == null ? '—' : `$${n % 1 === 0 ? n.toFixed(0) : n.toFixed(2)}`);
export const priceText = (r) => (r.starting_price_usd == null ? '—' : `${money(r.starting_price_usd)}/${r.per === 'year' ? 'yr' : 'mo'}`);
function median(a) { const s = [...a].sort((x, y) => x - y); const m = Math.floor(s.length / 2); return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; }
const byState = new Map();
for (const r of rows) { if (!byState.has(r.state_slug)) byState.set(r.state_slug, []); byState.get(r.state_slug).push(r); }
export const states = [...byState.entries()].map(([slug, list]) => {
  const monthly = list.filter((r) => r.per === 'month' && r.starting_price_usd != null);
  const prices = monthly.map((r) => r.starting_price_usd);
  const min = prices.length ? Math.min(...prices) : null;
  const max = prices.length ? Math.max(...prices) : null;
  const cityMap = new Map();
  for (const r of list) { const c = r.city || r.location; if (!cityMap.has(c)) cityMap.set(c, []); cityMap.get(c).push(r); }
  const cities = [...cityMap.entries()].map(([name, l]) => {
    const p = l.filter((r) => r.per === 'month').map((r) => r.starting_price_usd);
    return { name, list: l.sort((a, b) => (a.starting_price_usd ?? 1e9) - (b.starting_price_usd ?? 1e9)), count: l.length, min: p.length ? Math.min(...p) : null, max: p.length ? Math.max(...p) : null };
  }).sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
  return {
    slug, name: list[0].state, code: list[0].state_code, list, count: list.length, cities,
    min, max, median: prices.length ? median(prices) : null,
    cheapest: monthly.filter((r) => r.starting_price_usd === min),
    yearlyOnly: list.filter((r) => r.per === 'year').length,
    topRated: list.filter((r) => r.top_rated).length,
    under10: monthly.filter((r) => r.starting_price_usd < 10).length,
    source: list[0].source_url,
  };
}).sort((a, b) => a.name.localeCompare(b.name));
export const pageStates = states.filter((s) => s.count >= MIN_PAGE);
export const total = rows.length;
// Virtual Post Mail business-address cities (VPM pricing data, checked 2026-11-23).
export const VPM = { texas: 'Keller', florida: 'Brandon', delaware: 'Claymont', california: 'Covina', nevada: 'Henderson' };
// States with a hand-written section on /cheapest-virtual-mailbox-by-state/.
export const CHEAPEST_PAGE = new Set(['texas', 'florida', 'delaware', 'wyoming', 'california', 'new-york']);
