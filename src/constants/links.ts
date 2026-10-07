export const TICKETS_EVENT_ID = 't79ylzzw'
export const TICKETS_BASE_URL = 'https://itconnect.tic.rs'

/** Default/public ticket URL (English). Used in SEO schema and as fallback. */
export const TICKETS_URL = `${TICKETS_BASE_URL}/en/${TICKETS_EVENT_ID}`

type TicketLocale = 'en' | 'sr' | 'ru'

function toTicketLocale(tag: string): TicketLocale | null {
  const lang = tag.toLowerCase().split('-')[0]
  if (lang === 'sr') return 'sr'
  if (lang === 'ru') return 'ru'
  if (lang === 'en') return 'en'
  return null
}

/**
 * Ticket shop locale from browser language preferences.
 * Walks navigator.languages in order; first supported wins. Default: en.
 */
export function getTicketsUrl(
  languages: readonly string[] | undefined = typeof navigator !== 'undefined'
    ? navigator.languages?.length
      ? navigator.languages
      : [navigator.language]
    : undefined,
): string {
  for (const tag of languages ?? []) {
    const locale = toTicketLocale(tag)
    if (locale) return `${TICKETS_BASE_URL}/${locale}/${TICKETS_EVENT_ID}`
  }

  return TICKETS_URL
}


export const SPONSORS_PATH = '/sponsors'
export const PROGRAM_PATH = '/program'
export const STARTIT_LINKEDIN_URL = 'https://www.linkedin.com/company/startitrs'
export const INSTAGRAM_URL = 'https://instagram.com/tedxsavskivenac'
export const INSTAGRAM_HANDLE = '@tedxsavskivenac'
export const LINKEDIN_URL = 'https://www.linkedin.com/company/tedxsavskivenac/'
export const LINKEDIN_HANDLE = 'TEDxSavskiVenac'
export const CONTACT_EMAIL = 'tedxsavskivenac@gmail.com'
export const PARTNER_EMAIL = 'tedxsavskivenac@gmail.com'
export const PARTNER_MAILTO = `mailto:${PARTNER_EMAIL}?subject=TEDxSavskiVenac Partnership`
