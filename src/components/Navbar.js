// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="navbar">
      <h1 className="logo">Alana Mariya P C</h1>

      <nav>
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/education" onClick={() => setIsOpen(false)}>Education</Link>
          <Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link>
          <Link to="/experience" onClick={() => setIsOpen(false)}>Experience</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/certifications" onClick={() => setIsOpen(false)}>Certifications</Link>
          <Link to="/hobbies" onClick={() => setIsOpen(false)}>Hobbies</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
