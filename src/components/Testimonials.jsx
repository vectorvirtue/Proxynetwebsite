import styles from './SectionPlaceholder.module.css'
import { useLang } from '../context/LanguageContext'

export default function Testimonials() {
  const { t } = useLang()
  return (
    <section className={styles.section} aria-labelledby="testimonials-heading">
      <div className={styles.inner}>
        <h2 id="testimonials-heading" className={styles.heading}>{t.testimonialsHeading}</h2>
      </div>
    </section>
  )
}
