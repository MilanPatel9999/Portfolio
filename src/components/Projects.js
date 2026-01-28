import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'Responsive landing page with animations and accessible components.',
      link: '#'
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'Single-page app demonstrating state management and API integration.',
      link: '#'
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'Design-to-code implementation with pixel-perfect layout and tests.',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="container projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <article key={project.id} className="card">
            <div className="card-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a className="btn small" href={project.link}>See project</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
