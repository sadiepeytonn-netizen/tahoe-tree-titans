import RevealOnScroll from './RevealOnScroll'

const reviews = [
  {
    name: 'M. Henderson',
    text: 'Tahoe Tree Titans removed two massive pines that were threatening our cabin. Incredible precision and professionalism. They left the property cleaner than they found it.',
  },
  {
    name: 'J. Kowalski',
    text: 'After a heavy snow season, we needed emergency pruning. These guys showed up same day and handled everything. True titans of their craft.',
  },
  {
    name: 'S. Nakamura',
    text: "Got our defensible space inspection done and they handled all the work needed. Five stars doesn't do them justice.",
  },
  {
    name: 'R. Calloway',
    text: 'The crane work was something else. Watched them remove a 90-foot pine in sections without disturbing a single flower bed. Artists with chainsaws.',
  },
  {
    name: 'D. Petrov',
    text: 'Best tree service in the Tahoe basin, period. Fair pricing, honest assessment, and the crew is incredibly skilled and respectful.',
  },
  {
    name: 'L. Thompson',
    text: 'They pruned our entire property for fire safety compliance. Knowledgeable about local regulations and did beautiful work. Our views are incredible now.',
  },
]

export default function Reviews() {
  return (
    <section style={{ padding: '120px 32px', background: '#0F1A09' }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        gap: 80,
        flexWrap: 'wrap',
      }}>
        {/* Sticky rating badge */}
        <div style={{ flex: '0 0 260px' }}>
          <RevealOnScroll>
            <div style={{ position: 'sticky', top: 120 }}>
              <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ fontSize: 28, color: '#E07A20' }}>★</span>
                ))}
              </div>
              <div style={{
                fontFamily: "'Black Han Sans', Impact, sans-serif",
                fontSize: 'clamp(4rem, 8vw, 6rem)',
                fontWeight: 900,
                color: '#F5F0E8',
                lineHeight: 1,
              }}>
                5.0
              </div>
              <p style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 13,
                color: 'rgba(245,240,232,0.4)',
                marginTop: 4,
              }}>
                10 Google Reviews
              </p>
              <div style={{
                width: 40,
                height: 3,
                background: '#E07A20',
                margin: '20px 0',
              }} />
              <div style={{
                fontFamily: "'Black Han Sans', Impact, sans-serif",
                fontSize: 22,
                fontWeight: 900,
                color: 'rgba(245,240,232,0.5)',
                letterSpacing: '0.05em',
              }}>
                TITAN<br />TRUST
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Reviews list */}
        <div style={{
          flex: 1,
          minWidth: 280,
          display: 'flex',
          flexDirection: 'column',
          gap: 40,
        }}>
          {reviews.map((review, i) => (
            <RevealOnScroll key={i} delay={i * 0.08}>
              <div style={{
                borderLeft: '2px solid rgba(224,122,32,0.35)',
                paddingLeft: 24,
                paddingTop: 4,
                paddingBottom: 4,
              }}>
                <p style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 15,
                  color: 'rgba(245,240,232,0.8)',
                  lineHeight: 1.7,
                  margin: 0,
                }}>
                  "{review.text}"
                </p>
                <p style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 12,
                  fontWeight: 700,
                  color: '#E07A20',
                  marginTop: 12,
                }}>
                  — {review.name}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
