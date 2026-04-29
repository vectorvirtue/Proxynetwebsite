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
import SEO from '../components/SEO'

export default function About() {
  return (
    <>
      <SEO
        title="About Us — Who We Are"
        description="Proxynet Group is a Nigerian technology solutions company founded in 2004. Learn about our mission, values, leadership team, and offices across West Africa."
        canonical="/about"
      />
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
    </>
  )
}
