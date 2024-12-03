// src/components/Skills.js
import React from "react";
import { useSpring, animated } from "react-spring";

const skills = [
  { name: "Java", level: 80 },
  { name: "JavaScript", level: 100 },
  { name: "React", level: 100 },
  { name: "CSS", level: 100 },
  { name: "Next.js", level: 80 },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill) => (
          <SkillBar key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
};

const SkillBar = ({ skill }) => {
  const { level } = skill;
  const style = useSpring({ width: `${level}%`, from: { width: "0%" } });

  return (
    <div className="skill">
      <span>{skill.name}</span>
      <div className="skill-bar">
        <animated.div className="skill-progress" style={style} />
      </div>
    </div>
  );
};

export default Skills;
