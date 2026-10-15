import { useState, useEffect, useRef } from 'react';
import { businessData } from '../data/businessData';
import rajuLogoGold from '../assets/images/raju_logo_gold_1792003179449.jpg';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'About', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ onNavigateContact, onNavigateGallery, onNavigateAbout, onNavigateServices, onNavigateHome, currentView }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 75);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    setIsScrolled(window.scrollY > 75);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle clicking outside to close mobile menu
  useEffect(() => {
    const handlePointerOutside = (e) => {
      if (
        mobileMenuOpen &&
        menuRef.current && !menuRef.current.contains(e.target) &&
        buttonRef.current && !buttonRef.current.contains(e.target)
      ) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handlePointerOutside);
    document.addEventListener('touchstart', handlePointerOutside);
    return () => {
      document.removeEventListener('mousedown', handlePointerOutside);
      document.removeEventListener('touchstart', handlePointerOutside);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (item.href === '#contact' && onNavigateContact) onNavigateContact();
    else if (item.href === '#gallery' && onNavigateGallery) onNavigateGallery();
    else if (item.href === '#about' && onNavigateAbout) onNavigateAbout();
    else if (item.href === '#services' && onNavigateServices) onNavigateServices();
    else if (item.href === '#home' && onNavigateHome) onNavigateHome();
  };

  const handleCtaClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigateContact) onNavigateContact();
  };

  const isLight = isScrolled || currentView !== 'home';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        mobileMenuOpen
          ? 'bg-[#3A1017]'
          : isLight
          ? 'bg-[#F5EEE6]/95 backdrop-blur-md border-b border-[#E9D8B8]/60 shadow-sm'
          : 'bg-transparent border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, { href: '#home' })}
          className="flex items-center rounded px-1"
        >
          <img src={rajuLogoGold} alt="Logo" className="h-10 sm:h-12 w-auto object-contain aspect-[16/9]" />
        </a>

        <div className="flex items-center gap-4">
          <button
            ref={buttonRef}
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded z-[60] relative transition-colors ${
              mobileMenuOpen ? 'text-[#F5EEE6]' : isLight ? 'text-[#541820]' : 'text-[#F5EEE6]'
            }`}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6 text-xs uppercase font-medium">
          {navItems.filter(item => item.name !== 'Contact').map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item)}
              className={`${isLight ? 'text-[#382326]' : 'text-[#F5EEE6]'}`}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, { href: '#contact' })}
            className={`px-4 py-2 rounded-full font-semibold ${
              isLight ? 'bg-[#3A1017] text-[#F5EEE6]' : 'bg-[#F5EEE6] text-[#3A1017]'
            }`}
          >
            Book Appointment
          </a>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div ref={menuRef} className="lg:hidden absolute top-full left-0 w-full bg-[#3A1017] p-6 text-[#F5EEE6] z-50">
          <nav className="flex flex-col gap-4">
            {navItems.filter(item => item.name !== 'Contact').map((item) => (
              <a key={item.name} href={item.href} onClick={(e) => handleNavClick(e, item)}>
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, { href: '#contact' })}
              className="mt-4 px-4 py-3 rounded-full bg-[#C5A15A] text-[#3A1017] font-semibold text-center"
            >
              Book Appointment
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
