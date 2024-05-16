import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logos from "./Logos";
import GithubContribution from "./GithubcContribution";
import Button from "./Button";
import Footer from "./Footer";
import SectionDiv from "./SectionDIv";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  const styles: React.CSSProperties = {
    color: "#00ff00",
    marginBottom: "20px",
  };
  const [words, setWords] = useState("Full Stack Developer");
  const word = [
    "फुल स्टैक डेवलपर",
    "ওয়েব ডেভেলপমেন্ট",
    "വെബ് ഡവലപ്‍മെന്റ്",
    "网站开发人员",
    "desarrollador web",
    "Programmation web",
    "Desenvolvimento web",
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
        <img className="potrait" src="./img/self3.jpg" alt="anandImg" />
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
            <strong>{words}</strong>
          </motion.span>{" "}
          with Hands-On Experience in building dynamic and responsive web
          applications using <strong>React.js</strong> and{" "}
          <strong>Next.js</strong>, and for Backend{" "}
          <strong>Node.js, Express.js</strong> and <strong>Mongo DB </strong>or{" "}
          <strong>postgresql</strong> as Database.
        </p>
      </motion.div>
      <SectionDiv />
      <h2 className="techStack">Tech Stack</h2>
      <Logos />
      <SectionDiv />
      <GithubContribution />
      <Link to='resume'><Button>Download CV</Button></Link>
      <Footer />
    </>
  );
};

export default About;
