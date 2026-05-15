/**
 * SectionBlobs — decorative overlapping circles for sections.
 * variant="light" (default) for white/bg sections
 * variant="dark" for navy sections
 */
export default function SectionBlobs({ variant = 'light' }) {
  const isLight = variant === 'light'

  const c1 = isLight ? 'rgba(0,111,180,0.08)'  : 'rgba(255,255,255,0.06)'

  const c2 = isLight ? 'rgba(70,195,242,0.07)' : 'rgba(255,255,255,0.04)'

  const base = {
    position: 'absolute',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 0,
  }

  return (
    <>
      {/* Large circle — top left, partially off-screen */}
      <div style={{ ...base, width: 520, height: 520, top: -180, left: -140, background: c1 }} aria-hidden="true" />
      {/* Medium circle — overlapping centre-left */}
      <div style={{ ...base, width: 400, height: 400, top: -80, left: 160, background: c2 }} aria-hidden="true" />
    </>
  )
}

