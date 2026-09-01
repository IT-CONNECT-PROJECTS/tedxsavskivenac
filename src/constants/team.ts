export type TeamMember = {
  name: string
  photo: string
  role: string
  contacts: {
    linkedin?: string
    telegram?: string
    instagram?: string
  } | null
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Leonid Safronov',
    role: 'iOS Developer',
    photo: 'IMG_1176_uodayi',
    contacts: {
      linkedin: 'leosafronov',
      telegram: 'leonidsafronov',
      instagram: 'leonidsafronoff',
    },
  },
  {
    name: 'Viktoria Ermakova',
    role: 'Community Manager',
    photo: 'vika',
    contacts: {
      linkedin: 'ermakova-viktoria',
      telegram: 'VErmakova',
      instagram: 'vika_ermakova_globe',
    },
  },
  {
    name: 'Dmitrii Solomonov',
    role: 'Backend Developer',
    photo: 'dima',
    contacts: {
      telegram: 'Dsolomonov',
    },
  },
  {
    name: 'Elena Solomonova',
    role: 'UX/UI Designer',
    photo: 'lena',
    contacts: {
      telegram: 'sololyth',
    },
  },
  {
    name: 'Anton Klochkov',
    role: 'Digital Marketing Specialist',
    photo: 'anton',
    contacts: {
      linkedin: 'antonyklochkov',
      telegram: 'klochk0v',
      instagram: 'klochk0v',
    },
  },
  {
    name: 'Anastasia Toropova',
    role: 'Professional Coach',
    photo: 'anastasia',
    contacts: {
      linkedin: 'nastyatoropova',
      telegram: 'NastyaShtein',
      instagram: 'nastyashtein',
    },
  },
  {
    name: 'Vitalii Ovsiannikov',
    role: 'Frontend Developer',
    photo: 'vitalii',
    contacts: {
      linkedin: 'vitaly-ovsyannikov',
      telegram: 'Degster_oz',
      instagram: 'degster_oz',
    },
  },
  {
    name: 'Yulia Makutu',
    role: 'Backend Developer',
    photo: 'yulia',
    contacts: {
      linkedin: 'makutu888',
      telegram: 'juliyamakutu',
      instagram: 'makutucoach',
    },
  },
  {
    name: 'Ekaterina Koroleva',
    role: 'Fullstack QA',
    photo: 'ekaterinaPhoto',
    contacts: {
      linkedin: 'kate-koroleva',
      telegram: 'FennyKat',
    },
  },
]
