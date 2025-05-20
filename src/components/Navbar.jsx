import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  if (isHomePage) {
    return null; // Hide navbar on homepage
  }

  return (
    <nav className="custom-navbar">
        <div className="navbar-container">
            <Link className="navbar-brand" to="/">Curriculum Vitae</Link>        
            <ul className="navbar-links">
                <li className="nav-item">
                    <Link className="nav-link" to="/uni-cv">{language === 'en' ? 'Academic' : 'Akademickie'}</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/work-cv">{language === 'en' ? 'Professional' : 'Zawodowe'}</Link>
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
