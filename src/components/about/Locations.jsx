import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail } from 'lucide-react'
import styles from './Locations.module.css'

const offices = [
  {
    flag: '🇳🇬', city: 'Lagos', country: 'Nigeria', tag: 'HQ',
    address: 'The Proxynet House, 5B, Adedeji Close, off Opebi Road, Ikeja, Lagos, Nigeria.',
    phone: '+234 703 264 7755', email: 'info@proxynetgroup.com',
    mapUrl: 'https://maps.google.com/?q=5B+Adedeji+Close+Opebi+Ikeja+Lagos',
    services: ['IT Security', 'Systems Integration', 'Enterprise Networking', 'AV Rentals', 'Billboard Solutions', 'Software Development', 'Support'],
  },
  {
    flag: '🇳🇬', city: 'Abuja', country: 'Nigeria', tag: '',
    address: 'House 21, Street 693, Off Road 69, Gwarimpa, Abuja, Nigeria.',
    phone: '+234 903 182 9347', email: 'abuja@proxynetgroup.com',
    mapUrl: 'https://maps.google.com/?q=Gwarimpa+Abuja+Nigeria',
    services: ['IT Security', 'Enterprise Networking', 'Systems Integration', 'Support'],
  },
  {
    flag: '🇬🇭', city: 'Accra', country: 'Ghana', tag: '',
    address: 'No 18 Nii Klu Osae Avenue, Off American House, Accra, Ghana.',
    phone: '+233 302 546 703', email: 'ghana@proxynetgroup.com',
    mapUrl: 'https://maps.google.com/?q=Nii+Klu+Osae+Avenue+Accra+Ghana',
    services: ['IT Security', 'Systems Integration', 'Enterprise Networking', 'Support'],
  },
  {
    flag: '🇨🇮', city: 'Abidjan', country: "Côte d'Ivoire", tag: '',
    address: "1st floor, SIAA Building, Cocody 2 Plateaux, 7e Tranche Road, Abidjan.",
    phone: '+225 2722 468 434', email: 'cotedivoire@proxynetgroup.com',
    mapUrl: "https://maps.google.com/?q=Cocody+2+Plateaux+Abidjan",
    services: ['IT Security', 'Systems Integration', 'Support'],
  },
  {
    flag: '🇦🇪', city: 'Dubai', country: 'UAE', tag: '',
    address: 'Building A2, Unit 101, Dubai Silicon Oasis, DDP, Dubai, UAE.',
    phone: '+971 505 044 932', email: 'dubai@proxynetgroup.com',
    mapUrl: 'https://maps.google.com/?q=Dubai+Silicon+Oasis+Dubai',
    services: ['IT Security', 'Systems Integration', 'Enterprise Networking'],
  },
]

export default function Locations() {
  const [active, setActive] = useState(0)
  const office = offices[active]

  return (
    <section id="locations" className={styles.section}>
      <div className={styles.inner}>
        <motion.div className={styles.header} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className={styles.eyebrow}>Where We Are</p>
          <h2 className={styles.heading}>Our Offices</h2>
          <p className={styles.sub}>From our Lagos headquarters to offices across West Africa and the Middle East — we're close to the clients we serve.</p>
        </motion.div>

        <div className={styles.layout}>
          {/* Office selector */}
          <div className={styles.officeList}>
            {offices.map((o, i) => (
              <motion.button
                key={o.city}
                className={`${styles.officeBtn} ${active === i ? styles.officeBtnActive : ''}`}
                onClick={() => setActive(i)}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <span className={styles.officeFlag}>{o.flag}</span>
                <div className={styles.officeMeta}>
                  <span className={styles.officeCity}>{o.city}</span>
                  <span className={styles.officeCountry}>{o.country}</span>
                </div>
                {o.tag && <span className={styles.hqBadge}>{o.tag}</span>}
              </motion.button>
            ))}
          </div>

          {/* Office detail */}
          <motion.div key={active} className={styles.officeDetail} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
            <div className={styles.detailHeader}>
              <span className={styles.detailFlag}>{office.flag}</span>
              <div>
                <h3 className={styles.detailCity}>{office.city}</h3>
                <p className={styles.detailCountry}>{office.country}</p>
              </div>
              {office.tag && <span className={styles.hqBadgeDetail}>{office.tag}</span>}
            </div>

            <div className={styles.contactInfo}>
              <div className={styles.contactRow}><MapPin size={15} className={styles.contactIcon} /><p>{office.address}</p></div>
              <div className={styles.contactRow}><Phone size={15} className={styles.contactIcon} /><a href={`tel:${office.phone.replace(/\s/g,'')}`} className={styles.contactLink}>{office.phone}</a></div>
              <div className={styles.contactRow}><Mail size={15} className={styles.contactIcon} /><a href={`mailto:${office.email}`} className={styles.contactLink}>{office.email}</a></div>
            </div>

            <div className={styles.detailCtas}>
              <a href={`mailto:${office.email}`} className={styles.primary}>Contact This Office</a>
              <a href={office.mapUrl} target="_blank" rel="noopener noreferrer" className={styles.secondary}>View on Map</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
