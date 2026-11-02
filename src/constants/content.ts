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

export const RECAP_CONTENT = {
  eyebrow: 'October 10, 2026 · Startit Center, Belgrade',
  title: "THAT'S A WRAP",
  lead: 'TEDxSavskiVenac 2026 has happened — and it was everything we hoped it would be.',
  paragraphs: [
    'For one day, Startit Center turned into a room full of curious minds. Nine speakers, selected from 150 applications from 11 countries, took the stage with ideas around our theme, Small Shifts, Big Impact. The conversations they sparked carried on through every break and long after the final talk.',
    'Thank you to every speaker, guest, volunteer and partner who made this day possible. Small shifts really do add up — and this one was felt by everyone in the room.',
  ],
  /** Recap photo URL. Section renders without it while null. */
  photo:
    'https://i.wfolio.ru/x/KfN2JhbB89-m6UeUSQ-43b-4LTDPyZVn/q6sVLUvjujnOk6mXbO2srbIKpPlcOqy0/t7rVx8PT5NFW95R5iPfYgEbcz9T9DM03/mjHu5nb3MiY0pLaVSfnIEvvsgGTLYWd3/DB3ADSLxnrANMZCME7ysO6lbLXOuKmsS/4avHE6QvdBNSnvUrs3A5CiNNO3rLS7jl/323Ydwoq9ZO0AI9J-XIWZkmi6eKD84TV/5XMfE90YcjO-Y0ZzF_7srmvZxd5fKqN8/yMH5Fp8oBLioGXLOrrwMvet13Fc8Yw2k/i9N9Kt3PLJuMc_EEgfID8671zEVqAJ_r/C-OOMAc2zEmixp1GhUVEj4Z8OgaAkt72/t60A6CJg--pe9KOQVbKLLqeho8VXE3J5/I3MtMHjDbDh7S6Rb7PQ3OLhlWFWXOMlN/NDXMlFgqQYt4tFRglfc2ZNdZf-1sEF0x/8NsSllwOF0fuWZPZNiXDjAivOglOQaTe/OfepO39r5xc1DWKdiEarUkeLFG3qIdSd/riN0e6-AWxGHd-MtAG-US_vMrc6QyRTI/RtjTwS5fGP11I1q8PPNhJOYLKvxWZk83/iWyeiWLGqUTSNei7tjjt4wIbHPLuUnOp/CGMQ6UTG8aE.jpg' as string | null,
  photoAlt: 'Speakers, team and guests of TEDxSavskiVenac 2026 together at Startit Center, Belgrade',
  verdicts: [
    {
      title: 'Attendees',
      description:
        'Left inspired, with new ideas, new contacts and plenty to think about on the way home.',
    },
    {
      title: 'Partners',
      description:
        'Met the community they wanted to reach and saw their support turn into a real, live event.',
    },
    {
      title: 'Team',
      description:
        'Proud of what we built together — and already full of ideas for what comes next.',
    },
  ],
  videos: {
    title: 'TALK VIDEOS ARE COMING',
    text: "Recordings of every talk are in post-production and will be published soon. Follow us on Instagram so you don't miss the release.",
    cta: 'Follow on Instagram',
  },
} as const

export const PHOTOGRAPHERS_CONTENT = {
  title: 'CAPTURED BY',
  intro:
    'The day through the lenses of the people who documented it. Browse the full galleries and give them a follow.',
  galleryCta: 'View Photos',
  videoNote: 'Talk videos coming soon',
} as const
