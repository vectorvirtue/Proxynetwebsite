import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ChevronRight, Send, Monitor, Building2, ShoppingCart, Megaphone, MapPin } from "lucide-react"
import Captcha from '../components/Captcha'
import { useLang } from '../context/LanguageContext'
import SectionBlobs from '../components/SectionBlobs'
import HeroBlobs from '../components/HeroBlobs'
import billboardImg from '../assets/billboard.png'
import styles from "./BillboardSolutions.module.css"

const useCases = [
  { icon: "shopping", nameKey: "bbRetailName", descKey: "bbRetailDesc" },
  { icon: "building", nameKey: "bbCorporateName", descKey: "bbCorporateDesc" },
  { icon: "megaphone", nameKey: "bbEventsName", descKey: "bbEventsDesc" },
  { icon: "monitor", nameKey: "bbOutdoorName", descKey: "bbOutdoorDesc" },
]

const specs = [
  { labelKey: "bbSpecIndoorPitchLabel", valueKey: "bbSpecIndoorPitchValue" },
  { labelKey: "bbSpecOutdoorPitchLabel", valueKey: "bbSpecOutdoorPitchValue" },
  { labelKey: "bbSpecResolutionLabel", valueKey: "bbSpecResolutionValue" },
  { labelKey: "bbSpecBrightnessIndoorLabel", valueKey: "bbSpecBrightnessIndoorValue" },
  { labelKey: "bbSpecBrightnessOutdoorLabel", valueKey: "bbSpecBrightnessOutdoorValue" },
  { labelKey: "bbSpecCMSLabel", valueKey: "bbSpecCMSValue" },
  { labelKey: "bbSpecInstallLabel", valueKey: "bbSpecInstallValue" },
  { labelKey: "bbSpecWarrantyLabel", valueKey: "bbSpecWarrantyValue" },
]

