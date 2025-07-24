import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Hobbies from './pages/Hobbies';
import Contact from './pages/Contact';
import './App.css';
import './styles/style.css';
import './styles/Navbar.css'; // Custom styles for navbar

function App() {
  useEffect(() => {
    // Close nav on route change (mobile)
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        document.querySelector('.nav-links')?.classList.remove('open');
      });
    });
  }, []);

  const toggleMenu = () => {
    document.querySelector('.nav-links')?.classList.toggle('open');
  };

  return (
    <Router>
      {/* Animated Background Cubes */}
      <div className="animated-bg main-bg-cubes">
        {[...Array(25)].map((_, i) => (
          <div className="cube" key={`bg-${i}`}></div>
        ))}
      </div>

      {/* 🔗 Responsive Navbar */}
      <header className="navbar">
        <h1 className="logo">Alana Mariya P C</h1>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/education">Education</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/certifications">Certifications</Link>
          <Link to="/hobbies">Hobbies</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer>
        <p></p>
      </footer>
    </Router>
  );
}

export default App;
