import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight, Ticket, Phone } from 'lucide-react'
import styles from './SupportHero.module.css'

export default function SupportHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.inner}>
        <motion.nav className={styles.breadcrumb} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} aria-label="Breadcrumb">
          <Link to="/" className={styles.crumb}>Home</Link>
          <ChevronRight size={14} className={styles.sep} />
          <span className={styles.crumbActive}>Support</span>
        </motion.nav>

        <motion.h1 className={styles.title} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          24/7 Support, Because Your Business Never Stops
        </motion.h1>

        <motion.p className={styles.sub} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          Our support team is available around the clock to keep your technology running. Raise a ticket, call us, or reach us on WhatsApp — we respond fast.
        </motion.p>

        <motion.div className={styles.ctas} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
          <a href="#ticket" className={styles.primary}><Ticket size={18} /> Raise a Ticket</a>
          <a href="tel:+2347032647755" className={styles.secondary}><Phone size={18} /> Call Support Now</a>
        </motion.div>
      </div>
    </section>
  )
}
