import { motion } from 'framer-motion'
import { HeartHandshake, RefreshCw, BarChart2, Users } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import styles from './CustomerSuccess.module.css'

export default function CustomerSuccess() {
  const { t } = useLang()

  const pillars = [
    { icon: <RefreshCw size={22} />, title: t.csProactiveTitle, desc: t.csProactiveDesc },
    { icon: <Users size={22} />, title: t.csDedicatedTitle, desc: t.csDedicatedDesc },
    { icon: <BarChart2 size={22} />, title: t.csReviewsTitle, desc: t.csReviewsDesc },
    { icon: <HeartHandshake size={22} />, title: t.csPartnershipTitle, desc: t.csPartnershipDesc },
  ]

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div className={styles.left} initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className={styles.eyebrow}>{t.csEyebrow}</p>
          <h2 className={styles.heading}>{t.csHeading}</h2>
          <p className={styles.body}>{t.csBody1}</p>
          <p className={styles.body}>{t.csBody2}</p>
        </motion.div>
        <motion.div className={styles.right} initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          {pillars.map((p, i) => (
            <motion.div key={p.title} className={styles.pillar} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}>
              <div className={styles.pillarIcon}>{p.icon}</div>
              <div>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarDesc}>{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
