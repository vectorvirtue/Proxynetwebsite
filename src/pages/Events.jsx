import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, X, Calendar, MapPin, ArrowRight, Images } from 'lucide-react'
import FilterDropdown from '../components/FilterDropdown'
import SEO from '../components/SEO'
import SectionBlobs from '../components/SectionBlobs'
import { useLang } from '../context/LanguageContext'
import breakfast1 from '../assets/BREAKFAST SESSION WITH PROXYNET AND COMFORTE AT RADISSON BLUE.jpg'
import breakfast2 from '../assets/BREAKFAST SESSION WITH PROXYNET AND COMFORTE AT RADISSON BLUE2.jpg'
import breakfast3 from '../assets/BREAKFAST SESSION WITH PROXYNET AND COMFORTE AT RADISSON BLUE3.jpg'
import breakfast4 from '../assets/BREAKFAST SESSION WITH PROXYNET AND COMFORTE AT RADISSON BLUE4.jpg'
import huawei1 from '../assets/huawei.jpg'
import huawei2 from '../assets/huawei2.jpg'
import huaweiPH from '../assets/huaweiportharcourtexperience.jpg'
import styles from './Events.module.css'

export default function Events() {
  const { t } = useLang()

  const events = [
    {
      id: 'comforte-breakfast',
      name: t.event1Name,
      venue: t.event1Venue,
      year: '2024',
      category: t.event1Category,
      photos: [
        { src: breakfast1, caption: t.event1PhotoCaption },
        { src: breakfast2, caption: t.event1PhotoCaption },
        { src: breakfast3, caption: t.event1PhotoCaption },
        { src: breakfast4, caption: t.event1PhotoCaption },
      ],
      featured: false,
      desc: t.event1Desc,
    },
    {
      id: 'huawei-portharcourt',
      name: t.event2Name,
      venue: t.event2Venue,
      year: '2025',
      category: t.event2Category,
      photos: [
        { src: huawei1,  caption: t.event2PhotoCaption },
        { src: huawei2,  caption: t.event2PhotoCaption },
        { src: huaweiPH, caption: t.event2PhotoCaption },
      ],
      featured: false,
      desc: t.event2Desc,
    },
    {
      id: 'unilumin-lagos-2026',
      name: t.event3Name,
      venue: t.event3Venue,
      year: '2026',
      category: t.event3Category,
      photos: [],
      featured: true,
      theme: t.event3Theme,
      date: t.event3Date,
      desc: t.event3Desc,
    },
  ]

  const upcomingEvents = [
    {
      name: t.upcoming1Name,
      date: t.upcoming1Date,
      venue: t.upcoming1Venue,
      desc: t.upcoming1Desc,
      category: t.upcoming1Category,
    },
    {
      name: t.upcoming2Name,
      date: t.upcoming2Date,
      venue: t.upcoming2Venue,
      desc: t.upcoming2Desc,
      category: t.upcoming2Category,
      audience: t.upcoming2Audience,
      registerUrl: 'https://events.proxynetgroup.com',
    },
  ]
  const [activeFilter, setActiveFilter] = useState(null)
  const [activeYear, setActiveYear] = useState(null)
  const [lightbox, setLightbox] = useState(null) // { src, caption }

  const categories = [...new Set(events.map(e => e.category))]
  const years = [...new Set(events.map(e => e.year))].sort((a, b) => b - a)

  const filtered = events.filter(e =>
    (!activeFilter || e.category === activeFilter) &&
    (!activeYear || e.year === activeYear)
  )

  const allPhotos = filtered.flatMap(e => e.photos)

  const openLightbox = (photo) => setLightbox(photo)
  const closeLightbox = () => setLightbox(null)

  return (
    <>
      <SEO
        title="Events — Where Technology Meets Community | Proxynet"
        description="Proxynet Group events — product launches, partner summits, and community engagements across West Africa. View our photo gallery and register for upcoming events."
        canonical="/events"
      />
      <main>
        {/* Hero */}
        <section className={`${styles.hero} heroScene`}>
          <SectionBlobs variant="dark" />     <div className={styles.overlay} />
          <div className={styles.heroInner}>
            <motion.nav className={styles.breadcrumb} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <Link to="/" className={styles.crumb}>{t.home}</Link>
              <ChevronRight size={14} className={styles.sep} />
              <span className={styles.crumbActive}>{t.eventsNav}</span>
            </motion.nav>
            <motion.p className={styles.eyebrow} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}>
              {t.eventsEyebrow}
            </motion.p>
            <motion.h1 className={styles.heroTitle} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              {t.eventsHeroTitle}
            </motion.h1>
            <motion.p className={styles.heroSub} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              {t.eventsHeroSub}
            </motion.p>
            <motion.div className={styles.heroCtas} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <a href="https://events.proxynetgroup.com" target="_blank" rel="noopener noreferrer" className={styles.primary}>{t.eventsRegisterNext}</a>
              <a href="#gallery" className={styles.secondary}>{t.eventsViewGallery}</a>
            </motion.div>
          </div>
        </section>

        {/* Featured events */}
        <section className={styles.section}>
          <div className={styles.inner}>
            <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={styles.eyebrowBlue}>{t.eventsFeaturedEyebrow}</p>
              <h2 className={styles.heading}>{t.eventsFeaturedHeading}</h2>
            </motion.div>
            <div className={styles.featuredGrid}>
              {events.filter(e => e.featured).map((e, i) => (
                <motion.div key={e.id} className={styles.featuredCard} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                  {e.photos.length > 0 ? (
                    <div className={styles.featuredImgWrap} onClick={() => openLightbox(e.photos[0])}>
                      <img src={e.photos[0].src} alt={e.name} className={styles.featuredImg} />
                      <div className={styles.featuredImgOverlay}>
                        <span className={styles.viewPhotos}>{e.photos.length} {t.eventsPhotos}</span>
                      </div>
                    </div>
                  ) : (
                    <div className={styles.featuredImgPlaceholder}>
                      <Images size={40} className={styles.placeholderIcon} />
                      <p className={styles.placeholderText}>{t.csGalleryComingSoon}</p>
                      {e.theme && <p className={styles.placeholderTheme}>Theme: {e.theme}</p>}
                      {e.date && <p className={styles.placeholderDate}><Calendar size={14} /> {e.date}</p>}
                    </div>
                  )}
                  <div className={styles.featuredBody}>
                    <span className={styles.eventCategory}>{e.category}</span>
                    <h3 className={styles.eventName}>{e.name}</h3>
                    <div className={styles.eventMeta}>
                      <MapPin size={13} /><span className={styles.metaItem}>{e.venue}</span>
                      <Calendar size={13} /><span className={styles.metaItem}>{e.date || e.year}</span>
                    </div>
                    <p className={styles.eventDesc}>{e.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo gallery */}
        <section id="gallery" className={styles.sectionAlt}>
          <div className={styles.inner}>
            <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={styles.eyebrowBlue}>{t.eventsGalleryEyebrow}</p>
              <h2 className={styles.heading}>{t.eventsGalleryHeading}</h2>
            </motion.div>

            {/* Dropdown filters */}
            <div className={styles.filters}>
              <FilterDropdown label={t.eventsFilterCategory} options={categories} value={activeFilter} onChange={setActiveFilter} />
              <FilterDropdown label={t.eventsFilterYear}     options={years}      value={activeYear}   onChange={setActiveYear} />
              {(activeFilter || activeYear) && (
                <button className={styles.clearBtn} onClick={() => { setActiveFilter(null); setActiveYear(null) }}>
                  <X size={13} /> {t.eventsClear}
                </button>
              )}
            </div>

            {/* Grid */}
            <div className={styles.galleryGrid}>
              <AnimatePresence mode="popLayout">
                {allPhotos.map((photo, i) => (
                  <motion.div
                    key={`${photo.src}-${i}`}
                    layout
                    className={styles.galleryItem}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    onClick={() => openLightbox(photo)}
                  >
                    <img src={photo.src} alt={photo.caption} className={styles.galleryImg} loading="lazy" />
                    <div className={styles.galleryOverlay}>
                      <p className={styles.galleryCaption}>{photo.caption}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Upcoming events */}
        <section id="upcoming" className={styles.sectionDark}>
          <div className={styles.inner}>
            <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={styles.eyebrowLight}>{t.eventsUpcomingEyebrow}</p>
              <h2 className={styles.headingLight}>{t.eventsUpcomingHeading}</h2>
            </motion.div>
            <div className={styles.upcomingGrid}>
              {upcomingEvents.map((e, i) => (
                <motion.div key={e.name} className={styles.upcomingCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                  <span className={styles.upcomingCategory}>{e.category}</span>
                  <h3 className={styles.upcomingName}>{e.name}</h3>
                  <div className={styles.upcomingMeta}>
                    <span className={styles.upcomingMetaItem}><Calendar size={14} />{e.date}</span>
                    <span className={styles.upcomingMetaItem}><MapPin size={14} />{e.venue}</span>
                    {e.audience && <span className={styles.upcomingMetaItem}>👦 {e.audience}</span>}
                  </div>
                  <p className={styles.upcomingDesc}>{e.desc}</p>
                  <a href={e.registerUrl || 'https://events.proxynetgroup.com'} target="_blank" rel="noopener noreferrer" className={styles.registerBtn}>{t.eventsRegisterInterest} <ArrowRight size={15} /></a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.section}>
          <div className={styles.inner}>
            <motion.div className={styles.ctaBlock} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <SectionBlobs variant="dark" />
              <p className={styles.ctaEyebrow}>{t.eventsCtaEyebrow}</p>
              <h2 className={styles.ctaHeading}>{t.eventsCtaHeading}</h2>
              <p className={styles.ctaSub}>{t.eventsCtaSub}</p>
              <div className={styles.ctaBtns}>
                <a href="https://events.proxynetgroup.com" target="_blank" rel="noopener noreferrer" className={styles.ctaPrimary}>{t.eventsCtaPrimary}</a>
                <a href="https://www.linkedin.com/company/proxynet-communications" target="_blank" rel="noopener noreferrer" className={styles.ctaSecondary}>{t.eventsCtaSecondary}</a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div className={styles.lightboxBackdrop} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeLightbox}>
            <motion.div className={styles.lightboxContent} initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.92, opacity: 0 }} onClick={e => e.stopPropagation()}>
              <button className={styles.lightboxClose} onClick={closeLightbox} aria-label="Close"><X size={22} /></button>
              <img src={lightbox.src} alt={lightbox.caption} className={styles.lightboxImg} />
              {lightbox.caption && <p className={styles.lightboxCaption}>{lightbox.caption}</p>}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

