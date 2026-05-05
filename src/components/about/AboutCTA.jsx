import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLang } from '../../context/LanguageContext'
import styles from './AboutCTA.module.css'

export default function AboutCTA() {
  const { t } = useLang()
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.content}
        >
          <h2 className={styles.heading}>{t.readyToWorkWithUs}</h2>
          <p className={styles.sub}>{t.aboutCtaSub}</p>
          <div className={styles.ctas}>
            <Link to="/contact" className={styles.primary}>{t.contactUs}</Link>
            <Link to="/solutions" className={styles.secondary}>{t.viewOurSolutions}</Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
