import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinux,
  FaGitAlt,
  FaRobot,
  FaCode,
} from "react-icons/fa";

import {
  SiJavascript,
  SiBootstrap,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPostman,
  SiBurpsuite,
  SiTypescript,
  SiExpo,
  SiJsonwebtokens,
  SiCloudinary,
} from "react-icons/si";

import Footer from "./Footer";


const skills = [
  {
    name: "HTML5",
    percent: 90,
    icon: <FaHtml5 className="skill-icon text-danger" />,
  },
  {
    name: "CSS3",
    percent: 85,
    icon: <FaCss3Alt className="skill-icon text-primary" />,
  },
  {
    name: "JavaScript",
    percent: 80,
    icon: <SiJavascript className="skill-icon text-warning" />,
  },
  {
    name: "TypeScript",
    percent: 70,
    icon: <SiTypescript className="skill-icon text-info" />,
  },
  {
    name: "React JS",
    percent: 85,
    icon: <FaReact className="skill-icon text-info" />,
  },
  {
    name: "React Native",
    percent: 75,
    icon: <FaReact className="skill-icon text-info" />,
  },
  {
    name: "Expo",
    percent: 75,
    icon: <SiExpo className="skill-icon text-light" />,
  },
  {
    name: "Node JS",
    percent: 80,
    icon: <FaNodeJs className="skill-icon text-success" />,
  },
  {
    name: "Express JS",
    percent: 75,
    icon: <SiExpress className="skill-icon text-light" />,
  },

  {
    name: "MongoDB",
    percent: 80,
    icon: <SiMongodb className="skill-icon text-success" />,
  },
  {
    name: "PostgreSQL",
    percent: 70,
    icon: <SiPostgresql className="skill-icon text-primary" />,
  },
  {
    name: "Bootstrap",
    percent: 85,
    icon: <SiBootstrap className="skill-icon text-purple" />,
  },
  {
    name: "Tailwind CSS",
    percent: 80,
    icon: <SiTailwindcss className="skill-icon text-info" />,
  },
  {
    name: "REST API",
    percent: 80,
    icon: <FaCode className="skill-icon text-warning" />,
  },
  {
    name: "JWT Authentication",
    percent: 75,
    icon: <SiJsonwebtokens className="skill-icon text-warning" />,
  },
  {
    name: "Cloudinary",
    percent: 70,
    icon: <SiCloudinary className="skill-icon text-info" />,
  },
  {
    name: "AI Integration",
    percent: 70,
    icon: <FaRobot className="skill-icon text-info" />,
  },
  {
    name: "GitHub",
    percent: 85,
    icon: <FaGithub className="skill-icon text-light" />,
  },
  {
    name: "Git",
    percent: 80,
    icon: <FaGitAlt className="skill-icon text-danger" />,
  },
  {
    name: "Linux",
    percent: 70,
    icon: <FaLinux className="skill-icon text-warning" />,
  },
  {
    name: "Postman",
    percent: 80,
    icon: <SiPostman className="skill-icon text-warning" />,
  },
  {
    name: "Burp Suite",
    percent: 75,
    icon: <SiBurpsuite className="skill-icon text-danger" />,
  },
];

const Skills = () => {
  return (
    <section className="skills-section py-5">
      <div className="container">
        {/* Title */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-white">
            Skill <span className="text-danger">Set</span>
          </h1>

          <p className="text-light skills-subtitle mx-auto">
            Technologies and tools I use to build responsive, scalable and
            professional full stack web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="row g-4">
          {skills.map((skill, index) => (
            <div className="col-12 col-md-6" key={index}>
              <div className="skill-card">
                {/* Icon */}
                <div className="skill-icon-wrapper">{skill.icon}</div>

                {/* Content */}
                <div className="flex-grow-1 w-100">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="text-white mb-0">{skill.name}</h5>
                    <span className="text-light fw-bold">{skill.percent}%</span>
                  </div>

                  <div className="progress skill-progress">
                    <div
                      className="progress-bar skill-progress-bar"
                      role="progressbar"
                      style={{ width: `${skill.percent}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Skills;
