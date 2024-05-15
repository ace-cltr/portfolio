import React from 'react';

const Projects: React.FC = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Project 1</h3>
        <a href="http://link-to-project-1.com">
          <img src="http://link-to-project-1-screenshot.com" alt="Project 1 Screenshot" />
        </a>
        <p>Description of Project 1.</p>
      </div>
      <div className="project">
        <h3>Project 2</h3>
        <a href="http://link-to-project-2.com">
          <img src="http://link-to-project-2-screenshot.com" alt="Project 2 Screenshot" />
        </a>
        <p>Description of Project 2.</p>
      </div>
      {/* Add more projects as needed */}
    </div>
  );
}

export default Projects;
