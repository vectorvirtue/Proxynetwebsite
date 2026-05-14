import { motion } from 'framer-motion'
import { Target, Eye } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import styles from './MissionVision.module.css'

export default function MissionVision() {
  const { t } = useLang()
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div className={styles.card} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className={styles.iconWrap}><Target size={28} /></div>
          <p className={styles.label}>{t.ourMission}</p>
          <h2 className={styles.statement}>{t.missionStatement}</h2>
        </motion.div>
        <motion.div className={`${styles.card} ${styles.cardDark}`} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
          <div className={styles.iconWrap}><Eye size={28} /></div>
          <p className={styles.label}>{t.ourVision}</p>
          <h2 className={styles.statement}>{t.visionStatement}</h2>
        </motion.div>
      </div>
    </section>
  )
}
