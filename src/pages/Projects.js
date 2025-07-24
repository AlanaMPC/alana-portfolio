// pages/Projects.js
function Projects() {
  return (
    <section id="projects" className="card-section">
      <h2>Projects</h2>

      {/* Project 1: Breast Cancer */}
      <div className="project-card">
        <h3>Breast Cancer Analysis using Machine Learning</h3>
        <p>Currently working on a project using ML models like UNet, IMED-SAM, MobileNet, DDPM, and the CUTS algorithm.</p>
      </div>

      {/* Project 2: Get Fit Website */}
      <div className="project-card">
        <h3>Get Fit – Fitness Website (UI Project)</h3>
        <p>A sleek and interactive fitness website designed using modern UI/UX principles for smooth user engagement and functionality.</p>
        <a
          href="https://anupama0307.github.io/GETFIT/" // Replace with your actual link if different
          className="project-btn"
          target="_blank"
          rel="noreferrer"
        >
          Visit Website
        </a>
      </div>

      {/* Project 3: DAA - Robot Movement */}
      <div className="project-card">
        <h3>Efficient Task Robot Movement – DAA Project</h3>
        <p>Used DAA algorithms to optimize the movement of robots in a 3D space cube, similar to ACM ICPC problems. It includes time-efficient path selection.</p>
        <a
          href="/documents/DAA case study.pdf" // Place this file in your public/documents folder
          className="project-btn"
          download
        >
          Learn More
        </a>
      </div>

      {/* Project 4: DSA - Builder Bots */}
      <div className="project-card">
        <h3>Builder Bots – DSA Project</h3>
        <p>Created a robot model that chooses optimal paths using DSA techniques. When obstacles are encountered, it reroutes using data structures for dynamic path selection.</p>
      </div>
    </section>
  );
}

export default Projects;
