import type { Speaker } from '@/constants/speakers'
import { getContactUrl, getOrderedContacts } from '@/utils/contacts'
import { getImageUrl } from '@/utils/images'
import styles from './SpeakerCard.module.scss'

const CONTACT_LABELS = {
  linkedin: 'IN',
  telegram: 'TG',
  instagram: 'IG',
} as const

type SpeakerCardProps = {
  speaker: Speaker
}

export function SpeakerCard({ speaker }: SpeakerCardProps) {
  const contacts = getOrderedContacts(speaker.contacts)

  return (
    <article className={styles.card}>
      <div className={styles.photoWrap}>
        {speaker.confirmed && speaker.photo ? (
          <img
            src={getImageUrl(speaker.photo, 700, 'speakers')}
            alt={`${speaker.name} — speaker, TEDxSavskiVenac Beograd`}
            className={styles.photo}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className={styles.placeholder} aria-hidden="true" />
        )}
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{speaker.name}</h3>
        <p className={styles.topic}>{speaker.topic}</p>
        <p className={styles.bio}>{speaker.bio}</p>

        {contacts.length > 0 && (
          <div className={styles.contacts}>
            {contacts.map(([platform, value]) => (
              <a
                key={`${platform}-${value}`}
                href={getContactUrl(platform, value)}
                className={styles.contact}
                target="_blank"
                rel="noopener noreferrer"
              >
                {CONTACT_LABELS[platform]}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
