import { motion } from 'framer-motion'
import { Compass, ShieldCheck, Gem, Zap, Leaf, Link2, Star } from 'lucide-react'
import styles from './CoreValues.module.css'

const values = [
  { letter: 'P', icon: <Compass size={24} />, title: 'Purpose Driven', desc: 'Everything we do is anchored to a clear purpose — delivering technology that creates real, lasting value for our clients and communities.' },
  { letter: 'A', icon: <ShieldCheck size={24} />, title: 'Accountability', desc: 'We own our commitments. When we say we will deliver, we deliver — and when things go wrong, we fix them without excuses.' },
  { letter: 'I', icon: <Gem size={24} />, title: 'Integrity', desc: 'We do the right thing even when no one is watching. Our clients trust us with their critical infrastructure — we take that seriously.' },
  { letter: 'D', icon: <Zap size={24} />, title: 'Discipline', desc: 'Excellence is not an accident. We follow proven processes, maintain high standards, and hold ourselves to consistent performance.' },
  { letter: 'S', icon: <Leaf size={24} />, title: 'Stewardship', desc: 'We treat our clients\' resources as our own — making decisions that protect their investments and build long-term value.' },
  { letter: 'O', icon: <Link2 size={24} />, title: 'Oneness', desc: 'We work as one team — internally and with our clients. Collaboration, not silos, is how we solve complex problems.' },
  { letter: 'E', icon: <Star size={24} />, title: 'Exemplary', desc: 'We set the standard. In our industry, our communities, and our conduct — we aim to be the example others follow.' },
]

export default function CoreValues() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.eyebrow}>Our Values</p>
       
          <p className={styles.sub}>Seven principles that guide every decision, every project, and every relationship at Proxynet.</p>
        </motion.div>

        {/* PAIDSOE display */}
        <motion.div
          className={styles.acronym}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {['P','A','I','D','S','O','E'].map((l, i) => (
            <motion.span
              key={l}
              className={styles.acronymLetter}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.06 }}
            >
              {l}
            </motion.span>
          ))}
        </motion.div>

        <div className={styles.grid}>
          {values.map((v, i) => (
            <motion.div
              key={v.letter}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -4 }}
            >
              <div className={styles.top}>
                <div className={styles.iconWrap}>{v.icon}</div>
              </div>
              <h3 className={styles.title}>{v.title}</h3>
              <p className={styles.desc}>{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
