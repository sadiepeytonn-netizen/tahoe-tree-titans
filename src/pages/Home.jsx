import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import RevealOnScroll from '../components/RevealOnScroll'
import LoadingScreen from '../components/LoadingScreen'
import Reviews from '../components/Reviews'

const HERO_IMG = '/hero.png'

const trustStats = [
  { stat: '20+', label: 'Years Experience' },
  { stat: '5.0', label: 'Google Rating' },
  { stat: '100%', label: 'Licensed & Insured' },
  { stat: '60+', label: 'Years Team Experience' },
  { stat: 'Free', label: 'Property Evaluation' },
]

const servicesList = [
  { icon: '🌲', name: 'Tree Removal', path: '/services' },
  { icon: '🏗️', name: 'Crane Work', path: '/services' },
  { icon: '⚡', name: 'Emergency Work', path: '/services' },
  { icon: '✂️', name: 'Tree Limbing', path: '/services' },
  { icon: '🪵', name: 'Stump Grinding', path: '/services' },
  { icon: '🌿', name: 'Ornamental Pruning', path: '/services' },
  { icon: '🛡️', name: 'Defensible Space', path: '/services' },
  { icon: '🔥', name: 'Wildfire Mitigation', path: '/services' },
  { icon: '🍂', name: 'Pine Needle Cleanup', path: '/services' },
  { icon: '🪓', name: 'Firewood', path: '/services' },
]

