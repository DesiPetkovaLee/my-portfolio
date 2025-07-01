import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <a href="#" className="logo">
                    <span className="logo__icon">&lt;/&gt;</span>
                    <span className="logo__text">Desi Lee</span>
                </a>
                <nav className="nav">
                    <ul className="nav__list">
                        <li>
                            <Link to="/" className="nav__link">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="nav__link">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects" className="nav__link">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="nav__link nav__button"
                            >
                                Get In Touch
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
