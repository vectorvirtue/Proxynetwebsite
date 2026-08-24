import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import SEO from '../components/SEO'
import SectionBlobs from '../components/SectionBlobs'
import SolutionPartnerStrip from '../components/SolutionPartnerStrip'
import { useLang } from '../context/LanguageContext'
import styles from './IoTSolutions.module.css'

export default function IoTSolutions() {
  const { t } = useLang()

  return (
    <>
      <SEO
        title="IoT & Smart Infrastructure Solutions"
        description="Proxynet delivers connected IoT and smart infrastructure solutions in partnership with TechScouts."
        canonical="/solutions/iot"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'IoT & Smart Infrastructure Solutions',
          provider: { '@type': 'Organization', name: 'Proxynet Group', url: 'https://www.proxynetgroup.com' },
          serviceType: 'IoT and Smart Infrastructure',
          url: 'https://www.proxynetgroup.com/solutions/iot',
        }}
      />
      <main>
        <section className={`${styles.hero} heroScene`}>
          <SectionBlobs variant="dark" />
          <div className={styles.heroOverlay} />
          <div className={styles.heroInner}>
            <motion.nav
              className={styles.breadcrumb}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Link to="/" className={styles.crumb}>{t.home}</Link>
              <ChevronRight size={14} className={styles.sep} />
              <Link to="/solutions" className={styles.crumb}>{t.solutions}</Link>
              <ChevronRight size={14} className={styles.sep} />
              <span className={styles.crumbActive}>{t.solIoT}</span>
            </motion.nav>

            <motion.p
              className={styles.eyebrow}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              {t.iotEyebrow}
            </motion.p>
            <motion.h1
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t.iotHeroTitle}
            </motion.h1>
            <motion.p
              className={styles.heroSub}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t.iotHeroSub}
            </motion.p>
            <motion.div
              className={styles.heroCtas}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a href="#enquire" className={styles.primary}>Explore a Solution</a>
              <a href="#capabilities" className={styles.secondary}>What We Connect</a>
            </motion.div>
          </div>
        </section>

        <SolutionPartnerStrip partners={['TechScouts', 'MakeBlock', 'Acebott']} label="IoT Partners" />
      </main>
    </>
  )
}