import SEO from '../components/SEO'
import SolutionHero from '../components/SolutionHero'
import SolutionPartnerStrip from '../components/SolutionPartnerStrip'

export default function HomeAutomationSolutions() {
  return (
    <>
      <SEO
        title="Home Automation Solutions"
        description="Connected home automation solutions that allow devices to be controlled fully over the internet for greater comfort, convenience, and productivity."
        canonical="/solutions/home-automation"
      />
      <main>
        <SolutionHero
          eyebrow="Home Automation Solutions"
          title="Home Automation Solutions"
          description="Automate and control the devices in your home from one connected environment. Internet-enabled systems give you complete control over comfort, entertainment, security, and everyday productivity."
          primaryCta="Plan Your Smart Home"
          secondaryCta="Explore Home Automation"
        />
        <SolutionPartnerStrip
          partners={['Sonos', 'Crestron', 'Extron']}
          label="Home Automation Partners"
        />
      </main>
    </>
  )
}