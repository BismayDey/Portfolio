// src/pages/Home.js
import React from "react";
import { useSpring, animated } from "react-spring";
import TypingEffect from "../components/TypingEffect";
import Skills from "../components/Skills";
import Testimonials from "../components/Testimonials";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaJava,
  FaGithub,
} from "react-icons/fa";
import "./Home.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS

const projects = [
  // Your existing projects array
];

const Home = () => {
  const fadeProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 800 },
  });

  return (
    <main>
      <animated.section style={fadeProps} className="hero">
        <TypingEffect text="W elcome to My Portfolio!" speed={100} />
        <p className="hero-description">
          I am a passionate developer with experience in building web
          applications. Let's explore my projects and skills!
        </p>
        <button className="cta-button">View My Work</button>

        {/* Social Media Links */}
        <div className="social-media">
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
          <a
            href="https://linkedin.com/in/username"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a
            href="https://twitter.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a
            href="https://yourportfolio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            <i className="fas fa-globe"></i> Website
          </a>
        </div>
      </animated.section>

      <animated.section style={fadeProps} className="skills-section">
        <Skills />
      </animated.section>

      <animated.section style={fadeProps} className="projects">
        <h2>My Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </animated.section>

      <Testimonials />

      <animated.section style={fadeProps} className="about-me">
        <h2>About Me</h2>
        <p>
          I am a web developer skilled in creating interactive and responsive
          applications. With a strong foundation in JavaScript, React, and CSS,
          I strive to build user-friendly experiences. When I'm not coding, you
          can find me exploring new technologies or contributing to open-source
          projects.
        </p>
      </animated.section>
      <section className="tech-stack">
        <h2>Tech Stack</h2>
        <div className="tech-icons">
          <FaReact className="tech-icon" title="React" />
          <FaJsSquare className="tech-icon" title="JavaScript" />
          <FaHtml5 className="tech-icon" title="HTML5" />
          <FaCss3Alt className="tech-icon" title="CSS3" />
          <FaNodeJs className="tech-icon" title="Node.js" />
          <FaGitAlt className="tech-icon" title="Git" />
          <FaPython className="tech-icon" title="Python" />
          <FaJava className="tech-icon" title="Java" />
          <FaGithub className="tech-icon" title="Firebase" />
          {/* Add more icons as needed */}
        </div>
      </section>
      <animated.section style={fadeProps} className="contact">
        <h2>Contact Me</h2>
        <p>If you'd like to get in touch, feel free to reach out!</p>
        <button className="cta-button">Contact Me</button>
      </animated.section>

      <footer>
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Home;
