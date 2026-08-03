import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ChevronRight, Send, Network, Wifi, Server, Shield,
  ArrowRight, CheckCircle, ImageOff, Layers, Globe, Cpu,
} from 'lucide-react'
import Captcha from '../components/Captcha'
import SEO from '../components/SEO'
import { useLang } from '../context/LanguageContext'
import SectionBlobs from '../components/SectionBlobs'
import styles from './Networking.module.css'

const capabilities = [
  {
    icon: Network,
    title: 'LAN / WAN Design & Deployment',
    desc: 'Structured cabling, switching, routing and wide-area connectivity — architected for performance, redundancy and scalability from day one.',
  },
  {
    icon: Wifi,
    title: 'Wireless Networks',
    desc: 'Enterprise Wi-Fi design and deployment using Ubiquiti, Cisco Meraki and Ruckus — covering campuses, multi-floor offices and distributed sites.',
  },
  {
    icon: Server,
    title: 'Network Infrastructure & Cabling',
    desc: 'Structured cabling, patch panel termination, rack build-out and data centre connectivity to international cabling standards.',
  },
  {
    icon: Shield,
    title: 'Network Security & Segmentation',
    desc: 'VLAN segmentation, firewall integration and access control to isolate traffic, protect sensitive systems and enforce security policy.',
  },
  {
    icon: Layers,
    title: 'Systems Integration',
    desc: 'Connecting your network, AV, security and business systems into a unified, manageable infrastructure that works as one.',
  },
  {
    icon: Globe,
    title: 'Remote Site Connectivity',
    desc: 'Fibre, leased-line and wireless backhaul solutions for branch offices, remote sites, schools and healthcare facilities across Nigeria and West Africa.',
  },
]

const brands = [
  'Ubiquiti', 'Cisco',
  'D-Link', 'TP-Link Enterprise', 'Fortinet',
]

const deployments = [
  {
    client: 'WHO · Nigeria',
    solution: 'Colleges of Nursing Network Project',
    category: 'Network Infrastructure · Healthcare',
    year: '2026',
    outcome: 'Wireless network deployment across nursing colleges in six Nigerian states — Ubiquiti access points, structured cabling, activation and remediation across approximately 13 schools.',
  },
]

const process = [
  { num: '01', title: 'Site Survey & Assessment', desc: 'We visit every site, map the physical environment, assess existing infrastructure and identify constraints before recommending any equipment.' },
  { num: '02', title: 'Network Design', desc: 'Our engineers produce a full network design — topology, IP scheme, VLAN plan, equipment specifications and cabling layout — for your sign-off.' },
  { num: '03', title: 'Supply & Installation', desc: 'We source, deliver and install all equipment — from cabinets and patch panels to access points and switches — to a clean, documented standard.' },
  { num: '04', title: 'Configuration & Testing', desc: 'Every device is configured, tested end-to-end and signed off before handover. No shortcuts. No untested links.' },
  { num: '05', title: 'Documentation & Handover', desc: 'Full as-built documentation, network diagrams, login credentials and user training are provided at handover.' },
  { num: '06', title: 'Support & Maintenance', desc: 'Post-deployment monitoring, remote support and optional SLA maintenance contracts to keep the network healthy.' },
]

// Gallery: swap src values with real images when available
// const galleryItems = [
//   { id: 1, caption: 'Access point installation — WHO Nursing Colleges Project', src: null },
//   { id: 2, caption: 'Network cabinet and patch panel build-out', src: null },
//   { id: 3, caption: 'Structured cabling and termination', src: null },
//   { id: 4, caption: 'Site survey and remediation — multi-state deployment', src: null },
// ]

