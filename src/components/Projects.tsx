import React from 'react';
import { motion } from 'framer-motion';
import './project.css'

interface Project {
  name: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    name: 'Project 1',
    description: 'Description of Project 1.',
    imageUrl: './img/quiz.png',
    githubUrl: 'https://github.com/ace-cltr/binge-watch',
  },
  {
    name: 'binge Watch',
    description: 'Responsive and user-friendly movie-data fetching website',
    imageUrl: './img/Untitled.png',
    githubUrl: 'https://github.com/ace-cltr/binge-watch',
  },
  {
    name: 'Project 3',
    description: 'Description of Project 3.',
    imageUrl: './img/Untitled.png',
    githubUrl: 'https://github.com/ace-cltr/binge-watch',
  },
  {
    name: 'Project 4',
    description: 'Description of Project 4.',
    imageUrl: './img/Untitled.png',
    githubUrl: 'https://github.com/ace-cltr/binge-watch',
  },
];

const Projects: React.FC = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project"
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <a href={project.githubUrl} target="_blank" rel="no">
              <img src={project.imageUrl} alt={`${project.name} Screenshot`} />
            </a>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
