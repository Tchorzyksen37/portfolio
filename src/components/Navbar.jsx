import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Trans } from '@lingui/macro';

const Navbar = () => {
  const { toggleLanguage, language } = useLanguage();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  if (isHomePage) {
    return null; // Hide navbar on homepage
  }

  return (
    <nav className="custom-navbar">
        <div className="navbar-container">
            <Link className="navbar-brand" to="/"><Trans id="navbar.title" /></Link>        
            <ul className="navbar-links">
                <li className="nav-item">
                    <Link className="nav-link" to="/uni-cv"><Trans id="navbar.academic" /></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/work-cv"><Trans id="navbar.professional" /></Link>
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
