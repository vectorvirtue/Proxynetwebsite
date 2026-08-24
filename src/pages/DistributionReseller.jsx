import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ChevronRight, Send, Package, Monitor, Wifi, Shield,
  Headphones, Printer, Camera, Cpu, CheckCircle,
  ArrowRight, Users, TrendingUp, Award, LifeBuoy,
} from 'lucide-react'
import Captcha from '../components/Captcha'
import SEO from '../components/SEO'
import { useLang } from '../context/LanguageContext'
import SectionBlobs from '../components/SectionBlobs'
import SolutionPartnerStrip from '../components/SolutionPartnerStrip'
import styles from './DistributionReseller.module.css'

/* ── Data ──────────────────────────────────────────────────────── */

const categories = [
  {
    icon: Monitor,
    title: 'AV & Display Solutions',
    desc: 'LED videowalls, digital signage, interactive displays, and professional monitors from Samsung, Absen, Unilumin, and more.',
    brands: ['Samsung', 'Absen', 'Unilumin', 'Sharp', 'Panasonic'],
  },
  {
    icon: Headphones,
    title: 'Unified Communications',
    desc: 'IP phones, conference phones, and professional headsets for modern workplaces — from entry-level to executive boardroom.',
    brands: ['Yealink', 'VT', 'Logitech'],
  },
  {
    icon: Wifi,
    title: 'Networking & Connectivity',
    desc: 'Switches, routers, access points, and structured cabling solutions for enterprise and SME environments.',
    brands: ['D-Link', 'Huawei', 'Belkin', 'Extron'],
  },
  {
    icon: Shield,
    title: 'Security & Surveillance',
    desc: 'IP cameras, NVR/DVR systems, access control, and biometric solutions for every deployment scale.',
    brands: ['Dahua', 'Hikvision', 'Hanwha', 'Bosch', 'ZKTeco'],
  },
  {
    icon: Printer,
    title: 'Printing & Imaging',
    desc: 'Multifunctional printers, scanners, and document management solutions for corporate environments.',
    brands: ['Canon', 'Sharp'],
  },
  {
    icon: Camera,
    title: 'Professional AV Integration',
    desc: 'Signal management, control systems, AV over IP, and mounting solutions for system integrators.',
    brands: ['Crestron', 'Extron', 'Kramer', 'Peerless-AV', 'Biamp'],
  },
  {
    icon: Cpu,
    title: 'EdTech & Robotics',
    desc: 'STEM learning kits, robotics platforms, and coding solutions for schools and training centres.',
    brands: ['MakeBlock', 'Acebott', 'Arduino'],
  },
  {
    icon: Package,
    title: 'IT Peripherals & Accessories',
    desc: 'A broad range of IT accessories, charging solutions, and connectivity products for the channel.',
    brands: ['Logitech', 'Belkin', 'VT'],
  },
]

const benefits = [
  {
    icon: TrendingUp,
    title: 'Competitive Reseller Margins',
    desc: 'Access Proxynet\'s product catalogue at structured reseller pricing, giving you room to compete and grow profitably.',
  },
  {
    icon: Award,
    title: 'Authorised Product Supply',
    desc: 'All products come through authorised distribution channels — full warranty, manufacturer support, and genuine stock guaranteed.',
  },
  {
    icon: Users,
    title: 'Dedicated Account Manager',
    desc: 'A named account manager for your business, available for quotes, support escalations, and quarterly reviews.',
  },
  {
    icon: LifeBuoy,
    title: 'Technical & Pre-Sales Support',
    desc: 'Our engineers support your team on solution design, product selection, and technical queries before and after the sale.',
  },
  {
    icon: CheckCircle,
    title: 'Sales & Training Resources',
    desc: 'Access to product training, co-branded marketing materials, and joint go-to-market support for key opportunities.',
  },
  {
    icon: Package,
    title: 'Flexible Order & Logistics',
    desc: 'Order what you need, when you need it. We handle importation, customs clearance, and last-mile delivery across West Africa.',
  },
]


/* ── Component ─────────────────────────────────────────────────── */

