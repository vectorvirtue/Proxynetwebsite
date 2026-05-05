import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram, MessageCircle, Send, ChevronRight, Clock } from 'lucide-react'
import SEO from '../components/SEO'
import Captcha from '../components/Captcha'
import { useLang } from '../context/LanguageContext'
import styles from './Contact.module.css'

const offices = [
  { flag: '🇳🇬', city: 'Lagos', tag: 'HQ', address: 'The Proxynet House, 5B, Adedeji Close, off Opebi Road, Ikeja, Lagos, Nigeria.', phone: '+234 703 264 7755', email: 'info@proxynetgroup.com', mapUrl: 'https://maps.google.com/?q=5B+Adedeji+Close+Opebi+Ikeja+Lagos' },
  { flag: '🇳🇬', city: 'Abuja', tag: '', address: 'House 21, Street 693, Off Road 69, Gwarimpa, Abuja, Nigeria.', phone: '+234 903 182 9347', email: 'abuja@proxynetgroup.com', mapUrl: 'https://maps.google.com/?q=Gwarimpa+Abuja+Nigeria' },
  { flag: '🇬🇭', city: 'Accra', tag: '', address: 'No 18 Nii Klu Osae Avenue, Off American House, Accra, Ghana.', phone: '+233 302 546 703', email: 'ghana@proxynetgroup.com', mapUrl: 'https://maps.google.com/?q=Nii+Klu+Osae+Avenue+Accra+Ghana' },
  { flag: '🇨🇮', city: 'Abidjan', tag: '', address: "1st floor, SIAA Building, Cocody 2 Plateaux, 7e Tranche Road, Abidjan.", phone: '+225 2722 468 434', email: 'cotedivoire@proxynetgroup.com', mapUrl: 'https://maps.google.com/?q=Cocody+2+Plateaux+Abidjan' },
  { flag: '🇦🇪', city: 'Dubai', tag: '', address: 'Building A2, Unit 101, Dubai Silicon Oasis, DDP, Dubai, UAE.', phone: '+971 505 044 932', email: 'dubai@proxynetgroup.com', mapUrl: 'https://maps.google.com/?q=Dubai+Silicon+Oasis+Dubai' },
]

const socials = [
  { icon: <Linkedin size={20} />, label: 'LinkedIn', href: 'https://www.linkedin.com/company/proxynet-communications' },
  { icon: <Facebook size={20} />, label: 'Facebook', href: 'https://www.facebook.com/proxynetcommunications/' },
  { icon: <Instagram size={20} />, label: 'Instagram', href: 'https://www.instagram.com/proxynetgroup/' },
  { icon: <MessageCircle size={20} />, label: 'WhatsApp', href: 'https://wa.me/2347032647755' },
]

