# COOKING BLOCK SITE PACKAGE v1 (2026-08-28)
Upload-ready. All seven pre-cutover fixes applied and machine-verified.

## HOW TO UPLOAD (GitHub web, no terminal)
1. In your new repo: **Add file → Upload files**.
2. Drag EVERYTHING inside this folder in — the html files, plus the `assets` and `book` folders and the xml/txt files. Commit.
3. Repo **Settings → Pages → Source: Deploy from a branch → main → / (root) → Save.**
4. The site appears at the URL Pages shows you within a couple of minutes. That's your first preview — before Cloudflare, before anything.

## THREE PLACEHOLDERS (staging works without them; launch does not)
| Placeholder | Where | Swap with |
|---|---|---|
| `YOUR_FORM_ID` | become-a-client.html, bistro.html, exchange.html (one each) | Your Formspree form ID (free account, 10 min) — forms deliver to your inbox the moment it's in |
| `G-MEASUREMENT_ID` | every page (in the guarded GA script) | Your GA4 Measurement ID (Analytics → Admin → Data streams) |
| Checkfront URL | `book/index.html` (three spots, loudly marked) | The direct Checkfront booking link — REQUIRED before cutover; fine as-is during staging |

## WHAT WAS FIXED (vs. the draft pages)
1. "Request to become a client" now goes to the application form, not the footer.
2. Booking button goes to `/book/`, which survives cutover (see placeholder above).
3. All three forms submit for real (Formspree) — fake popup handlers removed; spam honeypot + email subjects added.
4. Every header's Contact goes to contact.html.
5. Real Google Map on the contact page.
6. exchange.html now links to both craft pages; sitemap.xml + robots.txt added.
7. Photo placeholders restyled as brand blocks (shot-list captions preserved inside the files as comments/hidden text). Board pages excluded.
Plus: `noindex` on every page until launch (marked REMOVE-AT-CUTOVER) and a hostname-guarded GA tag so staging never pollutes analytics.
