import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import dahuaLogo from '../../assets/dahua.png'
import vtLogo from '../../assets/vt.webp'
import canonLogo from '../../assets/canon.png'
import logitechLogo from '../../assets/logitech.png'
import samsungLogo from '../../assets/samsung.png'
import yealinkLogo from '../../assets/yealink.jpg'
import MicrosoftLogo from '../../assets/microsoft.png'
import styles from './Awards.module.css'

const ImgLogo = ({ src, alt }) => (
  <div className={styles.imgLogoWrap}>
    <img src={src} alt={alt} className={styles.imgLogo} />
  </div>
)

export default function Awards() {
  const { t } = useLang()

  const awards = [
    { type: 'award', logo: <ImgLogo src={samsungLogo} alt="Samsung" />, title: 'Samsung B2B Award 2014', body: t.award1Body },
    { type: 'cert', logo: <ImgLogo src={samsungLogo} alt="Samsung" />, title: 'Samsung Authorised Partner', body: t.award2Body },
    { type: 'cert', logo: <ImgLogo src={MicrosoftLogo} alt="Microsoft" />, title: 'Microsoft Partner', body: t.award3Body },
    { type: 'cert', logo: <ImgLogo src={canonLogo} alt="Canon" />, title: 'Canon Authorised Distributor', body: t.award4Body },
    { type: 'cert', logo: <ImgLogo src={yealinkLogo} alt="Yealink" />, title: 'Yealink Authorised Distributor', body: t.award5Body },
    { type: 'cert', logo: <ImgLogo src={yealinkLogo} alt="Yealink" />, title: 'Yealink Authorised System Integrator', body: t.award6Body },
    { type: 'cert', logo: <ImgLogo src={logitechLogo} alt="Logitech" />, title: 'Logitech Authorised Partner', body: t.award7Body },
    { type: 'cert', logo: <ImgLogo src={vtLogo} alt="VT" />, title: 'VT Authorised Distributor', body: t.award8Body },
    { type: 'cert', logo: <ImgLogo src={dahuaLogo} alt="Dahua" />, title: 'Dahua Authorised Distributor', body: t.award9Body },
    { type: 'iso', icon: <ShieldCheck size={24} />, title: 'ISO 9001:2015 Certified', body: t.award10Body },
  ]

  return (
    <section id="awards" className={styles.section}>
      <div className={styles.inner}>
        <motion.div className={styles.header} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className={styles.eyebrow}>{t.awardsEyebrow}</p>
          <h2 className={styles.heading}>{t.awardsHeading}</h2>
          <p className={styles.sub}>{t.awardsSub}</p>
        </motion.div>
        <div className={styles.grid}>
          {awards.map((a, i) => (
            <motion.div key={a.title} className={`${styles.card} ${a.type === 'award' ? styles.cardAward : ''} ${a.type === 'iso' ? styles.cardIso : ''}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: (i % 4) * 0.08 }} whileHover={{ y: -4 }}>
              <div className={styles.cardTop}>
                {a.logo ? <div className={styles.logoWrap}>{a.logo}</div> : <div className={styles.iconWrap}>{a.icon}</div>}
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
