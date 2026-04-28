import { motion } from 'framer-motion'
import { BadgeCheck, ShieldCheck } from 'lucide-react'
import dahuaLogo from '../../assets/dahua.png'
import vtLogo from '../../assets/vt.webp'
import canonLogo from '../../assets/canon.png'
import logitechLogo from '../../assets/logitech.png'
import samsungLogo from '../../assets/samsung.png'
import yealinkLogo from '../../assets/yealink.jpg'
import styles from './Awards.module.css'
import MicrosoftLogo from '../../assets/microsoft.png'

const ImgLogo = ({ src, alt }) => (
  <div className={styles.imgLogoWrap}>
    <img src={src} alt={alt} className={styles.imgLogo} />
  </div>
)

const awards = [
  { type: 'award', logo: <ImgLogo src={samsungLogo} alt="Samsung" />, title: 'Samsung B2B Award 2014', body: 'Recognised by Samsung for outstanding B2B sales performance and client delivery excellence in Nigeria.' },
  { type: 'cert', logo: <ImgLogo src={samsungLogo} alt="Samsung" />, title: 'Samsung Authorised Partner', body: 'Certified Samsung B2B partner for large format displays, smart signage, and enterprise AV solutions.' },
  { type: 'cert', logo: <ImgLogo src={MicrosoftLogo} alt="Microsoft"/>, title: 'Microsoft Partner', body: 'Authorised Microsoft partner for enterprise software, cloud services, and licensing solutions.' },
  { type: 'cert', logo: <ImgLogo src={canonLogo} alt="Canon" />, title: 'Canon Authorised Distributor', body: 'Authorised Canon distributor for printers, scanners, cameras, and document management solutions.' },
  { type: 'cert', logo: <ImgLogo src={yealinkLogo} alt="Yealink" />, title: 'Yealink Authorised Distributor', body: 'Authorised Yealink distributor for IP phones, video conferencing, and unified communications.' },
  { type: 'cert', logo: <ImgLogo src={yealinkLogo} alt="Yealink" />, title: 'Yealink Authorised System Integrator', body: 'Certified Yealink system integrator for enterprise-wide UC deployments and managed services.' },
  { type: 'cert', logo: <ImgLogo src={logitechLogo} alt="Logitech" />, title: 'Logitech Authorised Partner', body: 'Authorised Logitech partner for video collaboration, peripherals, and enterprise workspace solutions.' },
  { type: 'cert', logo: <ImgLogo src={vtLogo} alt="VT" />, title: 'VT Authorised Distributor', body: 'Official distributor of VT professional headsets and communication devices across West Africa.' },
  { type: 'cert', logo: <ImgLogo src={dahuaLogo} alt="Dahua" />, title: 'Dahua Authorised Distributor', body: 'Authorised Dahua distributor for CCTV, IP cameras, NVR systems, and security surveillance solutions.' },
  { type: 'iso', icon: <ShieldCheck size={24} />, title: 'ISO 9001:2015 Certified', body: 'Quality Management System certified by TNV (Cert No. SBSCKTSI20251120NGAQM10U). Valid through 19/11/2028.' },
]

export default function Awards() {
  return (
    <section id="awards" className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.eyebrow}>Recognition</p>
          <h2 className={styles.heading}>Awards & Certifications</h2>
          <p className={styles.sub}>Our partnerships and accreditations reflect the trust global technology leaders place in Proxynet.</p>
        </motion.div>

        <div className={styles.grid}>
          {awards.map((a, i) => (
            <motion.div
              key={a.title}
              className={`${styles.card} ${a.type === 'award' ? styles.cardAward : ''} ${a.type === 'iso' ? styles.cardIso : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <div className={styles.cardTop}>
                {a.logo
                  ? <div className={styles.logoWrap}>{a.logo}</div>
                  : <div className={styles.iconWrap}>{a.icon}</div>
                }
              </div>
              <h3 className={styles.title}>{a.title}</h3>
              <p className={styles.body}>{a.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
