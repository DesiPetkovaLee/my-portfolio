import "./scss/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Profile from "./Profile";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";

const App = () => {
    console.log("This is logging");

    return (
        <Router basename="/my-profile-site/">
            <Header />
            <Routes>
                <Route path="/" element={<Profile />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default App;
