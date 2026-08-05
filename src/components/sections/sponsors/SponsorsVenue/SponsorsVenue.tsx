import { Container, Section, SectionTitle, Text } from '@/uikit'
import { SPONSORS_VENUE } from '@/constants/sponsorship'
import { STARTIT_LINKEDIN_URL } from '@/constants/links'
import { getImageUrl } from '@/utils/images'
import styles from './SponsorsVenue.module.scss'

export function SponsorsVenue() {
  const imageUrl = getImageUrl('startit_logo-vertikalni-crni_RGB_yhewer', 200, 'partners')

  return (
    <Section className={styles.venue} variant="compact">
      <Container>
        <SectionTitle className={styles.title}>{SPONSORS_VENUE.title}</SectionTitle>
        <Text className={styles.text}>{SPONSORS_VENUE.text}</Text>
        <img src={imageUrl} alt="Startit" className={styles.image} />
        <a
          href={STARTIT_LINKEDIN_URL}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {SPONSORS_VENUE.linkedinLabel}
        </a>
      </Container>
    </Section>
  )
}
