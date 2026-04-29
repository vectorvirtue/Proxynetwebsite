import SEO from '../components/SEO'
import SupportHero from '../components/support/SupportHero'
import SupportOptions from '../components/support/SupportOptions'
import SLAStandards from '../components/support/SLAStandards'
import MaintenanceRequest from '../components/support/MaintenanceRequest'
import FAQs from '../components/support/FAQs'
import CustomerSuccess from '../components/support/CustomerSuccess'
import OnboardingResources from '../components/support/OnboardingResources'

export default function Support() {
  return (
    <>
      <SEO
        title="Customer Support — 24/7 Technical Support"
        description="Proxynet Group provides 24/7 IT support across West Africa. Raise a ticket, call us, or chat on WhatsApp. View our SLA commitments and FAQs."
        canonical="/support"
      />
      <main>
        <SupportHero />
        <SupportOptions />
        <SLAStandards />
        <CustomerSuccess />
        <FAQs />
        <MaintenanceRequest />
        <OnboardingResources />
      </main>
    </>
  )
}
