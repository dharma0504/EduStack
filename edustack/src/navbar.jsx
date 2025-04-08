import React from 'react';
import './STYLES/navbar.css'; // Assuming you have renamed styles.css to navbar.css
import logo1 from './assets/logo1.jpeg';

function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <div className="logo-container">
                   <a href="/Home"> <img src={logo1} alt="Logo" className="logo" /></a>
                </div>
                <ul className="nav-links">
                    <li><a href="/Home">Home</a></li>
                    <li><a href="/Roadmaps">Roadmaps</a></li>
                    <li><a href="/Guides">Guides</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
