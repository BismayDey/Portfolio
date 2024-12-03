// src/pages/About.js
import React from "react";
import { useSpring, animated } from "react-spring";
import profilePic from "./dp.jpg"; // Update with your image path
import "./About.css";

const About = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });
  const slideIn = useSpring({
    transform: "translateY(0)",
    from: { transform: "translateY(20px)" },
  });
  const skillsAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 400,
  });

  return (
    <animated.div style={fadeIn} className="about">
      <h2>About Me</h2>
      <animated.img
        src={profilePic}
        alt="Profile"
        className="profile-pic"
        style={slideIn}
      />
      <animated.p style={fadeIn}>
        Welcome to my portfolio! I am a passionate developer with expertise in
        creating dynamic and user-friendly web applications. My journey in
        technology began with a curiosity to understand how things work, which
        led me to pursue a career in software development.
      </animated.p>
      <animated.p style={fadeIn}>
        I enjoy working with modern frameworks and libraries such as React,
        Next.js, and CSS. My aim is to build applications that not only meet the
        user's needs but also provide a delightful experience.
      </animated.p>
      <h3>Skills & Technologies</h3>
      <animated.ul className="skills-list" style={skillsAnimation}>
        <li>JavaScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>HTML & CSS</li>
        <li>Firebase</li>
        <li>Version Control (Git)</li>
      </animated.ul>
      <h3>Contact Me</h3>
      <animated.p style={fadeIn}>
        Feel free to reach out if you would like to collaborate or discuss
        potential opportunities. You can find my contact information on the
        Contact page.
      </animated.p>
    </animated.div>
  );
};

export default About;
