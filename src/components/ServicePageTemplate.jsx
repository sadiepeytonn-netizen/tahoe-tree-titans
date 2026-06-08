import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import RevealOnScroll from './RevealOnScroll'
import PageTransition from './PageTransition'

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.66-.66a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
  </svg>
)

export default function ServicePageTemplate({ title, subtitle, heroImage, heroAlt, intro, sections, details, relatedServices }) {
  return (
    <PageTransition>
      <div style={{ background: '#0F1A09', minHeight: '100vh' }}>

        {/* Hero */}
        <div style={{ position: 'relative', height: '60vh', minHeight: 400, overflow: 'hidden' }}>
          <motion.img
            src={heroImage} alt={heroAlt}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            initial={{ scale: 1.08 }} animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0F1A09 0%, rgba(15,26,9,0.6) 50%, transparent 100%)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 32px 48px', maxWidth: 1200, margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link to="/services" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: 'rgba(245,240,232,0.5)', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
                ← All Services
              </Link>
            </motion.div>
            <motion.div
              style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div style={{ width: 32, height: 3, background: '#E07A20', borderRadius: 99 }} />
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.25em', color: '#E07A20', textTransform: 'uppercase' }}>{subtitle}</span>
            </motion.div>
            <motion.h1
              style={{ fontFamily: "'Black Han Sans', Impact, sans-serif", fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 900, letterSpacing: '0.03em', color: '#F5F0E8', lineHeight: 0.92, margin: 0 }}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >{title}</motion.h1>
          </div>
        </div>

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 32px 80px' }}>

          {/* Intro */}
          <RevealOnScroll>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, color: 'rgba(245,240,232,0.8)', lineHeight: 1.8, maxWidth: 720, marginBottom: 64 }}>{intro}</p>
          </RevealOnScroll>

          {/* Details chips */}
          {details && (
            <RevealOnScroll delay={0.1}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 64 }}>
                {details.map((d, i) => (
                  <motion.span key={i}
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 600, color: '#E07A20', background: 'rgba(224,122,32,0.1)', border: '1px solid rgba(224,122,32,0.25)', borderRadius: 100, padding: '6px 16px' }}
                    initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }} viewport={{ once: true }}
                  >{d}</motion.span>
                ))}
              </div>
            </RevealOnScroll>
          )}

          {/* Content sections */}
          {sections && sections.map((section, i) => (
            <RevealOnScroll key={i} delay={i * 0.1}>
              <div style={{ marginBottom: 48, paddingBottom: 48, borderBottom: i < sections.length - 1 ? '1px solid rgba(245,240,232,0.06)' : 'none' }}>
                <h2 style={{ fontFamily: "'Black Han Sans', Impact, sans-serif", fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 900, letterSpacing: '0.03em', color: '#F5F0E8', marginBottom: 16 }}>
                  {section.heading}
                </h2>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, color: 'rgba(245,240,232,0.7)', lineHeight: 1.8, maxWidth: 720 }}>{section.body}</p>
              </div>
            </RevealOnScroll>
          ))}

          {/* CTA */}
          <RevealOnScroll delay={0.2}>
            <div style={{ textAlign: 'center', padding: '64px 32px', background: 'linear-gradient(135deg, rgba(224,122,32,0.08), rgba(45,90,27,0.08))', border: '1px solid rgba(224,122,32,0.2)', borderRadius: 24, marginBottom: 80 }}>
              <h2 style={{ fontFamily: "'Black Han Sans', Impact, sans-serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#F5F0E8', letterSpacing: '0.03em', marginBottom: 12 }}>
                FREE PROPERTY EVALUATION
              </h2>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, color: 'rgba(245,240,232,0.6)', maxWidth: 480, margin: '0 auto 32px', lineHeight: 1.7 }}>
                Call us today and Josh will assess your property at no charge. Serving South Lake Tahoe and the entire Tahoe Basin.
              </p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                <motion.a href="tel:5303070808" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 12,
                  background: 'linear-gradient(135deg, #E07A20, #F5A623)', color: '#0F1A09',
                  padding: '16px 36px', borderRadius: 12, fontFamily: "'Black Han Sans', Impact, sans-serif",
                  fontSize: 20, fontWeight: 900, letterSpacing: '0.05em', textDecoration: 'none',
                  boxShadow: '0 8px 32px rgba(224,122,32,0.4)',
                }}
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.15 }}
                >
                  <PhoneIcon /> (530) 307-0808
                </motion.a>
                <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.15 }}>
                  <Link to="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 10,
                    background: 'transparent', border: '1px solid rgba(245,240,232,0.3)',
                    color: '#F5F0E8', padding: '16px 32px', borderRadius: 12,
                    fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 600,
                    textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.08em',
                    transition: 'border-color 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = '#E07A20'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(245,240,232,0.3)'}
                  >Contact Form →</Link>
                </motion.div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Related services */}
          {relatedServices && (
            <RevealOnScroll>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <div style={{ width: 32, height: 3, background: '#E07A20', borderRadius: 99 }} />
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.25em', color: '#E07A20', textTransform: 'uppercase' }}>Related Services</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12 }}>
                {relatedServices.map((svc, i) => (
                  <motion.div key={i} whileHover={{ y: -4, borderColor: '#E07A20' }} transition={{ duration: 0.2 }}>
                    <Link to={svc.path} style={{
                      display: 'flex', alignItems: 'center', gap: 12,
                      background: '#0A1206', border: '1px solid rgba(245,240,232,0.08)',
                      borderRadius: 12, padding: '14px 18px', textDecoration: 'none',
                      transition: 'border-color 0.2s',
                    }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = '#E07A20'}
                      onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(245,240,232,0.08)'}
                    >
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#E07A20', flexShrink: 0 }} />
                      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 600, color: '#F5F0E8' }}>{svc.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </RevealOnScroll>
          )}
        </div>
      </div>

      <footer style={{ background: '#0A1206', borderTop: '1px solid rgba(245,240,232,0.08)', padding: '40px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <img src="/logo-text.png" alt="Tahoe Tree Titans" style={{ height: 40, width: 'auto' }} />
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: 'rgba(245,240,232,0.3)' }}>© {new Date().getFullYear()} Tahoe Tree Titans. All rights reserved.</p>
        </div>
      </footer>
    </PageTransition>
  )
}
