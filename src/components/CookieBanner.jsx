import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import styles from './CookieBanner.module.css'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('proxynet_cookie_consent')
    if (!consent) setTimeout(() => setVisible(true), 1500)
  }, [])

  const accept = () => { localStorage.setItem('proxynet_cookie_consent', 'accepted'); setVisible(false) }
  const decline = () => { localStorage.setItem('proxynet_cookie_consent', 'declined'); setVisible(false) }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.banner}
          role="dialog"
          aria-label="Cookie consent"
          aria-live="polite"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 24 }}
        >
          <div className={styles.inner}>
            <div className={styles.text}>
              <p className={styles.title}>We use cookies</p>
              <p className={styles.body}>
                We use cookies to improve your experience on our website, analyse traffic, and personalise content. By clicking "Accept", you consent to our use of cookies in accordance with the{' '}
                <Link to="/privacy-policy" className={styles.link}>Privacy Policy</Link> and{' '}
                <Link to="/cookie-policy" className={styles.link}>Cookie Policy</Link>.
                This site complies with the Nigeria Data Protection Regulation (NDPR) and GDPR.
              </p>
            </div>
            <div className={styles.actions}>
              <button className={styles.decline} onClick={decline}>Decline</button>
              <button className={styles.accept} onClick={accept}>Accept All</button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
