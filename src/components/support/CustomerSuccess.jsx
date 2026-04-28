import { motion } from 'framer-motion'
import { HeartHandshake, RefreshCw, BarChart2, Users } from 'lucide-react'
import styles from './CustomerSuccess.module.css'

const pillars = [
  { icon: <RefreshCw size={22} />, title: 'Proactive Monitoring', desc: 'We monitor your systems continuously — identifying and resolving issues before they impact your business.' },
  { icon: <Users size={22} />, title: 'Dedicated Account Manager', desc: 'Every client has a named account manager who knows your infrastructure and is your first point of contact.' },
  { icon: <BarChart2 size={22} />, title: 'Quarterly Reviews', desc: 'We conduct regular service reviews to assess performance, plan upgrades, and align with your business goals.' },
  { icon: <HeartHandshake size={22} />, title: 'Long-Term Partnership', desc: 'We do not disappear after deployment. Our relationship grows with your business — for years, not months.' },
]

export default function CustomerSuccess() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div className={styles.left} initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className={styles.eyebrow}>Customer Success</p>
          <h2 className={styles.heading}>We Stay With You After Go-Live</h2>
          <p className={styles.body}>Our Customer Success programme is an ongoing engagement — not a one-off project. From the moment your solution goes live, our team is actively working to ensure it keeps delivering value.</p>
          <p className={styles.body}>This is not just reactive support. It is a proactive, structured relationship designed to protect your investment and help your technology grow with your business.</p>
        </motion.div>

        <motion.div className={styles.right} initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          {pillars.map((p, i) => (
            <motion.div key={p.title} className={styles.pillar} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}>
              <div className={styles.pillarIcon}>{p.icon}</div>
              <div>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarDesc}>{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
