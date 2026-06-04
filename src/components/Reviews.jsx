import RevealOnScroll from './RevealOnScroll'

const reviews = [
  {
    name: 'Paul Hale',
    text: 'I highly recommend Tahoe Tree Titans!!! Anything from fire prevention to dropping the huge trees with precision these guys can do it all. On top of the great work the customer service & guidance is top notch.',
  },
  {
    name: 'Matt Koenig',
    text: 'Josh and his crew were absolutely great! They cut down and removed 15 trees and stumps around my house. They also chipped up everything and set the wood chips aside for me to use later. Communication and execution couldn\'t have been better. Definitely highly recommended.',
  },
  {
    name: 'Tyler Matta',
    text: 'Tahoe Tree Titans were great. They showed up to assess the trees in a timely manner. The pricing was competitive, and the work was professional.',
  },
  {
    name: 'Lauren Cheh',
    text: 'Great experience with these guys and their service. I needed to get some tree trimming and tree removals done in order to keep up to date with compliance for home owners insurance, they helped me complete all requests. They were able to schedule quickly and communicated well. My yard looks great, they cleaned up real well after hauling off everything they cut out. I would highly recommend.',
  },
  {
    name: 'Joe Bennett',
    text: 'Tahoe Tree Titans to my Rescue!!! Had an Emergency Situation. My tree was days from falling into my house! The guys didn\'t hesitate getting to me! Came out quoted me and chopped the tree down the same day! Price was a lot more affordable than everyone else. Plus these guys really took my situation serious. 10 outta 10!!!',
  },
  {
    name: 'Dan Scheibelein',
    text: 'Josh and the whole Tree Titans team is one of the most professional and diligent tree services in NorCal. They were on time, had impeccable communication, while making it look like they had never been in my yard at all, except the extra sunshine! Will be recommending in the future.',
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
                Google Reviews
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
