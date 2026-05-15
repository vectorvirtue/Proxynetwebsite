import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronRight, X } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import { getCaseStudies } from '../data/caseStudies'
import FilterDropdown from '../components/FilterDropdown'
import SEO from '../components/SEO'
import SectionBlobs from '../components/SectionBlobs'
import HeroBlobs from '../components/HeroBlobs'
import styles from './CaseStudies.module.css'

const ALL = 'All'

export default function CaseStudies() {
  const { t } = useLang()
  const allStudies = getCaseStudies(t).filter(cs => cs.status !== 'consent-required')

  const solutions = useMemo(() => [...new Set(allStudies.map(cs => cs.category))], [allStudies])
  const industries = useMemo(() => [...new Set(allStudies.map(cs => cs.industry))], [allStudies])
  const countries  = useMemo(() => [...new Set(allStudies.map(cs => cs.country))], [allStudies])

  const [filterSolution, setFilterSolution] = useState(null)
  const [filterIndustry, setFilterIndustry] = useState(null)
  const [filterCountry,  setFilterCountry]  = useState(null)

  const filtered = useMemo(() => allStudies.filter(cs =>
    (!filterSolution || cs.category === filterSolution) &&
    (!filterIndustry || cs.industry  === filterIndustry) &&
    (!filterCountry  || cs.country   === filterCountry)
  ), [allStudies, filterSolution, filterIndustry, filterCountry])

  const hasActiveFilter = filterSolution || filterIndustry || filterCountry

  const clearFilters = () => { setFilterSolution(null); setFilterIndustry(null); setFilterCountry(null) }

  return (
    <>
      <SEO
        title={t.caseStudiesPageTitle}
        description={t.caseStudiesPageDesc}
        canonical="/case-studies"
      />
      <main>
        {/* Hero */}
        <section className={`${styles.hero} heroScene`}>
          <HeroBlobs />    <div className={styles.overlay} />
          <div className={styles.heroInner}>
            <motion.nav className={styles.breadcrumb} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <Link to="/" className={styles.crumb}>{t.home}</Link>
              <ChevronRight size={14} className={styles.sep} />
              <span className={styles.crumbActive}>{t.casestudies}</span>
            </motion.nav>
            <motion.p className={styles.eyebrow} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}>
              {t.caseStudiesEyebrow}
            </motion.p>
            <motion.h1 className={styles.heroTitle} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              {t.caseStudiesHeroTitle}
            </motion.h1>
            <motion.p className={styles.heroSub} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              {t.caseStudiesHeroSub}
            </motion.p>
            <motion.div className={styles.heroCtas} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <Link to="/contact" className={styles.ctaPrimary}>{t.csSimilarSolution}</Link>
              <Link to="/contact" className={styles.ctaSecondary}>{t.contactUs}</Link>
            </motion.div>
          </div>
        </section>

        {/* Filter bar + grid */}
        <section className={styles.section}>
          <div className={styles.inner}>

            {/* Dropdown filter bar */}
            <div className={styles.filterBar}>
              <FilterDropdown label={t.csFilterSolution} options={solutions} value={filterSolution} onChange={setFilterSolution} />
              <FilterDropdown label={t.csFilterIndustry} options={industries} value={filterIndustry} onChange={setFilterIndustry} />
              <FilterDropdown label={t.csFilterCountry}  options={countries}  value={filterCountry}  onChange={setFilterCountry} />
              {hasActiveFilter && (
                <button className={styles.clearBtn} onClick={clearFilters}><X size={13} /> {t.csFilterClear}</button>
              )}
            </div>

            {/* Results count */}
            <p className={styles.resultsCount}>
              {filtered.length} {filtered.length === 1 ? t.csResultSingular : t.csResultPlural}
            </p>

            {/* Cards grid */}
            <div className={styles.grid}>
              <AnimatePresence mode="popLayout">
                {filtered.length === 0 ? (
                  <motion.div
                    key="empty"
                    className={styles.empty}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <p>{t.csNoResults}</p>
                    <button className={styles.clearBtn} onClick={clearFilters}>{t.csFilterClear}</button>
                  </motion.div>
                ) : (
                  filtered.map((cs, i) => (
                    <motion.div
                      key={cs.slug}
                      layout
                      className={styles.card}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.35, delay: i * 0.06 }}
                    >
                      <div className={styles.cardMeta}>
                        <span className={styles.cardCategory}>{cs.category}</span>
                        <span className={styles.cardCountry}>{cs.country}</span>
                      </div>
                      <div className={styles.cardTop}>
                        <h2 className={styles.cardTitle}>{cs.title}</h2>
                        <p className={styles.cardClient}>{cs.client}</p>
                        <p className={styles.cardExcerpt}>{cs.excerpt}</p>
                      </div>
                      {cs.results.length > 0 && (
                        <ul className={styles.cardResults}>
                          {cs.results.slice(0, 3).map((r, ri) => (
                            <li key={ri} className={styles.cardResult}>
                              <span className={styles.resultDot} />
                              {r}
                            </li>
                          ))}
                        </ul>
                      )}
                      <div className={styles.cardFooter}>
                        <span className={styles.cardIndustry}>{cs.industry}</span>
                        <Link to={`/case-studies/${cs.slug}`} className={styles.cardCta}>
                          {t.caseStudiesReadStudy} <ArrowRight size={15} />
                        </Link>
                      </div>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>

            {/* CTA block */}
            <motion.div
              className={styles.ctaBlock}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <HeroBlobs />
              <p className={styles.ctaEyebrow}>{t.caseStudiesCtaEyebrow}</p>
              <h2 className={styles.ctaHeading}>{t.caseStudiesCtaHeading}</h2>
              <p className={styles.ctaSub}>{t.caseStudiesCtaSub}</p>
              <div className={styles.ctaBtns}>
                <Link to="/contact" className={styles.ctaPrimary}>{t.csSimilarSolution}</Link>
                <Link to="/contact" className={styles.ctaSecondary}>{t.contactUs}</Link>
              </div>
            </motion.div>

          </div>
        </section>
      </main>
    </>
  )
}

