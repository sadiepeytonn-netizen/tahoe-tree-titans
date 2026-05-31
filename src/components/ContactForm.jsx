import { useState } from 'react'
import { motion } from 'framer-motion'
import RevealOnScroll from './RevealOnScroll'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', description: '' })
  const [submitted, setSubmitted] = useState(false)

  const inputStyle = {
    width: '100%',
    boxSizing: 'border-box',
    background: 'rgba(245,240,232,0.06)',
    border: '1px solid rgba(245,240,232,0.15)',
    borderRadius: 12,
    padding: '14px 16px',
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 14,
    color: '#F5F0E8',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  const labelStyle = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: '0.2em',
    color: 'rgba(245,240,232,0.5)',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: 8,
  }

  const handleFocus = e => e.target.style.borderColor = '#E07A20'
  const handleBlur = e => e.target.style.borderColor = 'rgba(245,240,232,0.15)'

  return (
    <RevealOnScroll delay={0.3}>
      <div style={{ marginTop: 80, maxWidth: 640, margin: '80px auto 0' }}>
        <div style={{ width: 40, height: 3, background: '#E07A20', margin: '0 auto 40px' }} />

        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.2em',
          color: '#E07A20',
          textTransform: 'uppercase',
          textAlign: 'center',
          marginBottom: 8,
        }}>
          Get a Free Estimate
        </p>

        <h3 style={{
          fontFamily: "'Black Han Sans', Impact, sans-serif",
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 900,
          color: '#F5F0E8',
          textAlign: 'center',
          marginBottom: 40,
          letterSpacing: '0.03em',
          lineHeight: 1,
        }}>
          TELL US ABOUT<br />
          <span style={{ color: '#E07A20' }}>YOUR JOB</span>
        </h3>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ textAlign: 'center', padding: '64px 0' }}
          >
            <div style={{ fontSize: 64, marginBottom: 16 }}>✅</div>
            <p style={{
              fontFamily: "'Black Han Sans', Impact, sans-serif",
              fontSize: 28,
              color: '#F5F0E8',
              letterSpacing: '0.05em',
            }}>
              Message Received
            </p>
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 15,
              color: 'rgba(245,240,232,0.5)',
              marginTop: 8,
            }}>
              We'll be in touch shortly. The Titans are on their way.
            </p>
          </motion.div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              <div>
                <label style={labelStyle}>Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Smith"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
              <div>
                <label style={labelStyle}>Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Phone Number</label>
              <input
                type="tel"
                placeholder="(530) 555-0000"
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>

            <div>
              <label style={labelStyle}>Describe Your Job</label>
              <textarea
                required
                rows={5}
                placeholder="Tell us about the trees, location, and what you need done..."
                value={form.description}
                onChange={e => setForm({ ...form, description: e.target.value })}
                style={{ ...inputStyle, resize: 'none' }}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>

            <motion.button
              onClick={() => setSubmitted(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                background: 'linear-gradient(135deg, #E07A20, #F5A623)',
                color: '#0F1A09',
                padding: '18px',
                borderRadius: 12,
                border: 'none',
                cursor: 'pointer',
                fontFamily: "'Black Han Sans', Impact, sans-serif",
                fontSize: 16,
                fontWeight: 900,
                letterSpacing: '0.1em',
                boxShadow: '0 8px 32px rgba(224,122,32,0.35)',
              }}
            >
              📨 SEND REQUEST
            </motion.button>
          </div>
        )}
      </div>
    </RevealOnScroll>
  )
}
