import { motion } from 'framer-motion'
import styles from './CompanyOverview.module.css'

export default function CompanyOverview() {
  return (
    <section id="overview" className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.eyebrow}>Who We Are</p>
          <h2 className={styles.heading}>We're not a vendor. We're your technology partner.</h2>
        </motion.div>

        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className={styles.body}>
            Proxynet Group is a Nigerian-founded technology solutions company established in 2004. We design, deploy, and support the IT infrastructure that keeps businesses running — from enterprise networks and cybersecurity to smart display systems and custom software.
          </p>
          <p className={styles.body}>
            We work with banks, refineries, government agencies, telecoms operators, and multinationals across Nigeria, Ghana, Côte d'Ivoire, and beyond. Our job is to make complex technology simple, reliable, and built to last.
          </p>
          <p className={styles.body}>
            We exist because African businesses deserve world-class technology infrastructure — delivered by people who understand the local context, the infrastructure challenges, and what it takes to keep systems running in this environment.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
