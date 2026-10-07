export const PROGRAM_HERO = {
  eyebrow: 'October 10, 2026 · Startit Center, Belgrade',
  title: {
    highlight: 'Event',
    rest: 'Program',
  },
  subtitle:
    'Three sessions, nine talks, speaker corners and a quiz with prizes. Small shifts — big impact.',
  ctaPrimary: 'Get Tickets',
} as const

export type ProgramTalk = {
  /** Must match a name in SPEAKERS — photo is taken from there */
  speaker: string
  title: string
}

export type ProgramItem =
  | {
      type: 'intro'
      time: string
      title: string
    }
  | {
      type: 'session'
      time: string
      title: string
      talks: ProgramTalk[]
    }
  | {
      type: 'break'
      time: string
      endTime: string
      activities: string[]
    }

export const PROGRAM_SCHEDULE: ProgramItem[] = [
  {
    type: 'intro',
    time: '13:00',
    title: 'Registration and warm-up',
  },
  {
    type: 'session',
    time: '14:00',
    title: 'Session 1',
    talks: [
      { speaker: 'Dmitrii Ilenkov', title: 'P3.express Method: Keep It Simple' },
      { speaker: 'Andrea Čontoš', title: 'The Art of Thinking in the Age of AI' },
      { speaker: 'Sergey Bryukhovskikh', title: 'A Planet-Sized Telescope Built for $300' },
    ],
  },
  {
    type: 'break',
    time: '14:55',
    endTime: '15:25',
    activities: ['30-minute break', 'Speaker corners', 'Quiz and prize'],
  },
  {
    type: 'session',
    time: '15:25',
    title: 'Session 2',
    talks: [
      { speaker: 'Aleksandar Stojanović', title: 'The AI Future Planted in Your Head' },
      {
        speaker: 'Andjelka Djukic',
        title: 'We’re Learning More Than Ever — And Understanding Less',
      },
      {
        speaker: 'Nadezhda Orlova',
        title: 'Small Talk — The Skill That Changes Everything: From Anxiety to Political Regimes',
      },
    ],
  },
  {
    type: 'break',
    time: '16:20',
    endTime: '16:50',
    activities: ['30-minute break', 'Speaker corners', 'Quiz and prize'],
  },
  {
    type: 'session',
    time: '16:50',
    title: 'Session 3',
    talks: [
      { speaker: 'Yulia Graut', title: 'Attention: What Acting Taught Me About Chaos' },
      {
        speaker: 'Tamara Lazović',
        title: 'Beyond the Paycheck: When Your Work Is Your Calling',
      },
      {
        speaker: 'Efim Graboy',
        title:
          'The Loss and Revival of Collective Experience: Why We Are Rebuilding a Cinema in a Small Serbian Village',
      },
    ],
  },
  {
    type: 'break',
    time: '17:45',
    endTime: '19:00',
    activities: ['Networking', 'Speaker corners', 'Results', 'Awarding of the winners'],
  },
]
