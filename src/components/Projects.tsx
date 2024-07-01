import React from "react";
import { motion } from "framer-motion";
import "./project.css";
import Footer from "./Footer";

interface Project {
  name: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    name: "I Shop",
    description:
      "Fullstack E-Commerce Responsive and user-friendly website with Authentication",
    imageUrl: "./img/e-commerce.png",
    githubUrl: "https://binge-watch-delta.vercel.app/",
  },
  {
    name: "Blog App",
    description: "Blog App with Node js as Backend and modern world feature",
    imageUrl: "./img/download.png",
    githubUrl: "https://blog-app-nodejs-one.vercel.app/",
  },
  {
    name: "Adventure log",
    description: "A real world web app to log your trip around the globe",
    imageUrl: "./img/adv.png",
    githubUrl: "https://adventure-log-sigma.vercel.app/",
  },

  {
    name: "Quiz app",
    description:
      "Quiz-web-app with features like timer, high score and click to reveal feature ",
    imageUrl: "./img/quiz.png",
    githubUrl: "https://quiz-app-kappa-taupe.vercel.app/",
  },
];

const colorHeading: React.CSSProperties = {
  color: "#00ff00",
};

const Projects: React.FC = () => {
  return (
    <>
      <div className="projects">
        <h2 style={colorHeading}>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project"
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href={project.githubUrl} target="_blank" rel="no">
                <img
                  src={project.imageUrl}
                  alt={`${project.name} Screenshot`}
                />
              </a>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
