import { useState, useEffect } from "react";
import DesignImage from "./assets/desk_transparent.png";
import FloatingEmojis from "./FloatingEmojis";
import "./scss/profile.scss";


const Profile = ({ isLampOn }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={`profile ${isLampOn ? "is-lit" : ""}`}>
      <div className="profile__content">
        <p className="profile__subtitle">👋 Hey! I'm Desi Lee</p>
        <h1 className="profile__title">
          A <span className="profile__highlight">Junior Software</span>
          {!isMobile ? <br /> : " "}
          <span className="profile__highlight">Developer</span> based in the UK.
        </h1>
        <a
          href="https://github.com/DesiPetkovaLee"
          className="nav__button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Take a look at my work
        </a>
      </div>

      <div className="profile__image">
        <FloatingEmojis isActive={isLampOn} />
        <div className="desk-container">
          <img src={DesignImage} alt="Desk setup" className="desk-image" />
        </div>
      </div>
    </section>
  );
};

export default Profile;
