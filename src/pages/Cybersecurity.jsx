import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
ChevronRight, Send, Shield, Lock, Eye, Server,
AlertTriangle, ArrowRight, CheckCircle, Wifi, Key,
} from 'lucide-react'
import Captcha from '../components/Captcha'
import SEO from '../components/SEO'
import { useLang } from '../context/LanguageContext'
import SectionBlobs from '../components/SectionBlobs'
import beyondTrustLogo from '../assets/BeyondTrust.jpg'
import inetcoLogo from '../assets/INETCO_Systems_Limited_Logo.jpg'
import comforteLogo from '../assets/COMFORTE 04 FS_SecurDPS Discover and Classify-1.png'
import styles from './Cybersecurity.module.css'

/* ── Capabilities ── */
const capabilities = [
{ icon: Shield, title: 'Intrusion Detection Systems', desc: 'Daily network scanning for intruder activity, anomaly detection, and firewall integrity checks to catch threats before they escalate.' },
{ icon: Lock, title: 'Firewall Security & Configuration', desc: 'Reviewing current firewall designs or implementing a new firewall product — properly configured to prevent known attacks per ICSA Labs standards.' },
{ icon: Wifi, title: 'Remote Access & VPN Solutions', desc: 'Assessment and implementation of secure remote connectivity options — including VPN solutions that let employees work off-site without compromising security.' },
{ icon: Eye, title: 'Logs & Server Monitoring', desc: '24/7 monitoring and reporting on your IT environment logs. Controlling your infrastructure requires understanding it — we make that data actionable.' },
{ icon: AlertTriangle, title: 'Anti-Virus Consulting', desc: 'Systematic approach to protecting your environment from viruses — preventing downtime, safeguarding data, and avoiding operational disruption.' },
{ icon: Key, title: 'Security Administration', desc: 'Experienced resources to define and execute effective security administration practices — including policy, access controls, and incident response.' },
]

/* ── Brand partner data ── */
const brandPartners = [
{
  id: 'beyondtrust',
  name: 'BeyondTrust',
  logo: beyondTrustLogo,
  label: 'Privileged Access Management & Remote Support',
  tagline: 'Zero Trust Privileged Access',
  description: 'BeyondTrust is the global leader in Privileged Access Management (PAM) and secure remote access. Proxynet deploys BeyondTrust solutions to protect organisations from insider threats and external attackers who exploit privileged credentials.',
  capabilities: [
    'Privileged Password & Session Management',
    'Endpoint Privilege Management (least-privilege enforcement)',
    'Secure Remote Access & Remote Support',
    'Privileged Threat Analytics',
    'Audit trails and session recording for compliance',
  ],
  useCases: 'Banks, telcos, government agencies, and enterprises with regulatory obligations around privileged account access and audit trails.',
},
{
  id: 'inetco',
  name: 'INETCO',
  logo: inetcoLogo,
  label: 'Strategic Partner · Real-Time Transaction Monitoring',
  tagline: 'Fraud Detection, Operational Monitoring & Payment Intelligence',
  description: 'INETCO and Proxynet are strategic partners, combining INETCO\'s cutting-edge real-time monitoring and analytics technology with Proxynet\'s proven track record in delivering tailored technology solutions. Together, we equip organisations with the tools and insights needed to detect payment fraud, enhance cybersecurity, and optimise operational performance in today\'s digital economy.',
  capabilities: [
    'Real-time payment transaction monitoring',
    'Fraud detection and anomaly alerting',
    'ATM and POS network intelligence',
    'Operational performance analytics',
    'Regulatory compliance reporting',
    'Seamless integration with existing payment infrastructure',
  ],
  quote: {
    text: 'By combining our strengths and expertise, we are confident in our ability to deliver unparalleled value and support to businesses seeking to navigate the complex cybersecurity landscape.',
    author: 'Christene Best',
    role: 'VP Marketing & Channels, INETCO',
  },
  useCases: 'Nigerian and West African banks, payment processors, and financial institutions managing ATM networks, card transactions, and digital payment channels.',
},
{
  id: 'comforte',
  name: 'Comforte AG',
  logo: comforteLogo,
  label: 'Data Security & Tokenisation',
  tagline: 'Discover, Classify & Protect Sensitive Data',
  description: 'Comforte AG is a data-centric security platform that discovers, classifies, and protects sensitive data wherever it lives — structured databases, cloud stores, and unstructured files. Proxynet deploys Comforte to help organisations achieve data privacy compliance and protect customer data at rest and in transit.',
  capabilities: [
    'Sensitive data discovery and classification',
    'Tokenisation and format-preserving encryption',
    'GDPR, NDPR, and PCI-DSS compliance enablement',
    'Cloud data security (AWS, Azure, GCP)',
    'Data security posture management',
  ],
  useCases: 'Enterprises handling cardholder data, PII, or healthcare records — including banks, insurance companies, and any organisation subject to NDPR or GDPR.',
},
]