const serviceAreas = [
  'South Lake Tahoe, CA', 'Stateline, NV', 'Meyers, CA', 'Tahoe City, CA',
  'Kings Beach, CA', 'Incline Village, NV', 'Truckee, CA', 'Echo Lake, CA',
  'Fallen Leaf Lake, CA', 'Zephyr Cove, NV', 'Carnelian Bay, CA', 'Tahoma, CA',
  'El Dorado Hills, CA', 'Placerville, CA', 'Glenbrook, NV',
]

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [hovered, setHovered] = useState(false)

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {/* ── HERO ── */}
      <section style={{
        position: 'relative', minHeight: 'calc(100vh - 80px)',
        display: 'flex', alignItems: 'flex-end', overflow: 'hidden',
      }}>
        <motion.div
          style={{ position: 'absolute', inset: 0 }}
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <img src={HERO_IMG} alt="Arborist in Ponderosa pine with Lake Tahoe"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0F1A09 0%, rgba(15,26,9,0.65) 45%, transparent 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at bottom left, rgba(224,122,32,0.12) 0%, transparent 60%)' }} />
        </motion.div>

        <motion.div style={{
          position: 'absolute', top: 32, left: 32, zIndex: 10,
          background: 'rgba(15,26,9,0.75)', backdropFilter: 'blur(12px)',
          border: '1px solid rgba(224,122,32,0.4)', borderRadius: 12,
          padding: '8px 16px', display: 'flex', alignItems: 'center', gap: 8,
        }}
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
        >
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#E07A20' }} />
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', color: '#F5F0E8', textTransform: 'uppercase' }}>South Lake Tahoe, CA</span>
        </motion.div>

        <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: 1200, margin: '0 auto', padding: '0 32px 100px' }}>
          <RevealOnScroll delay={0.3}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(224,122,32,0.15)', border: '1px solid rgba(224,122,32,0.3)', borderRadius: 100, padding: '4px 14px', marginBottom: 24 }}>
              <span style={{ fontSize: 10, color: '#F5A623', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase' }}>Licensed &amp; Insured Arborists</span>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.4}>
            <h1 style={{ fontFamily: "'Black Han Sans', Impact, sans-serif", fontSize: 'clamp(3.5rem, 10vw, 8rem)', fontWeight: 900, letterSpacing: '0.02em', color: '#F5F0E8', lineHeight: 0.92, margin: 0 }}>
              SCALE THE<br /><span style={{ color: '#E07A20' }}>SKY.</span>
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={0.55}>
            <h1 style={{ fontFamily: "'Black Han Sans', Impact, sans-serif", fontSize: 'clamp(3.5rem, 10vw, 8rem)', fontWeight: 900, letterSpacing: '0.02em', color: '#F5F0E8', lineHeight: 0.92, margin: '8px 0 0' }}>
              SECURE THE<br /><span style={{ color: '#2D5A1B' }}>EARTH.</span>
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={0.7}>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(245,240,232,0.7)', marginTop: 32, maxWidth: 480, lineHeight: 1.7 }}>
              South Lake Tahoe's premier tree removal &amp; arborist service. Protecting your property with precision and care since day one.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.85}>
            <div style={{ display: 'flex', gap: 16, marginTop: 40, flexWrap: 'wrap' }}>
              <a href="tel:5303070808" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                background: 'linear-gradient(135deg, #E07A20, #F5A623)', color: '#0F1A09',
                padding: '16px 32px', borderRadius: 12, fontFamily: "'Black Han Sans', Impact, sans-serif",
                fontSize: 18, fontWeight: 900, letterSpacing: '0.05em', textDecoration: 'none',
                transition: 'transform 0.2s', boxShadow: '0 8px 32px rgba(224,122,32,0.4)',
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >📞 (530) 307-0808</a>
              <Link to="/services" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                background: 'transparent', color: '#F5F0E8', padding: '16px 32px', borderRadius: 12,
                fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 600,
                letterSpacing: '0.1em', textDecoration: 'none', textTransform: 'uppercase',
                border: '1px solid rgba(245,240,232,0.3)', transition: 'border-color 0.2s, background 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#E07A20'; e.currentTarget.style.background = 'rgba(224,122,32,0.08)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(245,240,232,0.3)'; e.currentTarget.style.background = 'transparent' }}
              >Our Services →</Link>
            </div>
          </RevealOnScroll>
        </div>

        {/* Desktop floating CTA */}
        <motion.div className="desktop-cta" style={{
          position: 'fixed', bottom: 24, right: 24, zIndex: 50,
          backdropFilter: 'blur(16px)', background: 'rgba(15,26,9,0.85)',
          border: '1px solid rgba(224,122,32,0.4)', borderRadius: 16, padding: 20,
          boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
        }}
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
        >
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 10, fontWeight: 700, color: '#E07A20', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12 }}>Schedule Evaluation</p>
          <Link to="/contact" style={{
            display: 'flex', alignItems: 'center', gap: 10,
            background: 'linear-gradient(135deg, #E07A20, #F5A623)', color: '#0F1A09',
            padding: '12px 20px', borderRadius: 10, fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700, fontSize: 14, textDecoration: 'none',
          }}>📋 Get Free Evaluation</Link>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, color: 'rgba(245,240,232,0.4)', marginTop: 10 }}>🕐 Mon–Sat · 7 AM – 5 PM</p>
        </motion.div>

        {/* Mobile CTA */}
        <motion.div className="mobile-cta" style={{ position: 'fixed', bottom: 16, left: 16, right: 16, zIndex: 50 }}
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.6 }}
        >
          <Link to="/contact" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
            background: 'linear-gradient(135deg, #E07A20, #F5A623)', color: '#0F1A09',
            padding: 18, borderRadius: 14, fontFamily: "'Black Han Sans', Impact, sans-serif",
            fontSize: 18, fontWeight: 900, letterSpacing: '0.05em', textDecoration: 'none',
            boxShadow: '0 8px 32px rgba(224,122,32,0.5)',
          }}>📋 Get Free Evaluation</Link>
        </motion.div>
      </section>

      {/* ── TRUST BADGES ── */}
      <section style={{ background: '#0A1206', padding: '64px 32px', borderBottom: '1px solid rgba(224,122,32,0.15)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <RevealOnScroll>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 16 }}>
              {trustStats.map((item, i) => (
                <div key={i} style={{
                  textAlign: 'center', background: 'rgba(224,122,32,0.06)',
                  border: '1px solid rgba(224,122,32,0.2)', borderRadius: 16, padding: '28px 16px',
                  transition: 'border-color 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = '#E07A20'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(224,122,32,0.2)'}
                >
                  <div style={{ fontFamily: "'Black Han Sans', Impact, sans-serif", fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 900, color: '#E07A20', lineHeight: 1 }}>{item.stat}</div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 600, color: 'rgba(245,240,232,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 8 }}>{item.label}</div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section style={{ background: '#F5F0E8', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <RevealOnScroll>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <div style={{ width: 32, height: 3, background: '#E07A20', borderRadius: 99 }} />
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.25em', color: '#E07A20', textTransform: 'uppercase' }}>What We Do</span>
            </div>
            <h2 style={{ fontFamily: "'Black Han Sans', Impact, sans-serif", fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '0.03em', color: '#0F1A09', lineHeight: 0.92, marginBottom: 40 }}>
              OUR SERVICES
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 12, marginBottom: 36 }}>
              {servicesList.map((svc, i) => (
                <Link key={i} to={svc.path} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  background: '#0F1A09', borderRadius: 12, padding: '14px 18px',
                  textDecoration: 'none', border: '1px solid transparent',
                  transition: 'border-color 0.2s, transform 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#E07A20'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  <span style={{ fontSize: 20 }}>{svc.icon}</span>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 600, color: '#F5F0E8' }}>{svc.name}</span>
                </Link>
              ))}
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <Link to="/services" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#0F1A09', color: '#F5F0E8', padding: '14px 28px',
              borderRadius: 10, fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 14, fontWeight: 600, letterSpacing: '0.08em',
              textDecoration: 'none', textTransform: 'uppercase',
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = '#E07A20'}
              onMouseLeave={e => e.currentTarget.style.background = '#0F1A09'}
            >View All Services →</Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── EMERGENCY CTA BANNER ── */}
      <section style={{ background: '#0A0600', padding: '80px 32px', borderTop: '2px solid #E07A20', borderBottom: '2px solid #E07A20', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <RevealOnScroll>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(224,122,32,0.15)', border: '1px solid rgba(224,122,32,0.3)', borderRadius: 100, padding: '4px 16px', marginBottom: 24 }}>
              <span style={{ fontSize: 10, color: '#F5A623', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.2em', fontWeight: 700, textTransform: 'uppercase' }}>⚡ 24/7 Emergency Response</span>
            </div>
            <h2 style={{ fontFamily: "'Black Han Sans', Impact, sans-serif", fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 900, letterSpacing: '0.03em', color: '#F5F0E8', lineHeight: 0.92, marginBottom: 12 }}>
              TREE EMERGENCY?
            </h2>
            <h2 style={{ fontFamily: "'Black Han Sans', Impact, sans-serif", fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 900, letterSpacing: '0.03em', color: '#E07A20', lineHeight: 0.92, marginBottom: 24 }}>
              WE RESPOND SAME DAY.
            </h2>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, color: 'rgba(245,240,232,0.6)', lineHeight: 1.7, marginBottom: 36, maxWidth: 520, margin: '0 auto 36px' }}>
              Storm damage, fallen trees, hazardous limbs threatening your home — we move fast when it matters most. Don't wait, call us now.
            </p>
            <a href="tel:5303070808" style={{
              display: 'inline-flex', alignItems: 'center', gap: 14,
              background: 'linear-gradient(135deg, #E07A20, #F5A623)', color: '#0F1A09',
              padding: '20px 48px', borderRadius: 14, fontFamily: "'Black Han Sans', Impact, sans-serif",
              fontSize: 24, fontWeight: 900, letterSpacing: '0.05em', textDecoration: 'none',
              boxShadow: '0 12px 40px rgba(224,122,32,0.5)', transition: 'transform 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >📞 (530) 307-0808</a>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section style={{ background: '#0F1A09', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <RevealOnScroll>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <div style={{ width: 32, height: 3, background: '#E07A20', borderRadius: 99 }} />
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.25em', color: '#E07A20', textTransform: 'uppercase' }}>Where We Work</span>
            </div>
            <h2 style={{ fontFamily: "'Black Han Sans', Impact, sans-serif", fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '0.03em', color: '#F5F0E8', lineHeight: 0.92, marginBottom: 16 }}>
              SERVING THE<br /><span style={{ color: '#E07A20' }}>SIERRA NEVADA</span>
            </h2>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, color: 'rgba(245,240,232,0.5)', maxWidth: 520, lineHeight: 1.7, marginBottom: 40 }}>
              Tahoe Tree Titans proudly serves South Lake Tahoe and the surrounding Sierra Nevada communities. Search "tree removal near me" anywhere in our service area and we've got you covered.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 10 }}>
              {serviceAreas.map((area, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  background: '#0A1206', border: '1px solid rgba(245,240,232,0.08)',
                  borderRadius: 10, padding: '12px 16px', transition: 'border-color 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(224,122,32,0.4)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(245,240,232,0.08)'}
                >
                  <span style={{ color: '#E07A20', fontSize: 14, flexShrink: 0 }}>📍</span>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 500, color: 'rgba(245,240,232,0.75)' }}>{area}</span>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <Reviews />

      {/* ── GOOGLE REVIEWS BADGE ── */}
      <section style={{ background: '#F5F0E8', padding: '64px 32px', textAlign: 'center' }}>
        <RevealOnScroll>
          <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 16, background: '#0F1A09', border: '1px solid rgba(224,122,32,0.3)', borderRadius: 20, padding: '40px 56px' }}>
            <div style={{ display: 'flex', gap: 6 }}>
              {[1,2,3,4,5].map(i => <span key={i} style={{ fontSize: 28, color: '#E07A20' }}>★</span>)}
            </div>
            <div style={{ fontFamily: "'Black Han Sans', Impact, sans-serif", fontSize: 64, fontWeight: 900, color: '#F5F0E8', lineHeight: 1 }}>5.0</div>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, color: 'rgba(245,240,232,0.5)' }}>Based on Google Reviews</p>
            <a
              href="https://www.google.com/search?q=tahoe+tree+titans"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                background: 'linear-gradient(135deg, #E07A20, #F5A623)', color: '#0F1A09',
                padding: '12px 28px', borderRadius: 10,
                fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 14,
                textDecoration: 'none', transition: 'transform 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >⭐ Read Our Google Reviews</a>
          </div>
        </RevealOnScroll>
      </section>

      {/* ── FOOTER ── */}
      <Footer />

      <style>{`
        @media (min-width: 768px) { .mobile-cta { display: none !important; } }
        @media (max-width: 767px) { .desktop-cta { display: none !important; } }
      `}</style>
    </>
  )
}

function Footer() {
  return (
    <footer style={{ background: '#0A1206', borderTop: '1px solid rgba(245,240,232,0.08)', padding: '40px 32px' }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', flexWrap: 'wrap', gap: 16,
      }}>
        <img src="/logo-text.png" alt="Tahoe Tree Titans" style={{ height: 40, width: 'auto' }} />
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          {[['Home', '/'], ['Services', '/services'], ['About Us', '/about'], ['Contact Us', '/contact']].map(([label, path]) => (
            <Link key={path} to={path} style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: 13,
              color: 'rgba(245,240,232,0.5)', textDecoration: 'none', transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#E07A20'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,240,232,0.5)'}
            >{label}</Link>
          ))}
        </div>
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: 'rgba(245,240,232,0.3)' }}>
          © {new Date().getFullYear()} Tahoe Tree Titans. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
