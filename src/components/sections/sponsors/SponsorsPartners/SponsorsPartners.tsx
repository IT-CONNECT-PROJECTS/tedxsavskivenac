import { Container, Section, SectionTitle, Text } from '@/uikit'
import { SPONSORS_PARTNERS } from '@/constants/sponsorship'
import { PARTNER_MAILTO } from '@/constants/links'
import { getImageUrl } from '@/utils/images'

import styles from './SponsorsPartners.module.scss'

export function SponsorsPartners() {
  return (
    <Section id="partners" className={styles.partners}>
      <Container>
        <SectionTitle className={styles.title}>{SPONSORS_PARTNERS.title}</SectionTitle>
        <Text className={styles.intro}>{SPONSORS_PARTNERS.intro}</Text>

        <div className={styles.grid}>
          {SPONSORS_PARTNERS.items.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.logoWrap}>
                <img
                  src={getImageUrl(partner.logo, 400, 'partners')}
                  alt=""
                  className={styles.logo}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className={styles.name}>{partner.name}</h3>
              <p className={styles.description}>{partner.description}</p>
              <span className={styles.link}>{partner.linkLabel}</span>
            </a>
          ))}

          <a href={PARTNER_MAILTO} className={`${styles.card} ${styles.ctaCard}`}>
            <h3 className={styles.name}>{SPONSORS_PARTNERS.ctaCard.title}</h3>
            <p className={styles.description}>{SPONSORS_PARTNERS.ctaCard.description}</p>
            <span className={styles.link}>{SPONSORS_PARTNERS.ctaCard.label}</span>
          </a>
        </div>
      </Container>
    </Section>
  )
}
