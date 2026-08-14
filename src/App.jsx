import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Support from "./pages/Support";
import Rentals from "./pages/Rentals";
import BillboardSolutions from "./pages/BillboardSolutions";
import EdTech from "./pages/EdTech";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import CSR from "./pages/CSR";
import Contact from "./pages/Contact";
import CaseStudies from "./pages/CaseStudies";
import CaseStudy from "./pages/CaseStudy";
import Partners from "./pages/Partners";
import Events from "./pages/Events";
import EventGallery from "./pages/EventGallery";
import IndustryPage from "./pages/IndustryPage";
import AVSolutions from "./pages/AVSolutions";
import Networking from "./pages/Networking";
import Cybersecurity from "./pages/Cybersecurity";
import DistributionReseller from "./pages/DistributionReseller";
import UnifiedComms from "./pages/UnifiedComms";
import CloudManaged from "./pages/CloudManaged";
import NotFound from "./pages/NotFound";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import Terms from "./pages/Terms";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import BackToTop from "./components/BackToTop";
import CookieBanner from "./components/CookieBanner";
import { LanguageProvider } from "./context/LanguageContext";
import "./App.css";

export default function App() {
  return (
    <HelmetProvider>
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
            <Route
              path="/billboard-solutions"
              element={<BillboardSolutions />}
            />
            <Route path="/solutions/edtech" element={<EdTech />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/csr" element={<CSR />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:slug" element={<CaseStudy />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:eventId" element={<EventGallery />} />
            <Route path="/industries/:slug" element={<IndustryPage />} />
            <Route path="/solutions/av" element={<AVSolutions />} />
            <Route path="/solutions/networking" element={<Networking />} />
            <Route path="/solutions/cybersecurity" element={<Cybersecurity />} />
            <Route path="/solutions/distribution" element={<DistributionReseller />} />
            <Route path="/solutions/unified-communications" element={<UnifiedComms />} />
            <Route path="/solutions/cloud-managed-services" element={<CloudManaged />} />
            <Route path="/faqs" element={<FAQ />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <WhatsAppButton />
          <BackToTop />
          <CookieBanner />
        </BrowserRouter>
      </LanguageProvider>
    </HelmetProvider>
  );
}
