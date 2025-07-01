import "./scss/projects.scss";

const projects = [
    {
        name: "Brain Tap",
        url: "https://desipetkovalee.github.io/braintap/",
    },
    {
        name: "You Tube",
        url: "https://desipetkovalee.github.io/youtube-project/",
    },
    {
        name: "Far Away",
        url: "https://desipetkovalee.github.io/travel-list/",
    },
    {
        name: "Books",
        url: "https://desipetkovalee.github.io/books/",
    },
];

const Projects = () => {
    return (
        <section className="projects">
            <h1>My Projects</h1>
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
                    <a
                        key={project.name}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects__card"
                    >
                        {project.name}
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Projects;
