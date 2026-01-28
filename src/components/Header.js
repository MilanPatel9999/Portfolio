import React, { useState } from 'react';

function Header({ onThemeToggle }) {
  const [navOpen, setNavOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setNavOpen(false);
    }
  };

  return (
    <header className="site-header">
      <nav className="nav container">
        <a className="logo" href="#home">
          Milan<span>Patel</span>
        </a>
        <button 
          id="nav-toggle" 
          className="nav-toggle"
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
        <ul className={`nav-links ${navOpen ? 'show' : ''}`} id="nav-links">
          <li><a onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a onClick={() => scrollToSection('about')}>About</a></li>
          <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
          <li><button className="btn small" onClick={onThemeToggle}>Toggle Theme</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
