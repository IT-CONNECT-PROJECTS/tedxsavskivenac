import { Container, Section } from '@/uikit'
import { PROGRAM_SCHEDULE } from '@/constants/program'
import type { ProgramItem, ProgramTalk } from '@/constants/program'
import { SPEAKERS } from '@/constants/speakers'
import { getImageUrl } from '@/utils/images'
import styles from './ProgramSchedule.module.scss'

function findSpeaker(name: string) {
  return SPEAKERS.find((speaker) => speaker.name === name)
}

function Talk({ talk }: { talk: ProgramTalk }) {
  const speaker = findSpeaker(talk.speaker)

  return (
    <li className={styles.talk}>
      {speaker?.photo ? (
        <img
          src={getImageUrl(speaker.photo, 200, 'speakers')}
          alt={`${talk.speaker} — speaker, TEDxSavskiVenac Beograd`}
          className={styles.photo}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className={styles.photoPlaceholder} aria-hidden="true" />
      )}
      <div className={styles.talkBody}>
        <p className={styles.speaker}>{talk.speaker}</p>
        <h3 className={styles.talkTitle}>{talk.title}</h3>
      </div>
    </li>
  )
}

function ScheduleRow({ item }: { item: ProgramItem }) {
  if (item.type === 'break') {
    return (
      <li className={`${styles.row} ${styles.rowBreak}`}>
        <span className={styles.time}>
          {item.time}
          <span className={styles.timeEnd}>– {item.endTime}</span>
        </span>
        <ul className={styles.activities}>
          {item.activities.map((activity) => (
            <li key={activity} className={styles.activity}>
              {activity}
            </li>
          ))}
        </ul>
      </li>
    )
  }

  return (
    <li className={`${styles.row} ${item.type === 'session' ? styles.rowSession : ''}`}>
      <span className={styles.time}>{item.time}</span>
      <div className={styles.content}>
        <h2 className={item.type === 'session' ? styles.sessionTitle : styles.introTitle}>
          {item.title}
        </h2>
        {item.type === 'session' && (
          <ul className={styles.talks}>
            {item.talks.map((talk) => (
              <Talk key={talk.speaker} talk={talk} />
            ))}
          </ul>
        )}
      </div>
    </li>
  )
}

export function ProgramSchedule() {
  return (
    <Section id="schedule" className={styles.schedule}>
      <Container>
        <ol className={styles.timeline}>
          {PROGRAM_SCHEDULE.map((item) => (
            <ScheduleRow key={item.time + item.type} item={item} />
          ))}
        </ol>
      </Container>
    </Section>
  )
}
