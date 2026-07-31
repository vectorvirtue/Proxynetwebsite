import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import {
  ChevronRight, Send, TvMinimal, Monitor, Mic2, Video,
  Wifi, Settings, ArrowRight, CheckCircle
} from "lucide-react"
import Captcha from '../components/Captcha'
import SEO from '../components/SEO'
import { useLang } from '../context/LanguageContext'
import SectionBlobs from '../components/SectionBlobs'
import styles from "./AVSolutions.module.css"

const capabilities = [
  {
    icon: "tv",
    title: "Videowall & NOC Solutions",
    desc: "Multi-panel LED and LCD videowalls for network operations centres, command centres, banking halls, and corporate lobbies. Designed for 24/7 operation.",
  },
  {
    icon: "monitor",
    title: "Digital Signage & Content Management",
    desc: "End-to-end digital signage deployments — from hardware supply and installation to CMS configuration, content scheduling, and ongoing support.",
  },
  {
    icon: "video",
    title: "Video Conferencing & Collaboration",
    desc: "Logitech, Poly, and Yealink collaboration systems for boardrooms, huddle spaces, and multi-site organisations. Integrated with Microsoft Teams and Zoom.",
  },
  {
    icon: "mic",
    title: "Audio & Sound Systems",
    desc: "Professional audio solutions including Biamp, Sennheiser, and Bosch discussion systems for boardrooms, auditoriums, houses of assembly, and event venues.",
  },
  {
    icon: "wifi",
    title: "AV over IP & Integration",
    desc: "AV signal distribution over IP networks using Extron, CYP, and Crestron infrastructure. Seamless integration with existing network and security systems.",
  },
  {
    icon: "settings",
    title: "Maintenance & Support",
    desc: "SLA-backed maintenance contracts, remote monitoring, preventive servicing, and rapid on-site response for all deployed AV infrastructure.",
  },
]

const featuredProjects = [
  {
    client: "United Bank for Africa (UBA)",
    solutionKey: "proj1Solution",
    categoryKey: "proj1Category",
    outcomeKey: "proj1Outcome",
  },
  {
    client: "Access Bank",
    solutionKey: "proj2Solution",
    categoryKey: "proj2Category",
    outcomeKey: "proj2Outcome",
  },
  {
    client: "FCMB",
    solutionKey: "proj5Solution",
    categoryKey: "proj5Category",
    outcomeKey: "proj5Outcome",
  },
  {
    client: "Lagos State House of Assembly",
    solutionKey: "proj9Solution",
    categoryKey: "proj9Category",
    outcomeKey: "proj9Outcome",
  },
  {
    client: "Ghana Broadcasting Corporation",
    solutionKey: "proj8Solution",
    categoryKey: "proj8Category",
    outcomeKey: "proj8Outcome",
  },
  {
    client: "Sundry Foods",
    solutionKey: "proj10Solution",
    categoryKey: "proj10Category",
    outcomeKey: "proj10Outcome",
  },
  {
    client: "PwC Nigeria",
    solutionKey: "proj11Solution",
    categoryKey: "proj11Category",
    outcomeKey: "proj11Outcome",
  },
]

const brands = [
  "Samsung", "LG", "Logitech", "Biamp", "Crestron",
  "Extron", "Sennheiser", "Yealink", "Poly", "Absen",
  "Unilumin", "Peerless-AV",
]

const process = [
  { num: "01", title: "Needs Assessment", desc: "You tell us what you need — the problem you're solving, the space, the audience, and the outcome you want. This shapes everything that follows." },
  { num: "02", title: "Discovery & Site Survey", desc: "We visit your site, assess the environment, and validate technical requirements before recommending any equipment or approach." },
  { num: "03", title: "Design & Proposal", desc: "Our engineers produce a full AV design with equipment specifications, drawings, and a detailed cost proposal tailored to your needs." },
  { num: "04", title: "Supply & Installation", desc: "We source, deliver, and install all equipment — including cabling, mounting, and AV rack integration." },
  { num: "05", title: "Commissioning & Training", desc: "Every system is fully commissioned, tested, and signed off. Your team receives hands-on training before handover." },
  { num: "06", title: "Support & Maintenance", desc: "Post-deployment support via our helpdesk, remote monitoring, and optional SLA maintenance contracts." },
]

