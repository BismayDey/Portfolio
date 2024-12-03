import React from "react";
import { motion } from "framer-motion";
import "./Projects.css"; // Updated CSS file

const projectData = [
  {
    title: "FREEZZZ",
    description:
      "FREEZZZ: Your Ultimate Freelancing Platform designed to bridge the gap between talented professionals and businesses seeking quality services.",
    image:
      "https://topofstacksoftware.com/wp-content/uploads/2019/05/freelance-300x200.jpeg", // Replace with your project image URL
    link: "https://github.com/BismayDey/FREEZZZ",
    liveLink: "https://bismaydey.github.io/FREEZZZ/",
  },
  {
    title: "BD.com",
    description: "a financial app for managing your finance",
    image:
      "https://plus.unsplash.com/premium_photo-1682309600747-f8743e6d38e2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmluYW5jZSUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D", // Replace with your project image URL
    link: "https://github.com/BismayDey/BD.com",
    liveLink: "https://bd-com-nine.vercel.app/",
  },
  {
    title: "CODE EDITOR",
    description:
      "A code editor just like VS Code and all the other code but bigger and better",
    image:
      "https://easyux.net/wp-content/uploads/2024/01/Screenshot-2024-01-25-at-6.56.53-PM-300x200.png", // Replace with your project image URL
    link: "https://github.com/BismayDey/CODE-EDITOR",
    liveLink: "https://code-editor-ruby-one.vercel.app/",
  },
  {
    title: "Drug inventory",
    description: "An Advance level drug management inventory",
    image:
      "https://www.shutterstock.com/image-vector/modern-interior-pharmacy-drugstore-medicine-600nw-2474822543.jpg", // Replace with your project image URL
    link: "https://github.com/BismayDey/DRUG",
    liveLink: "https://drug-one.vercel.app/",
  },
  {
    title: "Quiz App",
    description: "An awsome Quiz app",
    image:
      "https://play-lh.googleusercontent.com/VpIV5wjUERZ-dTZxuIyiqv8XkZqbcgQTxqNJnwCcszLPGezPUEY-PSTxKySq-qhf=w240-h480-rw", // Replace with your project image URL
    link: "https://github.com/BismayDey/Quiz-App",
    liveLink: "https://quiz-app-omega-lovat.vercel.app/",
  },
  {
    title: "Gaming Library",
    description: "My own made gaming library playable web games made my me",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/046/862/342/small/blue-and-white-gaming-chair-in-front-of-red-and-blue-neon-lights-free-photo.jpeg", // Replace with your project image URL
    link: "https://github.com/BismayDey/GAMING-LIBRARY",
    liveLink: "https://gaming-library-two.vercel.app/",
  },
  // Add more projects as needed
];

const EnhancedProjects = () => {
  return (
    <section className="enhanced-projects-section">
      <h2 className="enhanced-projects-heading">Projects</h2>
      <div className="enhanced-projects-container">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="enhanced-project-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={project.image}
              alt={`${project.title} Thumbnail`}
              className="enhanced-project-image"
            />
            <div className="enhanced-project-content">
              <h3 className="enhanced-project-title">{project.title}</h3>
              <p className="enhanced-project-description">
                {project.description}
              </p>
              <div className="enhanced-project-links">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="enhanced-project-link"
                >
                  View on GitHub
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="enhanced-project-link live-link"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EnhancedProjects;
