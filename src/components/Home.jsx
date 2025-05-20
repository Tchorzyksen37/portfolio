import React from "react";
import NeuralBackground from "./NeuralBackground";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "./styles.css";

const Home = () => {
    const { language } = useLanguage();
    
    return (
        <div className="home-container">
            <NeuralBackground />
            <div className="home-content">
                <h1>Michał Tchórzewski</h1>
                <h2>{language === 'en' ? 'Software Engineer and AI Enthusiast' : 'Inżynier Oprogramowania i Entuzjasta AI'}</h2>
                <p>
                    {language === 'en' 
                        ? 'Welcome to my portfolio website. Explore my professional journey and academic background.' 
                        : 'Witaj na mojej stronie portfolio. Poznaj moją zawodową drogę i wykształcenie.'}
                </p>
                <div className="home-buttons">
                    <Link to="/work-cv" className="home-button">
                        {language === 'en' ? 'Professional CV' : 'CV Zawodowe'}
                    </Link>
                    <Link to="/uni-cv" className="home-button">
                        {language === 'en' ? 'Academic CV' : 'CV Akademickie'}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
