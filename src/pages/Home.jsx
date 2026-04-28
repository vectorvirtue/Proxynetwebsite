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

export default function Home() {
  return (
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
  )
}
