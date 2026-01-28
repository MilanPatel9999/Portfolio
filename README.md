# Milan Patel — React Portfolio

A modern, responsive portfolio website built with React. Features a clean design with dark/light theme toggle, smooth scrolling, and fully functional contact form.

## Features

- ⚛️ Built with React 18
- 🎨 Modern, responsive design
- 🌓 Dark/Light theme toggle (localStorage)
- ✨ Smooth scrolling navigation
- 📱 Mobile-friendly (hamburger menu)
- 🎯 Accessible components
- 💌 Working contact form

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Open http://localhost:3000 in your browser
```

### Build

```bash
# Create optimized production build
npm run build
```

## Project Structure

```
src/
├── App.js                 # Main app component (theme logic)
├── index.js              # React entry point
├── index.css             # Global styles
└── components/
    ├── Header.js         # Navigation & mobile menu
    ├── Hero.js           # Hero section
    ├── About.js          # About & skills
    ├── Projects.js       # Projects grid
    ├── Contact.js        # Contact form
    └── Footer.js         # Footer with year
public/
└── index.html            # HTML template
```

## Customization

### Update Your Information

Edit the following files to add your own content:

- **`src/components/About.js`** — Update your bio and skills
- **`src/components/Projects.js`** — Add your real projects (title, description, links)
- **`src/components/Contact.js`** — Integrate with your email service (Formspree, EmailJS, etc.)

### Styling

All CSS is in `src/index.css`. Modify the CSS variables at the root to change colors:

```css
:root {
  --bg: #0f1720;
  --accent: #60a5fa;
  /* ... other variables */
}
```

### Theme Colors

The app supports light/dark themes. The toggle button saves preference to localStorage.

## Deployment

Deploy to services like Vercel, Netlify, or GitHub Pages:

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Drag & drop the build/ folder to Netlify
```

### GitHub Pages

Update `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio"
```

Then:
```bash
npm install --save-dev gh-pages
npm run build
npm run deploy
```

## Contact Form Integration

The contact form currently logs to console. To make it functional, integrate with:

- **Formspree** (https://formspree.io/)
- **EmailJS** (https://www.emailjs.com/)
- Your own backend API

Example with Formspree:
```javascript
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  {/* form fields */}
</form>
```

## License

MIT — Feel free to use this for your portfolio.

---

Built with ❤️ for your portfolio.