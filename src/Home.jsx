import React from 'react';
import profileImage from './assets/Portfolio-Profile.png';
import Github from './assets/github.png';
import LinkedIn from './assets/linkedin.png';
import Whatsapp from './assets/whatsapp.png';
import Footer from './Footer';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <div className="page-wrapper">
      {/* Page Content */}
      <div className="page-content">
        <div className="container mt-5">
          <div className="row align-items-center">
            
            {/* LEFT COLUMN (Text) */}
            <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
              <h2 className="font-heading">
                Hello there, I am <br /> Marisan,{' '}
                <span style={{ color: 'red' }}>
                  <Typewriter
                    words={['Full Stack Developer.', 'React Specialist.']}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                    loop
                  />
                </span>
              </h2>

              {/* Social icons */}
              <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-4">
                <a href="https://github.com/marisangithub">
                  <img src={Github} alt="GitHub" className="contactlogo" />
                </a>
                <a href="https://www.linkedin.com/in/mari-san-33bb8b288">
                  <img src={LinkedIn} alt="LinkedIn" className="contactlogo" />
                </a>
                <a href="https://wa.me/+916374536684">
                  <img src={Whatsapp} alt="WhatsApp" className="contactlogo" />
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN (Profile Image) */}
            <div className="col-12 col-md-6 text-center">
              <img
                src={profileImage}
                alt="marisan"
                className="glow-border img-fluid"
                style={{
                  maxWidth: '300px',
                  height: 'auto',
                  borderRadius: '50%',
                  border: '2px solid red',
                  objectFit: 'cover',
                  objectPosition: 'top',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Footer */}
      <Footer />
    </div>
  );
};

export default Home;
