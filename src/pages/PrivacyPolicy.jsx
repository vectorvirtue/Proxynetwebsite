import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import SEO from '../components/SEO'
import SectionBlobs from '../components/SectionBlobs'
import { useLang } from '../context/LanguageContext'
import styles from './LegalPage.module.css'

const toc = [
  { id: 'who-we-are',        label: '1. Who We Are' },
  { id: 'data-we-collect',   label: '2. Data We Collect' },
  { id: 'how-we-use',        label: '3. How We Use It' },
  { id: 'legal-basis',       label: '4. Legal Basis' },
  { id: 'sharing',           label: '5. Sharing Data' },
  { id: 'retention',         label: '6. Retention' },
  { id: 'your-rights',       label: '7. Your Rights' },
  { id: 'security',          label: '8. Security' },
  { id: 'ndpc',              label: '9. NDPC Registration' },
  { id: 'changes',           label: '10. Changes' },
  { id: 'contact',           label: '11. Contact Us' },
]

export default function PrivacyPolicy() {
  const { t } = useLang()
  return (
    <>
      <SEO title="Privacy Policy — Proxynet Group" description="How Proxynet Group collects, uses, and protects your personal data in compliance with the Nigeria Data Protection Act 2023." canonical="/privacy-policy" />
      <main>
        <section className={`${styles.hero} heroScene`}>
          <SectionBlobs variant="dark" />
          <div className={styles.heroOverlay} />
          <div className={styles.heroInner}>
            <motion.nav className={styles.breadcrumb} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <Link to="/" className={styles.crumb}>{t.home}</Link>
              <ChevronRight size={14} className={styles.sep} />
              <span className={styles.crumbActive}>Privacy Policy</span>
            </motion.nav>
            <motion.p className={styles.eyebrow} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }}>Legal</motion.p>
            <motion.h1 className={styles.heroTitle} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>Privacy Policy</motion.h1>
            <motion.p className={styles.heroMeta} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>Last updated: August 2026</motion.p>
          </div>
        </section>

        <section className={styles.contentSection}>
          <div className={styles.contentInner}>
            {/* TOC */}
            <nav className={styles.toc} aria-label="Table of contents">
              {toc.map(item => (
                <a key={item.id} href={`#${item.id}`} className={styles.tocItem}>{item.label}</a>
              ))}
            </nav>

            {/* Body */}
            <div className={styles.body}>

              <div className={styles.highlight}>
                Proxynet Communications Limited ("Proxynet", "we", "us", "our") is committed to protecting your personal data. This policy explains what we collect, how we use it, and your rights under the Nigeria Data Protection Act 2023 (NDPA) and other applicable laws.
              </div>

              <div id="who-we-are" className={styles.section}>
                <h2 className={styles.sectionTitle}>1. Who We Are</h2>
                <p className={styles.sectionText}>Proxynet Communications Limited is a technology solutions company incorporated in Nigeria, headquartered at The Proxynet House, 5B Adedeji Close, off Opebi Road, Ikeja, Lagos, Nigeria. We provide IT infrastructure, audiovisual solutions, cybersecurity, unified communications, cloud and managed services, EdTech, and AV equipment rental services across Nigeria and West Africa.</p>
                <p className={styles.sectionText}>For the purposes of data protection law, Proxynet is the data controller of personal data submitted through this website and in the course of our business relationships.</p>
              </div>

              <div id="data-we-collect" className={styles.section}>
                <h2 className={styles.sectionTitle}>2. Data We Collect</h2>
                <p className={styles.sectionText}>We collect personal data in the following ways:</p>
                <ul className={styles.list}>
                  <li className={styles.listItem}><span className={styles.dot} /><span><strong>Enquiry and contact forms</strong> — name, company, email address, phone number, and project details when you submit a request for quote, support ticket, or general enquiry.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span><strong>Careers applications</strong> — name, email, phone number, CV/résumé, and any information you include in your application.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span><strong>Newsletter subscriptions</strong> — email address when you subscribe to Proxynet updates.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span><strong>Client and partner records</strong> — business contact details, project information, and communications collected in the course of delivering our services.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span><strong>Website usage data</strong> — anonymised analytics data such as pages visited, time on site, and referral source, collected via cookies and analytics tools.</span></li>
                </ul>
                <p className={styles.sectionText}>We do not knowingly collect personal data from children under 13. If you believe a child has submitted data to us, please contact us immediately.</p>
              </div>

              <div id="how-we-use" className={styles.section}>
                <h2 className={styles.sectionTitle}>3. How We Use Your Data</h2>
                <ul className={styles.list}>
                  <li className={styles.listItem}><span className={styles.dot} /><span>To respond to your enquiries, provide quotes, and deliver the services you have requested.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span>To manage our client and partner relationships, including project delivery, billing, and support.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span>To process job applications and manage our recruitment process.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span>To send you newsletters, product updates, and event invitations where you have opted in or where we have a legitimate interest.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span>To improve our website, understand how visitors use it, and optimise our services.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span>To comply with legal obligations, including tax, regulatory, and reporting requirements.</span></li>
                </ul>
              </div>

              <div id="legal-basis" className={styles.section}>
                <h2 className={styles.sectionTitle}>4. Legal Basis for Processing</h2>
                <p className={styles.sectionText}>We process your personal data on the following legal bases under the Nigeria Data Protection Act 2023:</p>
                <ul className={styles.list}>
                  <li className={styles.listItem}><span className={styles.dot} /><span><strong>Consent</strong> — where you have actively opted in, such as newsletter subscriptions.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span><strong>Contract performance</strong> — where processing is necessary to deliver services you have engaged us for.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span><strong>Legitimate interests</strong> — where we have a genuine business reason to process data that does not override your rights, such as responding to enquiries or improving our website.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span><strong>Legal obligation</strong> — where processing is required to comply with applicable Nigerian law.</span></li>
                </ul>
              </div>

              <div id="sharing" className={styles.section}>
                <h2 className={styles.sectionTitle}>5. Sharing Your Data</h2>
                <p className={styles.sectionText}>We do not sell, rent, or trade your personal data. We may share it with:</p>
                <ul className={styles.list}>
                  <li className={styles.listItem}><span className={styles.dot} /><span><strong>Technology partners and vendors</strong> — only where necessary to deliver a service you have requested (e.g. equipment suppliers, installation subcontractors).</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span><strong>Service providers</strong> — third-party tools we use to operate our business (e.g. email platforms, analytics providers, CRM systems), all subject to data processing agreements.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span><strong>Regulatory authorities</strong> — where required by Nigerian law, a court order, or a regulatory obligation.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span><strong>Group companies</strong> — within the Proxynet Group where operationally necessary and on the same privacy terms.</span></li>
                </ul>
                <p className={styles.sectionText}>Any transfer of personal data outside Nigeria is conducted in accordance with the NDPA 2023, ensuring adequate protections are in place.</p>
              </div>

              <div id="retention" className={styles.section}>
                <h2 className={styles.sectionTitle}>6. Data Retention</h2>
                <p className={styles.sectionText}>We retain personal data only for as long as necessary for the purpose it was collected, or as required by law. In practice:</p>
                <ul className={styles.list}>
                  <li className={styles.listItem}><span className={styles.dot} /><span>Enquiry and contact form data — up to 2 years from last contact.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span>Client project records — up to 7 years for tax and compliance purposes.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span>Job applications — 12 months for unsuccessful applicants; retained for the duration of employment for successful applicants.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span>Newsletter subscriptions — until you unsubscribe.</span></li>
                </ul>
              </div>

              <div id="your-rights" className={styles.section}>
                <h2 className={styles.sectionTitle}>7. Your Rights</h2>
                <p className={styles.sectionText}>Under the Nigeria Data Protection Act 2023, you have the right to:</p>
                <ul className={styles.list}>
                  <li className={styles.listItem}><span className={styles.dot} /><span><strong>Access</strong> — request a copy of the personal data we hold about you.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span><strong>Rectification</strong> — ask us to correct inaccurate or incomplete data.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span><strong>Erasure</strong> — request deletion of your data where it is no longer necessary or where you withdraw consent.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span><strong>Restriction</strong> — ask us to restrict processing in certain circumstances.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span><strong>Objection</strong> — object to processing based on legitimate interests.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span><strong>Data portability</strong> — receive your data in a structured, machine-readable format.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span><strong>Withdraw consent</strong> — at any time where processing is based on consent.</span></li>
                </ul>
                <p className={styles.sectionText}>To exercise any of these rights, contact us at <a href="mailto:info@proxynetgroup.com" className={styles.contactLink}>info@proxynetgroup.com</a>. We will respond within 30 days. You also have the right to lodge a complaint with the Nigeria Data Protection Commission (NDPC) at <a href="https://ndpc.gov.ng" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>ndpc.gov.ng</a>.</p>
              </div>

              <div id="security" className={styles.section}>
                <h2 className={styles.sectionTitle}>8. Security</h2>
                <p className={styles.sectionText}>Proxynet takes the security of your personal data seriously. We implement appropriate technical and organisational measures — including access controls, encryption in transit, and regular security reviews — to protect data against unauthorised access, loss, or disclosure. Proxynet holds ISO 9001:2015 certification and is registered with the NDPC as a data controller/processor of major importance.</p>
                <p className={styles.sectionText}>While we take every reasonable precaution, no internet transmission is completely secure. If you believe your data has been compromised, please contact us immediately.</p>
              </div>

              <div id="ndpc" className={styles.section}>
                <h2 className={styles.sectionTitle}>9. NDPC Registration</h2>
                <p className={styles.sectionText}>Proxynet Communications Limited is registered with the Nigeria Data Protection Commission as a Data Controller/Processor of Major Importance pursuant to Section 44 of the Nigeria Data Protection Act 2023.</p>
                <div className={styles.highlight}>
                  Registration ID: NDPC/DCP/13529
                </div>
              </div>

              <div id="changes" className={styles.section}>
                <h2 className={styles.sectionTitle}>10. Changes to This Policy</h2>
                <p className={styles.sectionText}>We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. The "last updated" date at the top of this page will always reflect the most recent version. We encourage you to review this policy periodically. Continued use of our website after changes constitutes acceptance of the updated policy.</p>
              </div>

              <div id="contact" className={styles.section}>
                <h2 className={styles.sectionTitle}>11. Contact Us</h2>
                <p className={styles.sectionText}>For any privacy-related queries or to exercise your data rights, contact our Data Protection Officer:</p>
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
