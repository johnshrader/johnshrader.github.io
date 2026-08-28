# LAUNCH CHECKLIST — do in order, none before its time
STAGING PHASE (now)
[ ] Upload package to repo; Pages on; preview loads
[ ] Formspree ID in (3 pages) → submit each form for real, watch all fields land in the inbox
[ ] Cloudflare set up per the 8-step walkthrough (MX verification is THE careful step)
[ ] staging.cookingblock.com CNAME + Cloudflare Access gate
[ ] John hammers: every form end-to-end · /book hop lands in Checkfront (old-site path OK for now) · every nav · phone links · on mobile
BEFORE CUTOVER (only on John's explicit go)
[ ] Swap Checkfront direct URL into book/index.html (3 spots) — MANDATORY, loops otherwise
[ ] GA Measurement ID in (all pages)
[ ] Remove the noindex line from every page (marked REMOVE-AT-CUTOVER)
[ ] Decide: do exchange-catering / exchange-raw-honey ship day one? Only if real profiles fill the sample cards; otherwise pull both files AND their sitemap lines AND the two links on exchange.html
[ ] Photos in as they arrive (shot-list captions are in the files)
CUTOVER
[ ] One Cloudflare flip: apex/www → Pages · verify live · Wix stays paid N weeks for rollback
