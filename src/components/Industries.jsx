import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Landmark, Flame, Factory, Radio, Building2, GraduationCap, Stethoscope, ShoppingCart, ArrowRight } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import styles from './Industries.module.css'

const getIndustries = (t) => [
  { icon: <Landmark size={36} />, label: t.indFinancial, desc: t.indFinancialDesc },
  { icon: <Flame size={36} />, label: t.indOilGas, desc: t.indOilGasDesc },
  { icon: <Factory size={36} />, label: t.indManufacturing, desc: t.indManufacturingDesc },
  { icon: <Radio size={36} />, label: t.indTelecoms, desc: t.indTelecomsDesc },
  { icon: <Building2 size={36} />, label: t.indGovernment, desc: t.indGovernmentDesc },
  { icon: <GraduationCap size={36} />, label: t.indEducation, desc: t.indEducationDesc },
  { icon: <Stethoscope size={36} />, label: t.indHealthcare, desc: t.indHealthcareDesc },
  { icon: <ShoppingCart size={36} />, label: t.indRetail, desc: t.indRetailDesc },
]

export default function Industries() {
  const { t } = useLang()
  const industries = getIndustries(t)

  return (
    <section className={styles.section} aria-labelledby="industries-heading">
      <div className={styles.inner}>

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.eyebrow}>{t.industriesEyebrow}</p>
          <h2 id="industries-heading" className={styles.heading}>{t.industriesHeading}</h2>
          <p className={styles.sub}>{t.industriesSub}</p>
        </motion.div>

        <div className={styles.grid}>
          {industries.map((ind, i) => (
            <motion.div
              key={ind.label}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className={styles.iconWrap} aria-hidden="true">{ind.icon}</div>
              <h3 className={styles.label}>{ind.label}</h3>
              <p className={styles.desc}>{ind.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link to="/solutions" className={styles.ctaPrimary}>
            {t.findYourSolution} <ArrowRight size={16} />
          </Link>
          <Link to="/contact" className={styles.ctaSecondary}>
            {t.contactSales}
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
