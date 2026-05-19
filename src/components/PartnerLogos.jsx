import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import styles from './PartnerLogos.module.css'
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
import huaweiLogo from '../assets/huawei_logo.png'
import hikvisionLogo from '../assets/2560px-Hikvision_logo.svg.png'
import absenLogo from '../assets/absen.jpg'
import biampLogo from '../assets/Biamp.png'
import boschLogo from '../assets/bosch.jpg'
import crestronLogo from '../assets/Crestron-Logo-1.jpg'
import dLinkLogo from '../assets/D-Link_wordmark.svg.png'
import extronLogo from '../assets/extron.png'
import hanwhaLogo from '../assets/hanwha.png'
import panasonicLogo from '../assets/og_base_logo-of-panasonic.png'
import polycomLogo from '../assets/polycom.jpg'
import sharpLogo from '../assets/Sharp-Be-Original-small.png'
import sonosLogo from '../assets/Sonos_2015-Logo.png'
import uniluminLogo from '../assets/unilumin.png'
import belkinLogo from '../assets/belkin.jpg'
import beyondLogo from '../assets/BeyondTrust.jpg'
import nordenLogo from  '../assets/348886.png'
import krammerLogo from  '../assets/Krammer.png'
import inetcoLogo from '../assets/INETCO_Systems_Limited_Logo.jpg'
import acebottLogo from  '../assets/logo-1000x500-1 1.png'
import makeblockLogo from '../assets/makeblock.png'
import lumensLogo from '../assets/lumens-logo-2.png'
import zktecLogo from '../assets/zkteco.png'
const partners = [  
  { logo: samsungLogo,   name: 'Samsung' },
  { logo: logitechLogo,  name: 'Logitech',  tall: true  },
  { logo: microsoftLogo, name: 'Microsoft' },
  { logo: yealinkLogo,   name: 'Yealink',  square: true  },
  { logo: sennheiserLogo, name: 'Sennheiser', size: 'xl' },
  { logo: maxhubLogo,    name: 'Maxhub' },
   { logo: makeblockLogo,    name: 'MakeBlock', tall:true },
  
{logo: beyondLogo,    name: 'BeyondTrust', tall: true  },
{logo: inetcoLogo,    name: 'Inetco', tall: true  },
{logo: krammerLogo,    name: 'Kramer', tall: true  },
  { logo: huaweiLogo,    name: 'Huawei' },
   { logo:acebottLogo, name: 'Acebott', tall: true },
  { logo: ibmLogo,       name: 'IBM', square: true },
  { logo: zoomLogo,      name: 'Zoom', size: 'xl' },
  { logo: peerlessLogo,  name: 'Peerless-AV', tall: true },
  { logo: fireeyeLogo,   name: 'FireEye', size: 'xl' },
  { logo: canonLogo,     name: 'Canon' },
  { logo: dahuaLogo,     name: 'Dahua' },
   { logo: nordenLogo,     name: 'Norden', square:true },
  { logo: hikvisionLogo, name: 'Hikvision' },
  { logo: boschLogo,     name: 'Bosch' },
  { logo: panasonicLogo, name: 'Panasonic',  tall: true  },
  { logo: crestronLogo,  name: 'Crestron' },
   { logo: belkinLogo,  name: 'Belkin' },
  { logo: extronLogo,    name: 'Extron' },
  { logo: biampLogo,     name: 'Biamp' },
  { logo: polycomLogo,   name: 'Polycom' },
  { logo: sharpLogo,     name: 'Sharp' },
  { logo: absenLogo,     name: 'Absen' },
  { logo: uniluminLogo,  name: 'Unilumin',  tall: true  },
  { logo: sonosLogo,     name: 'Sonos' },
  { logo: dLinkLogo,     name: 'D-Link' },
  { logo: hanwhaLogo,    name: 'Hanwha' },
  { logo: vtLogo,        name: 'VT' },
  { logo: lumensLogo,    name: 'Lumens', tall: true },
  { logo: zktecLogo,     name: 'ZKTeco',  },
]

// Duplicate for seamless infinite loop
const track = [...partners, ...partners]

export default function PartnerLogos() {
  const { t } = useLang()

  return (
    <section className={`${styles.section} sectionCircles`} aria-labelledby="partners-heading">
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
                      p.wide ? styles.carouselLogoWide :
                      p.square ? styles.carouselLogoSquare:
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
          <div >
           
            <Link to="/partners" className={styles.ctaSecondary}>{t.partnersViewAll}</Link>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
