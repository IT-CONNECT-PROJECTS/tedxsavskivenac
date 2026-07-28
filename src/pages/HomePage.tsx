import { About } from '@/components/sections/About/About'
import { Audience } from '@/components/sections/Audience/Audience'
import { Footer } from '@/components/sections/Footer/Footer'
import { Header } from '@/components/sections/Header/Header'
import { Hero } from '@/components/sections/Hero/Hero'
import { Numbers } from '@/components/sections/Numbers/Numbers'
import { Partnership } from '@/components/sections/Partnership/Partnership'
import { Speakers } from '@/components/sections/Speakers/Speakers'
import { Team } from '@/components/sections/Team/Team'
import { Seo } from '@/components/Seo/Seo'
import { NAV_ITEMS } from '@/constants/navigation'

export function HomePage() {
  return (
    <div className="app-shell">
      <Seo page="home" />
      <Header navItems={[...NAV_ITEMS]} />
      <main>
        <Hero />
        <About />
        <Speakers />
        <Team />
        <Audience />
        <Numbers />
        <Partnership />
      </main>
      <Footer />
    </div>
  )
}
