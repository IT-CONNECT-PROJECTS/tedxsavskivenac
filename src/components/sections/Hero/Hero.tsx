import { Button, Container, GhostLine, Highlight, InfoStrip, Section } from '@/uikit'
import { HERO_CONTENT } from '@/constants/content'
import { getTicketsUrl } from '@/constants/links'
import styles from './Hero.module.scss'

export function Hero() {
  const { eyebrow, tedx, location } = HERO_CONTENT.headline

  return (
    <Section className={styles.hero}>
      <Container>
        <div className={styles.headlineWrap}>
          <h1 className={styles.title}>
            <span className={styles.eyebrow}>{eyebrow}</span>
            <span className={styles.brand}>
              <GhostLine variant="accent">{tedx}</GhostLine>
              <GhostLine variant="default">{location}</GhostLine>
            </span>
          </h1>
        </div>

        <p className={styles.manifest}>
          {HERO_CONTENT.manifest.before}
          <Highlight>{HERO_CONTENT.manifest.highlight1}</Highlight>
          {HERO_CONTENT.manifest.middle}
          <Highlight>{HERO_CONTENT.manifest.highlight2}</Highlight>
        </p>

        <InfoStrip location={HERO_CONTENT.location} theme={HERO_CONTENT.theme} />

        <Button
          as="a"
          href={getTicketsUrl()}
          variant="primary"
          size="lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy Tickets
        </Button>
      </Container>
    </Section>
  )
}
