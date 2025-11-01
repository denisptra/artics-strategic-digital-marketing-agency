import { useState, useEffect } from 'react';
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

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace('/', '') || 'home';
      setCurrentPage(path);
    };
    window.addEventListener('popstate', handlePopState);
    handlePopState();
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState({}, '', page === 'home' ? '/' : `/${page}`);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <ClientLogos />
            <AboutSnapshot onLearnMore={() => handleNavigate('about')} />
            <ServicesPreview onExplore={() => handleNavigate('services')} />
            <FeaturedWorks onViewAll={() => handleNavigate('works')} />
            <Testimonials />
            <CTASection onContact={() => handleNavigate('contact')} />
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
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      {renderPage()}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
