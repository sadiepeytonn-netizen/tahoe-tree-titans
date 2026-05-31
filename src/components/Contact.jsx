import RevealOnScroll from './RevealOnScroll'
import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <section style={{ padding: '120px 32px', background: '#0F1A09' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
        <RevealOnScroll>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
            marginBottom: 16,
          }}>
            <div style={{ width: 32, height: 3, background: '#E07A20', borderRadius: 99 }} />
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.25em',
              color: '#E07A20',
              textTransform: 'uppercase',
            }}>
              Ready?
            </span>
            <div style={{ width: 32, height: 3, background: '#E07A20', borderRadius: 99 }} />
          </div>

          <h2 style={{
            fontFamily: "'Black Han Sans', Impact, sans-serif",
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 900,
            letterSpacing: '0.03em',
            color: '#F5F0E8',
            lineHeight: 0.92,
            margin: 0,
          }}>
            SCHEDULE<br />
            <span style={{ color: '#E07A20' }}>EVALUATION</span>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 16,
            color: 'rgba(245,240,232,0.6)',
            maxWidth: 520,
            margin: '32px auto 0',
            lineHeight: 1.7,
          }}>
            At Tahoe Tree Titans we are your premier tree removal service in South Lake Tahoe, CA.
            Our team of experts is dedicated to providing top-notch tree services to keep your
            property safe and beautiful.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.4}>
          <a
            href="tel:5303070808"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 14,
              background: 'linear-gradient(135deg, #E07A20, #F5A623)',
              color: '#0F1A09',
              padding: '20px 48px',
              borderRadius: 14,
              marginTop: 48,
              fontFamily: "'Black Han Sans', Impact, sans-serif",
              fontSize: 22,
              fontWeight: 900,
              letterSpacing: '0.05em',
              textDecoration: 'none',
              boxShadow: '0 12px 40px rgba(224,122,32,0.45)',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            📞 (530) 307-0808
          </a>
        </RevealOnScroll>

        <RevealOnScroll delay={0.5}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 40,
            marginTop: 32,
            flexWrap: 'wrap',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 13,
              color: 'rgba(245,240,232,0.5)',
            }}>
              <span style={{ color: '#E07A20' }}>📍</span> South Lake Tahoe, CA
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 13,
              color: 'rgba(245,240,232,0.5)',
            }}>
              <span style={{ color: '#E07A20' }}>🕐</span> Mon–Sat · 7 AM – 5 PM
            </div>
          </div>
        </RevealOnScroll>

        <ContactForm />
      </div>

      {/* Footer */}
      <div style={{
        maxWidth: 1200,
        margin: '80px auto 0',
        paddingTop: 32,
        borderTop: '1px solid rgba(245,240,232,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 16,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 20 }}>🌲</span>
          <span style={{
            fontFamily: "'Black Han Sans', Impact, sans-serif",
            fontSize: 14,
            fontWeight: 900,
            letterSpacing: '0.15em',
            color: '#F5F0E8',
          }}>
            TAHOE TREE TITANS
          </span>
        </div>
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 12,
          color: 'rgba(245,240,232,0.3)',
        }}>
          © {new Date().getFullYear()} Tahoe Tree Titans. All rights reserved.
        </p>
      </div>
    </section>
  )
}
