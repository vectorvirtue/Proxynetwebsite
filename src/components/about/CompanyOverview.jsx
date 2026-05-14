import { motion } from 'framer-motion'
import { useLang } from '../../context/LanguageContext'
import styles from './CompanyOverview.module.css'

export default function CompanyOverview() {
  const { t } = useLang()
  return (
    <section id="overview" className={styles.section}>
      <div className={styles.inner}>
        <motion.div className={styles.left} initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className={styles.eyebrow}>{t.overviewEyebrow}</p>
          <h2 className={styles.heading}>{t.overviewHeading}</h2>
        </motion.div>
        <motion.div className={styles.right} initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <p className={styles.body}>{t.overviewBody1}</p>
          <p className={styles.body}>{t.overviewBody2}</p>
          <p className={styles.body}>{t.overviewBody3}</p>
        </motion.div>
      </div>
    </section>
  )
}
