import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
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
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/desislava-lee/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer__icon"
                        aria-label="LinkedIn"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a
                        href="/Desi_Lee_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer__icon"
                        aria-label="CV"
                    >
                        <FontAwesomeIcon icon={faFileAlt} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
