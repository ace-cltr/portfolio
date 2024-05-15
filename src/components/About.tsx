import React from "react";
import { motion } from 'framer-motion';
import Logos from './Logos';
import GithubContribution from "./GithubcContribution";

const About: React.FC = () => {
  return (
    <>
    <motion.div className="about" animate={{ y: 10 }}
    transition={{ type: "spring", stiffness: 100 }}>
      <h1>
        Hi, I'm Anand Vishwakarma 👋
      </h1>
      <p>
        I'm a fullstack developer with hands-on experience in JavaScript, React,
        Node.js, Express, and MongoDB.
      </p>
    </motion.div>
    <h2>
        Tech Stack
      </h2>
    <Logos />
    <GithubContribution />
    </>
  );
};

export default About;
