import "./scss/projects.scss";
import braintapImg from "./assets/braintapImg.png";
import youtubeImg from "./assets/youtubeImg.png";
import travelImg from "./assets/travelImg.png";
import booksImg from "./assets/booksImg.png";
import carbonImg from "./assets/carbon_trackerImg.png";
import seasaverImg from "./assets/sea_saverImg.png";

const projects = [
    {
        name: "Brain Tap",
        url: "https://desipetkovalee.github.io/braintap/",
        code: "https://github.com/DesiPetkovaLee/braintap",
        img: braintapImg,
        tech: "HTML, SCSS, JAVASCRIPT",
        desc: "A memory-training game built with React. It challenges users to find matching pairs in the shortest time possible, helping improve focus and short-term memory in a fun and interactive way.",
    },
    {
        name: "You Tube",
        url: "https://desipetkovalee.github.io/youtube-project/",
        code: "https://github.com/DesiPetkovaLee/youtube-project",
        img: youtubeImg,
        tech: "HTML, MUI, REACT",
        desc: "A YouTube-style video browser built using React and the YouTube API. It allows users to search, browse, and watch videos in a clean and responsive interface inspired by modern video platforms.",
    },
    {
        name: "Far Away",
        url: "https://desipetkovalee.github.io/travel-list/",
        code: "https://github.com/DesiPetkovaLee/travel-list",
        img: travelImg,
        tech: "HTML, CSS, REACT",
        desc: "A simple but handy packing list and travel planner app. Built with React, it helps users stay organised when planning trips, by letting them track, prioritise, and manage their essential items easily.",
    },
    {
        name: "Books",
        url: "https://desipetkovalee.github.io/books/",
        code: "https://github.com/DesiPetkovaLee/books",
        img: booksImg,
        tech: "HTML, BULMA, REACT",
        desc: "A reading tracker and book organiser. Users can add, mark as read, or remove books from their reading list, making it easy to keep track of what they’ve read and what’s next - all built with React Hooks.",
    },
    {
        name: "Carbon Footprint Tracker",
        url: "https://desipetkovalee.github.io/carbon-footprint-tracker/",
        code: "https://github.com/DesiPetkovaLee/carbon-footprint-tracker",
        img: carbonImg,
        tech: "HTML, CSS, REACT, TYPESCRIPT",
        desc: "An interactive React app that helps users estimate and track their carbon footprint based on everyday habits, while offering tips for reducing environmental impact.",
    },
    {
        name: "Sea Saver",
        url: "https://desipetkovalee.github.io/sea-saver/",
        code: "https://github.com/DesiPetkovaLee/sea-saver",
        img: seasaverImg,
        tech: "HTML, SCSS, TYPESCRIPT",
        desc: "A browser-based game built with Vanilla JS that challenges users to clean up ocean pollution by clicking floating trash items - designed to raise awareness through play.",
    },
];

const Projects = () => {
    return (
        <section className="projects">
            <h1>
                <span className="about__highlight">My Projects</span>
            </h1>
            <p>Click below to see all my projects on GitHub!</p>
            <a
                href="https://github.com/DesiPetkovaLee"
                target="_blank"
                rel="noopener noreferrer"
                className="projects__github-link"
            >
                See My GitHub
            </a>

            <div className="projects__grid">
                {projects.map((project) => (
                    <div className="projects__card" key={project.name}>
                        <div className="projects__card-image-container">
                            <img
                                src={project.img}
                                alt={`${project.name} screenshot`}
                                className="projects__card-img"
                            />
                        </div>
                        <div className="projects__card-content">
                            <p className="projects__card-tech">
                                {project.tech}
                            </p>
                            <h3 className="projects__card-title">
                                {project.name}
                            </h3>
                            <p className="projects__card-desc">
                                {project.desc}
                            </p>
                            <div className="projects__card-links">
                                <a
                                    href={project.code}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="projects__card-btn"
                                >
                                    Code <span>&lt;/&gt;</span>
                                </a>
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="projects__card-btn"
                                >
                                    Preview <span>&lt;/&gt;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
