import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import logo from '../assets/PROXYNET LOGO NEW WHITE.png'
import styles from './Footer.module.css'

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
)
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <path fill="none" stroke="currentColor" strokeWidth="0" d="M9.75 15.02 15.5 12 9.75 8.98z"/>
    <path fill="var(--navy, #001f33)" d="M9.75 8.98v6.04L15.5 12z"/>
  </svg>
)

const socials = [
  { icon: <LinkedinIcon />, href: 'https://www.linkedin.com/company/proxynet-communications', label: 'LinkedIn' },
  { icon: <FacebookIcon />, href: 'https://www.facebook.com/proxynetcommunications/', label: 'Facebook' },
  { icon: <InstagramIcon />, href: 'https://www.instagram.com/proxynetgroup/', label: 'Instagram' },
  { icon: <YoutubeIcon />, href: 'https://www.youtube.com/channel/UCKfMFI9KCi63vntfcW68_1g', label: 'YouTube' },
]

export default function Footer() {
  const { t } = useLang()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) { setSubscribed(true); setEmail('') }
  }

  const columns = [
    {
      heading: t.company,
      links: [
        { label: t.aboutUs, href: '/about' },
        { label: t.ourTeam, href: '/about#team' },
        { label: t.careers, href: '/careers' },
        { label: t.newsPress, href: '/news' },
        { label: t.partners, href: '/partners' },
      ],
    },
    {
      heading: t.solutions,
      links: [
        { label: t.solAV, href: '/solutions/av' },
        { label: t.solNetworking, href: '/solutions/networking' },
        { label: t.solCybersecurity, href: '/solutions/cybersecurity' },
        { label: t.solEnterpriseSoftware, href: '/solutions/enterprise-software' },
        { label: t.solProVMS, href: '/solutions/provms' },
        { label: t.solUnifiedComms, href: '/solutions/unified-communications' },
        { label: t.solCloud, href: '/solutions/cloud-managed-services' },
        { label: t.edtech, href: '/solutions/edtech' },
      ],
    },
    {
      heading: t.resources,
      links: [
        { label: t.blog, href: '/blog' },
        { label: t.casestudies, href: '/case-studies' },
        { label: t.whitepapers, href: '/resources/whitepapers' },
        { label: t.supportCentre, href: '/support' },
        { label: t.faqs, href: '/faqs' },
      ],
    },
  ]

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link to="/" aria-label="Proxynet Group — Home">
              <img src={logo} alt="Proxynet Group" className={styles.logoImg} />
            </Link>
            <p className={styles.tagline}>{t.footerTagline}</p>
            <div className={styles.socials}>
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className={styles.socialIcon} aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading} className={styles.col}>
              <h3 className={styles.colHeading}>{col.heading}</h3>
              <ul role="list">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className={styles.footerLink}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className={styles.col}>
            <h3 className={styles.colHeading}>{t.contact}</h3>

            <ul className={styles.contactList} role="list">
              <li>
                <p className={styles.contactText}>The Proxynet House, 5B, Adedeji Close, off Opebi Road, Ikeja, Lagos, Nigeria.</p>
              </li>
              <li>
                <a href="tel:+2347032647755" className={styles.footerLink}>+234 703 264 7755</a>
              </li>
              <li>
                <a href="mailto:info@proxynetgroup.com" className={styles.footerLink}>info@proxynetgroup.com</a>
              </li>
            </ul>

            <div className={styles.newsletter}>
              <p className={styles.newsletterLabel}>{t.stayUpdated}</p>
              {subscribed ? (
                <p className={styles.successMsg}>{t.thankYou}</p>
              ) : (
                <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
                  <label htmlFor="footer-email" className={styles.srOnly}>Email</label>
                  <input
                    id="footer-email"
                    type="email"
                    required
                    placeholder={t.emailPlaceholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.newsletterInput}
                  />
                  <button type="submit" className={styles.newsletterBtn} aria-label={t.stayUpdated}>
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <p className={styles.legal}>{t.copyright}</p>
          <ul className={styles.legalLinks} role="list">
            <li><Link to="/privacy-policy" className={styles.legalLink}>{t.privacyPolicy}</Link></li>
            <li><Link to="/cookie-policy" className={styles.legalLink}>{t.cookiePolicy}</Link></li>
            <li><Link to="/terms" className={styles.legalLink}>{t.terms}</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
