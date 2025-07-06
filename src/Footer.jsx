function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <p className="footer__email">petkovalee@gmail.com</p>
                <div className="footer__icons">
                    <a
                        href="https://github.com/DesiPetkovaLee"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer__icon"
                        aria-label="GitHub"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer__icon"
                        aria-label="LinkedIn"
                    >
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a
                        href="/cv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer__icon"
                        aria-label="CV"
                    >
                        <i className="fa-solid fa-file-lines"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
