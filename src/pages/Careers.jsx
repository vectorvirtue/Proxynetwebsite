import CareersHero from '../components/careers/CareersHero'
import LifeAtProxynet from '../components/careers/LifeAtProxynet'
import OpenRoles from '../components/careers/OpenRoles'
import GraduateProgramme from '../components/careers/GraduateProgramme'
import InternshipProgramme from '../components/careers/InternshipProgramme'
import ApplicationForm from '../components/careers/ApplicationForm'
import SEO from '../components/SEO'

export default function Careers() {
  return (
    <>
      <SEO
        title="Careers — Join Our Team"
        description="Build the future of technology in West Africa. Explore open roles, graduate programmes, and internship opportunities at Proxynet Group."
        canonical="/careers"
      />
      <main>
      <CareersHero />
      <LifeAtProxynet />
      <OpenRoles />
      <GraduateProgramme />
      <InternshipProgramme />
      <ApplicationForm />
    </main>
    </>
  )
}
