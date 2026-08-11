import { useState } from "react"
import SEO from "../components/SEO"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ChevronRight, Send, TvMinimal, Volume2, Monitor, Layers } from "lucide-react"
import Captcha from '../components/Captcha'
import { useLang } from '../context/LanguageContext'
import SectionBlobs from '../components/SectionBlobs'
import styles from "./Rentals.module.css"

export default function Rentals() {
  const { t } = useLang()
  const [submitted, setSubmitted] = useState(false)
  const [captchaToken, setCaptchaToken] = useState(null)
  const [form, setForm] = useState({ name: "", company: "", date: "", location: "", equipment: "", notes: "" })

  const equipment = [
    { icon: "tv",     nameKey: "rentalsEquip1Name", specsKey: "rentalsEquip1Specs", usesKey: "rentalsEquip1Uses" },
    { icon: "monitor",nameKey: "rentalsEquip2Name", specsKey: "rentalsEquip2Specs", usesKey: "rentalsEquip2Uses" },
    { icon: "layers", nameKey: "rentalsEquip3Name", specsKey: "rentalsEquip3Specs", usesKey: "rentalsEquip3Uses" },
    { icon: "volume", nameKey: "rentalsEquip4Name", specsKey: "rentalsEquip4Specs", usesKey: "rentalsEquip4Uses" },
  ]

  const steps = [
    { num: "01", titleKey: "rentalsStep1Title", descKey: "rentalsStep1Desc" },
    { num: "02", titleKey: "rentalsStep2Title", descKey: "rentalsStep2Desc" },
    { num: "03", titleKey: "rentalsStep3Title", descKey: "rentalsStep3Desc" },
  ]

  const handleSubmit = (e) => { e.preventDefault(); if (!captchaToken) return; setSubmitted(true) }

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
                <motion.div key={e.name} className={styles.equipCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} whileHover={{ y: -4 }}>
                  <div className={styles.equipIcon}>
                    {e.icon === "tv" && <TvMinimal size={28} />}
                    {e.icon === "monitor" && <Monitor size={28} />}
                    {e.icon === "layers" && <Layers size={28} />}
                    {e.icon === "volume" && <Volume2 size={28} />}
                  </div>
                  <h3 className={styles.equipName}>{t[e.nameKey]}</h3>
                  <p className={styles.equipSpecs}><strong>{t.rentalsSpecsLabel}</strong> {t[e.specsKey]}</p>
                  <p className={styles.equipUse}><strong>{t.rentalsUseCasesLabel}</strong> {t[e.usesKey]}</p>
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
              <p className={styles.galleryNote}>{t.rentalsGalleryNote}</p>
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
                  <div className={styles.field}><label className={styles.label}>{t.rentalsFieldDate}</label><input type="date" required className={styles.input} value={form.date} onChange={e => setForm({...form, date: e.target.value})} /></div>
                  <div className={styles.field}><label className={styles.label}>{t.rentalsFieldLocation}</label><input required className={styles.input} value={form.location} onChange={e => setForm({...form, location: e.target.value})} /></div>
                </div>
                <div className={styles.field}><label className={styles.label}>{t.rentalsFieldEquipment}</label><input required className={styles.input} placeholder={t.rentalsFieldEquipmentPlaceholder} value={form.equipment} onChange={e => setForm({...form, equipment: e.target.value})} /></div>
                <div className={styles.field}><label className={styles.label}>{t.rentalsFieldNotes}</label><textarea rows="4" className={styles.textarea} value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} /></div>
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