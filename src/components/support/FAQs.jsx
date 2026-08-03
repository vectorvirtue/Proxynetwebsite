import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import SectionBlobs from '../SectionBlobs'
import styles from './FAQs.module.css'

const faqData = null // built inside component using t.*

export default function FAQs() {
  const { t } = useLang()
  const [activeCategory, setActiveCategory] = useState('Onboarding')
  const [openIndex, setOpenIndex] = useState(null)

  const faqCategories = [
    {
      label: 'Onboarding',
      faqs: [
        { q: t.supportFaq1q, a: t.supportFaq1a },
        { q: t.supportFaq2q, a: t.supportFaq2a },
      ],
    },
    {
      label: 'Technical',
      faqs: [
        { q: t.supportFaq3q, a: t.supportFaq3a },
        { q: t.supportFaq4q, a: t.supportFaq4a },
        { q: t.supportFaq5q, a: t.supportFaq5a },
      ],
    },
    {
      label: 'Billing',
      faqs: [
        { q: t.supportFaq6q, a: t.supportFaq6a },
        { q: t.supportFaq7q, a: t.supportFaq7a },
      ],
    },
    {
      label: 'Account',
      faqs: [
        { q: t.supportFaq8q, a: t.supportFaq8a },
        { q: t.supportFaq9q, a: t.supportFaq9a },
      ],
    },
  ]

  const categories = [
    { label: t.faqOnboarding, key: 'Onboarding' },
    { label: t.faqTechnical, key: 'Technical' },
    { label: t.faqBilling, key: 'Billing' },
    { label: t.faqAccount, key: 'Account' },
  ]

  const current = faqCategories.find(c => c.label === activeCategory)

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionBlobs />
        <motion.div className={styles.header} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className={styles.eyebrow}>{t.faqEyebrow}</p>
          <h2 className={styles.heading}>{t.faqHeading}</h2>
        </motion.div>
        <div className={styles.tabs}>
          {categories.map(c => (
            <button key={c.key} className={`${styles.tab} ${activeCategory === c.key ? styles.tabActive : ''}`} onClick={() => { setActiveCategory(c.key); setOpenIndex(null) }}>
              {c.label}
            </button>
          ))}
        </div>
        <div className={styles.list}>
          {current.faqs.map((faq, i) => (
            <div key={i} className={styles.item}>
              <button className={styles.question} onClick={() => setOpenIndex(openIndex === i ? null : i)} aria-expanded={openIndex === i}>
                <span>{faq.q}</span>
                <ChevronDown size={18} className={`${styles.chevron} ${openIndex === i ? styles.chevronOpen : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div className={styles.answer} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
                    <p>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
