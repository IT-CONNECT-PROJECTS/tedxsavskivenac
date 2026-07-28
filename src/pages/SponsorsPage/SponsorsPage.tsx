import { Footer } from '@/components/sections/Footer/Footer'
import { Header } from '@/components/sections/Header/Header'
import { SponsorsAbout } from '@/components/sections/sponsors/SponsorsAbout/SponsorsAbout'
import { SponsorsBudget } from '@/components/sections/sponsors/SponsorsBudget/SponsorsBudget'
import { SponsorsCta } from '@/components/sections/sponsors/SponsorsCta/SponsorsCta'
import { SponsorsHero } from '@/components/sections/sponsors/SponsorsHero/SponsorsHero'
import { SponsorsInKind } from '@/components/sections/sponsors/SponsorsInKind/SponsorsInKind'
import { SponsorsNumbers } from '@/components/sections/sponsors/SponsorsNumbers/SponsorsNumbers'
import { SponsorsTiers } from '@/components/sections/sponsors/SponsorsTiers/SponsorsTiers'
import { SponsorsPartners } from '@/components/sections/sponsors/SponsorsPartners/SponsorsPartners'
import { SponsorsVenue } from '@/components/sections/sponsors/SponsorsVenue/SponsorsVenue'
import { SponsorsWhy } from '@/components/sections/sponsors/SponsorsWhy/SponsorsWhy'
import { Seo } from '@/components/Seo/Seo'
import { SPONSORS_NAV_ITEMS } from '@/constants/sponsorship'

export function SponsorsPage() {
  return (
    <div className="app-shell">
      <Seo page="sponsors" />
      <Header navItems={[...SPONSORS_NAV_ITEMS]} />
      <main>
        <SponsorsHero />
        <SponsorsAbout />
        <SponsorsNumbers />
        <SponsorsWhy />
        <SponsorsBudget />
        <SponsorsTiers />
        <SponsorsInKind />
        <SponsorsPartners />
        <SponsorsVenue />
        <SponsorsCta />
      </main>
      <Footer />
    </div>
  )
}
