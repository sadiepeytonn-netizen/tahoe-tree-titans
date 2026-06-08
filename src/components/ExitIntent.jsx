import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ExitIntent() {
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (dismissed) return

    const handleMouseLeave = (e) => {
      if (e.clientY <= 10 && !dismissed) {
        setTimeout(() => setShow(true), 300)
      }
    }

    // Also show after 45 seconds of inactivity
    const timer = setTimeout(() => {
      if (!dismissed) setShow(true)
    }, 45000)

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      clearTimeout(timer)
    }
  }, [dismissed])

  const dismiss = () => {
    setShow(false)
    setDismissed(true)
  }

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={dismiss}
            style={{
              position: 'fixed', inset: 0, zIndex: 200,
              background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)',
            }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              position: 'fixed', bottom: 0, left: 0, right: 0,
              zIndex: 201, margin: '0 auto',
              background: '#0A1206',
              borderTop: '2px solid #E07A20',
              borderRadius: '20px 20px 0 0',
              padding: '40px 32px 48px',
              maxWidth: 600,
              left: '50%', transform: 'translateX(-50%)',
              boxShadow: '0 -20px 60px rgba(0,0,0,0.5)',
            }}
          >
            {/* Close button */}
            <button
              onClick={dismiss}
              style={{
                position: 'absolute', top: 16, right: 16,
                background: 'rgba(245,240,232,0.1)', border: 'none',
                borderRadius: '50%', width: 32, height: 32,
                cursor: 'pointer', color: '#F5F0E8', fontSize: 16,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >✕</button>

            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(224,122,32,0.15)', border: '1px solid rgba(224,122,32,0.3)',
              borderRadius: 100, padding: '4px 14px', marginBottom: 16,
            }}>
              <span style={{ fontSize: 10, color: '#F5A623', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.2em', fontWeight: 700, textTransform: 'uppercase' }}>
                🌲 Don't Leave Without This
              </span>
            </div>

            <h2 style={{
              fontFamily: "'Black Han Sans', Impact, sans-serif",
              fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
              fontWeight: 900, letterSpacing: '0.03em',
              color: '#F5F0E8', lineHeight: 0.95, marginBottom: 12,
            }}>
              GET A FREE<br />
              <span style={{ color: '#E07A20' }}>PROPERTY EVALUATION</span>
            </h2>

            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 15, color: 'rgba(245,240,232,0.65)',
              lineHeight: 1.6, marginBottom: 28, maxWidth: 440,
            }}>
              Not sure what your property needs? Josh will assess your trees, defensible space, and fire risk — completely free, no obligation.
            </p>

            {/* Three CTAs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <motion.a
                href="tel:5303070808"
                onClick={dismiss}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
                  background: 'linear-gradient(135deg, #E07A20, #F5A623)',
                  color: '#0F1A09', padding: '16px', borderRadius: 12,
                  fontFamily: "'Black Han Sans', Impact, sans-serif",
                  fontSize: 20, fontWeight: 900, letterSpacing: '0.05em', textDecoration: 'none',
                  boxShadow: '0 8px 32px rgba(224,122,32,0.4)',
                }}
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.66-.66a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
                </svg>
                Call (530) 307-0808
              </motion.a>

              <motion.a
                href="sms:5303070808"
                onClick={dismiss}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
                  background: 'rgba(224,122,32,0.1)', border: '1px solid rgba(224,122,32,0.3)',
                  color: '#F5F0E8', padding: '14px', borderRadius: 12,
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 15, fontWeight: 600, textDecoration: 'none',
                }}
                whileHover={{ background: 'rgba(224,122,32,0.2)' }}
                transition={{ duration: 0.15 }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                Text Us Instead
              </motion.a>

              <Link
                to="/contact"
                onClick={dismiss}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
                  background: 'transparent', border: '1px solid rgba(245,240,232,0.15)',
                  color: 'rgba(245,240,232,0.6)', padding: '14px', borderRadius: 12,
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 14, fontWeight: 600, textDecoration: 'none',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(245,240,232,0.3)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(245,240,232,0.15)'}
              >
                Fill Out the Contact Form
              </Link>
            </div>

            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11, color: 'rgba(245,240,232,0.3)',
              textAlign: 'center', marginTop: 16,
            }}>
              Mon–Sat · 7 AM – 5 PM · South Lake Tahoe, CA
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