export default function AVSolutions() {
  const { t } = useLang()
  const [submitted, setSubmitted] = useState(false)
  const [captchaToken, setCaptchaToken] = useState(null)
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", useCase: "", notes: "" })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!captchaToken) return
    setSubmitted(true)
  }

  return (
    <>
      <SEO
        title="Professional AV Solutions — Proxynet Group"
        description="Proxynet designs and deploys professional AV solutions across Nigeria and West Africa — videowalls, NOC command centres, digital signage, video conferencing, and audio systems."
        canonical="/solutions/av"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Professional AV Solutions',
          description: 'Videowalls, NOC command centres, digital signage, video conferencing, and professional audio solutions across Nigeria and West Africa.',
          provider: { '@type': 'Organization', name: 'Proxynet Group', url: 'https://www.proxynetgroup.com' },
          areaServed: { '@type': 'Place', name: 'West Africa' },
          serviceType: 'AV Solutions',
          url: 'https://www.proxynetgroup.com/solutions/av',
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
              <span className={styles.crumbActive}>{t.solAV}</span>
            </motion.nav>
            <motion.p className={styles.eyebrow} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}>
              AV &amp; Infrastructure
            </motion.p>
            <motion.h1 className={styles.heroTitle} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              Professional AV Solutions
            </motion.h1>
            <motion.p className={styles.heroSub} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              Videowalls, NOC command centres, digital signage, video conferencing, and professional audio — designed, deployed, and supported by Proxynet across Nigeria and West Africa.
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
              <h2 className={styles.heading}>End-to-End AV Capabilities</h2>
              <p className={styles.subText}>From boardrooms to broadcast studios, we design and deliver AV infrastructure that performs reliably in demanding environments.</p>
            </motion.div>
            <div className={styles.capGrid}>
              {capabilities.map((cap, i) => (
                <motion.div key={cap.title} className={styles.capCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }} whileHover={{ y: -4 }}>
                  <div className={styles.capIcon}>
                    {cap.icon === "tv"       && <TvMinimal size={26} />}
                    {cap.icon === "monitor"  && <Monitor size={26} />}
                    {cap.icon === "video"    && <Video size={26} />}
                    {cap.icon === "mic"      && <Mic2 size={26} />}
                    {cap.icon === "wifi"     && <Wifi size={26} />}
                    {cap.icon === "settings" && <Settings size={26} />}
                  </div>
                  <h3 className={styles.capTitle}>{cap.title}</h3>
                  <p className={styles.capDesc}>{cap.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Featured Projects ── */}
        <section className={styles.sectionDark}>
          <div className={styles.inner}>
            <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={styles.eyebrowLight}>Track Record</p>
              <h2 className={styles.headingLight}>Featured Deployments</h2>
              <p className={styles.subTextLight}>Selected projects delivered across Nigeria, Ghana, and West Africa.</p>
            </motion.div>
            <div className={styles.projectsGrid}>
              {featuredProjects.map((p, i) => (
                <motion.div key={p.client} className={styles.projectCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}>
                  <span className={styles.projectCategory}>{t[p.categoryKey]}</span>
                  <h3 className={styles.projectSolution}>{t[p.solutionKey]}</h3>
                  <p className={styles.projectClient}>{p.client}</p>
                  <p className={styles.projectOutcome}>{t[p.outcomeKey]}</p>
                </motion.div>
              ))}
            </div>
            <motion.div className={styles.projectsCta} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Link to="/case-studies" className={styles.ctaOutline}>
                View All Case Studies <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Our Process ── */}
        <section className={styles.section}>
          <SectionBlobs />
          <div className={styles.inner}>
            <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={styles.eyebrowBlue}>How We Work</p>
              <h2 className={styles.heading}>Our Delivery Process</h2>
              <p className={styles.subText}>A structured, transparent process from first conversation to long-term support.</p>
            </motion.div>
            <div className={styles.processGrid}>
              {process.map((step, i) => (
                <motion.div key={step.num} className={styles.processStep} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
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
              <p className={styles.subText}>We work exclusively with leading AV manufacturers — sourced through authorised distribution channels with full warranty and manufacturer support.</p>
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
              <h2 className={styles.heading}>Request an AV Proposal</h2>
              <p className={styles.subText}>Tell us about your project and we'll send you a detailed proposal within 24 hours.</p>
            </motion.div>
            {submitted ? (
              <div className={styles.success}>
                <Send size={32} />
                <h3>Enquiry Submitted</h3>
                <p>Our AV team will review your requirements and send you a detailed proposal within 24 hours.</p>
              </div>
            ) : (
              <motion.form className={styles.form} onSubmit={handleSubmit} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label className={styles.label}>Full Name</label>
                    <input required className={styles.input} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Company / Organisation</label>
                    <input required className={styles.input} value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label className={styles.label}>Email Address</label>
                    <input required type="email" className={styles.input} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Phone Number</label>
                    <input className={styles.input} value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                  </div>
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Type of AV Solution</label>
                  <select required className={styles.input} value={form.useCase} onChange={e => setForm({ ...form, useCase: e.target.value })}>
                    <option value="">Select a solution type</option>
                    <option>Videowall / NOC Command Centre</option>
                    <option>Digital Signage & Content Management</option>
                    <option>Video Conferencing & Collaboration</option>
                    <option>Audio & Sound System</option>
                    <option>AV over IP / Signal Distribution</option>
                    <option>Maintenance & Support Contract</option>
                    <option>Other / Not Sure</option>
                  </select>
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Project Details</label>
                  <textarea rows="4" className={styles.textarea} value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} placeholder="Describe your space, number of screens, timeline, location, and any specific requirements…" />
                </div>
                <Captcha onChange={setCaptchaToken} />
                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={!captchaToken}
                  style={{ opacity: captchaToken ? 1 : 0.5, cursor: captchaToken ? 'pointer' : 'not-allowed' }}
                >
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
