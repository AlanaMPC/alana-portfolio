// pages/Experience.js
function Experience() {
  return (
    <section className="card-section" id="experience">
      <h2>Experience</h2>

      {/* Noctil Internship Card */}
      <div className="experience-card">
        <h3>Research & Development Intern — Noctil, Kochi</h3>
        <p><strong>Duration:</strong> 28/04/2025 - 18/06/2025</p>
        <ul>
          <li>Learning and configuring Apache NiFi for scalable data flow architecture</li>
          <li>Handling API calls and processing large datasets</li>
          <li>Backend modifications and integrating with MongoDB</li>
        </ul>
        <a
          href="/certificates/noctil-certificate.pdf"
          download
          className="certificate-btn"
        >
          Download Certificate
        </a>
      </div>

      {/* Launched Global (Deevelox) Internship Card */}
      <div className="experience-card">
        <h3>AI Intern — Launched Global (Deevelox)</h3>
        <p><strong>Duration:</strong> 01/05/2025 - 30/06/2025</p>
        <ul>
          <li>Completed an AI specialization course</li>
          <li>Built a final project: <strong>AI Excuse Chat Generator</strong></li>
        </ul>
        <a
          href="/certificates/launchedglobal-certificate.pdf"
          download
          className="certificate-btn"
        >
          Download Certificate
        </a>
      </div>
    </section>
  );
}

export default Experience;
