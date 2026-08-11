import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import SEO from '../components/SEO'
import SectionBlobs from '../components/SectionBlobs'
import { useLang } from '../context/LanguageContext'
import styles from './LegalPage.module.css'

const toc = [
  { id: 'acceptance',       label: '1. Acceptance' },
  { id: 'services',         label: '2. Our Services' },
  { id: 'engagements',      label: '3. Engagements' },
  { id: 'ip',               label: '4. Intellectual Property' },
  { id: 'liability',        label: '5. Liability' },
  { id: 'confidentiality',  label: '6. Confidentiality' },
  { id: 'payment',          label: '7. Payment Terms' },
  { id: 'termination',      label: '8. Termination' },
  { id: 'governing-law',    label: '9. Governing Law' },
  { id: 'changes',          label: '10. Changes' },
  { id: 'contact',          label: '11. Contact Us' },
]

export default function Terms() {
  const { t } = useLang()
  return (
    <>
      <SEO title="Terms & Conditions — Proxynet Group" description="The terms and conditions governing use of the Proxynet Group website and engagement of Proxynet services." canonical="/terms" />
      <main>
        <section className={`${styles.hero} heroScene`}>
          <SectionBlobs variant="dark" />
          <div className={styles.heroOverlay} />
          <div className={styles.heroInner}>
            <motion.nav className={styles.breadcrumb} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <Link to="/" className={styles.crumb}>{t.home}</Link>
              <ChevronRight size={14} className={styles.sep} />
              <span className={styles.crumbActive}>Terms &amp; Conditions</span>
            </motion.nav>
            <motion.p className={styles.eyebrow} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }}>Legal</motion.p>
            <motion.h1 className={styles.heroTitle} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>Terms &amp; Conditions</motion.h1>
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
                Please read these Terms and Conditions carefully before using the Proxynet Group website or engaging Proxynet for any services. By accessing this website or entering into a service engagement, you agree to be bound by these terms.
              </div>

              <div id="acceptance" className={styles.section}>
                <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
                <p className={styles.sectionText}>These Terms and Conditions ("Terms") govern your use of the Proxynet Communications Limited website at www.proxynetgroup.com ("Site") and any services provided by Proxynet Communications Limited, incorporated in Nigeria ("Proxynet", "we", "us", "our"). By accessing the Site or engaging our services, you accept these Terms in full. If you do not agree, please cease use of the Site immediately.</p>
              </div>

              <div id="services" className={styles.section}>
                <h2 className={styles.sectionTitle}>2. Our Services</h2>
                <p className={styles.sectionText}>Proxynet provides technology solutions including but not limited to:</p>
                <ul className={styles.list}>
                  <li className={styles.listItem}><span className={styles.dot} /><span>Audiovisual (AV) solutions — design, supply, installation, and maintenance of displays, videowalls, conference systems, and digital signage.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span>Network infrastructure and systems integration — LAN, WAN, wireless networks, and structured cabling.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span>IT security and cybersecurity — firewalls, UTM, intrusion detection, PAM, and data security solutions.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span>Unified communications — IP telephony, Microsoft Teams Rooms, and professional headsets.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span>Cloud and managed services — remote monitoring, server management, and IT outsourcing.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span>EdTech solutions — educational technology hardware and software.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span>AV equipment rentals — supply and operation of professional AV equipment for events.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span>Distribution and reseller services — authorised distribution of technology products across West Africa.</span></li>
                </ul>
                <p className={styles.sectionText}>All services are subject to a separate written engagement, proposal, or service agreement between Proxynet and the client.</p>
              </div>

              <div id="engagements" className={styles.section}>
                <h2 className={styles.sectionTitle}>3. Client Engagements</h2>
                <p className={styles.sectionText}>All formal service engagements are governed by the specific proposal, purchase order, or service agreement signed between Proxynet and the client. These Terms apply where no other written agreement exists or where these Terms are expressly incorporated.</p>
                <ul className={styles.list}>
                  <li className={styles.listItem}><span className={styles.dot} /><span>The client is responsible for providing accurate site information, access, and a safe working environment for Proxynet personnel during installations.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span>Proxynet reserves the right to modify project timelines due to factors outside its control, including supply chain delays, site access issues, or force majeure events.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span>Changes to agreed scope must be requested in writing and are subject to additional charges where applicable.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span>Proxynet operates across Nigeria and West Africa. Engagements outside Lagos may attract additional logistics and mobilisation costs, which will be stated in the proposal.</span></li>
                </ul>
              </div>

              <div id="ip" className={styles.section}>
                <h2 className={styles.sectionTitle}>4. Intellectual Property</h2>
                <p className={styles.sectionText}>All content on this Site — including text, images, logos, graphics, videos, and code — is the property of Proxynet Communications Limited or its content suppliers and is protected by applicable Nigerian and international copyright laws.</p>
                <p className={styles.sectionText}>You may not reproduce, distribute, modify, or commercially exploit any content from this Site without our prior written consent. You may view and print pages for personal, non-commercial use only.</p>
                <p className={styles.sectionText}>The Proxynet name, logo, and brand marks are trademarks of Proxynet Communications Limited. Unauthorised use is strictly prohibited.</p>
              </div>

              <div id="liability" className={styles.section}>
                <h2 className={styles.sectionTitle}>5. Limitation of Liability</h2>
                <p className={styles.sectionText}>This Site and its content are provided "as is" without warranties of any kind, express or implied. Proxynet does not warrant that the Site will be uninterrupted, error-free, or free from viruses or other harmful components.</p>
                <p className={styles.sectionText}>To the fullest extent permitted by Nigerian law, Proxynet's total liability for any claim arising from use of this Site or our services shall not exceed the amount paid by the client for the relevant service in the 12 months preceding the claim.</p>
                <p className={styles.sectionText}>Proxynet shall not be liable for indirect, incidental, consequential, or punitive damages, including loss of profit, data, or business opportunity, even if advised of the possibility of such damages.</p>
              </div>

              <div id="confidentiality" className={styles.section}>
                <h2 className={styles.sectionTitle}>6. Confidentiality</h2>
                <p className={styles.sectionText}>Both parties agree to keep confidential any proprietary or sensitive information shared during an engagement and not to disclose it to third parties without prior written consent, except as required by law. This obligation survives the termination of any engagement for a period of three (3) years.</p>
                <p className={styles.sectionText}>Proxynet may reference client names and project types in its portfolio, case studies, and marketing materials unless the client has expressly requested otherwise in writing.</p>
              </div>

              <div id="payment" className={styles.section}>
                <h2 className={styles.sectionTitle}>7. Payment Terms</h2>
                <p className={styles.sectionText}>Payment terms are specified in each project proposal or service agreement. Where not stated:</p>
                <ul className={styles.list}>
                  <li className={styles.listItem}><span className={styles.dot} /><span>50% deposit is required before project commencement for supply and installation engagements.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span>Balance is due within 14 days of project completion or invoice date, whichever is earlier.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span>Managed services are billed monthly in advance.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span>Late payments may attract interest at a rate of 2% per month on the outstanding balance.</span></li>
                </ul>
                <p className={styles.sectionText}>All prices are in Nigerian Naira (NGN) unless otherwise agreed. International engagements may be invoiced in USD or GBP as specified in the proposal.</p>
              </div>

              <div id="termination" className={styles.section}>
                <h2 className={styles.sectionTitle}>8. Termination</h2>
                <p className={styles.sectionText}>Either party may terminate a service engagement with 30 days' written notice, subject to the terms of the specific engagement. Proxynet reserves the right to suspend or terminate services immediately where:</p>
                <ul className={styles.list}>
                  <li className={styles.listItem}><span className={styles.dot} /><span>Payment obligations are overdue by more than 30 days.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span>The client is in material breach of these Terms or the engagement agreement.</span></li>
                  <li className={styles.listItem}><span className={styles.dot} /><span>Continued engagement would place Proxynet personnel at risk or expose Proxynet to legal liability.</span></li>
                </ul>
                <p className={styles.sectionText}>On termination, all outstanding invoices become immediately due and payable. Proxynet will return client-owned equipment and data in its possession within a reasonable timeframe.</p>
              </div>

              <div id="governing-law" className={styles.section}>
                <h2 className={styles.sectionTitle}>9. Governing Law</h2>
                <p className={styles.sectionText}>These Terms are governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes arising from these Terms or from the use of this Site shall be subject to the exclusive jurisdiction of the courts of Lagos State, Nigeria.</p>
                <p className={styles.sectionText}>Proxynet encourages resolution of disputes through direct negotiation or, where agreed, through alternative dispute resolution before resorting to litigation.</p>
              </div>

              <div id="changes" className={styles.section}>
                <h2 className={styles.sectionTitle}>10. Changes to These Terms</h2>
                <p className={styles.sectionText}>Proxynet reserves the right to update these Terms at any time. Changes will be posted on this page with an updated "last updated" date. Continued use of the Site or services after changes are posted constitutes acceptance of the revised Terms. We recommend reviewing this page periodically.</p>
              </div>

              <div id="contact" className={styles.section}>
                <h2 className={styles.sectionTitle}>11. Contact Us</h2>
                <p className={styles.sectionText}>For any questions regarding these Terms, please contact us:</p>
                <div className={styles.contactBlock}>
                  <span className={styles.contactLabel}>Proxynet Communications Limited</span>
                  <span className={styles.contactLine}>The Proxynet House, 5B Adedeji Close, off Opebi Road, Ikeja, Lagos, Nigeria.</span>
                  <a href="mailto:info@proxynetgroup.com" className={styles.contactLink}>info@proxynetgroup.com</a>
                  <a href="tel:+2347032647755" className={styles.contactLink}>+234 703 264 7755</a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  )
}
