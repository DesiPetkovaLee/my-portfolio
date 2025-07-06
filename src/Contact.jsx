import "./scss/contact.scss";

const Contact = () => {
    return (
        <section className="contact">
            <div className="contact__card">
                <h1>
                    {" "}
                    <span className="about__highlight">Get In Touch</span>
                </h1>
                <p>Email me at: petkovalee@gmail.com</p>
                <p>
                    Connect on LinkedIn:
                    <a
                        href="https://www.linkedin.com/in/desi-petkova-lee"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        My LinkedIn
                    </a>
                </p>
            </div>
        </section>
    );
};

export default Contact;
