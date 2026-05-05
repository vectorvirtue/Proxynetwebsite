import { useState } from "react"
import SEO from "../components/SEO"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ChevronRight, Send, TvMinimal, Volume2, Monitor, Layers } from "lucide-react"
import Captcha from '../components/Captcha'
import { useLang } from '../context/LanguageContext'
import styles from "./Rentals.module.css"

const equipment = [
  { icon: "tv", name: "Videowalls", specs: "Modular LED panels, 2x2 to 6x4 configurations, indoor/outdoor", useCases: "Conferences, product launches, exhibitions, concerts" },
  { icon: "monitor", name: "Single Displays", specs: "43 to 98 inch commercial displays, 4K resolution, portrait/landscape", useCases: "Presentations, wayfinding, brand activations, retail" },
  { icon: "layers", name: "Touch Screens", specs: "55 to 86 inch interactive touch displays, multi-touch, Windows/Android", useCases: "Interactive kiosks, product demos, training sessions" },
  { icon: "volume", name: "Audio Systems", specs: "Line arrays, PA systems, wireless microphones, mixers", useCases: "Corporate events, outdoor activations, conferences" },
]

const steps = [
  { num: "01", title: "Enquire", desc: "Tell us about your event, date, location, audience size, and equipment needed." },
  { num: "02", title: "We Configure", desc: "Our team designs the optimal AV setup for your event and sends you a detailed proposal." },
  { num: "03", title: "We Deploy & Support", desc: "We deliver, install, and operate the equipment on-site. We stay until the event ends." },
]

export default function Rentals() {
  const { t } = useLang()
  const [submitted, setSubmitted] = useState(false)
  const [captchaToken, setCaptchaToken] = useState(null)
  const [form, setForm] = useState({ name: "", company: "", date: "", location: "", equipment: "", notes: "" })


  const handleSubmit = (e) => { e.preventDefault(); if (!captchaToken) return; setSubmitted(true) }

  return (
    <>
      <SEO
        title="AV Equipment Rentals Ã¢â‚¬â€ World-Class AV for Your Events"
        description="Rent professional AV equipment for events across Nigeria and West Africa. Videowalls, displays, touch screens, audio systems. Delivered and operated by Proxynet."
        canonical="/rentals"
      />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroOverlay} />
          <div className={styles.heroInner}>
            <motion.nav className={styles.breadcrumb} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <Link to="/" className={styles.crumb}>Home</Link>
              <ChevronRight size={14} className={styles.sep} />
              <Link to="/solutions" className={styles.crumb}>Solutions</Link>
              <ChevronRight size={14} className={styles.sep} />
              <span className={styles.crumbActive}>Rentals</span>
            </motion.nav>
            <motion.h1 className={styles.heroTitle} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              World-Class AV Equipment for Your Events
            </motion.h1>
            <motion.p className={styles.heroSub} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              From intimate boardroom setups to large-scale outdoor events, we supply, install, and operate professional AV equipment across Nigeria and West Africa.
            </motion.p>
            <motion.div className={styles.heroCtas} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <a href="#enquire" className={styles.primary}>{t.requestARental}</a>
              <a href="#equipment" className={styles.secondary}>{t.viewEquipment}</a>
            </motion.div>
          </div>
        </section>

        <section id="equipment" className={styles.section}>
          <div className={styles.inner}>
            <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={styles.eyebrow}>Equipment Catalogue</p>
              <h2 className={styles.heading}>What We Offer</h2>
            </motion.div>
            <div className={styles.equipGrid}>
              {equipment.map((e, i) => (
                <motion.div key={e.name} className={styles.equipCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} whileHover={{ y: -4 }}>
                  <div className={styles.equipIcon}>
                    {e.icon === "tv" && <TvMinimal size={28} />}
                    {e.icon === "monitor" && <Monitor size={28} />}
                    {e.icon === "layers" && <Layers size={28} />}
                    {e.icon === "volume" && <Volume2 size={28} />}
                  </div>
                  <h3 className={styles.equipName}>{e.name}</h3>
                  <p className={styles.equipSpecs}><strong>Specs:</strong> {e.specs}</p>
                  <p className={styles.equipUse}><strong>Use Cases:</strong> {e.useCases}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.sectionDark}>
          <div className={styles.inner}>
            <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={styles.eyebrowLight}>Event Gallery</p>
              <h2 className={styles.headingLight}>Past Deployments</h2>
              <p className={styles.galleryNote}>Photos coming soon Ã¢â‚¬â€ check back after our next event.</p>
            </motion.div>
            <div className={styles.galleryGrid}>
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className={styles.galleryPlaceholder}>
                  <TvMinimal size={32} className={styles.galleryIcon} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.sectionDark}>
          <div className={styles.inner}>
            <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={styles.eyebrowLight}>How It Works</p>
              <h2 className={styles.headingLight}>Simple. Fast. Professional.</h2>
            </motion.div>
            <div className={styles.stepsGrid}>
              {steps.map((s, i) => (
                <motion.div key={s.num} className={styles.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                  <span className={styles.stepNum}>{s.num}</span>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <p className={styles.stepDesc}>{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="enquire" className={styles.section}>
          <div className={styles.inner}>
            <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={styles.eyebrow}>Rental Enquiry</p>
              <h2 className={styles.heading}>Request a Rental</h2>
              <p className={styles.subText}>Fill out the form and our operations team will get back to you within 4 hours.</p>
            </motion.div>
            {submitted ? (
              <div className={styles.success}><Send size={32} /><h3>Enquiry Submitted</h3><p>We will be in touch within 4 hours to discuss your requirements.</p></div>
            ) : (
              <motion.form className={styles.form} onSubmit={handleSubmit} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
                <div className={styles.formRow}>
                  <div className={styles.field}><label className={styles.label}>Full Name</label><input required className={styles.input} value={form.name} onChange={e => setForm({...form, name: e.target.value})} /></div>
                  <div className={styles.field}><label className={styles.label}>Company</label><input required className={styles.input} value={form.company} onChange={e => setForm({...form, company: e.target.value})} /></div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.field}><label className={styles.label}>Event Date</label><input type="date" required className={styles.input} value={form.date} onChange={e => setForm({...form, date: e.target.value})} /></div>
                  <div className={styles.field}><label className={styles.label}>Event Location</label><input required className={styles.input} value={form.location} onChange={e => setForm({...form, location: e.target.value})} /></div>
                </div>
                <div className={styles.field}><label className={styles.label}>Equipment Needed</label><input required className={styles.input} placeholder="e.g. 2x2 videowall, PA system, 2x touch screens" value={form.equipment} onChange={e => setForm({...form, equipment: e.target.value})} /></div>
                <div className={styles.field}><label className={styles.label}>Additional Notes</label><textarea rows="4" className={styles.textarea} value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} /></div>
                <Captcha onChange={setCaptchaToken} />
                <button type="submit" className={styles.submitBtn} disabled={!captchaToken} style={{ opacity: captchaToken ? 1 : 0.5, cursor: captchaToken ? 'pointer' : 'not-allowed' }}>{t.submitEnquiry} <Send size={16} /></button>
              </motion.form>
            )}
          </div>
        </section>
      </main>
    </>
  )
}