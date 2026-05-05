import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight, BookOpen, Leaf, Users, Wifi, Download, ExternalLink } from 'lucide-react'
import SEO from '../components/SEO'
import styles from './CSR.module.css'

const categories = [
  { icon: <BookOpen size={28} />, title: 'Education', desc: 'Equipping schools with technology, funding scholarships, and supporting digital literacy programmes across underserved communities.' },
  { icon: <Leaf size={28} />, title: 'Environment', desc: 'Responsible e-waste disposal, energy-efficient deployments, and supporting green technology initiatives across our operations.' },
  { icon: <Users size={28} />, title: 'Community Development', desc: 'Partnering with local organisations to support youth empowerment, skills development, and community infrastructure projects.' },
  { icon: <Wifi size={28} />, title: 'Digital Inclusion', desc: 'Bridging the digital divide by providing connectivity, devices, and training to communities with limited access to technology.' },
]

const stories = [
  {
    title: 'Smart Classroom Donation — Ikorodu Community School',
    category: 'Education',
    outcome: 'Donated and installed 2 interactive displays and a computer lab serving 400+ students.',
    desc: 'In partnership with the Lagos State Ministry of Education, Proxynet donated and installed smart classroom equipment at Ikorodu Community Secondary School, transforming learning for over 400 students.',
  },
  {
    title: 'Digital Skills Training — Surulere Youth Centre',
    category: 'Digital Inclusion',
    outcome: '120 young people trained in basic ICT skills over 3 months.',
    desc: 'Our EdTech team delivered a 3-month digital skills programme at the Surulere Youth Centre, training 120 young people in computer basics, internet safety, and productivity tools.',
  },
  {
    title: 'E-Waste Recycling Drive — Ikeja',
    category: 'Environment',
    outcome: '2.4 tonnes of e-waste responsibly disposed of.',
    desc: 'Proxynet organised a community e-waste collection drive in Ikeja, collecting and responsibly disposing of 2.4 tonnes of electronic waste that would otherwise have ended up in landfill.',
  },
  {
    title: 'Connectivity for Rural Health Clinic — Ogun State',
    category: 'Community Development',
    outcome: 'Reliable internet access provided to a clinic serving 5,000+ patients annually.',
    desc: 'We provided and installed internet connectivity infrastructure for a rural health clinic in Ogun State, enabling telemedicine consultations and digital health record management.',
  },
]

const partners = [
  'Lagos State Ministry of Education',
  'Nigerian Educational Research and Development Council (NERDC)',
  'Junior Achievement Nigeria',
  'Fate Foundation',
  'Lagos State Environmental Protection Agency (LASEPA)',
  'Surulere Youth Development Centre',
]

export default function CSR() {
  return (
    <>
      <SEO
        title="CSR & Community — Technology That Gives Back"
        description="Proxynet Group's corporate social responsibility initiatives — education, digital inclusion, environmental responsibility, and community development across West Africa."
        canonical="/csr"
      />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay} />
          <div className={styles.heroInner}>
            <motion.nav className={styles.breadcrumb} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <Link to="/" className={styles.crumb}>Home</Link>
              <ChevronRight size={14} className={styles.sep} />
              <span className={styles.crumbActive}>CSR & Community</span>
            </motion.nav>
            <motion.h1 className={styles.heroTitle} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              Technology That Gives Back
            </motion.h1>
            <motion.p className={styles.heroSub} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              At Proxynet, we believe technology should benefit everyone — not just those who can afford it. Our CSR programme puts that belief into action.
            </motion.p>
          </div>
        </section>

        {/* Initiative categories */}
        <section className={styles.section}>
          <div className={styles.inner}>
            <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={styles.eyebrow}>Our Focus Areas</p>
              <h2 className={styles.heading}>Where We Make an Impact</h2>
            </motion.div>
            <div className={styles.catGrid}>
              {categories.map((c, i) => (
                <motion.div key={c.title} className={styles.catCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
                  <div className={styles.catIcon}>{c.icon}</div>
                  <h3 className={styles.catTitle}>{c.title}</h3>
                  <p className={styles.catDesc}>{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact stories */}
        <section className={styles.sectionAlt}>
          <div className={styles.inner}>
            <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={styles.eyebrow}>Impact Stories</p>
              <h2 className={styles.heading}>What We Have Done</h2>
            </motion.div>
            <div className={styles.storiesGrid}>
              {stories.map((s, i) => (
                <motion.div key={s.title} className={styles.storyCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
                  <div className={styles.storyImg} />
                  <div className={styles.storyBody}>
                    <span className={styles.storyCat}>{s.category}</span>
                    <h3 className={styles.storyTitle}>{s.title}</h3>
                    <p className={styles.storyDesc}>{s.desc}</p>
                    <div className={styles.storyOutcome}>
                      <span className={styles.outcomeLabel}>Outcome</span>
                      <p className={styles.outcomeText}>{s.outcome}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner organisations */}
        <section className={styles.sectionDark}>
          <div className={styles.inner}>
            <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={styles.eyebrowLight}>Partner Organisations</p>
              <h2 className={styles.headingLight}>Who We Work With</h2>
            </motion.div>
            <div className={styles.partnerGrid}>
              {partners.map((p, i) => (
                <motion.div key={p} className={styles.partnerCard} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.06 }}>
                  <Users size={18} className={styles.partnerIcon} />
                  <span>{p}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CSR Report download */}
        <section className={styles.section}>
          <div className={styles.inner}>
            <motion.div className={styles.reportCard} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className={styles.reportLeft}>
                <p className={styles.eyebrow}>CSR Report</p>
                <h2 className={styles.reportHeading}>Download Our CSR Report</h2>
                <p className={styles.reportSub}>Our annual CSR report details our initiatives, impact metrics, and commitments for the year ahead.</p>
              </div>
              <div className={styles.reportRight}>
                <a href="mailto:info@proxynetgroup.com?subject=CSR Report Request" className={styles.downloadBtn}>
                  <Download size={18} /> Request Report
                </a>
                <Link to="/contact" className={styles.contactBtn}>
                  <ExternalLink size={16} /> Get Involved
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}
