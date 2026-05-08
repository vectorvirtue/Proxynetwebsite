import { motion } from 'framer-motion'
import { FileText, BookOpen, Download, Wrench, ClipboardList, ArrowRight } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import styles from './OnboardingResources.module.css'

export default function OnboardingResources() {
  const { t } = useLang()

  const resources = [
    {
      icon: <FileText size={22} />,
      title: t.datasheets,
      desc: 'Product sheets, technical specifications, and datasheets for all Proxynet solutions and partner products.',
      type: 'PDF Downloads',
      href: '/resources/datasheets',
    },
    {
      icon: <BookOpen size={22} />,
      title: t.whitepapers,
      desc: 'In-depth solution briefs, technology whitepapers, and thought leadership documents from the Proxynet team.',
      type: 'PDF & Reports',
      href: '/resources/whitepapers',
    },
    {
      icon: <Wrench size={22} />,
      title: t.technicalGuides,
      desc: 'Step-by-step technical guides, configuration manuals, and deployment documentation for installed systems.',
      type: 'Technical Docs',
      href: '/resources/technical-guides',
    },
    {
      icon: <Download size={22} />,
      title: t.onboardingGuides,
      desc: 'Everything new clients need to get started — from first contact to go-live, in one place.',
      type: 'Guides & Videos',
      href: '/resources/onboarding',
    },
    {
      icon: <ClipboardList size={22} />,
      title: t.clientForms,
      desc: 'Support request forms, maintenance schedules, SLA agreements, and other client documents for download.',
      type: 'Forms & Templates',
      href: '/resources/forms',
    },
  ]

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div className={styles.header} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className={styles.eyebrow}>{t.onboardEyebrow}</p>
          <h2 className={styles.heading}>{t.onboardHeading}</h2>
          <p className={styles.sub}>{t.onboardSub}</p>
        </motion.div>
        <div className={styles.grid}>
          {resources.map((r, i) => (
            <motion.div key={r.title} className={styles.card} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} whileHover={{ y: -4 }}>
              <div className={styles.icon}>{r.icon}</div>
              <span className={styles.type}>{r.type}</span>
              <h3 className={styles.title}>{r.title}</h3>
              <p className={styles.desc}>{r.desc}</p>
              <a href="mailto:info@proxynetgroup.com?subject=Resource Request" className={styles.link}>{t.requestAccess} <ArrowRight size={14} /></a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

