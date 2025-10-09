import "./scss/about.scss";
import reactIcon from "./assets/react.svg";
import jsIcon from "./assets/js.svg";
import tsIcon from "./assets/typescript.svg";
import htmlIcon from "./assets/html5.svg";
import cssIcon from "./assets/css3.svg";
import scssIcon from "./assets/sass.svg";
import bemIcon from "./assets/bem.svg";
import javaIcon from "./assets/java.svg";
import springIcon from "./assets/springboot.svg";
import gitIcon from "./assets/git.svg";
import jqueryIcon from "./assets/jquery.svg";
import tailwindIcon from "./assets/tailwind.svg";

const About = () => {
    return (
        <section className="about">
            <div className="about__content">
                <p className="about__intro">
                    Hi, I’m Desi. I’m a software developer who loves making fun,
                    interactive things and building beautiful, responsive
                    websites with smooth, engaging user experiences. I switched
                    careers into tech because I wanted to combine creativity
                    with logic, and I’ve never looked back. Right now, I’m
                    deepening my skills in front-end development and learning
                    more about back-end technologies like Java and databases.
                    I’m always curious and excited to tackle new challenges.
                    When I’m not coding, you’ll usually find me vibing to music,
                    trying out new recipes, or digging my hands in the garden.
                </p>

                <h2 className="about__skills-title">
                    <span className="about__highlight">Technical Skills</span>
                </h2>

                <div className="about__skills-grid">
                    <div className="about__skill">
                        <img src={reactIcon} alt="React" />
                        <span>React</span>
                    </div>
                    <div className="about__skill">
                        <img src={jsIcon} alt="JavaScript" />
                        <span>JavaScript</span>
                    </div>
                    <div className="about__skill">
                        <img src={tsIcon} alt="TypeScript" />
                        <span>TypeScript</span>
                    </div>
                    <div className="about__skill">
                        <img src={htmlIcon} alt="HTML5" />
                        <span>HTML5</span>
                    </div>
                    <div className="about__skill">
                        <img src={cssIcon} alt="CSS3" />
                        <span>CSS3</span>
                    </div>
                    <div className="about__skill">
                        <img src={scssIcon} alt="SCSS" />
                        <span>SCSS</span>
                    </div>
                    <div className="about__skill">
                        <img src={bemIcon} alt="BEM" />
                        <span>BEM</span>
                    </div>
                    <div className="about__skill">
                        <img src={javaIcon} alt="Java" />
                        <span>Java</span>
                    </div>
                    <div className="about__skill">
                        <img src={springIcon} alt="Spring Boot" />
                        <span>Spring Boot</span>
                    </div>
                    <div className="about__skill">
                        <img src={gitIcon} alt="Git" />
                        <span>Git</span>
                    </div>
                    <div className="about__skill">
                        <img src={jqueryIcon} alt="jQuery" />
                        <span>jQuery</span>
                    </div>
                    <div className="about__skill">
                        <img src={tailwindIcon} alt="Tailwind" />
                        <span>Tailwind</span>
                    </div>
                    {/* <div className="about__skill">
                        <img src={bootstrapIcon} alt="Tailwind" />
                        <span>Bootstrap</span>
                    </div>
                    <div className="about__skill">
                        <img src={materialuiIcon} alt="Tailwind" />
                        <span>Material UI</span>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default About;
