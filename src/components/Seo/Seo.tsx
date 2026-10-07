import { useEffect } from 'react'
import {
  PROGRAM_SEO,
  PROGRAM_URL,
  SEO,
  SITE_URL,
  SPONSORS_SEO,
  SPONSORS_URL,
  STRUCTURED_DATA,
} from '@/constants/seo'

const STRUCTURED_DATA_ID = 'tedx-structured-data'

type SeoPage = 'home' | 'sponsors' | 'program'

const PAGE_META = {
  home: { meta: SEO, url: SITE_URL },
  sponsors: { meta: SPONSORS_SEO, url: SPONSORS_URL },
  program: { meta: PROGRAM_SEO, url: PROGRAM_URL },
} as const

type SeoProps = {
  page?: SeoPage
}

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attribute}="${key}"]`
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  const selector = `link[rel="${rel}"]`
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }

  element.setAttribute('href', href)
}

export function Seo({ page = 'home' }: SeoProps) {
  useEffect(() => {
    const { meta, url: pageUrl } = PAGE_META[page]

    document.title = meta.title
    document.documentElement.lang = 'en'

    upsertMeta('name', 'description', meta.description)
    upsertMeta('name', 'keywords', meta.keywords)
    upsertMeta('name', 'author', SEO.author)
    upsertMeta('name', 'robots', 'index, follow')
    upsertMeta('name', 'theme-color', SEO.themeColor)

    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:site_name', SEO.author)
    upsertMeta('property', 'og:title', meta.title)
    upsertMeta('property', 'og:description', meta.description)
    upsertMeta('property', 'og:url', pageUrl)
    upsertMeta('property', 'og:image', meta.ogImage)
    upsertMeta('property', 'og:locale', 'en_US')

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', meta.title)
    upsertMeta('name', 'twitter:description', meta.description)
    upsertMeta('name', 'twitter:image', meta.ogImage)

    upsertLink('canonical', pageUrl)

    let script = document.getElementById(STRUCTURED_DATA_ID)

    if (!script) {
      script = document.createElement('script')
      script.id = STRUCTURED_DATA_ID
      script.setAttribute('type', 'application/ld+json')
      document.head.appendChild(script)
    }

    script.textContent = JSON.stringify(STRUCTURED_DATA)
  }, [page])

  return null
}
