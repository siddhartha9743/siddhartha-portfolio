import React from 'react';

const Skills = () => {
  const skills = [
    'JavaScript',
    'React',
    'Node.js',
    'HTML & CSS',
    'MongoDB',
    'SQL',
    'Git',
    'REST APIs'
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
