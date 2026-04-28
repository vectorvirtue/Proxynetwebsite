import { useEffect, useState } from 'react'
import { Users, Clock, Award, MapPin, Info } from 'lucide-react'
import styles from './SubNav.module.css'

const links = [
  { icon: <Info size={18} />, label: 'Who We Are', href: 'overview' },
  { icon: <Clock size={18} />, label: 'History', href: 'timeline' },
  { icon: <Users size={18} />, label: 'Leadership', href: 'leadership' },
  { icon: <Award size={18} />, label: 'Awards', href: 'awards' },
  { icon: <MapPin size={18} />, label: 'Locations', href: 'locations' },
]

export default function SubNav() {
  const [active, setActive] = useState('overview')

  useEffect(() => {
    const observers = []
    links.forEach(({ href }) => {
      const el = document.getElementById(href)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(href) },
        { rootMargin: '-30% 0px -60% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <nav className={styles.nav} aria-label="About page sections">
      <div className={styles.inner}>
        {links.map((l) => (
          <a
            key={l.label}
            href={`#${l.href}`}
            className={`${styles.card} ${active === l.href ? styles.active : ''}`}
          >
            <span className={styles.icon}>{l.icon}</span>
            <span className={styles.label}>{l.label}</span>
          </a>
        ))}
      </div>
    </nav>
  )
}
