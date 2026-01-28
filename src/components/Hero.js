import React from 'react';

function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <h1>
          Hi, I'm <span className="accent">Milan Patel</span>
        </h1>
        <p className="lead">
          I build modern, responsive websites and web apps — focusing on accessible, performant user experiences.
        </p>
        <div className="hero-ctas">
          <button 
            className="btn primary" 
            onClick={() => scrollToSection('projects')}
          >
            View Projects
          </button>
          <button 
            className="btn ghost" 
            onClick={() => scrollToSection('contact')}
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
