function Header() {
    return (
        <header className="header">
            <div className="header__wrapper">
                <a href="#" className="logo">
                    Desi Lee
                </a>
                <nav className="nav">
                    <ul className="nav__list">
                        <li>
                            <a href="#home" className="nav__link">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="nav__link">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="nav__link">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="nav__link nav__button"
                            >
                                Get In Touch
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
