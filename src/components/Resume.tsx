import React from "react";
import Footer from "./Footer";

const Resume: React.FC = () => {
  const styles: React.CSSProperties = {
    color: "#00ff00",
    marginBottom: "20px",
  };
  return (
    <>
      <div className="resume">
        <h2 style={styles}>Resume</h2>
        <a
          href="/res/ANAND-Software-Dev.pdf"
          download="/res/ANAND-Software-Dev.pdf"
          target="_blank"
        >
          <img src="/res/ANAND.jpg" />
        </a>
      </div>
      <Footer />
    </>
  );
};

export default Resume;
