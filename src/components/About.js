import React from 'react';

function About() {
  return (
    <section id="about" className="container about">
      <h2>About Me</h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            I'm a frontend developer with a passion for crafting clean interfaces and smooth interactions. 
            I enjoy solving UI problems and turning ideas into polished products.
          </p>
        </div>
        <div className="skills">
          <h3>Skills</h3>
          <ul>
            <li>HTML & CSS (Responsive, Flexbox, Grid)</li>
            <li>JavaScript (ES6+)</li>
            <li>React & Modern frameworks</li>
            <li>Accessible, performant UI</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
