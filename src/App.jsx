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
import { useEffect, useState } from "react";

const ScrollHandler = () => {
    const location = useLocation();
  
    useEffect(() => {
      // allow scroll if url contains "/projects" 
      const allowScroll = /\/projects(\/|$)/.test(location.pathname);
  
      const value = allowScroll ? "auto" : "hidden";
      // control page scroll (inline wins over CSS)
      document.documentElement.style.overflowY = value; // <html>
      document.body.style.overflowY = value;            // <body>
    }, [location.pathname]);
  
    return null;
  };

const App = () => {
    const [isLampOn, setIsLampOn] = useState(false);
    const location = useLocation();

    const isAboutPage = location.pathname === "/about";
    const isProjectsPage = location.pathname === "/projects";
    const isContactPage = location.pathname === "/contact";
    const isHomePage = location.pathname === "/";

    const toggleLamp = () => {
        setIsLampOn(prev => !prev);
    };

    useEffect(() => {
        // apply lamp background effects on all pages
        document.body.classList.toggle('room-lit', isLampOn);
        
        if (isAboutPage || isProjectsPage || isContactPage) {
            document.body.classList.add('blue-theme');
        } else {
            document.body.classList.remove('blue-theme');
        }
    }, [isLampOn, isAboutPage, isProjectsPage, isContactPage]);

    return (
        <div className="layout">
            <Header
                isLampOn={isLampOn}
                toggleLamp={toggleLamp}
                showLampVisual={isHomePage}
            />
            <main>
                <Routes>
                    <Route path="/" element={<Profile isLampOn={isLampOn} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
            <ScrollHandler />
        </div>
    );
};

const AppWrapper = () => (
    <Router basename="/my-portfolio/">
        <App />
    </Router>
);

export default AppWrapper;
