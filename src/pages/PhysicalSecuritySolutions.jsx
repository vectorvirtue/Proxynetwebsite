import SEO from '../components/SEO'
import SolutionHero from '../components/SolutionHero'
import SolutionPartnerStrip from '../components/SolutionPartnerStrip'

export default function PhysicalSecuritySolutions() {
  return (
    <>
      <SEO title="Physical Security Solutions" description="Physical security solutions that help organisations prevent unwanted access to facilities, equipment, and resources." canonical="/solutions/physical-security" />
      <main>
        <SolutionHero
          eyebrow="Physical Security Solutions"
          title="Physical Security Solutions"
          description="Security measures are essential in every organisation to prevent unwanted access to facilities, equipment, and resources. We design and deploy practical systems that help protect what matters."
          primaryCta="Request a Security Assessment"
          secondaryCta="Our Security Partners"
          secondaryHref="#partners"
        />
        <div id="partners"><SolutionPartnerStrip partners={['Hikvision', 'ZKTeco', 'Hanwha', 'Bosch']} label="Security Partners" /></div>
      </main>
    </>
  )
}