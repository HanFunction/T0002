# Copilot Instructions

This is a public DoRms community linktree template, not the DoRms production app.

Before customizing, ask the user for (required):

- Display name, for example `DoRms 교사 OOO`
- Intro sentence
- DoRms community activity links for the top required tab
- External links and grouped inner links
- Preferred color mood
- Preferred icons from `public/icons`

Then ask if they want any of these optional features, and skip whichever they don't want:

- Profile intro sections (bio text, activity list, contact)
- Board tab (app/post links with date and optional preview image)
- Episode/webtoon-style tab (`src/config/miyotoon.ts`), only if episode images already exist under `public/assets/`
- Photo gallery
- "Wave" quick-link list (bottom-left)
- Mini-homepage BGM player (YouTube video id plus per-track start times)
- Seed guestbook entries
- Real guestbook posting and live visit counting via Firebase (the user must create the Firebase project and fill `.env.local`; do not attempt to create Firebase projects or issue keys yourself)

Keep the first card as `도름스 커뮤니티 나의 활동` and keep `/assets/dorms-community.png` as its image. Do not add private DoRms service assets, private credentials, API code, auth code, database code, or product-specific images.

Prefer editing `src/config/linktree.ts` and `src/config/theme.ts` (and `src/config/miyotoon.ts` only if the episode tab is used). Run `npm run build` after changes.
