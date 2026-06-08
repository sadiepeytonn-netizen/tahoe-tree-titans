import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import RevealOnScroll from '../components/RevealOnScroll'
import PageTransition from '../components/PageTransition'

const photos = [
  { src: '/gallery-1.jpg.webp', alt: 'Emergency tree fallen on home South Lake Tahoe', caption: 'Emergency Response', tag: 'Emergency Work' },
  { src: '/gallery-2.jpg.webp', alt: 'Crane truck on residential street South Lake Tahoe', caption: 'Crane on Site', tag: 'Crane Work' },
  { src: '/gallery-3.jpg.webp', alt: 'Full crane operation removing large pine near home', caption: 'Large Pine Removal', tag: 'Crane Work' },
  { src: '/gallery-4.webp.webp', alt: 'POV tree removal from crane bucket South Lake Tahoe', caption: 'Up in the Canopy', tag: 'Tree Removal' },
  { src: '/gallery-5.webp.webp', alt: 'Cleared defensible space property South Lake Tahoe', caption: 'Defensible Space Complete', tag: 'Defensible Space' },
  { src: '/gallery-6.webp.webp', alt: 'Property after tree removal South Lake Tahoe', caption: 'After Removal', tag: 'Tree Removal' },
  { src: '/gallery-7.webp.webp', alt: 'Tahoe cabin after tree removal golden hour', caption: 'Property Cleared', tag: 'Tree Removal' },
  { src: '/gallery-8.webp.webp', alt: 'Arborist hanging from crane South Lake Tahoe', caption: 'Technical Crane Work', tag: 'Crane Work' },
  { src: '/gallery-9.webp.webp', alt: 'Crew member after stump grinding South Lake Tahoe', caption: 'Stump Grinding Complete', tag: 'Stump Grinding' },
  { src: '/gallery-10.webp.webp', alt: 'Crane lifting full pine tree South Lake Tahoe', caption: 'Full Tree Lift', tag: 'Crane Work' },
]

const tags = ['All', 'Tree Removal', 'Crane Work', 'Emergency Work', 'Defensible Space', 'Stump Grinding']

