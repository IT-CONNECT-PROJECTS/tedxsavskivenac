import { Container, Section, SectionTitle, Text } from '@/uikit'
import { PHOTOGRAPHERS_CONTENT } from '@/constants/content'
import { PHOTOGRAPHERS } from '@/constants/photographers'
import { getContactUrl, getOrderedContacts } from '@/utils/contacts'
import styles from './Photographers.module.scss'

const CONTACT_LABELS = {
  linkedin: 'IN',
  telegram: 'TG',
  instagram: 'IG',
} as const

export function Photographers() {
  return (
    <Section id="photographers" className={styles.photographers}>
      <Container>
        <SectionTitle>{PHOTOGRAPHERS_CONTENT.title}</SectionTitle>
        <Text variant="muted" className={styles.intro}>
          {PHOTOGRAPHERS_CONTENT.intro}
        </Text>

        <div className={styles.grid}>
          {PHOTOGRAPHERS.map((author) => (
            <article key={author.name} className={styles.card}>
              <span className={styles.role}>{author.role}</span>
              <h3 className={styles.name}>{author.name}</h3>

              <div className={styles.contacts}>
                {getOrderedContacts(author.contacts).map(([platform, value]) => (
                  <a
                    key={platform}
                    href={getContactUrl(platform, value)}
                    className={styles.contact}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${author.name} on ${platform}`}
                  >
                    {CONTACT_LABELS[platform]}
                  </a>
                ))}
              </div>

              {author.galleryUrl ? (
                <a
                  href={author.galleryUrl}
                  className={styles.gallery}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {PHOTOGRAPHERS_CONTENT.galleryCta} →
                </a>
              ) : (
                <span className={styles.note}>{PHOTOGRAPHERS_CONTENT.videoNote}</span>
              )}
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
