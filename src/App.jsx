import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Project from './Project';
import Skills from './Skills'
import Resume from './assets/Marisan-Resume.pdf';
import Toggle from './Toggle';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';


const App = () => {
  const location = useLocation();

  return (
    <>



<Navbar />


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
