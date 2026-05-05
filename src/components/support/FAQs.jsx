import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import styles from './FAQs.module.css'

const faqData = [
  {
    label: 'Onboarding',
    faqs: [
      { q: 'How long does onboarding take after a project is delivered?', a: 'Onboarding typically takes 1–5 business days depending on the complexity of the solution. Your account manager will walk you through the process and provide all necessary documentation.' },
      { q: 'Will I receive training on the systems installed?', a: 'Yes. All deployments include a handover session and user training. We also provide written guides and video walkthroughs where applicable.' },
    ],
  },
  {
    label: 'Technical',
    faqs: [
      { q: 'What should I do if my system goes down outside business hours?', a: 'Call our 24/7 support line on +234 703 264 7755 or send a WhatsApp message. Critical issues are escalated immediately regardless of the time.' },
      { q: 'How do I raise a support ticket?', a: 'Use the ticket form on this page, email info@proxynetgroup.com, or call our support line. All tickets are logged and tracked through to resolution.' },
      { q: 'Can Proxynet support systems not originally installed by you?', a: 'Yes, in many cases. Contact our support team with details of your existing infrastructure and we will assess whether we can provide support.' },
    ],
  },
  {
    label: 'Billing',
    faqs: [
      { q: 'Are support services included in my contract?', a: 'This depends on your service agreement. Most clients are on a managed services contract that includes defined support hours. Contact your account manager for details.' },
      { q: 'How do I request an invoice or receipt?', a: 'Email info@proxynetgroup.com with your company name and the relevant project or service period. We will issue documentation within 2 business days.' },
    ],
  },
  {
    label: 'Account',
    faqs: [
      { q: 'How do I update my contact details on file?', a: 'Email info@proxynetgroup.com with your updated details and your account manager will update your records.' },
      { q: 'Who is my dedicated account manager?', a: 'Your account manager is assigned at the start of your engagement. If you are unsure, email info@proxynetgroup.com and we will connect you with the right person.' },
    ],
  },
]

export default function FAQs() {
  const { t } = useLang()
  const [activeCategory, setActiveCategory] = useState('Onboarding')
  const [openIndex, setOpenIndex] = useState(null)

  const categories = [
    { label: t.faqOnboarding, key: 'Onboarding' },
    { label: t.faqTechnical, key: 'Technical' },
    { label: t.faqBilling, key: 'Billing' },
    { label: t.faqAccount, key: 'Account' },
  ]

  const current = faqData.find(c => c.label === activeCategory)

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
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
