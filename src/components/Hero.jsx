import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import img1 from '../assets/idehub.jpg'
import img2 from '../assets/Picture1.jpg'
import img3 from '../assets/Picture2.png'
import img4 from '../assets/Picture3.png'
import img5 from '../assets/Picture4.png'
import img6 from '../assets/Picture5.png'
import styles from './Hero.module.css'

// Slide 0 is the YouTube video, slides 1+ are images
const VIDEO_ID = 'qrQZiRbFj34'
const images = [img1, img2, img3, img4, img5, img6]
const TOTAL = 1 + images.length // video + images

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' } }),
}

export default function Hero() {
  const { t } = useLang()
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const duration = current === 0 ? 120000 : 3000 // 2 min for video, 3s for images
    const id = setInterval(() => {
      setDirection(1)
      setCurrent(p => (p + 1) % TOTAL)
    }, duration)
    return () => clearInterval(id)
  }, [current])

  const go = (dir) => {
    setDirection(dir)
    setCurrent(p => (p + dir + TOTAL) % TOTAL)
  }

  const solutions = [
    t.itSecurity, t.systemsIntegration, t.enterpriseNetworking,
    t.intrusionDetection, t.firewallSecurity, t.vpn,
  ]

  return (
    <section className={styles.hero} aria-label="Hero">
      {/* Background — video for slide 0, image for rest */}
      <div className={styles.videoBg} aria-hidden="true">
        {current === 0 ? (
          <iframe
            key="video"
            className={styles.youtubeFrame}
            src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
            title="Hero background video"
            allow="autoplay; encrypted-media"
          />
        ) : (
          <AnimatePresence custom={direction} mode="sync">
            <motion.img
              key={current}
              src={images[current - 1]}
              alt=""
              className={styles.slideImg}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }}
              exit={{ opacity: 0, x: direction > 0 ? -60 : 60, transition: { duration: 0.4 } }}
            />
          </AnimatePresence>
        )}
      </div>
      <div className={styles.videoOverlay} aria-hidden="true" />

      {/* Carousel arrows */}
      <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={() => go(-1)} aria-label="Previous slide">
        <ChevronLeft size={24} />
      </button>
      <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={() => go(1)} aria-label="Next slide">
        <ChevronRight size={24} />
      </button>

      {/* Slide dots */}
      <div className={styles.slideDots} aria-hidden="true">
        {Array.from({ length: TOTAL }).map((_, i) => (
          <button key={i} className={`${styles.slideDot} ${i === current ? styles.slideDotActive : ''}`} onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }} />
        ))}
      </div>

      {/* Glow blobs */}
      <div className={styles.blobBlue} aria-hidden="true" />
      <div className={styles.blobSky} aria-hidden="true" />

      <div className={styles.inner}>
        <motion.p className={styles.eyebrow} variants={fadeUp} initial="hidden" animate="show" custom={0}>{t.heroEyebrow}</motion.p>
        <motion.h1 className={styles.title} variants={fadeUp} initial="hidden" animate="show" custom={1}>
          {t.heroTitle} <span className={styles.accent}>{t.heroTitleAccent}</span>
        </motion.h1>
        <motion.p className={styles.sub} variants={fadeUp} initial="hidden" animate="show" custom={2}>{t.heroSub}</motion.p>
        <motion.div className={styles.pills} variants={fadeUp} initial="hidden" animate="show" custom={3}>
          {solutions.map((s) => <span key={s} className={styles.pill}>{s}</span>)}
        </motion.div>
        <motion.div className={styles.ctas} variants={fadeUp} initial="hidden" animate="show" custom={4}>
          <Link to="/contact" className={styles.ctaPrimary}>{t.getInTouch}</Link>
          <Link to="/solutions" className={styles.ctaSecondary}>{t.exploreSolutions}</Link>
        </motion.div>
      </div>
    </section>
  )
}
