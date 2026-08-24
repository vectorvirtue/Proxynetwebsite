import SEO from '../components/SEO'
import AdvancedSolutionPage from '../components/AdvancedSolutionPage'

export default function TouchscreenSolutions() {
  return (
    <>
      <SEO title="Touchscreen Solutions" description="Interactive touchscreen solutions designed to support everyday productivity across workplaces, schools, retail environments, and public spaces." canonical="/solutions/touchscreen" />
      <main>
        <AdvancedSolutionPage
          seo={{ description: 'Interactive touchscreen solutions designed to support everyday productivity across workplaces, schools, retail environments, and public spaces.' }}
          hero={{ eyebrow: 'Touchscreen Solutions', title: 'Touchscreen Solutions', description: 'Make collaboration, learning, presentations, and customer engagement more natural with interactive displays designed for modern spaces.', primaryCta: 'Explore a Solution', secondaryCta: 'What We Enable' }}
          capabilities={[{ title: 'Collaborative workspaces', description: 'Share ideas, annotate content, and keep meetings moving with intuitive touch interaction.' }, { title: 'Smart classrooms', description: 'Support engaging lessons and digital learning with displays built for everyday use.' }, { title: 'Customer experiences', description: 'Create clear, interactive experiences for retail, reception, and public environments.' }]}
        />
      </main>
    </>
  )
}