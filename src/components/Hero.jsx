import { useState, useEffect } from 'react'
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

const VIDEO_ID = 'qrQZiRbFj34'
const images = [img1, img2, img3, img4, img5, img6]
const TOTAL = 1 + images.length

export default function Hero() {
  const { t } = useLang()
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)

  const slideContent = [
    {
      eyebrow: t.slide0Eyebrow,
      title: t.slide0Title,
      accent: t.slide0Accent,
      sub: t.slide0Sub,
    },
    {
      eyebrow: t.slide1Eyebrow,
      title: t.slide1Title,
      accent: t.slide1Accent,
      sub: t.slide1Sub,
      isEvent: true,
      eventDate: t.slide1EventDate,
      eventTime: t.slide1EventTime,
      eventVenue: t.slide1EventVenue,
      eventCta: t.slide1EventCta,
      eventCtaHref: 'http://events.proxynetgroup.com/',
    },
    {
      eyebrow: t.slide2Eyebrow,
      title: t.slide2Title,
      accent: t.slide2Accent,
      sub: t.slide2Sub,
    },
    {
      eyebrow: t.slide3Eyebrow,
      title: t.slide3Title,
      accent: t.slide3Accent,
      sub: t.slide3Sub,
    },
    {
      eyebrow: t.slide4Eyebrow,
      title: t.slide4Title,
      accent: t.slide4Accent,
      sub: t.slide4Sub,
    },
    {
      eyebrow: t.slide5Eyebrow,
      title: t.slide5Title,
      accent: t.slide5Accent,
      sub: t.slide5Sub,
    },
    {
      eyebrow: t.slide6Eyebrow,
      title: t.slide6Title,
      accent: t.slide6Accent,
      sub: t.slide6Sub,
    },
  ]

  useEffect(() => {
    if (paused) return
    const duration = current === 0 ? 120000 : 6000
    const id = setInterval(() => {
      setDirection(1)
      setCurrent(p => (p + 1) % TOTAL)
    }, duration)
    return () => clearInterval(id)
  }, [current, paused])

  const go = (dir) => {
    setDirection(dir)
    setCurrent(p => (p + dir + TOTAL) % TOTAL)
  }

  const slide = slideContent[current] || slideContent[0]

  return (
    <section className={styles.hero} aria-label="Hero" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {/* Background */}
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

      {/* Arrows */}
      <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={() => go(-1)} aria-label="Previous slide">
        <ChevronLeft size={24} />
      </button>
      <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={() => go(1)} aria-label="Next slide">
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className={styles.slideDots} aria-hidden="true">
        {Array.from({ length: TOTAL }).map((_, i) => (
          <button key={i} className={`${styles.slideDot} ${i === current ? styles.slideDotActive : ''}`} onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }} />
        ))}
      </div>

      <div className={styles.blobBlue} aria-hidden="true" />
      <div className={styles.blobSky} aria-hidden="true" />

      {/* Content — changes with each slide */}
      <div className={styles.inner}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={styles.slideText}
          >
            <p className={`${styles.eyebrow} ${slide.isEvent ? styles.eyebrowEvent : ''}`}>{slide.eyebrow}</p>
            <h1 className={styles.title}>
              {slide.title} <span className={styles.accent}>{slide.accent}</span>
            </h1>
            <p className={styles.sub}>{slide.sub}</p>

            {slide.isEvent && (
              <div className={styles.eventMeta}>
                <span className={styles.eventTag}>📅 {slide.eventDate}</span>
                <span className={styles.eventTag}>🕙 {slide.eventTime}</span>
                <span className={styles.eventTag}>📍 {slide.eventVenue}</span>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {slide.isEvent ? (
            <>
              <a href={slide.eventCtaHref} target="_blank" rel="noopener noreferrer" className={styles.ctaPrimary}>{slide.eventCta}</a>
              <Link to="/contact" className={styles.ctaSecondary}>{t.getInTouch}</Link>
            </>
          ) : (
            <>
              <Link to="/contact" className={styles.ctaPrimary}>{t.getInTouch}</Link>
              <Link to="/solutions" className={styles.ctaSecondary}>{t.exploreSolutions}</Link>
            </>
          )}
        </motion.div>
      </div>
    </section>
  )
}
