import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const navItems = [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { path: '/research', label: t.nav.research },
    { path: '/solutions', label: t.nav.solutions },
    { path: '/partners', label: t.nav.partners },
    { path: '/news', label: t.nav.news },
    { path: '/careers', label: t.nav.careers },
    { path: '/contact', label: t.nav.contact },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header glass">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <span className="logo-text gradient-text">Eliyte™</span>
            <span className="logo-subtitle">Araştırma Merkezi</span>
          </Link>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button
              className="language-toggle"
              onClick={toggleLanguage}
              aria-label="Toggle language"
            >
              {language === 'en' ? 'TR' : 'EN'}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