export default function Contact() {
  const { t } = useLang()
  const [captchaToken, setCaptchaToken] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', type: '', message: '' })

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value })
  const handleSubmit = (e) => { e.preventDefault(); if (!captchaToken) return; setSubmitted(true) }

  const enquiryTypes = [
    t.contactTypeSales,
    t.contactTypeSupport,
    t.contactTypePartnership,
    t.contactTypeCareers,
    t.contactTypeGeneral,
  ]

  return (
    <>
      <SEO
        title={t.contactPageTitle}
        description={t.contactPageDesc}
        canonical="/contact"
      />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay} />
          <div className={styles.heroInner}>
            <motion.nav className={styles.breadcrumb} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <Link to="/" className={styles.crumb}>{t.home}</Link>
              <ChevronRight size={14} className={styles.sep} />
              <span className={styles.crumbActive}>{t.contactNav}</span>
            </motion.nav>
            <motion.h1 className={styles.heroTitle} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              {t.contactHeroTitle}
            </motion.h1>
            <motion.p className={styles.heroSub} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              {t.contactHeroSub}
            </motion.p>
            <motion.div className={styles.heroCtas} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <a href="#form" className={styles.primary}>{t.contactCtaPrimary}</a>
              <a href="tel:+2349031829347" className={styles.secondary}><Phone size={16} /> {t.contactCtaSecondary}</a>
            </motion.div>
          </div>
        </section>

        {/* Response expectation bar */}
        <div className={styles.responseBar}>
          <div className={styles.responseInner}>
            <Clock size={16} className={styles.responseIcon} />
            <p>{t.contactResponseTime}</p>
          </div>
        </div>

        {/* Main content: form + direct contacts */}
        <section id="form" className={styles.section}>
          <div className={styles.sectionInner}>

            {/* Smart contact form */}
            <motion.div className={styles.formCol} initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={styles.colEyebrow}>{t.contactFormEyebrow}</p>
              <h2 className={styles.colHeading}>{t.contactFormHeading}</h2>

              {submitted ? (
                <motion.div className={styles.success} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                  <Send size={36} className={styles.successIcon} />
                  <h3 className={styles.successTitle}>{t.contactSuccessTitle}</h3>
                  <p className={styles.successMsg}>{t.contactSuccessMsg}</p>
                </motion.div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label className={styles.label}>{t.contactFieldName}</label>
                      <input required className={styles.input} value={form.name} onChange={set('name')} />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}>{t.contactFieldCompany}</label>
                      <input required className={styles.input} value={form.company} onChange={set('company')} />
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label className={styles.label}>{t.contactFieldEmail}</label>
                      <input type="email" required className={styles.input} value={form.email} onChange={set('email')} />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}>{t.contactFieldPhone}</label>
                      <input type="tel" required className={styles.input} value={form.phone} onChange={set('phone')} />
                    </div>
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>{t.contactFieldType}</label>
                    <select required className={styles.input} value={form.type} onChange={set('type')}>
                      <option value="">{t.contactFieldTypeDefault}</option>
                      {enquiryTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>{t.contactFieldMessage}</label>
                    <textarea required rows="5" className={styles.textarea} value={form.message} onChange={set('message')} placeholder={t.contactFieldMessagePlaceholder} />
                  </div>
                  <Captcha onChange={setCaptchaToken} />
                  <button type="submit" className={styles.submitBtn} disabled={!captchaToken} style={{ opacity: captchaToken ? 1 : 0.5, cursor: captchaToken ? 'pointer' : 'not-allowed' }}>
                    {t.contactSubmit} <Send size={16} />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Direct contacts + socials */}
            <motion.div className={styles.infoCol} initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <p className={styles.colEyebrow}>{t.contactDirectEyebrow}</p>
              <h2 className={styles.colHeading}>{t.contactDirectHeading}</h2>

              <div className={styles.directList}>
                <a href="tel:+2349031829347" className={styles.directItem}>
                  <div className={styles.directIcon}><Phone size={20} /></div>
                  <div>
                    <p className={styles.directLabel}>{t.contactPhone}</p>
                    <p className={styles.directValue}>+234 903 182 9347</p>
                  </div>
                </a>
                <a href="tel:+2347032647755" className={styles.directItem}>
                  <div className={styles.directIcon}><Phone size={20} /></div>
                  <div>
                    <p className={styles.directLabel}>{t.contactPhoneAlt}</p>
                    <p className={styles.directValue}>+234 703 264 7755</p>
                  </div>
                </a>
                <a href="mailto:info@proxynetgroup.com" className={styles.directItem}>
                  <div className={styles.directIcon}><Mail size={20} /></div>
                  <div>
                    <p className={styles.directLabel}>{t.contactEmail}</p>
                    <p className={styles.directValue}>info@proxynetgroup.com</p>
                  </div>
                </a>
                <a href="https://wa.me/2347032647755" target="_blank" rel="noopener noreferrer" className={styles.directItem}>
                  <div className={styles.directIcon}><MessageCircle size={20} /></div>
                  <div>
                    <p className={styles.directLabel}>WhatsApp</p>
                    <p className={styles.directValue}>+234 703 264 7755</p>
                  </div>
                </a>
              </div>

              <div className={styles.socialRow}>
                <p className={styles.socialLabel}>{t.contactFollowUs}</p>
                <div className={styles.socials}>
                  {socials.map(s => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label={s.label}>
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Office locations */}
        <section className={styles.officesSection}>
          <div className={styles.officesInner}>
            <motion.div className={styles.officesHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={styles.eyebrow}>{t.locationsEyebrow}</p>
              <h2 className={styles.officesHeading}>{t.locationsHeading}</h2>
            </motion.div>
            <div className={styles.officesGrid}>
              {offices.map((o, i) => (
                <motion.div key={o.city} className={styles.officeCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}>
                  <div className={styles.officeTop}>
                    <span className={styles.officeFlag}>{o.flag}</span>
                    <div>
                      <h3 className={styles.officeCity}>{o.city}</h3>
                      {o.tag && <span className={styles.hqBadge}>{o.tag}</span>}
                    </div>
                  </div>
                  <div className={styles.officeDetails}>
                    <div className={styles.officeRow}><MapPin size={14} className={styles.officeIcon} /><p>{o.address}</p></div>
                    <div className={styles.officeRow}><Phone size={14} className={styles.officeIcon} /><a href={`tel:${o.phone.replace(/\s/g,'')}`} className={styles.officeLink}>{o.phone}</a></div>
                    <div className={styles.officeRow}><Mail size={14} className={styles.officeIcon} /><a href={`mailto:${o.email}`} className={styles.officeLink}>{o.email}</a></div>
                  </div>
                  <a href={o.mapUrl} target="_blank" rel="noopener noreferrer" className={styles.mapLink}>{t.viewOnMap}</a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Embedded map — HQ */}
        <section className={styles.mapSection}>
          <iframe
            title="Proxynet Group HQ — Ikeja, Lagos"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3!2d3.3517!3d6.6018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9228!2sOpebi+Road+Ikeja+Lagos!5e0!3m2!1sen!2sng!4v1"
            className={styles.mapFrame}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </main>
    </>
  )
}
