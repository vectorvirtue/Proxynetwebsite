import { motion } from 'framer-motion'
import { Clock, AlertTriangle, CheckCircle, ArrowUp } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import styles from './SLAStandards.module.css'

export default function SLAStandards() {
  const { t } = useLang()

  const slas = [
    { priorityKey: t.slaCritical, icon: <AlertTriangle size={18} />, color: '#dc2626', response: '1 hour', resolution: '4 hours', desc: t.slaCriticalDesc },
    { priorityKey: t.slaHigh, icon: <ArrowUp size={18} />, color: '#d97706', response: '4 hours', resolution: '8 hours', desc: t.slaHighDesc },
    { priorityKey: t.slaMedium, icon: <Clock size={18} />, color: '#2563eb', response: '8 hours', resolution: '24 hours', desc: t.slaMediumDesc },
    { priorityKey: t.slaLow, icon: <CheckCircle size={18} />, color: '#059669', response: '24 hours', resolution: '72 hours', desc: t.slaLowDesc },
  ]

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div className={styles.header} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className={styles.eyebrow}>{t.slaEyebrow}</p>
          <h2 className={styles.heading}>{t.slaHeading}</h2>
          <p className={styles.sub}>{t.slaSub}</p>
        </motion.div>
        <div className={styles.table}>
          <div className={styles.tableHead}>
            <span>{t.slaPriority}</span>
            <span>{t.slaDescription}</span>
            <span>{t.slaResponse}</span>
            <span>{t.slaResolution}</span>
          </div>
          {slas.map((s, i) => (
            <motion.div key={s.priorityKey} className={styles.tableRow} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}>
              <div className={styles.priority} style={{ '--c': s.color }}>
                <span className={styles.priorityIcon}>{s.icon}</span>
                {s.priorityKey}
              </div>
              <p className={styles.desc}>{s.desc}</p>
              <span className={styles.time}>{s.response}</span>
              <span className={styles.time}>{s.resolution}</span>
            </motion.div>
          ))}
        </div>
        <motion.div className={styles.windows} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
          <div className={styles.window}><strong>{t.slaServiceWindow}</strong><span>{t.slaServiceWindowVal}</span></div>
          <div className={styles.window}><strong>{t.slaEscalation}</strong><span>{t.slaEscalationVal}</span></div>
        </motion.div>
      </div>
    </section>
  )
}
