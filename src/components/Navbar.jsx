import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../translations';

const Navbar = () => {
  const { toggleLanguage, language } = useLanguage();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const t = useTranslation('nav');

  if (isHomePage) {
    return (
      <nav className="custom-navbar home-navbar">
        <div className="navbar-container">
          <span className="navbar-brand">Michał Tchórzewski</span>
          <div className="language-toggle">
            <button onClick={toggleLanguage} className="lang-btn">
              {language === 'en' ? 'PL' : 'EN'}
            </button>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="custom-navbar">
        <div className="navbar-container">
            <Link className="navbar-brand" to="/">{t.title}</Link>
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
