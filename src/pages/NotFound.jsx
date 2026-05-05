import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import styles from './NotFound.module.css'

export default function NotFound() {
  const { t } = useLang()
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
          <h1 className={styles.title}>{t.pageNotFound}</h1>
          <p className={styles.sub}>{t.pageNotFoundSub}</p>
          <div className={styles.ctas}>
            <Link to="/" className={styles.primary}><Home size={18} /> {t.backToHomepage}</Link>
            <button className={styles.secondary} onClick={() => window.history.back()}><ArrowLeft size={18} /> {t.goBack}</button>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