export default function DistributionReseller() {
  const { t } = useLang()
  const [submitted, setSubmitted] = useState(false)
  const [captchaToken, setCaptchaToken] = useState(null)
  const [form, setForm] = useState({
    company: '',
    contact: '',
    email: '',
    phone: '',
    territory: '',
    tier: '',
    interest: '',
    message: '',
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
        title="Distribution & Reseller Services — Proxynet Group"
        description="Proxynet Group is an authorised distributor for Samsung, Logitech, Canon, Yealink, Dahua, and more. Join our reseller programme and grow your technology business across West Africa."
        canonical="/solutions/distribution"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Distribution & Reseller Services',
          description: 'Authorised distribution and reseller programme for leading technology brands across West Africa.',
          provider: { '@type': 'Organization', name: 'Proxynet Group', url: 'https://www.proxynetgroup.com' },
          areaServed: { '@type': 'Place', name: 'West Africa' },
          serviceType: 'Technology Distribution',
          url: 'https://www.proxynetgroup.com/solutions/distribution',
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
              <span className={styles.crumbActive}>{t.solDistribution}</span>
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
              Distribution &amp; Reseller Services
            </motion.h1>
            <motion.p
              className={styles.heroSub}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Proxynet is an authorised distributor for the world's leading technology brands.
              We supply IT consultants, system integrators, and resellers across Nigeria and West Africa
              with genuine products, competitive pricing, and full technical backing.
            </motion.p>
            <motion.div
              className={styles.heroCtas}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a href="#become-reseller" className={styles.primary}>Become a Reseller</a>
              <a href="#what-we-distribute" className={styles.secondary}>What We Distribute</a>
            </motion.div>
          </div>
        </section>

        <SolutionPartnerStrip partners={['Samsung', 'Yealink', 'D-Link', 'Dahua', 'Canon', 'Crestron', 'MakeBlock', 'Acebott']} label="Distribution Partners" />

        {/* ── Stats bar ── */}
        <div className={styles.statsBar}>
          <div className={styles.statsInner}>
            {[
              { value: '35+', label: 'Authorised Brands' },
              { value: '20+', label: 'Years in the Channel' },
              { value: '5', label: 'Countries Served' },
              { value: '500+', label: 'Reseller Partners' },
            ].map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── What We Distribute ── */}
        <section id="what-we-distribute" className={styles.section}>
          <SectionBlobs />
          <div className={styles.inner}>
            <motion.div
              className={styles.sectionHeader}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className={styles.eyebrowBlue}>Product Portfolio</p>
              <h2 className={styles.heading}>What We Distribute</h2>
              <p className={styles.subText}>
                Our product portfolio spans eight technology categories, supplied through authorised channels
                with full manufacturer warranty and support.
              </p>
            </motion.div>
            <div className={styles.catGrid}>
              {categories.map((cat, i) => {
                const Icon = cat.icon
                return (
                  <motion.div
                    key={cat.title}
                    className={styles.catCard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className={styles.catIcon}>
                      <Icon size={24} />
                    </div>
                    <h3 className={styles.catTitle}>{cat.title}</h3>
                    <p className={styles.catDesc}>{cat.desc}</p>
                    <div className={styles.catBrands}>
                      {cat.brands.map((b) => (
                        <span key={b} className={styles.brandTag}>{b}</span>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>
            <motion.div
              className={styles.viewAllRow}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/partners" className={styles.viewAllBtn}>
                View All Technology Partners <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Reseller Benefits ── */}
        <section className={styles.sectionDark}>
          <div className={styles.inner}>
            <motion.div
              className={styles.sectionHeader}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className={styles.eyebrowLight}>Why Partner With Us</p>
              <h2 className={styles.headingLight}>Benefits of the Reseller Programme</h2>
              <p className={styles.subTextLight}>
                Everything your business needs to sell technology confidently — supply, support, and growth.
              </p>
            </motion.div>
            <div className={styles.benefitsGrid}>
              {benefits.map((b, i) => {
                const Icon = b.icon
                return (
                  <motion.div
                    key={b.title}
                    className={styles.benefitCard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                  >
                    <div className={styles.benefitIcon}>
                      <Icon size={22} />
                    </div>
                    <h3 className={styles.benefitTitle}>{b.title}</h3>
                    <p className={styles.benefitDesc}>{b.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

     

        {/* ── Become a Reseller Form ── */}
        <section id="become-reseller" className={styles.section}>
          <SectionBlobs />
          <div className={styles.inner}>
            <div className={styles.applyGrid}>

              {/* Left: copy */}
              <motion.div
                className={styles.applyLeft}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className={styles.eyebrowBlue}>Reseller Application</p>
                <h2 className={styles.heading}>Become a Reseller</h2>
                <p className={styles.subText}>
                  Fill out the form and our Business Development team will be in touch within
                  2 business days to discuss the right partnership tier for your business.
                </p>
                <ul className={styles.applyBullets}>
                  {[
                    'Access to the full Proxynet product catalogue at reseller pricing',
                    'Sales training, technical support, and co-marketing resources',
                    'Dedicated account manager and quarterly business reviews',
                    'Genuine, warranted stock — no grey market products',
                  ].map((point) => (
                    <li key={point} className={styles.applyBullet}>
                      <CheckCircle size={16} className={styles.bulletIcon} />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className={styles.applyContact}>
                  <p className={styles.applyContactLabel}>Prefer to talk first?</p>
                  <a href="tel:+2349031829347" className={styles.applyContactLink}>
                    Call +234 903 182 9347
                  </a>
                  <a href="mailto:sales@proxynetgroup.com" className={styles.applyContactLink}>
                    sales@proxynetgroup.com
                  </a>
                </div>
              </motion.div>

              {/* Right: form */}
              <motion.div
                className={styles.applyRight}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {submitted ? (
                  <div className={styles.success}>
                    <Send size={36} className={styles.successIcon} />
                    <h3>Application Received</h3>
                    <p>
                      Thank you for your interest in the Proxynet Reseller Programme.
                      Our Business Development team will be in touch within 2 business days.
                    </p>
                  </div>
                ) : (
                  <form className={styles.form} onSubmit={handleSubmit} noValidate>
                    <div className={styles.formRow}>
                      <div className={styles.field}>
                        <label className={styles.label}>Company Name *</label>
                        <input
                          required
                          className={styles.input}
                          placeholder="Your company name"
                          value={form.company}
                          onChange={set('company')}
                        />
                      </div>
                      <div className={styles.field}>
                        <label className={styles.label}>Contact Person *</label>
                        <input
                          required
                          className={styles.input}
                          placeholder="Full name"
                          value={form.contact}
                          onChange={set('contact')}
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
                        <label className={styles.label}>Phone Number *</label>
                        <input
                          required
                          type="tel"
                          className={styles.input}
                          placeholder="+234 ..."
                          value={form.phone}
                          onChange={set('phone')}
                        />
                      </div>
                    </div>
                    <div className={styles.formRow}>
                      <div className={styles.field}>
                        <label className={styles.label}>Territory / Region</label>
                        <input
                          className={styles.input}
                          placeholder="e.g. Lagos, Abuja, Ghana"
                          value={form.territory}
                          onChange={set('territory')}
                        />
                      </div>
                      <div className={styles.field}>
                        <label className={styles.label}>Partnership Tier of Interest</label>
                        <select
                          className={styles.input}
                          value={form.tier}
                          onChange={set('tier')}
                        >
                          <option value="">Select a tier</option>
                          <option>Registered Reseller</option>
                          <option>Silver Partner</option>
                          <option>Gold Partner</option>
                          <option>Not sure yet</option>
                        </select>
                      </div>
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}>Solution Area of Interest</label>
                      <select
                        className={styles.input}
                        value={form.interest}
                        onChange={set('interest')}
                      >
                        <option value="">Select a solution area</option>
                        <option>AV & Display Solutions</option>
                        <option>Unified Communications</option>
                        <option>Networking & Connectivity</option>
                        <option>Security & Surveillance</option>
                        <option>Printing & Imaging</option>
                        <option>Professional AV Integration</option>
                        <option>EdTech & Robotics</option>
                        <option>IT Peripherals & Accessories</option>
                        <option>Multiple / All Categories</option>
                      </select>
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}>Tell Us About Your Business</label>
                      <textarea
                        rows="4"
                        className={styles.textarea}
                        placeholder="Brief description of your company, current clients, and why you want to partner with Proxynet…"
                        value={form.message}
                        onChange={set('message')}
                      />
                    </div>
                    <Captcha onChange={setCaptchaToken} />
                    <button
                      type="submit"
                      className={styles.submitBtn}
                      disabled={!captchaToken}
                      style={{ opacity: captchaToken ? 1 : 0.5, cursor: captchaToken ? 'pointer' : 'not-allowed' }}
                    >
                      Submit Application <Send size={16} />
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
