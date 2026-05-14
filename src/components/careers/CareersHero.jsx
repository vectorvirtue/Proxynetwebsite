import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import SectionBlobs from '../SectionBlobs'
import img1 from '../../assets/annie-spratt-QckxruozjRg-unsplash.jpg'
import img2 from '../../assets/hack-capital-uv5_bsypFUM-unsplash.jpg'
import img3 from '../../assets/desola-lanre-ologun-kwzWjTnDPLk-unsplash.jpg'
import img4 from '../../assets/compagnons-Im_cQ6hQo10-unsplash.jpg'
import styles from './CareersHero.module.css'

const slides = [img1, img2, img3, img4]

export default function CareersHero() {
  const { t } = useLang()
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const id = setInterval(() => {
      setDirection(1)
      setCurrent(p => (p + 1) % slides.length)
    }, 5000)
    return () => clearInterval(id)
  }, [current])

  const go = (dir) => {
    setDirection(dir)
    setCurrent(p => (p + dir + slides.length) % slides.length)
  }

  return (
    <section className={styles.hero}>
      <SectionBlobs variant="dark" />
      {/* Carousel background — crossfade */}
      <div className={styles.slideBg} aria-hidden="true">
        <AnimatePresence mode="crossfade">
          <motion.img
            key={current}
            src={slides[current]}
            alt=""
            className={styles.slideImg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.2, ease: 'easeInOut' } }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
          />
        </AnimatePresence>
      </div>
      <div className={styles.overlay} />

      {/* Arrows */}
      <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={() => go(-1)} aria-label="Previous slide">
        <ChevronLeft size={22} />
      </button>
      <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={() => go(1)} aria-label="Next slide">
        <ChevronRight size={22} />
      </button>

      {/* Dots */}
      <div className={styles.dots} aria-hidden="true">
        {slides.map((_, i) => (
          <button key={i} className={`${styles.dot} ${i === current ? styles.dotActive : ''}`} onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }} />
        ))}
      </div>

      <div className={styles.inner}>
        <motion.nav className={styles.breadcrumb} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} aria-label="Breadcrumb">
          <Link to="/" className={styles.crumb}>{t.home}</Link>
          <ChevronRight size={14} className={styles.sep} />
          <span className={styles.crumbActive}>{t.careers}</span>
        </motion.nav>

        <motion.h1 className={styles.title} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          Build the Future of Technology in West Africa
        </motion.h1>

        <motion.p className={styles.sub} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          Join a team of engineers, innovators, and problem-solvers delivering world-class technology infrastructure across Africa.
        </motion.p>

        <motion.div className={styles.ctas} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
          <a href="#roles" className={styles.primary}>{t.viewOpenRoles}</a>
          <a href="#life" className={styles.secondary}>{t.learnAboutCulture}</a>
        </motion.div>
      </div>
    </section>
  )
}
