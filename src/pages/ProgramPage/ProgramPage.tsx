import { Footer } from '@/components/sections/Footer/Footer'
import { Header } from '@/components/sections/Header/Header'
import { ProgramHero } from '@/components/sections/program/ProgramHero/ProgramHero'
import { ProgramSchedule } from '@/components/sections/program/ProgramSchedule/ProgramSchedule'
import { Seo } from '@/components/Seo/Seo'
import { NAV_ITEMS } from '@/constants/navigation'

export function ProgramPage() {
  return (
    <div className="app-shell">
      <Seo page="program" />
      <Header navItems={[...NAV_ITEMS]} />
      <main>
        <ProgramHero />
        <ProgramSchedule />
      </main>
      <Footer />
    </div>
  )
}
