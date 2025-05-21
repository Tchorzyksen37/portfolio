import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const { toggleLanguage, language } = useLanguage();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const translations = {
    en: {
      title: "Curriculum Vitae",
      academic: "Academic",
      professional: "Professional"
    },
    pl: {
      title: "Curriculum Vitae",
      academic: "Akademickie",
      professional: "Zawodowe"
    }
  };

  const t = translations[language];

  if (isHomePage) {
    return null; // Hide navbar on homepage
  }

  return (
    <nav className="custom-navbar">
        <div className="navbar-container">
            <Link className="navbar-brand" to="/portfolio">{t.title}</Link>        
            <ul className="navbar-links">
                <li className="nav-item">
                    <Link className="nav-link" to="/uni-cv">{t.academic}</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/work-cv">{t.professional}</Link>
                </li>
            </ul>
            <div className="language-toggle">
                <button onClick={toggleLanguage} className="lang-btn">
                    {language === 'en' ? 'PL' : 'EN'}
                </button>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
