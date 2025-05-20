import React from "react";
import NeuralBackground from "./NeuralBackground";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import "./styles.css";

const Home = () => {
    const { t } = useTranslation();
    
    return (
        <div className="home-container">
            <NeuralBackground />
            <div className="home-content">
                <h1>Michał Tchórzewski</h1>
                <h2>{t('home.title')}</h2>
                <p>{t('home.welcome')}</p>
                <div className="home-buttons">
                    <Link to="/work-cv" className="home-button">
                        {t('home.professionalCV')}
                    </Link>
                    <Link to="/uni-cv" className="home-button">
                        {t('home.academicCV')}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
