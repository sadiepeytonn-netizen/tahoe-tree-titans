import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval)
          setTimeout(() => setDone(true), 400)
          setTimeout(() => onComplete?.(), 1200)
          return 100
        }
        return Math.min(p + Math.random() * 15 + 5, 100)
      })
    }, 120)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            background: '#0F1A09',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Animated topo lines */}
          <svg
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.15 }}
            viewBox="0 0 800 600"
            preserveAspectRatio="none"
          >
            {[0, 1, 2, 3, 4, 5].map(i => (
              <motion.path
                key={i}
                d={`M0,${100 + i * 80} Q200,${60 + i * 80 + Math.sin(i) * 40} 400,${120 + i * 80} T800,${90 + i * 80}`}
                fill="none"
                stroke="#E07A20"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: Math.min(progress / 100, 1) }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            ))}
          </svg>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}
          >
            <div style={{ fontSize: 56, marginBottom: 20 }}>🪓</div>
            <h1 style={{
              fontFamily: "'Black Han Sans', Impact, sans-serif",
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              fontWeight: 900,
              letterSpacing: '0.08em',
              color: '#F5F0E8',
              lineHeight: 1,
            }}>
              TAHOE TREE
            </h1>
            <h1 style={{
              fontFamily: "'Black Han Sans', Impact, sans-serif",
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              fontWeight: 900,
              letterSpacing: '0.08em',
              color: '#E07A20',
              lineHeight: 1,
              marginBottom: 40,
            }}>
              TITANS
            </h1>

            {/* Progress bar */}
            <div style={{
              width: 200,
              height: 3,
              background: 'rgba(224,122,32,0.2)',
              margin: '0 auto',
              borderRadius: 99,
              overflow: 'hidden',
            }}>
              <motion.div
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, #E07A20, #F5A623)',
                  borderRadius: 99,
                }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
