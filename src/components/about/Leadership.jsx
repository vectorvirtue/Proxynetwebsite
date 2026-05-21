import { motion } from 'framer-motion'
import { useLang } from '../../context/LanguageContext'
import SectionBlobs from '../SectionBlobs'
import styles from './Leadership.module.css'
import placeholderOne from '../../assets/Picture1.jpg'
import placeholderTwo from '../../assets/Picture4.jpg'
import placeholderThree from '../../assets/Logitech.jpg'
import placeholderFour from '../../assets/huawei.jpg'
import placeholderFive from '../../assets/edtech.jpg'

const team = [
  { name: 'Ifeanyi Ozo-Onyali',  titleKey: 'leaderCEOTitle',  bioKey: 'leaderCEOBio', image: placeholderOne },
  { name: 'Theodora Usman',      titleKey: 'leaderHRTitle',   bioKey: 'leaderHRBio', image: placeholderTwo },
  { name: 'Chijioke Okorie',     titleKey: 'leaderCOOTitle',  bioKey: 'leaderCOOBio', image: placeholderThree },
  { name: 'Folasade',            titleKey: 'leaderCFOTitle',  bioKey: 'leaderCFOBio', image: placeholderFour },
  { name: 'Chike Oliobi',         titleKey: 'leaderSalesTitle', bioKey: 'leaderSalesBio', image: placeholderFive },
]

// Trapezoid clip-paths — outer edge of each card is inset, inner edge is full height
// This makes the card look like it's folding away from the viewer on the outside
// Card 1: left edge inset (top-left and bottom-left pulled in)
// Card 2: left edge slightly inset
// Card 3: flat rectangle
// Card 4: right edge slightly inset
// Card 5: right edge strongly inset
const clipPaths = [
  'polygon(16% 4%, 100% 0%, 100% 100%, 16% 96%)',   // card 1 — left edge inset, curves inward
  'polygon(6% 2%, 100% 0%, 100% 100%, 6% 98%)',     // card 2 — left edge slightly inset
  'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',    // card 3 — flat rectangle
  'polygon(0% 0%, 94% 2%, 94% 98%, 0% 100%)',       // card 4 — right edge slightly inset
  'polygon(0% 0%, 84% 4%, 84% 96%, 0% 100%)',       // card 5 — right edge strongly inset
]

export default function Leadership() {
  const { t } = useLang()
  return (
    <section id="leadership" className={styles.section}>
      <div className={styles.inner}>
        <SectionBlobs />
        <motion.div className={styles.header} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className={styles.eyebrow}>{t.leadershipEyebrow}</p>
          <h2 className={styles.heading}>{t.leadershipHeading}</h2>
        </motion.div>

        {/* Fan layout */}
        <div className={styles.fanScene}>
          {team.map((p, i) => (
            <motion.div
              key={p.name}
              className={styles.fanCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.03, zIndex: 10, transition: { duration: 0.25 } }}
            >
              <div
                className={styles.fanImgWrap}
                style={{
                  '--flip-direction': i % 2 === 0 ? '180deg' : '-180deg',
                  '--flip-twist': i % 2 === 0 ? '5deg' : '-5deg',
                }}
              >
                <div className={styles.fanFlip}>
                  <div
                    className={`${styles.fanFace} ${styles.fanFront}`}
                    style={{ clipPath: clipPaths[i] }}
                  >
                    <div className={styles.fanAvatar}>
                      <span className={styles.fanInitials}>{p.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                  </div>
                  <div className={`${styles.fanFace} ${styles.fanBack}`}>
                    <img className={styles.fanImage} src={p.image} alt="" />
                  </div>
                </div>
              </div>
              <div className={styles.fanLabel}>
                <p className={styles.fanName}>{p.name}</p>
                <p className={styles.fanTitle}>{t[p.titleKey]}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bio strip */}
        <div className={styles.bioGrid}>
          {team.map((p, i) => (
            <motion.div key={p.name + '-bio'} className={styles.bioCard} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}>
              <p className={styles.bioName}>{p.name}</p>
              <p className={styles.bioRole}>{t[p.titleKey]}</p>
              <p className={styles.bioCopy}>{t[p.bioKey]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


