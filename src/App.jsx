import { useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Hero from './components/Hero'
import Services from './components/Services'
import Reviews from './components/Reviews'
import Contact from './components/Contact'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <div>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <Hero />
      <Services />
      <Reviews />
      <Contact />
    </div>
  )
}
