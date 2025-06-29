import DesignImage from "./assets/coder.svg";

function Profile() {
    return (
        <section className="profile">
            <div className="profile__content">
                <p className="profile__subtitle">👋 Hey! I’m Desi Lee</p>
                <h1 className="profile__title">
                    A{" "}
                    <span className="profile__highlight">Junior Software</span>
                    <br />
                    <span className="profile__highlight">Developer</span> based
                    in the
                    <br />
                    UK.
                </h1>

                <a
                    href="https://github.com/DesiPetkovaLee"
                    className="profile__button"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Take a look at my work
                </a>
            </div>
            <div className="profile__image">
                <img src={DesignImage} alt="Desi Lee" />
            </div>
        </section>
    );
}

export default Profile;
