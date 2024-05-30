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
          href="https://drive.google.com/file/d/1roTsSbdIOtUVJDNfD9K0ikictE_fVCtm/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/res/Resumee.jpg" />
        </a>
      </div>
      <Footer />  
    </>
  );
};

export default Resume;
