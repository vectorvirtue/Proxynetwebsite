import styles from './SectionPlaceholder.module.css'

export default function PartnerLogos() {
  return (
    <section className={styles.section} aria-labelledby="partners-heading">
      <div className={styles.inner}>
        <h2 id="partners-heading" className={styles.heading}>Our Partners</h2>
      </div>
    </section>
  )
}
