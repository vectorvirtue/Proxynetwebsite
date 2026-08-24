import SEO from '../components/SEO'
import SolutionHero from '../components/SolutionHero'
import SolutionPartnerStrip from '../components/SolutionPartnerStrip'

export default function NetworkPerformanceSolutions() {
  return (
    <>
      <SEO title="Network Performance & Monitoring Solutions" description="Network performance and monitoring solutions available as hardware, virtual, and cloud software for complete visibility across hybrid and multicloud environments." canonical="/solutions/network-performance-monitoring" />
      <main>
        <SolutionHero
          eyebrow="Network Performance & Monitoring"
          title="Network Performance & Monitoring Solutions"
          description="Available as hardware, virtual, and cloud software, our monitoring solutions give you complete visibility across hybrid or multicloud environments."
          primaryCta="Improve Network Visibility"
          secondaryCta="Our Monitoring Partners"
          secondaryHref="#partners"
        />
        <div id="partners"><SolutionPartnerStrip partners={['Paessler', 'SolarWinds']} label="Monitoring Partners" /></div>
      </main>
    </>
  )
}