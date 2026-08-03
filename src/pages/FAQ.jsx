import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronDown, Search, MessageCircle } from 'lucide-react'
import SEO from '../components/SEO'
import { useLang } from '../context/LanguageContext'
import SectionBlobs from '../components/SectionBlobs'
import styles from './FAQ.module.css'

export default function FAQ() {
  const { t } = useLang()
  const [openIndex, setOpenIndex] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const faqs = [
    { q: t.faq1q, a: t.faq1a },
    { q: t.faq2q, a: t.faq2a },
    { q: t.faq3q, a: t.faq3a },
    { q: t.faq4q, a: t.faq4a },
    { q: t.faq5q, a: t.faq5a },
    { q: t.faq6q, a: t.faq6a },
    { q: t.faq7q, a: t.faq7a },
    { q: t.faq8q, a: t.faq8a },
    { q: t.faq9q, a: t.faq9a },
    { q: t.faq10q, a: t.faq10a },
  ]

  const filteredFaqs = searchTerm
    ? faqs.filter(
        (faq) =>
          faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.a.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : faqs

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <SEO
        title="Frequently Asked Questions — Proxynet Group"
        description="Common questions about Proxynet's services, products, and support — including Yealink, VT, Microsoft Teams Rooms, managed services, and reseller programmes."
        canonical="/faq"
      />
      <main>
        {/* Hero */}
        <section className={`${styles.hero} heroScene`}>
          <SectionBlobs variant="dark" />
          <div className={styles.heroOverlay} />
          <div className={styles.heroInner}>
            <motion.nav
              className={styles.breadcrumb}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Link to="/" className={styles.crumb}>{t.home}</Link>
              <ChevronRight size={14} className={styles.sep} />
              <span className={styles.crumbActive}>FAQ</span>
            </motion.nav>
            <motion.h1
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Frequently Asked Questions
            </motion.h1>
            <motion.p
              className={styles.heroSub}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Quick answers to common questions about our products, services, and support.
            </motion.p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className={styles.section}>
          <SectionBlobs />
          <div className={styles.inner}>
            {/* Search */}
            <motion.div
              className={styles.searchWrap}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Search size={20} className={styles.searchIcon} />
              <input
                type="text"
                className={styles.searchInput}
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </motion.div>

            {/* FAQ List */}
            <div className={styles.faqList}>
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, i) => (
                  <motion.div
                    key={i}
                    className={styles.faqItem}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <button
                      className={styles.faqQuestion}
                      onClick={() => toggleFaq(i)}
                      aria-expanded={openIndex === i}
                    >
                      <span className={styles.faqQ}>{faq.q}</span>
                      <ChevronDown
                        size={20}
                        className={`${styles.faqIcon} ${openIndex === i ? styles.faqIconOpen : ''}`}
                      />
                    </button>
                    <AnimatePresence>
                      {openIndex === i && (
                        <motion.div
                          className={styles.faqAnswer}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className={styles.faqA}>{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  className={styles.noResults}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p>No FAQs match your search. Try different keywords or contact us directly.</p>
                </motion.div>
              )}
            </div>

            {/* Contact CTA */}
            <motion.div
              className={styles.contactCta}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <MessageCircle size={32} className={styles.contactIcon} />
              <h3 className={styles.contactTitle}>Can't find what you're looking for?</h3>
              <p className={styles.contactSub}>
                Get in touch with our team — we're here to help.
              </p>
              <Link to="/contact" className={styles.contactBtn}>
                Contact Us
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}
