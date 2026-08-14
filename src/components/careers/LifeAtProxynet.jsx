import { motion } from 'framer-motion'
import { Heart, Zap, Users, TrendingUp } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import styles from './LifeAtProxynet.module.css'

export default function LifeAtProxynet() {
  const { t } = useLang()

  const perks = [
    { icon: <Heart size={22} />, titleKey: 'lifePerk1Title', descKey: 'lifePerk1Desc' },
    { icon: <Zap size={22} />,   titleKey: 'lifePerk2Title', descKey: 'lifePerk2Desc' },
    { icon: <Users size={22} />, titleKey: 'lifePerk3Title', descKey: 'lifePerk3Desc' },
    { icon: <TrendingUp size={22} />, titleKey: 'lifePerk4Title', descKey: 'lifePerk4Desc' },
  ]

  return (
    <section id="life" className={styles.section}>
      <div className={styles.inner}>
        <motion.div className={styles.header} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className={styles.eyebrow}>{t.lifeEyebrow}</p>
          <h2 className={styles.heading}>{t.lifeHeading}</h2>
          <p className={styles.sub}>{t.lifeSub}</p>
        </motion.div>

        <div className={styles.grid}>
          {perks.map((p, i) => (
            <motion.div key={p.titleKey} className={styles.card} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
              <div className={styles.icon}>{p.icon}</div>
              <h3 className={styles.cardTitle}>{t[p.titleKey]}</h3>
              <p className={styles.cardDesc}>{t[p.descKey]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
