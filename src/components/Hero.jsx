import { useState } from 'react'
import { motion } from 'framer-motion'
import RevealOnScroll from './RevealOnScroll'

const HERO_IMG = '/hero.png'

export default function Hero() {
  const [hovered, setHovered] = useState(false)

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'flex-end',
      overflow: 'hidden',
    }}>
      {/* Background image with parallax zoom on hover */}
      <motion.div
        style={{ position: 'absolute', inset: 0 }}
        animate={{ scale: hovered ? 1.05 : 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <img
          src={HERO_IMG}
          alt="Arborist in Ponderosa pine with Lake Tahoe"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {/* Dark gradient overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, #0F1A09 0%, rgba(15,26,9,0.65) 45%, transparent 100%)',
        }} />
        {/* Orange radial accent */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at bottom left, rgba(224,122,32,0.12) 0%, transparent 60%)',
        }} />
      </motion.div>

      {/* Location badge top-left */}
      <motion.div
        style={{
          position: 'absolute',
          top: 32,
          left: 32,
          zIndex: 10,
          background: 'rgba(15,26,9,0.75)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(224,122,32,0.4)',
          borderRadius: 12,
          padding: '8px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#E07A20' }} />
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '0.2em',
          color: '#F5F0E8',
          textTransform: 'uppercase',
        }}>
          South Lake Tahoe, CA
        </span>
      </motion.div>

      {/* Main content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        width: '100%',
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 32px 100px',
      }}>
        <RevealOnScroll delay={0.3}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(224,122,32,0.15)',
            border: '1px solid rgba(224,122,32,0.3)',
            borderRadius: 100,
            padding: '4px 14px',
            marginBottom: 24,
          }}>
            <span style={{
              fontSize: 10,
              color: '#F5A623',
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: '0.2em',
              fontWeight: 600,
              textTransform: 'uppercase',
            }}>
              Licensed &amp; Insured Arborists
            </span>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.4}>
          <h1 style={{
            fontFamily: "'Black Han Sans', Impact, sans-serif",
            fontSize: 'clamp(3.5rem, 10vw, 8rem)',
            fontWeight: 900,
            letterSpacing: '0.02em',
            color: '#F5F0E8',
            lineHeight: 0.92,
            margin: 0,
          }}>
            SCALE THE<br />
            <span style={{ color: '#E07A20' }}>SKY.</span>
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={0.55}>
          <h1 style={{
            fontFamily: "'Black Han Sans', Impact, sans-serif",
            fontSize: 'clamp(3.5rem, 10vw, 8rem)',
            fontWeight: 900,
            letterSpacing: '0.02em',
            color: '#F5F0E8',
            lineHeight: 0.92,
            margin: '8px 0 0',
          }}>
            SECURE THE<br />
            <span style={{ color: '#2D5A1B' }}>EARTH.</span>
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={0.7}>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'rgba(245,240,232,0.7)',
            marginTop: 32,
            maxWidth: 480,
            lineHeight: 1.7,
          }}>
            South Lake Tahoe's premier tree removal &amp; arborist service.
            Protecting your property with precision and care.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.85}>
          <div style={{ display: 'flex', gap: 16, marginTop: 40, flexWrap: 'wrap' }}>
            <a
              href="tel:5303070808"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: 'linear-gradient(135deg, #E07A20, #F5A623)',
                color: '#0F1A09',
                padding: '16px 32px',
                borderRadius: 12,
                fontFamily: "'Black Han Sans', Impact, sans-serif",
                fontSize: 18,
                fontWeight: 900,
                letterSpacing: '0.05em',
                textDecoration: 'none',
                transition: 'transform 0.2s',
                boxShadow: '0 8px 32px rgba(224,122,32,0.4)',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              📞 (530) 307-0808
            </a>
            <a
              href="#services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: 'transparent',
                color: '#F5F0E8',
                padding: '16px 32px',
                borderRadius: 12,
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: '0.1em',
                textDecoration: 'none',
                textTransform: 'uppercase',
                border: '1px solid rgba(245,240,232,0.3)',
                transition: 'border-color 0.2s, background 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#E07A20'
                e.currentTarget.style.background = 'rgba(224,122,32,0.08)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(245,240,232,0.3)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              Our Services ↓
            </a>
          </div>
        </RevealOnScroll>
      </div>

      {/* Floating CTA — Desktop */}
      <motion.div
        className="desktop-cta"
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 50,
          backdropFilter: 'blur(16px)',
          background: 'rgba(15,26,9,0.85)',
          border: '1px solid rgba(224,122,32,0.4)',
          borderRadius: 16,
          padding: 20,
          boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
        }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 10,
          fontWeight: 700,
          color: '#E07A20',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: 12,
        }}>
          Schedule Evaluation
        </p>
        <a
          href="tel:5303070808"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            background: 'linear-gradient(135deg, #E07A20, #F5A623)',
            color: '#0F1A09',
            padding: '12px 20px',
            borderRadius: 10,
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 14,
            textDecoration: 'none',
          }}
        >
          📞 (530) 307-0808
        </a>
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 11,
          color: 'rgba(245,240,232,0.4)',
          marginTop: 10,
          display: 'flex',
          alignItems: 'center',
          gap: 6,
        }}>
          🕐 Mon–Sat · 7 AM – 5 PM
        </p>
      </motion.div>

      {/* Mobile CTA */}
      <motion.a
        href="tel:5303070808"
        className="mobile-cta"
        style={{
          position: 'fixed',
          bottom: 16,
          left: 16,
          right: 16,
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 12,
          background: 'linear-gradient(135deg, #E07A20, #F5A623)',
          color: '#0F1A09',
          padding: 18,
          borderRadius: 14,
          fontFamily: "'Black Han Sans', Impact, sans-serif",
          fontSize: 18,
          fontWeight: 900,
          letterSpacing: '0.05em',
          textDecoration: 'none',
          boxShadow: '0 8px 32px rgba(224,122,32,0.5)',
        }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        📞 Call (530) 307-0808
      </motion.a>
    </section>
  )
}
