import type { TeamMember } from '@/constants/team'
import { getContactUrl, getOrderedContacts } from '@/utils/contacts'
import { getImageUrl } from '@/utils/images'
import styles from './TeamCard.module.scss'

const CONTACT_LABELS = {
  linkedin: 'IN',
  telegram: 'TG',
  instagram: 'IG',
} as const

type TeamCardProps = {
  member: TeamMember
}

export function TeamCard({ member }: TeamCardProps) {
  const contacts = getOrderedContacts(member.contacts)

  return (
    <article className={styles.card}>
      <div className={styles.photoWrap}>
        <img
          src={getImageUrl(member.photo, 700)}
          alt={member.name}
          className={styles.photo}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{member.name}</h3>
        {/*<p className={styles.role}>{member.role}</p>*/}

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
