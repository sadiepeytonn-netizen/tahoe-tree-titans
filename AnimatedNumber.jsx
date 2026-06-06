import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function AnimatedNumber({ value, suffix = '', duration = 1800 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!isInView) return

    // Handle non-numeric values like "Free"
    const numeric = parseFloat(value)
    if (isNaN(numeric)) {
      setDisplay(value)
      return
    }

    const isDecimal = value.toString().includes('.')
    const steps = 60
    const stepDuration = duration / steps
    let current = 0

    const timer = setInterval(() => {
      current += 1
      const progress = current / steps
      // ease out
      const eased = 1 - Math.pow(1 - progress, 3)
      const val = numeric * eased
      setDisplay(isDecimal ? val.toFixed(1) : Math.round(val).toString())
      if (current >= steps) clearInterval(timer)
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isInView, value, duration])

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  )
}
