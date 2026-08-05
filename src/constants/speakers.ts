export type Speaker = {
  name: string
  photo: string | null
  topic: string
  bio: string
  contacts: {
    linkedin?: string
    telegram?: string
    instagram?: string
  } | null
  confirmed: boolean
}

export const CONFIRMED_SPEAKERS: Speaker[] = [
  {
    name: 'Nadezhda Orlova',
    photo: 'Orlova_jsuiv4',
    topic: 'Small Talk - the skill that changes everything: from anxiety to political regimes',
    bio: 'Clinical Psychologist and Researcher | 10+ Years Inside IT',
    contacts: null,
    confirmed: true,
  },
  {
    name: 'Andjelka Djukic',
    photo: 'Andj2_-_Oksana_Skendžić_cckzbk',
    topic: 'We’re Learning More Than Ever — And Understanding Less',
    bio: 'Head of Sales at Eclincher and Co-Founder at Innovative Women of Serbia',
    contacts: null,
    confirmed: true,
  },
  {
    name: 'Yulia Graut',
    photo: 'yulia_graut_oreqxu',
    topic: 'Attention: What Acting Taught Me About Chaos',
    bio: 'International actress. Acting and Public speaking coach',
    contacts: null,
    confirmed: true,
  },
  {
    name: 'Dmitrii Ilenkov',
    photo: 'аватар_f1pbyt',
    topic: 'From Clinical Protocols to Better Projects',
    bio: 'Author, entrepreneur',
    contacts: null,
    confirmed: true,
  },
  {
    name: 'Tamara Lazovic',
    photo: 'Portrait_photo_tlvzns',
    topic: 'Beyond the paycheck: When your work is your calling',
    bio: 'Special education teacher & Community worke',
    contacts: null,
    confirmed: true,
  },
  {
    name: 'Efim Graboy',
    photo: 'IMG_4666_mgcgmf',
    topic: 'The Loss and Revival of Collective Experience: Why We Are Rebuilding a Cinema in a Small Serbian Village',
    bio: 'Founder of Vice Versa Triangle Art Residency, Filmmaker & Video Therapist.',
    contacts: null,
    confirmed: true,
  },
  {
    name: 'Andrea Čontoš',
    photo: 'Andrea_Čontoš_portret_1_1_xwbv9n',
    topic: 'The art of thinking in the age of AI',
    bio: 'Neurobiologist & Author',
    contacts: null,
    confirmed: true,
  },
]

export const TBA_SPEAKERS: Speaker[] = [
  {
    name: 'Aleksandar Stojanovic',
    photo: 'TEDx_-_Aleksandar_Stojanovic_2_uk7yhv',
    topic: 'The Futures We Can\'t See: How our own bubbles lie to us about AI.',
    bio: 'Director General at DARI Foundation',
    contacts: null,
    confirmed: true,
  },
  {
    name: 'Sergey Bryukhovskikh',
    photo: 'IMG_2045_mckbg2',
    topic: 'A Planet-Sized Telescope Built for $300',
    bio: 'Head of Technology at AltDev',
    contacts: null,
    confirmed: true,
  },
]

export const SPEAKERS: Speaker[] = [...CONFIRMED_SPEAKERS, ...TBA_SPEAKERS]
