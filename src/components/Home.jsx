import React from "react";
import NeuralBackground from "./NeuralBackground";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "./styles.css";

const Home = () => {
    const { language } = useLanguage();
    const translations = {
        en: {
            title: "Software Engineer and AI Enthusiast",
            welcome: "Welcome to my portfolio website. Explore my professional journey and academic background.",
            professionalCV: "Professional CV",
            academicCV: "Academic CV"
        },
        pl: {
            title: "Inżynier Oprogramowania i Entuzjasta AI",
            welcome: "Witaj na mojej stronie portfolio. Poznaj moją zawodową drogę i wykształcenie.",
            professionalCV: "CV Zawodowe",
            academicCV: "CV Akademickie"
        }
    };
    
    const t = translations[language];
    
    return (
        <div className="home-container">
            <NeuralBackground />
            <div className="home-content">
                <h1>Michał Tchórzewski</h1>
                <h2>{t.title}</h2>
                <p>{t.welcome}</p>
                <div className="home-buttons">
                    <Link to="/work-cv" className="home-button">
                        {t.professionalCV}
                    </Link>
                    <Link to="/uni-cv" className="home-button">
                        {t.academicCV}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
