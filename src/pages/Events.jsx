import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, X, Play, Calendar, MapPin, ArrowRight, Image } from 'lucide-react'
import SEO from '../components/SEO'
import { useLang } from '../context/LanguageContext'
import idehubImg from '../assets/idehub.jpg'
import styles from './Events.module.css'

// ── Event data ────────────────────────────────────────────────────────────────
const events = [
  {
    id: 1,
    name: 'Huawei IdeaHub S3 Nigeria Launch',
    year: '2026',
    date: 'May 6, 2026',
    location: 'Four Points by Sheraton, Victoria Island, Lagos',
    description: 'Proxynet Communications hosted the official Nigerian launch of the Huawei IdeaHub S3 — an all-in-one smart collaboration board for modern meeting rooms.',
    photos: [
      { src: idehubImg, caption: 'IdeaHub S3 launch at Four Points by Sheraton, Lagos' },
    ],
    videoId: null,
    tags: ['Product Launch', '2026'],
  },
  {
    id: 2,
    name: 'Maxhub V6 Nigeria Launch',
    year: '2025',
    date: 'TBC 2025',
    location: 'Radisson Blu, Lagos',
    description: 'The official Nigerian launch of the Maxhub V6 interactive display series, hosted by Proxynet Group at Radisson Blu, Lagos.',
    photos: [],
    videoId: null,
    tags: ['Product Launch', '2025'],
  },
  {
    id: 3,
    name: 'Comforte Breakfast Session',
    year: '2025',
    date: 'TBC 2025',
    location: 'Lagos, Nigeria',
    description: 'An executive breakfast session with Comforte, exploring data security and tokenisation solutions for financial services organisations across West Africa.',
    photos: [],
    videoId: null,
    tags: ['Partner Event', '2025'],
  },
  {
    id: 4,
    name: 'Samsung B2B Summit',
    year: '2024',
    date: 'TBC 2024',
    location: 'Lagos, Nigeria',
    description: 'Proxynet participated in the Samsung B2B Summit, showcasing the latest Samsung commercial display and AV solutions for enterprise clients.',
    photos: [],
    videoId: null,
    tags: ['Partner Event', '2024'],
  },
]

const upcomingEvents = [
  {
    name: 'Proxynet Technology Forum 2026',
    date: 'Q3 2026',
    location: 'Lagos, Nigeria',
    description: 'Our annual technology forum bringing together enterprise IT leaders, partners, and innovators from across West Africa.',
    registrationOpen: false,
  },
]

const allTags = ['All', ...new Set(events.flatMap(e => e.tags))]

