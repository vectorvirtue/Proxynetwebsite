import { motion } from 'framer-motion'
import { useLang } from '../../context/LanguageContext'
import styles from './Timeline.module.css'

export default function Timeline() {
  const { t } = useLang()

  const milestones = [
    { year: '2004', title: t.tm2004Title, desc: t.tm2004Desc },
    { year: '2008', title: t.tm2008Title, desc: t.tm2008Desc },
    { year: '2010', title: t.tm2010Title, desc: t.tm2010Desc },
    { year: '2012', title: t.tm2012Title, desc: t.tm2012Desc },
    { year: '2014', title: t.tm2014Title, desc: t.tm2014Desc },
    { year: '2016', title: t.tm2016Title, desc: t.tm2016Desc },
    { year: '2019', title: t.tm2019Title, desc: t.tm2019Desc },
    { year: '2024', title: t.tm2024Title, desc: t.tm2024Desc },
  ]

  return (
    <section id="timeline" className={styles.section}>
      <div className={styles.inner}>
        <motion.div className={styles.header} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className={styles.eyebrow}>{t.timelineEyebrow}</p>
          <h2 className={styles.heading}>{t.timelineHeading}</h2>
        </motion.div>
        <div className={styles.timeline}>
          {milestones.map((m, i) => (
            <motion.div key={m.year} className={`${styles.item} ${i % 2 === 0 ? styles.left : styles.right}`} initial={{ opacity: 0, x: i % 2 === 0 ? -32 : 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
              <div className={styles.content}>
                <span className={styles.year}>{m.year}</span>
                <h3 className={styles.title}>{m.title}</h3>
                <p className={styles.desc}>{m.desc}</p>
              </div>
              <div className={styles.dot} />
            </motion.div>
          ))}
          <div className={styles.line} />
        </div>
      </div>
    </section>
  )
}
