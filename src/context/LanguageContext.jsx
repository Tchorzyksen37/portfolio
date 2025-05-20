import React, { createContext, useContext, useState, useEffect } from 'react';
import { i18n } from '@lingui/core';
import { en, pl } from 'make-plural/plurals';
import { messages as enMessages } from '../locales/en/messages';
import { messages as plMessages } from '../locales/pl/messages';

// Initialize Lingui
i18n.loadLocaleData({
  en: { plurals: en },
  pl: { plurals: pl }
});

// Load messages
i18n.load({
  en: enMessages,
  pl: plMessages
});

// Set initial locale
const initialLocale = localStorage.getItem('language') || 'en';
i18n.activate(initialLocale);

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLocale);
  
  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'pl' : 'en';
    setLanguage(newLang);
    i18n.activate(newLang);
    localStorage.setItem('language', newLang);
  };

  // Initialize language from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
      i18n.activate(savedLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
