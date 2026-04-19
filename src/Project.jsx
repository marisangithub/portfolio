import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";

const projects = [
  {
    title: "Secure File Storage on Cloud Using Hybrid Cryptography",
    icon: "📁",
    category: "Cyber Security",
    tech: ["AES", "RSA", "Cloud Storage", "Security"],
    description:
      "Developed a secure cloud file storage system using hybrid cryptography, combining AES for fast encryption and RSA for secure key sharing.",
    details:
      "This project ensures confidentiality and integrity of files stored in the cloud. AES was used to encrypt files quickly, while RSA protected the encryption key during sharing. The system supports secure uploads, downloads and file sharing without exposing sensitive data.",
  },
  {
    title: "Helmet Detection Using SSD",
    icon: "🪖",
    category: "AI / Computer Vision",
    tech: ["Python", "SSD", "OpenCV", "Machine Learning"],
    description:
      "Built a real-time helmet detection system using Single Shot Detection (SSD).",
    details:
      "The system identifies workers without helmets from CCTV footage and can automatically generate alerts. It was designed for construction and industrial environments to improve workplace safety and compliance.",
  },
  {
    title: "MITM Attack on Windows Machine",
    icon: "🩻",
    category: "Cyber Security",
    tech: ["Windows", "MITM", "Burp Suite", "Networking"],
    description:
      "Implemented Man-in-the-Middle attack scenarios during internship training.",
    details:
      "Performed packet interception, SSL stripping and traffic analysis on Windows systems to understand network vulnerabilities. This project improved my knowledge of ethical hacking, traffic monitoring and cyber security testing.",
  },
  {
    title: "Weather App Using OpenWeatherMap API",
    icon: "☀️",
    category: "Web Development",
    tech: ["React", "API", "CSS", "JavaScript"],
    description:
      "Created a weather application that displays real-time weather data.",
    details:
      "The app fetches live weather information such as temperature, humidity and weather conditions using OpenWeatherMap API. It includes search functionality, responsive design and proper error handling.",
  },
  {
    title: "CRUD User Management App",
    icon: "🗂️",
    category: "Full Stack",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    description:
      "Developed a complete CRUD application for managing user data.",
    details:
      "Users can add, view, update and delete records. The project demonstrates REST API integration, MongoDB connectivity, React state management and a clean responsive interface.",
  },
  {
    title: "Authentication Project",
    icon: "🔐",
    category: "Full Stack / Authentication",
    tech: ["React", "Node.js", "Express", "MongoDB", "OTP", "Bootstrap"],
    description:
      "Built a complete authentication system with OTP-based registration, login, forgot password and a secure dashboard.",
    details:
      "This project includes secure login, email OTP verification for registration, forgot password using OTP, password reset and a protected dashboard page. The frontend is built with React and Bootstrap, while the backend uses Node.js, Express and MongoDB Atlas. The project is fully deployed and connected with email-based authentication.",
    link: "https://authentication-frontend-three.vercel.app/",
  },
  {
    title: "Personal Portfolio Website",
    icon: "💼",
    category: "Frontend / Portfolio",
    tech: ["React", "Bootstrap", "Framer Motion"],
    description:
      "Designed and developed my personal portfolio website to showcase my skills, projects and resume.",
    details:
      "The portfolio includes responsive pages, dark mode, project showcase, downloadable resume and smooth animations.",
  },
];

const Project = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-black text-white min-vh-100 py-5">
      <div className="container">
        <div className="text-center mb-5">
          <motion.h1
            className="display-4 fw-bold text-danger"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My Projects
          </motion.h1>

          <motion.p
            className="text-light mx-auto"
            style={{ maxWidth: "700px" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            A collection of projects that showcase my skills in full stack
            development, cyber security and modern web technologies.
          </motion.p>
        </div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <motion.div
                className="project-card h-100 p-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onClick={() => setSelected(project)}
                style={{ cursor: "pointer" }}
              >
                <div className="project-icon mb-3">{project.icon}</div>

                <span className="badge bg-danger mb-3 px-3 py-2">
                  {project.category}
                </span>

                <h3 className="h5 fw-bold mb-3">{project.title}</h3>

                <p className="text-light-emphasis mb-4">
                  {project.description}
                </p>

                <div className="d-flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4 text-danger fw-semibold">
                  Click to View Details →
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="project-modal-overlay"
          onClick={() => setSelected(null)}
        >
          <motion.div
            className="project-modal"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="btn-close btn-close-white float-end"
              onClick={() => setSelected(null)}
            ></button>

            <div className="fs-1 mb-3">{selected.icon}</div>

            <h2 className="fw-bold mb-3">{selected.title}</h2>

            <span className="badge bg-danger mb-3 px-3 py-2">
              {selected.category}
            </span>

            <p className="text-light">{selected.details}</p>

            <div className="d-flex flex-wrap gap-2 mt-4">
              {selected.tech.map((tech, i) => (
                <span key={i} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            {selected.link && (
              <a
                href={selected.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-danger mt-4 px-4 py-2 fw-semibold"
              >
                View Live Project ↗
              </a>
            )}
          </motion.div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Project;