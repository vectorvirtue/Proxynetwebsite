import SEO from '../components/SEO'
import AdvancedSolutionPage from '../components/AdvancedSolutionPage'

export default function PhysicalSecuritySolutions() {
  return (
    <>
      <SEO title="Physical Security Solutions" description="Physical security solutions that help organisations prevent unwanted access to facilities, equipment, and resources." canonical="/solutions/physical-security" />
      <main>
        <AdvancedSolutionPage
          seo={{ description: 'Physical security solutions that help organisations prevent unwanted access to facilities, equipment, and resources.' }}
          hero={{ eyebrow: 'Physical Security Solutions', title: 'Physical Security Solutions', description: 'Protect your facilities, equipment, and people with practical physical security systems designed around your sites and operating needs.', primaryCta: 'Request a Security Assessment', secondaryCta: 'Our Security Partners' }}
          capabilities={[{ title: 'Access control', description: 'Manage who can enter, where they can go, and when access is permitted.' }, { title: 'Video surveillance', description: 'Improve visibility across critical areas with dependable monitoring and recording.' }, { title: 'Integrated protection', description: 'Connect security systems into a coordinated solution that is easier to manage.' }]}
          partners={['Hikvision', 'ZKTeco', 'Hanwha', 'Bosch']}
        />
      </main>
    </>
  )
}