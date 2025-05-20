import React from "react";
import NeuralBackground from "./NeuralBackground";
import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => {
    return (
        <div className="home-container">
            <NeuralBackground />
            <div className="home-content">
                <h1>Michał Tchórzewski</h1>
                <h2>Software Engineer & AI Enthusiast</h2>
                <p>Welcome to my portfolio website. Explore my professional journey and academic background.</p>
                <div className="home-buttons">
                    <Link to="/work-cv" className="home-button">Professional CV</Link>
                    <Link to="/uni-cv" className="home-button">Academic CV</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
