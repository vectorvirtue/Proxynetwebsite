import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ChevronRight, Send, GraduationCap, Monitor, Users, BookOpen, Wifi, Cpu, Code, Layout, PenTool, Brain, BarChart2, BarChart } from "lucide-react"
import SEO from "../components/SEO"
import Captcha from "../components/Captcha"
import { useLang } from "../context/LanguageContext"
import edtech1 from "../assets/edtech.jpg"
import edtech2 from "../assets/edtech2.jpg"
import edtech3 from "../assets/edtech3.jpg"
import edtech4 from "../assets/edtech4.jpg"
import edtech5 from "../assets/edtech5.jpg"
import edtech5b from "../assets/edtech5.jpeg"
import styles from "./EdTech.module.css"

const programmes = [
  { icon: "code", name: "Web Development", duration: "4-12 weeks", audience: "Students & Young Professionals", format: "Classroom + hands-on", desc: "Full-stack web development covering HTML, CSS, JavaScript, and modern frameworks. Students build real projects from day one." },
  { icon: "layout", name: "Web Design", duration: "2-6 weeks", audience: "Students & Creatives", format: "Classroom + hands-on", desc: "UI/UX principles, wireframing, prototyping, and visual design for the web using industry-standard tools." },
  { icon: "book", name: "Digital Literacy", duration: "1-5 days", audience: "Students & Teachers", format: "Classroom + hands-on", desc: "Practical digital skills covering computer basics, internet safety, productivity tools, and navigating the digital world confidently." },
  { icon: "pen", name: "Graphics Design", duration: "2-8 weeks", audience: "Students & Creatives", format: "Classroom + hands-on", desc: "Visual communication, branding, typography, and design using professional tools. From logos to marketing materials." },
  { icon: "cpu", name: "Robotics", duration: "4-8 weeks", audience: "Primary, Secondary & Tertiary", format: "Hands-on workshop", desc: "Introduction to robotics, electronics, and programming through building and programming real robots. STEM-focused and project-based." },
  { icon: "brain", name: "Artificial Intelligence", duration: "4-12 weeks", audience: "Secondary & Tertiary", format: "Classroom + practical", desc: "Foundations of AI, machine learning concepts, and practical applications. Students explore how AI is transforming industries." },
  { icon: "wifi", name: "Internet of Things (IoT)", duration: "4-8 weeks", audience: "Secondary & Tertiary", format: "Hands-on workshop", desc: "Connecting devices, sensors, and systems. Students build IoT projects that solve real-world problems using hardware and code." },
  { icon: "chart", name: "Data Science", duration: "6-12 weeks", audience: "Tertiary & Professionals", format: "Classroom + practical", desc: "Data collection, cleaning, analysis, and visualisation. Covers Python, statistics, and real-world datasets from African markets." },
  { icon: "bar", name: "Data Analytics", duration: "4-8 weeks", audience: "Students & Professionals", format: "Classroom + practical", desc: "Turning raw data into actionable insights using tools like Excel, Power BI, and SQL. Practical, business-focused curriculum." },
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
        title="EdTech & Smart Schools — Technology for Education"
        description="Proxynet EdTech delivers smart classroom solutions, school network infrastructure, digital literacy training, and ICT programmes across West Africa."
        canonical="/solutions/edtech"
      />
      <main>
        <section className={`${styles.hero} heroScene`}>
          <div className={styles.heroOverlay} />
          <div className={styles.heroInner}>
            <motion.nav className={styles.breadcrumb} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <Link to="/" className={styles.crumb}>{t.home}</Link>
              <ChevronRight size={14} className={styles.sep} />
              <Link to="/solutions" className={styles.crumb}>{t.solutions}</Link>
              <ChevronRight size={14} className={styles.sep} />
              <span className={styles.crumbActive}>{t.edtech}</span>
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
          <SectionBlobs />
            <motion.div className={styles.overviewGrid} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className={styles.overviewLeft}>
                <p className={styles.eyebrowBlue}>What We Do</p>
                <h2 className={styles.heading}>Smart School Solutions for Modern Education</h2>
              </div>
              <div className={styles.overviewRight}>
                <p className={styles.body}>Proxynet EdTech is the education technology division of Proxynet Group. We work with primary schools, secondary schools, universities, and government education agencies to transform learning environments through technology.</p>
                <p className={styles.body}>From installing interactive displays in classrooms to building campus-wide Wi-Fi networks and running digital literacy workshops — we provide end-to-end technology solutions designed specifically for education.</p>
                <a href="https://edtech.proxynetgroup.com" target="_blank" rel="noopener noreferrer" className={styles.extLink}>{t.visitEdTechWebsite} <ChevronRight size={16} /></a>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="programmes" className={styles.sectionAlt}>
          <div className={styles.inner}>
          <SectionBlobs />
            <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={styles.eyebrowBlue}>Training Programmes</p>
              <h2 className={styles.heading}>What We Offer</h2>
            </motion.div>
            <div className={styles.progGrid}>
              {programmes.map((p, i) => (
                <motion.div key={p.name} className={styles.progCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }} whileHover={{ y: -4 }}>
                  <div className={styles.progIcon}>
                    {p.icon === "code"       && <Code size={24} />}
                    {p.icon === "layout"     && <Layout size={24} />}
                    {p.icon === "book"       && <BookOpen size={24} />}
                    {p.icon === "pen"        && <PenTool size={24} />}
                    {p.icon === "cpu"        && <Cpu size={24} />}
                    {p.icon === "brain"      && <Brain size={24} />}
                    {p.icon === "wifi"       && <Wifi size={24} />}
                    {p.icon === "chart"      && <BarChart2 size={24} />}
                    {p.icon === "bar"        && <BarChart size={24} />}
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
          <SectionBlobs />
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
          <SectionBlobs />
            <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={styles.eyebrowBlue}>Events Gallery</p>
              <h2 className={styles.heading}>EdTech in Action</h2>
            </motion.div>
            <div className={styles.galleryGrid}>
              {/* Row 1 — three equal images */}
              {[edtech1, edtech2, edtech3].map((src, i) => (
                <motion.div
                  key={i}
                  className={styles.galleryItem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <img src={src} alt={`Proxynet EdTech — photo ${i + 1}`} className={styles.galleryImg} loading="lazy" />
                </motion.div>
              ))}
              {/* Row 2 — side image, tall centrepiece, side image */}
              <motion.div className={styles.galleryItem} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.21 }}>
                <img src={edtech4} alt="Proxynet EdTech — photo 4" className={styles.galleryImg} loading="lazy" />
              </motion.div>
              <motion.div className={styles.galleryItemFeatured} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.28 }}>
                <img src={edtech5b} alt="Proxynet EdTech — featured photo" className={styles.galleryImgFull} loading="lazy" />
              </motion.div>
              <motion.div className={styles.galleryItem} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.35 }}>
                <img src={edtech5} alt="Proxynet EdTech — photo 5" className={styles.galleryImg} loading="lazy" />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="partner" className={styles.sectionAlt}>
          <div className={styles.inner}>
          <SectionBlobs />
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