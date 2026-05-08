import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import samsungLogo from '../assets/samsung.png'
import logitechLogo from '../assets/Logitech.jpg'
import canonLogo from '../assets/canon.png'
import yealinkLogo from '../assets/yealink.png'
import microsoftLogo from '../assets/microsoft.png'
import dahuaLogo from '../assets/dahua.png'
import vtLogo from '../assets/vt.webp'
import sennheiserLogo from '../assets/Sennheiser-logo.png'
import maxhubLogo from '../assets/maxhub.jpg'
import ibmLogo from '../assets/ibm.png'
import zoomLogo from '../assets/zoom-logo1.jpg'
import peerlessLogo from '../assets/peerlessav.jpg'
import fireeyeLogo from '../assets/fireeye.jpg'
import styles from './PartnerLogos.module.css'

// All partners now have logos
const partners = [
  { logo: yealinkLogo,    name: 'Yealink' },
  { logo: samsungLogo,    name: 'Samsung' },
  { logo: sennheiserLogo, name: 'Sennheiser', tall: true },
  { logo: logitechLogo,   name: 'Logitech' },
  { logo: maxhubLogo,     name: 'Maxhub' },
  { logo: microsoftLogo,  name: 'Microsoft' },
  { logo: ibmLogo,        name: 'IBM',        tall: true },
  { logo: zoomLogo,       name: 'Zoom',       tall: true },
  { logo: peerlessLogo,   name: 'Peerless-AV', tall: true },
  { logo: fireeyeLogo,    name: 'FireEye',    size: 'xl' },
  { logo: canonLogo,      name: 'Canon' },
  { logo: dahuaLogo,      name: 'Dahua' },
  { logo: vtLogo,         name: 'VT' },
]

// Duplicate for seamless infinite loop
const track = [...partners, ...partners]

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

        {/* Infinite scrolling carousel */}
        <div className={styles.carouselWrap} aria-hidden="true">
          <div className={styles.carouselTrack}>
            {track.map((p, i) => (
              <div key={`${p.name}-${i}`} className={styles.carouselItem}>
                {p.logo ? (
                  <img
                    src={p.logo}
                    alt={p.name}
                    className={
                      p.size === 'xl' ? styles.carouselLogoXL :
                      p.tall ? styles.carouselLogoTall :
                      styles.carouselLogo
                    }
                  />
                ) : (
                  <span className={styles.carouselName}>{p.name}</span>
                )}
              </div>
            ))}
          </div>
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
