import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HeartHandshake, ArrowRight, Clock, Users, Headphones } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import styles from './SupportCTA.module.css'

export default function SupportCTA() {
  const { t } = useLang()

  const pillars = [
    { icon: <Clock size={20} />, label: t.supportPillar1 },
    { icon: <Headphones size={20} />, label: t.supportPillar2 },
    { icon: <Users size={20} />, label: t.supportPillar3 },
  ]

  return (
    <section className={styles.section} aria-labelledby="support-cta-heading">
      <div className={styles.inner}>
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.iconWrap} aria-hidden="true">
            <HeartHandshake size={32} />
          </div>
          <p className={styles.eyebrow}>{t.supportEyebrow}</p>
          <h2 id="support-cta-heading" className={styles.heading}>
            {t.supportHeading}
          </h2>
          <p className={styles.sub}>{t.supportSub}</p>
          <Link to="/support" className={styles.cta}>
            {t.supportCTALabel} <ArrowRight size={16} />
          </Link>
        </motion.div>

        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              className={styles.pillar}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
            >
              <div className={styles.pillarIcon}>{p.icon}</div>
              <p className={styles.pillarLabel}>{p.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
