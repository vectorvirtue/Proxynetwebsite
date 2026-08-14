import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import SEO from '../components/SEO'
import SectionBlobs from '../components/SectionBlobs'
import { useLang } from '../context/LanguageContext'
import styles from './LegalPage.module.css'

const toc = [
  { id: 'what-are-cookies', label: '1. What Are Cookies' },
  { id: 'how-we-use',       label: '2. How We Use Cookies' },
  { id: 'types',            label: '3. Types of Cookies' },
  { id: 'third-party',      label: '4. Third-Party Cookies' },
  { id: 'managing',         label: '5. Managing Cookies' },
  { id: 'changes',          label: '6. Changes' },
  { id: 'contact',          label: '7. Contact Us' },
]

export default function CookiePolicy() {
  const { t } = useLang()
  return (
    <>
      <SEO title="Cookie Policy — Proxynet Group" description="How Proxynet Group uses cookies and similar technologies on its website." canonical="/cookie-policy" />
      <main>
        <section className={`${styles.hero} heroScene`}>
          <SectionBlobs variant="dark" />
          <div className={styles.heroOverlay} />
          <div className={styles.heroInner}>
            <motion.nav className={styles.breadcrumb} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <Link to="/" className={styles.crumb}>{t.home}</Link>
              <ChevronRight size={14} className={styles.sep} />
              <span className={styles.crumbActive}>Cookie Policy</span>
            </motion.nav>
            <motion.p className={styles.eyebrow} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }}>Legal</motion.p>
            <motion.h1 className={styles.heroTitle} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>Cookie Policy</motion.h1>
            <motion.p className={styles.heroMeta} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>Last updated: August 2026</motion.p>
          </div>
        </section>

        <section className={styles.contentSection}>
          <div className={styles.contentInner}>
            <nav className={styles.toc} aria-label="Table of contents">
              {toc.map(item => (
                <a key={item.id} href={`#${item.id}`} className={styles.tocItem}>{item.label}</a>
              ))}
            </nav>

            <div className={styles.body}>

              <div className={styles.highlight}>
                This Cookie Policy explains how Proxynet Communications Limited uses cookies and similar tracking technologies when you visit www.proxynetgroup.com. By using our website, you consent to the use of cookies as described here.
              </div>

              <div id="what-are-cookies" className={styles.section}>
                <h2 className={styles.sectionTitle}>1. What Are Cookies</h2>
                <p className={styles.sectionText}>Cookies are small text files placed on your device when you visit a website. They allow the site to remember your actions and preferences over a period of time, so you do not have to re-enter them whenever you return. Cookies can be "session" cookies (deleted when you close your browser) or "persistent" cookies (stored on your device for a set period).</p>
              </div>

              <div id="how-we-use" className={styles.section}>
                <h2 className={styles.sectionTitle}>2. How We Use Cookies</h2>
                <p className={styles.sectionText}>We use cookies to:</p>
                <ul className={styles.list}>
                  <li className={styles.listItem}><span className={styles.dot} /><span>Ensure our website functions correctly and securely.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span>Understand how visitors navigate and use our site so we can improve it.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span>Remember your language and display preferences.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span>Analyse traffic patterns and measure the effectiveness of our content.</span></li>
                </ul>
                <p className={styles.sectionText}>We do not use cookies to serve targeted advertising or sell your data to third parties.</p>
              </div>

              <div id="types" className={styles.section}>
                <h2 className={styles.sectionTitle}>3. Types of Cookies We Use</h2>
                <ul className={styles.list}>
                  <li className={styles.listItem}><span className={styles.dot} /><span><strong>Strictly Necessary</strong> — Essential for the website to function. These cannot be disabled. Examples include session cookies that keep you logged in or remember form inputs during a session.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span><strong>Performance & Analytics</strong> — Help us understand how visitors interact with the site by collecting anonymised information such as pages visited and time on site. We use tools such as Google Analytics for this purpose.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span><strong>Functional</strong> — Allow the site to remember choices you make, such as your selected language (English or French), so your experience is consistent across pages.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span><strong>Security</strong> — Used by our CAPTCHA system to distinguish human users from automated bots on our forms, protecting both you and Proxynet from spam and abuse.</span></li>
                </ul>
              </div>

              <div id="third-party" className={styles.section}>
                <h2 className={styles.sectionTitle}>4. Third-Party Cookies</h2>
                <p className={styles.sectionText}>Some cookies on our site are set by third-party services we use, including:</p>
                <ul className={styles.list}>
                  <li className={styles.listItem}><span className={styles.dot} /><span><strong>Google Analytics</strong> — To track website performance and usage patterns. Google may process data in accordance with its own privacy policy.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span><strong>CAPTCHA providers</strong> — To protect our forms from abuse. These may set cookies as part of their verification process.</span></li>
                </ul>
                <p className={styles.sectionText}>Proxynet has no control over third-party cookies. We recommend reviewing the privacy policies of these providers directly.</p>
              </div>

              <div id="managing" className={styles.section}>
                <h2 className={styles.sectionTitle}>5. Managing Cookies</h2>
                <p className={styles.sectionText}>You can control and delete cookies through your browser settings. Most browsers allow you to:</p>
                <ul className={styles.list}>
                  <li className={styles.listItem}><span className={styles.dot} /><span>View what cookies are stored on your device.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span>Delete all or specific cookies.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span>Block cookies from specific websites or all websites.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span>Set your browser to notify you before accepting cookies.</span></li>
                </ul>
                <p className={styles.sectionText}>Please note that disabling cookies may affect the functionality of our website. For example, language preferences and form inputs may not be remembered. Instructions for managing cookies in common browsers can be found at <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>www.aboutcookies.org</a>.</p>
              </div>

              <div id="changes" className={styles.section}>
                <h2 className={styles.sectionTitle}>6. Changes to This Policy</h2>
                <p className={styles.sectionText}>We may update this Cookie Policy from time to time. Changes will be reflected in the "last updated" date above. Continued use of our website after updates constitutes your acceptance of the revised policy.</p>
              </div>

              <div id="contact" className={styles.section}>
                <h2 className={styles.sectionTitle}>7. Contact Us</h2>
                <p className={styles.sectionText}>If you have questions about our use of cookies, please contact us:</p>
                <div className={styles.contactBlock}>
                  <span className={styles.contactLabel}>Proxynet Communications Limited</span>
                  <span className={styles.contactLine}>The Proxynet House, 5B Adedeji Close, off Opebi Road, Ikeja, Lagos, Nigeria.</span>
                  <a href="mailto:info@proxynetgroup.com" className={styles.contactLink}>info@proxynetgroup.com</a>
                  <a href="tel:+2349031829347" className={styles.contactLink}>+234 903 182 9347</a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  )
}
