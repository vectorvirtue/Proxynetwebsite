import { motion } from 'framer-motion'
import { FileText, Video, BookOpen, Download, ArrowRight } from 'lucide-react'
import styles from './OnboardingResources.module.css'

const resources = [
  { icon: <FileText size={22} />, title: 'Getting Started Guide', desc: 'Step-by-step guide for new clients — from first contact to go-live.', type: 'PDF Guide' },
  { icon: <Video size={22} />, title: 'System Walkthrough Videos', desc: 'Video tutorials covering your installed systems and how to use them.', type: 'Video Series' },
  { icon: <BookOpen size={22} />, title: 'User Manuals', desc: 'Detailed manuals for all hardware and software solutions deployed.', type: 'Documentation' },
  { icon: <Download size={22} />, title: 'Configuration Templates', desc: 'Pre-built configuration templates to speed up setup and standardise deployments.', type: 'Templates' },
]

export default function OnboardingResources() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div className={styles.header} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className={styles.eyebrow}>Resource Hub</p>
          <h2 className={styles.heading}>Onboarding Resources</h2>
          <p className={styles.sub}>Everything you need to get up and running — guides, videos, manuals, and templates all in one place.</p>
        </motion.div>

        <div className={styles.grid}>
          {resources.map((r, i) => (
            <motion.div key={r.title} className={styles.card} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} whileHover={{ y: -4 }}>
              <div className={styles.icon}>{r.icon}</div>
              <span className={styles.type}>{r.type}</span>
              <h3 className={styles.title}>{r.title}</h3>
              <p className={styles.desc}>{r.desc}</p>
              <a href="mailto:info@proxynetgroup.com" className={styles.link}>Request Access <ArrowRight size={14} /></a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
