import { useState } from 'react'
import Captcha from '../../components/Captcha'
import { motion } from 'framer-motion'
import { Upload, Send } from 'lucide-react'
import styles from './ApplicationForm.module.css'

export default function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false)
  const [captchaToken, setCaptchaToken] = useState(null)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', role: '', cv: null, note: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!captchaToken) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="apply" className={styles.section}>
        <div className={styles.inner}>
          <motion.div className={styles.success} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <div className={styles.successIcon}><Send size={32} /></div>
            <h2 className={styles.successTitle}>Application Submitted!</h2>
            <p className={styles.successText}>Thank you for applying. Our HR team will review your application and get back to you within 5 business days.</p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="apply" className={styles.section}>
      <div className={styles.inner}>
        <motion.div className={styles.header} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className={styles.eyebrow}>Apply Now</p>
          <h2 className={styles.heading}>Submit Your Application</h2>
          <p className={styles.sub}>Fill out the form below and attach your CV. We will get back to you within 5 business days.</p>
        </motion.div>

        <motion.form className={styles.form} onSubmit={handleSubmit} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="name" className={styles.label}>Full Name</label>
              <input id="name" type="text" required className={styles.input} value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
            </div>
            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>Email Address</label>
              <input id="email" type="email" required className={styles.input} value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="phone" className={styles.label}>Phone Number</label>
              <input id="phone" type="tel" required className={styles.input} value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
            </div>
            <div className={styles.field}>
              <label htmlFor="role" className={styles.label}>Role Applying For</label>
              <input id="role" type="text" required className={styles.input} value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})} />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="cv" className={styles.label}>Upload CV (PDF, DOC, DOCX)</label>
            <div className={styles.fileWrap}>
              <input id="cv" type="file" accept=".pdf,.doc,.docx" required className={styles.fileInput} onChange={(e) => setFormData({...formData, cv: e.target.files[0]})} />
              <label htmlFor="cv" className={styles.fileLabel}>
                <Upload size={18} />
                {formData.cv ? formData.cv.name : 'Choose file'}
              </label>
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="note" className={styles.label}>Cover Note (Optional)</label>
            <textarea id="note" rows="5" className={styles.textarea} value={formData.note} onChange={(e) => setFormData({...formData, note: e.target.value})} placeholder="Tell us why you want to join Proxynet..." />
          </div>

          <button type="submit" className={styles.submit}>
            Submit Application <Send size={16} />
          </button>
        </motion.form>
      </div>
    </section>
  )
}
