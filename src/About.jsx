import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaLinux } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiBootstrap, SiBurpsuite } from 'react-icons/si';
import Footer from './footer';

const icons = [
  { icon: <FaReact size={50} color="#61DBFB" />, name: 'React.js' },
  { icon: <FaNodeJs size={50} color="#3C873A" />, name: 'Node.js' },
  { icon: <SiExpress size={50} color="#ffffff" />, name: 'Express.js' },
  { icon: <SiMongodb size={50} color="#4DB33D" />, name: 'MongoDB' },
  { icon: <FaDatabase size={50} color="#f0db4f" />, name: 'SQL' },
  { icon: <SiTailwindcss size={50} color="#38B2AC" />, name: 'Tailwind CSS' },
  { icon: <SiBootstrap size={50} color="#563d7c" />, name: 'Bootstrap' },
  { icon: <FaGitAlt size={50} color="#F1502F" />, name: 'Git & GitHub' },
  { icon: <FaLinux size={50} color="#FCC624" />, name: 'Linux' },
  { icon: <SiBurpsuite size={50} color="#FF6F00" />, name: 'Burp Suite' },
];

const About = () => {
  const paragraphVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.5, duration: 0.6 },
    }),
  };

  const paragraphs = [
    `Hello! I’m Marisan, a passionate MERN Stack Developer with a strong foundation in building clean, scalable, and user-centered full-stack web applications. I have gained hands-on experience creating intuitive frontend interfaces with React, building efficient backend APIs using Node.js and Express, and managing data effectively with MongoDB through my academic projects and personal learning journey.`,

    `I love solving problems and continuously seek opportunities to learn and improve my skills, whether it’s deploying projects on cloud platforms or implementing best practices in clean code and responsive design. I believe in clear communication and collaboration to ensure that projects align with goals and deliver value to users.`,

    `Outside of coding, I enjoy exploring new technologies, contributing to open-source projects, and building small utility tools to automate daily tasks as I continue to grow in this field.`,
  ];
  return (
    <>
      <div className="container mt-3">
        <h2 className="text-4xl font-heading font-bold text-red-500 mb-8">About</h2>
        <div className="row">
          <div className="col">
            {paragraphs.map((text, index) => (
              <motion.p
                key={index}
                custom={index}
                variants={paragraphVariants}
                initial="hidden"
                animate="visible"
                className="fs-5 font-sans"
              >{text}</motion.p>
            ))}

          </div>
          <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
            <div className="d-grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(60px, 1fr))', maxWidth: '200px' }}>
              {icons.map((icon,index)=>(<div key={index} className='mt-0' style={{padding:'5px'}}> {icon.icon}</div>))}
            </div>
          </div>
        </div>
      </div>
<Footer/>
    </>
  )
}

export default About
