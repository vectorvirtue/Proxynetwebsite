import SEO from '../components/SEO'
import AdvancedSolutionPage from '../components/AdvancedSolutionPage'

export default function HomeAutomationSolutions() {
  return (
    <>
      <SEO
        title="Home Automation Solutions"
        description="Connected home automation solutions that allow devices to be controlled fully over the internet for greater comfort, convenience, and productivity."
        canonical="/solutions/home-automation"
      />
      <main>
        <AdvancedSolutionPage
          seo={{ description: 'Connected home automation solutions that allow devices to be controlled fully over the internet for greater comfort, convenience, and productivity.' }}
          hero={{ eyebrow: 'Home Automation Solutions', title: 'Home Automation Solutions', description: 'Automate and control the devices in your home from one connected environment, with systems designed for comfort, entertainment, security, and everyday productivity.', primaryCta: 'Plan Your Smart Home', secondaryCta: 'Explore Home Automation' }}
          capabilities={[{ title: 'Whole-home control', description: 'Bring lighting, climate, entertainment, and access control into one simple experience.' }, { title: 'Reliable connectivity', description: 'Build the network foundation your connected devices need to work together consistently.' }, { title: 'Designed for your space', description: 'Get a practical system planned around your rooms, routines, budget, and future needs.' }]}
          partners={['Sonos', 'Crestron', 'Extron']}
        />
      </main>
    </>
  )
}