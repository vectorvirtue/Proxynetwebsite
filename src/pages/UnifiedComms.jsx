import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ChevronRight, Send, Phone, Headphones, Video,
  Wifi, ArrowRight, Mic, Users, Volume2, Bluetooth,
} from 'lucide-react'
import Captcha from '../components/Captcha'
import SEO from '../components/SEO'
import { useLang } from '../context/LanguageContext'
import SectionBlobs from '../components/SectionBlobs'
import yealinkLogo from '../assets/yealink.png'
import vtLogo from '../assets/vt.webp'
import vtx120 from '../assets/VTX120.jpg'
import vt6200 from '../assets/VT6200.jpg'
import vt6300 from '../assets/VT6300.jpg'
import t34w from '../assets/t34W.png'
import t44w from '../assets/T44W.png'
import vp59 from '../assets/T5(vp59).png'
import cm20 from '../assets/cm20.png'
import cm50 from '../assets/cm50.png'
import styles from './UnifiedComms.module.css'

/* ── Data ──────────────────────────────────────────────────────── */

const capabilities = [
  {
    icon: Phone,
    title: 'IP Telephony',
    desc: 'T3, T4, and T5 series desk phones for every level of the organisation — from reception desks to executive offices.',
  },
  {
    icon: Volume2,
    title: 'Sky Sound Conference Audio',
    desc: 'Yealink Sky Sound speakerphones and conference audio systems for crystal-clear meetings in huddle rooms, boardrooms, and open spaces.',
  },
  {
    icon: Video,
    title: 'Microsoft Teams Rooms',
    desc: 'Certified Yealink Teams Rooms systems — MCore compute unit, RoomPanel scheduling display, WPP30 wireless presentation pod, and PTZ cameras.',
  },
  {
    icon: Headphones,
    title: 'Professional Headsets',
    desc: 'VT corded and wireless headsets purpose-built for contact centres, business offices, and UC environments.',
  },
  {
    icon: Wifi,
    title: 'Wireless Collaboration',
    desc: 'Wireless presentation and screen-sharing solutions that eliminate cable clutter and let any participant share content instantly.',
  },
  {
    icon: Users,
    title: 'Deployment & Support',
    desc: 'End-to-end supply, installation, provisioning, and SLA-backed maintenance for all UC hardware.',
  },
]

// Yealink IP Phones — T3 / T4 / T5 series
const ipPhones = [
  {
    series: 'T3 Series',
    model: 'SIP-T34W',
    type: 'Cost-Effective WiFi IP Phone',
    desc: 'A cost-effective entry point with built-in WiFi, HD voice, and a clean modern design — ideal for general office extensions and SME deployments.',
    tags: ['WiFi', 'HD Voice', 'Cost-Effective', 'SIP'],
    image: t34w,
  },
  {
    series: 'T4 Series',
    model: 'SIP-T44W',
    type: 'Feature-Rich WiFi SIP Phone',
    desc: 'Feature-packed mid-range phone with built-in WiFi, Gigabit Ethernet, a colour display, and broad UC platform compatibility including Teams and Zoom.',
    tags: ['WiFi', 'Gigabit', 'Colour Display', 'Teams / Zoom'],
    image: t44w,
  },
  {
    series: 'T5 Series',
    model: 'VP59',
    type: 'Flagship Smart Video Phone',
    desc: 'Yealink\'s flagship executive phone with a large touch screen, built-in camera for video calling, WiFi, Bluetooth, and advanced call management.',
    tags: ['Video Calling', 'Touch Screen', 'Bluetooth', 'Executive'],
    image: vp59,
  },
]

