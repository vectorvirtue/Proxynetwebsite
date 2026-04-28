import { motion } from 'framer-motion'
import { GraduationCap, CheckCircle, ArrowRight } from 'lucide-react'
import styles from './Programme.module.css'

const eligibility = [
  'Recent graduate (within 2 years) in Computer Science, Engineering, IT, or related field',
  'Minimum Second Class Upper (2:1) degree or equivalent',
  'Strong analytical and problem-solving skills',
  'Passion for technology and eagerness to learn',
]

const gains = [
  '12-month structured rotation across key departments',
  'Mentorship from senior engineers and managers',
  'Professional certifications sponsored by Proxynet',
  'Competitive graduate salary and benefits',
  'Full-time offer upon successful completion',
]

export default function GraduateProgramme() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div className={styles.iconWrap} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <GraduationCap size={32} />
        </motion.div>

        <motion.div className={styles.content} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <p className={styles.eyebrow}>Graduate Programme</p>
          <h2 className={styles.heading}>Start Your Career at the Top</h2>
          <p className={styles.sub}>Our Graduate Programme is designed to fast-track exceptional young talent into technology careers. You will rotate across departments, work on live projects, and be mentored by industry experts.</p>

          <div className={styles.cols}>
            <div>
              <h3 className={styles.colTitle}>Eligibility</h3>
              <ul className={styles.list}>
                {eligibility.map(e => (
                  <li key={e} className={styles.listItem}>
                    <CheckCircle size={16} className={styles.check} />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={styles.colTitle}>What You Gain</h3>
              <ul className={styles.list}>
                {gains.map(g => (
                  <li key={g} className={styles.listItem}>
                    <CheckCircle size={16} className={styles.check} />
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <a href="#apply" className={styles.cta}>
            Apply for Graduate Programme <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