export default function Networking() {
  const { t } = useLang()
  const [submitted, setSubmitted] = useState(false)
  const [captchaToken, setCaptchaToken] = useState(null)
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', useCase: '', notes: '' })
  const set = f => e => setForm({ ...form, [f]: e.target.value })

  return (
    <>
      <SEO
        title="Network Infrastructure & Systems Integration — Proxynet Group"
        description="Proxynet designs and deploys enterprise LAN, WAN, wireless networks and structured cabling across Nigeria and West Africa. Ubiquiti, Cisco, Ruckus and more."
        canonical="/solutions/networking"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Network Infrastructure & Systems Integration',
          provider: { '@type': 'Organization', name: 'Proxynet Group', url: 'https://www.proxynetgroup.com' },
          areaServed: { '@type': 'Place', name: 'West Africa' },
          serviceType: 'Network Infrastructure',
          url: 'https://www.proxynetgroup.com/solutions/networking',
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
              <span className={styles.crumbActive}>{t.solNetworking}</span>
            </motion.nav>
            <motion.p className={styles.eyebrow} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}>
              AV &amp; Infrastructure
            </motion.p>
            <motion.h1 className={styles.heroTitle} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              Network Infrastructure &amp; Systems Integration
            </motion.h1>
            <motion.p className={styles.heroSub} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              LAN, WAN, wireless networks and structured cabling — designed, deployed and supported by Proxynet
              across Nigeria and West Africa. From single offices to multi-state infrastructure projects.
            </motion.p>
            <motion.div className={styles.heroCtas} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <a href="#enquire" className={styles.primary}>Request a Quote</a>
              <a href="#capabilities" className={styles.secondary}>Our Capabilities</a>
            </motion.div>
          </div>
        </section>

        {/* ── Capabilities ── */}
        <section id="capabilities" className={styles.section}>
          <SectionBlobs />
          <div className={styles.inner}>
            <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={styles.eyebrowBlue}>What We Do</p>
              <h2 className={styles.heading}>End-to-End Network Capabilities</h2>
              <p className={styles.subText}>From a single office Wi-Fi refresh to a multi-site WAN deployment across six states — we scope, design and deliver.</p>
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

        {/* ── Featured Deployment ── */}
        <section className={styles.sectionDark}>
          <div className={styles.inner}>
            <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={styles.eyebrowLight}>Track Record</p>
              <h2 className={styles.headingLight}>Featured Deployments</h2>
              <p className={styles.subTextLight}>Selected network infrastructure projects delivered across Nigeria and West Africa.</p>
            </motion.div>
            <div className={styles.deploymentsGrid}>
              {deployments.map((d, i) => (
                <motion.div key={d.client} className={styles.deploymentCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                  <div className={styles.deploymentMeta}>
                    <span className={styles.deploymentCategory}>{d.category}</span>
                    <span className={styles.deploymentYear}>{d.year}</span>
                  </div>
                  <h3 className={styles.deploymentSolution}>{d.solution}</h3>
                  <p className={styles.deploymentClient}>{d.client}</p>
                  <p className={styles.deploymentOutcome}>{d.outcome}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

     

        {/* ── Our Process ── */}
        <section className={styles.section}>
          <SectionBlobs />
          <div className={styles.inner}>
            <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={styles.eyebrowBlue}>How We Work</p>
              <h2 className={styles.heading}>Our Delivery Process</h2>
              <p className={styles.subText}>A structured process — from site survey to long-term support — built around zero surprises.</p>
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

        {/* ── Technology Partners ── */}
        <section className={styles.sectionAlt}>
          <div className={styles.inner}>
            <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={styles.eyebrowBlue}>Technology Partners</p>
              <h2 className={styles.heading}>Brands We Deploy</h2>
              <p className={styles.subText}>Sourced through authorised channels with full manufacturer warranty and support.</p>
            </motion.div>
            <div className={styles.brandsGrid}>
              {brands.map((brand, i) => (
                <motion.div key={brand} className={styles.brandPill} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.04 }}>
                  <CheckCircle size={14} className={styles.brandCheck} />
                  {brand}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Enquiry Form ── */}
        <section id="enquire" className={styles.section}>
          <SectionBlobs />
          <div className={styles.inner}>
            <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={styles.eyebrowBlue}>Get a Quote</p>
              <h2 className={styles.heading}>Request a Network Proposal</h2>
              <p className={styles.subText}>Tell us about your project and we'll send you a detailed proposal within 24 hours.</p>
            </motion.div>
            {submitted ? (
              <motion.div className={styles.success} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                <Send size={36} className={styles.successIcon} />
                <h3>Enquiry Submitted</h3>
                <p>Our network team will review your requirements and get back to you within 24 hours.</p>
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
                  <label className={styles.label}>Type of Project</label>
                  <select className={styles.input} value={form.useCase} onChange={set('useCase')}>
                    <option value="">Select a project type</option>
                    <option>Enterprise LAN / WAN Design</option>
                    <option>Wireless Network Deployment</option>
                    <option>Structured Cabling</option>
                    <option>Network Security &amp; Segmentation</option>
                    <option>Remote Site Connectivity</option>
                    <option>Systems Integration</option>
                    <option>Network Audit &amp; Remediation</option>
                    <option>Maintenance &amp; Support Contract</option>
                    <option>Other / Not Sure</option>
                  </select>
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Project Details</label>
                  <textarea rows="4" className={styles.textarea} value={form.notes} onChange={set('notes')} placeholder="Number of sites, approximate number of users, locations, timeline and any specific requirements…" />
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
