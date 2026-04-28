import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from './AboutCTA.module.css'

export default function AboutCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.content}
        >
          <h2 className={styles.heading}>Ready to work with us?</h2>
          <p className={styles.sub}>Talk to our team about your technology needs — we'll build a solution around your business.</p>
          <div className={styles.ctas}>
            <Link to="/contact" className={styles.primary}>Contact Us</Link>
            <Link to="/solutions" className={styles.secondary}>View Our Solutions</Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
