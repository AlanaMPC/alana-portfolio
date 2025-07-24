// pages/Skills.js
function Skills() {
  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Python", level: 85 },
    { name: "Java", level: 80 },
    { name: "C++", level: 85 },
  ];

  return (
    <section id="skills" className="card-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-name">{skill.name}</div>
            <div className="progress-bar-container">
              <div
                className="progress-bar-fill"
                style={{ width: `${skill.level}%` }}
              ></div>
              <span className="progress-percent">{skill.level}%</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
