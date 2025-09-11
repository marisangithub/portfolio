import React from 'react';
import profileImage from './assets/Portfolio-Profile.png';
import Github from './assets/github.png';
import LinkedIn from './assets/linkedin.png';
import Whatsapp from './assets/whatsapp.png';
import { Typewriter } from 'react-simple-typewriter';



const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <div className="text align-items-center justify-content-end " >
              <h2 className='font-heading'>Hello there, I am <br />  Marisan, {''} <span style={{ color: 'red' }}>
                <Typewriter words={[ 'Full Stack Developer.', 'React Specialist.']} cursor cursorStyle='|' typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500} loop /></span></h2>
                  <div className='inlineflex'>
                <a href="https://github.com/marisangithub">
                  <img 
                  src={Github} 
                  alt="" 
                  className='contactlogo mt-5'
                  />
                </a>
                <a href="https://www.linkedin.com/in/mari-san-33bb8b288">
                  <img 
                  src={LinkedIn} 
                  alt="" 
                  className='contactlogo mt-5'
                  />
                </a>
                <a href="https://wa.me/+916374536684">
                  <img 
                  src={Whatsapp} 
                  alt="" 
                  className='contactlogo mt-5'
                  />
                </a>
                  </div>
            </div>
          </div>

          <div className="col">
            <div className="container d-flex justify-content-end align-item-center">
              <div className="text-end">
                <img
                  src={profileImage}
                  alt="marisan"
                  className='glow-border img-fluid'
                  style={{
                    width: '300px',
                    height: '300px',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    borderRadius:'50%',
                    border:'2px solid red'
                  }}
                />


              </div>
            </div>
          </div>
        </div>
      </div>

<div className="footer-home">
          <footer className="text-gray-400 text-center p-4 border-t border-gray-700">
    © 2025 Marisan. All rights reserved.
  </footer>
</div>
    </>
  )
}

export default Home;
