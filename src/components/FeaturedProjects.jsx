import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import { useLang } from "../context/LanguageContext"
import img1 from "../assets/Picture1.jpg"
import img2 from "../assets/Picture2.png"
import img3 from "../assets/Picture1.png"
import img4 from "../assets/Picture4.jpg"
import img5 from "../assets/Picture5.png"
import img6 from "../assets/Picture6.png"
import img7 from "../assets/Picture7.png"
import styles from "./FeaturedProjects.module.css"

export default function FeaturedProjects() {
  const { t } = useLang()
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const projects = [
    { img: img1, client: 'UBA', solution: t.proj1Solution, category: t.proj1Category, outcome: t.proj1Outcome },
    { img: img2, client: 'Access Bank', solution: t.proj2Solution, category: t.proj2Category, outcome: t.proj2Outcome },
    { img: img3, client: 'Wigwe University Isiokpo', solution: t.proj3Solution, category: t.proj3Category, outcome: t.proj3Outcome },
    { img: img4, client: 'Access Bank, DIG', solution: t.proj4Solution, category: t.proj4Category, outcome: t.proj4Outcome },
    { img: img5, client: 'FCMB Lagos HQ', solution: t.proj5Solution, category: t.proj5Category, outcome: t.proj5Outcome },
    { img: img6, client: 'ePROCESS', solution: t.proj6Solution, category: t.proj6Category, outcome: t.proj6Outcome },
    { img: img7, client: 'NLNG', solution: t.proj7Solution, category: t.proj7Category, outcome: t.proj7Outcome },
  ]

  const total = projects.length
  const proj = projects[current]

  const variants = {
    enter: (d) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: (d) => ({ x: d > 0 ? -80 : 80, opacity: 0, transition: { duration: 0.25 } }),
  }

  useEffect(() => {
    const id = setInterval(() => go(1), 5000)
    return () => clearInterval(id)
  }, [current])

  const go = (dir) => {
    setDirection(dir)
    setCurrent((p) => (p + dir + total) % total)
  }

  return (
    <section className={styles.section} aria-labelledby="projects-heading">
      <div className={styles.inner}>
        <motion.div className={styles.header} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className={styles.eyebrow}>{t.projectsEyebrow}</p>
          <h2 id="projects-heading" className={styles.heading}>{t.projectsHeading}</h2>
        </motion.div>
        <motion.div className={styles.carousel} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
          <div className={styles.imgPane}>
            <AnimatePresence custom={direction} mode="wait">
              <motion.img key={current} src={proj.img} alt={proj.solution} className={styles.img} custom={direction} variants={variants} initial="enter" animate="center" exit="exit" />
            </AnimatePresence>
            <div className={styles.counter}>
              <span className={styles.counterCurrent}>{String(current + 1).padStart(2, "0")}</span>
              <span className={styles.counterSep}>/</span>
              <span className={styles.counterTotal}>{String(total).padStart(2, "0")}</span>
            </div>
          </div>
          <div className={styles.infoPane}>
            <AnimatePresence custom={direction} mode="wait">
              <motion.div key={current} custom={direction} variants={variants} initial="enter" animate="center" exit="exit" className={styles.info}>
                <span className={styles.category}>{proj.category}</span>
                <p className={styles.client}>{proj.client}</p>
                <h3 className={styles.solution}>{proj.solution}</h3>
                <p className={styles.outcome}>{proj.outcome}</p>
              </motion.div>
            </AnimatePresence>
            <div className={styles.controls}>
              <button className={styles.arrow} onClick={() => go(-1)} aria-label="Previous project"><ChevronLeft size={20} /></button>
              <div className={styles.dots}>
                {projects.map((_, i) => (
                  <button key={i} className={i === current ? styles.dotActive + " " + styles.dot : styles.dot} onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }} aria-label={"Project " + (i + 1)} />
                ))}
              </div>
              <button className={styles.arrow} onClick={() => go(1)} aria-label="Next project"><ChevronRight size={20} /></button>
            </div>
          </div>
        </motion.div>
        <div className={styles.ctas}>
          <Link to="/contact" className={styles.ctaPrimary}>{t.startAProject}</Link>
          <Link to="/case-studies" className={styles.ctaSecondary}>{t.viewCaseStudies}</Link>
        </div>
      </div>
    </section>
  )
}