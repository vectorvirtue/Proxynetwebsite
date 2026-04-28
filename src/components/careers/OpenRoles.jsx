import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Briefcase, Clock, ArrowRight } from 'lucide-react'
import styles from './OpenRoles.module.css'

const roles = [
  { title: 'Network Engineer', dept: 'Engineering', location: 'Lagos, Nigeria', type: 'Full-time', posted: 'April 20, 2026' },
  { title: 'Cybersecurity Analyst', dept: 'Security', location: 'Lagos, Nigeria', type: 'Full-time', posted: 'April 18, 2026' },
  { title: 'AV Systems Technician', dept: 'Engineering', location: 'Lagos, Nigeria', type: 'Full-time', posted: 'April 15, 2026' },
  { title: 'Software Developer', dept: 'Software', location: 'Lagos, Nigeria', type: 'Full-time', posted: 'April 10, 2026' },
  { title: 'IT Support Specialist', dept: 'Support', location: 'Abuja, Nigeria', type: 'Full-time', posted: 'April 8, 2026' },
  { title: 'Sales Executive', dept: 'Sales', location: 'Lagos, Nigeria', type: 'Full-time', posted: 'April 5, 2026' },
]

export default function OpenRoles() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="roles" className={styles.section}>
      <div className={styles.inner}>
        <motion.div className={styles.header} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className={styles.eyebrow}>Open Roles</p>
          <h2 className={styles.heading}>Current Opportunities</h2>
        </motion.div>

        <div className={styles.list}>
          {roles.map((r, i) => (
            <motion.div key={r.title} className={styles.row} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}>
              <div className={styles.rowLeft}>
                <h3 className={styles.roleTitle}>{r.title}</h3>
                <div className={styles.meta}>
                  <span className={styles.dept}>{r.dept}</span>
                  <span className={styles.metaItem}><MapPin size={13} />{r.location}</span>
                  <span className={styles.metaItem}><Briefcase size={13} />{r.type}</span>
                  <span className={styles.metaItem}><Clock size={13} />Posted {r.posted}</span>
                </div>
              </div>
              <a href="#apply" className={styles.applyBtn}>
                Apply <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
