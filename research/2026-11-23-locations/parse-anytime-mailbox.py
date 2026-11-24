import re,json,glob,os,statistics
from bs4 import BeautifulSoup
NAMES={'dc':'District of Columbia','puerto-rico':'Puerto Rico'}
rows=[];summary={}
for f in sorted(glob.glob('st/*.html')):
  slug=os.path.basename(f)[:-5]
  s=BeautifulSoup(open(f,encoding='utf-8'),'html.parser')
  h1=s.find('h1'); title=h1.get_text(strip=True) if h1 else ''
  cnt=s.select_one('.location-count-display'); cnt=cnt.get_text(strip=True) if cnt else ''
  items=s.select('.theme-location-item')
  name=NAMES.get(slug, title.replace('Virtual Mailbox in','').strip() or slug)
  for it in items:
    t=it.select_one('.t-title').get_text(' ',strip=True)
    pr=it.select_one('.t-price').get_text(' ',strip=True)
    m=re.search(r'US\$\s*([\d,]+(?:\.\d+)?)\s*/\s*(\w+)',pr)
    price=float(m[1].replace(',','')) if m else None; per=m[2] if m else None
    addr_el=it.select_one('.t-addr'); lines=[x.strip() for x in addr_el.get_text('\n').split('\n') if x.strip()]
    a=it.select_one('a[href^="/s/"]'); url='https://www.anytimemailbox.com'+a['href'] if a else None
    badges=[i.get('title') for i in it.select('.t-flags img[title]')]
    badge=sorted(set(b for b in badges if b))
    cityline=lines[-1] if lines else ''
    mm=re.match(r'(.+),\s*([A-Z]{2})\s+(\d{5}(?:-\d{4})?)$',cityline)
    rows.append(dict(state=name,state_slug=slug,location=t,street=', '.join(lines[:-1]),city=mm[1] if mm else None,state_code=mm[2] if mm else None,zip=mm[3] if mm else None,address=', '.join(lines),starting_price_usd=price,per=per,badges=badge,url=url,source_url=f'https://www.anytimemailbox.com/l/usa/{slug}',last_checked='2026-11-23'))
  summary[slug]=dict(name=name,count_text=cnt,items=len(items))
json.dump(rows,open('atm-locations.json','w'),indent=1)
print(len(rows))
for k,v in summary.items(): print(k,v)
print(sum(1 for r in rows if r['city'] is None), [r['address'] for r in rows if r['city'] is None][:10])
print(sorted(set(b for r in rows for b in r['badges'])))
print(set(r['per'] for r in rows))
