// Renders each slide in post.html to slide-N.png at 1080x1350.
// Usage: node render.js   (needs Playwright: npm i -g playwright)
const path = require('path');
const { execSync } = require('child_process');

let playwright;
try {
  playwright = require('playwright');
} catch {
  playwright = require(path.join(execSync('npm root -g').toString().trim(), 'playwright'));
}

(async () => {
  const browser = await playwright.chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 1400 }, deviceScaleFactor: 1 });
  await page.goto('file://' + path.join(__dirname, 'post.html'));
  await page.evaluate(() => document.fonts.ready);

  const slides = await page.$$('.slide');
  for (let i = 0; i < slides.length; i++) {
    const out = path.join(__dirname, `slide-${i + 1}.png`);
    await slides[i].screenshot({ path: out });
    console.log('wrote', path.basename(out));
  }
  await browser.close();
})();
