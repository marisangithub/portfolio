import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaLinux } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiBootstrap, SiBurpsuite } from 'react-icons/si';
import Footer from './Footer';

const skills = [
  { icon: <FaReact size={40} color="#61DBFB" />, name: 'React.js' },
  { icon: <FaNodeJs size={40} color="#3C873A" />, name: 'Node.js' },
  { icon: <SiExpress size={40} color="#ffffff" />, name: 'Express.js' },
  { icon: <SiMongodb size={40} color="#4DB33D" />, name: 'MongoDB' },
  { icon: <SiBootstrap size={40} color="#563d7c" />, name: 'Bootstrap' },
  { icon: <FaGitAlt size={40} color="#F1502F" />, name: 'Git & GitHub' },
  { icon: <FaLinux size={40} color="#FCC624" />, name: 'Linux' },
  { icon: <SiBurpsuite size={40} color="#FF6F00" />, name: 'Burp Suite' },
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white flex flex-col items-center justify-center p-5">
      <h2 className="text-4xl font-heading font-bold text-red-500 mb-8">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-[#2a2a2a] rounded-2xl p-4 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-red-500/50"
          >
            {skill.icon}
            <p className="mt-2 font-sans text-center text-lg font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  
  );
};

export default Skills;
