import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const dist = path.join(root, 'dist')

// Keep in sync with src/constants/seo.ts (SPONSORS_SEO / PROGRAM_SEO / SITE_URL)
const SITE_URL = 'https://www.tedxsavskivenac.com'
const SITE_NAME = 'TEDxSavskiVenac'
const SPONSORS = {
  title: 'Sponzorstvo i partnerstvo — TEDxSavskiVenac 2026 | TEDx Beograd',
  description:
    'Postanite partner TEDxSavskiVenac 2026 u Beogradu. Sponsorship packages from €200, in-kind partnerstvo, and access to 100 decision-makers at Startit Center.',
  keywords: [
    'TEDxSavskiVenac sponsorship',
    'TEDx sponzorstvo',
    'TEDx partnerstvo',
    'TEDx partner',
    'TEDx Beograd',
    'Belgrade event sponsorship',
    'TEDx sponsorship packages',
    'IT Connect Belgrade',
  ].join(', '),
  url: `${SITE_URL}/sponsors`,
  ogImage: `${SITE_URL}/og-image.png`,
  slug: 'sponsors',
}
const PROGRAM = {
  title: 'Program — TEDxSavskiVenac 2026 | TEDx Beograd',
  description:
    'Program TEDxSavskiVenac 2026: October 10, Startit Center, Beograd. Three sessions, nine TEDx talks, speaker corners, quiz and networking — 13:00 to 19:00.',
  keywords: [
    'TEDxSavskiVenac program',
    'TEDxSavskiVenac schedule',
    'TEDx Beograd program',
    'TEDx Belgrade speakers',
    'TEDx talks Beograd',
    'Startit Center',
    'Small Shifts Big Impact',
  ].join(', '),
  url: `${SITE_URL}/program`,
  ogImage: `${SITE_URL}/og-image.png`,
  slug: 'program',
}

function escapeAttr(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function replaceMetaByName(html, name, content) {
  const re = new RegExp(
    `(<meta\\s+name="${name}"\\s+content=")[^"]*(")`,
    'i',
  )
  if (!re.test(html)) {
    throw new Error(`Missing meta name="${name}" in built index.html`)
  }
  return html.replace(re, `$1${escapeAttr(content)}$2`)
}

function replaceMetaByProperty(html, property, content) {
  const re = new RegExp(
    `(<meta\\s+property="${property}"\\s+content=")[^"]*(")`,
    'i',
  )
  if (!re.test(html)) {
    throw new Error(`Missing meta property="${property}" in built index.html`)
  }
  return html.replace(re, `$1${escapeAttr(content)}$2`)
}

function replaceCanonical(html, href) {
  const re = /(<link\s+rel="canonical"\s+href=")[^"]*(")/i
  if (!re.test(html)) {
    throw new Error('Missing canonical link in built index.html')
  }
  return html.replace(re, `$1${escapeAttr(href)}$2`)
}

function replaceTitle(html, title) {
  const re = /<title>[^<]*<\/title>/i
  if (!re.test(html)) {
    throw new Error('Missing <title> in built index.html')
  }
  return html.replace(re, `<title>${title}</title>`)
}

function injectCrawlableBody(html, page) {
  const fallback = [
    '<div id="root">',
    `<div class="app-shell" data-prerender="${page.slug}">`,
    '<main>',
    `<h1>${page.title}</h1>`,
    `<p>${page.description}</p>`,
    `<p><a href="${SITE_URL}">${SITE_NAME}</a> · Startit Center, Beograd</p>`,
    '</main>',
    '</div>',
    '</div>',
  ].join('')

  const re = /<div id="root"><\/div>/i
  if (!re.test(html)) {
    // Vite may minify or already expand root — force a known empty root shell
    return html.replace(
      /<div id="root"[^>]*>[\s\S]*?<\/div>\s*(?=<script)/i,
      `${fallback}\n    `,
    )
  }
  return html.replace(re, fallback)
}

function buildPageHtml(homeHtml, page) {
  let html = homeHtml
  html = replaceTitle(html, page.title)
  html = replaceMetaByName(html, 'description', page.description)
  html = replaceMetaByName(html, 'keywords', page.keywords)
  html = replaceCanonical(html, page.url)
  html = replaceMetaByProperty(html, 'og:title', page.title)
  html = replaceMetaByProperty(html, 'og:description', page.description)
  html = replaceMetaByProperty(html, 'og:url', page.url)
  html = replaceMetaByProperty(html, 'og:image', page.ogImage)
  html = replaceMetaByName(html, 'twitter:title', page.title)
  html = replaceMetaByName(html, 'twitter:description', page.description)
  html = replaceMetaByName(html, 'twitter:image', page.ogImage)
  html = injectCrawlableBody(html, page)
  return html
}

async function main() {
  const homeHtml = await readFile(path.join(dist, 'index.html'), 'utf8')

  for (const page of [SPONSORS, PROGRAM]) {
    const pagePath = path.join(dist, page.slug, 'index.html')
    await mkdir(path.dirname(pagePath), { recursive: true })
    await writeFile(pagePath, buildPageHtml(homeHtml, page))
    console.log(`Prerendered /${page.slug} → ${path.relative(root, pagePath)} (static, no browser)`)
  }
}

main().catch((error) => {
  console.error('Prerender failed:', error)
  process.exitCode = 1
})
