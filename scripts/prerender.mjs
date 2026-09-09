import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const dist = path.join(root, 'dist')

// Keep in sync with src/constants/seo.ts (SPONSORS_SEO / SITE_URL)
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
    '<div class="app-shell" data-prerender="sponsors">',
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

function buildSponsorsHtml(homeHtml) {
  let html = homeHtml
  html = replaceTitle(html, SPONSORS.title)
  html = replaceMetaByName(html, 'description', SPONSORS.description)
  html = replaceMetaByName(html, 'keywords', SPONSORS.keywords)
  html = replaceCanonical(html, SPONSORS.url)
  html = replaceMetaByProperty(html, 'og:title', SPONSORS.title)
  html = replaceMetaByProperty(html, 'og:description', SPONSORS.description)
  html = replaceMetaByProperty(html, 'og:url', SPONSORS.url)
  html = replaceMetaByProperty(html, 'og:image', SPONSORS.ogImage)
  html = replaceMetaByName(html, 'twitter:title', SPONSORS.title)
  html = replaceMetaByName(html, 'twitter:description', SPONSORS.description)
  html = replaceMetaByName(html, 'twitter:image', SPONSORS.ogImage)
  html = injectCrawlableBody(html, SPONSORS)
  return html
}

async function main() {
  const homePath = path.join(dist, 'index.html')
  const sponsorsPath = path.join(dist, 'sponsors', 'index.html')

  const homeHtml = await readFile(homePath, 'utf8')
  const sponsorsHtml = buildSponsorsHtml(homeHtml)

  await mkdir(path.dirname(sponsorsPath), { recursive: true })
  await writeFile(sponsorsPath, sponsorsHtml)

  console.log(`Prerendered /sponsors → ${path.relative(root, sponsorsPath)} (static, no browser)`)
}

main().catch((error) => {
  console.error('Prerender failed:', error)
  process.exitCode = 1
})
