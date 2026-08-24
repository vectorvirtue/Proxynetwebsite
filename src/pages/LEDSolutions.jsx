import SEO from '../components/SEO'
import AdvancedSolutionPage from '../components/AdvancedSolutionPage'

export default function LEDSolutions() {
  return (
    <>
      <SEO
        title="LED Display Solutions"
        description="Professional LED display solutions for corporate, retail, broadcast, control room, and outdoor environments."
        canonical="/solutions/led"
      /> 
      <main>
        <AdvancedSolutionPage
          seo={{ description: 'Professional LED display solutions for corporate, retail, broadcast, control room, and outdoor environments.' }}
          hero={{ eyebrow: 'LED Display Solutions', title: 'LED Display Solutions', description: 'High-impact LED displays designed for clear communication, immersive experiences, and reliable performance across indoor and outdoor environments.', primaryCta: 'Plan Your LED Solution', secondaryCta: 'Explore Display Options' }}
          capabilities={[{ title: 'Corporate displays', description: 'Create impressive boardroom, lobby, and reception environments with crisp visual communication.' }, { title: 'Control room walls', description: 'Present critical information clearly across command centres and monitoring environments.' }, { title: 'Outdoor impact', description: 'Deploy bright, durable LED systems that keep your message visible in demanding conditions.' }]}
          partners={['Samsung', 'Dahua',  'Unilumin', 'Leyard', 'QSTECH']}
        />
      </main>
    </>
  )
}