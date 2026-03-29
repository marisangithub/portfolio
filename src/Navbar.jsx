import { useState } from 'react';
import Resume from './assets/Marisan-Resume.pdf';

import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div
      className="navbar-container"
      style={{
        backgroundColor: '#1e1e1e',
        borderBottom: '2px solid gray',
      }}
    >
      {/* Top Bar */}
      <div className="d-flex justify-content-between align-items-center p-2">
        <Link
          to="/"
          className="fw-bold text-white text-decoration-none"
          style={{ fontSize: '20px' }}
        >
          Marisan
        </Link>

        {/* Hamburger only on mobile */}
        <button
          className="btn text-white d-md-none"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ fontSize: '26px', border: 'none' }}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="d-none d-md-flex align-items-center flex-wrap">
          <Link
            to="/"
            className={`m-2 text-white text-decoration-none px-2 py-1 rounded ${
              location.pathname === '/' ? 'active-link' : ''
            }`}
          >
            Home
          </Link>

          <Link
            to="/project"
            className={`m-2 text-white text-decoration-none px-2 py-1 rounded ${
              location.pathname === '/project' ? 'active-link' : ''
            }`}
          >
            Projects
          </Link>

          <Link
            to="/about"
            className={`m-2 text-white text-decoration-none px-2 py-1 rounded ${
              location.pathname === '/about' ? 'active-link' : ''
            }`}
          >
            About
          </Link>

          <Link
            to="/skills"
            className={`m-2 text-white text-decoration-none px-2 py-1 rounded ${
              location.pathname === '/skills' ? 'active-link' : ''
            }`}
          >
            Skills
          </Link>

          <div className="dropdown m-2">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
            >
              Contact Me
            </button>

            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="tel:+916383113579">
                  +91 6383113579
                </a>
                </li>
                <li>
                <a className="dropdown-item" href="tel:+916374536684">
                  +91 6374536684
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="mailto:marisan200320@gmail.com"
                >
                  marisan200320@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <a
            href={Resume}
            download="Marisan-Resume.pdf"
            className="btn btn-outline-danger m-2"
          >
            Download Resume
          </a>

     
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="d-flex d-md-none flex-column px-3 pb-3">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className={`mobile-link ${
              location.pathname === '/' ? 'active-link' : ''
            }`}
          >
            Home
          </Link>

          <Link
            to="/project"
            onClick={() => setMenuOpen(false)}
            className={`mobile-link ${
              location.pathname === '/project' ? 'active-link' : ''
            }`}
          >
            Projects
          </Link>

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className={`mobile-link ${
              location.pathname === '/about' ? 'active-link' : ''
            }`}
          >
            About
          </Link>

          <Link
            to="/skills"
            onClick={() => setMenuOpen(false)}
            className={`mobile-link ${
              location.pathname === '/skills' ? 'active-link' : ''
            }`}
          >
            Skills
          </Link>

          <a href="tel:+916383113579" className="mobile-link">
            Contact: +91 6383113579
          </a>
        <a href="tel:+916374536684" className="mobile-link">
            Contact: +91 6374536684
          </a>
          <div className="mt-3">
                     <a
            href={Resume}
            download="Marisan-Resume.pdf"
            className="btn btn-outline-danger m-2"
          >
            Download Resume
          </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;