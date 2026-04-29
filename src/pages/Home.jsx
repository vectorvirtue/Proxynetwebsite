import Hero from '../components/Hero'
import StatsBar from '../components/StatsBar'
import WhatWeDo from '../components/WhatWeDo'
import Industries from '../components/Industries'
import FeaturedProjects from '../components/FeaturedProjects'
import PartnerLogos from '../components/PartnerLogos'
import SupportCTA from '../components/SupportCTA'
import Testimonials from '../components/Testimonials'
import BlogPreview from '../components/BlogPreview'
import FinalCTA from '../components/FinalCTA'
import SEO from '../components/SEO'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Proxynet Group',
  url: 'https://www.proxynetgroup.com',
  logo: 'https://www.proxynetgroup.com/PROXYNET LOGO ASSET.png',
  contactPoint: { '@type': 'ContactPoint', telephone: '+234-703-264-7755', contactType: 'customer service' },
  address: { '@type': 'PostalAddress', streetAddress: '5B Adedeji Close, off Opebi Road', addressLocality: 'Ikeja, Lagos', addressCountry: 'NG' },
  sameAs: ['https://www.linkedin.com/company/proxynet-communications', 'https://www.facebook.com/proxynetcommunications/', 'https://www.instagram.com/proxynetgroup/'],
}

export default function Home() {
  return (
    <>
      <SEO
        title="Enterprise Technology Solutions in West Africa"
        description="Proxynet Group delivers world-class IT infrastructure, cybersecurity, systems integration, and managed services for businesses across Africa."
        canonical="/"
        jsonLd={jsonLd}
      />
      <main>
        <Hero />
        <StatsBar />
        <WhatWeDo />
        <Industries />
        <FeaturedProjects />
        <PartnerLogos />
        <SupportCTA />
        <Testimonials />
        <BlogPreview />
        <FinalCTA />
      </main>
    </>
  )
}
