import React, { useState, useEffect } from 'react';
import { Menu, X, Presentation } from 'lucide-react';

export default function Header({ onScrollTo, refs, onOpenQuiz, onOpenCalculator, onOpenEcosystem, onOpenSlides }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 40;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (action) => {
    action();
    setMobileMenuOpen(false);
  };

  return (
    <header className={`header-bar ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        {/* Brand Logo */}
        <a
          href="#"
          className="brand-logo"
          onClick={(e) => { e.preventDefault(); handleNavClick(() => onScrollTo(refs.heroRef)); }}
        >
          <span className="logo-dot"></span>
          IVORYDEV
        </a>

        {/* Desktop Navigation */}
        <nav className={`nav-tabs ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <button className="nav-button" onClick={() => handleNavClick(() => onScrollTo(refs.heroRef))}>
            Accueil
          </button>
          <button className="nav-button" onClick={() => handleNavClick(() => onScrollTo(refs.servicesRef))}>
            Services
          </button>
          <button className="nav-button" onClick={() => handleNavClick(() => onScrollTo(refs.statsRef))}>
            Marché
          </button>
          <button className="nav-button" onClick={() => handleNavClick(() => onScrollTo(refs.projectsRef))}>
            Offres
          </button>
          <button className="nav-button" onClick={() => handleNavClick(() => onScrollTo(refs.salaryRef))}>
            Salaires
          </button>
          <button className="nav-button" onClick={() => handleNavClick(onOpenQuiz)}>
            Quiz
          </button>
          <button className="nav-button" onClick={() => handleNavClick(onOpenCalculator)}>
            Simulateur
          </button>
          <button className="nav-button" onClick={() => handleNavClick(onOpenEcosystem)}>
            Écosystème
          </button>
          <button className="nav-button" onClick={() => handleNavClick(() => onScrollTo(refs.contactRef))}>
            Contact
          </button>
        </nav>

        {/* Desktop CTA */}
        <div className="header-actions">
          <button className="btn-primary" onClick={onOpenSlides} style={{ padding: '10px 24px', fontSize: '0.8rem' }}>
            <Presentation size={16} />
            CONFÉRENCE
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : (
            <>
              <span></span>
              <span></span>
              <span></span>
            </>
          )}
        </button>
      </div>
    </header>
  );
}
