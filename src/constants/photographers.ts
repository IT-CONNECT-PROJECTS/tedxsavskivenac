export type Photographer = {
  name: string
  role: 'Photographer' | 'Videographer'
  /** Link to the full event gallery, if the author shoots photos. */
  galleryUrl: string | null
  contacts: {
    linkedin?: string
    instagram?: string
  }
}

export const PHOTOGRAPHERS: Photographer[] = [
  {
    name: 'Aleksandr Solo',
    role: 'Photographer',
    galleryUrl: 'https://disk.yandex.ru/d/uWzPmzCER-3JcQ',
    contacts: {
      linkedin: 'a-solo',
      instagram: 'asolophoto',
    },
  },
  {
    name: 'Marina Vasileva',
    role: 'Photographer',
    galleryUrl: 'https://marina-vasileva.com/disk/10-10-2026-tedx-savskivenac-dphzg7',
    contacts: {
      linkedin: 'marina-vasileva-7b811425b',
      instagram: 'marinavasileva.jpg',
    },
  },
  {
    name: 'Sergej Selivanovskij',
    role: 'Videographer',
    galleryUrl: null,
    contacts: {
      instagram: 'prophotobgd',
    },
  },
]
