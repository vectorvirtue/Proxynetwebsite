import { useState, useRef, useEffect } from 'react'
import { ChevronDown, X } from 'lucide-react'
import styles from './FilterDropdown.module.css'

/**
 * FilterDropdown — label stays fixed, selected value shown as a badge.
 * Props:
 *   label      — always-visible button label (e.g. "SOLUTION")
 *   options    — array of strings (excluding "All")
 *   value      — current selected value or null
 *   onChange   — (value | null) => void
 */
export default function FilterDropdown({ label, options, value, onChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  // Close on outside click
  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const isActive = value !== null && value !== undefined

  return (
    <div className={styles.wrap} ref={ref}>
      <button
        className={`${styles.btn} ${isActive ? styles.btnActive : ''}`}
        onClick={() => setOpen(p => !p)}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span className={styles.label}>{label}</span>
        {isActive && (
          <span className={styles.badge}>
            {value}
            <span
              className={styles.badgeClear}
              role="button"
              aria-label="Clear filter"
              onClick={e => { e.stopPropagation(); onChange(null) }}
            >
              <X size={10} />
            </span>
          </span>
        )}
        <ChevronDown size={13} className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`} />
      </button>

      {open && (
        <ul className={styles.menu} role="listbox">
          {options.map(opt => (
            <li
              key={opt}
              role="option"
              aria-selected={value === opt}
              className={`${styles.option} ${value === opt ? styles.optionActive : ''}`}
              onClick={() => { onChange(value === opt ? null : opt); setOpen(false) }}
            >
              {opt}
              {value === opt && <X size={12} className={styles.optionCheck} />}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

