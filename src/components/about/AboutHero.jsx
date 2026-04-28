import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import styles from './AboutHero.module.css'

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.inner}>
        <motion.nav
          className={styles.breadcrumb}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          aria-label="Breadcrumb"
        >
          <Link to="/" className={styles.crumb}>Home</Link>
          <ChevronRight size={14} className={styles.sep} />
          <span className={styles.crumbActive}>About Us</span>
        </motion.nav>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Who We Are
        </motion.h1>

        <motion.p
          className={styles.sub}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Two decades of building the technology infrastructure that powers Africa's most ambitious organisations.
        </motion.p>
      </div>
    </section>
  )
}
