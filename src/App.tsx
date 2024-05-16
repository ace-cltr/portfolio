import React, { useEffect, useState } from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Github from "./components/Github";
import Resume from "./components/Resume";
import "./App.css";
import { motion } from "framer-motion";

const App: React.FC = () => {
  const location = useLocation();
  const [tabHeader, setTabHeader] = useState("about");

  useEffect(() => {
    const { pathname } = location;
    setTabHeader(pathname);
    console.log(pathname);
  }, [location]);

  // for tab heading changes according to path
  useEffect(() => {
    document.title = `portfolio ${tabHeader}`;
  }, [tabHeader]);

  return (
    <div className="App">
      <motion.nav
        className="navbar"
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3}}
      >
        <ul>
          <motion.li whileHover={{ scale: 1.2 }}>
            <Link to="/">About</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }}>
            <Link to="/projects">Projects</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }}>
            <Link to="/Contact">Contact</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }}>
            <Link to="/resume">Resume</Link>
          </motion.li>
        </ul>
      </motion.nav>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Contact" element={<Github />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
};

export default App;
