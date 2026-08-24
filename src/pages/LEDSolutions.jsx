import SEO from '../components/SEO'
import SolutionHero from '../components/SolutionHero'
import SolutionPartnerStrip from '../components/SolutionPartnerStrip'

export default function LEDSolutions() {
  return (
    <>
      <SEO
        title="LED Display Solutions"
        description="Professional LED display solutions for corporate, retail, broadcast, control room, and outdoor environments."
        canonical="/solutions/led"
      />
      <main>
        <SolutionHero
          eyebrow="LED Display Solutions"
          title="LED Display Solutions"
          description="High-impact LED displays designed for clear communication, immersive experiences, and reliable performance across corporate, retail, broadcast, control room, and outdoor environments."
          primaryCta="Plan Your LED Solution"
          secondaryCta="Explore Display Options"
        />
        <SolutionPartnerStrip
          partners={['Unilumin', 'Samsung', 'Dahua', 'Leyard', 'QSTECH']}
          label="LED Technology Partners"
        />
      </main>
    </>
  )
}