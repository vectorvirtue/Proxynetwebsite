import { motion } from 'framer-motion'
import { Target, Eye } from 'lucide-react'
import styles from './MissionVision.module.css'

export default function MissionVision() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.iconWrap}><Target size={28} /></div>
          <p className={styles.label}>Our Mission</p>
          <h2 className={styles.statement}>
            To attain and maintain leadership in the ICT Industry through the provision of the highest quality of service that will give our customers unsurpassed value in a cost effective and responsible manner — bringing value creation to the community as a whole.
          </h2>
        </motion.div>

        <motion.div
          className={`${styles.card} ${styles.cardDark}`}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className={styles.iconWrap}><Eye size={28} /></div>
          <p className={styles.label}>Our Vision</p>
          <h2 className={styles.statement}>
            To be a definition of true success in the delivery and support of ICT Solutions globally — through the achievement of superior technology to our customer base by consistently aligning with the dynamics of the information age while setting and maintaining standards.
          </h2>
        </motion.div>
      </div>
    </section>
  )
}
