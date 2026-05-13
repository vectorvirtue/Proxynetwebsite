import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight, ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import { useLang } from '../context/LanguageContext'
import samsungLogo from '../assets/samsung.png'
import logitechLogo from '../assets/logitech.png'
import canonLogo from '../assets/canon.png'
import yealinkLogo from '../assets/yealink.png'
import microsoftLogo from '../assets/microsoft.png'
import dahuaLogo from '../assets/dahua.png'
import vtLogo from '../assets/vt.webp'
import styles from './Partners.module.css'

const partners = [
  { logo: samsungLogo,   name: 'Samsung',   type: 'Authorised B2B Partner',              desc: 'Large format displays, videowalls, smart signage, and commercial AV solutions.' },
  { logo: logitechLogo,  name: 'Logitech',  type: 'Authorised Distributor',              desc: 'Video collaboration, peripherals, and enterprise workspace solutions.' },
  { logo: microsoftLogo, name: 'Microsoft', type: 'Authorised Partner',                  desc: 'Enterprise software, cloud services, and Microsoft 365 licensing.' },
  { logo: canonLogo,     name: 'Canon',     type: 'Authorised Distributor',              desc: 'Printers, scanners, cameras, and document management solutions.' },
  { logo: yealinkLogo,   name: 'Yealink',   type: 'Authorised Distributor & Integrator', desc: 'IP phones, video conferencing, and unified communications.' },
  { logo: dahuaLogo,     name: 'Dahua',     type: 'Authorised Distributor',              desc: 'CCTV, IP cameras, NVR systems, and security surveillance.' },
  { logo: vtLogo,        name: 'VT',        type: 'Authorised Distributor',              desc: 'Professional headsets and communication devices across West Africa.' },
]

export default function Partners() {
  const { t } = useLang()
  return (
    <>
      <SEO
        title="Our Technology Partners — Proxynet Group"
        description="Proxynet Group holds authorised distributor and partner status with Samsung, Logitech, Microsoft, Canon, Yealink, Dahua, and VT."
        canonical="/partners"
      />
      <main>
        {/* Hero */}
        <section className={`${styles.hero} heroScene`}>
          <div className={styles.heroOverlay} />
          <div className={styles.heroInner}>
            <motion.nav className={styles.breadcrumb} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <Link to="/" className={styles.crumb}>{t.home}</Link>
              <ChevronRight size={14} className={styles.sep} />
              <Link to="/partnerships" className={styles.crumb}>{t.partnershipsNav}</Link>
              <ChevronRight size={14} className={styles.sep} />
              <span className={styles.crumbActive}>{t.partnersHeading}</span>
            </motion.nav>
            <motion.p className={styles.eyebrow} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}>
              {t.partnersEyebrow}
            </motion.p>
            <motion.h1 className={styles.heroTitle} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              {t.partnersHeading}
            </motion.h1>
            <motion.p className={styles.heroSub} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              {t.partnersSub}
            </motion.p>
          </div>
        </section>

        {/* Partner grid */}
        <section className={styles.section}>
          <div className={styles.inner}>
          <SectionBlobs />
            <div className={styles.grid}>
              {partners.map((p, i) => (
                <motion.div key={p.name} className={styles.card} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}>
                  <div className={styles.logoWrap}>
                    <img src={p.logo} alt={p.name} className={styles.logo} />
                  </div>
                  <h3 className={styles.name}>{p.name}</h3>
                  <p className={styles.type}>{p.type}</p>
                  <p className={styles.desc}>{p.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div className={styles.cta} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={styles.ctaText}>{t.partnersFooterText}</p>
              <Link to="/partnerships" className={styles.ctaBtn}>
                {t.partnersBecome} <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}

