import { motion } from 'framer-motion'
import { GraduationCap, CheckCircle, ArrowRight } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import styles from './Programme.module.css'

export default function GraduateProgramme() {
  const { t } = useLang()

  const eligibility = [
    t.gradEligibility1, t.gradEligibility2,
    t.gradEligibility3, t.gradEligibility4,
  ]

  const gains = [
    t.gradGain1, t.gradGain2, t.gradGain3,
    t.gradGain4, t.gradGain5,
  ]

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div className={styles.iconWrap} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <GraduationCap size={32} />
        </motion.div>

        <motion.div className={styles.content} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <p className={styles.eyebrow}>{t.gradEyebrow}</p>
          <h2 className={styles.heading}>{t.gradHeading}</h2>
          <p className={styles.sub}>{t.gradSub}</p>

          <div className={styles.cols}>
            <div>
              <h3 className={styles.colTitle}>{t.gradEligibilityHeading}</h3>
              <ul className={styles.list}>
                {eligibility.map((e, i) => (
                  <li key={i} className={styles.listItem}>
                    <CheckCircle size={16} className={styles.check} />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={styles.colTitle}>{t.gradGainsHeading}</h3>
              <ul className={styles.list}>
                {gains.map((g, i) => (
                  <li key={i} className={styles.listItem}>
                    <CheckCircle size={16} className={styles.check} />
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <a href="#apply" className={styles.cta}>
            {t.applyForGraduate} <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
