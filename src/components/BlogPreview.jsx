import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import styles from './BlogPreview.module.css'

const posts = [
  {
    slug: 'why-cybersecurity-matters',
    category: 'Cybersecurity',
    date: 'April 12, 2026',
    title: 'Why Cybersecurity Is No Longer Optional for African Businesses',
    excerpt: 'As digital adoption accelerates across the continent, the threat landscape is evolving fast. Here is what every business needs to know.',
  },
  {
    slug: 'enterprise-networking-2026',
    category: 'Networking',
    date: 'March 28, 2026',
    title: 'The State of Enterprise Networking in West Africa in 2026',
    excerpt: 'From SD-WAN to fibre rollouts, we break down the infrastructure trends shaping connectivity for large organisations.',
  },
  {
    slug: 'disaster-recovery-planning',
    category: 'IT Security',
    date: 'March 10, 2026',
    title: 'Building a Disaster Recovery Plan That Actually Works',
    excerpt: 'Most DR plans fail not because of bad technology, but poor planning. Our team shares the framework we use with clients.',
  },
]

export default function BlogPreview() {
  const { t } = useLang()
  return (
    <section className={styles.section} aria-labelledby="blog-heading">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>{t.blog}</p>
            <h2 id="blog-heading" className={styles.heading}>{t.latestInsights}</h2>
          </div>
          <Link to="/blog" className={styles.viewAll}>
            {t.viewAll} <ArrowRight size={16} />
          </Link>
        </div>

        <div className={styles.grid}>
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              className={styles.card}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={styles.cardTop}>
                <span className={styles.category}>{post.category}</span>
                <time className={styles.date}>{post.date}</time>
              </div>
              <h3 className={styles.title}>{post.title}</h3>
              <p className={styles.excerpt}>{post.excerpt}</p>
              <Link to={`/blog/${post.slug}`} className={styles.readMore}>
                {t.readMore} <ArrowRight size={14} />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
