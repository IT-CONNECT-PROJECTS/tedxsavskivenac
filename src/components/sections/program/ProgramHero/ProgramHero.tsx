import { Link } from 'react-router-dom'
import { Button, Container, GhostLine, Section } from '@/uikit'
import { PROGRAM_HERO } from '@/constants/program'
import { getTicketsUrl } from '@/constants/links'
import styles from './ProgramHero.module.scss'

export function ProgramHero() {
  return (
    <Section className={styles.hero}>
      <Container>
        <span className={styles.eyebrow}>{PROGRAM_HERO.eyebrow}</span>
        <h1 className={styles.title}>
          <span className={styles.brand}>
            <GhostLine variant="accent">{PROGRAM_HERO.title.highlight}</GhostLine>
            <GhostLine variant="default">{PROGRAM_HERO.title.rest}</GhostLine>
          </span>
        </h1>
        <p className={styles.subtitle}>{PROGRAM_HERO.subtitle}</p>
        <div className={styles.actions}>
          <Button
            as="a"
            href={getTicketsUrl()}
            variant="primary"
            size="md"
            target="_blank"
            rel="noopener noreferrer"
          >
            {PROGRAM_HERO.ctaPrimary}
          </Button>
          <Link to="/" className={styles.backLink}>
            ← Back to main site
          </Link>
        </div>
      </Container>
    </Section>
  )
}
