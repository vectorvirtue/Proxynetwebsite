import { motion } from 'framer-motion'
import { BookOpen, ArrowRight } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import styles from './Programme.module.css'

export default function InternshipProgramme() {
  const { t } = useLang()

  const departments = [
    { nameKey: 'internDept1Name', durKey: 'internDuration1' },
    { nameKey: 'internDept2Name', durKey: 'internDuration2' },
    { nameKey: 'internDept3Name', durKey: 'internDuration3' },
    { nameKey: 'internDept4Name', durKey: 'internDuration4' },
    { nameKey: 'internDept5Name', durKey: 'internDuration5' },
    { nameKey: 'internDept6Name', durKey: 'internDuration6' },
  ]

  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className={styles.inner}>
        <motion.div className={`${styles.iconWrap} ${styles.iconAlt}`} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <BookOpen size={32} />
        </motion.div>

        <motion.div className={styles.content} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <p className={styles.eyebrow}>{t.internEyebrow}</p>
          <h2 className={styles.heading}>{t.internHeading}</h2>
          <p className={styles.sub}>{t.internSub}</p>

          <h3 className={styles.colTitle}>{t.internDeptsHeading}</h3>
          <div className={styles.deptGrid}>
            {departments.map((d, i) => (
              <div key={i} className={styles.deptCard}>
                <p className={styles.deptName}>{t[d.nameKey]}</p>
                <p className={styles.deptDuration}>{t[d.durKey]}</p>
              </div>
            ))}
          </div>

          <a href="#apply" className={styles.cta}>
            {t.applyForInternship} <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
