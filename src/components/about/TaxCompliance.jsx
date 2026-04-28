import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'
import styles from './TaxCompliance.module.css'

export default function TaxCompliance() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.icon}><ShieldCheck size={28} /></div>
          <div className={styles.text}>
            <h3 className={styles.title}>Registered & Tax-Compliant</h3>
            <p className={styles.body}>
              Proxynet Group Ltd is a duly registered Nigerian company (RC 472270) incorporated under the Companies and Allied Matters Act (CAMA). We are fully tax-compliant, hold a valid Tax Identification Number (TIN: 00775065-0001), and file all statutory returns with the Federal Inland Revenue Service (FIRS). All invoices issued by Proxynet are legally valid for procurement and audit purposes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
