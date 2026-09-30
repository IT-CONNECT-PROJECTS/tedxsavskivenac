export const SPONSORS_HERO = {
  eyebrow: 'October 10, 2026 · Startit Center, Belgrade',
  title: {
    highlight: 'Partnership',
    rest: 'Proposal',
  },
  subtitle:
    'TEDxSavskiVenac is an independent TEDx event organized under license from TED. An intimate gathering of 100 decision-makers, creators, and innovators — where local energy sparks global ideas.',
  ctaPrimary: 'View Packages',
  ctaSecondary: 'Become a Partner',
} as const

export const SPONSORS_ABOUT = {
  title: 'About the Event',
  text: 'TEDxSavskiVenac is an independent platform in the heart of Belgrade, created to discover and spread ideas capable of changing the world. This year, our theme is "Small Shifts, Big Impact" — we believe the most significant changes begin with subtle shifts in thinking, technology, and culture.',
  note: 'Organized by IT Connect Belgrade — the largest community uniting more than 7,000 professionals.',
} as const

export const SPONSORS_WHY = {
  title: 'Why Partner With Us',
  items: [
    {
      title: 'Exclusive Audience',
      description:
        'Not a mass event — a community of 100 leaders. Tech & IT professionals, startup founders, creatives, educators, and community leaders who make decisions.',
    },
    {
      title: 'Eternal Value',
      description:
        'Talk videos are uploaded to the TEDx Talks YouTube channel (35M+ subscribers). Your logo stays in the video forever, accumulating views for years.',
    },
    {
      title: 'Brand Association',
      description:
        "Alignment with the global TED brand plus IT Connect Belgrade — the city's largest IT community of 7,000+ professionals.",
    },
    {
      title: 'Partnership, Not Advertising',
      description:
        'TEDx philosophy: collaborative creation, not banner ads. Partners become part of the community — mentioned in IT Connect channels before and after the event.',
    },
  ],
} as const

export const SPONSORS_BUDGET = {
  title: 'Where the Money Goes',
  intro:
    'All funds go directly to event production. The venue (Startit Center) is provided on partnership terms.',
  rows: [
    { label: 'Catering (100 people, full day)', amount: '€700–800' },
    { label: 'Merch (t-shirts, notebooks)', amount: '€2,000' },
    { label: 'Video Production', amount: '€2,000' },
    { label: 'Speaker gifts (8 speakers)', amount: '€800' },
    { label: 'Attendee raffles & prizes', amount: '€300' },
    { label: 'Decor & stage design', amount: '€600–800' },
    { label: 'Advertising (social, target)', amount: '€500' },
    { label: 'Startit (symbolic venue fee)', amount: '€500' },
    { label: 'Printing (badges, programs)', amount: '€300' },
  ],
  total: { label: 'Total Budget', amount: '~€7,700–8,000' },
} as const

export const SPONSORS_TIERS = {
  title: 'Sponsorship Packages',
  tiers: [
    {
      badge: '🔴',
      name: 'Presenting Partner',
      price: '€5,000',
      availability: '1 available',
      features: [
        'Logo on website (top position)',
        'Logo on screen before each talk (pre-roll)',
        'Logo on all printed materials',
        'Mention by host from stage',
        '10 VIP tickets (front rows + afterparty)',
        'Branded zone in foyer',
        'Dedicated Instagram post',
        'Logo in email newsletter',
        'Mention in IT Connect channels (7,000+)',
        '"Founding Partner" status',
      ],
    },
    {
      badge: '🟡',
      name: 'Gold Partner',
      price: '€2,000',
      availability: 'Up to 3 available',
      features: [
        'Logo on website (gold section)',
        'Logo on screen during breaks',
        'Logo on attendee badges',
        '5 VIP tickets',
        'Booth/table in foyer',
        'Instagram mention',
        'Logo in printed program',
        'Mention in IT Connect channels',
      ],
    },
    {
      badge: '🔵',
      name: 'Silver Partner',
      price: '€1,000',
      availability: 'Up to 5 available',
      features: [
        'Logo on website',
        'Logo on screen during breaks',
        '3 tickets',
        'Instagram mention',
        'Logo in printed program',
      ],
    },
    {
      badge: '🟢',
      name: 'Bronze Partner',
      price: '€500',
      availability: 'Unlimited',
      features: [
        'Logo on website',
        '2 tickets',
        'Instagram mention',
      ],
    },
  ],
} as const

