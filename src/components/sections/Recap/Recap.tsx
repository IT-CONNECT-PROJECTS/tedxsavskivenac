import { Button, Container, FeatureCard, Section, SectionTitle, Text } from '@/uikit'
import { RECAP_CONTENT } from '@/constants/content'
import { INSTAGRAM_URL } from '@/constants/links'
import styles from './Recap.module.scss'

export function Recap() {
  return (
    <Section id="recap" className={styles.recap}>
      <Container>
        <span className={styles.eyebrow}>{RECAP_CONTENT.eyebrow}</span>
        <SectionTitle>{RECAP_CONTENT.title}</SectionTitle>

        {RECAP_CONTENT.photo && (
          <img
            src={RECAP_CONTENT.photo}
            alt={RECAP_CONTENT.photoAlt}
            className={styles.photo}
            loading="lazy"
            decoding="async"
          />
        )}

        <div className={styles.story}>
          <p className={styles.lead}>{RECAP_CONTENT.lead}</p>
          {RECAP_CONTENT.paragraphs.map((paragraph) => (
            <Text key={paragraph}>{paragraph}</Text>
          ))}
        </div>

        <div className={styles.verdicts}>
          {RECAP_CONTENT.verdicts.map((verdict) => (
            <FeatureCard
              key={verdict.title}
              title={verdict.title}
              description={verdict.description}
            />
          ))}
        </div>

        <div className={styles.videos}>
          <div>
            <h3 className={styles.videosTitle}>{RECAP_CONTENT.videos.title}</h3>
            <Text variant="muted" className={styles.videosText}>
              {RECAP_CONTENT.videos.text}
            </Text>
          </div>
          <Button
            as="a"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
          >
            {RECAP_CONTENT.videos.cta}
          </Button>
        </div>
      </Container>
    </Section>
  )
}
