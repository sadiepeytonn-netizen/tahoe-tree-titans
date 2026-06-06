import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'

const services = [
  'Tree Removal','Crane Work','Emergency Work','Tree Limbing','Stump Grinding',
  'Ornamental Pruning','Defensible Space','Wildfire Mitigation','Pine Needle Cleanup','Firewood',
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setDropdownOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setMobileServicesOpen(false)
  }, [location])

  const isActive = (path) => location.pathname === path

  const navLinkStyle = (path) => ({
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 14, fontWeight: 600, letterSpacing: '0.05em',
    color: isActive(path) ? '#E07A20' : '#F5F0E8',
    textDecoration: 'none', textTransform: 'uppercase',
    transition: 'color 0.2s',
    borderBottom: isActive(path) ? '2px solid #E07A20' : '2px solid transparent',
    paddingBottom: 2,
  })

  return (
    <motion.nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        borderBottom: '1px solid rgba(224,122,32,0.2)',
        height: 80, display: 'flex', alignItems: 'center', padding: '0 32px',
        transition: 'background 0.4s, backdrop-filter 0.4s, box-shadow 0.4s',
        background: scrolled ? 'rgba(10,18,6,0.98)' : 'rgba(10,18,6,0.85)',
        backdropFilter: 'blur(16px)',
        boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.3)' : 'none',
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div style={{ maxWidth: 1200, width: '100%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>

        {/* Logo */}
        <Link to="/" style={{ flexShrink: 0 }}>
          <motion.img
            src="/logo-text.png" alt="Tahoe Tree Titans"
            style={{ height: 52, width: 'auto', objectFit: 'contain' }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          />
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32, flex: 1, justifyContent: 'center' }} className="desktop-nav">
          <Link to="/" style={navLinkStyle('/')}
            onMouseEnter={e => { if (!isActive('/')) e.currentTarget.style.color = '#E07A20' }}
            onMouseLeave={e => { if (!isActive('/')) e.currentTarget.style.color = '#F5F0E8' }}
          >Home</Link>

          <div ref={dropdownRef} style={{ position: 'relative' }}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button onClick={() => setDropdownOpen(!dropdownOpen)} style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 600,
              letterSpacing: '0.05em', color: isActive('/services') ? '#E07A20' : '#F5F0E8',
              textTransform: 'uppercase', background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 4,
              borderBottom: isActive('/services') ? '2px solid #E07A20' : '2px solid transparent',
              paddingBottom: 2, transition: 'color 0.2s',
            }}
              onMouseEnter={e => { if (!isActive('/services')) e.currentTarget.style.color = '#E07A20' }}
              onMouseLeave={e => { if (!isActive('/services') && !dropdownOpen) e.currentTarget.style.color = '#F5F0E8' }}
            >
              Services
              <motion.span style={{ fontSize: 10, display: 'inline-block' }}
                animate={{ rotate: dropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >▼</motion.span>
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{
                    position: 'absolute', top: 'calc(100% + 16px)', left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'rgba(10,18,6,0.98)', border: '1px solid rgba(224,122,32,0.3)',
                    borderRadius: 12, padding: '8px 0', minWidth: 220,
                    boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
                  }}
                >
                  {services.map((svc, i) => (
                    <motion.div
                      key={svc}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: i * 0.03 }}
                    >
                      <Link to="/services" onClick={() => setDropdownOpen(false)} style={{
                        display: 'block', padding: '10px 20px',
                        fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 500,
                        color: '#F5F0E8', textDecoration: 'none', transition: 'color 0.15s, background 0.15s',
                      }}
                        onMouseEnter={e => { e.currentTarget.style.color = '#E07A20'; e.currentTarget.style.background = 'rgba(224,122,32,0.08)' }}
                        onMouseLeave={e => { e.currentTarget.style.color = '#F5F0E8'; e.currentTarget.style.background = 'transparent' }}
                      >{svc}</Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/about" style={navLinkStyle('/about')}
            onMouseEnter={e => { if (!isActive('/about')) e.currentTarget.style.color = '#E07A20' }}
            onMouseLeave={e => { if (!isActive('/about')) e.currentTarget.style.color = '#F5F0E8' }}
          >About Us</Link>

          <Link to="/contact" style={navLinkStyle('/contact')}
            onMouseEnter={e => { if (!isActive('/contact')) e.currentTarget.style.color = '#E07A20' }}
            onMouseLeave={e => { if (!isActive('/contact')) e.currentTarget.style.color = '#F5F0E8' }}
          >Contact Us</Link>
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }} className="desktop-nav">
          <motion.a href="tel:5303070808" style={{
            display: 'flex', alignItems: 'center', gap: 6,
            background: 'linear-gradient(135deg, #E07A20, #F5A623)',
            color: '#0F1A09', padding: '8px 16px', borderRadius: 8,
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 13, textDecoration: 'none',
          }}
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.66-.66a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
            </svg>
            (530) 307-0808
          </motion.a>

          <motion.a href="https://www.facebook.com/TahoeTreeTitansLLC" target="_blank" rel="noopener noreferrer"
            style={{ color: 'rgba(245,240,232,0.6)', lineHeight: 1 }}
            whileHover={{ color: '#E07A20', scale: 1.1 }} transition={{ duration: 0.15 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </motion.a>

          <motion.a href="https://www.instagram.com/tahoetreetitans/" target="_blank" rel="noopener noreferrer"
            style={{ color: 'rgba(245,240,232,0.6)', lineHeight: 1 }}
            whileHover={{ color: '#E07A20', scale: 1.1 }} transition={{ duration: 0.15 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <motion.button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#F5F0E8', padding: 4 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            }
          </svg>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              position: 'absolute', top: 80, left: 0, right: 0,
              background: 'rgba(10,18,6,0.98)', borderBottom: '1px solid rgba(224,122,32,0.2)',
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '16px 32px 24px', display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[{ label: 'Home', path: '/' }, { label: 'About Us', path: '/about' }, { label: 'Contact Us', path: '/contact' }].map((item, i) => (
                <motion.div key={item.path} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06, duration: 0.3 }}>
                  <Link to={item.path} style={{
                    fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 600,
                    color: isActive(item.path) ? '#E07A20' : '#F5F0E8',
                    textDecoration: 'none', textTransform: 'uppercase',
                    padding: '14px 0', borderBottom: '1px solid rgba(245,240,232,0.08)',
                    letterSpacing: '0.05em', display: 'block',
                  }}>{item.label}</Link>
                </motion.div>
              ))}

              <div>
                <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} style={{
                  width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 600,
                  color: isActive('/services') ? '#E07A20' : '#F5F0E8',
                  textTransform: 'uppercase', padding: '14px 0',
                  borderBottom: '1px solid rgba(245,240,232,0.08)', letterSpacing: '0.05em',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                  Services
                  <motion.span style={{ fontSize: 10 }} animate={{ rotate: mobileServicesOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>▼</motion.span>
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }}
                      style={{ paddingLeft: 16, paddingBottom: 8, overflow: 'hidden' }}
                    >
                      {services.map(svc => (
                        <Link key={svc} to="/services" style={{
                          display: 'block', fontFamily: "'Space Grotesk', sans-serif", fontSize: 14,
                          color: 'rgba(245,240,232,0.7)', textDecoration: 'none',
                          padding: '8px 0', borderBottom: '1px solid rgba(245,240,232,0.05)',
                        }}>{svc}</Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 16, paddingTop: 16 }}>
                <a href="tel:5303070808" style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  background: 'linear-gradient(135deg, #E07A20, #F5A623)',
                  color: '#0F1A09', padding: '10px 18px', borderRadius: 8,
                  fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 14, textDecoration: 'none',
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.66-.66a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
                  </svg>
                  (530) 307-0808
                </a>
                <a href="https://www.facebook.com/TahoeTreeTitansLLC" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(245,240,232,0.6)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://www.instagram.com/tahoetreetitans/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(245,240,232,0.6)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-menu-btn { display: none !important; }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </motion.nav>
  )
}
