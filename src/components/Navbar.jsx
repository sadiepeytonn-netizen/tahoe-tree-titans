import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const services = [
  'Tree Removal',
  'Crane Work',
  'Emergency Work',
  'Tree Limbing',
  'Stump Grinding',
  'Ornamental Pruning',
  'Defensible Space',
  'Wildfire Mitigation',
  'Pine Needle Cleanup',
  'Firewood',
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const location = useLocation()
  const dropdownRef = useRef(null)

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
    setMobileServicesOpen(false)
  }, [location])

  const isActive = (path) => location.pathname === path

  const navLinkStyle = (path) => ({
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: '0.05em',
    color: isActive(path) ? '#E07A20' : '#F5F0E8',
    textDecoration: 'none',
    textTransform: 'uppercase',
    transition: 'color 0.2s',
    borderBottom: isActive(path) ? '2px solid #E07A20' : '2px solid transparent',
    paddingBottom: 2,
  })

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: 'rgba(10,18,6,0.97)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(224,122,32,0.2)',
      height: 80,
      display: 'flex',
      alignItems: 'center',
      padding: '0 32px',
    }}>
      <div style={{
        maxWidth: 1200,
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
      }}>

        {/* Logo */}
        <Link to="/" style={{ flexShrink: 0 }}>
          <img
            src="/logo-text.png"
            alt="Tahoe Tree Titans"
            style={{ height: 52, width: 'auto', objectFit: 'contain' }}
          />
        </Link>

        {/* Desktop Nav */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 32,
          flex: 1,
          justifyContent: 'center',
        }} className="desktop-nav">
          <Link to="/" style={navLinkStyle('/')}
            onMouseEnter={e => { if (!isActive('/')) e.currentTarget.style.color = '#E07A20' }}
            onMouseLeave={e => { if (!isActive('/')) e.currentTarget.style.color = '#F5F0E8' }}
          >
            Home
          </Link>

          {/* Services dropdown */}
          <div
            ref={dropdownRef}
            style={{ position: 'relative' }}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: '0.05em',
                color: isActive('/services') ? '#E07A20' : '#F5F0E8',
                textTransform: 'uppercase',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                borderBottom: isActive('/services') ? '2px solid #E07A20' : '2px solid transparent',
                paddingBottom: 2,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => { if (!isActive('/services')) e.currentTarget.style.color = '#E07A20' }}
              onMouseLeave={e => { if (!isActive('/services') && !dropdownOpen) e.currentTarget.style.color = '#F5F0E8' }}
            >
              Services
              <span style={{
                fontSize: 10,
                transition: 'transform 0.2s',
                transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                display: 'inline-block',
              }}>▼</span>
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 16px)',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'rgba(10,18,6,0.98)',
                    border: '1px solid rgba(224,122,32,0.3)',
                    borderRadius: 12,
                    padding: '8px 0',
                    minWidth: 220,
                    boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
                  }}
                >
                  {services.map((svc) => (
                    <Link
                      key={svc}
                      to="/services"
                      onClick={() => setDropdownOpen(false)}
                      style={{
                        display: 'block',
                        padding: '10px 20px',
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: 13,
                        fontWeight: 500,
                        color: '#F5F0E8',
                        textDecoration: 'none',
                        transition: 'color 0.15s, background 0.15s',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color = '#E07A20'
                        e.currentTarget.style.background = 'rgba(224,122,32,0.08)'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = '#F5F0E8'
                        e.currentTarget.style.background = 'transparent'
                      }}
                    >
                      {svc}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/about" style={navLinkStyle('/about')}
            onMouseEnter={e => { if (!isActive('/about')) e.currentTarget.style.color = '#E07A20' }}
            onMouseLeave={e => { if (!isActive('/about')) e.currentTarget.style.color = '#F5F0E8' }}
          >
            About Us
          </Link>

          <Link to="/contact" style={navLinkStyle('/contact')}
            onMouseEnter={e => { if (!isActive('/contact')) e.currentTarget.style.color = '#E07A20' }}
            onMouseLeave={e => { if (!isActive('/contact')) e.currentTarget.style.color = '#F5F0E8' }}
          >
            Contact Us
          </Link>
        </div>

        {/* Right side — phone + social */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          flexShrink: 0,
        }} className="desktop-nav">
          {/* Phone */}
          <a href="tel:5303070808" style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            background: 'linear-gradient(135deg, #E07A20, #F5A623)',
            color: '#0F1A09',
            padding: '8px 16px',
            borderRadius: 8,
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 13,
            textDecoration: 'none',
            transition: 'transform 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            📞 (530) 307-0808
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/TahoeTreeTitansLLC"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'rgba(245,240,232,0.6)', transition: 'color 0.2s', lineHeight: 1 }}
            onMouseEnter={e => e.currentTarget.style.color = '#E07A20'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,240,232,0.6)'}
            title="Facebook"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/tahoetreetitans/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'rgba(245,240,232,0.6)', transition: 'color 0.2s', lineHeight: 1 }}
            onMouseEnter={e => e.currentTarget.style.color = '#E07A20'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,240,232,0.6)'}
            title="Instagram"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#F5F0E8',
            padding: 4,
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              position: 'absolute',
              top: 80,
              left: 0,
              right: 0,
              background: 'rgba(10,18,6,0.98)',
              borderBottom: '1px solid rgba(224,122,32,0.2)',
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '16px 32px 24px', display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Contact Us', path: '/contact' },
              ].map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 16,
                    fontWeight: 600,
                    color: isActive(item.path) ? '#E07A20' : '#F5F0E8',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    padding: '14px 0',
                    borderBottom: '1px solid rgba(245,240,232,0.08)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile services accordion */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 16,
                    fontWeight: 600,
                    color: isActive('/services') ? '#E07A20' : '#F5F0E8',
                    textTransform: 'uppercase',
                    padding: '14px 0',
                    borderBottom: '1px solid rgba(245,240,232,0.08)',
                    letterSpacing: '0.05em',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  Services
                  <span style={{ fontSize: 10, transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}>▼</span>
                </button>
                {mobileServicesOpen && (
                  <div style={{ paddingLeft: 16, paddingBottom: 8 }}>
                    {services.map(svc => (
                      <Link
                        key={svc}
                        to="/services"
                        style={{
                          display: 'block',
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: 14,
                          color: 'rgba(245,240,232,0.7)',
                          textDecoration: 'none',
                          padding: '8px 0',
                          borderBottom: '1px solid rgba(245,240,232,0.05)',
                        }}
                      >
                        {svc}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile phone + social */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, paddingTop: 16 }}>
                <a href="tel:5303070808" style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  background: 'linear-gradient(135deg, #E07A20, #F5A623)',
                  color: '#0F1A09', padding: '10px 18px',
                  borderRadius: 8, fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700, fontSize: 14, textDecoration: 'none',
                }}>
                  📞 (530) 307-0808
                </a>
                <a href="https://www.facebook.com/TahoeTreeTitansLLC" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(245,240,232,0.6)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/tahoetreetitans/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(245,240,232,0.6)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
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
    </nav>
  )
}
