import { motion } from 'framer-motion'
import { Ticket, Phone, MessageCircle, Mail } from 'lucide-react'
import styles from './SupportOptions.module.css'

const options = [
  { icon: <Ticket size={28} />, label: 'Raise a Ticket', desc: 'Submit a support request and track it through to resolution.', action: 'Raise Ticket', href: '#ticket', color: '#006fb4' },
  { icon: <Phone size={28} />, label: 'Call Support', desc: 'Speak directly with a support engineer. Available 24/7.', action: '+234 703 264 7755', href: 'tel:+2347032647755', color: '#059669' },
  { icon: <MessageCircle size={28} />, label: 'WhatsApp Support', desc: 'Message our support team on WhatsApp for fast responses.', action: 'Chat on WhatsApp', href: 'https://wa.me/2347032647755', color: '#25D366' },
  { icon: <Mail size={28} />, label: 'Email Support', desc: 'Send us an email and we will respond within 4 business hours.', action: 'info@proxynetgroup.com', href: 'mailto:info@proxynetgroup.com', color: '#7c3aed' },
]

export default function SupportOptions() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {options.map((o, i) => (
            <motion.a
              key={o.label}
              href={o.href}
              target={o.href.startsWith('http') ? '_blank' : undefined}
              rel={o.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={styles.card}
              style={{ '--accent': o.color }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <div className={styles.icon}>{o.icon}</div>
              <h3 className={styles.label}>{o.label}</h3>
              <p className={styles.desc}>{o.desc}</p>
              <span className={styles.action}>{o.action}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
