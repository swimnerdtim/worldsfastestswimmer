# World's Fastest Swimmer

High-converting landing page for the World's Fastest Swimmer meet in Virginia Beach.

## Event Details

- **Date:** August 29, 2026
- **Location:** Virginia Aquaplex, Virginia Beach, VA
- **Format:** 25m sprints (Fly, Back, Breast, Free)
- **Competition:** Top 8 fastest times advance to finals (cash prizes)

## Live Site

- **GitHub Pages:** https://swimnerdtim.github.io/worldsfastestswimmer/
- **Custom Domain:** worldsfastestswimmer.com (pending DNS setup)

## Development

```bash
npm install
npm run dev
```

## Deployment

Auto-deploys to GitHub Pages on push to main branch.

## Email Signup

Email signups go to Beehiiv via the Swimnerd signup server:
- Endpoint: `https://swimnerd-server-signup.onrender.com/wfs-signup`
- Tags: `utm_source=worldsfastestswimmer`, `utm_campaign=wfs_2026`
- All subscribers added to main Swimnerd newsletter

## TODO

- [x] Wire up Beehiiv email capture API
- [ ] Point worldsfastestswimmer.com DNS to GitHub Pages
- [ ] Add registration link once swimpractice.com product page is ready
- [ ] Add social share meta tags with custom images

## Tech Stack

- React + Vite
- GitHub Pages
- Beehiiv (email list)

Built by Swimnerd.
