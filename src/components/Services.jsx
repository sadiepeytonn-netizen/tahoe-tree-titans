import { useState } from 'react'
import { motion } from 'framer-motion'
import RevealOnScroll from './RevealOnScroll'

const services = [
  {
    title: 'Tree Removal',
    description: 'Safe, efficient removal of hazardous or unwanted trees using advanced rigging techniques and heavy equipment.',
    icon: '🌲',
    image: '/service-removal.png',
    details: ['Hazard assessment', 'Crane-assisted removal', 'Stump grinding', 'Complete site cleanup'],
  },
  {
    title: 'Precision Pruning',
    description: 'Expert crown thinning, deadwood removal, and structural pruning to promote tree health and property safety.',
    icon: '✂️',
    image: '/service-pruning.png',
    details: ['Crown reduction', 'Vista pruning', 'Fire mitigation', 'Canopy management'],
  },
  {
    title: 'Safety Reports',
    description: 'Certified arborist assessments for property risk evaluation, insurance documentation, and defensible space compliance.',
    icon: '🛡️',
    image: '/service-safety.png',
    details: ['Risk analysis', 'Defensible space', 'Insurance reports', 'HOA compliance'],
  },
]

export default function Services() {
  const [hoveredIdx, setHoveredIdx] = useState(null)

  return (
    <section
      id="services"
      style={{ padding: '120px 32px', background: '#F5F0E8' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <RevealOnScroll>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 32, height: 3, background: '#E07A20', borderRadius: 99 }} />
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.25em',
              color: '#E07A20',
              textTransform: 'uppercase',
            }}>
              Our Services
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Black Han Sans', Impact, sans-serif",
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            fontWeight: 900,
            letterSpacing: '0.03em',
            color: '#0F1A09',
            lineHeight: 0.92,
            margin: 0,
          }}>
            TREE ANATOMY<br />
            <span style={{ color: '#2D5A1B' }}>SERVICE GALLERY</span>
          </h2>
        </RevealOnScroll>

        <div style={{
          marginTop: 64,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
        }}>
          {services.map((svc, i) => (
            <RevealOnScroll key={svc.title} delay={i * 0.15}>
              <motion.div
                style={{
                  position: 'relative',
                  aspectRatio: '1/2',
                  borderRadius: 20,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: hoveredIdx === i ? '2px solid #E07A20' : '2px solid transparent',
                  transition: 'border-color 0.3s',
                }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <motion.img
                  src={svc.image}
                  alt={svc.title}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  animate={{ scale: hoveredIdx === i ? 1.06 : 1 }}
                  transition={{ duration: 0.6 }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, #0F1A09 0%, rgba(15,26,9,0.5) 40%, transparent 100%)',
                }} />
                {/* Orange accent on hover */}
                <motion.div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(224,122,32,0.2), transparent 50%)',
                  }}
                  animate={{ opacity: hoveredIdx === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                <div style={{
                  position: 'relative',
                  zIndex: 10,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: 24,
                }}>
                  <div style={{ fontSize: 28, marginBottom: 8 }}>{svc.icon}</div>
                  <h3 style={{
                    fontFamily: "'Black Han Sans', Impact, sans-serif",
                    fontSize: 26,
                    fontWeight: 900,
                    letterSpacing: '0.05em',
                    color: '#F5F0E8',
                    margin: 0,
                  }}>
                    {svc.title}
                  </h3>
                  <p style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 13,
                    color: 'rgba(245,240,232,0.65)',
                    marginTop: 8,
                    lineHeight: 1.6,
                  }}>
                    {svc.description}
                  </p>

                  <motion.div
                    style={{ marginTop: 16, overflow: 'hidden' }}
                    initial={false}
                    animate={{
                      height: hoveredIdx === i ? 'auto' : 0,
                      opacity: hoveredIdx === i ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {svc.details.map(d => (
                      <div
                        key={d}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 8,
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: 12,
                          fontWeight: 600,
                          color: '#F5A623',
                          marginBottom: 4,
                        }}
                      >
                        <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#E07A20' }} />
                        {d}
                      </div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
