import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionBlobs from './SectionBlobs'
import SolutionHero from './SolutionHero'
import SolutionPartnerStrip from './SolutionPartnerStrip'
import styles from './AdvancedSolutionPage.module.css'

export default function AdvancedSolutionPage({
  seo,
  hero,
  capabilities,
  partners,
}) {
  return (
    <>
      <SolutionHero {...hero} />
      {partners?.length > 0 && <SolutionPartnerStrip partners={partners} label="Technology Partners" />}
      <section id="capabilities" className={styles.section}>
        <SectionBlobs />
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Practical technology, thoughtfully deployed</p>
            <h2 className={styles.heading}>Built around the way you work</h2>
            <p className={styles.subText}>{seo.description}</p>
          </div>
          <div className={styles.grid}>
            {capabilities.map((capability, index) => (
              <motion.article
                key={capability.title}
                className={styles.card}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
              >
                <CheckCircle size={22} className={styles.icon} />
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </motion.article>
            ))}
          </div>
          <Link to="/contact" className={styles.cta}>
            Talk to our team <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  )
}