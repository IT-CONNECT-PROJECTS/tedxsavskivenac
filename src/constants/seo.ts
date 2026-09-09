import { HERO_CONTENT } from '@/constants/content'
import {
  CONTACT_EMAIL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  TICKETS_URL,
} from '@/constants/links'

export const SITE_URL = 'https://www.tedxsavskivenac.com'
export const SITE_NAME = 'TEDxSavskiVenac'
export const SITE_LOCALE = 'en_US'

export const SEO = {
  title: 'TEDxSavskiVenac 2026 | TEDx Beograd — Small Shifts, Big Impact',
  description:
    'TEDx dogadjaj u Beogradu: TEDxSavskiVenac, 10. oktobar 2026, Startit Center. Independent TEDx event — Small Shifts, Big Impact. Local energy, global ideas.',
  keywords: [
    'TEDxSavskiVenac',
    'TEDx Beograd',
    'TEDx Belgrade',
    'TEDx dogadjaj',
    'Beograd',
    'Belgrade',
    'Startit Center',
    'Startit',
    'conference',
    'ideas',
    'Small Shifts Big Impact',
    'IT Connect Belgrade',
  ].join(', '),
  author: SITE_NAME,
  themeColor: '#000000',
  ogImage: `${SITE_URL}/og-image.png`,
  eventDate: '2026-10-10',
  eventStartTime: '10:00',
  eventEndTime: '18:00',
  venueName: 'Startit Center',
  venueCity: 'Belgrade',
  venueCountry: 'RS',
  theme: 'Small Shifts, Big Impact',
} as const

const TICKET_VALID_FROM = '2026-01-01'

export const EVENT_OFFERS = [
  {
    '@type': 'Offer',
    name: 'Blind',
    price: '1800',
    priceCurrency: 'RSD',
    url: TICKETS_URL,
    availability: 'https://schema.org/SoldOut',
    validFrom: TICKET_VALID_FROM,
  },
  {
    '@type': 'Offer',
    name: 'Early Bird',
    price: '2400',
    priceCurrency: 'RSD',
    url: TICKETS_URL,
    availability: 'https://schema.org/SoldOut',
    validFrom: TICKET_VALID_FROM,
  },
  {
    '@type': 'Offer',
    name: 'Regular',
    price: '3600',
    priceCurrency: 'RSD',
    url: TICKETS_URL,
    availability: 'https://schema.org/InStock',
    validFrom: TICKET_VALID_FROM,
  },
] as const

export const EVENT_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: SITE_NAME,
  description: SEO.description,
  startDate: `${SEO.eventDate}T${SEO.eventStartTime}:00+02:00`,
  endDate: `${SEO.eventDate}T${SEO.eventEndTime}:00+02:00`,
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  image: [SEO.ogImage],
  url: SITE_URL,
  inLanguage: 'en',
  keywords: SEO.keywords,
  maximumAttendeeCapacity: 100,
  location: {
    '@type': 'Place',
    name: SEO.venueName,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SEO.venueCity,
      addressCountry: SEO.venueCountry,
    },
  },
  organizer: {
    '@type': 'Organization',
    name: 'IT Connect Belgrade',
    email: CONTACT_EMAIL,
    sameAs: [INSTAGRAM_URL, LINKEDIN_URL],
  },
  offers: EVENT_OFFERS,
  about: HERO_CONTENT.theme,
} as const

export const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  description: SEO.description,
  inLanguage: 'en',
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/favicon.svg`,
    },
    sameAs: [INSTAGRAM_URL, LINKEDIN_URL],
  },
} as const

export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  email: CONTACT_EMAIL,
  sameAs: [INSTAGRAM_URL, LINKEDIN_URL],
  logo: `${SITE_URL}/favicon.svg`,
} as const

export const STRUCTURED_DATA = [EVENT_SCHEMA, WEBSITE_SCHEMA, ORGANIZATION_SCHEMA] as const

export const SPONSORS_SEO = {
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
  ogImage: SEO.ogImage,
} as const

export const SPONSORS_URL = `${SITE_URL}/sponsors`
