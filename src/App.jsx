import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Project from './Project';
import Skills from './Skills'
import Resume from './assets/Marisan-Resume.pdf';
import Toggle from './Toggle';
import { useLocation } from 'react-router-dom';


const App = () => {
  const location = useLocation();

  return (
    <>
      <div
        className="d-flex flex-wrap justify-content-between align-items-center p-2"
        style={{ backgroundColor: '#1e1e1e', borderBottom: '2px solid gray' }}
      >
        {/* LEFT LINKS */}
        <div className="d-flex flex-wrap align-items-center">
          <Link
  to="/"
  className={`m-2 text-white text-decoration-none px-2 py-1 rounded ${location.pathname === '/' ? 'active-link' : ''}`}
>
  Home
</Link>
<Link
  to="/project"
  className={`m-2 text-white text-decoration-none px-2 py-1 rounded ${location.pathname === '/project' ? 'active-link' : ''}`}
>
  Projects
</Link>
<Link
  to="/about"
  className={`m-2 text-white text-decoration-none px-2 py-1 rounded ${location.pathname === '/about' ? 'active-link' : ''}`}
>
  About
</Link>

<Link
  to="/skills"
  className={`m-2 text-white text-decoration-none px-2 py-1 rounded ${location.pathname === '/skills' ? 'active-link' : ''}`}
>
  Skills
</Link>

          <div className="dropdown m-2">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Contact Me
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="tel:+916383113579">+91 6383113579</a></li>
              <li><a className="dropdown-item" href="mailto:marisan200320@gmail.com">marisan200320@gmail.com</a></li>
            </ul>
          </div>
   

          <a
            href={Resume}
            download="Marisan-Resume.pdf"
            className="btn btn-outline-danger m-2"
          >
            Download Resume
          </a>
          <Toggle/>
        </div>

        {/* RIGHT NAME - shown on md+ */}
        <Link
          to="/"
          className="fw-bold text-white text-decoration-none d-none d-md-block"
          style={{ fontSize: '20px', margin: '0 8px' }}
        >
          Marisan
        </Link>


      </div>






      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
        <Route path='/skills' element={<Skills />} />
        
      </Routes>


    </>
  );
}

export default App;
