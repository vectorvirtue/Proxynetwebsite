import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.content}
        >
          <p className={styles.code}>404</p>
          <h1 className={styles.title}>Page Not Found</h1>
          <p className={styles.sub}>The page you are looking for does not exist or has been moved. Let us get you back on track.</p>
          <div className={styles.ctas}>
            <Link to="/" className={styles.primary}><Home size={18} /> Back to Homepage</Link>
            <button className={styles.secondary} onClick={() => window.history.back()}><ArrowLeft size={18} /> Go Back</button>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
