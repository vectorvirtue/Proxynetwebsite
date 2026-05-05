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

const slideContent = [
  {
    eyebrow: 'Enterprise Technology Solutions',
    title: 'Powering Africa\'s',
    accent: 'Digital Future',
    sub: 'World-class connectivity, infrastructure, and managed services for businesses across Africa — built for reliability, designed for growth.',
  },
  {
    eyebrow: 'Upcoming Event — May 6, 2026',
    title: 'Huawei IdeaHub S3',
    accent: 'Launch',
    sub: 'Experience the Future of Smart Collaboration. Join us at Four Points by Sheraton, VI, Lagos. 10:00AM WAT.',
    isEvent: true,
    eventDate: 'May 6, 2026',
    eventTime: '10:00AM WAT',
    eventVenue: 'Four Points by Sheraton, VI, Lagos',
    eventCta: 'Register Now',
    eventCtaHref: 'http://events.proxynetgroup.com/',
  },
  {
    eyebrow: 'Smart School Solutions',
    title: 'Empowering the Next',
    accent: 'Generation of Talent',
    sub: 'Proxynet EdTech delivers smart classrooms, digital literacy programmes, and ICT infrastructure to schools across West Africa.',
  },
  {
    eyebrow: 'NOC & Command Centres',
    title: 'Real-Time Monitoring',
    accent: 'at Scale',
    sub: 'From 15-display NOC solutions to full command centres — we design and deploy infrastructure that keeps your operations visible.',
  },
  {
    eyebrow: 'Systems Integration',
    title: 'Technology That',
    accent: 'Works Together',
    sub: 'We connect your hardware, software, and networks into one seamless system — eliminating silos and driving operational efficiency.',
  },
  {
    eyebrow: 'AV & Videowall Solutions',
    title: 'Displays That',
    accent: 'Command Attention',
    sub: 'From boardroom videowalls to large-scale event AV — we design, deploy, and support world-class display solutions.',
  },
  {
    eyebrow: 'Cybersecurity',
    title: 'Protecting Your',
    accent: 'Infrastructure',
    sub: 'Firewalls, intrusion detection, VPNs, and disaster recovery — we secure your business from threats inside and out.',
  },
]

export default function Hero() {
  const { t } = useLang()
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)

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
