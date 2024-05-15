import React from "react";
import { motion } from "framer-motion";
import Logos from "./Logos";
import GithubContribution from "./GithubcContribution";
import Button from "./Button";

const About: React.FC = () => {
  return (
    <>
      <motion.div
        className="about"
        animate={{ y: 10 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <h1>Hi, I'm Anand Vishwakarma 👋</h1>
        <p>
          A fullstack developer with Hands-On Experience in building dynamic and
          responsive web applications using React.js and Next.js, and for
          Backend Node.js, Express.js and Mongo DB or postgresql as Database.
        </p>
      </motion.div>
      <h2 className="techStack">Tech Stack</h2>
      <Logos />
      <GithubContribution />
      <Button>Download CV</Button>
    </>
  );
};

export default About;
