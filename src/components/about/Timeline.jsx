import { motion } from 'framer-motion'
import styles from './Timeline.module.css'

const milestones = [
  { year: '2004', title: 'Founded', desc: 'Proxynet Communications established in Lagos, Nigeria with a mission to deliver world-class IT solutions.' },
  { year: '2008', title: 'First Major Enterprise Contract', desc: 'Secured first large-scale enterprise networking project with a tier-1 Nigerian bank.' },
  { year: '2010', title: 'Regional Expansion', desc: 'Opened operations in Abuja to serve federal government and public sector clients.' },
  { year: '2012', title: 'Samsung Partnership', desc: 'Became an authorised Samsung B2B partner, expanding into large format display and smart signage solutions.' },
  { year: '2014', title: 'Samsung B2B Award', desc: 'Recognised with the Samsung B2B Award for outstanding performance and client delivery.' },
  { year: '2016', title: 'West Africa Expansion', desc: 'Established presence in Ghana and Côte d\'Ivoire, serving clients across West Africa.' },
  { year: '2019', title: 'Dubai Office', desc: 'Opened Middle East office in Dubai Silicon Oasis to serve international clients and technology partners.' },
  { year: '2024', title: '20 Years Strong', desc: 'Celebrating two decades of technology excellence — 500+ projects, 6 countries, 50+ global partners.' },
]

export default function Timeline() {
  return (
    <section id="timeline" className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.eyebrow}>Our History</p>
          <h2 className={styles.heading}>Two Decades of Progress</h2>
        </motion.div>

        <div className={styles.timeline}>
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              className={`${styles.item} ${i % 2 === 0 ? styles.left : styles.right}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -32 : 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
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
