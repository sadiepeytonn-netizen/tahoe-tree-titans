import { useState } from 'react'
import { motion } from 'framer-motion'
import RevealOnScroll from '../components/RevealOnScroll'

const serviceAreas = [
  'South Lake Tahoe, CA',
  'Stateline, NV',
  'Meyers, CA',
  'Tahoe City, CA',
  'Kings Beach, CA',
  'Incline Village, NV',
  'Truckee, CA',
  'Echo Lake, CA',
  'Fallen Leaf Lake, CA',
  'Zephyr Cove, NV',
  'Glenbrook, NV',
  'Carnelian Bay, CA',
  'Tahoma, CA',
  'El Dorado Hills, CA',
  'Placerville, CA',
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', description: '' })
  const [submitted, setSubmitted] = useState(false)

  const inputStyle = {
    width: '100%', boxSizing: 'border-box',
    background: 'rgba(245,240,232,0.06)',
    border: '1px solid rgba(245,240,232,0.15)',
    borderRadius: 12, padding: '14px 16px',
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 14, color: '#F5F0E8', outline: 'none',
    transition: 'border-color 0.2s',
  }

  const labelStyle = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 10, fontWeight: 700, letterSpacing: '0.2em',
    color: 'rgba(245,240,232,0.5)', textTransform: 'uppercase',
    display: 'block', marginBottom: 8,
  }

  const handleFocus = e => e.target.style.borderColor = '#E07A20'
  const handleBlur = e => e.target.style.borderColor = 'rgba(245,240,232,0.15)'

  return (
    <>
      <div style={{ background: '#0F1A09', minHeight: '100vh', paddingBottom: 0 }}>

        {/* Page header */}
        <div style={{
          background: 'linear-gradient(to bottom, #0A1206, #0F1A09)',
          padding: '80px 32px 64px',
          borderBottom: '1px solid rgba(224,122,32,0.15)',
        }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <RevealOnScroll>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ width: 32, height: 3, background: '#E07A20', borderRadius: 99 }} />
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700,
                  letterSpacing: '0.25em', color: '#E07A20', textTransform: 'uppercase',
                }}>Get In Touch</span>
              </div>
              <h1 style={{
                fontFamily: "'Black Han Sans', Impact, sans-serif",
                fontSize: 'clamp(2.5rem, 7vw, 5rem)',
                fontWeight: 900, letterSpacing: '0.03em',
                color: '#F5F0E8', lineHeight: 0.92, marginBottom: 20,
              }}>
                SCHEDULE YOUR<br />
                <span style={{ color: '#E07A20' }}>FREE EVALUATION</span>
              </h1>
              <p style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 16, color: 'rgba(245,240,232,0.6)',
                maxWidth: 520, lineHeight: 1.7,
              }}>
                At Tahoe Tree Titans we offer a free property assessment for defensible space and tree care needs. Give us a call or fill out the form below.
              </p>
            </RevealOnScroll>
          </div>
        </div>

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 32px 0' }}>

          {/* Contact info cards */}
          <RevealOnScroll>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 16, marginBottom: 64,
            }}>
              {[
                { icon: '📞', label: 'Phone', value: '(530) 307-0808', href: 'tel:5303070808' },
                { icon: '🕐', label: 'Hours', value: 'Mon–Sat · 7 AM – 5 PM', href: null },
                { icon: '📍', label: 'Service Area', value: 'South Lake Tahoe & Surrounding Areas', href: null },
                { icon: '🆓', label: 'Evaluations', value: 'Free Property Assessment', href: null },
              ].map((item, i) => (
                <RevealOnScroll key={i} delay={i * 0.08}>
                  <div style={{
                    background: '#0A1206',
                    border: '1px solid rgba(245,240,232,0.08)',
                    borderRadius: 16, padding: '24px',
                    transition: 'border-color 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(224,122,32,0.4)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(245,240,232,0.08)'}
                  >
                    <div style={{ fontSize: 28, marginBottom: 8 }}>{item.icon}</div>
                    <p style={{
                      fontFamily: "'Space Grotesk', sans-serif", fontSize: 10,
                      fontWeight: 700, letterSpacing: '0.2em', color: '#E07A20',
                      textTransform: 'uppercase', marginBottom: 4,
                    }}>{item.label}</p>
                    {item.href
                      ? <a href={item.href} style={{
                        fontFamily: "'Black Han Sans', Impact, sans-serif",
                        fontSize: 18, color: '#F5F0E8', textDecoration: 'none',
                        letterSpacing: '0.03em',
                      }}>{item.value}</a>
                      : <p style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: 14, color: 'rgba(245,240,232,0.8)', lineHeight: 1.4,
                      }}>{item.value}</p>
                    }
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </RevealOnScroll>

          {/* Form + Social */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 48, marginBottom: 80,
            alignItems: 'start',
          }}>
            {/* Form */}
            <RevealOnScroll delay={0.1}>
              <div>
                <h2 style={{
                  fontFamily: "'Black Han Sans', Impact, sans-serif",
                  fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                  color: '#F5F0E8', letterSpacing: '0.03em', marginBottom: 32,
                }}>
                  TELL US ABOUT<br />
                  <span style={{ color: '#E07A20' }}>YOUR JOB</span>
                </h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ textAlign: 'center', padding: '64px 0' }}
                  >
                    <div style={{ fontSize: 64, marginBottom: 16 }}>✅</div>
                    <p style={{
                      fontFamily: "'Black Han Sans', Impact, sans-serif",
                      fontSize: 28, color: '#F5F0E8', letterSpacing: '0.05em',
                    }}>Message Received!</p>
                    <p style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 15, color: 'rgba(245,240,232,0.5)', marginTop: 8,
                    }}>We'll be in touch shortly. The Titans are on their way.</p>
                  </motion.div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                      <div>
                        <label style={labelStyle}>Full Name</label>
                        <input type="text" required placeholder="John Smith"
                          value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                          style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                      </div>
                      <div>
                        <label style={labelStyle}>Phone Number</label>
                        <input type="tel" placeholder="(530) 555-0000"
                          value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                          style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                      </div>
                    </div>
                    <div>
                      <label style={labelStyle}>Email Address</label>
                      <input type="email" required placeholder="john@example.com"
                        value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                        style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                    </div>
                    <div>
                      <label style={labelStyle}>Service Needed</label>
                      <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                        style={{ ...inputStyle, cursor: 'pointer' }} onFocus={handleFocus} onBlur={handleBlur}>
                        <option value="" style={{ background: '#0A1206' }}>Select a service...</option>
                        {['Tree Removal', 'Crane Work', 'Emergency Work', 'Tree Limbing', 'Stump Grinding',
                          'Ornamental Pruning', 'Defensible Space', 'Wildfire Mitigation', 'Pine Needle Cleanup', 'Firewood', 'Other / Not Sure'].map(s => (
                          <option key={s} value={s} style={{ background: '#0A1206' }}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Describe Your Job</label>
                      <textarea required rows={5}
                        placeholder="Tell us about the trees, location, and what you need done..."
                        value={form.description} onChange={e => setForm({ ...form, description: e.target.value })}
                        style={{ ...inputStyle, resize: 'none' }} onFocus={handleFocus} onBlur={handleBlur} />
                    </div>
                    <motion.button
                      onClick={() => setSubmitted(true)}
                      whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      style={{
                        width: '100%', display: 'flex', alignItems: 'center',
                        justifyContent: 'center', gap: 10,
                        background: 'linear-gradient(135deg, #E07A20, #F5A623)',
                        color: '#0F1A09', padding: '18px', borderRadius: 12,
                        border: 'none', cursor: 'pointer',
                        fontFamily: "'Black Han Sans', Impact, sans-serif",
                        fontSize: 16, fontWeight: 900, letterSpacing: '0.1em',
                        boxShadow: '0 8px 32px rgba(224,122,32,0.35)',
                      }}>
                      📨 SEND REQUEST
                    </motion.button>
                  </div>
                )}
              </div>
            </RevealOnScroll>

            {/* Social + quick contact */}
            <RevealOnScroll delay={0.2}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{
                  background: '#0A1206',
                  border: '1px solid rgba(245,240,232,0.08)',
                  borderRadius: 20, padding: '32px',
                }}>
                  <h3 style={{
                    fontFamily: "'Black Han Sans', Impact, sans-serif",
                    fontSize: 22, color: '#F5F0E8', letterSpacing: '0.05em', marginBottom: 20,
                  }}>CALL US DIRECTLY</h3>
                  <a href="tel:5303070808" style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
                    background: 'linear-gradient(135deg, #E07A20, #F5A623)',
                    color: '#0F1A09', padding: '18px', borderRadius: 12,
                    fontFamily: "'Black Han Sans', Impact, sans-serif",
                    fontSize: 22, fontWeight: 900, letterSpacing: '0.05em',
                    textDecoration: 'none', boxShadow: '0 8px 32px rgba(224,122,32,0.35)',
                    transition: 'transform 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    📞 (530) 307-0808
                  </a>
                  <p style={{
                    fontFamily: "'Space Grotesk', sans-serif", fontSize: 13,
                    color: 'rgba(245,240,232,0.4)', textAlign: 'center', marginTop: 12,
                  }}>Mon–Sat · 7 AM – 5 PM</p>
                </div>

                <div style={{
                  background: '#0A1206',
                  border: '1px solid rgba(245,240,232,0.08)',
                  borderRadius: 20, padding: '32px',
                }}>
                  <h3 style={{
                    fontFamily: "'Black Han Sans', Impact, sans-serif",
                    fontSize: 22, color: '#F5F0E8', letterSpacing: '0.05em', marginBottom: 20,
                  }}>FOLLOW US</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <a href="https://www.facebook.com/TahoeTreeTitansLLC" target="_blank" rel="noopener noreferrer"
                      style={{
                        display: 'flex', alignItems: 'center', gap: 12,
                        background: 'rgba(24,119,242,0.1)', border: '1px solid rgba(24,119,242,0.3)',
                        borderRadius: 12, padding: '14px 20px',
                        fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 600,
                        color: '#F5F0E8', textDecoration: 'none', transition: 'background 0.2s',
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(24,119,242,0.2)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'rgba(24,119,242,0.1)'}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                      </svg>
                      TahoeTreeTitansLLC
                    </a>
                    <a href="https://www.instagram.com/tahoetreetitans/" target="_blank" rel="noopener noreferrer"
                      style={{
                        display: 'flex', alignItems: 'center', gap: 12,
                        background: 'rgba(225,48,108,0.1)', border: '1px solid rgba(225,48,108,0.3)',
                        borderRadius: 12, padding: '14px 20px',
                        fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 600,
                        color: '#F5F0E8', textDecoration: 'none', transition: 'background 0.2s',
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(225,48,108,0.2)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'rgba(225,48,108,0.1)'}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <circle cx="12" cy="12" r="4"/>
                        <circle cx="17.5" cy="6.5" r="1" fill="#E1306C" stroke="none"/>
                      </svg>
                      @tahoetreetitans
                    </a>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Service Areas */}
          <RevealOnScroll delay={0.1}>
            <div style={{ marginBottom: 64 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <div style={{ width: 32, height: 3, background: '#E07A20', borderRadius: 99 }} />
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700,
                  letterSpacing: '0.25em', color: '#E07A20', textTransform: 'uppercase',
                }}>Where We Work</span>
              </div>
              <h2 style={{
                fontFamily: "'Black Han Sans', Impact, sans-serif",
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                color: '#F5F0E8', letterSpacing: '0.03em', marginBottom: 32,
              }}>SERVICE AREAS</h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: 12,
              }}>
                {serviceAreas.map((area, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    background: '#0A1206',
                    border: '1px solid rgba(245,240,232,0.08)',
                    borderRadius: 12, padding: '14px 16px',
                    transition: 'border-color 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(224,122,32,0.4)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(245,240,232,0.08)'}
                  >
                    <span style={{ color: '#E07A20', fontSize: 14 }}>📍</span>
                    <span style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 14, fontWeight: 500, color: 'rgba(245,240,232,0.8)',
                    }}>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Google Map */}
          <RevealOnScroll delay={0.15}>
            <div style={{ marginBottom: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <div style={{ width: 32, height: 3, background: '#E07A20', borderRadius: 99 }} />
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700,
                  letterSpacing: '0.25em', color: '#E07A20', textTransform: 'uppercase',
                }}>Our Area</span>
              </div>
              <h2 style={{
                fontFamily: "'Black Han Sans', Impact, sans-serif",
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                color: '#F5F0E8', letterSpacing: '0.03em', marginBottom: 24,
              }}>SOUTH LAKE TAHOE REGION</h2>
              <div style={{
                borderRadius: 20, overflow: 'hidden',
                border: '1px solid rgba(224,122,32,0.2)',
              }}>
                <iframe
                  title="South Lake Tahoe Service Area"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99776.47486600987!2d-120.09320631640625!3d38.93206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809977d3ee1e59e7%3A0xd5c2b5c7bc1680df!2sSouth%20Lake%20Tahoe%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      <footer style={{ background: '#0A1206', borderTop: '1px solid rgba(245,240,232,0.08)', padding: '40px 32px', marginTop: 80 }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', flexWrap: 'wrap', gap: 16,
        }}>
          <img src="/logo-text.png" alt="Tahoe Tree Titans" style={{ height: 40, width: 'auto' }} />
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: 'rgba(245,240,232,0.3)' }}>
            © {new Date().getFullYear()} Tahoe Tree Titans. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
