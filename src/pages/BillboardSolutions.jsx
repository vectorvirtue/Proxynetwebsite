import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ChevronRight, Send, Monitor, Building2, ShoppingCart, Megaphone } from "lucide-react"
import Captcha from '../components/Captcha'
import styles from "./BillboardSolutions.module.css"

const useCases = [
  { icon: "shopping", name: "Retail", desc: "In-store digital signage, window displays, and promotional screens that drive sales." },
  { icon: "building", name: "Corporate Lobbies", desc: "Impressive LED walls and display systems for reception areas and boardrooms." },
  { icon: "megaphone", name: "Events & Activations", desc: "High-impact LED walls and outdoor screens for events, concerts, and brand activations." },
  { icon: "monitor", name: "Outdoor Advertising", desc: "Weatherproof outdoor LED billboards for roadside and high-traffic advertising." },
]

const specs = [
  { label: "Indoor LED Pitch", value: "P1.5 to P4 pixel pitch" },
  { label: "Outdoor LED Pitch", value: "P6 to P16 pixel pitch" },
  { label: "Resolution", value: "Up to 4K UHD" },
  { label: "Brightness (Indoor)", value: "800 to 1500 nits" },
  { label: "Brightness (Outdoor)", value: "5000 to 10000 nits" },
  { label: "Content Management", value: "Cloud-based CMS, remote scheduling" },
  { label: "Installation", value: "Wall mount, floor stand, ceiling, freestanding" },
  { label: "Warranty", value: "2 years parts and labour" },
]

export default function BillboardSolutions() {
  const [submitted, setSubmitted] = useState(false)
  const [captchaToken, setCaptchaToken] = useState(null)
  const [form, setForm] = useState({ name: "", company: "", location: "", useCase: "", notes: "" })


  const handleSubmit = (e) => { e.preventDefault(); if (!captchaToken) return; setSubmitted(true) }

  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroInner}>
          <motion.nav className={styles.breadcrumb} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <Link to="/" className={styles.crumb}>Home</Link>
            <ChevronRight size={14} className={styles.sep} />
            <Link to="/solutions" className={styles.crumb}>Solutions</Link>
            <ChevronRight size={14} className={styles.sep} />
            <span className={styles.crumbActive}>Billboard Solutions</span>
          </motion.nav>
          <motion.p className={styles.eyebrow} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}>ProBoard by Proxynet</motion.p>
          <motion.h1 className={styles.heroTitle} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Make Your Message Unmissable
          </motion.h1>
          <motion.p className={styles.heroSub} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            Indoor and outdoor digital signage, LED walls, and billboard deployments that command attention and deliver results.
          </motion.p>
          <motion.div className={styles.heroCtas} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <a href="#enquire" className={styles.primary}>Request a Quote</a>
            <a href="#usecases" className={styles.secondary}>View Case Studies</a>
          </motion.div>
        </div>
      </section>

      <section id="usecases" className={styles.section}>
        <div className={styles.inner}>
          <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className={styles.eyebrowBlue}>Use Cases</p>
            <h2 className={styles.heading}>Where We Deploy</h2>
          </motion.div>
          <div className={styles.useCaseGrid}>
            {useCases.map((u, i) => (
              <motion.div key={u.name} className={styles.useCaseCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} whileHover={{ y: -4 }}>
                <div className={styles.useCaseIcon}>
                  {u.icon === "shopping" && <ShoppingCart size={26} />}
                  {u.icon === "building" && <Building2 size={26} />}
                  {u.icon === "megaphone" && <Megaphone size={26} />}
                  {u.icon === "monitor" && <Monitor size={26} />}
                </div>
                <h3 className={styles.useCaseName}>{u.name}</h3>
                <p className={styles.useCaseDesc}>{u.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionDark}>
        <div className={styles.inner}>
          <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className={styles.eyebrowLight}>Technical Specifications</p>
            <h2 className={styles.headingLight}>Built to Perform</h2>
          </motion.div>
          <div className={styles.specsGrid}>
            {specs.map((s, i) => (
              <motion.div key={s.label} className={styles.specItem} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }}>
                <p className={styles.specLabel}>{s.label}</p>
                <p className={styles.specValue}>{s.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="enquire" className={styles.section}>
        <div className={styles.inner}>
          <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className={styles.eyebrowBlue}>Get a Quote</p>
            <h2 className={styles.heading}>Request a Quote</h2>
            <p className={styles.subText}>Tell us about your project and we will send you a detailed proposal within 24 hours.</p>
          </motion.div>
          {submitted ? (
            <div className={styles.success}><Send size={32} /><h3>Quote Request Submitted</h3><p>Our sales team will send you a detailed proposal within 24 hours.</p></div>
          ) : (
            <motion.form className={styles.form} onSubmit={handleSubmit} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
              <div className={styles.formRow}>
                <div className={styles.field}><label className={styles.label}>Full Name</label><input required className={styles.input} value={form.name} onChange={e => setForm({...form, name: e.target.value})} /></div>
                <div className={styles.field}><label className={styles.label}>Company</label><input required className={styles.input} value={form.company} onChange={e => setForm({...form, company: e.target.value})} /></div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.field}><label className={styles.label}>Location</label><input required className={styles.input} value={form.location} onChange={e => setForm({...form, location: e.target.value})} /></div>
                <div className={styles.field}><label className={styles.label}>Use Case</label>
                  <select required className={styles.input} value={form.useCase} onChange={e => setForm({...form, useCase: e.target.value})}>
                    <option value="">Select a use case</option>
                    <option>Retail</option>
                    <option>Corporate Lobby</option>
                    <option>Event / Activation</option>
                    <option>Outdoor Advertising</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className={styles.field}><label className={styles.label}>Project Details</label><textarea rows="4" className={styles.textarea} value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} placeholder="Screen size, quantity, indoor/outdoor, timeline..." /></div>
              <Captcha onChange={setCaptchaToken} />
              <button type="submit" className={styles.submitBtn} disabled={!captchaToken} style={{ opacity: captchaToken ? 1 : 0.5, cursor: captchaToken ? 'pointer' : 'not-allowed' }}>Submit Request <Send size={16} /></button>
            </motion.form>
          )}
        </div>
      </section>
    </main>
  )
}