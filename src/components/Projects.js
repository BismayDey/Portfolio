import React from "react";
import { motion } from "framer-motion";
import "./Projects.css"; // Optional styling file

const projectData = [
  {
    title: "Project One",
    description: "Description of Project One",
    link: "https://github.com/username/project-one",
    liveLink: "https://project-one-live.com",
  },
  {
    title: "Project Two",
    description: "Description of Project Two",
    link: "https://github.com/username/project-two",
    liveLink: "https://project-two-live.com",
  },
  {
    title: "Project Three",
    description: "Description of Project Three",
    link: "https://github.com/username/project-three",
    liveLink: "https://project-three-live.com",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section>
      <h2>Projects</h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 20 }} // Initial state
            animate={{ opacity: 1, y: 0 }} // Animation on load
            exit={{ opacity: 0, y: -20 }} // Animation on exit
            transition={{ duration: 0.5 }} // Transition properties
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