export default function GalleryPage() {
  const [activeTag, setActiveTag] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = activeTag === 'All' ? photos : photos.filter(p => p.tag === activeTag)

  return (
    <PageTransition>
      <div style={{ background: '#0F1A09', minHeight: '100vh', paddingBottom: 80 }}>

        {/* Header */}
        <div style={{ background: 'linear-gradient(to bottom, #0A1206, #0F1A09)', padding: '80px 32px 64px', borderBottom: '1px solid rgba(224,122,32,0.15)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ width: 32, height: 3, background: '#E07A20', borderRadius: 99 }} />
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.25em', color: '#E07A20', textTransform: 'uppercase' }}>Our Work</span>
              </div>
            </motion.div>
            <motion.h1 style={{ fontFamily: "'Black Han Sans', Impact, sans-serif", fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 900, letterSpacing: '0.03em', color: '#F5F0E8', lineHeight: 0.92, marginBottom: 16 }}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >PHOTO GALLERY</motion.h1>
            <motion.p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, color: 'rgba(245,240,232,0.6)', maxWidth: 520, lineHeight: 1.7 }}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >Real jobs, real results. Photos from actual Tahoe Tree Titans projects throughout South Lake Tahoe and the Sierra Nevada.</motion.p>
          </div>
        </div>

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 32px 0' }}>

          {/* Filter tags */}
          <RevealOnScroll>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 48 }}>
              {tags.map(tag => (
                <motion.button key={tag}
                  onClick={() => setActiveTag(tag)}
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 600,
                    padding: '8px 20px', borderRadius: 100, border: 'none', cursor: 'pointer',
                    background: activeTag === tag ? 'linear-gradient(135deg, #E07A20, #F5A623)' : 'rgba(245,240,232,0.06)',
                    color: activeTag === tag ? '#0F1A09' : 'rgba(245,240,232,0.6)',
                    border: activeTag === tag ? 'none' : '1px solid rgba(245,240,232,0.12)',
                    transition: 'all 0.2s',
                  }}
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.15 }}
                >{tag}</motion.button>
              ))}
            </div>
          </RevealOnScroll>

          {/* Photo grid */}
          <motion.div layout style={{ columns: '1 300px', gap: 16, marginBottom: 80 }}>
            <AnimatePresence>
              {filtered.map((photo, i) => (
                <motion.div
                  key={photo.src}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  style={{ breakInside: 'avoid', marginBottom: 16, borderRadius: 16, overflow: 'hidden', cursor: 'pointer', position: 'relative' }}
                  onClick={() => setLightbox(photo)}
                  whileHover={{ scale: 1.02 }}
                >
                  <img src={photo.src} alt={photo.alt} style={{ width: '100%', display: 'block', borderRadius: 16 }} />
                  <motion.div
                    style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,26,9,0.8) 0%, transparent 50%)', borderRadius: 16, display: 'flex', alignItems: 'flex-end', padding: 16, opacity: 0 }}
                    whileHover={{ opacity: 1 }} transition={{ duration: 0.2 }}
                  >
                    <div>
                      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 10, fontWeight: 700, color: '#E07A20', letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: 4 }}>{photo.tag}</span>
                      <span style={{ fontFamily: "'Black Han Sans', Impact, sans-serif", fontSize: 16, color: '#F5F0E8', letterSpacing: '0.05em' }}>{photo.caption}</span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* CTA */}
          <RevealOnScroll>
            <div style={{ textAlign: 'center', padding: '64px 32px', background: 'linear-gradient(135deg, rgba(224,122,32,0.08), rgba(45,90,27,0.08))', border: '1px solid rgba(224,122,32,0.2)', borderRadius: 24 }}>
              <h2 style={{ fontFamily: "'Black Han Sans', Impact, sans-serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#F5F0E8', letterSpacing: '0.03em', marginBottom: 12 }}>READY FOR YOUR PROPERTY?</h2>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, color: 'rgba(245,240,232,0.6)', maxWidth: 480, margin: '0 auto 32px', lineHeight: 1.7 }}>
                Call us today for a free property evaluation. We serve all of South Lake Tahoe and the Tahoe Basin.
              </p>
              <motion.a href="tel:5303070808" style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                background: 'linear-gradient(135deg, #E07A20, #F5A623)', color: '#0F1A09',
                padding: '18px 40px', borderRadius: 12, fontFamily: "'Black Han Sans', Impact, sans-serif",
                fontSize: 20, fontWeight: 900, letterSpacing: '0.05em', textDecoration: 'none',
                boxShadow: '0 8px 32px rgba(224,122,32,0.4)',
              }}
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.15 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.66-.66a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
                </svg>
                (530) 307-0808
              </motion.a>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setLightbox(null)}
              style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(8px)', cursor: 'pointer' }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 201, maxWidth: '90vw', maxHeight: '85vh' }}
            >
              <img src={lightbox.src} alt={lightbox.alt} style={{ maxWidth: '90vw', maxHeight: '80vh', objectFit: 'contain', borderRadius: 12, display: 'block' }} />
              <div style={{ textAlign: 'center', marginTop: 12 }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, color: 'rgba(245,240,232,0.6)' }}>{lightbox.caption}</span>
              </div>
              <button onClick={() => setLightbox(null)} style={{
                position: 'absolute', top: -16, right: -16, background: '#E07A20', border: 'none',
                borderRadius: '50%', width: 36, height: 36, cursor: 'pointer', color: '#0F1A09',
                fontSize: 18, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>✕</button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <footer style={{ background: '#0A1206', borderTop: '1px solid rgba(245,240,232,0.08)', padding: '40px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <img src="/logo-text.png" alt="Tahoe Tree Titans" style={{ height: 40, width: 'auto' }} />
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: 'rgba(245,240,232,0.3)' }}>© {new Date().getFullYear()} Tahoe Tree Titans. All rights reserved.</p>
        </div>
      </footer>
    </PageTransition>
  )
}
