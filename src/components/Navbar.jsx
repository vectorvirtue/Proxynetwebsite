import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Search, Shield, Wifi, Server, Globe, Headphones, BarChart2, TvMinimal, Monitor, GraduationCap, Network, Cpu, Building2 } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import logo from '../assets/PROXYNET LOGO.png'
import styles from './Navbar.module.css'

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const location = useLocation()
  const megaRef = useRef(null)
  const searchRef = useRef(null)

  const solutions = [
    {
      category: 'AV & Infrastructure',
      items: [
        { icon: <TvMinimal size={18} />, label: 'Professional AV Solutions', href: '/solutions/av' },
        { icon: <Network size={18} />, label: 'Network Infrastructure & Systems Integration', href: '/solutions/networking' },
        { icon: <Shield size={18} />, label: 'IT Security & Cybersecurity', href: '/solutions/cybersecurity' },
        { icon: <Cpu size={18} />, label: 'IoT & Smart Infrastructure', href: '/solutions/iot' },
      ],
    },
    {
      category: 'Software & Apps',
      items: [
        { icon: <BarChart2 size={18} />, label: 'Enterprise Software Solutions', href: '/solutions/enterprise-software' },
        { icon: <Server size={18} />, label: 'ERP Solutions', href: '/solutions/erp' },
        { icon: <Building2 size={18} />, label: 'Visitor Management — ProVMS', href: '/solutions/provms' },
        { icon: <GraduationCap size={18} />, label: 'School Management — ProSkool', href: '/solutions/proskool' },
      ],
    },
    {
      category: 'Managed & Cloud',
      items: [
        { icon: <Headphones size={18} />, label: 'Unified Communications', href: '/solutions/unified-communications' },
        { icon: <Globe size={18} />, label: 'Cloud & Managed Services', href: '/solutions/cloud-managed-services' },
        { icon: <Monitor size={18} />, label: 'CAD Services', href: '/solutions/cad-services' },
        { icon: <BarChart2 size={18} />, label: 'Distribution & Reseller Services', href: '/solutions/distribution' },
      ],
    },
    {
      category: 'Specialist',
      items: [
        { icon: <GraduationCap size={18} />, label: t.edtech, href: '/solutions/edtech' },
        { icon: <TvMinimal size={18} />, label: t.rentals, href: '/rentals' },
        { icon: <Monitor size={18} />, label: t.billboardSolutions, href: '/billboard-solutions' },
      ],
    },
  ]

  const navLinks = [
    { label: t.home, href: '/' },
    { label: t.about, href: '/about' },
    { label: t.solutions, href: '/solutions', hasMega: true },
    { label: t.casestudies, href: '/case-studies' },
    { label: t.support, href: '/support' },
    { label: t.community, href: '/csr' },
    { label: t.blog, href: '/blog' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMegaOpen(false)
  }, [location])

  useEffect(() => {
    const handler = (e) => {
      if (megaRef.current && !megaRef.current.contains(e.target)) setMegaOpen(false)
      if (searchRef.current && !searchRef.current.contains(e.target)) setSearchOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isActive = (href) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href)

  return (
    <>
      <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} role="banner">
        <div className={styles.inner}>
          <Link to="/" className={styles.logo} aria-label="Proxynet Group — Home">
            <img src={logo} alt="Proxynet Group" className={styles.logoImg} />
          </Link>

          <nav className={styles.desktopNav} aria-label="Primary navigation">
            <ul className={styles.navList} role="list">
              {navLinks.map((link) =>
                link.hasMega ? (
                  <li key={link.label} ref={megaRef} className={styles.navItem}>
                    <button
                      className={`${styles.navLink} ${isActive(link.href) ? styles.active : ''}`}
                      onClick={() => setMegaOpen((p) => !p)}
                      aria-expanded={megaOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown size={14} className={`${styles.chevron} ${megaOpen ? styles.chevronOpen : ''}`} />
                    </button>
                    <AnimatePresence>
                      {megaOpen && (
                        <motion.div
                          className={styles.megaMenu}
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.2 }}
                          role="region"
                          aria-label="Solutions menu"
                        >
                          <div className={styles.megaInner}>
                            {solutions.map((group) => (
                              <div key={group.category} className={styles.megaGroup}>
                                <p className={styles.megaCategory}>{group.category}</p>
                                {group.items.map((item) => (
                                  <Link key={item.href} to={item.href} className={styles.megaItem}>
                                    <span className={styles.megaIcon}>{item.icon}</span>
                                    {item.label}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                ) : (
                  <li key={link.label} className={styles.navItem}>
                    <Link to={link.href} className={`${styles.navLink} ${isActive(link.href) ? styles.active : ''}`}>
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div className={styles.actions}>
            <button className={styles.searchBtn} onClick={() => setSearchOpen((p) => !p)} aria-label="Open search">
              <Search size={18} />
            </button>
            <div className={styles.langSwitch} role="group" aria-label="Language switcher">
              <button className={`${styles.langBtn} ${lang === 'en' ? styles.langActive : ''}`} onClick={() => setLang('en')} aria-pressed={lang === 'en'}>EN</button>
              <span className={styles.langDivider} aria-hidden="true">|</span>
              <button className={`${styles.langBtn} ${lang === 'fr' ? styles.langActive : ''}`} onClick={() => setLang('fr')} aria-pressed={lang === 'fr'}>FR</button>
            </div>
            <Link to="/contact" className={styles.ctaBtn}>{t.getInTouch}</Link>
            <button className={styles.hamburger} onClick={() => setMobileOpen(true)} aria-label="Open menu" aria-expanded={mobileOpen}>
              <Menu size={24} />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {searchOpen && (
            <motion.div ref={searchRef} className={styles.searchBar} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
              <div className={styles.searchInner}>
                <Search size={18} className={styles.searchIcon} />
                <input autoFocus type="search" placeholder={t.search} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className={styles.searchInput} aria-label="Search" />
                <button onClick={() => setSearchOpen(false)} aria-label="Close search"><X size={18} /></button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div className={styles.mobileOverlay} initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }} transition={{ type: 'tween', duration: 0.3 }} role="dialog" aria-modal="true" aria-label="Mobile navigation">
            <div className={styles.mobileHeader}>
              <Link to="/" className={styles.logo}><img src={logo} alt="Proxynet Group" className={styles.logoImg} /></Link>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className={styles.closeBtn}><X size={24} /></button>
            </div>
            <nav className={styles.mobileNav}>
              <ul role="list">
                {navLinks.map((link) =>
                  link.hasMega ? (
                    <li key={link.label}>
                      <button className={`${styles.mobileLink} ${styles.mobileLinkBtn}`} onClick={() => setMobileExpanded((p) => !p)} aria-expanded={mobileExpanded}>
                        {link.label}
                        <ChevronDown size={16} className={mobileExpanded ? styles.chevronOpen : ''} />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded && (
                          <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className={styles.mobileSub}>
                            {solutions.flatMap((g) => g.items.map((item) => (
                              <li key={item.href}>
                                <Link to={item.href} className={styles.mobileSubLink}>{item.icon} {item.label}</Link>
                              </li>
                            )))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  ) : (
                    <li key={link.label}>
                      <Link to={link.href} className={`${styles.mobileLink} ${isActive(link.href) ? styles.active : ''}`}>{link.label}</Link>
                    </li>
                  )
                )}
              </ul>
            </nav>
            <div className={styles.mobileCta}>
              <div className={styles.mobileLang}>
                <button className={`${styles.langBtn} ${lang === 'en' ? styles.langActive : ''}`} onClick={() => setLang('en')}>EN</button>
                <span className={styles.langDivider}>|</span>
                <button className={`${styles.langBtn} ${lang === 'fr' ? styles.langActive : ''}`} onClick={() => setLang('fr')}>FR</button>
              </div>
              <Link to="/contact" className={styles.mobileCtaBtn}>{t.getInTouch}</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
