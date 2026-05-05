import { useEffect, useState } from 'react'
import { Users, Clock, Award, MapPin, Info } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import styles from './SubNav.module.css'

export default function SubNav() {
  const { t } = useLang()
  const [active, setActive] = useState('overview')

  const links = [
    { icon: <Info size={18} />, label: t.subNavWhoWeAre, href: 'overview' },
    { icon: <Clock size={18} />, label: t.subNavHistory, href: 'timeline' },
    { icon: <Users size={18} />, label: t.subNavLeadership, href: 'leadership' },
    { icon: <Award size={18} />, label: t.subNavAwards, href: 'awards' },
    { icon: <MapPin size={18} />, label: t.subNavLocations, href: 'locations' },
  ]

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
  }, [t])

  return (
    <nav className={styles.nav} aria-label="About page sections">
      <div className={styles.inner}>
        {links.map((l) => (
          <a key={l.href} href={`#${l.href}`} className={`${styles.card} ${active === l.href ? styles.active : ''}`}>
            <span className={styles.icon}>{l.icon}</span>
            <span className={styles.label}>{l.label}</span>
          </a>
        ))}
      </div>
    </nav>
  )
}
