# Charlie Stasiuk – Web Design

Personal site and blog for Charlie Stasiuk, a web designer and UI builder in Burlington, Ontario. It's plain HTML, CSS and JavaScript built on the **Edina** design system, with no build step.

## Structure

```
index.html                 Home: hero, about, services, latest posts, contact
blog/index.html            All posts
blog/<post>.html           One file per post
css/style.css, plugins.css Edina design system (unchanged)
css/custom.css             Site overrides, blog + article styles
js/init.js                 Edina behaviour (menu, service popups, contact form, reading bar)
img/me/                    Photos (headshot.webp, hero.png)
img/svg/                   Edina icons
```

## Preview locally

The Edina icons are loaded over HTTP, so use a local server rather than opening the file directly:

```
python3 -m http.server 8000
# open http://localhost:8000
```

## Add a blog post

1. Copy an existing post in `blog/` and give the copy a new name, e.g. `blog/my-new-post.html`.
2. Update these parts of the copy: `<title>`, the `description`/`og:` meta tags, the JSON-LD block, the date (`<time datetime="YYYY-MM-DD">`), the category, the `<h1>`, the cover text, and the body inside `<div class="post_body">`.
3. Add a card for the post to the top of the list in `blog/index.html`. Update the three cards in the **Blog preview** section of `index.html` so they show the latest three posts.
4. Update the prev/next links at the bottom of the neighbouring posts.

Article body building blocks: `<p class="bigger">` for the intro, `<h2>`/`<h3>`, `<ul>`/`<ol>` (numbered steps), and `<div class="quotebox"><p>…</p></div>` for pull quotes.

Cover styles: `cover--photo`, `cover--process` (dark) and `cover--pricing` (grid). Each is defined in `css/custom.css`, and you can add more there.

## Contact form

The form uses **Netlify Forms**. There's no backend to run, and submissions are stored in the Netlify dashboard. One-time setup after the first deploy:

1. In Netlify, go to **Forms → Enable form detection**, then redeploy (drag the folder in again).
2. Go to **Forms → Form notifications → Add notification → Email notification** and enter charliecolestasiuk@gmail.com.
3. Send a test message from the live site. It should appear under **Forms → contact** and in your inbox.

The free tier covers 100 submissions a month. Spam is caught by Netlify's filter and a hidden honeypot field.

## Deploy

- **Netlify Drop (no account setup needed):** copy the site files into a folder, leaving out `README.md` and the template zip, then drag that folder onto https://app.netlify.com/drop. `netlify.toml` sets the cache and security headers, and `404.html` is picked up automatically.
- **Netlify from Git:** connect this repo. There's no build command, and the publish directory is `.` (already set in `netlify.toml`).
- **GitHub Pages:** go to Settings → Pages and deploy from the branch root.

## Still to add

- Portfolio and testimonials are left out until there's real work and real client quotes to show. The Edina template has ready-made sections for both.
