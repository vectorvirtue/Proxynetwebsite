import SupportHero from "../components/support/SupportHero"
import SupportOptions from "../components/support/SupportOptions"
import SLAStandards from "../components/support/SLAStandards"
import MaintenanceRequest from "../components/support/MaintenanceRequest"
import FAQs from "../components/support/FAQs"
import CustomerSuccess from "../components/support/CustomerSuccess"
import OnboardingResources from "../components/support/OnboardingResources"

export default function Support() {
  return (
    <main>
      <SupportHero />
      <SupportOptions />
      <SLAStandards />
      <CustomerSuccess />
      <FAQs />
      <MaintenanceRequest />
      <OnboardingResources />
    </main>
  )
}