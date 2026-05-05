import { motion } from 'framer-motion'
import { useLang } from '../../context/LanguageContext'
import styles from './Leadership.module.css'

const team = [
  { name: 'Ifeanyi Ozo-Onyali', titleKey: 'Chief Executive Officer', bioKey: 'Visionary leader with 20+ years driving technology transformation across Africa. Founded Proxynet in 2004 with a mission to bridge the infrastructure gap.' },
  { name: 'Theodora Usman', titleKey: 'Human Resources Manager', bioKey: 'Enterprise networking and cybersecurity expert. Leads Proxynet\'s technical strategy and oversees delivery of complex infrastructure projects.' },
  { name: 'Chijioke Okorie', titleKey: 'Chief Operating Officer', bioKey: 'Operations specialist with deep expertise in project management and service delivery. Ensures every client engagement meets Proxynet\'s quality standards.' },
  { name: 'Folasade', titleKey: 'Head of Finance', bioKey: 'Builds and manages Proxynet\'s relationships with global technology partners including Samsung, Microsoft, and IBM.' },
]

export default function Leadership() {
  const { t } = useLang()
  return (
    <section id="leadership" className={styles.section}>
      <div className={styles.inner}>
        <motion.div className={styles.header} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className={styles.eyebrow}>{t.leadershipEyebrow}</p>
          <h2 className={styles.heading}>{t.leadershipHeading}</h2>
        </motion.div>
        <div className={styles.grid}>
          {team.map((p, i) => (
            <motion.div key={p.name} className={styles.card} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -4 }}>
              <div className={styles.avatar}>
                <span className={styles.initials}>{p.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{p.name}</h3>
                <p className={styles.title}>{p.titleKey}</p>
                <p className={styles.bio}>{p.bioKey}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
