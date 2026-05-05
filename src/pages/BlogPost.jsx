import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import { getPosts } from '../data/blogPosts'
import SEO from '../components/SEO'
import styles from './BlogPost.module.css'

export default function BlogPost() {
  const { slug } = useParams()
  const { t } = useLang()
  const posts = getPosts(t)
  const post = posts.find(p => p.slug === slug)

  const title = post ? post.title : 'Article'
  const category = post ? post.category : ''

  return (
    <>
      <SEO
        title={title}
        description={post ? post.excerpt : ''}
        canonical={`/blog/${slug}`}
      />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroOverlay} />
          <div className={styles.heroInner}>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Link to="/blog" className={styles.back}>
                <ArrowLeft size={16} /> {t.blogBackToBlog}
              </Link>
              {category && <span className={styles.category}>{category}</span>}
              <h1 className={styles.title}>{title}</h1>
            </motion.div>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.contentInner}>
            <motion.div
              className={styles.placeholder}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Clock size={40} className={styles.placeholderIcon} />
              <h2 className={styles.placeholderHeading}>{t.articleComingSoon}</h2>
              <p className={styles.placeholderSub}>{t.articleComingSoonSub}</p>
              <Link to="/blog" className={styles.placeholderBack}>{t.blogBackToBlog}</Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}
