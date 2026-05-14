import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight, Send, CheckCircle, ArrowRight, Star, Award, Globe, Handshake } from 'lucide-react'
import SEO from '../components/SEO'
import Captcha from '../components/Captcha'
import { useLang } from '../context/LanguageContext'
import samsungLogo from '../assets/samsung.png'
import logitechLogo from '../assets/logitech.png'
import canonLogo from '../assets/canon.png'
import yealinkLogo from '../assets/yealink.png'
import microsoftLogo from '../assets/microsoft.png'
import dahuaLogo from '../assets/dahua.png'
import vtLogo from '../assets/vt.webp'
import SectionBlobs from '../components/SectionBlobs'
import styles from './Partnerships.module.css'

const featuredPartners = [
  { logo: logitechLogo, name: 'Logitech', type: 'Authorised Distributor', badge: true, desc: 'Video collaboration, peripherals, and enterprise workspace solutions across West Africa.' },
  { logo: samsungLogo, name: 'Samsung', type: 'Authorised B2B Partner', badge: true, desc: 'Large format displays, videowalls, smart signage, and commercial AV solutions.' },
  { logo: yealinkLogo, name: 'Yealink', type: 'Authorised Distributor & System Integrator', badge: true, desc: 'IP phones, video conferencing, and unified communications solutions.' },
  { logo: microsoftLogo, name: 'Microsoft', type: 'Authorised Partner', badge: false, desc: 'Enterprise software, cloud services, and Microsoft 365 licensing solutions.' },
  { logo: canonLogo, name: 'Canon', type: 'Authorised Distributor', badge: false, desc: 'Printers, scanners, cameras, and document management solutions.' },
  { logo: dahuaLogo, name: 'Dahua', type: 'Authorised Distributor', badge: false, desc: 'CCTV, IP cameras, NVR systems, and security surveillance solutions.' },
  { logo: vtLogo, name: 'VT', type: 'Authorised Distributor', badge: false, desc: 'Professional headsets and communication devices across West Africa.' },
]

const tiers = [
  {
    name: 'Reseller',
    icon: <Globe size={24} />,
    benefits: [
      'Access to Proxynet product catalogue',
      'Competitive reseller pricing',
      'Sales and technical training',
      'Co-branded marketing materials',
      'Dedicated account manager',
    ],
  },
  {
    name: 'Silver Partner',
    icon: <Star size={24} />,
    benefits: [
      'Everything in Reseller tier',
      'Priority deal registration',
      'Joint go-to-market support',
      'Quarterly business reviews',
      'Lead sharing programme',
      'Demo equipment access',
    ],
  },
  {
    name: 'Gold Partner',
    icon: <Award size={24} />,
    benefits: [
      'Everything in Silver tier',
      'Dedicated partner success manager',
      'Co-funded marketing activities',
      'Early access to new products',
      'Annual partner summit invitation',
      'Premium support SLA',
    ],
  },
]

const solutionAreas = [
  'Professional AV & Displays', 'Network Infrastructure', 'Cybersecurity',
  'Unified Communications', 'Enterprise Software', 'IoT & Smart Infrastructure',
  'Cloud & Managed Services', 'EdTech Solutions', 'Digital Signage',
]

