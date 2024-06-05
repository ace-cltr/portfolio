import React from "react";

const Socials: React.FC = () => {
  return (
    <div className="social-buttons">
      <a href="https://github.com/ace-cltr">
        <img src="/res/github.png" />
      </a>
      <a href="https://www.instagram.com/_anand.vish_/">
        <img src="/res/instagram.png" />
      </a>
      <a href="https://www.linkedin.com/in/anand-vishwakarma-87a57a276">
        <img src="/res/linkedin.png" />
      </a>
      <a href="/res/resume.pdf" download="/res/resume.pdf" target="_blank">
        <p>Download CV</p>
      </a>
    </div>
  );
};

export default Socials;
