import React from "react";
import NeuralBackground from "./NeuralBackground";
import { Link } from "react-router-dom";
import { useTranslation } from "../translations";
import "./styles.css";

const Home = () => {
    const t = useTranslation('home');

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