export default function Partnerships() {
  const { t } = useLang()
  const [submitted, setSubmitted] = useState(false)
  const [captchaToken, setCaptchaToken] = useState(null)
  const [form, setForm] = useState({ company: '', contact: '', email: '', phone: '', territory: '', interest: '', message: '' })
  const set = f => e => setForm({ ...form, [f]: e.target.value })

  return (
    <>
      <SEO
        title={t.partnershipsPageTitle}
        description={t.partnershipsPageDesc}
        canonical="/partnerships"
      />
      <main>
        {/* Hero */}
        <section className={`${styles.hero} heroScene`}>
          <SectionBlobs variant="dark" />`n          <div className={styles.heroOverlay} />
          <div className={styles.heroInner}>
            <motion.nav className={styles.breadcrumb} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <Link to="/" className={styles.crumb}>{t.home}</Link>
              <ChevronRight size={14} className={styles.sep} />
              <span className={styles.crumbActive}>{t.partnershipsNav}</span>
            </motion.nav>
            <motion.p className={styles.eyebrow} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}>
              {t.partnershipsEyebrow}
            </motion.p>
            <motion.h1 className={styles.heroTitle} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              {t.partnershipsHeroTitle}
            </motion.h1>
            <motion.p className={styles.heroSub} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              {t.partnershipsHeroSub}
            </motion.p>
            <motion.div className={styles.heroCtas} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <a href="#apply" className={styles.primary}>{t.partnershipsCta1}</a>
              <Link to="/partners" className={styles.secondary}>{t.partnershipsCta2}</Link>
            </motion.div>
          </div>
        </section>

        {/* Partner logo grid */}
        <section className={styles.logosSection}>
          <div className={styles.inner}>
          <SectionBlobs />
            <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={styles.eyebrowBlue}>{t.partnershipsLogosEyebrow}</p>
              <h2 className={styles.heading}>{t.partnershipsLogosHeading}</h2>
              <p className={styles.subText}>{t.partnershipsLogosSub}</p>
            </motion.div>
            <div className={styles.partnerGrid}>
              {featuredPartners.map((p, i) => (
                <motion.div key={p.name} className={styles.partnerCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}>
                  <div className={styles.partnerLogoWrap}>
                    <img src={p.logo} alt={p.name} className={styles.partnerLogo} />
                  </div>
                  <div className={styles.partnerInfo}>
                    <div className={styles.partnerNameRow}>
                      <h3 className={styles.partnerName}>{p.name}</h3>
                      {p.badge && <span className={styles.distributorBadge}>{t.partnershipsDistributor}</span>}
                    </div>
                    <p className={styles.partnerType}>{p.type}</p>
                    <p className={styles.partnerDesc}>{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className={styles.viewAllRow}>
              <Link to="/partners" className={styles.viewAllBtn}>
                {t.partnershipsCta2} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Reseller programme */}
        <section className={styles.sectionDark}>
          <div className={styles.inner}>
          <SectionBlobs />
            <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={styles.eyebrowLight}>{t.partnershipsResellerEyebrow}</p>
              <h2 className={styles.headingLight}>{t.partnershipsResellerHeading}</h2>
              <p className={styles.subTextLight}>{t.partnershipsResellerSub}</p>
            </motion.div>
            <div className={styles.tiersGrid}>
              {tiers.map((tier, i) => (
                <motion.div key={tier.name} className={`${styles.tierCard} ${i === 2 ? styles.tierCardGold : ''}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                  <div className={styles.tierIcon}>{tier.icon}</div>
                  <h3 className={styles.tierName}>{tier.name}</h3>
                  <ul className={styles.tierBenefits}>
                    {tier.benefits.map((b, bi) => (
                      <li key={bi} className={styles.tierBenefit}>
                        <CheckCircle size={15} className={styles.checkIcon} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#apply" className={styles.tierCta}>{t.partnershipsCta1} <ArrowRight size={14} /></a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Reseller application form */}
        <section id="apply" className={styles.section}>
          <div className={styles.inner}>
          <SectionBlobs />
            <div className={styles.applyGrid}>
              <motion.div className={styles.applyLeft} initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <p className={styles.eyebrowBlue}>{t.partnershipsApplyEyebrow}</p>
                <h2 className={styles.heading}>{t.partnershipsApplyHeading}</h2>
                <p className={styles.body}>{t.partnershipsApplySub}</p>
                <div className={styles.applyBullets}>
                  {[t.partnershipsApplyBullet1, t.partnershipsApplyBullet2, t.partnershipsApplyBullet3].map((b, i) => (
                    <div key={i} className={styles.applyBullet}>
                      <Handshake size={18} className={styles.bulletIcon} />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div className={styles.applyRight} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
                {submitted ? (
                  <div className={styles.success}>
                    <Send size={36} className={styles.successIcon} />
                    <h3>{t.partnershipsSuccessTitle}</h3>
                    <p>{t.partnershipsSuccessMsg}</p>
                  </div>
                ) : (
                  <form className={styles.form} onSubmit={e => { e.preventDefault(); if (!captchaToken) return; setSubmitted(true) }}>
                    <div className={styles.formRow}>
                      <div className={styles.field}>
                        <label className={styles.label}>{t.partnershipsFieldCompany}</label>
                        <input required className={styles.input} value={form.company} onChange={set('company')} />
                      </div>
                      <div className={styles.field}>
                        <label className={styles.label}>{t.partnershipsFieldContact}</label>
                        <input required className={styles.input} value={form.contact} onChange={set('contact')} />
                      </div>
                    </div>
                    <div className={styles.formRow}>
                      <div className={styles.field}>
                        <label className={styles.label}>{t.contactFieldEmail}</label>
                        <input type="email" required className={styles.input} value={form.email} onChange={set('email')} />
                      </div>
                      <div className={styles.field}>
                        <label className={styles.label}>{t.contactFieldPhone}</label>
                        <input type="tel" required className={styles.input} value={form.phone} onChange={set('phone')} />
                      </div>
                    </div>
                    <div className={styles.formRow}>
                      <div className={styles.field}>
                        <label className={styles.label}>{t.partnershipsFieldTerritory}</label>
                        <input required className={styles.input} value={form.territory} onChange={set('territory')} placeholder="e.g. Lagos, Nigeria" />
                      </div>
                      <div className={styles.field}>
                        <label className={styles.label}>{t.partnershipsFieldInterest}</label>
                        <select required className={styles.input} value={form.interest} onChange={set('interest')}>
                          <option value="">{t.partnershipsFieldInterestDefault}</option>
                          {solutionAreas.map(s => <option key={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}>{t.partnershipsFieldMessage}</label>
                      <textarea rows="4" className={styles.textarea} value={form.message} onChange={set('message')} placeholder={t.partnershipsFieldMessagePlaceholder} />
                    </div>
                    <Captcha onChange={setCaptchaToken} />
                    <button type="submit" className={styles.submitBtn} disabled={!captchaToken} style={{ opacity: captchaToken ? 1 : 0.5, cursor: captchaToken ? 'pointer' : 'not-allowed' }}>
                      {t.partnershipsCta1} <Send size={16} />
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