// ── Lightbox ──────────────────────────────────────────────────────────────────
function Lightbox({ photo, onClose }) {
  return (
    <motion.div
      className={styles.lightboxOverlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className={styles.lightboxInner}
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        onClick={e => e.stopPropagation()}
      >
        <button className={styles.lightboxClose} onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>
        <img src={photo.src} alt={photo.caption} className={styles.lightboxImg} />
        {photo.caption && <p className={styles.lightboxCaption}>{photo.caption}</p>}
      </motion.div>
    </motion.div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Events() {
  const { t } = useLang()
  const [activeTag, setActiveTag] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = activeTag === 'All' ? events : events.filter(e => e.tags.includes(activeTag))
  const allPhotos = filtered.flatMap(e => e.photos.map(p => ({ ...p, event: e.name })))

  return (
    <>
      <SEO
        title={t.eventsPageTitle}
        description={t.eventsPageDesc}
        canonical="/events"
      />
      <main>
        {/* Hero */}
        <section className={`${styles.hero} heroScene`}>
          <div className={styles.heroOverlay} />
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
              <a href="#upcoming" className={styles.primary}>{t.eventsCtaRegister}</a>
              <a href="#gallery" className={styles.secondary}>{t.eventsCtaGallery}</a>
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
              {events.map((ev, i) => (
                <motion.div key={ev.id} className={styles.featuredCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}>
                  <div className={styles.featuredImgWrap}>
                    {ev.photos.length > 0 ? (
                      <img src={ev.photos[0].src} alt={ev.name} className={styles.featuredImg} />
                    ) : (
                      <div className={styles.featuredImgPlaceholder}>
                        <Image size={32} className={styles.placeholderIcon} />
                        <span>{t.eventsPhotosComingSoon}</span>
                      </div>
                    )}
                    <div className={styles.featuredTags}>
                      {ev.tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
                    </div>
                  </div>
                  <div className={styles.featuredBody}>
                    <h3 className={styles.featuredName}>{ev.name}</h3>
                    <div className={styles.featuredMeta}>
                      <span className={styles.metaItem}><Calendar size={13} />{ev.date}</span>
                      <span className={styles.metaItem}><MapPin size={13} />{ev.location}</span>
                    </div>
                    <p className={styles.featuredDesc}>{ev.description}</p>
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

            {/* Filter pills */}
            <div className={styles.filterRow}>
              {allTags.map(tag => (
                <button key={tag} className={`${styles.pill} ${activeTag === tag ? styles.pillActive : ''}`} onClick={() => setActiveTag(tag)}>
                  {tag}
                </button>
              ))}
            </div>

            {/* Photo grid */}
            <div className={styles.galleryGrid}>
              <AnimatePresence mode="popLayout">
                {allPhotos.length > 0 ? allPhotos.map((photo, i) => (
                  <motion.button
                    key={`${photo.event}-${i}`}
                    layout
                    className={styles.galleryItem}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    onClick={() => setLightbox(photo)}
                    aria-label={`View photo: ${photo.caption}`}
                  >
                    <img src={photo.src} alt={photo.caption} className={styles.galleryImg} loading="lazy" />
                    <div className={styles.galleryOverlay}>
                      <span className={styles.galleryEventName}>{photo.event}</span>
                    </div>
                  </motion.button>
                )) : (
                  <motion.div key="empty" className={styles.galleryEmpty} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <Image size={40} className={styles.emptyIcon} />
                    <p>{t.eventsGalleryEmpty}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Video highlights */}
        <section className={styles.sectionDark}>
          <div className={styles.inner}>
            <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={styles.eyebrowLight}>{t.eventsVideoEyebrow}</p>
              <h2 className={styles.headingLight}>{t.eventsVideoHeading}</h2>
            </motion.div>
            <div className={styles.videoGrid}>
              {/* IdeaHub S3 launch — YouTube embed placeholder */}
              <motion.div className={styles.videoCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <div className={styles.videoPlaceholder}>
                  <Play size={40} className={styles.playIcon} />
                  <p className={styles.videoComingSoon}>{t.eventsVideoComingSoon}</p>
                </div>
                <p className={styles.videoTitle}>Huawei IdeaHub S3 Nigeria Launch Highlights</p>
              </motion.div>
              <motion.div className={styles.videoCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                <div className={styles.videoPlaceholder}>
                  <Play size={40} className={styles.playIcon} />
                  <p className={styles.videoComingSoon}>{t.eventsVideoComingSoon}</p>
                </div>
                <p className={styles.videoTitle}>Samsung B2B Summit — Proxynet Showcase</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Upcoming events */}
        <section id="upcoming" className={styles.section}>
          <div className={styles.inner}>
            <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={styles.eyebrowBlue}>{t.eventsUpcomingEyebrow}</p>
              <h2 className={styles.heading}>{t.eventsUpcomingHeading}</h2>
            </motion.div>
            <div className={styles.upcomingList}>
              {upcomingEvents.map((ev, i) => (
                <motion.div key={ev.name} className={styles.upcomingCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
                  <div className={styles.upcomingLeft}>
                    <h3 className={styles.upcomingName}>{ev.name}</h3>
                    <div className={styles.upcomingMeta}>
                      <span className={styles.metaItem}><Calendar size={13} />{ev.date}</span>
                      <span className={styles.metaItem}><MapPin size={13} />{ev.location}</span>
                    </div>
                    <p className={styles.upcomingDesc}>{ev.description}</p>
                  </div>
                  <div className={styles.upcomingRight}>
                    {ev.registrationOpen ? (
                      <Link to="/contact" className={styles.registerBtn}>{t.eventsRegister} <ArrowRight size={15} /></Link>
                    ) : (
                      <span className={styles.comingSoonBadge}>{t.eventsRegistrationSoon}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div className={styles.ctaBlock} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={styles.ctaEyebrow}>{t.eventsCtaEyebrow}</p>
              <h2 className={styles.ctaHeading}>{t.eventsCtaHeading}</h2>
              <p className={styles.ctaSub}>{t.eventsCtaSub}</p>
              <Link to="/contact" className={styles.ctaBtn}>{t.eventsCtaContact} <ArrowRight size={16} /></Link>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && <Lightbox photo={lightbox} onClose={() => setLightbox(null)} />}
      </AnimatePresence>
    </>
  )
}