import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { toggleLanguage } = useLanguage();
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  if (isHomePage) {
    return null; // Hide navbar on homepage
  }

  return (
    <nav className="custom-navbar">
        <div className="navbar-container">
            <Link className="navbar-brand" to="/">{t('navbar.title')}</Link>        
            <ul className="navbar-links">
                <li className="nav-item">
                    <Link className="nav-link" to="/uni-cv">{t('navbar.academic')}</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/work-cv">{t('navbar.professional')}</Link>
                </li>
            </ul>
            <div className="language-toggle">
                <button onClick={toggleLanguage} className="lang-btn">
                    {i18n.language === 'en' ? 'PL' : 'EN'}
                </button>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