const skySoundValues = [
  { title: 'One-Stop, Full-Scenario Teams Room', desc: 'SkySound delivers a complete audio solution for every Teams Room scenario — from huddle spaces to large boardrooms — without compromise.' },
  { title: 'Intelligent Design & Deployment', desc: 'Purpose-built for Microsoft Teams Rooms with plug-and-play setup and intelligent configuration that gets rooms running fast.' },
  { title: 'Premium Audio Quality', desc: 'Advanced DSP, beamforming microphone arrays, and high-fidelity audio technology for crystal-clear conversations in any room.' },
  { title: 'Smart Multi-Camera Integration', desc: 'SkySound integrates seamlessly with Yealink\'s MTR systems for real-time, precise speaker-tracking — the camera always follows the voice.' },
]

// Yealink Sky Sound — conference audio
const skySoundProducts = [
  {
    tier: 'Standard',
    model: 'CM20',
    type: 'Ceiling Audio Solution',
    desc: 'AES67 beamforming mic array for natural, precise audio capture. Plug-and-play simplicity for a seamless Teams Room experience.',
    bullets: [
      'AES67 beamforming mic array',
      'Plug-and-play setup',
      'Seamless Teams Room experience',
    ],
    image: cm20,
  },
  {
    tier: 'Premium',
    model: 'CM50',
    type: 'Dante Audio Solution',
    desc: '127 wide-range mic units, premium DSP, and high-fidelity audio. Customised voice pick-up area with smart multi-camera integration.',
    bullets: [
      '127 wide-range mic units',
      'Premium DSP processing',
      'High fidelity audio',
      'Customised voice pick-up area',
      'Smart multi-camera integration',
    ],
    image: cm50,
  },
]

// VT Headsets — 3 with real images
const vtProducts = [
  {
    model: 'VTX120',
    type: 'Corded Stereo Headset',
    desc: 'Superior sound quality with noise-cancelling microphones. Soft-padded adjustable headband and lightweight design built for all-day wear.',
    tags: ['Corded', 'Noise Cancelling', 'All-Day Comfort'],
    image: vtx120,
    icon: Headphones,
  },
  {
    model: 'VT6200',
    type: 'Lightweight Office Headset',
    desc: 'Adjustable headband, flexible microphone boom arm, and soft breathable ear-pads to reduce fatigue across long contact centre shifts.',
    tags: ['Corded', 'Breathable Ear-Pads', 'Flexible Boom'],
    image: vt6200,
    icon: Headphones,
  },
  {
    model: 'VT6300',
    type: 'USB Wired UC Headset',
    desc: 'Designed for unified communication professionals. High-quality audio, excellent UC platform compatibility, and a comfortable extended-wear fit.',
    tags: ['USB', 'UC Compatible', 'Contact Centre'],
    image: vt6300,
    icon: Headphones,
  },
]

const deployments = [
  {
    client: 'PIL',
    solution: 'Microsoft Teams Rooms Deployment',
    category: 'Video Collaboration',
    outcome: 'Yealink MCore commissioned with RoomPanel scheduling integration, ready for grand opening.',
  },
  {
    client: 'African Union',
    solution: 'Teams Rooms — Diplomatic Conference Facilities',
    category: 'Video Collaboration',
    outcome: 'Yealink Tab controller, WPP30 wireless presentation pod, and PTZ auto-tracking camera across multiple conference rooms.',
  },
  {
    client: 'Enterprise Clients',
    solution: 'IP Telephony Rollouts',
    category: 'IP Telephony',
    outcome: 'Multi-site Yealink T-series IP phone deployments across corporate HQs, contact centres, and branch offices.',
  },
]

/* ── Component ─────────────────────────────────────────────────── */

