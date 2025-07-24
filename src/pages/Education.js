// pages/Education.js
function Education() {
  return (
    <section className="card-section" id="education">
      <h2>Education</h2>

      <div className="education-cards-container">
        {/* College Section */}
        <h3 className="edu-section-title">College</h3>
        <div className="education-sub-card">
          <h3>🎓 Amrita Vishwa Vidyapeetham, Coimbatore</h3>
          <p><strong>Degree:</strong> B.Tech in Computer Science and Engineering</p>
          <p><strong>Duration:</strong> 2023 – 2027</p>
          
        </div>

        {/* School Section */}
        <h3 className="edu-section-title">School</h3>
        <div className="education-sub-card">
          <h3>🏫 SNDP Higher Secondary School, Kochi, Kerala</h3>
          <p><strong>12th Grade Percentage:</strong> 91%</p>
          <p><strong>10th Grade Percentage:</strong> 99%</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
