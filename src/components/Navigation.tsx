import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import LogoWhite from '../assets/LogoWhite.svg';
import LogoBlue from '../assets/LogoBlue.svg'

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}
export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveScrolled = isScrolled || currentPage !== 'home';

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'works', label: 'Works' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isActiveScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2 group"
          >
            <img
              src={isActiveScrolled ? LogoBlue : LogoWhite}
              alt="ARTICS logo"
              className="w-20 h-20 object-contain rounded-lg transform group-hover:scale-105 transition-transform"
            />
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors relative group ${
                  currentPage === item.id
                    ? 'text-[#00AEEF]'
                    : isActiveScrolled
                      ? 'text-[#1B1B1B] hover:text-[#00AEEF]'
                      : 'text-white hover:text-[#00AEEF]'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#00AEEF] transition-all ${
                    currentPage === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${
                isActiveScrolled
                  ? 'bg-[#FF6B35] text-white hover:bg-[#FF6B35]/90'
                  : 'bg-white text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white'
              }`}
            >
              Let's Talk
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${
              isActiveScrolled ? 'text-[#003366]' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

