import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import RevealOnScroll from '../components/RevealOnScroll'

const services = [
  {
    title: 'Tree Removal',
    icon: '🌲',
    image: '/service-removal.png',
    description: 'Safe, efficient removal of hazardous or unwanted trees using advanced rigging techniques and heavy equipment. We handle everything from small ornamentals to massive Sierra Nevada pines.',
    details: ['Hazard assessment', 'Crane-assisted removal', 'Complete site cleanup', 'Stump grinding available'],
  },
  {
    title: 'Crane Work',
    icon: '🏗️',
    image: '/service-removal.png',
    description: 'Specialized crane operations for large-scale tree removals in tight or difficult access areas. Our crane work allows us to safely remove trees that would otherwise be impossible to take down.',
    details: ['Large tree removal', 'Tight access areas', 'Precision lowering', 'Heavy equipment operation'],
  },
  {
    title: 'Emergency Work',
    icon: '⚡',
    image: '/hero.png',
    description: 'Rapid response for storm damage, fallen trees, and hazardous situations threatening your home or property. We understand emergencies don\'t wait — neither do we.',
    details: ['24/7 emergency response', 'Storm damage cleanup', 'Hazard mitigation', 'Insurance documentation'],
  },
  {
    title: 'Tree Limbing',
    icon: '✂️',
    image: '/service-pruning.png',
    description: 'Professional limb removal to reduce weight, improve structure, and eliminate hazards. Proper limbing promotes long-term tree health and protects your property.',
    details: ['Weight reduction', 'Clearance trimming', 'Hazard limb removal', 'Structural improvement'],
  },
  {
    title: 'Stump Grinding',
    icon: '🪵',
    image: '/service-safety.png',
    description: 'Complete stump removal using professional grinding equipment. We grind stumps below grade so you can reclaim your yard, plant new vegetation, or build on the area.',
    details: ['Below-grade grinding', 'Debris cleanup', 'Yard restoration', 'All stump sizes'],
  },
  {
    title: 'Ornamental Pruning',
    icon: '🌿',
    image: '/service-pruning.png',
    description: 'Expert pruning for ornamental trees and shrubs to enhance beauty, promote healthy growth, and maintain the aesthetic appeal of your landscape.',
    details: ['Crown shaping', 'Vista pruning', 'Seasonal pruning', 'Canopy management'],
  },
  {
    title: 'Defensible Space',
    icon: '🛡️',
    image: '/service-safety.png',
    description: 'California-compliant defensible space creation to protect your home from wildfire. We clear vegetation, manage ladder fuels, and ensure you meet Zone 1 and Zone 2 requirements.',
    details: ['Zone 1 & 2 compliance', 'Ladder fuel removal', 'Brush clearing', 'CAL FIRE standards'],
  },
  {
    title: 'Wildfire Mitigation',
    icon: '🔥',
    image: '/hero.png',
    description: 'Comprehensive fire risk reduction drawing on our team\'s 7+ years of US Forest Service experience. We understand fire behavior and know exactly how to protect your property in the Sierra Nevada.',
    details: ['Fuel load reduction', 'Canopy spacing', 'Forest Service methods', 'Risk assessment'],
  },
  {
    title: 'Pine Needle Cleanup',
    icon: '🍂',
    image: '/service-pruning.png',
    description: 'Thorough pine needle and debris removal from roofs, gutters, decks, and surrounding property. Pine needle buildup is a major fire hazard in Tahoe — keep your property clean and safe.',
    details: ['Roof & gutter clearing', 'Deck cleanup', 'Fire risk reduction', 'Seasonal service'],
  },
  {
    title: 'Firewood',
    icon: '🪓',
    image: '/service-removal.png',
    description: 'Seasoned Sierra Nevada firewood sourced from our tree removal work. Quality hardwood and softwood available, split and ready to burn. Perfect for Tahoe winters.',
    details: ['Split & seasoned', 'Local Sierra Nevada wood', 'Delivery available', 'Bulk orders welcome'],
  },
]

