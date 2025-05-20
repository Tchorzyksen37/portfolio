import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import UniCv from "./components/UniCv";
import WorkCv from "./components/WorkCv"
import Home from "./components/Home";
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
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
  );
}
