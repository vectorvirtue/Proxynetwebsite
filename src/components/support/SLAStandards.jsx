import { motion } from 'framer-motion'
import { Clock, AlertTriangle, CheckCircle, ArrowUp } from 'lucide-react'
import styles from './SLAStandards.module.css'

const slas = [
  { priority: 'Critical', icon: <AlertTriangle size={18} />, color: '#dc2626', response: '1 hour', resolution: '4 hours', desc: 'Complete system outage or security breach affecting business operations.' },
  { priority: 'High', icon: <ArrowUp size={18} />, color: '#d97706', response: '4 hours', resolution: '8 hours', desc: 'Major functionality impaired. Significant impact on business operations.' },
  { priority: 'Medium', icon: <Clock size={18} />, color: '#2563eb', response: '8 hours', resolution: '24 hours', desc: 'Partial functionality impaired. Workaround available.' },
  { priority: 'Low', icon: <CheckCircle size={18} />, color: '#059669', response: '24 hours', resolution: '72 hours', desc: 'Minor issue or general enquiry. No significant business impact.' },
]

export default function SLAStandards() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div className={styles.header} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className={styles.eyebrow}>Service Standards</p>
          <h2 className={styles.heading}>Our SLA Commitments</h2>
          <p className={styles.sub}>We publish our response and resolution times openly. You always know what to expect when you raise a support request.</p>
        </motion.div>

        <div className={styles.table}>
          <div className={styles.tableHead}>
            <span>Priority</span>
            <span>Description</span>
            <span>Response Time</span>
            <span>Resolution Target</span>
          </div>
          {slas.map((s, i) => (
            <motion.div key={s.priority} className={styles.tableRow} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}>
              <div className={styles.priority} style={{ '--c': s.color }}>
                <span className={styles.priorityIcon}>{s.icon}</span>
                {s.priority}
              </div>
              <p className={styles.desc}>{s.desc}</p>
              <span className={styles.time}>{s.response}</span>
              <span className={styles.time}>{s.resolution}</span>
            </motion.div>
          ))}
        </div>

        <motion.div className={styles.windows} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
          <div className={styles.window}><strong>Service Window</strong><span>24 hours / 7 days a week / 365 days a year</span></div>
          <div className={styles.window}><strong>Escalation Path</strong><span>Support Engineer → Senior Engineer → Support Manager → CTO</span></div>
        </motion.div>
      </div>
    </section>
  )
}
