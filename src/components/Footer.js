import React from "react";
import "./Footer.css"; // Import CSS for the footer

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h3 className="footer-heading">FREEZZZ</h3>
        <p className="footer-text">
          Connecting professionals and businesses with quality freelancing
          services.
        </p>
        <div className="footer-links">
          <a href="#about" className="footer-link">
            About
          </a>
          <a href="#projects" className="footer-link">
            Projects
          </a>
          <a href="#contact" className="footer-link">
            Contact
          </a>
        </div>
        <div className="footer-socials">
          <a
            href="https://github.com/BismayDey"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon github"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon linkedin"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon twitter"
          >
            Twitter
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FREEZZZ. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
