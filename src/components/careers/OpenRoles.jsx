import { motion } from 'framer-motion'
import { MapPin, Briefcase, Clock, ArrowRight } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import styles from './OpenRoles.module.css'

export default function OpenRoles() {
  const { t } = useLang()

  const roles = [
    { titleKey: 'openRole1Title', deptKey: 'openRole1Dept', location: 'Lagos, Nigeria', posted: 'April 20, 2026' },
    { titleKey: 'openRole2Title', deptKey: 'openRole2Dept', location: 'Lagos, Nigeria', posted: 'April 18, 2026' },
    { titleKey: 'openRole3Title', deptKey: 'openRole3Dept', location: 'Lagos, Nigeria', posted: 'April 15, 2026' },
    { titleKey: 'openRole4Title', deptKey: 'openRole4Dept', location: 'Lagos, Nigeria', posted: 'April 10, 2026' },
    { titleKey: 'openRole5Title', deptKey: 'openRole5Dept', location: 'Abuja, Nigeria', posted: 'April 8, 2026' },
    { titleKey: 'openRole6Title', deptKey: 'openRole6Dept', location: 'Lagos, Nigeria', posted: 'April 5, 2026' },
  ]

  return (
    <section id="roles" className={styles.section}>
      <div className={styles.inner}>
        <motion.div className={styles.header} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className={styles.eyebrow}>{t.openRolesEyebrow}</p>
          <h2 className={styles.heading}>{t.openRolesHeading}</h2>
        </motion.div>

        <div className={styles.list}>
          {roles.map((r, i) => (
            <motion.div key={r.titleKey} className={styles.row} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}>
              <div className={styles.rowLeft}>
                <h3 className={styles.roleTitle}>{t[r.titleKey]}</h3>
                <div className={styles.meta}>
                  <span className={styles.dept}>{t[r.deptKey]}</span>
                  <span className={styles.metaItem}><MapPin size={13} />{r.location}</span>
                  <span className={styles.metaItem}><Briefcase size={13} />{t.openRolesFullTime}</span>
                  <span className={styles.metaItem}><Clock size={13} />{t.openRolesPostedLabel} {r.posted}</span>
                </div>
              </div>
              <a href="#apply" className={styles.applyBtn}>
                {t.apply} <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
