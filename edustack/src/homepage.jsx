// HomePage.js
import React from 'react';
import "./STYLES/homepage.css"; // Importing the CSS file
import './STYLES/Roadmaps.css';
import Landing from "./assets/landing_page.jpeg";

function HomePage() {
    return (
        <img src={Landing} alt="Logo" className="logo" style={{ width: "90%", height: "auto", borderRadius: "20px" }} />
    );
}

export default HomePage;
