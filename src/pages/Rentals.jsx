import { useState } from "react"
import SEO from "../components/SEO"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ChevronRight, Send, TvMinimal, Volume2, Monitor, Layers } from "lucide-react"
import Captcha from '../components/Captcha'
import { useLang } from '../context/LanguageContext'
import SectionBlobs from '../components/SectionBlobs'
import lightingImage from '../assets/lighting.png'
import lightingImage2 from '../assets/lighting2.png'
import videoConferencingImage from '../assets/videoconferencing.jpg'
import mountsImage from '../assets/mounts.jpg'
import interactivePanelImage from '../assets/ifp.jpeg'
import videowallImage from '../assets/videowall.jpeg'
import ledScreensImage from '../assets/led screens.jpg'
import soundImage from '../assets/sound.jpg'
import digitalSignageImage from '../assets/digital signage.png'
import av1 from '../assets/av1.jpg'
import av2 from '../assets/av2.jpeg'
import av3 from '../assets/av3.jpg'
import av4 from '../assets/av4.jpeg'
import av5 from '../assets/av5.jpg'
import av6 from '../assets/av6.jpg'
import styles from "./Rentals.module.css"

export default function Rentals() {
  const { t } = useLang()
  const [submitted, setSubmitted] = useState(false)
  const [captchaToken, setCaptchaToken] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", date: "", location: "", equipment: "", notes: "" })

  const equipment = [
    { image: lightingImage, nameKey: "rentalsEquip5Name" },
    { image: lightingImage2, nameKey: "rentalsEquip6Name" },
    { image: videoConferencingImage, nameKey: "rentalsEquip7Name" },
    { image: mountsImage, nameKey: "rentalsEquip8Name" },
    { image: interactivePanelImage, nameKey: "rentalsEquip9Name" },
    { image: videowallImage, nameKey: "rentalsEquip1Name" },
    { image: ledScreensImage, nameKey: "rentalsEquip10Name" },
    { image: soundImage, nameKey: "rentalsEquip4Name" },
    { image: digitalSignageImage, nameKey: "rentalsEquip11Name" },
  ]

  const steps = [
    { num: "01", titleKey: "rentalsStep1Title", descKey: "rentalsStep1Desc" },
    { num: "02", titleKey: "rentalsStep2Title", descKey: "rentalsStep2Desc" },
    { num: "03", titleKey: "rentalsStep3Title", descKey: "rentalsStep3Desc" },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!captchaToken) return

    const apiKey = import.meta.env.VITE_SUPPORT_WEBHOOK_API_KEY
    if (!apiKey) {
      setSubmitError("Unable to submit your enquiry right now. Please try again later.")
      return
    }

    setSubmitting(true)
    setSubmitError("")
    try {
      const response = await fetch("https://crm.com/webhooks/website-ticket", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Website-Api-Key": apiKey,
        },
        body: JSON.stringify({
          full_name: form.name,
          email: form.email,
          phone: form.phone,
          site_location: form.location,
          preferred_date: form.date,
          issue_description: `Company: ${form.company}\nEquipment needed: ${form.equipment}${form.notes ? `\nAdditional notes: ${form.notes}` : ""}`,
          priority: "medium",
        }),
      })

      if (!response.ok) throw new Error(`Webhook request failed with ${response.status}`)
      setSubmitted(true)
    } catch {
      setSubmitError("We couldn't submit your enquiry. Please try again or contact us directly.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <SEO
        title="AV Equipment Rentals | World-Class AV for Your Events"
        description="Rent professional AV equipment for events across Nigeria and West Africa. Videowalls, displays, touch screens, audio systems. Delivered and operated by Proxynet."
        canonical="/rentals"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'AV Equipment Rentals',
          description: 'Professional AV equipment rental for events across Nigeria and West Africa — videowalls, displays, touch screens, and audio systems.',
          provider: { '@type': 'Organization', name: 'Proxynet Group', url: 'https://www.proxynetgroup.com' },
          areaServed: { '@type': 'Place', name: 'West Africa' },
          serviceType: 'AV Equipment Rental',
          url: 'https://www.proxynetgroup.com/rentals',
        }}
      />
      <main>
        <section className={`${styles.hero} heroScene`}>
          <SectionBlobs variant="dark" />
          <div className={styles.heroOverlay} />
          <div className={styles.heroInner}>
            <motion.nav className={styles.breadcrumb} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <Link to="/" className={styles.crumb}>{t.home}</Link>
              <ChevronRight size={14} className={styles.sep} />
              <Link to="/solutions" className={styles.crumb}>{t.solutions}</Link>
              <ChevronRight size={14} className={styles.sep} />
              <span className={styles.crumbActive}>{t.rentals}</span>
            </motion.nav>
            <motion.h1 className={styles.heroTitle} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              {t.rentalsHeroTitle}
            </motion.h1>
            <motion.p className={styles.heroSub} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              {t.rentalsHeroSub}
            </motion.p>
            <motion.div className={styles.heroCtas} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <a href="#enquire" className={styles.primary}>{t.requestARental}</a>
              <a href="#equipment" className={styles.secondary}>{t.viewEquipment}</a>
            </motion.div>
          </div>
        </section>

        <section id="equipment" className={styles.section}>
          <div className={styles.inner}>
          <SectionBlobs />
            <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={styles.eyebrow}>{t.rentalsEquipEyebrow}</p>
              <h2 className={styles.heading}>{t.rentalsEquipHeading}</h2>
            </motion.div>
            <div className={styles.equipGrid}>
              {equipment.map((e, i) => (
                <motion.div key={e.nameKey} className={styles.equipCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} whileHover={{ y: -4 }}>
                  <div className={styles.equipVisual}>
                    {e.image ? <img src={e.image} alt={t[e.nameKey]} className={styles.equipImage} /> : (
                      <div className={styles.equipIcon}>
                        {e.icon === "monitor" && <Monitor size={42} />}
                        {e.icon === "layers" && <Layers size={42} />}
                        {e.icon === "volume" && <Volume2 size={42} />}
                      </div>
                    )}
                  </div>
                  <h3 className={styles.equipName}>{t[e.nameKey]}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.sectionDark}>
          <div className={styles.inner}>
          <SectionBlobs />
            <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={styles.eyebrowLight}>{t.rentalsGalleryEyebrow}</p>
              <h2 className={styles.headingLight}>{t.rentalsGalleryHeading}</h2>
            
            </motion.div>
            <div className={styles.galleryGrid}>
              {[av1, av2, av3, av4, av5, av6].map((image) => (
                <div className={styles.galleryItem}>
                  <img src={image} alt="AV rental equipment" className={styles.galleryImage} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.sectionDark}>
          <div className={styles.inner}>
          <SectionBlobs />
            <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={styles.eyebrowLight}>{t.rentalsHowEyebrow}</p>
              <h2 className={styles.headingLight}>{t.rentalsHowHeading}</h2>
            </motion.div>
            <div className={styles.stepsGrid}>
              {steps.map((s, i) => (
                <motion.div key={s.num} className={styles.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                  <span className={styles.stepNum}>{s.num}</span>
                  <h3 className={styles.stepTitle}>{t[s.titleKey]}</h3>
                  <p className={styles.stepDesc}>{t[s.descKey]}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="enquire" className={styles.section}>
          <div className={styles.inner}>
          <SectionBlobs />
            <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={styles.eyebrow}>{t.rentalsFormEyebrow}</p>
              <h2 className={styles.heading}>{t.rentalsFormHeading}</h2>
              <p className={styles.subText}>{t.rentalsFormSub}</p>
            </motion.div>
            {submitted ? (
              <div className={styles.success}><Send size={32} /><h3>{t.rentalsSuccessTitle}</h3><p>{t.rentalsSuccessMsg}</p></div>
            ) : (
              <motion.form className={styles.form} onSubmit={handleSubmit} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
                <div className={styles.formRow}>
                  <div className={styles.field}><label className={styles.label}>{t.rentalsFieldName}</label><input required className={styles.input} value={form.name} onChange={e => setForm({...form, name: e.target.value})} /></div>
                  <div className={styles.field}><label className={styles.label}>{t.rentalsFieldCompany}</label><input required className={styles.input} value={form.company} onChange={e => setForm({...form, company: e.target.value})} /></div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.field}><label className={styles.label}>Email</label><input type="email" required className={styles.input} value={form.email} onChange={e => setForm({...form, email: e.target.value})} /></div>
                  <div className={styles.field}><label className={styles.label}>Phone</label><input type="tel" required className={styles.input} value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} /></div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.field}><label className={styles.label}>{t.rentalsFieldDate}</label><input type="date" required className={styles.input} value={form.date} onChange={e => setForm({...form, date: e.target.value})} /></div>
                  <div className={styles.field}><label className={styles.label}>{t.rentalsFieldLocation}</label><input required className={styles.input} value={form.location} onChange={e => setForm({...form, location: e.target.value})} /></div>
                </div>
                <div className={styles.field}><label className={styles.label}>{t.rentalsFieldEquipment}</label><input required className={styles.input} placeholder={t.rentalsFieldEquipmentPlaceholder} value={form.equipment} onChange={e => setForm({...form, equipment: e.target.value})} /></div>
                <div className={styles.field}><label className={styles.label}>{t.rentalsFieldNotes}</label><textarea rows="4" className={styles.textarea} value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} /></div>
                <Captcha onChange={setCaptchaToken} />
                {submitError && <p role="alert" className={styles.error}>{submitError}</p>}
                <button type="submit" className={styles.submitBtn} disabled={!captchaToken || submitting} style={{ opacity: captchaToken && !submitting ? 1 : 0.5, cursor: captchaToken && !submitting ? 'pointer' : 'not-allowed' }}>{submitting ? "Submitting..." : t.submitEnquiry} {!submitting && <Send size={16} />}</button>
              </motion.form>
            )}
          </div>
        </section>
      </main>
    </>
  )
}