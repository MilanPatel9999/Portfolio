import React, { useEffect, useState } from 'react';

function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="site-footer">
      <div className="container">
        © {year} Milan Patel — Built with care.
      </div>
    </footer>
  );
}

export default Footer;
