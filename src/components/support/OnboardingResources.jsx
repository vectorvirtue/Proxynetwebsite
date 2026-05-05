import { motion } from 'framer-motion'
import { FileText, Video, BookOpen, Download, ArrowRight } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import styles from './OnboardingResources.module.css'

export default function OnboardingResources() {
  const { t } = useLang()

  const resources = [
    { icon: <FileText size={22} />, title: t.onboard1Title, desc: t.onboard1Desc, type: t.onboard1Type },
    { icon: <Video size={22} />, title: t.onboard2Title, desc: t.onboard2Desc, type: t.onboard2Type },
    { icon: <BookOpen size={22} />, title: t.onboard3Title, desc: t.onboard3Desc, type: t.onboard3Type },
    { icon: <Download size={22} />, title: t.onboard4Title, desc: t.onboard4Desc, type: t.onboard4Type },
  ]

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div className={styles.header} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className={styles.eyebrow}>{t.onboardEyebrow}</p>
          <h2 className={styles.heading}>{t.onboardHeading}</h2>
          <p className={styles.sub}>{t.onboardSub}</p>
        </motion.div>
        <div className={styles.grid}>
          {resources.map((r, i) => (
            <motion.div key={r.title} className={styles.card} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} whileHover={{ y: -4 }}>
              <div className={styles.icon}>{r.icon}</div>
              <span className={styles.type}>{r.type}</span>
              <h3 className={styles.title}>{r.title}</h3>
              <p className={styles.desc}>{r.desc}</p>
              <a href="mailto:info@proxynetgroup.com" className={styles.link}>{t.requestAccess} <ArrowRight size={14} /></a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
