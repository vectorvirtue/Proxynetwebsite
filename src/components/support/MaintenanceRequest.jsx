import { useState } from 'react'
import Captcha from '../../components/Captcha'
import { motion } from 'framer-motion'
import { Wrench, Send } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import styles from './MaintenanceRequest.module.css'

export default function MaintenanceRequest() {
  const { t } = useLang()
  const [submitted, setSubmitted] = useState(false)
  const [captchaToken, setCaptchaToken] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', phone: '', site: '', date: '', description: '' })

  const handleSubmit = (e) => { e.preventDefault(); if (!captchaToken) return; setSubmitted(true) }

  return (
    <section id="ticket" className={styles.section}>
      <div className={styles.inner}>
        <motion.div className={styles.header} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className={styles.iconWrap}><Wrench size={28} /></div>
          <div>
            <p className={styles.eyebrow}>Maintenance & Support</p>
            <h2 className={styles.heading}>Raise a Ticket</h2>
            <p className={styles.sub}>Submit a support request or schedule a maintenance visit. Our team will confirm within your SLA window.</p>
          </div>
        </motion.div>

        {submitted ? (
          <motion.div className={styles.success} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <Send size={32} />
            <h3>Ticket Submitted</h3>
            <p>Your request has been logged. We will respond within your SLA window. Reference your email for updates.</p>
          </motion.div>
        ) : (
          <motion.form className={styles.form} onSubmit={handleSubmit} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
            <div className={styles.row}>
              <div className={styles.field}><label className={styles.label}>Full Name</label><input required className={styles.input} value={form.name} onChange={e => setForm({...form, name: e.target.value})} /></div>
              <div className={styles.field}><label className={styles.label}>Email</label><input type="email" required className={styles.input} value={form.email} onChange={e => setForm({...form, email: e.target.value})} /></div>
            </div>
            <div className={styles.row}>
              <div className={styles.field}><label className={styles.label}>Phone</label><input type="tel" required className={styles.input} value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} /></div>
              <div className={styles.field}><label className={styles.label}>Site / Location</label><input required className={styles.input} value={form.site} onChange={e => setForm({...form, site: e.target.value})} /></div>
            </div>
            <div className={styles.field}><label className={styles.label}>Preferred Date (for scheduled maintenance)</label><input type="date" className={styles.input} value={form.date} onChange={e => setForm({...form, date: e.target.value})} /></div>
            <div className={styles.field}><label className={styles.label}>Issue Description</label><textarea required rows="5" className={styles.textarea} value={form.description} onChange={e => setForm({...form, description: e.target.value})} placeholder="Describe the issue or maintenance required..." /></div>
            <Captcha onChange={setCaptchaToken} />
            <button type="submit" className={styles.submit}>{t.submitRequest} <Send size={16} /></button>
          </motion.form>
        )}
      </div>
    </section>
  )
}
