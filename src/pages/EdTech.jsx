import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ChevronRight, Send, GraduationCap, Monitor, Users, BookOpen, Wifi, Cpu } from "lucide-react"
import SEO from "../components/SEO"
import Captcha from "../components/Captcha"
import { useLang } from "../context/LanguageContext"
import styles from "./EdTech.module.css"

const programmes = [
  { icon: "monitor", name: "Smart Classroom Setup", duration: "1-2 weeks", audience: "Primary & Secondary Schools", format: "On-site installation + training", desc: "Interactive displays, projectors, and AV systems installed and configured for modern classroom learning." },
  { icon: "wifi", name: "School Network Infrastructure", duration: "1-4 weeks", audience: "Schools & Universities", format: "On-site deployment", desc: "Structured cabling, Wi-Fi networks, and internet connectivity solutions designed for educational environments." },
  { icon: "cpu", name: "Computer Lab Setup", duration: "1-2 weeks", audience: "Secondary Schools & Tertiary", format: "On-site installation", desc: "Full computer lab design, hardware supply, networking, and software configuration for ICT education." },
  { icon: "book", name: "Digital Literacy Training", duration: "1-5 days", audience: "Students & Teachers", format: "Classroom + hands-on", desc: "Practical digital skills training covering computer basics, internet safety, productivity tools, and more." },
  { icon: "users", name: "Teacher Technology Training", duration: "1-3 days", audience: "Teaching Staff", format: "Workshop", desc: "Equipping teachers with the skills to use technology effectively in the classroom â€” from interactive displays to e-learning platforms." },
  { icon: "graduation", name: "ICT Certification Programmes", duration: "4-12 weeks", audience: "Students & Young Professionals", format: "Classroom + online", desc: "Structured certification courses in networking, cybersecurity, software development, and IT support." },
]

const institutions = [
  "Lagos State University", "University of Lagos", "Covenant University",
  "Lagos State Ministry of Education", "Access Bank Academy",
  "Nigerian Educational Research and Development Council (NERDC)",
]

