import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, X, Calendar, MapPin, ArrowLeft, Download } from 'lucide-react'
import SEO from '../components/SEO'
import { useLang } from '../context/LanguageContext'
import { getEvents, PLACEHOLDER } from '../data/events'
import styles from './EventGallery.module.css'

export default function EventGallery() {
  const { eventId } = useParams()
  const { t } = useLang()
  const navigate = useNavigate()
  const events = getEvents(t)
  const event = events.find(e => e.id === eventId)

  const [lightbox, setLightbox] = useState(null) // { src, caption, index }

  if (!event) {
    return (
      <main className={styles.notFound}>
        <h1>Event not found</h1>
        <Link to="/events" className={styles.backBtn}><ArrowLeft size={16} /> Back to Events</Link>
      </main>
    )
  }

  const hero = event.photos.length > 0 ? event.photos[0].src : PLACEHOLDER
  const photos = event.photos.length > 0 ? event.photos : [{ src: PLACEHOLDER, caption: event.name }]

  const openLightbox = (photo, index) => setLightbox({ ...photo, index })
  const closeLightbox = () => setLightbox(null)
  const prevPhoto = () => setLightbox(lb => {
    const i = (lb.index - 1 + photos.length) % photos.length
    return { ...photos[i], index: i }
  })
  const nextPhoto = () => setLightbox(lb => {
    const i = (lb.index + 1) % photos.length
    return { ...photos[i], index: i }
  })

  return (
    <>
      <SEO
        title={`${event.name} — Events | Proxynet`}
        description={event.desc}
        canonical={`/events/${event.id}`}
      />
      <main>
        {/* Hero */}
        <section className={styles.hero} style={{ backgroundImage: `url(${hero})` }}>
          <div className={styles.heroOverlay} />
          <div className={styles.heroInner}>
            <motion.nav
              className={styles.breadcrumb}
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            >
              <Link to="/" className={styles.crumb}>Home</Link>
              <ChevronRight size={13} className={styles.sep} />
              <Link to="/events" className={styles.crumb}>Events</Link>
              <ChevronRight size={13} className={styles.sep} />
              <span className={styles.crumbActive}>{event.name}</span>
            </motion.nav>

            <motion.span
              className={styles.categoryBadge}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }}
            >
              {event.category}
            </motion.span>

            <motion.h1
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            >
              {event.name}
            </motion.h1>

            <motion.div
              className={styles.heroMeta}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            >
              {(event.date || event.year) && (
                <span><Calendar size={14} />{event.date || event.year}</span>
              )}
              {event.venue && (
                <span><MapPin size={14} />{event.venue}</span>
              )}
            </motion.div>

            <motion.button
              className={styles.viewGalleryBtn}
              onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            >
              View Gallery
            </motion.button>
          </div>

      
        </section>

        {/* Event info bar */}
        <div className={styles.infoBar}>
          <div className={styles.infoBarInner}>
            <div className={styles.infoBarLeft}>
              <p className={styles.infoBarTitle}>{event.name}</p>
              {event.venue && <p className={styles.infoBarVenue}>{event.venue}</p>}
            </div>
            <button className={styles.backBtn} onClick={() => navigate('/events')}>
              <ArrowLeft size={15} /> Back to Events
            </button>
          </div>
        </div>

        {/* Description */}
        {event.desc && (
          <section className={styles.descSection}>
            <div className={styles.inner}>
              <p className={styles.desc}>{event.desc}</p>
            </div>
          </section>
        )}

        {/* Photo Grid */}
        <section id="gallery" className={styles.gallerySection}>
          <div className={styles.inner}>
            <div className={styles.galleryGrid}>
              {photos.map((photo, i) => (
                <motion.div
                  key={i}
                  className={`${styles.galleryItem} ${i === 0 ? styles.galleryItemFeatured : ''}`}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: (i % 6) * 0.06 }}
                  onClick={() => openLightbox(photo, i)}
                >
                  <img
                    src={photo.src}
                    alt={photo.caption || event.name}
                    className={styles.galleryImg}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                  <div className={styles.galleryOverlay}>
                    <Download size={18} className={styles.overlayIcon} />
                  </div>
                </motion.div>
              ))}
            </div>

            {photos.length === 1 && event.photos.length === 0 && (
              <p className={styles.noPhotosNote}>More photos coming soon.</p>
            )}
          </div>
        </section>

        {/* Back CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.inner}>
            <Link to="/events" className={styles.ctaBack}>
              <ArrowLeft size={16} /> View All Events
            </Link>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className={styles.lightboxBackdrop}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className={styles.lightboxContent}
              initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.92, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <button className={styles.lightboxClose} onClick={closeLightbox} aria-label="Close"><X size={22} /></button>
              {photos.length > 1 && (
                <>
                  <button className={styles.lightboxPrev} onClick={prevPhoto} aria-label="Previous">&#8249;</button>
                  <button className={styles.lightboxNext} onClick={nextPhoto} aria-label="Next">&#8250;</button>
                </>
              )}
              <img src={lightbox.src} alt={lightbox.caption} className={styles.lightboxImg} />
              {lightbox.caption && <p className={styles.lightboxCaption}>{lightbox.caption}</p>}
              {photos.length > 1 && (
                <p className={styles.lightboxCounter}>{lightbox.index + 1} / {photos.length}</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
