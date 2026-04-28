import { motion } from 'framer-motion'
import { BookOpen, ArrowRight } from 'lucide-react'
import styles from './Programme.module.css'

const departments = [
  { name: 'Network Engineering', duration: '3–6 months' },
  { name: 'Cybersecurity', duration: '3–6 months' },
  { name: 'Software Development', duration: '3–6 months' },
  { name: 'AV & Systems Integration', duration: '3–6 months' },
  { name: 'Sales & Business Development', duration: '3 months' },
  { name: 'IT Support', duration: '3 months' },
]

export default function InternshipProgramme() {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className={styles.inner}>
        <motion.div className={`${styles.iconWrap} ${styles.iconAlt}`} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <BookOpen size={32} />
        </motion.div>

        <motion.div className={styles.content} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <p className={styles.eyebrow}>Internship Programme</p>
          <h2 className={styles.heading}>Learn by Doing</h2>
          <p className={styles.sub}>Our internship programme gives students and recent graduates hands-on experience working alongside experienced professionals on real client projects.</p>

          <h3 className={styles.colTitle}>Available Departments & Duration</h3>
          <div className={styles.deptGrid}>
            {departments.map(d => (
              <div key={d.name} className={styles.deptCard}>
                <p className={styles.deptName}>{d.name}</p>
                <p className={styles.deptDuration}>{d.duration}</p>
              </div>
            ))}
          </div>

          <a href="#apply" className={styles.cta}>
            Apply for Internship <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
