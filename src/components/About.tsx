import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logos from "./Logos";
import GithubContribution from "./GithubcContribution";
import Button from "./Button";
import Footer from "./Footer";
import SectionDiv from "./SectionDIv";

const About: React.FC = () => {
  const styles: React.CSSProperties = {
    color: "#00ff00",
    marginBottom: "20px",
  };
  const [words, setWords] = useState("Full Stack Developer");
  const word = [
    "फुल स्टैक डेवलपर",
    "网站开发人员",
    "desarrollador web",
    "ウェブサイト開発者",
    "développeur de Web",
  ];

  let i = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setWords(word[i]);
      i = (i + 1) % word.length;
    }, 1600);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <motion.div
        className="about"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        // animate={{ y: 10 }}
        // transition={{ type: "spring", stiffness: 100 }}
      >
        <h1>
          Hi, I'm <strong style={styles}>Anand Vishwakarma</strong>
        </h1>
        <p>
          A{" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="word"
          >
            {words}
          </motion.span>{" "}
          with Hands-On Experience in building dynamic and responsive web
          applications using React.js and Next.js, and for Backend Node.js,
          Express.js and Mongo DB or postgresql as Database.
        </p>
      </motion.div>
      <SectionDiv />
      <h2 className="techStack">Tech Stack</h2>
      <Logos />
      <SectionDiv />
      <GithubContribution />
      <Button>Download CV</Button>
      <Footer />
    </>
  );
};

export default About;
