# Deploying this site

Free hosting via GitHub + Vercel, with your own domain. ~15 minutes the
first time; seconds for every post after that.

## 1. Put the project on GitHub

1. Create a new (empty) repository on GitHub, e.g. `note`.
2. In this project folder:
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/note.git
   git push -u origin main
   ```

## 2. Deploy on Vercel

1. Go to vercel.com and sign in with your GitHub account.
2. "Add New… → Project" → select the `note` repo.
3. Framework preset: Vercel auto-detects **Astro** — leave build settings
   as-is (`npm run build`, output `dist`).
4. Click Deploy. You'll get a live URL like `note-xyz.vercel.app` within
   a minute.

## 3. Add your own domain (optional but recommended)

1. Buy a domain if you don't have one — Namecheap, Google Domains successor
   (Squarespace Domains), or Cloudflare Registrar are all fine, roughly
   ¥1,000–2,000/year for a `.com`/`.life`/`.me` etc.
2. In the Vercel project → Settings → Domains → add your domain.
3. Vercel shows you 1–2 DNS records to add at your domain registrar
   (usually an `A` record or `CNAME`). Add them there.
4. Wait a few minutes to a few hours for DNS to propagate. Vercel issues
   an HTTPS certificate automatically once it verifies the domain.

## 4. Writing and publishing from now on

Every time you want to publish something:

1. Add a new file to `src/content/notes/`.
2. `git add . && git commit -m "new note" && git push`
3. Vercel rebuilds and deploys automatically — live in ~30 seconds.

No CMS, no login screen, no database — just a markdown file and a push.
If you'd rather not touch the terminal for every post, you can also edit
and commit files directly on GitHub.com's web UI ("Add file" button), which
also triggers a Vercel deploy.

## About `site` in astro.config.mjs

Update the `site` value there to your real domain once you have one — it's
used for canonical URLs if you add SEO tags later. Not required for the
site to work.
