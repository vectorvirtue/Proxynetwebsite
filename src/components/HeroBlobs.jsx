/**
 * HeroBlobs — large decorative circles for navy hero sections.
 * Produces the bold teal/blue blobs visible on the Events hero.
 */
export default function HeroBlobs() {
  const base = {
    position: 'absolute',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 0,
  }

  return (
    <>
      {/* Large teal circle — left, partially off-screen */}
      <div
        style={{
          ...base,
          width: 560,
          height: 560,
          top: -160,
          left: -180,
          background: 'radial-gradient(circle, rgba(0,180,200,0.28) 0%, rgba(0,111,180,0.18) 50%, transparent 75%)',
        }}
        aria-hidden="true"
      />
      {/* Medium blue circle — overlapping, centre-left */}
      <div
        style={{
          ...base,
          width: 380,
          height: 380,
          top: 40,
          left: 120,
          background: 'radial-gradient(circle, rgba(70,195,242,0.18) 0%, rgba(0,111,180,0.10) 55%, transparent 80%)',
        }}
        aria-hidden="true"
      />
      {/* Small accent — bottom right sparkle area */}
      <div
        style={{
          ...base,
          width: 220,
          height: 220,
          bottom: -60,
          right: 80,
          background: 'radial-gradient(circle, rgba(0,111,180,0.14) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
    </>
  )
}
