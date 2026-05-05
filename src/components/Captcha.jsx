import ReCAPTCHA from 'react-google-recaptcha'
import styles from './Captcha.module.css'

// Replace with your real site key from https://www.google.com/recaptcha/admin
// Use 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI for testing only
const SITE_KEY = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'

export default function Captcha({ onChange }) {
  return (
    <div className={styles.wrap}>
      <ReCAPTCHA sitekey={SITE_KEY} onChange={onChange} />
    </div>
  )
}
