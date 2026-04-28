import { motion } from 'framer-motion'
import { Heart, Zap, Users, TrendingUp } from 'lucide-react'
import styles from './LifeAtProxynet.module.css'

const perks = [
  { icon: <Heart size={22} />, title: 'Purpose-Driven Work', desc: 'Every project you work on directly impacts how businesses across Africa operate and grow.' },
  { icon: <Zap size={22} />, title: 'Fast-Paced Growth', desc: 'We move quickly. You will take on real responsibility from day one and grow faster than anywhere else.' },
  { icon: <Users size={22} />, title: 'Collaborative Culture', desc: 'No silos. We work as one team — sharing knowledge, solving problems together, and celebrating wins.' },
  { icon: <TrendingUp size={22} />, title: 'Career Development', desc: 'Structured learning paths, certifications, and mentorship to help you reach your full potential.' },
]

export default function LifeAtProxynet() {
  return (
    <section id="life" className={styles.section}>
      <div className={styles.inner}>
        <motion.div className={styles.header} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className={styles.eyebrow}>Life at Proxynet</p>
          <h2 className={styles.heading}>Why People Love Working Here</h2>
          <p className={styles.sub}>We build technology that matters — and we do it with a team that genuinely cares about each other and the work.</p>
        </motion.div>

        <div className={styles.grid}>
          {perks.map((p, i) => (
            <motion.div key={p.title} className={styles.card} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
              <div className={styles.icon}>{p.icon}</div>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
