import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ChevronRight, CheckCircle, Quote, ArrowRight } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import { getCaseStudyBySlug, getCaseStudies } from '../data/caseStudies'
import SEO from '../components/SEO'
import SectionBlobs from '../components/SectionBlobs'
import styles from './CaseStudy.module.css'

export default function CaseStudy() {
  const { slug } = useParams()
  const { t } = useLang()
  const cs = getCaseStudyBySlug(slug, t)
  const allStudies = getCaseStudies(t).filter(s => s.slug !== slug && s.status !== 'consent-required')

  if (!cs) {
    return (
      <>
        <SEO title="Case Study Not Found" description="" canonical={`/case-studies/${slug}`} />
        <main>
          <section className={`${styles.hero} heroScene`}>
            <SectionBlobs variant="dark" />
          <div className={styles.heroOverlay} />
            <div className={styles.heroInner}>
              <Link to="/case-studies" className={styles.back}><ArrowLeft size={16} /> {t.caseStudiesBack}</Link>
              <h1 className={styles.heroTitle}>{t.pageNotFound}</h1>
            </div>
          </section>
        </main>
      </>
    )
  }

  const isConsentRequired = cs.status === 'consent-required'

  return (
    <>
      <SEO
        title={`${cs.title} — Proxynet Case Study`}
        description={cs.excerpt}
        canonical={`/case-studies/${cs.slug}`}
        ogType="article"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: cs.title,
          description: cs.excerpt,
          author: { '@type': 'Organization', name: 'Proxynet Group' },
          publisher: {
            '@type': 'Organization',
            name: 'Proxynet Group',
            logo: { '@type': 'ImageObject', url: 'https://www.proxynetgroup.com/PROXYNET LOGO ASSET.png' },
          },
          url: `https://www.proxynetgroup.com/case-studies/${cs.slug}`,
          about: { '@type': 'Organization', name: cs.client },
        }}
      />
      <main>
        {/* Hero */}
        <section className={`${styles.hero} heroScene`}>
          <SectionBlobs variant="dark" />
          <div className={styles.heroOverlay} />
          <div className={styles.heroInner}>
            <motion.nav className={styles.breadcrumb} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <Link to="/" className={styles.crumb}>{t.home}</Link>
              <ChevronRight size={14} className={styles.sep} />
              <Link to="/case-studies" className={styles.crumb}>{t.casestudies}</Link>
              <ChevronRight size={14} className={styles.sep} />
              <span className={styles.crumbActive}>{cs.client}</span>
            </motion.nav>
            <motion.span className={styles.category} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }}>
              {cs.category}
            </motion.span>
            <motion.h1 className={styles.heroTitle} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              {cs.title}
            </motion.h1>
            <motion.p className={styles.heroClient} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              {t.caseStudiesClientLabel}: <strong>{cs.client}</strong>
            </motion.p>
          </div>
        </section>

        {isConsentRequired ? (
          /* Consent-required placeholder */
          <section className={styles.contentSection}>
            <div className={styles.contentInner}>
              <motion.div className={styles.consentBlock} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className={styles.consentIcon}>🔒</div>
                <h2 className={styles.consentTitle}>{t.caseStudiesConsentTitle}</h2>
                <p className={styles.consentBody}>{t.caseStudiesConsentBody}</p>
                <Link to="/case-studies" className={styles.consentBack}>
                  <ArrowLeft size={16} /> {t.caseStudiesBack}
                </Link>
              </motion.div>
            </div>
          </section>
        ) : (
          <>
            {/* Main content */}
            <section className={styles.contentSection}>
              <div className={styles.contentInner}>
                <div className={styles.contentGrid}>
                  {/* Left: main body */}
                  <div className={styles.body}>

                    {/* Client Overview */}
                    <motion.div className={styles.block} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                      <h2 className={styles.blockHeading}>{t.csClientOverview}</h2>
                      <p className={styles.blockText}>{cs.clientOverview}</p>
                    </motion.div>

                    {/* The Challenge */}
                    <motion.div className={styles.block} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                      <h2 className={styles.blockHeading}>{t.csChallenge}</h2>
                      <p className={styles.blockText}>{cs.challenge}</p>
                    </motion.div>

                    {/* Our Solution */}
                    <motion.div className={styles.block} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                      <h2 className={styles.blockHeading}>{t.csSolution}</h2>
                      <p className={styles.blockText}>{cs.solution}</p>
                    </motion.div>

                    {/* Technologies Used */}
                    {cs.technologies.length > 0 && (
                      <motion.div className={styles.block} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                        <h2 className={styles.blockHeading}>{t.csTechnologies}</h2>
                        <div className={styles.techGrid}>
                          {cs.technologies.map((tech, i) => (
                            <span key={i} className={styles.techTag}>{tech}</span>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Results & ROI */}
                    {cs.results.length > 0 && (
                      <motion.div className={styles.block} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                        <h2 className={styles.blockHeading}>{t.csResults}</h2>
                        <ul className={styles.resultsList}>
                          {cs.results.map((r, i) => (
                            <li key={i} className={styles.resultItem}>
                              <CheckCircle size={18} className={styles.resultIcon} />
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}

                    {/* Client Testimonial */}
                    {cs.testimonial.quote && (
                      <motion.div className={styles.testimonialBlock} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                        <Quote size={32} className={styles.quoteIcon} />
                        <blockquote className={styles.quote}>{cs.testimonial.quote}</blockquote>
                        <div className={styles.quoteAuthor}>
                          <p className={styles.authorName}>{cs.testimonial.author}</p>
                          <p className={styles.authorRole}>{cs.testimonial.role}</p>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Right: sidebar */}
                  <aside className={styles.sidebar}>
                    <motion.div className={styles.sideCard} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                      <p className={styles.sideLabel}>{t.caseStudiesClientLabel}</p>
                      <p className={styles.sideValue}>{cs.client}</p>
                    </motion.div>
                    <motion.div className={styles.sideCard} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}>
                      <p className={styles.sideLabel}>{t.caseStudiesSolutionLabel}</p>
                      <p className={styles.sideValue}>{cs.category}</p>
                    </motion.div>
                    {cs.relatedSolutions.length > 0 && (
                      <motion.div className={styles.sideCard} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                        <p className={styles.sideLabel}>{t.csRelatedSolutions}</p>
                        <div className={styles.relatedLinks}>
                          {cs.relatedSolutions.map((href, i) => (
                            <Link key={i} to={href} className={styles.relatedLink}>
                              {href.replace('/solutions/', '').replace('/', '').replace(/-/g, ' ')} <ArrowRight size={12} />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                    <motion.div className={styles.sideCtaCard} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}>
                      <p className={styles.sideCtaHeading}>{t.caseStudiesSideCtaHeading}</p>
                      <p className={styles.sideCtaBody}>{t.caseStudiesSideCtaBody}</p>
                      <Link to="/contact" className={styles.sideCtaBtn}>{t.contactUs}</Link>
                    </motion.div>
                  </aside>
                </div>
              </div>
            </section>

            {/* Related case studies */}
            {allStudies.length > 0 && (
              <section className={styles.relatedSection}>
                <div className={styles.relatedInner}>
                  <h2 className={styles.relatedHeading}>{t.caseStudiesRelated}</h2>
                  <div className={styles.relatedGrid}>
                    {allStudies.slice(0, 2).map((s, i) => (
                      <motion.div key={s.slug} className={styles.relatedCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
                        <span className={styles.relatedCategory}>{s.category}</span>
                        <h3 className={styles.relatedTitle}>{s.title}</h3>
                        <p className={styles.relatedClient}>{s.client}</p>
                        <Link to={`/case-studies/${s.slug}`} className={styles.relatedCta}>
                          {t.caseStudiesReadStudy} <ArrowRight size={14} />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* CTA */}
            <section className={styles.ctaSection}>
              <div className={styles.ctaInner}>
                <motion.div className={styles.ctaBlock} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                  <SectionBlobs variant="dark" />
                  <p className={styles.ctaEyebrow}>{t.caseStudiesCtaEyebrow}</p>
                  <h2 className={styles.ctaHeading}>{t.caseStudiesCtaHeading}</h2>
                  <p className={styles.ctaSub}>{t.caseStudiesCtaSub}</p>
                  <div className={styles.ctaBtns}>
                    <Link to="/contact" className={styles.ctaPrimary}>{t.contactUs}</Link>
                    <Link to="/case-studies" className={styles.ctaSecondary}>{t.caseStudiesViewAll}</Link>
                  </div>
                </motion.div>
              </div>
            </section>
          </>
        )}
      </main>
    </>
  )
}

