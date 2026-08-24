import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ChevronRight, Send, Shield, Globe, Activity,
  Lock, Server, Eye, ArrowRight, CheckCircle,
} from 'lucide-react'
import Captcha from '../components/Captcha'
import SEO from '../components/SEO'
import { useLang } from '../context/LanguageContext'
import SectionBlobs from '../components/SectionBlobs'
import SolutionPartnerStrip from '../components/SolutionPartnerStrip'
import styles from './CloudManaged.module.css'

/* ── Data ──────────────────────────────────────────────────────── */

const services = [
  {
    icon: Globe,
    title: 'Remote Access Solutions',
    desc: 'The Security Team can assess options available for remote connectivity to the company network, including the security implications of each option — helping you implement the solution that best fits the organization.',
  },
  {
    icon: Lock,
    title: 'Virtual Private Networking (VPN)',
    desc: 'More and more companies are extending the reach of their networks and providing remote access to company data. Proxynet can implement a VPN solution allowing employees to work away from the office and still maintain the security of the office.',
  },
  {
    icon: Eye,
    title: 'Logs & Server Monitoring',
    desc: 'Controlling your IT environment requires more than just monitoring the logs. At Proxynet we help you understand your IT environment by consistently monitoring and reporting on the wealth of information that is contained within the logs.',
  },
  {
    icon: Shield,
    title: 'Managed Security Administration',
    desc: 'Administration of the security function can be a time consuming and tedious task. The Proxynet Security Team can provide experienced resources to assist in defining and executing effective security administration practices.',
  },
  {
    icon: Activity,
    title: 'Intrusion Detection',
    desc: 'Proxynet can deliver an Intrusion Detection System to ensure networks are scanned daily for intruder activity and firewalls remain intact.',
  },
  {
    icon: Server,
    title: 'Firewall Security',
    desc: 'According to ICSA Labs, most firewall products have the ability to prevent known attacks if properly configured. Proxynet can ensure that reviewing current firewall designs or implementing a new firewall product if one is not present protects your organization.',
  },
]

const benefits = [
  { title: '24/7 Monitoring & Response', desc: 'Round-the-clock oversight of your infrastructure with proactive incident response and escalation.' },
  { title: 'Predictable Monthly Costs', desc: 'Fixed-fee managed services that give you budget certainty and eliminate surprise IT costs.' },
  { title: 'Expert Security Team', desc: 'Access to certified security engineers and consultants without the overhead of building an in-house team.' },
  { title: 'Reduced Downtime', desc: 'Continuous monitoring and preventive maintenance reduce unplanned outages and business disruption.' },
  { title: 'Compliance & Reporting', desc: 'Regular reports, audit trails, and compliance support to meet regulatory and industry standards.' },
  { title: 'Scalable Infrastructure', desc: 'Services scale with your business — add users, sites, and capacity without capital investment.' },
]

const process = [
  { num: '01', title: 'Assessment', desc: 'We assess your current infrastructure, identify risks, and recommend a managed services strategy tailored to your business.' },
  { num: '02', title: 'Design & Proposal', desc: 'A detailed service proposal covering scope, SLA terms, monitoring tools, escalation procedures, and monthly costs.' },
  { num: '03', title: 'Deployment & Onboarding', desc: 'We deploy monitoring agents, configure VPN/remote access, integrate with existing systems, and onboard your team.' },
  { num: '04', title: 'Ongoing Management', desc: 'Your dedicated Proxynet team manages security, monitors logs, applies patches, and responds to incidents 24/7.' },
  { num: '05', title: 'Monthly Reporting', desc: 'Regular reporting on uptime, incidents, security events, and system health — with quarterly business reviews.' },
]

/* ── Component ─────────────────────────────────────────────────── */

