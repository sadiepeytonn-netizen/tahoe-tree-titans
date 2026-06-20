import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import ExitIntent from './components/ExitIntent'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import GalleryPage from './pages/GalleryPage'
import TreeRemovalPage from './pages/services/TreeRemovalPage'
import CraneWorkPage from './pages/services/CraneWorkPage'
import EmergencyWorkPage from './pages/services/EmergencyWorkPage'
import TreeLimbingPage from './pages/services/TreeLimbingPage'
import StumpGrindingPage from './pages/services/StumpGrindingPage'
import OrnamentalPruningPage from './pages/services/OrnamentalPruningPage'
import DefensibleSpacePage from './pages/services/DefensibleSpacePage'
import WildfireMitigationPage from './pages/services/WildfireMitigationPage'
import PineNeedleCleanupPage from './pages/services/PineNeedleCleanupPage'
import FirewoodPage from './pages/services/FirewoodPage'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/tree-removal" element={<TreeRemovalPage />} />
        <Route path="/services/crane-work" element={<CraneWorkPage />} />
        <Route path="/services/emergency-tree-service" element={<EmergencyWorkPage />} />
        <Route path="/services/tree-limbing" element={<TreeLimbingPage />} />
        <Route path="/services/stump-grinding" element={<StumpGrindingPage />} />
        <Route path="/services/ornamental-pruning" element={<OrnamentalPruningPage />} />
        <Route path="/services/defensible-space" element={<DefensibleSpacePage />} />
        <Route path="/services/wildfire-mitigation" element={<WildfireMitigationPage />} />
        <Route path="/services/pine-needle-cleanup" element={<PineNeedleCleanupPage />} />
        <Route path="/services/firewood" element={<FirewoodPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <ExitIntent />
      <AnimatedRoutes />
    </Router>
  )
}