/* ── Deployments ── */
const deployments = [
  {
    client: 'Creamer Media',
    solution: 'Kerio Control — Unified Threat Management',
    category: 'Cybersecurity · UTM · VPN',
    outcome: 'Evolved from a standalone firewall to a full UTM solution — managing network bandwidth, optimising internet pipe usage, and providing secure VPN access for clients and partners into local resources.',
  },
  {
    client: 'Altech West Africa',
    solution: 'FireEye Web Malware Protection System',
    category: 'Web Security · Zero-Day Protection',
    outcome: 'Deployed FireEye WebMPS to stop web-based attacks missed by traditional firewalls, IPS, and AV — protecting against zero-day web exploits and multi-protocol callbacks to secure network integrity and sensitive data.',
  },
  {
    client: 'NETCO · UAC',
    solution: 'McAfee Security Connected',
    category: 'Endpoint Security · Threat Intelligence',
    outcome: 'Implemented McAfee Security Connected — delivering real-time threat visibility, Global Threat Intelligence, and endpoint security across web, virtualisation, cloud, and mobile environments.',
  },
  {
    client: 'Enterprise Clients',
    solution: 'Firewall & Intrusion Detection Deployments',
    category: 'Network Security',
    outcome: 'Firewall design reviews, IDS deployment and security administration for enterprise clients across Nigeria and West Africa.',
  },
  {
    client: 'Financial Sector',
    solution: 'Privileged Access Management',
    category: 'PAM · BeyondTrust',
    outcome: 'BeyondTrust PAM deployed to enforce least-privilege access and produce audit-ready session recordings for compliance teams.',
  },
]

/* ── Process ── */
const process = [
{ num: '01', title: 'Security Assessment', desc: 'We assess your current security posture — identifying gaps, misconfigurations, exposed attack surfaces and compliance shortfalls.' },
{ num: '02', title: 'Solution Design', desc: 'Our engineers design a layered security architecture tailored to your environment, risk profile and regulatory obligations.' },
{ num: '03', title: 'Deployment & Integration', desc: 'We deploy and integrate security solutions into your existing infrastructure — minimising disruption and ensuring full coverage from day one.' },
{ num: '04', title: 'Monitoring & Response', desc: '24/7 log monitoring, real-time alerting, and incident response — so threats are caught and contained before they cause damage.' },
{ num: '05', title: 'Compliance Reporting', desc: 'Regular security reports, audit trail documentation, and compliance evidence packages for regulators and internal governance teams.' },
{ num: '06', title: 'Ongoing Management', desc: 'SLA-backed managed security services — policy reviews, patch management, access reviews and continuous improvement.' },
]

