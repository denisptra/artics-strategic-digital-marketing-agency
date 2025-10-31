import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ClientLogos from './components/ClientLogos';
import AboutSnapshot from './components/AboutSnapshot';
import ServicesPreview from './components/ServicesPreview';
import FeaturedWorks from './components/FeaturedWorks';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import WorksPage from './pages/WorksPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <ClientLogos />
            <AboutSnapshot onLearnMore={() => setCurrentPage('about')} />
            <ServicesPreview onExplore={() => setCurrentPage('services')} />
            <FeaturedWorks onViewAll={() => setCurrentPage('works')} />
            <Testimonials />
            <CTASection onContact={() => setCurrentPage('contact')} />
          </>
        );
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'works':
        return <WorksPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
