import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import styles from './CareersHero.module.css'

export default function CareersHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.inner}>
        <motion.nav className={styles.breadcrumb} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} aria-label="Breadcrumb">
          <Link to="/" className={styles.crumb}>Home</Link>
          <ChevronRight size={14} className={styles.sep} />
          <span className={styles.crumbActive}>Careers</span>
        </motion.nav>

        <motion.h1 className={styles.title} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          Build the Future of Technology in West Africa
        </motion.h1>

        <motion.p className={styles.sub} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          Join a team of engineers, innovators, and problem-solvers delivering world-class technology infrastructure across Africa.
        </motion.p>

        <motion.div className={styles.ctas} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
          <a href="#roles" className={styles.primary}>View Open Roles</a>
          <a href="#life" className={styles.secondary}>Learn About Our Culture</a>
        </motion.div>
      </div>
    </section>
  )
}
