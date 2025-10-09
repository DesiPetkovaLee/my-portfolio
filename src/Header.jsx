import { Link } from "react-router-dom";
import desilogo from "./assets/desilogo.png";
import React, { useState } from "react";

const Header = ({ isLampOn, toggleLamp, showLampVisual }) => {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header className={`header ${isLampOn ? 'is-lit' : ''}`}>
            {showLampVisual && (
                <div className={`simple-lamp ${isLampOn ? 'lamp-on' : ''}`}>
                    <div className="lamp-fixture"></div>
                    <div className="lamp-cord"></div>
                    <div className="lamp-shade"></div>
                    <div className="lamp-light"></div>
                </div>
            )}
            <div className="header__wrapper">
                <a href="#" className="logo">
                    <img src={desilogo} alt="Desi Lee Logo" className="logo__icon" />
                </a>

                <button
                    className={`nav-toggle ${isNavOpen ? "open" : ""}`}
                    onClick={toggleNav}
                    aria-label="Toggle navigation"
                >
                    <span className="hamburger"></span>
                </button>

                <nav className={`nav ${isNavOpen ? "nav--open" : ""}`}>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to="/" className="nav__link" onClick={toggleNav}>
                                Home
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/about" className="nav__link" onClick={toggleNav}>
                                About
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/projects" className="nav__link" onClick={toggleNav}>
                                Projects
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                to="/contact"
                                className="nav__link nav__button"
                                onClick={toggleNav}
                            >
                                Get In Touch
                            </Link>
                        </li>
                        <li className="nav__item">
                            <div className="lamp-toggle" onClick={toggleLamp}>
                                <div className={`lamp-toggle__switch ${isLampOn ? 'on' : ''}`}></div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
