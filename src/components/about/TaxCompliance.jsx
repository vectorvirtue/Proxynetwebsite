import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import styles from './TaxCompliance.module.css'

export default function TaxCompliance() {
  const { t } = useLang()
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div className={styles.card} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className={styles.icon}><ShieldCheck size={28} /></div>
          <div className={styles.text}>
            <h3 className={styles.title}>{t.taxTitle}</h3>
            <p className={styles.body}>{t.taxBody}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
