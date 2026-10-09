import { Container, Section, SectionTitle, TeamCard } from '@/uikit'
import { TEAM_CONTENT } from '@/constants/content'
import { TEAM_MEMBERS } from '@/constants/team'
import styles from './Team.module.scss'

export function Team() {
  return (
    <Section id="team" className={styles.team}>
      <Container>
        <SectionTitle className={styles.title}>{TEAM_CONTENT.title}</SectionTitle>
        <div className={styles.grid}>
          {TEAM_MEMBERS.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
