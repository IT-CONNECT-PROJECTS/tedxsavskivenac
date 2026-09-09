import { spawn } from 'node:child_process'
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import puppeteer from 'puppeteer'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const dist = path.join(root, 'dist')
const port = 4173
const baseUrl = `http://127.0.0.1:${port}`

const routes = [
  {
    path: '/',
    outFile: path.join(dist, 'index.html'),
    titleIncludes: 'Small Shifts, Big Impact',
    titleExcludes: 'Sponzorstvo',
  },
  {
    path: '/sponsors',
    outFile: path.join(dist, 'sponsors', 'index.html'),
    titleIncludes: 'Sponzorstvo',
    titleExcludes: null,
  },
]

function sanitizeHtml(html) {
  // Drop ad pixels injected during the headless visit; keep the site's own gtag snippet.
  return html.replace(
    /<script[^>]*src="https:\/\/googleads\.g\.doubleclick\.net[^"]*"[^>]*><\/script>/gi,
    '',
  )
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function waitForServer(url, attempts = 40) {
  for (let i = 0; i < attempts; i += 1) {
    try {
      const response = await fetch(url)
      if (response.ok || response.status === 404) return
    } catch {
      // retry
    }
    await wait(250)
  }
  throw new Error(`Preview server did not start at ${url}`)
}

async function main() {
  const preview = spawn(
    'npx',
    ['vite', 'preview', '--host', '127.0.0.1', '--port', String(port), '--strictPort'],
    {
      cwd: root,
      stdio: ['ignore', 'pipe', 'pipe'],
      env: { ...process.env, FORCE_COLOR: '0' },
    },
  )

  let previewLog = ''
  preview.stdout.on('data', (chunk) => {
    previewLog += chunk.toString()
  })
  preview.stderr.on('data', (chunk) => {
    previewLog += chunk.toString()
  })

  const shutdown = () => {
    if (!preview.killed) preview.kill('SIGTERM')
  }

  process.on('exit', shutdown)
  process.on('SIGINT', () => {
    shutdown()
    process.exit(1)
  })

  try {
    await waitForServer(baseUrl)
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    })

    try {
      for (const route of routes) {
        const page = await browser.newPage()
        await page.goto(`${baseUrl}${route.path}`, {
          waitUntil: 'networkidle0',
          timeout: 60_000,
        })

        await page.waitForFunction(
          (expected, excluded) => {
            const rootEl = document.getElementById('root')
            const titleOk =
              document.title.includes(expected) &&
              (!excluded || !document.title.includes(excluded))
            return Boolean(rootEl?.childElementCount) && titleOk
          },
          { timeout: 30_000 },
          route.titleIncludes,
          route.titleExcludes,
        )

        // Extra tick so Seo useEffect meta upserts settle
        await wait(300)

        const html = sanitizeHtml(await page.content())
        await mkdir(path.dirname(route.outFile), { recursive: true })
        await writeFile(route.outFile, `<!DOCTYPE html>\n${html}`)
        console.log(`Prerendered ${route.path} → ${path.relative(root, route.outFile)}`)
        await page.close()
      }
    } finally {
      await browser.close()
    }
  } catch (error) {
    console.error('Prerender failed:', error)
    if (previewLog) console.error(previewLog)
    process.exitCode = 1
  } finally {
    shutdown()
  }
}

main()
