import { Mail, MapPin, Phone, Linkedin, Instagram, Dribbble } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNavClick = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#003366] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#00AEEF] to-[#FF6B35] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-white font-bold text-xl">ARTICS</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Strategic digital marketing partner creating impactful experiences
              that drive growth.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['home', 'about', 'services', 'works'].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => handleNavClick(page)}
                    className="text-white/70 hover:text-white transition-colors capitalize"
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-3 text-white/70">
              <li>Digital Strategy</li>
              <li>Branding & Design</li>
              <li>Social Media</li>
              <li>Web Development</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#FF6B35] mt-1 flex-shrink-0" />
                <span className="text-white/70">
                  Jakarta, Indonesia
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-[#FF6B35] flex-shrink-0" />
                <span className="text-white/70">hello@artics.id</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-[#FF6B35] flex-shrink-0" />
                <span className="text-white/70">+62 21 1234 5678</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/70 text-sm">
              © 2024 PT Artics Digital Creative Agency. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Dribbble"
              >
                <Dribbble size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
