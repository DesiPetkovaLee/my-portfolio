import DesignImage from "./assets/coder.svg";

const Profile = () => {
    console.log("LOGGING");
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
                <svg
                    className="profile__stamp"
                    width="80"
                    height="80"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <clipPath id="circleClip">
                            <circle cx="100" cy="100" r="100" />
                        </clipPath>
                    </defs>
                    <g clipPath="url(#circleClip)">
                        <path
                            d="M-20,0 Q40,50 100,0 T220,0
           M-20,20 Q40,70 100,20 T220,20
           M-20,40 Q40,90 100,40 T220,40
           M-20,60 Q40,110 100,60 T220,60
           M-20,80 Q40,130 100,80 T220,80
           M-20,100 Q40,150 100,100 T220,100
           M-20,120 Q40,170 100,120 T220,120
           M-20,140 Q40,190 100,140 T220,140
           M-20,160 Q40,210 100,160 T220,160"
                            stroke="#FFD600"
                            strokeWidth="7"
                            fill="none"
                        />
                    </g>
                </svg>

                <img src={DesignImage} alt="Desi Lee" />
                <svg
                    className="profile__wave"
                    width="300"
                    height="80"
                    viewBox="0 0 300 80"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="
                        M0,40
                        Q15,-12 30,40
                        T60,40
                        T90,40
                        T120,40
                        T150,40
                        T180,40
                        T210,40
                        T240,40
                        T270,40
                        T300,40
                        "
                        stroke="#FFD600"
                        strokeWidth="10"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </section>
    );
};

export default Profile;