export default function Cybersecurity() {
const { t } = useLang()
const [submitted, setSubmitted] = useState(false)
const [captchaToken, setCaptchaToken] = useState(null)
const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', interest: '', notes: '' })
const set = f => e => setForm({ ...form, [f]: e.target.value })

return (
  <>
    <SEO
      title="IT Security & Cybersecurity — Proxynet Group"
      description="Proxynet deploys BeyondTrust, INETCO, and Comforte security solutions across Nigeria and West Africa — intrusion detection, PAM, fraud detection, and data security."
      canonical="/solutions/cybersecurity"
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'IT Security & Cybersecurity',
        provider: { '@type': 'Organization', name: 'Proxynet Group', url: 'https://www.proxynetgroup.com' },
        areaServed: { '@type': 'Place', name: 'West Africa' },
        serviceType: 'Cybersecurity',
        url: 'https://www.proxynetgroup.com/solutions/cybersecurity',
      }}
    />
    <main>

      {/* ── Hero ── */}
      <section className={`${styles.hero} heroScene`}>
        <SectionBlobs variant="dark" />
        <div className={styles.heroOverlay} />
        <div className={styles.heroInner}>
          <motion.nav className={styles.breadcrumb} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <Link to="/" className={styles.crumb}>{t.home}</Link>
            <ChevronRight size={14} className={styles.sep} />
            <span className={styles.crumb}>{t.solutions}</span>
            <ChevronRight size={14} className={styles.sep} />
            <span className={styles.crumbActive}>{t.solCybersecurity}</span>
          </motion.nav>
          <motion.p className={styles.eyebrow} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}>
            AV &amp; Infrastructure
          </motion.p>
          <motion.h1 className={styles.heroTitle} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            IT Security &amp; Cybersecurity
          </motion.h1>
          <motion.p className={styles.heroSub} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            Firewalls, intrusion detection, privileged access management, fraud monitoring, and data
            security — deployed and managed by Proxynet across Nigeria and West Africa.
          </motion.p>
          <motion.div className={styles.heroCtas} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <a href="#enquire" className={styles.primary}>Request a Security Assessment</a>
            <a href="#brands" className={styles.secondary}>Our Security Partners</a>
          </motion.div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className={styles.section}>
        <SectionBlobs />
        <div className={styles.inner}>
          <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className={styles.eyebrowBlue}>What We Do</p>
            <h2 className={styles.heading}>Security Capabilities</h2>
            <p className={styles.subText}>A layered approach to protecting your organisation — from perimeter firewalls to privileged access management and real-time transaction monitoring.</p>
          </motion.div>
          <div className={styles.capGrid}>
            {capabilities.map((cap, i) => {
              const Icon = cap.icon
              return (
                <motion.div key={cap.title} className={styles.capCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }} whileHover={{ y: -4 }}>
                  <div className={styles.capIcon}><Icon size={24} /></div>
                  <h3 className={styles.capTitle}>{cap.title}</h3>
                  <p className={styles.capDesc}>{cap.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Security Partners (Brand Sections) ── */}
      <section id="brands" className={styles.sectionDark}>
        <div className={styles.inner}>
          <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className={styles.eyebrowLight}>Security Technology Partners</p>
            <h2 className={styles.headingLight}>Best-in-Class Security Platforms</h2>
            <p className={styles.subTextLight}>Proxynet is an authorised deployer for three specialist security platforms — each solving a distinct and critical challenge for enterprise organisations.</p>
          </motion.div>

          <div className={styles.brandsStack}>
            {brandPartners.map((brand, i) => (
              <motion.div key={brand.id} className={styles.brandBlock} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <div className={styles.brandBlockHeader}>
                  <div className={styles.brandLogoWrap}>
                    <img src={brand.logo} alt={brand.name} className={styles.brandLogoImg} />
                  </div>
                  <div>
                    <p className={styles.brandLabel}>{brand.label}</p>
                    <h3 className={styles.brandName}>{brand.name}</h3>
                    <p className={styles.brandTagline}>{brand.tagline}</p>
                  </div>
                </div>
                <p className={styles.brandDesc}>{brand.description}</p>
                <div className={styles.brandCapabilities}>
                  <p className={styles.brandCapLabel}>Key Capabilities</p>
                  <ul className={styles.brandCapList}>
                    {brand.capabilities.map(cap => (
                      <li key={cap} className={styles.brandCapItem}>
                        <CheckCircle size={14} className={styles.brandCapCheck} />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.brandUseCases}>
                  <p className={styles.brandUseCasesLabel}>Who It's For</p>
                  <p className={styles.brandUseCasesText}>{brand.useCases}</p>
                </div>
                {brand.quote && (
                  <blockquote className={styles.brandQuote}>
                    <p className={styles.brandQuoteText}>"{brand.quote.text}"</p>
                    <footer className={styles.brandQuoteFooter}>
                      <span className={styles.brandQuoteAuthor}>{brand.quote.author}</span>
                      <span className={styles.brandQuoteRole}>{brand.quote.role}</span>
                    </footer>
                  </blockquote>
                )}
                <a href="#enquire" className={styles.brandCta}>
                  Request {brand.name} Assessment <ArrowRight size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Deployments ── */}
      <section className={styles.sectionAlt}>
        <div className={styles.inner}>
          <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className={styles.eyebrowBlue}>Track Record</p>
            <h2 className={styles.heading}>Featured Security Deployments</h2>
            <p className={styles.subText}>Selected cybersecurity projects delivered across Nigeria and West Africa.</p>
          </motion.div>
          <div className={styles.deploymentsGrid}>
            {deployments.map((d, i) => (
              <motion.div key={d.client + d.solution} className={styles.deploymentCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <span className={styles.deploymentCategory}>{d.category}</span>
                <h3 className={styles.deploymentSolution}>{d.solution}</h3>
                <p className={styles.deploymentClient}>{d.client}</p>
                <p className={styles.deploymentOutcome}>{d.outcome}</p>
              </motion.div>
            ))}
          </div>
          <motion.div className={styles.deploymentsCta} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
            <Link to="/case-studies" className={styles.ctaLink}>View All Case Studies <ArrowRight size={16} /></Link>
          </motion.div>
        </div>
      </section>

      {/* ── Our Process ── */}
      <section className={styles.section}>
        <SectionBlobs />
        <div className={styles.inner}>
          <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className={styles.eyebrowBlue}>How We Work</p>
            <h2 className={styles.heading}>Our Security Delivery Process</h2>
            <p className={styles.subText}>A structured, repeatable process — from initial assessment to ongoing managed security services.</p>
          </motion.div>
          <div className={styles.processGrid}>
            {process.map((step, i) => (
              <motion.div key={step.num} className={styles.processStep} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}>
                <span className={styles.stepNum}>{step.num}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Enquiry Form ── */}
      <section id="enquire" className={styles.sectionAlt}>
        <div className={styles.inner}>
          <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className={styles.eyebrowBlue}>Get Started</p>
            <h2 className={styles.heading}>Request a Security Assessment</h2>
            <p className={styles.subText}>Tell us about your environment and we'll come back with a tailored security proposal within 48 hours.</p>
          </motion.div>
          {submitted ? (
            <motion.div className={styles.success} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
              <Send size={36} className={styles.successIcon} />
              <h3>Enquiry Submitted</h3>
              <p>Our security team will review your requirements and get back to you within 48 hours.</p>
            </motion.div>
          ) : (
            <motion.form className={styles.form} onSubmit={e => { e.preventDefault(); if (!captchaToken) return; setSubmitted(true) }} noValidate initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label className={styles.label}>Full Name *</label>
                  <input required className={styles.input} value={form.name} onChange={set('name')} placeholder="Your name" />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Company *</label>
                  <input required className={styles.input} value={form.company} onChange={set('company')} placeholder="Your company" />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label className={styles.label}>Email Address *</label>
                  <input required type="email" className={styles.input} value={form.email} onChange={set('email')} placeholder="you@company.com" />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Phone Number</label>
                  <input type="tel" className={styles.input} value={form.phone} onChange={set('phone')} placeholder="+234 ..." />
                </div>
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Area of Interest</label>
                <select className={styles.input} value={form.interest} onChange={set('interest')}>
                  <option value="">Select a solution area</option>
                  <option>Intrusion Detection System</option>
                  <option>Firewall Security &amp; Configuration</option>
                  <option>Remote Access &amp; VPN</option>
                  <option>BeyondTrust — Privileged Access Management</option>
                  <option>INETCO — Transaction Monitoring &amp; Fraud Detection</option>
                  <option>Comforte — Data Security &amp; Tokenisation</option>
                  <option>Logs &amp; Server Monitoring</option>
                  <option>Security Administration</option>
                  <option>Full Security Assessment</option>
                </select>
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Project Details</label>
                <textarea rows="4" className={styles.textarea} value={form.notes} onChange={set('notes')} placeholder="Describe your current security setup, specific concerns, compliance requirements (NDPR, PCI-DSS, etc.), number of users and locations…" />
              </div>
              <Captcha onChange={setCaptchaToken} />
              <button type="submit" className={styles.submitBtn} disabled={!captchaToken} style={{ opacity: captchaToken ? 1 : 0.5, cursor: captchaToken ? 'pointer' : 'not-allowed' }}>
                Submit Enquiry <Send size={16} />
              </button>
            </motion.form>
          )}
        </div>
      </section>

    </main>
  </>
)
}
