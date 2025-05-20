import React from "react";
import NeuralBackground from "./NeuralBackground";
import { Link } from "react-router-dom";
import { Trans } from '@lingui/macro';
import "./styles.css";

const Home = () => {
    return (
        <div className="home-container">
            <NeuralBackground />
            <div className="home-content">
                <h1>Michał Tchórzewski</h1>
                <h2><Trans id="home.title" /></h2>
                <p><Trans id="home.welcome" /></p>
                <div className="home-buttons">
                    <Link to="/work-cv" className="home-button">
                        <Trans id="home.professionalCV" />
                    </Link>
                    <Link to="/uni-cv" className="home-button">
                        <Trans id="home.academicCV" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
