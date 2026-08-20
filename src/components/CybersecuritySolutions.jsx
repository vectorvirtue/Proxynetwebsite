import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import SectionBlobs from './SectionBlobs'
import cybersecurityImage from '../assets/hero.png'
import fortinetImage from '../assets/fortinet.webp'
import comforteImage from '../assets/comforte1.jpg'
import inetcoImage from '../assets/inetco.avif'
import beyondTrustLogo from '../assets/BeyondTrust.jpg'
import vkeyLogo from '../assets/vkey.jpeg'
import fortinetLogo from '../assets/logo_fortinet.png'
import forcepointLogo from '../assets/Forcepoint_Logo_New.webp'
import comforteLogo from '../assets/comforte.png'
import crowdstrikeLogo from '../assets/crowdstrike.svg'
import inetcoLogo from '../assets/INETCO_Systems_Limited_Logo.jpg'
import algosecLogo from '../assets/algosec.avif'
import styles from './CybersecuritySolutions.module.css'

export default function CybersecuritySolutions() {
  const { t } = useLang()
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const solutions = [
    { row: 0, image: cybersecurityImage, logos: [] },
    { row: 1, image: fortinetImage, logos: [fortinetLogo] },
    { row: 2, image: beyondTrustLogo, logos: [beyondTrustLogo] },
    { row: 3, image: vkeyLogo, logos: [vkeyLogo] },
    { row: 4, image: fortinetImage, logos: [forcepointLogo] },
    { row: 5, image: comforteImage, logos: [comforteLogo] },
    { row: 6, image: fortinetImage, logos: [fortinetLogo] },
    { row: 7, image: inetcoImage, logos: [crowdstrikeLogo, fortinetLogo] },
    { row: 8, image: inetcoImage, logos: [inetcoLogo, vkeyLogo] },
    { row: 9, image: inetcoImage, logos: [inetcoLogo, algosecLogo, fortinetLogo] },
    { row: 10, image: algosecLogo, logos: [algosecLogo] },
  ]

  useEffect(() => {
    const id = setInterval(() => go(1), 5000)
    return () => clearInterval(id)
  }, [current])

  const go = (dir) => {
    setDirection(dir)
    setCurrent((value) => (value + dir + solutions.length) % solutions.length)
  }

  const solution = solutions[current]
  const [service, vendor, offering] = t.cybersecurityRows[solution.row]
  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0, transition: { duration: 0.25 } }),
  }

  return (
    <section className={`${styles.section} sectionCircles`} aria-labelledby="cybersecurity-solutions-heading">
      <div className={styles.inner}>
        <SectionBlobs />

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.icon} aria-hidden="true"><ShieldCheck size={28} /></div>
          <p className={styles.eyebrow}>{t.cybersecuritySolutionsEyebrow}</p>
          <h2 id="cybersecurity-solutions-heading" className={styles.heading}>{t.cybersecuritySolutionsHeading}</h2>
          <p className={styles.intro}>{t.cybersecuritySolutionsIntro}</p>
        </motion.div>

        <motion.div
          className={styles.carousel}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className={styles.imgPane}>
            <AnimatePresence custom={direction} mode="wait">
              <motion.img
                key={current}
                src={solution.image}
                alt={service}
                className={styles.img}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
              />
            </AnimatePresence>
            <div className={styles.counter}>
              <span className={styles.counterCurrent}>{String(current + 1).padStart(2, '0')}</span>
              <span className={styles.counterSep}>/</span>
              <span className={styles.counterTotal}>{String(solutions.length).padStart(2, '0')}</span>
            </div>
          </div>

          <div className={styles.infoPane}>
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                className={styles.info}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <span className={styles.category}>{service}</span>
                <p className={styles.vendor}>{vendor}</p>
                <h3 className={styles.solution}>{offering}</h3>
              </motion.div>
            </AnimatePresence>

            <div className={styles.logoRow} aria-label={`${vendor} logos`}>
              {solution.logos.length > 0 ? solution.logos.map((logo, index) => (
                <img key={`${vendor}-${index}`} src={logo} alt="" className={styles.partnerLogo} />
              )) : <span className={styles.logoFallback}>Proxynet Professional Services</span>}
            </div>

            <div className={styles.controls}>
              <button className={styles.arrow} onClick={() => go(-1)} aria-label="Previous solution"><ChevronLeft size={20} /></button>
              <div className={styles.dots}>
                {solutions.map((_, index) => (
                  <button key={index} className={index === current ? `${styles.dot} ${styles.dotActive}` : styles.dot} onClick={() => { setDirection(index > current ? 1 : -1); setCurrent(index) }} aria-label={`Solution ${index + 1}`} />
                ))}
              </div>
              <button className={styles.arrow} onClick={() => go(1)} aria-label="Next solution"><ChevronRight size={20} /></button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
