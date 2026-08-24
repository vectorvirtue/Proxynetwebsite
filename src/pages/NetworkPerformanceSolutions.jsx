import SEO from '../components/SEO'
import AdvancedSolutionPage from '../components/AdvancedSolutionPage'

export default function NetworkPerformanceSolutions() {
  return (
    <>
      <SEO title="Network Performance & Monitoring Solutions" description="Network performance and monitoring solutions available as hardware, virtual, and cloud software for complete visibility across hybrid and multicloud environments." canonical="/solutions/network-performance-monitoring" />
      <main>
        <AdvancedSolutionPage
          seo={{ description: 'Network performance and monitoring solutions available as hardware, virtual, and cloud software for complete visibility across hybrid and multicloud environments.' }}
          hero={{ eyebrow: 'Network Performance & Monitoring', title: 'Network Performance & Monitoring Solutions', description: 'Get clear visibility across hybrid and multicloud environments with monitoring that helps your team find issues early and keep services performing.', primaryCta: 'Improve Network Visibility', secondaryCta: 'Our Monitoring Partners' }}
          capabilities={[{ title: 'End-to-end visibility', description: 'See the health of networks, applications, devices, and services from one view.' }, { title: 'Faster troubleshooting', description: 'Use actionable alerts and performance data to find the cause of problems sooner.' }, { title: 'Flexible deployment', description: 'Choose hardware, virtual, or cloud monitoring that fits your current environment.' }]}
          partners={['Paessler', 'SolarWinds']}
        />
      </main>
    </>
  )
}