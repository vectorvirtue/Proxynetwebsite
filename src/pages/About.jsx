import AboutHero from '../components/about/AboutHero'
import SubNav from '../components/about/SubNav'
import CompanyOverview from '../components/about/CompanyOverview'
import MissionVision from '../components/about/MissionVision'
import CoreValues from '../components/about/CoreValues'
import Timeline from '../components/about/Timeline'
import Leadership from '../components/about/Leadership'
import Awards from '../components/about/Awards'
import Locations from '../components/about/Locations'
import TaxCompliance from '../components/about/TaxCompliance'
import AboutCTA from '../components/about/AboutCTA'

export default function About() {
  return (
    <main>
      <AboutHero />
      <SubNav />
      <CompanyOverview />
      <MissionVision />
      <CoreValues />
      <Timeline />
      <Leadership />
      <Awards />
      <Locations />
      <TaxCompliance />
      <AboutCTA />
    </main>
  )
}