export default function UnifiedComms() {
  const { t } = useLang()
  const [submitted, setSubmitted] = useState(false)
  const [captchaToken, setCaptchaToken] = useState(null)
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', interest: '', notes: '',
  })

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!captchaToken) return
    setSubmitted(true)
  }

  return (
    <>
      <SEO
        title="Unified Communications — Proxynet Group"
        description="Proxynet supplies and deploys Yealink IP phones (T3/T4/T5 series), Sky Sound conference audio, Teams Rooms, and VT professional headsets across Nigeria and West Africa."
        canonical="/solutions/unified-communications"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Unified Communications',
          description: 'Yealink IP phones, Sky Sound conference audio, Teams Rooms, and VT headsets — supplied and deployed across Nigeria and West Africa.',
          provider: { '@type': 'Organization', name: 'Proxynet Group', url: 'https://www.proxynetgroup.com' },
          areaServed: { '@type': 'Place', name: 'West Africa' },
          serviceType: 'Unified Communications',
          url: 'https://www.proxynetgroup.com/solutions/unified-communications',
        }}
      />

      <main>

        {/* ── Hero ── */}
        <section className={`${styles.hero} heroScene`}>
          <SectionBlobs variant="dark" />
          <div className={styles.heroOverlay} />
          <div className={styles.heroInner}>
            <motion.nav
              className={styles.breadcrumb}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Link to="/" className={styles.crumb}>{t.home}</Link>
              <ChevronRight size={14} className={styles.sep} />
              <Link to="/solutions" className={styles.crumb}>{t.solutions}</Link>
              <ChevronRight size={14} className={styles.sep} />
              <span className={styles.crumbActive}>{t.solUnifiedComms}</span>
            </motion.nav>
            <motion.p className={styles.eyebrow} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}>
              Managed &amp; Cloud
            </motion.p>
            <motion.h1 className={styles.heroTitle} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              Unified Communications
            </motion.h1>
            <motion.p className={styles.heroSub} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              IP phones, Sky Sound conference audio, Microsoft Teams Rooms, and professional headsets —
              supplied and deployed by Proxynet. Authorised distributor for Yealink and VT across West Africa.
            </motion.p>
            <motion.div className={styles.heroCtas} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <a href="#enquire" className={styles.primary}>Request a Quote</a>
              <a href="#products" className={styles.secondary}>View Products</a>
            </motion.div>
          </div>
        </section>

        {/* ── Brand strip ── */}
        <div className={styles.brandStrip}>
          <div className={styles.brandStripInner}>
            <span className={styles.brandStripLabel}>Authorised Distributor &amp; Integrator For</span>
            <div className={styles.brandLogos}>
              <div className={styles.brandLogoWrap}>
                <img src={yealinkLogo} alt="Yealink" className={styles.brandLogoImg} />
              </div>
              <div className={styles.brandLogoWrap}>
                <img src={vtLogo} alt="VT" className={styles.brandLogoImg} />
              </div>
            </div>
          </div>
        </div>

        {/* ── Capabilities ── */}
        <section className={styles.section}>
          <SectionBlobs />
          <div className={styles.inner}>
            <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={styles.eyebrowBlue}>What We Do</p>
              <h2 className={styles.heading}>UC Capabilities</h2>
              <p className={styles.subText}>
                From a single desk phone to a full multi-site Teams Rooms deployment — we handle supply,
                installation, provisioning, and ongoing support.
              </p>
            </motion.div>
            <div className={styles.capGrid}>
              {capabilities.map((cap, i) => {
                const Icon = cap.icon
                return (
                  <motion.div key={cap.title} className={styles.capCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }} whileHover={{ y: -4 }}>
                    <div className={styles.capIcon}><Icon size={24} /></div>
                    <h3 className={styles.capTitle}>{cap.title}</h3>
                    <p className={styles.capDesc}>{cap.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Yealink IP Phones ── */}
        <section id="products" className={styles.sectionAlt}>
          <div className={styles.inner}>
            <motion.div className={styles.brandSectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div>
                <p className={styles.eyebrowBlue}>IP Phones</p>
                <h2 className={styles.heading}>Yealink T-Series</h2>
                <p className={styles.subText}>
                  The T3, T4, and T5 series cover every level of the organisation — from entry-level
                  receptions to executive power users — all with HD voice and broad platform compatibility.
                </p>
              </div>
              <img src={yealinkLogo} alt="Yealink" className={styles.brandSectionLogo} />
            </motion.div>
            <div className={styles.productGrid}>
              {ipPhones.map((p, i) => (
                <motion.div key={p.series} className={styles.productCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
                  <div className={styles.productImgWrap}>
                    {p.image
                      ? <img src={p.image} alt={p.model} className={styles.productImg} />
                      : <div className={styles.productImgPlaceholder}><Phone size={36} /></div>
                    }
                  </div>
                  <div className={styles.productBody}>
                    <span className={styles.productSeries}>{p.series}</span>
                    <h3 className={styles.productModel}>{p.model}</h3>
                    <p className={styles.productType}>{p.type}</p>
                    <p className={styles.productDesc}>{p.desc}</p>
                    <div className={styles.tagRow}>
                      {p.tags.map((tag) => <span key={tag} className={styles.tag}>{tag}</span>)}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className={styles.rangeNote}>
              These are a selection of the Yealink IP phones we distribute. Contact us for the full range and pricing.
            </p>
          </div>
        </section>

        {/* ── Sky Sound Conference Audio ── */}
        <section className={styles.sectionDark}>
          <div className={styles.inner}>
            <motion.div className={styles.brandSectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div>
                <p className={styles.eyebrowLight}>Conference Audio</p>
                <h2 className={styles.headingLight}>Yealink Sky Sound</h2>
                <p className={styles.subTextLight}>
                  A full-scenario ceiling audio solution designed exclusively for Microsoft Teams Rooms —
                  combining beamforming mic arrays, premium DSP, and intelligent speaker tracking.
                </p>
              </div>
             
            </motion.div>

            {/* Value props */}
            <div className={styles.skySoundValues}>
              {skySoundValues.map((v, i) => (
                <motion.div key={v.title} className={styles.skySoundValueCard} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}>
                  <div className={styles.skySoundDot} />
                  <div>
                    <h3 className={styles.skySoundValueTitle}>{v.title}</h3>
                    <p className={styles.skySoundValueDesc}>{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CM20 + CM50 products */}
            <div className={styles.skySoundGrid}>
              {skySoundProducts.map((p, i) => (
                <motion.div key={p.model} className={`${styles.skySoundCard} ${p.tier === 'Premium' ? styles.skySoundCardPremium : ''}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}>
                  <div className={styles.skySoundTierBadge}>{p.tier}</div>
                  <div className={styles.skySoundImgWrap}>
                    {p.image
                      ? <img src={p.image} alt={p.model} className={styles.skySoundImg} />
                      : <div className={styles.skySoundImgPlaceholder}><Volume2 size={40} /></div>
                    }
                  </div>
                  <h3 className={styles.skySoundModel}>{p.model}</h3>
                  <p className={styles.skySoundType}>{p.type}</p>
                  <p className={styles.skySoundDesc}>{p.desc}</p>
                  <ul className={styles.skySoundBullets}>
                    {p.bullets.map((b) => (
                      <li key={b} className={styles.skySoundBullet}>
                        <span className={styles.skySoundBulletDot} />{b}
                      </li>
                    ))}
                  </ul>
                  <a href="#enquire" className={styles.skySoundCta}>
                    Request a Quote <ArrowRight size={14} />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VT Headsets ── */}
        <section className={styles.section}>
          <SectionBlobs />
          <div className={styles.inner}>
            <motion.div className={styles.brandSectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div>
                <p className={styles.eyebrowBlue}>Professional Headsets</p>
                <h2 className={styles.heading}>VT Headset Range</h2>
                <p className={styles.subText}>
                  VT headsets are purpose-built for contact centres and UC environments — noise-cancelling,
                  all-day comfortable, and compatible with all major UC platforms.
                </p>
              </div>
              <img src={vtLogo} alt="VT" className={styles.brandSectionLogo} />
            </motion.div>
            <div className={styles.productGrid}>
              {vtProducts.map((p, i) => {
                const Icon = p.icon
                return (
                  <motion.div key={p.model} className={styles.productCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
                    <div className={styles.productImgWrap}>
                      {p.image
                        ? <img src={p.image} alt={p.model} className={styles.productImg} />
                        : <div className={styles.productImgPlaceholder}><Icon size={36} /></div>
                      }
                    </div>
                    <div className={styles.productBody}>
                      <span className={styles.productSeries}>{p.type}</span>
                      <h3 className={styles.productModel}>{p.model}</h3>
                      <p className={styles.productDesc}>{p.desc}</p>
                      <div className={styles.tagRow}>
                        {p.tags.map((tag) => <span key={tag} className={styles.tag}>{tag}</span>)}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Featured Deployments ── */}
        <section className={styles.sectionAlt}>
          <div className={styles.inner}>
            <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={styles.eyebrowBlue}>Track Record</p>
              <h2 className={styles.heading}>Featured Deployments</h2>
              <p className={styles.subText}>Selected UC projects delivered across Nigeria and the African continent.</p>
            </motion.div>
            <div className={styles.deploymentsGrid}>
              {deployments.map((d, i) => (
                <motion.div key={d.client} className={styles.deploymentCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                  <span className={styles.deploymentCategory}>{d.category}</span>
                  <h3 className={styles.deploymentSolution}>{d.solution}</h3>
                  <p className={styles.deploymentClient}>{d.client}</p>
                  <p className={styles.deploymentOutcome}>{d.outcome}</p>
                </motion.div>
              ))}
            </div>
            <motion.div className={styles.caseStudiesCta} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Link to="/case-studies" className={styles.ctaLink}>
                View All Case Studies <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Enquiry Form ── */}
        <section id="enquire" className={styles.section}>
          <SectionBlobs />
          <div className={styles.inner}>
            <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={styles.eyebrowBlue}>Get a Quote</p>
              <h2 className={styles.heading}>Request a UC Proposal</h2>
              <p className={styles.subText}>
                Tell us what you need and we'll send you product recommendations and a detailed
                proposal within 24 hours.
              </p>
            </motion.div>
            {submitted ? (
              <motion.div className={styles.success} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                <Send size={36} className={styles.successIcon} />
                <h3>Enquiry Submitted</h3>
                <p>Our UC team will review your requirements and get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <motion.form className={styles.form} onSubmit={handleSubmit} noValidate initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label className={styles.label}>Full Name *</label>
                    <input required className={styles.input} placeholder="Your name" value={form.name} onChange={set('name')} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Company *</label>
                    <input required className={styles.input} placeholder="Your company" value={form.company} onChange={set('company')} />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label className={styles.label}>Email Address *</label>
                    <input required type="email" className={styles.input} placeholder="you@company.com" value={form.email} onChange={set('email')} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Phone Number</label>
                    <input type="tel" className={styles.input} placeholder="+234 ..." value={form.phone} onChange={set('phone')} />
                  </div>
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Area of Interest</label>
                  <select className={styles.input} value={form.interest} onChange={set('interest')}>
                    <option value="">Select an option</option>
                    <option>Yealink IP Phones (T3 / T4 / T5 Series)</option>
                    <option>Yealink Sky Sound Conference Audio</option>
                    <option>Microsoft Teams Rooms (Yealink)</option>
                    <option>VT Professional Headsets</option>
                    <option>Full UC Solution</option>
                    <option>Maintenance &amp; Support Contract</option>
                    <option>Not sure yet — need advice</option>
                  </select>
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Project Details</label>
                  <textarea
                    rows="4"
                    className={styles.textarea}
                    placeholder="Number of users, type of environment (office, contact centre, boardroom), location, and any specific requirements…"
                    value={form.notes}
                    onChange={set('notes')}
                  />
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
