import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Github from './components/Github';
import Resume from './components/Resume';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <ul>
            <li><Link to="/">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/github">GitHub</Link></li>
            <li><Link to="/resume">Resume</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/github" element={<Github />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
