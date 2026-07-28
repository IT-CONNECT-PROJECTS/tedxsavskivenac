import { BRAND } from '@/constants/brand'

export const HERO_CONTENT = {
  headline: {
    eyebrow: 'WE ARE',
    tedx: BRAND.tedx,
    location: BRAND.location,
  },
  manifest: {
    before: 'WHERE LOCAL ',
    highlight1: 'ENERGY SPARKS',
    middle: ' ',
    highlight2: 'GLOBAL IDEAS',
  },
  location: 'October 10, 2026 | Startit Center, Belgrade',
  theme: 'Theme: Small Shifts, Big Impact',
} as const

export const ABOUT_CONTENT = {
  title: 'THE THEME:',
  subtitle: ' SMALL SHIFTS, BIG IMPACT',
  text: "TEDxSavskiVenac is an independent platform in the heart of Belgrade, created to discover and spread ideas capable of changing the world. This year, our theme is 'Small Shifts, Big Impact'. We believe that the most significant changes begin with subtle shifts in thinking, technology, and culture. The event is organized by IT Connect Belgrade, the largest community uniting more than 7,000 professionals.",
} as const

export const AUDIENCE_CONTENT = {
  title: "WHO'S IN THE ROOM",
  items: [
    { label: 'Tech & IT Professionals' },
    { label: 'Startup Founders' },
    { label: 'Creatives & Designers' },
    { label: 'Educators & Researchers' },
    { label: 'Community Leaders' },
  ],
  caption:
    'Only 100 attendees. A concentrated room of professionals, innovators, and changemakers.',
} as const

export const NUMBERS_CONTENT = {
  title: 'THE EVENT IN NUMBERS',
  stats: [
    {
      value: '150',
      label: 'Speaker applications submitted from 11 countries',
    },
    {
      value: '9',
      label: 'Carefully selected inspiring talks',
    },
    {
      value: '80',
      label: 'Exclusive seats for attendees',
    },
  ],
} as const

export const PARTNERSHIP_CONTENT = {
  eyebrow: 'For brands & companies',
  title: 'PARTNERSHIP',
  text: "If your company or brand wants to be associated with ideas, innovation and a community of professionals, we'd love to talk. Explore our sponsorship packages and find the right fit.",
  cta: 'View Sponsorship Packages',
} as const

export const SPEAKERS_CONTENT = {
  title: 'SPEAKERS',
  intro:
    'Nine speakers, selected from 150 applications. Lineup announced as it comes together.',
} as const

export const TEAM_CONTENT = {
  title: 'THE TEAM',
  intro:
    'TEDxSavskiVenac is brought to life by IT Connect Belgrade — a crew of builders, designers, and community people who care about ideas and the city they happen in.',
} as const

export const FOOTER_CONTENT = {
  disclaimer:
    'This TEDx event is operated under license from TED. © 2026 TEDxSavskiVenac. All rights reserved.',
} as const
