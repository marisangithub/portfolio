
const portfolioData = {
  name: "Marisan",

  role: "Full Stack Developer",

  experience:
    "I have over 1 year of hands-on experience in Full Stack Development, building responsive web applications, REST APIs, authentication systems and database-driven applications.",

  about: `
I am a Full Stack Developer with 1+ year of hands-on experience developing responsive and user-friendly web applications using React.js, Node.js, Express.js, MongoDB and PostgreSQL.

I have experience building full-stack applications, RESTful APIs, authentication systems, AI-powered applications, cloud integrations and mobile applications using React Native and Expo.

I enjoy solving real-world problems through technology, learning new tools and developing practical software solutions.
`,

  skills: {
    frontend: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "React Native",
      "TypeScript",
      "Bootstrap",
      "Tailwind CSS",
      "Vite",
      "Responsive Web Design",
      "React Hooks",
      "Framer Motion"
    ],

    backend: [
      "Node.js",
      "Express.js",
      "REST API Development",
      "JWT Authentication",
      "CRUD Operations",
      "OTP Authentication",
      "Nodemailer",
      "Brevo API",
      "Cloudinary Integration"
    ],

    database: [
      "MongoDB",
      "MongoDB Atlas",
      "PostgreSQL",
      "Neon DB"
    ],

    ai: [
      "Google Gemini AI",
      "Groq AI",
      "AI Integration",
      "Resume Analysis",
      "ATS Score Analysis"
    ],

    mobile: [
      "React Native",
      "Expo SDK",
      "Expo Router",
      "Expo Notifications",
      "Expo Secure Store",
      "EAS Build",
      "Firebase Android Configuration"
    ],

    tools: [
      "Git",
      "GitHub",
      "Postman",
      "Linux",
      "Vercel",
      "Render",
      "Cloudinary",
      "Brevo",
      "Burp Suite",
      "Expo",
      "Firebase",
      "Web Push",
      "VAPID"
    ]
  },

  projects: [

    // 1. JobGenie AI
    {
      name: "JobGenie AI",
   aliases: [
      "JobGenie",
      "JobGenie AI",
      "Resume Builder",
      "ATS Analyzer",
      "AI Resume Analyzer"
    ],

      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Neon DB",
        "Groq AI",
        "Gemini AI",
        "JWT",
        "Nodemailer",
        "Bootstrap",
        "Vercel",
        "Render"
      ],

      description:
        "An AI-powered career assistant platform featuring Resume Builder, ATS Resume Analyzer and Job Matching with Email OTP Authentication.",

      details: `
JobGenie AI is a complete AI-powered career assistant platform designed to help job seekers improve their resumes and discover relevant career opportunities.

RESUME BUILDER:
Developed functionality to create and manage professional resumes.

ATS RESUME ANALYZER:
Integrated AI-powered resume analysis to evaluate ATS compatibility and provide improvement suggestions.

AI INTEGRATION:
Integrated Groq AI and Google Gemini AI for intelligent resume analysis and AI-generated suggestions.

AUTHENTICATION:
Implemented secure JWT authentication and email OTP verification using Nodemailer.

DATABASE:
Integrated PostgreSQL with Neon DB for storing user accounts, resume information and analysis history.

USER INTERFACE:
Developed a responsive modern interface using React.js and Bootstrap.

DEPLOYMENT:
Deployed the frontend using Vercel and backend using Render.

The platform provides resume management, resume history, AI-powered suggestions and career assistance features.
`,

      link: "https://job-gine-frontend.vercel.app/"
    },

    // 2. Savel Cart
    {
      name: "Savel Cart - Web & Mobile Marketplace",
      aliases: [
      "Savel Cart",
      "Savel",
      "Savel Selling",
      "Savel Marketplace",
      "Rooster Marketplace"
    ],
      tech: [
        "React.js",
        "Vite",
        "Tailwind CSS",
        "React Native",
        "Expo SDK 58",
        "Expo Router",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB Atlas",
        "JWT",
        "Cloudinary",
        "Brevo API",
        "Firebase",
        "Expo Notifications",
        "Web Push",
        "VAPID",
        "Expo Secure Store",
        "EAS Build"
      ],

      description:
        "A multilingual full-stack web and native Android marketplace for buying and selling native Tamil Nadu roosters, hens and chicks.",

      details: `
Savel Cart is a full-stack web and mobile marketplace developed to digitize traditional poultry trading in Tamil Nadu.

PROJECT OVERVIEW:
The platform provides a digital marketplace where buyers and sellers can discover, list and explore native birds through web and mobile applications.

WEB APPLICATION:
Developed a responsive web application using React.js, Vite and Tailwind CSS.

Implemented bird categories including Rooster, Hen and Chicks, along with bird listing details and user-friendly navigation.

MOBILE APPLICATION:
Developed an Android application using React Native and Expo SDK 58.

Used Expo Router for navigation, TypeScript for type safety, Expo Secure Store for secure local storage and EAS for application builds.

BACKEND DEVELOPMENT:
Built RESTful APIs using Node.js and Express.js.

Integrated MongoDB Atlas for database management and JWT-based authentication for secure user access.

CLOUD INTEGRATIONS:
Integrated Cloudinary for cloud-based image uploads and storage.

Integrated Brevo API for email communication.

NOTIFICATION SYSTEM:
Configured Web Push notification infrastructure using VAPID.

Implemented mobile notification workflows using Expo Notifications and Expo Push Token registration.

Configured Firebase Android project integration. Full FCM delivery credentials require verification.

MULTILINGUAL SUPPORT:
Implemented English, Tamil and Thanglish language support.

BIRD LISTING:
Supports bird details such as breed, age, price, description, district, location and photos.

The project aims to provide an accessible digital marketplace for Tamil Nadu's traditional poultry trading community.
`,

      link: "https://savelcart-fawn.vercel.app/"
    },

    // 3. Secure File Storage
    {
      name: "Secure File Storage on Cloud Using Hybrid Cryptography",
       aliases: [
      "Secure File Storage",
      "File Storage",
      "Hybrid Cryptography",
      "Cloud File Storage",
      "AES RSA Project"
    ],

      tech: [
        "AES",
        "RSA",
        "Cloud Storage",
        "Hybrid Cryptography",
        "File Encryption",
        "Cyber Security"
      ],

      description:
        "Developed a secure cloud file storage system using AES and RSA hybrid cryptography for file encryption and secure key sharing.",

      details: `
This project focuses on providing secure cloud-based file storage using hybrid cryptography.

AES ENCRYPTION:
Used Advanced Encryption Standard (AES) for efficient file encryption and decryption.

RSA ENCRYPTION:
Used RSA public-key cryptography to securely protect and share AES encryption keys.

HYBRID CRYPTOGRAPHY:
Combined symmetric and asymmetric encryption to improve security and performance.

FILE MANAGEMENT:
Designed secure file upload, download and sharing workflows.

SECURITY OBJECTIVE:
The system aims to maintain confidentiality and protect sensitive files stored in cloud environments.
`
    },

    // 4. Helmet Detection
    {
      name: "Helmet Detection Using SSD",

       aliases: [
      "Helmet Detection",
      "SSD",
      "Helmet Detection Project",
      "Safety Helmet Detection"
    ],

      tech: [
        "Python",
        "Single Shot Detection",
        "OpenCV",
        "Machine Learning",
        "Computer Vision"
      ],

      description:
        "Built a computer vision-based helmet detection system using Single Shot Detection to identify workers without helmets.",

      details: `
This project uses computer vision and machine learning techniques to detect whether workers are wearing safety helmets.

OBJECT DETECTION:
Implemented Single Shot Detection (SSD) for object detection.

IMAGE PROCESSING:
Used OpenCV for image and video processing.

SAFETY MONITORING:
Designed to identify workers without helmets from CCTV footage.

APPLICATION:
The system demonstrates how computer vision can support workplace safety monitoring in construction and industrial environments.
`
    },

    // 5. MITM Attack
    {
      name: "MITM Attack on Windows Machine",
       aliases: [
      "MITM",
      "MITM Attack",
      "Man in the Middle",
      "Windows MITM",
      "Cyber Security Project"
    ],
      tech: [
        "Windows",
        "Man-in-the-Middle",
        "Burp Suite",
        "Networking",
        "Traffic Analysis",
        "Cyber Security"
      ],

      description:
        "Performed controlled Man-in-the-Middle attack scenarios to understand network vulnerabilities, packet interception and traffic analysis.",

      details: `
This cybersecurity project focused on understanding Man-in-the-Middle attacks and network communication vulnerabilities in a controlled testing environment.

TRAFFIC INTERCEPTION:
Studied packet interception and network communication.

SSL STRIPPING:
Explored SSL stripping concepts and their security implications.

BURP SUITE:
Used Burp Suite for HTTP traffic inspection and security testing.

NETWORK ANALYSIS:
Analyzed network traffic to understand potential vulnerabilities.

The project improved practical understanding of ethical hacking, web security and network security concepts.
`
    },

    // 6. Weather App
    {
      name: "Weather App Using OpenWeatherMap API",
       aliases: [
      "Weather App",
      "Weather Application",
      "OpenWeatherMap",
      "Weather API Project"
    ],
      tech: [
        "React.js",
        "JavaScript",
        "OpenWeatherMap API",
        "CSS",
        "REST API"
      ],

      description:
        "Developed a responsive weather application that fetches real-time weather information using the OpenWeatherMap API.",

      details: `
Developed a weather application that allows users to search for cities and view their current weather conditions.

API INTEGRATION:
Integrated OpenWeatherMap API to retrieve real-time weather information.

WEATHER INFORMATION:
Displays temperature, humidity and weather conditions.

SEARCH FUNCTIONALITY:
Allows users to search for weather information by city.

ERROR HANDLING:
Implemented API error handling for invalid city names and unsuccessful requests.

USER INTERFACE:
Created a responsive interface using React.js and CSS.
`
    },

    // 7. CRUD Application
    {
      name: "MERN CRUD User Management Application",
      aliases: [
      "CRUD",
      "MERN CRUD",
      "CRUD Application",
      "User Management",
      "User Management App"
    ],
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST API",
        "Bootstrap"
      ],

      description:
        "Developed a full-stack CRUD application for managing user records with create, read, update and delete operations.",

      details: `
This project demonstrates full-stack application development using the MERN stack.

FRONTEND:
Developed the user interface using React.js.

BACKEND:
Created RESTful APIs using Node.js and Express.js.

DATABASE:
Integrated MongoDB for storing and managing user information.

CRUD OPERATIONS:
Implemented Create, Read, Update and Delete operations.

API INTEGRATION:
Connected the React frontend with backend APIs.

The application demonstrates database integration, React state management and full-stack development fundamentals.
`
    },

    // 8. Authentication Project
    {
      name: "Full Stack Authentication System",
      aliases: [
      "Authentication",
      "Authentication Project",
      "Auth System",
      "Login System",
      "OTP Authentication"
    ],

      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB Atlas",
        "JWT",
        "Email OTP",
        "Nodemailer",
        "Bootstrap"
      ],

      description:
        "Developed a secure authentication application with OTP-based registration, login, forgot password and protected dashboard functionality.",

      details: `
This project implements a complete authentication system using React.js, Node.js, Express.js and MongoDB Atlas.

USER REGISTRATION:
Implemented registration with email OTP verification.

LOGIN SYSTEM:
Developed secure user login functionality.

FORGOT PASSWORD:
Implemented password recovery using email OTP verification.

PASSWORD RESET:
Added password reset functionality.

JWT AUTHENTICATION:
Used JWT for authentication and protected dashboard access.

EMAIL INTEGRATION:
Integrated email-based OTP verification.

FRONTEND:
Developed the user interface using React.js and Bootstrap.

BACKEND:
Built authentication APIs using Node.js and Express.js with MongoDB Atlas.

The application demonstrates secure authentication workflows and frontend-backend integration.
`,

      link: "https://authentication-frontend-three.vercel.app/"
    },

    // 9. Personal Portfolio
    {
      name: "Personal Portfolio Website",
       aliases: [
      "Portfolio",
      "Personal Portfolio",
      "Portfolio Website",
      "My Website",
      "Digital Mari"
    ],

      tech: [
        "React.js",
        "JavaScript",
        "Bootstrap",
        "Tailwind CSS",
        "Framer Motion",
        "React Icons",
        "Vercel"
      ],

      description:
        "Designed and developed a responsive personal portfolio website showcasing technical skills, projects, experience, resume and contact information.",

      details: `
This portfolio website represents my professional profile as a Full Stack Developer.

RESPONSIVE DESIGN:
Created a responsive interface for desktop, tablet and mobile devices.

PROJECT SHOWCASE:
Implemented an interactive project section with detailed project descriptions.

DIGITAL MARI ASSISTANT:
Developed a rule-based portfolio chatbot that answers questions about my skills, experience, education and projects.

PROJECT EXPLORATION:
The assistant can list project names and technologies, and provide detailed information when visitors enter a project name.

ANIMATIONS:
Integrated Framer Motion for smooth animations and interactive UI elements.

RESUME:
Added resume access and professional information.

DEPLOYMENT:
Configured the website for deployment using Vercel.
`
    }

  ],

  education: {
    degree: "Bachelor of Engineering",
    branch: "Computer Science and Engineering",
    college: "Shanmuganathan Engineering College",
    year: "2024"
  },

  certifications: [
    "MERN Stack Development Course - Simpler Academy",
    "Cyber Security Internship Certificate - Corizo",
    "Cyber Security Internship Certificate - Acmegrade"
  ],

  strengths: [
    "Problem Solving",
    "Quick Learner",
    "Team Collaboration",
    "Adaptability",
    "Self Motivated"
  ],

  languages: [
    "Tamil",
    "English"
  ],

  contact: {
    email: "marisan200320@gmail.com",
    phone: "6374536684",
    github: "https://github.com/marisangithub",
    linkedin: "https://linkedin.com/in/mari-san-33bb8b288"
  }
};

export default portfolioData;
