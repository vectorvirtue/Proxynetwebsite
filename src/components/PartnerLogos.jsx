import styles from './SectionPlaceholder.module.css'
import { useLang } from '../context/LanguageContext'

export default function PartnerLogos() {
  const { t } = useLang()
  return (
    <section className={styles.section} aria-labelledby="partners-heading">
      <div className={styles.inner}>
        <h2 id="partners-heading" className={styles.heading}>{t.partnersHeading}</h2>
      </div>
    </section>
  )
}
