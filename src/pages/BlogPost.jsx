import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, User, Calendar, Share2 } from 'lucide-react'
import SEO from '../components/SEO'
import { posts } from '../data/blogPosts'
import styles from './BlogPost.module.css'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  const related = posts.filter(p => p.slug !== slug && p.category === post.category).slice(0, 3)

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: post.title, url: window.location.href })
    } else {
      navigator.clipboard.writeText(window.location.href)
    }
  }

  // Simple markdown-like renderer
  const renderContent = (content) => {
    return content.trim().split('\n').map((line, i) => {
      if (line.startsWith('## ')) return <h2 key={i} className={styles.h2}>{line.slice(3)}</h2>
      if (line.startsWith('### ')) return <h3 key={i} className={styles.h3}>{line.slice(4)}</h3>
      if (line.startsWith('- ')) return <li key={i} className={styles.li}>{line.slice(2)}</li>
      if (line.match(/^\d+\. /)) return <li key={i} className={styles.li}>{line.replace(/^\d+\. /, '')}</li>
      if (line.startsWith('**') && line.endsWith('**')) return <strong key={i}>{line.slice(2, -2)}</strong>
      if (line === '') return <br key={i} />
      return <p key={i} className={styles.p}>{line}</p>
    })
  }

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
        ogType="article"
      />
      <main>
        <article>
          {/* Hero */}
          <section className={styles.hero}>
            <div className={styles.heroOverlay} />
            <div className={styles.heroInner}>
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <Link to="/blog" className={styles.back}><ArrowLeft size={16} /> Back to Blog</Link>
                <span className={styles.category}>{post.category}</span>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.meta}>
                  <span className={styles.metaItem}><User size={14} />{post.author}</span>
                  <span className={styles.metaItem}><Calendar size={14} />{post.date}</span>
                  <span className={styles.metaItem}><Clock size={14} />{post.readTime}</span>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Content */}
          <section className={styles.content}>
            <div className={styles.contentInner}>
              <motion.div className={styles.article} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                {renderContent(post.content)}
              </motion.div>

              {/* Share */}
              <div className={styles.shareRow}>
                <button className={styles.shareBtn} onClick={handleShare}>
                  <Share2 size={16} /> Share this article
                </button>
              </div>

              {/* Author bio */}
              <div className={styles.authorCard}>
                <div className={styles.authorAvatar}>P</div>
                <div>
                  <p className={styles.authorName}>{post.author}</p>
                  <p className={styles.authorBio}>The Proxynet team shares insights from over 20 years of delivering technology solutions across West Africa.</p>
                </div>
              </div>
            </div>
          </section>
        </article>

        {/* Related posts */}
        {related.length > 0 && (
          <section className={styles.related}>
            <div className={styles.relatedInner}>
              <h2 className={styles.relatedHeading}>Related Articles</h2>
              <div className={styles.relatedGrid}>
                {related.map(r => (
                  <Link key={r.slug} to={`/blog/${r.slug}`} className={styles.relatedCard}>
                    <div className={styles.relatedImg} />
                    <div className={styles.relatedBody}>
                      <span className={styles.relatedCat}>{r.category}</span>
                      <h3 className={styles.relatedTitle}>{r.title}</h3>
                      <p className={styles.relatedDate}>{r.date} · {r.readTime}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  )
}
