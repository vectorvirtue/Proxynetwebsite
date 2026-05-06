import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import samsungLogo from '../assets/samsung.png'
import logitechLogo from '../assets/logitech.png'
import canonLogo from '../assets/canon.png'
import yealinkLogo from '../assets/yealink.png'
import microsoftLogo from '../assets/microsoft.png'
import dahuaLogo from '../assets/dahua.png'
import vtLogo from '../assets/vt.webp'
import styles from './PartnerLogos.module.css'

const partners = [
  { logo: samsungLogo,   name: 'Samsung',   type: 'Authorised B2B Partner' },
  { logo: logitechLogo,  name: 'Logitech',  type: 'Authorised Distributor' },
  { logo: microsoftLogo, name: 'Microsoft', type: 'Authorised Partner' },
  { logo: canonLogo,     name: 'Canon',     type: 'Authorised Distributor' },
  { logo: yealinkLogo,   name: 'Yealink',   type: 'Distributor & Integrator' },
  { logo: dahuaLogo,     name: 'Dahua',     type: 'Authorised Distributor' },
  { logo: vtLogo,        name: 'VT',        type: 'Authorised Distributor' },
]

export default function PartnerLogos() {
  const { t } = useLang()

  return (
    <section className={styles.section} aria-labelledby="partners-heading">
      <div className={styles.inner}>

        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.headerLeft}>
            <p className={styles.eyebrow}>{t.partnersEyebrow}</p>
            <h2 id="partners-heading" className={styles.heading}>{t.partnersHeading}</h2>
            <p className={styles.sub}>{t.partnersSub}</p>
          </div>
          <Link to="/partnerships" className={styles.headerCta}>
            {t.partnersBecome} <ArrowRight size={16} />
          </Link>
        </motion.div>

        {/* Logo strip */}
        <div className={styles.logoStrip}>
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              className={styles.logoCard}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
            >
              <div className={styles.logoWrap}>
                <img src={p.logo} alt={p.name} className={styles.logo} />
              </div>
              <p className={styles.partnerName}>{p.name}</p>
              <p className={styles.partnerType}>{p.type}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className={styles.footer}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className={styles.footerText}>{t.partnersFooterText}</p>
          <div className={styles.footerCtas}>
            <Link to="/partnerships" className={styles.ctaPrimary}>{t.partnersBecome}</Link>
            <Link to="/partners" className={styles.ctaSecondary}>{t.partnersViewAll}</Link>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

