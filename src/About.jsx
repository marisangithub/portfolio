import React from "react";
import profileImage from "./assets/Hero.png";


const About = () => {
  return (
    <section className="about-section py-5">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-white">
            About <span className="text-danger">Me</span>
          </h1>

          <p className="text-light mx-auto about-subtitle">
            Get to know more about who I am, what I do, and the technologies I
            use to build modern web applications.
          </p>
        </div>

        <div className="row align-items-center g-5">
          {/* Image Section */}
          <div className="col-lg-5 text-center">
            <div className="about-img-wrapper position-relative mx-auto">
              <div className="about-glow"></div>

              <img
                src={profileImage}
                alt="Marisan"
                className="img-fluid about-img"
              />

              <div className="experience-badge">
                <small className="text-light d-block">Specialized In</small>
                <strong className="text-danger">MERN Developer</strong>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="col-lg-7">
            <h2 className="fw-bold text-white mb-4 about-title">
              Passionate Full Stack Developer Creating
              <span className="text-danger"> Modern Web Experiences</span>
            </h2>

            <p className="text-light about-text">
              I’m Marisan, a Full Stack Developer with a strong interest in
              building modern, responsive and user-friendly web applications. I
              specialize in React.js, Node.js, Express.js and MongoDB, and I
              enjoy transforming ideas into real-world digital experiences.
            </p>

            <p className="text-light about-text">
              Along with web development, I also have knowledge in cyber
              security tools and Linux environments. I enjoy learning new
              technologies, solving problems and continuously improving my
              skills to become a better developer every day.
            </p>

            {/* Cards */}
            <div className="row g-3 mt-4">
              <div className="col-6">
                <div className="about-card h-100">
                  <h3 className="text-danger fw-bold">1+</h3>
                  <p className="mb-0 text-light">Years Learning & Building</p>
                </div>
              </div>

              <div className="col-6">
                <div className="about-card h-100">
                  <h3 className="text-danger fw-bold">10+</h3>
                  <p className="mb-0 text-light">Projects & Practice Works</p>
                </div>
              </div>

              <div className="col-6">
                <div className="about-card h-100">
                  <h3 className="text-danger fw-bold">MERN</h3>
                  <p className="mb-0 text-light">Frontend & Backend Specialist</p>
                </div>
              </div>

              <div className="col-6">
                <div className="about-card h-100">
                  <h3 className="text-danger fw-bold">24/7</h3>
                  <p className="mb-0 text-light">Passionate About Learning</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-4 d-flex flex-wrap gap-3">
              <a
                href="/Marisan-Resume.pdf"
                download
                className="btn btn-danger px-4 py-2 fw-semibold"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default About;