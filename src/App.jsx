import "./scss/main.scss";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import Header from "./Header";
import Profile from "./Profile";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";
import Footer from "./Footer";
import { useEffect } from "react";

// ScrollHandler
const ScrollHandler = () => {
    const location = useLocation();

    useEffect(() => {
        if (
            location.pathname === "/projects" ||
            location.pathname === "/my-portfolio/projects"
        ) {
            document.body.style.overflowY = "auto";
        } else {
            document.body.style.overflowY = "hidden";
        }
    }, [location.pathname]);

    return null;
};

const App = () => {
    return (
        <Router basename="/my-portfolio/">
            <div className="layout">
                <ScrollHandler />
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Profile />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
