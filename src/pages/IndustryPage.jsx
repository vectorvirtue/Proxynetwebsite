import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  Landmark,
  Flame,
  Factory,
  Radio,
  Building2,
  GraduationCap,
  Stethoscope,
  ShoppingCart,
  Shield,
  Network,
  Server,
  Monitor,
  MessageSquare,
  Code2,
  Wifi,
  Cpu,
  Layers,
  CheckCircle2,
  BookOpen,
} from 'lucide-react'
import SEO from '../components/SEO'
import { useLang } from '../context/LanguageContext'
import { getIndustryBySlug } from '../data/industries'
import SectionBlobs from '../components/SectionBlobs'
import styles from './IndustryPage.module.css'

// Lucide icon lookup map — icon name string → component
const ICON_MAP = {
  Landmark,
  Flame,
  Factory,
  Radio,
  Building2,
  GraduationCap,
  Stethoscope,
  ShoppingCart,
  Shield,
  Network,
  Server,
  Monitor,
  MessageSquare,
  Code2,
  Wifi,
  Cpu,
  Layers,
}

function DynamicIcon({ name, size = 24, className }) {
  const Icon = ICON_MAP[name]
  if (!Icon) return null
  return <Icon size={size} className={className} />
}

export default function IndustryPage() {
  const { slug } = useParams()
  const { t } = useLang()
  const industry = getIndustryBySlug(slug, t)

  if (!industry) {
    return (
      <main className={styles.notFound}>
        <div className={styles.notFoundInner}>
          <h1>Industry Not Found</h1>
          <p>The industry page you are looking for does not exist.</p>
          <Link to="/" className={styles.notFoundLink}>Back to Homepage</Link>
        </div>
      </main>
    )
  }

  return (
    <>
      <SEO
        title={`${industry.name} — Proxynet Group`}
        description={industry.heroSub}
        canonical={`/industries/${industry.slug}`}
      />
      <main>

        {/* ── 1. HERO ─────────────────────────────────────────────────── */}
        <section className={`${styles.hero} heroScene`}>
          <div className={styles.heroOverlay} />
          <div className={styles.heroInner}>
            <motion.nav
              className={styles.breadcrumb}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              aria-label="Breadcrumb"
            >
              <Link to="/" className={styles.crumb}>{t.home}</Link>
              <ChevronRight size={14} className={styles.sep} aria-hidden="true" />
              <a href="/#industries" className={styles.crumb}>{t.breadcrumbIndustries}</a>
              <ChevronRight size={14} className={styles.sep} aria-hidden="true" />
              <span className={styles.crumbActive}>{industry.name}</span>
            </motion.nav>

            <motion.p
              className={styles.eyebrow}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              {industry.heroEyebrow}
            </motion.p>

            <motion.h1
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {industry.heroTitle}
            </motion.h1>

            <motion.p
              className={styles.heroSub}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {industry.heroSub}
            </motion.p>

            <motion.div
              className={styles.heroCtas}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link to="/contact" className={styles.primary}>{t.contactUs}</Link>
              <Link to="/solutions" className={styles.secondary}>{t.viewOurSolutions}</Link>
            </motion.div>
          </div>
        </section>

        {/* ── 2. INDUSTRY OVERVIEW ────────────────────────────────────── */}
        <section className={styles.section}>
          <div className={styles.inner}>
            <div className={styles.overviewGrid}>
              <motion.div
                className={styles.overviewText}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className={styles.eyebrowBlue}>{industry.heroEyebrow}</p>
                <h2 className={styles.heading}>Industry Overview</h2>
                <p className={styles.bodyText}>{industry.overview}</p>
              </motion.div>

              <motion.div
                className={styles.overviewVisual}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <div className={styles.iconBox} aria-hidden="true">
                  <DynamicIcon name={industry.icon} size={80} className={styles.iconBoxIcon} />
                </div>
                <p className={styles.iconBoxLabel}>{industry.name}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── 3. PROXYNET'S ROLE ──────────────────────────────────────── */}
        <section className={styles.sectionDark}>
          <div className={styles.inner}>
            <motion.div
              className={styles.roleHeader}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className={styles.eyebrowLight}>{t.indPageRoleEyebrow}</p>
              <h2 className={styles.headingLight}>{t.indPageRoleHeading}</h2>
              <p className={styles.bodyTextLight}>{industry.proxynetRole}</p>
            </motion.div>

            <div className={styles.roleBullets}>
              {[t.indPageRoleBullet1, t.indPageRoleBullet2, t.indPageRoleBullet3].map((bullet, i) => (
                <motion.div
                  key={i}
                  className={styles.roleBullet}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <CheckCircle2 size={20} className={styles.bulletIcon} aria-hidden="true" />
                  <p className={styles.bulletText}>{bullet}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. KEY SOLUTIONS ────────────────────────────────────────── */}
        <section className={styles.section}>
          <div className={styles.inner}>
            <motion.div
              className={styles.sectionHeader}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className={styles.eyebrowBlue}>{t.indPageSolutionsEyebrow}</p>
              <h2 className={styles.heading}>{t.indPageSolutionsHeading}</h2>
            </motion.div>

            <div className={styles.solutionsGrid}>
              {industry.solutions.map((sol, i) => (
                <motion.div
                  key={sol.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <Link to={sol.href} className={styles.solutionCard}>
                    <div className={styles.solutionIcon} aria-hidden="true">
                      <DynamicIcon name={sol.icon} size={24} />
                    </div>
                    <p className={styles.solutionLabel}>{sol.label}</p>
                    <ArrowUpRight size={16} className={styles.solutionArrow} aria-hidden="true" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. FEATURED CASE STUDY ──────────────────────────────────── */}
        <section className={styles.sectionAlt}>
          <div className={styles.inner}>
            <motion.div
              className={styles.sectionHeader}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className={styles.eyebrowBlue}>{t.indPageCaseEyebrow}</p>
              <h2 className={styles.heading}>{t.indPageCaseHeading}</h2>
            </motion.div>

            {industry.caseStudy ? (
              <motion.div
                className={styles.caseCard}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className={styles.caseCardIcon} aria-hidden="true">
                  <BookOpen size={28} />
                </div>
                <div className={styles.caseCardBody}>
                  <p className={styles.caseClient}>{industry.caseStudy.client}</p>
                  <h3 className={styles.caseTitle}>{industry.caseStudy.title}</h3>
                  <p className={styles.caseOutcome}>{industry.caseStudy.outcome}</p>
                  <Link to={industry.caseStudy.href} className={styles.caseLink}>
                    {t.indPageCaseReadMore} <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </motion.div>
            ) : (
              <motion.div
                className={styles.casePlaceholder}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <BookOpen size={36} className={styles.casePlaceholderIcon} aria-hidden="true" />
                <h3 className={styles.casePlaceholderTitle}>{t.indPageCaseComing}</h3>
                <p className={styles.casePlaceholderSub}>{t.indPageCaseComingSub}</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* ── 6. CLIENT LOGOS ─────────────────────────────────────────── */}
        <section className={styles.section}>
          <div className={styles.inner}>
            <motion.div
              className={styles.sectionHeader}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className={styles.eyebrowBlue}>{t.indPageClientsEyebrow}</p>
              <h2 className={styles.heading}>{t.indPageClientsHeading}</h2>
            </motion.div>

            <div className={styles.clientsRow}>
              {industry.clients.map((client, i) => (
                <motion.div
                  key={client}
                  className={styles.clientBadge}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                >
                  {client}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. CTA ──────────────────────────────────────────────────── */}
        <section className={styles.ctaSection}>
          <div className={styles.inner}>
            <SectionBlobs variant="dark" />
            <motion.div
              className={styles.ctaInner}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className={styles.ctaEyebrow}>{industry.name}</p>
              <h2 className={styles.ctaHeading}>{t.indPageCtaHeading}</h2>
              <p className={styles.ctaSub}>{t.indPageCtaSub}</p>
              <div className={styles.ctaButtons}>
                <Link to="/contact" className={styles.ctaPrimary}>
                  {t.contactUs} <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link to="/solutions" className={styles.ctaSecondary}>
                  {t.viewOurSolutions}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
    </>
  )
}
