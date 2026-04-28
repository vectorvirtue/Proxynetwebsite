import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Careers from './pages/Careers'
import Support from './pages/Support'
import Rentals from './pages/Rentals'
import BillboardSolutions from './pages/BillboardSolutions'
import NotFound from './pages/NotFound'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton'
import BackToTop from './components/BackToTop'
import CookieBanner from './components/CookieBanner'
import { LanguageProvider } from './context/LanguageContext'
import './App.css'

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/support" element={<Support />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/billboard-solutions" element={<BillboardSolutions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
        <CookieBanner />
      </BrowserRouter>
    </LanguageProvider>
  )
}
