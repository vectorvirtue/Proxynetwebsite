import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, X, Calendar, MapPin, ArrowRight, Images } from 'lucide-react'
import FilterDropdown from '../components/FilterDropdown'
import SEO from '../components/SEO'
import SectionBlobs from '../components/SectionBlobs'
import { useLang } from '../context/LanguageContext'
import styles from './Events.module.css'

// All event images served from /public/events/ — not bundled into JS
const E = (file) => `/events/${file}`

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
        { src: E('breakfast-session-with-proxynet-and-comforte-at-radisson-blue.jpg'),  caption: t.event1PhotoCaption },
        { src: E('breakfast-session-with-proxynet-and-comforte-at-radisson-blue2.jpg'), caption: t.event1PhotoCaption },
        { src: E('breakfast-session-with-proxynet-and-comforte-at-radisson-blue3.jpg'), caption: t.event1PhotoCaption },
        { src: E('breakfast-session-with-proxynet-and-comforte-at-radisson-blue4.jpg'), caption: t.event1PhotoCaption },
      ],
      featured: true,
      desc: t.event1Desc,
    },
    {
      id: 'huawei-portharcourt',
      name: t.event2Name,
      venue: t.event2Venue,
      year: '2025',
      category: t.event2Category,
      photos: [
        { src: E('huawei.jpg'),                      caption: t.event2PhotoCaption },
        { src: E('huawei2.jpg'),                     caption: t.event2PhotoCaption },
        { src: E('huaweiportharcourtexperience.jpg'), caption: t.event2PhotoCaption },
      ],
      featured: true,
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
    {
      id: 'gitex-kenya',
      name: t.gitexKenyaName,
      venue: t.gitexKenyaVenue,
      year: '2025',
      category: t.gitexKenyaCategory,
      photos: [
        { src: E('grouppicturegitexkenya.jpg'), caption: t.gitexKenyaPhotoCaption }
      ],
      featured: true,
      desc: t.gitexKenyaDesc,
    },
    {
      id: 'robo-xplore-original',
      name: t.roboXplore1Name,
      venue: t.roboXplore1Venue,
      year: '2026',
      category: t.roboXplore1Category,
      date: t.roboXplore1Date,
      photos: [
        { src: E('roboexplore1.jpg'), caption: t.roboXplore1Name }
      ],
      featured: true,
      desc: t.roboXplore1Desc,
    },
    {
      id: 'robo-xplore-2026',
      name: t.roboXplore2Name,
      venue: t.roboXplore2Venue,
      year: '2026',
      category: t.roboXplore2Category,
      date: t.roboXplore2Date,
      photos: [
        { src: E('roboexplore-2-group.jpg'), caption: t.roboXplore2Name }
      ],
      featured: true,
      desc: t.roboXplore2Desc,
    },
    {
      id: 'unilumin-led-training',
      name: t.uniluminLedTrainingName,
      venue: t.uniluminLedTrainingVenue,
      year: '2026',
      category: t.uniluminLedTrainingCategory,
      date: t.uniluminLedTrainingDate,
      photos: [
        { src: E('uniluminledtraininggroup.jpg'), caption: t.uniluminLedTrainingName }
      ],
      featured: true,
      desc: t.uniluminLedTrainingDesc,
    },
    {
      id: 'zenith-tech-fair',
      name: t.zenithTechFairName,
      venue: t.zenithTechFairVenue,
      year: '2025',
      category: t.zenithTechFairCategory,
      photos: [
        { src: E('zenith-tech-fair-group-photo.jpg'), caption: t.zenithTechFairName }
      ],
      featured: true,
      desc: t.zenithTechFairDesc,
    },
    {
      id: 'beyondtrust-event',
      name: t.beyondTrustEventName,
      venue: t.beyondTrustEventVenue,
      year: '2025',
      category: t.beyondTrustEventCategory,
      date: t.beyondTrustEventDate,
      photos: [
        { src: E('beyond-trust-group.jpg'), caption: t.beyondTrustEventName }
      ],
      featured: true,
      desc: t.beyondTrustEventDesc,
    },
    {
      id: 'huawei-clearance-sales',
      name: t.huaweiClearanceName,
      venue: t.huaweiClearanceVenue,
      year: '2025',
      category: t.huaweiClearanceCategory,
      photos: [],
      featured: true,
      desc: t.huaweiClearanceDesc,
    },
    {
      id: 'gitex-nigeria-day1',
      name: t.gitexNigeriaDay1Name,
      venue: t.gitexNigeriaDay1Venue,
      year: '2025',
      category: t.gitexNigeriaDay1Category,
      date: t.gitexNigeriaDay1Date,
      photos: [
        { src: E('gitex-nigeria-2025-team-photo.jpg'), caption: t.gitexNigeriaDay1Name }
      ],
      featured: true,
      desc: t.gitexNigeriaDay1Desc,
    },
    {
      id: 'proxynet-unilumin-experience',
      name: t.proxynetUniluminExpName,
      venue: t.proxynetUniluminExpVenue,
      year: '2026',
      category: t.proxynetUniluminExpCategory,
      date: t.proxynetUniluminExpDate,
      photos: [
        { src: E('unilumin-experience-team-photo.jpg'),         caption: t.proxynetUniluminExpName },
        { src: E('whatsapp-image-2026-07-31-at-10.29.08-1-.jpeg'), caption: t.proxynetUniluminExpName },
        { src: E('whatsapp-image-2026-07-31-at-10.29.08-2-.jpeg'), caption: t.proxynetUniluminExpName },
        { src: E('whatsapp-image-2026-07-31-at-10.29.08.jpeg'),    caption: t.proxynetUniluminExpName },
      ],
      featured: true,
      desc: t.proxynetUniluminExpDesc,
    },
    {
      id: 'huawei-s3-launch',
      name: t.huaweiS3LaunchName,
      venue: t.huaweiS3LaunchVenue,
      year: '2026',
      category: t.huaweiS3LaunchCategory,
      date: t.huaweiS3LaunchDate,
      photos: [
        { src: E('huawei-s3-launch-group.jpg'), caption: t.huaweiS3LaunchName }
      ],
      featured: true,
      desc: t.huaweiS3LaunchDesc,
    },
    {
      id: 'huawei-ideahub-s3-abuja',
      name: t.huaweiS3AbujaName,
      venue: t.huaweiS3AbujaVenue,
      year: '2026',
      category: t.huaweiS3AbujaCategory,
      date: t.huaweiS3AbujaDate,
      photos: [
        { src: E('huawei-ideahub-s3-launch-abuja.jpg'), caption: t.huaweiS3AbujaName }
      ],
      featured: true,
      desc: t.huaweiS3AbujaDesc,
    },
    {
      id: 'huawei-2025-experience',
      name: t.huawei2025ExpName,
      venue: t.huawei2025ExpVenue,
      year: '2025',
      category: t.huawei2025ExpCategory,
      date: t.huawei2025ExpDate,
      photos: [
        { src: E('huawei-2025.jpg'), caption: t.huawei2025ExpName }
      ],
      featured: true,
      desc: t.huawei2025ExpDesc,
    },
    {
      id: 'yealink-event',
      name: t.yealinkEventName,
      venue: t.yealinkEventVenue,
      year: '2025',
      category: t.yealinkEventCategory,
      photos: [
        { src: E('yealink-event-group.jpg'), caption: t.yealinkEventName }
      ],
      featured: true,
      desc: t.yealinkEventDesc,
    },
  ]

  const placeholder = E('thankyouimage2.jpg.jpg')

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
  const [lightbox, setLightbox] = useState(null)

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
          <SectionBlobs variant="dark" />
          <div className={styles.overlay} />
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

        {/* Featured / Recent Highlights */}
        <section className={styles.section}>
          <div className={styles.inner}>
            <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={styles.eyebrowBlue}>{t.eventsFeaturedEyebrow}</p>
              <h2 className={styles.heading}>{t.eventsFeaturedHeading}</h2>
            </motion.div>
            <div className={styles.featuredGrid}>
              {events.filter(e => e.featured).map((e, i) => (
                <motion.div key={e.id} className={styles.featuredCard} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}>
                  <div className={styles.featuredImgWrap} onClick={e.photos.length > 0 ? () => openLightbox(e.photos[0]) : undefined}>
                    <img
                      src={e.photos.length > 0 ? e.photos[0].src : placeholder}
                      alt={e.name}
                      className={styles.featuredImg}
                      loading="lazy"
                      decoding="async"
                    />
                    {e.photos.length > 0 && (
                      <div className={styles.featuredImgOverlay}>
                        <span className={styles.viewPhotos}>{e.photos.length} {t.eventsPhotos}</span>
                      </div>
                    )}
                  </div>
                  <div className={styles.featuredBody}>
                    <span className={styles.eventCategory}>{e.category}</span>
                    <h3 className={styles.eventName}>{e.name}</h3>
                    <div className={styles.eventMeta}>
                      <MapPin size={13} /><span className={styles.metaItem}>{e.venue}</span>
                      <Calendar size={13} /><span className={styles.metaItem}>{e.date || e.year}</span>
                    </div>
                    <p className={styles.eventDesc}>{e.desc}</p>
                    <a href="#gallery" className={styles.viewGalleryBtn}>
                      <Images size={15} /> {t.eventsViewGallery}
                    </a>
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

            <div className={styles.filters}>
              <FilterDropdown label={t.eventsFilterCategory} options={categories} value={activeFilter} onChange={setActiveFilter} />
              <FilterDropdown label={t.eventsFilterYear}     options={years}      value={activeYear}   onChange={setActiveYear} />
              {(activeFilter || activeYear) && (
                <button className={styles.clearBtn} onClick={() => { setActiveFilter(null); setActiveYear(null) }}>
                  <X size={13} /> {t.eventsClear}
                </button>
              )}
            </div>

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
                    transition={{ duration: 0.3, delay: (i % 9) * 0.04 }}
                    onClick={() => openLightbox(photo)}
                  >
                    <img src={photo.src} alt={photo.caption} className={styles.galleryImg} loading="lazy" decoding="async" />
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
              <img src={lightbox.src} alt={lightbox.caption} className={styles.lightboxImg} loading="lazy" decoding="async" />
              {lightbox.caption && <p className={styles.lightboxCaption}>{lightbox.caption}</p>}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
