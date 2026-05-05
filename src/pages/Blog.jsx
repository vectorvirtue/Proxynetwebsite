import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, User, Send } from 'lucide-react'
import SEO from '../components/SEO'
import { useLang } from '../context/LanguageContext'
import { posts, categories } from '../data/blogPosts'
import styles from './Blog.module.css'

export default function Blog() {
  const { t } = useLang()
  const [activeCategory, setActiveCategory] = useState('All')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const filtered = activeCategory === 'All'
    ? posts
    : posts.filter(p => p.category === activeCategory)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) setSubscribed(true)
  }

  return (
    <>
      <SEO
        title="Blog — Technology Insights from West Africa"
        description="Technology insights, company news, partner updates, and industry focus from Proxynet Group — West Africa's leading ICT company."
        canonical="/blog"
      />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay} />
          <div className={styles.heroInner}>
            <motion.h1 className={styles.heroTitle} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              {t.blogHeroTitle}
            </motion.h1>
            <motion.p className={styles.heroSub} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              {t.blogHeroSub}
            </motion.p>
            <motion.div className={styles.heroCtas} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <a href="#posts" className={styles.primary}>{t.readLatestPosts}</a>
              <a href="#newsletter" className={styles.secondary}>{t.subscribeForUpdates}</a>
            </motion.div>
          </div>
        </section>

        {/* Category filter + grid */}
        <section id="posts" className={styles.section}>
          <div className={styles.inner}>
            <div className={styles.filters}>
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className={styles.grid}>
              {filtered.map((post, i) => (
                <motion.article
                  key={post.slug}
                  className={styles.card}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                  whileHover={{ y: -4 }}
                >
                  <div className={styles.cardImg}>
                    <span className={styles.cardCategory}>{post.category}</span>
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.cardMeta}>
                      <span className={styles.metaItem}><User size={12} />{post.author}</span>
                      <span className={styles.metaItem}>{post.date}</span>
                      <span className={styles.metaItem}><Clock size={12} />{post.readTime}</span>
                    </div>
                    <h2 className={styles.cardTitle}>{post.title}</h2>
                    <p className={styles.cardExcerpt}>{post.excerpt}</p>
                    <Link to={`/blog/${post.slug}`} className={styles.readMore}>
                      {t.blogReadMore} <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section id="newsletter" className={styles.newsletter}>
          <div className={styles.inner}>
            <motion.div className={styles.newsletterContent} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className={styles.newsletterEyebrow}>{t.blogNewsletterEyebrow}</p>
              <h2 className={styles.newsletterHeading}>{t.blogNewsletterHeading}</h2>
              <p className={styles.newsletterSub}>{t.blogNewsletterSub}</p>
              {subscribed ? (
                <p className={styles.successMsg}>{t.blogSubscribeSuccess}</p>
              ) : (
                <form className={styles.newsletterForm} onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className={styles.newsletterInput}
                    aria-label="Email address"
                  />
                  <button type="submit" className={styles.newsletterBtn}>
                    {t.subscribe} <Send size={15} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}
