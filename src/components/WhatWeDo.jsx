import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TvMinimal, Layers, Code2, Network, ShieldCheck, Smartphone, Globe, ServerCog } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import styles from './WhatWeDo.module.css'

const getCategories = (t) => [
  { icon: <TvMinimal size={32} />, label: t.lfdSignage, desc: t.lfdSignageDesc, detail: t.lfdSignageDetail },
  { icon: <Layers size={32} />, label: t.systemsIntegration, desc: t.systemsIntegrationDesc, detail: t.systemsIntegrationDetail },
  { icon: <Code2 size={32} />, label: t.enterpriseSoftware, desc: t.enterpriseSoftwareDesc, detail: t.enterpriseSoftwareDetail },
  { icon: <Network size={32} />, label: t.enterpriseNetworking, desc: t.enterpriseNetworkingDesc, detail: t.enterpriseNetworkingDetail },
  { icon: <ShieldCheck size={32} />, label: t.networkSecurity, desc: t.networkSecurityDesc, detail: t.networkSecurityDetail },
  { icon: <ServerCog size={32} />, label: t.disasterRecovery, desc: t.disasterRecoveryDesc, detail: t.disasterRecoveryDetail },
  { icon: <Globe size={32} />, label: t.enterpriseNetworkingWan, desc: t.enterpriseNetworkingWanDesc, detail: t.enterpriseNetworkingWanDetail },
  { icon: <Smartphone size={32} />, label: t.mobileApps, desc: t.mobileAppsDesc, detail: t.mobileAppsDetail },
]

export default function WhatWeDo() {
  const { t } = useLang()
  const [active, setActive] = useState(null)
  const categories = getCategories(t)

  return (
    <section className={styles.section} aria-labelledby="what-we-do-heading">
      <div className={styles.inner}>

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.eyebrow}>{t.whatWeDoEyebrow}</p>
          <h2 id="what-we-do-heading" className={styles.heading}>{t.whatWeDoHeading}</h2>
          <p className={styles.clarification}>{t.whatWeDoClarity}</p>
        </motion.div>

        {/* Interactive icon grid */}
        <div className={styles.grid}>
          {categories.map((cat, i) => (
            <motion.button
              key={cat.label}
              className={`${styles.card} ${active === i ? styles.cardActive : ''}`}
              onClick={() => setActive(active === i ? null : i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              aria-expanded={active === i}
            >
              <div className={styles.iconWrap}>{cat.icon}</div>
              <h3 className={styles.cardLabel}>{cat.label}</h3>
              <p className={styles.cardDesc}>{cat.desc}</p>

              <AnimatePresence>
                {active === i && (
                  <motion.p
                    className={styles.cardDetail}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {cat.detail}
                  </motion.p>
                )}
              </AnimatePresence>

              <span className={styles.toggle} aria-hidden="true">
                {active === i ? '−' : '+'}
              </span>
            </motion.button>
          ))}
        </div>

      </div>
    </section>
  )
}
