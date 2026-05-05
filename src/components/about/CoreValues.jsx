import { motion } from 'framer-motion'
import { Compass, ShieldCheck, Gem, Zap, Leaf, Link2, Star } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import styles from './CoreValues.module.css'

export default function CoreValues() {
  const { t } = useLang()

  const values = [
    { letter: 'P', icon: <Compass size={24} />, title: t.cvPurposeTitle, desc: t.cvPurposeDesc },
    { letter: 'A', icon: <ShieldCheck size={24} />, title: t.cvAccountabilityTitle, desc: t.cvAccountabilityDesc },
    { letter: 'I', icon: <Gem size={24} />, title: t.cvIntegrityTitle, desc: t.cvIntegrityDesc },
    { letter: 'D', icon: <Zap size={24} />, title: t.cvDisciplineTitle, desc: t.cvDisciplineDesc },
    { letter: 'S', icon: <Leaf size={24} />, title: t.cvStewardshipTitle, desc: t.cvStewardshipDesc },
    { letter: 'O', icon: <Link2 size={24} />, title: t.cvOnenessTitle, desc: t.cvOnenessDesc },
    { letter: 'E', icon: <Star size={24} />, title: t.cvExemplaryTitle, desc: t.cvExemplaryDesc },
  ]

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div className={styles.header} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className={styles.eyebrow}>{t.coreValuesEyebrow}</p>
          <p className={styles.sub}>{t.coreValuesSub}</p>
        </motion.div>
        <motion.div className={styles.acronym} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
          {['P','A','I','D','S','O','E'].map((l, i) => (
            <motion.span key={l} className={styles.acronymLetter} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.15 + i * 0.06 }}>
              {l}
            </motion.span>
          ))}
        </motion.div>
        <div className={styles.grid}>
          {values.map((v, i) => (
            <motion.div key={v.letter} className={styles.card} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }} whileHover={{ y: -4 }}>
              <div className={styles.top}><div className={styles.iconWrap}>{v.icon}</div></div>
              <h3 className={styles.title}>{v.title}</h3>
              <p className={styles.desc}>{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
