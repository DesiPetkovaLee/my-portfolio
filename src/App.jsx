import "./scss/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Profile from "./Profile";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";
import Footer from "./Footer";

const App = () => {
    return (
        <Router basename="/my-profile-site/">
            <div className="layout">
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