export default function BillboardSolutions() {
  const { t } = useLang()
  const [submitted, setSubmitted] = useState(false)
  const [captchaToken, setCaptchaToken] = useState(null)
  const [form, setForm] = useState({ name: "", company: "", location: "", useCase: "", notes: "" })

  const handleSubmit = (e) => { e.preventDefault(); if (!captchaToken) return; setSubmitted(true) }

  return (
    <main>
      <section className={`${styles.hero} heroScene`}>
        <HeroBlobs />
          <div className={styles.heroOverlay} />
        <div className={styles.heroInner}>
          <motion.nav className={styles.breadcrumb} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <Link to="/" className={styles.crumb}>{t.home}</Link>
            <ChevronRight size={14} className={styles.sep} />
            <Link to="/solutions" className={styles.crumb}>{t.solutions}</Link>
            <ChevronRight size={14} className={styles.sep} />
            <span className={styles.crumbActive}>{t.billboardSolutions}</span>
          </motion.nav>
          <motion.p className={styles.eyebrow} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}>{t.bbEyebrow}</motion.p>
          <motion.h1 className={styles.heroTitle} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            {t.bbHeroTitle}
          </motion.h1>
          <motion.p className={styles.heroSub} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            {t.bbHeroSub}
          </motion.p>
          <motion.div className={styles.heroCtas} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <a href="#enquire" className={styles.primary}>{t.requestAQuote}</a>
            <a href="#usecases" className={styles.secondary}>{t.viewCaseStudies}</a>
          </motion.div>
        </div>
      </section>

      <section id="usecases" className={styles.section}>
        <div className={styles.inner}>
          <SectionBlobs />
          <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className={styles.eyebrowBlue}>{t.bbUseCasesEyebrow}</p>
            <h2 className={styles.heading}>{t.bbUseCasesHeading}</h2>
          </motion.div>
          <div className={styles.useCaseGrid}>
            {useCases.map((u, i) => (
              <motion.div key={u.nameKey} className={styles.useCaseCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} whileHover={{ y: -4 }}>
                <div className={styles.useCaseIcon}>
                  {u.icon === "shopping" && <ShoppingCart size={26} />}
                  {u.icon === "building" && <Building2 size={26} />}
                  {u.icon === "megaphone" && <Megaphone size={26} />}
                  {u.icon === "monitor" && <Monitor size={26} />}
                </div>
                <h3 className={styles.useCaseName}>{t[u.nameKey]}</h3>
                <p className={styles.useCaseDesc}>{t[u.descKey]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outdoor Advertising Network */}
      <section className={styles.section}>
        <SectionBlobs />
        <div className={styles.inner}>
          <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className={styles.eyebrowBlue}>{t.bbOutdoorNetworkEyebrow}</p>
            <h2 className={styles.heading}>{t.bbOutdoorNetworkHeading}</h2>
            <p className={styles.subText}>{t.bbOutdoorNetworkSub}</p>
          </motion.div>
          <div className={styles.outdoorGrid}>
            <motion.div className={styles.outdoorImgWrap} initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <img src={billboardImg} alt="Proxynet outdoor billboard" className={styles.outdoorImg} />
            </motion.div>
            <motion.div className={styles.outdoorLocations} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              {[
                { cityKey: 'bbLocLagosCity', detailKey: 'bbLocLagosDetail', descKey: 'bbLocLagosDesc' },
                { cityKey: 'bbLocEnuguCity', detailKey: 'bbLocEnuguDetail', descKey: 'bbLocEnuguDesc' },
                { cityKey: 'bbLocPHCity', detailKey: 'bbLocPHDetail', descKey: 'bbLocPHDesc' },
              ].map((loc, i) => (
                <motion.div key={loc.cityKey} className={styles.locationCard} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                  <div className={styles.locationIcon}><MapPin size={18} /></div>
                  <div>
                    <p className={styles.locationCity}>{t[loc.cityKey]} <span className={styles.locationDetail}>— {t[loc.detailKey]}</span></p>
                    <p className={styles.locationDesc}>{t[loc.descKey]}</p>
                  </div>
                </motion.div>
              ))}
              <a href="#enquire" className={styles.outdoorCta}>{t.bbAdvertiseCta}</a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.sectionDark}>
        <div className={styles.inner}>
          <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className={styles.eyebrowLight}>{t.bbSpecsEyebrow}</p>
            <h2 className={styles.headingLight}>{t.bbSpecsHeading}</h2>
          </motion.div>
          <div className={styles.specsGrid}>
            {specs.map((s, i) => (
              <motion.div key={s.labelKey} className={styles.specItem} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }}>
                <p className={styles.specLabel}>{t[s.labelKey]}</p>
                <p className={styles.specValue}>{t[s.valueKey]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="enquire" className={styles.section}>
        <SectionBlobs />
        <div className={styles.inner}>
          <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className={styles.eyebrowBlue}>{t.bbFormEyebrow}</p>
            <h2 className={styles.heading}>{t.bbFormHeading}</h2>
            <p className={styles.subText}>{t.bbFormSub}</p>
          </motion.div>
          {submitted ? (
            <div className={styles.success}><Send size={32} /><h3>{t.bbSuccessTitle}</h3><p>{t.bbSuccessMsg}</p></div>
          ) : (
            <motion.form className={styles.form} onSubmit={handleSubmit} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
              <div className={styles.formRow}>
                <div className={styles.field}><label className={styles.label}>{t.bbFieldName}</label><input required className={styles.input} value={form.name} onChange={e => setForm({...form, name: e.target.value})} /></div>
                <div className={styles.field}><label className={styles.label}>{t.bbFieldCompany}</label><input required className={styles.input} value={form.company} onChange={e => setForm({...form, company: e.target.value})} /></div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.field}><label className={styles.label}>{t.bbFieldLocation}</label><input required className={styles.input} value={form.location} onChange={e => setForm({...form, location: e.target.value})} /></div>
                <div className={styles.field}><label className={styles.label}>{t.bbFieldUseCase}</label>
                  <select required className={styles.input} value={form.useCase} onChange={e => setForm({...form, useCase: e.target.value})}>
                    <option value="">{t.bbSelectUseCase}</option>
                    <option>{t.bbRetailName}</option>
                    <option>{t.bbSelectCorporateLobby}</option>
                    <option>{t.bbSelectEventActivation}</option>
                    <option>{t.bbOutdoorName}</option>
                    <option>{t.bbSelectOther}</option>
                  </select>
                </div>
              </div>
              <div className={styles.field}><label className={styles.label}>{t.bbFieldProjectDetails}</label><textarea rows="4" className={styles.textarea} value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} placeholder={t.bbProjectDetailsPlaceholder} /></div>
              <Captcha onChange={setCaptchaToken} />
              <button type="submit" className={styles.submitBtn} disabled={!captchaToken} style={{ opacity: captchaToken ? 1 : 0.5, cursor: captchaToken ? 'pointer' : 'not-allowed' }}>{t.submitEnquiry} <Send size={16} /></button>
            </motion.form>
          )}
        </div>
      </section>
    </main>
  )
}
