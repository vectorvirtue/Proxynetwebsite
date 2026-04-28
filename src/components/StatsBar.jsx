import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLang } from '../context/LanguageContext'
import styles from './StatsBar.module.css'

function Counter({ end, duration = 2, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  useEffect(() => {
    if (!isInView) {
      setCount(0)
      return
    }
    let start = 0
    const increment = end / (duration * 60)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [isInView, end, duration])

  return <span ref={ref} className={styles.number}>{count}{suffix}</span>
}

export default function StatsBar() {
  const { t } = useLang()

  const stats = [
    { value: 20, suffix: '+', label: t.yearsInOperation },
    { value: 500, suffix: '+', label: t.projectsDelivered },
    { value: 6, suffix: '', label: t.countriesServed },
    { value: 50, suffix: '+', label: t.globalPartners },
  ]

  return (
    <section className={styles.statsBar} aria-label="Company statistics">
      <div className={styles.inner}>
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className={styles.stat}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Counter end={stat.value} suffix={stat.suffix} />
            <p className={styles.label}>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
