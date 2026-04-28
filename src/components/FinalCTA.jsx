import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'
import styles from './FinalCTA.module.css'

export default function FinalCTA() {
  const { t } = useLang()
  return (
    <section className={styles.section} aria-labelledby="final-cta-heading">
      <div className={styles.inner}>
        <motion.h2
          id="final-cta-heading"
          className={styles.heading}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t.finalCtaHeading}
        </motion.h2>
        <motion.p
          className={styles.sub}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t.finalCtaSub}
        </motion.p>
        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link to="/contact" className={styles.primary}>{t.getInTouch}</Link>
          <Link to="/solutions" className={styles.secondary}>{t.exploreSolutions}</Link>
        </motion.div>
      </div>
    </section>
  )
}