export default function EdTech() {
  const { t } = useLang()
  const [submitted, setSubmitted] = useState(false)
  const [captchaToken, setCaptchaToken] = useState(null)
  const [form, setForm] = useState({ name: "", institution: "", role: "", email: "", phone: "", interest: "", notes: "" })

  const handleSubmit = (e) => { e.preventDefault(); if (!captchaToken) return; setSubmitted(true) }

  return (
    <>
      <SEO
        title="EdTech & Smart Schools â€” Technology for Education"
        description="Proxynet EdTech delivers smart classroom solutions, school network infrastructure, digital literacy training, and ICT programmes across West Africa."
        canonical="/solutions/edtech"
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
              <span className={styles.crumbActive}>EdTech</span>
            </motion.nav>
            <motion.p className={styles.eyebrow} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}>Proxynet EdTech Division</motion.p>
            <motion.h1 className={styles.heroTitle} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              Empowering the Next Generation of Technology Talent
            </motion.h1>
            <motion.p className={styles.heroSub} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              We partner with schools, universities, and institutions across West Africa to deliver smart classroom solutions, digital literacy programmes, and ICT infrastructure.
            </motion.p>
            <motion.div className={styles.heroCtas} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <a href="#partner" className={styles.primary}>{t.partnerWithUs}</a>
              <a href="#programmes" className={styles.secondary}>{t.viewProgrammes}</a>
            </motion.div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.inner}>
            <motion.div className={styles.overviewGrid} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className={styles.overviewLeft}>
                <p className={styles.eyebrowBlue}>What We Do</p>
                <h2 className={styles.heading}>Smart School Solutions for Modern Education</h2>
              </div>
              <div className={styles.overviewRight}>
                <p className={styles.body}>Proxynet EdTech is the education technology division of Proxynet Group. We work with primary schools, secondary schools, universities, and government education agencies to transform learning environments through technology.</p>
                <p className={styles.body}>From installing interactive displays in classrooms to building campus-wide Wi-Fi networks and running digital literacy workshops â€” we provide end-to-end technology solutions designed specifically for education.</p>
                <a href="https://edtech.proxynetgroup.com" target="_blank" rel="noopener noreferrer" className={styles.extLink}>{t.visitEdTechWebsite} <ChevronRight size={16} /></a>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="programmes" className={styles.sectionAlt}>
          <div className={styles.inner}>
            <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={styles.eyebrowBlue}>Training Programmes</p>
              <h2 className={styles.heading}>What We Offer</h2>
            </motion.div>
            <div className={styles.progGrid}>
              {programmes.map((p, i) => (
                <motion.div key={p.name} className={styles.progCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }} whileHover={{ y: -4 }}>
                  <div className={styles.progIcon}>
                    {p.icon === "monitor" && <Monitor size={24} />}
                    {p.icon === "wifi" && <Wifi size={24} />}
                    {p.icon === "cpu" && <Cpu size={24} />}
                    {p.icon === "book" && <BookOpen size={24} />}
                    {p.icon === "users" && <Users size={24} />}
                    {p.icon === "graduation" && <GraduationCap size={24} />}
                  </div>
                  <h3 className={styles.progName}>{p.name}</h3>
                  <p className={styles.progDesc}>{p.desc}</p>
                  <div className={styles.progMeta}>
                    <span className={styles.metaTag}>{p.duration}</span>
                    <span className={styles.metaTag}>{p.format}</span>
                  </div>
                  <p className={styles.progAudience}>{p.audience}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.sectionDark}>
          <div className={styles.inner}>
            <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={styles.eyebrowLight}>Partner Institutions</p>
              <h2 className={styles.headingLight}>Schools & Institutions We Work With</h2>
            </motion.div>
            <div className={styles.instGrid}>
              {institutions.map((inst, i) => (
                <motion.div key={inst} className={styles.instCard} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.06 }}>
                  <GraduationCap size={20} className={styles.instIcon} />
                  <span>{inst}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.inner}>
            <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={styles.eyebrowBlue}>Events Gallery</p>
              <h2 className={styles.heading}>EdTech in Action</h2>
              <p className={styles.galleryNote}>Photos from our school engagements and EdTech events coming soon.</p>
            </motion.div>
            <div className={styles.galleryGrid}>
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className={styles.galleryPlaceholder}>
                  <GraduationCap size={28} className={styles.galleryIcon} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="partner" className={styles.sectionAlt}>
          <div className={styles.inner}>
            <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={styles.eyebrowBlue}>Partner With Us</p>
              <h2 className={styles.heading}>Bring EdTech to Your Institution</h2>
              <p className={styles.subText}>Fill out the form and our EdTech team will get in touch within 2 business days.</p>
            </motion.div>
            {submitted ? (
              <div className={styles.success}><Send size={32} /><h3>Enquiry Submitted</h3><p>Our EdTech team will be in touch within 2 business days.</p></div>
            ) : (
              <motion.form className={styles.form} onSubmit={handleSubmit} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
                <div className={styles.formRow}>
                  <div className={styles.field}><label className={styles.label}>Full Name</label><input required className={styles.input} value={form.name} onChange={e => setForm({...form, name: e.target.value})} /></div>
                  <div className={styles.field}><label className={styles.label}>Institution Name</label><input required className={styles.input} value={form.institution} onChange={e => setForm({...form, institution: e.target.value})} /></div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.field}><label className={styles.label}>Your Role</label><input required className={styles.input} value={form.role} onChange={e => setForm({...form, role: e.target.value})} /></div>
                  <div className={styles.field}><label className={styles.label}>Email</label><input type="email" required className={styles.input} value={form.email} onChange={e => setForm({...form, email: e.target.value})} /></div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.field}><label className={styles.label}>Phone</label><input type="tel" required className={styles.input} value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} /></div>
                  <div className={styles.field}><label className={styles.label}>Area of Interest</label>
                    <select required className={styles.input} value={form.interest} onChange={e => setForm({...form, interest: e.target.value})}>
                      <option value="">Select an area</option>
                      <option>Smart Classroom Setup</option>
                      <option>School Network Infrastructure</option>
                      <option>Computer Lab Setup</option>
                      <option>Digital Literacy Training</option>
                      <option>Teacher Technology Training</option>
                      <option>ICT Certification Programmes</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
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