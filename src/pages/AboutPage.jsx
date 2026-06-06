import { motion } from 'framer-motion'
import RevealOnScroll from '../components/RevealOnScroll'
import AnimatedNumber from '../components/AnimatedNumber'
import PageTransition from '../components/PageTransition'

const stats = [
  { number: '20', suffix: '+', label: 'Years Combined Experience' },
  { number: '7', suffix: '', label: 'Years US Forest Service' },
  { number: '13', suffix: '+', label: 'Years Tahoe Basin Tree Service' },
  { number: '60', suffix: '+', label: 'Years Team Experience' },
]

const whyUs = [
  { icon: '🌲', title: 'Local Experts', desc: 'We live and work in the Tahoe Basin. We know the terrain, the trees, and the local regulations inside and out.' },
  { icon: '🔥', title: 'Fire Safety Focus', desc: '7 years with the US Forest Service means we understand fire behavior like no one else. We protect your home the right way.' },
  { icon: '🛡️', title: 'Licensed & Insured', desc: 'Fully licensed and insured for your peace of mind. Certified arborist on the team for proper assessments.' },
  { icon: '📞', title: 'Free Evaluation', desc: 'We offer a free property assessment for defensible space and tree care needs. No obligation, no pressure.' },
]

export default function AboutPage() {
  return (
    <PageTransition>
      <div style={{ background: '#0F1A09', minHeight: '100vh', paddingBottom: 80 }}>

        {/* Page header */}
        <div style={{ background: 'linear-gradient(to bottom, #0A1206, #0F1A09)', padding: '80px 32px 64px', borderBottom: '1px solid rgba(224,122,32,0.15)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ width: 32, height: 3, background: '#E07A20', borderRadius: 99 }} />
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.25em', color: '#E07A20', textTransform: 'uppercase' }}>Our Story</span>
              </div>
            </motion.div>
            <motion.h1
              style={{ fontFamily: "'Black Han Sans', Impact, sans-serif", fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 900, letterSpacing: '0.03em', color: '#F5F0E8', lineHeight: 0.92 }}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >ABOUT US</motion.h1>
          </div>
        </div>

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 32px 0' }}>

          {/* Josh intro */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center', marginBottom: 80 }}>
            <RevealOnScroll direction="right">
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ position: 'relative', maxWidth: 420, width: '100%' }}>
                  <motion.div
                    style={{ position: 'absolute', inset: -20, background: 'radial-gradient(circle, rgba(224,122,32,0.15) 0%, transparent 70%)', borderRadius: '50%' }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <motion.img
                    src="/logo-character.png" alt="Tahoe Tree Titans Mascot"
                    style={{ width: '100%', height: 'auto', position: 'relative', zIndex: 1 }}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2} direction="left">
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(224,122,32,0.12)', border: '1px solid rgba(224,122,32,0.3)', borderRadius: 100, padding: '4px 14px', marginBottom: 20 }}>
                  <span style={{ fontSize: 10, color: '#F5A623', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase' }}>Meet the Owner</span>
                </div>
                <h2 style={{ fontFamily: "'Black Han Sans', Impact, sans-serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, letterSpacing: '0.03em', color: '#F5F0E8', lineHeight: 0.95, marginBottom: 24 }}>
                  HEY, I'M<br /><span style={{ color: '#E07A20' }}>JOSH.</span>
                </h2>
                {[
                  "I'm the owner of Tahoe Tree Titans. I come to you with over two decades of combined experience — seven years in fire and fuels management with the US Forest Service, serving on handcrews, engines, and fuels management teams, and over 13 years in residential tree service and removals within the Tahoe Basin and beyond.",
                  "A safe forest is something that I take pride in — from ladder fuel management and properly spaced canopy to removals of hazardous trees posing danger to you and the integrity of your home.",
                ].map((para, i) => (
                  <motion.p key={i}
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, color: 'rgba(245,240,232,0.8)', lineHeight: 1.8, marginBottom: 16 }}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
                    viewport={{ once: true }}
                  >
                    {para}
                  </motion.p>
                ))}
              </div>
            </RevealOnScroll>
          </div>

          {/* Stats */}
          <RevealOnScroll>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 2, marginBottom: 80, background: 'rgba(224,122,32,0.1)', border: '1px solid rgba(224,122,32,0.2)', borderRadius: 20, overflow: 'hidden' }}>
              {stats.map((stat, i) => (
                <motion.div key={i}
                  style={{ textAlign: 'center', padding: '40px 24px', background: '#0A1206', margin: 1 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  viewport={{ once: true }}
                  whileHover={{ background: 'rgba(224,122,32,0.06)' }}
                >
                  <div style={{ fontFamily: "'Black Han Sans', Impact, sans-serif", fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, color: '#E07A20', lineHeight: 1, marginBottom: 8 }}>
                    <AnimatedNumber value={stat.number} suffix={stat.suffix} />
                  </div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 600, color: 'rgba(245,240,232,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </RevealOnScroll>

          {/* Team section */}
          <RevealOnScroll delay={0.1}>
            <motion.div
              style={{ background: '#0A1206', border: '1px solid rgba(245,240,232,0.08)', borderRadius: 24, padding: '48px', marginBottom: 80 }}
              whileHover={{ borderColor: 'rgba(224,122,32,0.2)' }} transition={{ duration: 0.3 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <div style={{ width: 32, height: 3, background: '#E07A20', borderRadius: 99 }} />
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.25em', color: '#E07A20', textTransform: 'uppercase' }}>The Team</span>
              </div>
              <h2 style={{ fontFamily: "'Black Han Sans', Impact, sans-serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '0.03em', color: '#F5F0E8', lineHeight: 0.95, marginBottom: 24 }}>
                60+ YEARS OF<br /><span style={{ color: '#E07A20' }}>COMBINED EXPERTISE</span>
              </h2>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, color: 'rgba(245,240,232,0.75)', lineHeight: 1.8, maxWidth: 720 }}>
                Within the Tahoe Tree Titans team comes a large array of skills — from fire cleanup to large storm damage work involving technical tree climbing and crane work, to a <strong style={{ color: '#F5F0E8' }}>certified arborist</strong> with a combined experience of over 60 years in the field.
              </p>
            </motion.div>
          </RevealOnScroll>

          {/* Why choose us */}
          <RevealOnScroll>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
              <div style={{ width: 32, height: 3, background: '#E07A20', borderRadius: 99 }} />
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.25em', color: '#E07A20', textTransform: 'uppercase' }}>Why Choose Us</span>
            </div>
          </RevealOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 80 }}>
            {whyUs.map((item, i) => (
              <RevealOnScroll key={i} delay={i * 0.1}>
                <motion.div
                  style={{ background: '#0A1206', border: '1px solid rgba(245,240,232,0.08)', borderRadius: 16, padding: '28px 24px' }}
                  whileHover={{ borderColor: 'rgba(224,122,32,0.4)', y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  <div style={{ fontSize: 32, marginBottom: 12 }}>{item.icon}</div>
                  <h3 style={{ fontFamily: "'Black Han Sans', Impact, sans-serif", fontSize: 18, fontWeight: 900, letterSpacing: '0.05em', color: '#F5F0E8', marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, color: 'rgba(245,240,232,0.6)', lineHeight: 1.65 }}>{item.desc}</p>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>

          {/* CTA */}
          <RevealOnScroll delay={0.2}>
            <div style={{ textAlign: 'center', padding: '64px 32px', background: 'linear-gradient(135deg, rgba(224,122,32,0.08), rgba(45,90,27,0.08))', border: '1px solid rgba(224,122,32,0.2)', borderRadius: 24 }}>
              <h2 style={{ fontFamily: "'Black Han Sans', Impact, sans-serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#F5F0E8', letterSpacing: '0.03em', marginBottom: 12 }}>
                TAHOE TREE TITANS<br /><span style={{ color: '#E07A20' }}>IS THE RIGHT CHOICE.</span>
              </h2>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, color: 'rgba(245,240,232,0.6)', maxWidth: 480, margin: '0 auto 32px', lineHeight: 1.7 }}>
                Give us a call for a free assessment of your property regarding defensible space and tree care needs.
              </p>
              <motion.a href="tel:5303070808" style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                background: 'linear-gradient(135deg, #E07A20, #F5A623)', color: '#0F1A09',
                padding: '18px 40px', borderRadius: 12, fontFamily: "'Black Han Sans', Impact, sans-serif",
                fontSize: 20, fontWeight: 900, letterSpacing: '0.05em', textDecoration: 'none',
                boxShadow: '0 8px 32px rgba(224,122,32,0.4)',
              }}
                whileHover={{ scale: 1.04, boxShadow: '0 12px 40px rgba(224,122,32,0.55)' }}
                whileTap={{ scale: 0.97 }} transition={{ duration: 0.15 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.66-.66a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
                </svg>
                (530) 307-0808
              </motion.a>
            </div>
          </RevealOnScroll>
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