export default function CloudManaged() {
  const { t } = useLang()
  const [submitted, setSubmitted] = useState(false)
  const [captchaToken, setCaptchaToken] = useState(null)
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', service: '', notes: '',
  })

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!captchaToken) return
    setSubmitted(true)
  }

  return (
    <>
      <SEO
        title="Cloud & Managed Services — Proxynet Group"
        description="Proxynet provides managed IT services including remote access solutions, VPN, 24/7 server monitoring, managed security administration, and intrusion detection across Nigeria and West Africa."
        canonical="/solutions/cloud-managed-services"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Cloud & Managed Services',
          description: 'Managed IT services including remote access, VPN, 24/7 monitoring, managed security administration, and intrusion detection.',
          provider: { '@type': 'Organization', name: 'Proxynet Group', url: 'https://www.proxynetgroup.com' },
          areaServed: { '@type': 'Place', name: 'West Africa' },
          serviceType: 'Managed IT Services',
          url: 'https://www.proxynetgroup.com/solutions/cloud-managed-services',
        }}
      />

      <main>

        {/* ── Hero ── */}
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
              <Link to="/solutions" className={styles.crumb}>{t.solutions}</Link>
              <ChevronRight size={14} className={styles.sep} />
              <span className={styles.crumbActive}>{t.solCloud}</span>
            </motion.nav>
            <motion.p
              className={styles.eyebrow}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              Managed &amp; Cloud
            </motion.p>
            <motion.h1
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Cloud &amp; Managed Services
            </motion.h1>
            <motion.p
              className={styles.heroSub}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              24/7 monitoring, managed security, remote access, and infrastructure management —
              giving you enterprise-grade IT without the overhead of building it in-house.
            </motion.p>
            <motion.div
              className={styles.heroCtas}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a href="#enquire" className={styles.primary}>Request a Proposal</a>
              <a href="#services" className={styles.secondary}>Our Services</a>
            </motion.div>
          </div>
        </section>

        <SolutionPartnerStrip partners={['Microsoft', 'Cisco', 'Fortinet']} label="Technology Partners" />

        {/* ── Services ── */}
        <section id="services" className={styles.section}>
          <SectionBlobs />
          <div className={styles.inner}>
            <motion.div
              className={styles.sectionHeader}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className={styles.eyebrowBlue}>What We Manage</p>
              <h2 className={styles.heading}>Managed Services</h2>
              <p className={styles.subText}>
                From remote access to 24/7 security monitoring — Proxynet takes responsibility
                for the health, security, and availability of your IT infrastructure.
              </p>
            </motion.div>
            <div className={styles.servicesGrid}>
              {services.map((s, i) => {
                const Icon = s.icon
                return (
                  <motion.div
                    key={s.title}
                    className={styles.serviceCard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className={styles.serviceIcon}><Icon size={24} /></div>
                    <h3 className={styles.serviceTitle}>{s.title}</h3>
                    <p className={styles.serviceDesc}>{s.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Benefits ── */}
        <section className={styles.sectionDark}>
          <div className={styles.inner}>
            <motion.div
              className={styles.sectionHeader}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className={styles.eyebrowLight}>Why Managed Services</p>
              <h2 className={styles.headingLight}>Benefits of Outsourcing IT Management</h2>
              <p className={styles.subTextLight}>
                Managed services give you predictable costs, expert resources, and round-the-clock support
                without the complexity of building and maintaining an in-house IT operations team.
              </p>
            </motion.div>
            <div className={styles.benefitsGrid}>
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  className={styles.benefitCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <CheckCircle size={20} className={styles.benefitIcon} />
                  <div>
                    <h3 className={styles.benefitTitle}>{b.title}</h3>
                    <p className={styles.benefitDesc}>{b.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section className={styles.section}>
          <SectionBlobs />
          <div className={styles.inner}>
            <motion.div
              className={styles.sectionHeader}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className={styles.eyebrowBlue}>How It Works</p>
              <h2 className={styles.heading}>Our Managed Services Process</h2>
              <p className={styles.subText}>
                A structured, transparent onboarding and delivery process — from initial assessment
                to ongoing 24/7 management and monthly reporting.
              </p>
            </motion.div>
            <div className={styles.processGrid}>
              {process.map((step, i) => (
                <motion.div
                  key={step.num}
                  className={styles.processStep}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
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
            <motion.div
              className={styles.sectionHeader}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className={styles.eyebrowBlue}>Get Started</p>
              <h2 className={styles.heading}>Request a Managed Services Proposal</h2>
              <p className={styles.subText}>
                Tell us about your infrastructure and requirements, and we'll send you a tailored
                proposal with scope, SLA terms, and monthly costs within 48 hours.
              </p>
            </motion.div>

            {submitted ? (
              <motion.div
                className={styles.success}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <Send size={36} className={styles.successIcon} />
                <h3>Proposal Request Submitted</h3>
                <p>
                  Our managed services team will review your requirements and send you a detailed
                  proposal within 48 hours.
                </p>
              </motion.div>
            ) : (
              <motion.form
                className={styles.form}
                onSubmit={handleSubmit}
                noValidate
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label className={styles.label}>Full Name *</label>
                    <input
                      required
                      className={styles.input}
                      placeholder="Your name"
                      value={form.name}
                      onChange={set('name')}
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Company *</label>
                    <input
                      required
                      className={styles.input}
                      placeholder="Your company"
                      value={form.company}
                      onChange={set('company')}
                    />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label className={styles.label}>Email Address *</label>
                    <input
                      required
                      type="email"
                      className={styles.input}
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={set('email')}
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Phone Number</label>
                    <input
                      type="tel"
                      className={styles.input}
                      placeholder="+234 ..."
                      value={form.phone}
                      onChange={set('phone')}
                    />
                  </div>
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Service of Interest</label>
                  <select
                    className={styles.input}
                    value={form.service}
                    onChange={set('service')}
                  >
                    <option value="">Select a service</option>
                    <option>Remote Access & VPN Solutions</option>
                    <option>24/7 Logs & Server Monitoring</option>
                    <option>Managed Security Administration</option>
                    <option>Intrusion Detection & Firewall Management</option>
                    <option>Full Managed IT Services</option>
                    <option>Not sure — need consultation</option>
                  </select>
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Infrastructure Details</label>
                  <textarea
                    rows="4"
                    className={styles.textarea}
                    placeholder="Number of users, number of servers, current infrastructure (on-premise/cloud), locations, and any specific challenges or requirements…"
                    value={form.notes}
                    onChange={set('notes')}
                  />
                </div>
                <Captcha onChange={setCaptchaToken} />
                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={!captchaToken}
                  style={{ opacity: captchaToken ? 1 : 0.5, cursor: captchaToken ? 'pointer' : 'not-allowed' }}
                >
                  Submit Request <Send size={16} />
                </button>
              </motion.form>
            )}
          </div>
        </section>

      </main>
    </>
  )
}
