import { Container, Section, SectionTitle, SpeakerCard, Text } from '@/uikit'
import { SPEAKERS_CONTENT } from '@/constants/content'
import { SPEAKERS } from '@/constants/speakers'
import styles from './Speakers.module.scss'

export function Speakers() {
  return (
    <Section id="speakers" className={styles.speakers}>
      <Container>
        <SectionTitle className={styles.title}>{SPEAKERS_CONTENT.title}</SectionTitle>
        <Text className={styles.intro}>{SPEAKERS_CONTENT.intro}</Text>
        <div className={styles.grid}>
          {SPEAKERS
            .sort((a, b) => a.name.split(' ')[1].localeCompare(b.name.split(' ')[1]))
            .map((speaker, index) => (
                <SpeakerCard key={`${speaker.name}-${index}`} speaker={speaker} />
              )
            )}
        </div>
      </Container>
    </Section>
  )
}