export const SPONSORS_IN_KIND = {
  title: 'In-Kind Partners',
  intro:
    'For companies providing services or goods instead of monetary sponsorship. Each category is exclusive — one partner per slot.',
  items: [
    {
      icon: '☕',
      title: 'Coffee Break Partner',
      description:
        'Coffee, snacks, water for the full day → branding of coffee zone, "Coffee Partner" logo placement',
    },
    {
      icon: '📸',
      title: 'Media Partner',
      description: 'Photo/video coverage → logo in final videos, exclusive content access',
    },
    {
      icon: '🎁',
      title: 'Gift Partner',
      description: 'Speaker gifts (products, vouchers, merch) → logo on gifts, "Gift Partner" on website',
    },
    {
      icon: '🎨',
      title: 'Design / Print Partner',
      description: 'Printing of badges, programs, banners → "Print Partner" logo placement',
    },
    {
      icon: '📢',
      title: 'Media / PR Partner',
      description: 'Coverage in media, podcasts, social channels → "Media Partner" logo placement',
    },
    {
      icon: '🎉',
      title: 'Afterparty Partner',
      description: 'Drinks/snacks for afterparty → branding of afterparty zone',
    },
  ],
} as const

export const SPONSORS_VENUE = {
  title: 'Venue Partner',
  text: 'Startit Center — partner of the event. The venue is provided on partnership terms. Located at Savska 5 in central Belgrade, Startit is the city\'s leading hub for the IT community: developers, designers, entrepreneurs, and creators meet here to share knowledge, host meetups, and build new projects. A symbolic fee is included in the budget as a token of appreciation.',
  linkedinLabel: 'Startit on LinkedIn',
} as const

export type SponsorPartner = {
  name: string
  logo: string
  description: string
  url: string
  linkLabel: string
  invertLogo?: boolean
  whiteLogo?: boolean
  lightBg?: boolean
}

export const SPONSORS_PARTNERS = {
  title: 'Partners',
  intro: 'Brands and makers standing with TEDxSavskiVenac.',
  items: [
    {
      name: 'Kleos',
      logo: 'p5jzo7mybknmfqdbyyjn',
      description:
        'Global teams management platform — hire and pay contractors across 242 locations with compliance built in.',
      url: 'https://kleos.io/',
      linkLabel: 'Website',
      invertLogo: true,
    },
    {
      name: 'Knjaz Miloš',
      logo: '20240310112026_Логотип_компаније_Књаз_Милош_rtcbnp',
      description:
        "One of Serbia's leading mineral water and soft-drink producers, built on more than two centuries of tradition.",
      url: 'https://knjaz.rs/',
      linkLabel: 'Website',
      whiteLogo: true,
    },
    {
      name: 'Imlek',
      logo: 'images_ao1lyj',
      description:
        'A dairy company of long tradition and proven quality — milk, yogurt, and everyday products for the region.',
      url: 'https://www.imlek.rs/',
      linkLabel: 'Website',
    },
    {
      name: "A'dam Stroopwafel",
      logo: 'A_dam-Plava-Pozadina_x6lkwv',
      description: 'The first original Dutch stroopwafel in Serbia.',
      url: 'https://www.instagram.com/adam_stroopwafel',
      linkLabel: 'Instagram',
    },
    {
      name: 'IT Connect',
      logo: 'it_connect_logo_full_main_ezfda6',
      description:
        "Belgrade's IT community of 7,000+ professionals — information partner of TEDxSavskiVenac.",
      url: 'https://www.itconnect.community/',
      linkLabel: 'Website',
      lightBg: true,
    },
    {
      name: 'ICT Hub',
      logo: 'icthub-logo_2x_wvatml',
      description:
        'Belgrade innovation hub helping people, startups, and companies grow through consulting, education, and coworking since 2014.',
      url: 'https://www.icthub.rs/',
      linkLabel: 'Website',
      lightBg: true,
    },
    {
      name: 'Petlja',
      logo: 'Logo_i_text_transparent_pka3gq',
      description:
        'A Serbian foundation making programming and algorithmic thinking accessible through free courses, competitions, and teacher resources.',
      url: 'https://petlja.org/',
      linkLabel: 'Website',
    },
    {
      name: 'Raskat',
      logo: 'raskat_png_tmcccc',
      description: 'Rental of PHOTO and VIDEO equipment in Belgrade and Serbia',
      url: 'https://srb.raskat.rent/',
      linkLabel: 'Website',
      lightBg: true,
    },
  ] satisfies SponsorPartner[],
  ctaCard: {
    title: 'Become a Partner',
    description: 'Join brands supporting ideas that spark change in Belgrade.',
    label: 'Get in touch',
  },
} as const

export const SPONSORS_CTA = {
  title: "Let's Talk",
  text: "If your company or brand wants to be associated with ideas, innovation, and a community of professionals — we'd love to talk. We're open to partnerships that make sense for both sides.",
  cta: 'Become a Partner',
} as const

export const SPONSORS_NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Why Partner', href: '#why' },
  { label: 'Packages', href: '#tiers' },
  { label: 'In-Kind', href: '#inkind' },
  { label: 'Partners', href: '#partners' },
  { label: 'Contact', href: '#contact' },
] as const
