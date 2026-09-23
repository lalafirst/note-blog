# note

Minimal note/blog template inspired by the quiet, personal-site feel of
favourite.design/notes and 8-2.life. Built with Astro — plain markdown files
in, static HTML out, no database, no platform lock-in.

## Writing a new post

Add a markdown file to `src/content/notes/`, named however you like
(e.g. `2026-09-20-whatever.md`):

```markdown
---
title: タイトル（省略可）
date: 2026-09-20
---

本文をここに書く。
```

- `title` is optional — leave it out for an untitled, diary-style entry.
- `date` controls sort order on the homepage.
- Add `draft: true` to keep a post out of the list and the build without
  deleting it.

## Adding images

Put the image file in `public/images/`, then reference it in the markdown
with a normal image tag:

```markdown
![説明文](/images/photo.jpg)
```

## Writing from a phone

There's no app to install — this is just files in a GitHub repo, so any way
of editing a file on GitHub works:

- **GitHub's own app/website** (easiest): open the repo in the GitHub app
  (or github.com in a mobile browser) → `src/content/notes` → "Add file" →
  "Create new file" → paste the frontmatter + text → commit. Vercel
  redeploys automatically in under a minute.
- **Adding a photo from your phone**: in the repo on github.com → `public/images`
  → "Add file" → "Upload files" → pick the photo from your camera roll →
  commit. Then reference it from a post as `/images/that-filename.jpg`.
- If you want a nicer writing experience than GitHub's own editor, an app
  like **Working Copy** (iOS) or **Obsidian + Git sync** can edit the same
  repo with better markdown editing and inline image drag-and-drop — but
  neither is required, the GitHub app alone is enough to publish.

## Local development

```bash
npm install
npm run dev
```

Opens at http://localhost:4321.

## Deploying

See `DEPLOY.md` for the full walkthrough (GitHub + Vercel, free, with your
own custom domain).
