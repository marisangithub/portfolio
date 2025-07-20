import React from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';

const Project = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
  };

  const projects = [
    {
      title: '📁 Mini Project: Secure File Storage on Cloud Using Hybrid Cryptography',
      description:
        'Developed a secure cloud file storage system using hybrid cryptography, combining AES for fast file encryption and RSA for secure key sharing. This ensured confidentiality and integrity of data on cloud storage while allowing efficient file sharing without exposing encryption keys.',
    },
    {
      title: '🪖 Major Project: Helmet Detection Using SSD',
      description:
        'Built a helmet detection system using Single Shot Object Detection (SSD) to enhance safety compliance in construction and industrial sites. The system detects workers without helmets in real-time from CCTV footage, enabling automated alerts to prevent workplace hazards.',
    },
    {
      title: '🩻 Internship Project: MITM Attack on Windows Machine',
      description:
        'During my internship at Acmegrade Academy, implemented Man-in-the-Middle (MITM) attack scenarios on Windows machines to understand network vulnerabilities and security testing. Gained practical exposure to packet interception, SSL stripping, and traffic analysis, strengthening my cybersecurity skills.',
    },
    {
      title: '☀️ Weather App Using OpenWeatherMap API',
      description:
        'Built a weather application using OpenWeatherMap API to fetch and display real-time weather data for user-specified locations. Integrated API handling, error management, and clean UI to display temperature, humidity, and weather conditions dynamically, enhancing API and React skills.',
      link: 'https://shimmering-travesseiro-ad39fe.netlify.app/',
    },
    {
  title: '🗂️ CRUD User Management App',
  description:
    'Developed a CRUD (Create, Read, Update, Delete) application for managing user data with React, Node.js, Express, and MongoDB. The app allows adding, viewing, editing, and deleting user records with a clean UI, demonstrating RESTful API integration, state management using React hooks, and database connectivity for persistent storage.',
  link: 'https://crud-frontend-xi-one.vercel.app/'
},

  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-heading font-bold text-red-500 mb-8 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#2a2a2a] rounded-2xl p-5 hover:scale-[1.02] transition-transform duration-300 shadow-lg hover:shadow-red-500/40"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <h3 className="text-xl font-heading font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-sans mt-3 text-red-400 hover:text-red-500 underline"
              >
                View Project
              </a>
            )}
          </motion.div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Project;
