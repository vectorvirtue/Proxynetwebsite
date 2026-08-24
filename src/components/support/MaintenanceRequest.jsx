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
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [form, setForm] = useState({ name: '', email: '', phone: '', site: '', date: '', description: '', priority: 'high' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!captchaToken) return

    const apiKey = import.meta.env.VITE_SUPPORT_WEBHOOK_API_KEY
    if (!apiKey) {
      setSubmitError(t.ticketSubmitError)
      return
    }

    setSubmitting(true)
    setSubmitError('')
    try {
      const response = await fetch('https://crm.com/webhooks/website-ticket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Website-Api-Key': apiKey,
        },
        body: JSON.stringify({
          full_name: form.name,
          email: form.email,
          phone: form.phone,
          site_location: form.site,
          preferred_date: form.date,
          issue_description: form.description,
          priority: form.priority,
        }),
      })

      if (!response.ok) throw new Error(`Webhook request failed with ${response.status}`)
      setSubmitted(true)
    } catch {
      setSubmitError(t.ticketSubmitError)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="ticket" className={styles.section}>
      <div className={styles.inner}>
        <motion.div className={styles.header} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className={styles.iconWrap}><Wrench size={28} /></div>
          <div>
            <p className={styles.eyebrow}>{t.ticketEyebrow}</p>
            <h2 className={styles.heading}>{t.ticketHeading}</h2>
            <p className={styles.sub}>{t.ticketSub}</p>
          </div>
        </motion.div>

        {submitted ? (
          <motion.div className={styles.success} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <Send size={32} />
            <h3>{t.ticketSuccess}</h3>
            <p>{t.ticketSuccessMsg}</p>
          </motion.div>
        ) : (
          <motion.form className={styles.form} onSubmit={handleSubmit} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
            <div className={styles.row}>
              <div className={styles.field}><label className={styles.label}>{t.supportFieldName}</label><input required className={styles.input} value={form.name} onChange={e => setForm({...form, name: e.target.value})} /></div>
              <div className={styles.field}><label className={styles.label}>{t.supportFieldEmail}</label><input type="email" required className={styles.input} value={form.email} onChange={e => setForm({...form, email: e.target.value})} /></div>
            </div>
            <div className={styles.row}>
              <div className={styles.field}><label className={styles.label}>{t.supportFieldPhone}</label><input type="tel" required className={styles.input} value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} /></div>
              <div className={styles.field}><label className={styles.label}>{t.supportFieldSite}</label><input required className={styles.input} value={form.site} onChange={e => setForm({...form, site: e.target.value})} /></div>
            </div>
            <div className={styles.field}><label className={styles.label}>{t.supportFieldDate}</label><input type="date" className={styles.input} value={form.date} onChange={e => setForm({...form, date: e.target.value})} /></div>
            <div className={styles.field}><label className={styles.label}>{t.supportFieldPriority}</label><select className={styles.input} value={form.priority} onChange={e => setForm({...form, priority: e.target.value})}><option value="low">{t.supportPriorityLow}</option><option value="medium">{t.supportPriorityMedium}</option><option value="high">{t.supportPriorityHigh}</option></select></div>
            <div className={styles.field}><label className={styles.label}>{t.supportFieldIssue}</label><textarea required rows="5" className={styles.textarea} value={form.description} onChange={e => setForm({...form, description: e.target.value})} placeholder={t.supportFieldIssuePlaceholder} /></div>
            <Captcha onChange={setCaptchaToken} />
            {submitError && <p role="alert" className={styles.error}>{submitError}</p>}
            <button type="submit" className={styles.submit} disabled={submitting}>{submitting ? t.submitting : t.submitRequest} {!submitting && <Send size={16} />}</button>
          </motion.form>
        )}
      </div>
    </section>
  )
}
