// Basic interactivity: nav toggle, theme toggle, set copyright year
document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  const themeToggle = document.getElementById('theme-toggle');

  if(navToggle && navLinks){
    navToggle.addEventListener('click', ()=> navLinks.classList.toggle('show'))
  }

  // Theme toggle: simple class switch, stored in localStorage
  function applyTheme(t){
    if(t === 'light'){
      document.documentElement.style.setProperty('--bg','#f7fafc');
      document.documentElement.style.setProperty('--card','#ffffff');
      document.documentElement.style.setProperty('--muted','#475569');
      document.documentElement.style.setProperty('--accent','#2563eb');
    } else {
      document.documentElement.style.removeProperty('--bg');
      document.documentElement.style.removeProperty('--card');
      document.documentElement.style.removeProperty('--muted');
      document.documentElement.style.removeProperty('--accent');
    }
  }

  if(themeToggle){
    const saved = localStorage.getItem('theme') || 'dark';
    applyTheme(saved);
    themeToggle.addEventListener('click', ()=>{
      const current = localStorage.getItem('theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', next);
      applyTheme(next);
    })
  }

  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Smooth scrolling for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = this.getAttribute('href');
      if(target.length>1){
        e.preventDefault();
        const el = document.querySelector(target);
        if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
        if(navLinks) navLinks.classList.remove('show');
      }
    })
  })
});
