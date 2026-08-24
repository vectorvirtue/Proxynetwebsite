import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import SectionBlobs from './SectionBlobs'
import styles from './SolutionHero.module.css'

export default function SolutionHero({ eyebrow, title, description, primaryCta, primaryHref = '/contact', secondaryCta, secondaryHref = '#capabilities' }) {
  return (
    <section className={`${styles.hero} heroScene`}>
      <SectionBlobs variant="dark" />
      <div className={styles.heroOverlay} />
      <div className={styles.heroInner}>
        <motion.nav className={styles.breadcrumb} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <Link to="/" className={styles.crumb}>Home</Link>
          <ChevronRight size={14} className={styles.sep} />
          <Link to="/solutions" className={styles.crumb}>Solutions</Link>
          <ChevronRight size={14} className={styles.sep} />
          <span className={styles.crumbActive}>{title}</span>
        </motion.nav>
        <motion.p className={styles.eyebrow} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}>{eyebrow}</motion.p>
        <motion.h1 className={styles.heroTitle} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>{title}</motion.h1>
        <motion.p className={styles.heroSub} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>{description}</motion.p>
        <motion.div className={styles.heroCtas} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
          <a href={primaryHref} className={styles.primary}>{primaryCta}</a>
          <a href={secondaryHref} className={styles.secondary}>{secondaryCta}</a>
        </motion.div>
      </div>
    </section>
  )
}