import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Github from './components/Github';
import Resume from './components/Resume';
import './App.css';
import { motion } from 'framer-motion';
import Footer from './components/Footer';


const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <ul>
            <motion.li whileHover={{ scale: 1.2 }} ><Link to="/">About</Link></motion.li>
            <motion.li whileHover={{ scale: 1.2 }} ><Link to="/projects">Projects</Link></motion.li>
            <motion.li whileHover={{ scale: 1.2 }} ><Link to="/github">Contact</Link></motion.li>
            <motion.li whileHover={{ scale: 1.2 }} ><Link to="/resume">Resume</Link></motion.li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/github" element={<Github />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