export default function ServicesPage() {
  const [hoveredIdx, setHoveredIdx] = useState(null)

  return (
    <>
      <div style={{ background: '#0F1A09', minHeight: '100vh', paddingBottom: 80 }}>
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
                }}>What We Do</span>
              </div>
              <h1 style={{
                fontFamily: "'Black Han Sans', Impact, sans-serif",
                fontSize: 'clamp(2.5rem, 7vw, 5rem)',
                fontWeight: 900, letterSpacing: '0.03em',
                color: '#F5F0E8', lineHeight: 0.92, margin: '0 0 16px',
              }}>
                OUR SERVICES
              </h1>
              <p style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 16, color: 'rgba(245,240,232,0.6)',
                maxWidth: 560, lineHeight: 1.7,
              }}>
                From emergency removals to wildfire mitigation, Tahoe Tree Titans brings over 20 years of combined experience to every job in the Sierra Nevada.
              </p>
            </RevealOnScroll>
          </div>
        </div>

        {/* Services grid */}
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 32px 0' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 24,
          }}>
            {services.map((svc, i) => (
              <RevealOnScroll key={svc.title} delay={(i % 3) * 0.1}>
                <motion.div
                  style={{
                    position: 'relative',
                    borderRadius: 20,
                    overflow: 'hidden',
                    cursor: 'default',
                    border: hoveredIdx === i ? '2px solid #E07A20' : '2px solid rgba(245,240,232,0.08)',
                    transition: 'border-color 0.3s',
                    background: '#0A1206',
                  }}
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  {/* Image */}
                  <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                    <motion.img
                      src={svc.image}
                      alt={svc.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      animate={{ scale: hoveredIdx === i ? 1.06 : 1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, #0A1206 0%, transparent 60%)',
                    }} />
                    <motion.div style={{
                      position: 'absolute', inset: 0,
                      background: 'rgba(224,122,32,0.1)',
                    }}
                      animate={{ opacity: hoveredIdx === i ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Content */}
                  <div style={{ padding: '20px 24px 28px' }}>
                    <div style={{ fontSize: 28, marginBottom: 8 }}>{svc.icon}</div>
                    <h3 style={{
                      fontFamily: "'Black Han Sans', Impact, sans-serif",
                      fontSize: 22, fontWeight: 900, letterSpacing: '0.05em',
                      color: '#F5F0E8', margin: '0 0 10px',
                    }}>{svc.title}</h3>
                    <p style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 13, color: 'rgba(245,240,232,0.6)',
                      lineHeight: 1.65, margin: '0 0 16px',
                    }}>{svc.description}</p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {svc.details.map(d => (
                        <span key={d} style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: 11, fontWeight: 600,
                          color: '#E07A20',
                          background: 'rgba(224,122,32,0.1)',
                          border: '1px solid rgba(224,122,32,0.25)',
                          borderRadius: 100, padding: '3px 10px',
                        }}>{d}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>

          {/* CTA */}
          <RevealOnScroll delay={0.2}>
            <div style={{
              marginTop: 80, textAlign: 'center',
              padding: '64px 32px',
              background: 'linear-gradient(135deg, rgba(224,122,32,0.08), rgba(45,90,27,0.08))',
              border: '1px solid rgba(224,122,32,0.2)',
              borderRadius: 24,
            }}>
              <h2 style={{
                fontFamily: "'Black Han Sans', Impact, sans-serif",
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                color: '#F5F0E8', letterSpacing: '0.03em', marginBottom: 16,
              }}>
                FREE PROPERTY EVALUATION
              </h2>
              <p style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 16, color: 'rgba(245,240,232,0.6)',
                maxWidth: 480, margin: '0 auto 32px', lineHeight: 1.7,
              }}>
                Not sure what you need? Give us a call and we'll assess your property at no charge.
              </p>
              <a href="tel:5303070808" style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                background: 'linear-gradient(135deg, #E07A20, #F5A623)',
                color: '#0F1A09', padding: '18px 40px', borderRadius: 12,
                fontFamily: "'Black Han Sans', Impact, sans-serif",
                fontSize: 20, fontWeight: 900, letterSpacing: '0.05em',
                textDecoration: 'none', boxShadow: '0 8px 32px rgba(224,122,32,0.4)',
                transition: 'transform 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                📞 (530) 307-0808
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      <PageFooter />
    </>
  )
}

function PageFooter() {
  return (
    <footer style={{ background: '#0A1206', borderTop: '1px solid rgba(245,240,232,0.08)', padding: '40px 32px' }}>
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
  )
}
