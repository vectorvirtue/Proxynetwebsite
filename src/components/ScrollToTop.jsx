import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // Always start at the top
    window.scrollTo(0, 0)

    // If there's a hash, wait for the page to render then scroll to the element
    if (hash) {
      const id = hash.replace('#', '')
      const attempt = (retries = 0) => {
        const el = document.getElementById(id)
        if (el) {
          // Small delay so the page has painted before scrolling
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }, 80)
        } else if (retries < 10) {
          // Element not in DOM yet — retry up to 10 times (500ms total)
          setTimeout(() => attempt(retries + 1), 50)
        }
      }
      attempt()
    }
  }, [pathname, hash])

  return null
}
