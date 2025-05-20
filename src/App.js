import "./styles.css";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import UniCv from "./components/UniCv";
import WorkCv from "./components/WorkCv"
import Home from "./components/Home";
import { I18nProvider } from '@lingui/react';
import { i18n } from '@lingui/core';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <I18nProvider i18n={i18n}>
      <LanguageProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/uni-cv" element={<UniCv />} />
            <Route path="/work-cv" element={<WorkCv/>} />
          </Routes>
        </Router>
      </LanguageProvider>
    </I18nProvider>
  );
}
