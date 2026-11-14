
import portfolioData from "./portfolioData";
import { IoSend } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";

function PortfolioAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [input, setInput] = useState("");

  const messagesEndRef = useRef(null);


  const closeChat = () => {
  window.speechSynthesis.cancel();
  setIsOpen(false);
};

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: `Hi 👋

I'm Digital Mari.

Ask me about my skills, projects, experience, education, certifications, or contact information.

You can also ask me about any of my projects by entering its name!`
    }
  ]);

  // Auto Scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [messages, isTyping]);

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);
// Clean text before speaking
const cleanTextForSpeech = (text) => {
  return text
    .replace(/https?:\/\/\S+/gi, "")
    .replace(/\p{Extended_Pictographic}/gu, "")
    .replace(/[-_*=]{2,}/g, " ")
    .replace(/[•●▪►▶]/g, " ")
    .replace(/[`*_#]/g, "")
    .replace(/[|<>]/g, " ")
    .replace(/:/g, ". ")
    .replace(/[ \t]+/g, " ")
    .replace(/\n+/g, ". ")
    .replace(/\.{2,}/g, ".")
    .trim();
};

const speak = (text) => {
  if (!("speechSynthesis" in window)) return;

  const cleanText = cleanTextForSpeech(text);
  if (!cleanText) return;

  const speech = new SpeechSynthesisUtterance(cleanText);

  speech.rate = 0.95;
  speech.pitch = 1;
  speech.volume = 1;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(speech);
};
  // Get Answer
  
const getAnswer = (question) => {
  const q = question.toLowerCase().trim();

  // About Me
  if (
    q.includes("about") ||
    q.includes("yourself") ||
    q.includes("who are you")
  ) {
    return portfolioData.about;
  }

  // Experience
  if (
    q.includes("experience") ||
    q.includes("work experience")
  ) {
    return portfolioData.experience;
  }

  // Skills
  if (
    q.includes("skill") ||
    q.includes("technology") ||
    q.includes("tech stack")
  ) {
    return `MY TECHNICAL SKILLS

Frontend:
${portfolioData.skills.frontend.join(", ")}

Backend:
${portfolioData.skills.backend.join(", ")}

Database:
${portfolioData.skills.database.join(", ")}

AI:
${portfolioData.skills.ai?.join(", ") || "Not specified"}

Mobile:
${portfolioData.skills.mobile?.join(", ") || "Not specified"}

Tools:
${portfolioData.skills.tools?.join(", ") || "Not specified"}`;
  }

  // =====================================
  // PROJECT NAME DETECTION
  // =====================================

  const matchedProject = portfolioData.projects.find((p) => {
    const fullName = p.name.toLowerCase().trim();

    // Handle names like "Savel Cart - Web & Mobile Marketplace"
    const shortName = fullName.split(" - ")[0].trim();

    const aliases = (p.aliases || []).map((a) =>
      a.toLowerCase().trim()
    );

    const namesToMatch = [
      fullName,
      shortName,
      ...aliases
    ];

    return namesToMatch.some((name) => {
      return (
        q === name ||
        q.includes(name)
      );
    });
  });

  // Show detailed project explanation
  if (matchedProject) {
    const tech =
      matchedProject.technologies ||
      matchedProject.tech ||
      [];

    return `🚀 ${matchedProject.name}

${matchedProject.description}

--------------------------------

PROJECT DETAILS:

${matchedProject.details || "Project details are not available."}

--------------------------------

TECHNOLOGIES USED:

${tech.join(", ")}

--------------------------------

${
  matchedProject.link
    ? `LIVE PROJECT:
${matchedProject.link}`
    : "Live demo is not available."
}

--------------------------------

Would you like to explore another project?

Just enter another project name! 😊`;
  }

  // =====================================
  // SHOW PROJECT LIST ONLY
  // =====================================

  if (
    q === "project" ||
    q === "projects" ||
    q.includes("what projects") ||
    q.includes("list projects") ||
    q.includes("project list") ||
    q.includes("your projects") ||
    q.includes("built projects") ||
    q.includes("show projects") ||
    q.includes("all projects")
  ) {
    return `🚀 HERE ARE MY PROJECTS:

${portfolioData.projects
  .map((p, index) => {
    const tech = p.technologies || p.tech || [];

    return `${index + 1}. ${p.name}
Technologies: ${tech.join(", ")}`;
  })
  .join("\n\n")}

--------------------------------

💡 WANT TO KNOW MORE?

Just enter any project name, and I'll explain its features, technologies, architecture and implementation in detail!

For example:
• Savel Cart
• JobGenie AI
• Authentication System
• Weather App`;
  }

  // =====================================
  // MOBILE APPLICATION
  // =====================================

  if (
    q.includes("mobile app") ||
    q.includes("android app") ||
    q.includes("react native")
  ) {
    return `MOBILE APPLICATION DEVELOPMENT

I developed the Savel Cart Android application using React Native and Expo SDK 58.

Technologies:

• React Native
• Expo SDK 58
• Expo Router
• TypeScript
• Expo Secure Store
• Expo Notifications
• Expo Push Tokens
• EAS Build

Firebase Android project configuration was also integrated.

The mobile application communicates with the backend APIs for marketplace functionality.`;
  }

  // Firebase
  if (q.includes("firebase")) {
    return `FIREBASE INTEGRATION

I configured a Firebase project for the Savel Cart Android application.

• Firebase project: savelselling.
• Android package: com.marisan.SavelSellingApp.
• Google Services configuration.
• Firebase Android integration.

FCM credentials were not fully configured during previous testing, so complete Firebase push delivery is not claimed.`;
  }

  // Expo
  if (q.includes("expo")) {
    return `EXPO INTEGRATION

I used Expo SDK 58 with React Native to develop the Savel Cart Android application.

• Expo Router for navigation.
• Expo Secure Store for secure local storage.
• Expo Notifications for notification workflows.
• Expo Push Tokens for token registration.
• EAS Build for Android builds.
• TypeScript for type safety.`;
  }

  // Backend
  if (
    q.includes("backend") ||
    q.includes("node.js") ||
    q.includes("express.js") ||
    q.includes("api")
  ) {
    return `BACKEND DEVELOPMENT

For Savel Cart, I developed the backend using Node.js and Express.js.

• RESTful API development.
• MongoDB Atlas database integration.
• JWT-based authentication.
• Cloudinary image upload integration.
• Brevo API email integration.
• Web Push notification infrastructure using VAPID.

The backend provides API services for web and mobile applications.`;
  }

  // Database
  if (
    q.includes("database") ||
    q.includes("mongodb")
  ) {
    return `DATABASE MANAGEMENT

Savel Cart uses MongoDB Atlas as its cloud database.

The database manages application data such as user accounts and bird listings.

Cloudinary handles image storage separately.`;
  }

  // Cloudinary
  if (
    q.includes("cloudinary") ||
    q.includes("image upload")
  ) {
    return `CLOUDINARY INTEGRATION

Integrated Cloudinary for cloud-based bird image uploads and storage.

The backend connects with Cloudinary to manage uploaded images without storing large image files directly in MongoDB.`;
  }

  // Brevo / Email
  if (
    q.includes("brevo") ||
    q.includes("email service")
  ) {
    return `BREVO EMAIL INTEGRATION

Integrated Brevo API into the Savel Cart backend for email communication.

API credentials and sender information are configured through environment variables.`;
  }

  // Notifications
  if (
    q.includes("notification") ||
    q.includes("vapid")
  ) {
    return `NOTIFICATION INTEGRATION

WEB:
• Web Push API.
• VAPID public and private keys.
• Backend notification infrastructure.

MOBILE:
• Expo Notifications.
• Expo Push Token registration.
• Backend notification processing.

Firebase Android integration was configured, but FCM delivery credentials still require verification.`;
  }

  // Languages
  if (
    q.includes("language") ||
    q.includes("multilingual") ||
    q.includes("tamil") ||
    q.includes("thanglish")
  ) {
    return `MULTILINGUAL SUPPORT

Savel Cart supports:

• English
• Tamil
• Thanglish

This helps users across Tamil Nadu access the marketplace in their preferred language.`;
  }

  // Education
  if (
    q.includes("education") ||
    q.includes("degree") ||
    q.includes("college")
  ) {
    return `${portfolioData.education.degree} in ${portfolioData.education.branch} from ${portfolioData.education.college} (${portfolioData.education.year}).`;
  }

  // Certifications
  if (q.includes("certification")) {
    return portfolioData.certifications
      ? portfolioData.certifications
          .map((c) =>
            typeof c === "string" ? c : c.name
          )
          .join(", ")
      : "Please contact me for more information about my certifications.";
  }

  // Contact
  if (
    q.includes("contact") ||
    q.includes("phone") ||
    q.includes("how to reach")
  ) {
    return `CONTACT INFORMATION

Email: ${portfolioData.contact.email}

Phone: ${portfolioData.contact.phone}

GitHub: ${portfolioData.contact.github}

LinkedIn: ${portfolioData.contact.linkedin}`;
  }

  // Website
  if (
    q.includes("website") ||
    q.includes("live demo") ||
    q.includes("live link")
  ) {
    return "Savel Cart Live Website: https://savelcart-fawn.vercel.app/";
  }

  // Default
  return `I'm Digital Mari! 👋

I can answer questions about:

• About Me
• Technical Skills
• Work Experience
• Projects
• Mobile Application Development
• React Native and Expo
• Firebase Integration
• Backend and Database
• Education
• Certifications
• Contact Information

To explore a project, first ask "What projects have you built?" and then enter the project name!`;
};


  // Send Message
  const sendMessage = (question = input) => {
    if (!question.trim() || isTyping) return;

    const answer = getAnswer(question);

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: question
      }
    ]);

    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: answer
        }
      ]);

      setIsTyping(false);
      speak(answer);
    }, 800);
  };

  return (
    <>
      <style>{`
        @keyframes pulseBtn {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }

        @keyframes floatCard {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }

        .typing-dot {
          display: inline-block;
          width: 8px;
          height: 8px;
          margin: 0 3px;
          border-radius: 50%;
          background: #0d6efd;
          animation: bounce 1.4s infinite;
        }

        .typing-dot:nth-child(2) {
          animation-delay: .2s;
        }

        .typing-dot:nth-child(3) {
          animation-delay: .4s;
        }

        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }

        .assistant-message {
          white-space: pre-wrap;
          overflow-wrap: anywhere;
          line-height: 1.6;
        }

        .assistant-chat {
          width: 360px;
          height: 500px;
          max-width: calc(100vw - 30px);
          max-height: calc(100dvh - 120px);
        }

        @media (max-width: 480px) {
          .assistant-chat {
            right: 15px !important;
            bottom: 90px !important;
            width: calc(100vw - 30px);
            height: 70vh;
          }
        }
      `}</style>

      {/* Floating Message */}
      {!isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "100px",
            right: "20px",
            background: "#fff",
            color: "#111",
            padding: "12px 16px",
            borderRadius: "12px",
            boxShadow: "0 5px 20px rgba(0,0,0,.15)",
            zIndex: 9998,
            maxWidth: "220px",
            animation: "floatCard 3s ease-in-out infinite"
          }}
        >
          <div className="fw-bold">
            🚀 Skip the scrolling
          </div>
          <div>
            Chat with a digital version
            <br />
            of me instead.
          </div>
        </div>
      )}

      {/* Chat Toggle */}
      <button
       onClick={() => {
  if (isOpen) {
    window.speechSynthesis.cancel();
  }

  setIsOpen(!isOpen);
}}
        aria-label={isOpen ? "Close assistant" : "Open assistant"}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "65px",
          height: "65px",
          borderRadius: "50%",
          border: "none",
          background: "#0d6efd",
          color: "#fff",
          fontSize: "28px",
          fontWeight: "bold",
          cursor: "pointer",
          zIndex: 9999,
          animation: "pulseBtn 2s infinite"
        }}
      >
        {isOpen ? "×" : "M"}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="assistant-chat"
          style={{
            position: "fixed",
            bottom: "95px",
            right: "20px",
            background: "#fff",
            color: "#111",
            borderRadius: "15px",
            boxShadow: "0 0 20px rgba(0,0,0,.2)",
            display: "flex",
            flexDirection: "column",
            zIndex: 9999,
            overflow: "hidden"
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "#2563eb",
              color: "#fff",
              padding: "15px",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <span>👨‍💻 Digital Mari</span>
            <span style={{ fontSize: "12px" }}>
              ● Online
            </span>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "12px"
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  textAlign:
                    msg.sender === "user" ? "right" : "left",
                  marginBottom: "12px"
                }}
              >
                <div
                  className="assistant-message"
                  style={{
                    display: "inline-block",
                    padding: "10px 13px",
                    borderRadius: "12px",
                    background:
                      msg.sender === "user"
                        ? "#2563eb"
                        : "#f3f4f6",
                    color:
                      msg.sender === "user"
                        ? "#fff"
                        : "#111",
                    maxWidth: "90%",
                    textAlign: "left",
                    fontSize: "13px"
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div style={{ padding: "10px" }}>
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
              </div>
            )}

            <div ref={messagesEndRef}></div>
          </div>

          {/* Quick Questions */}
          <div
            className="d-flex flex-wrap gap-2 p-2 border-top border-bottom"
            style={{
              maxHeight: "115px",
              overflowY: "auto"
            }}
          >
            <button
              className="btn btn-sm btn-outline-primary"
              onClick={() => sendMessage("Tell me about yourself")}
            >
              👋 About Me
            </button>

            <button
              className="btn btn-sm btn-outline-primary"
              onClick={() => sendMessage("What skills do you have?")}
            >
              💻 Skills
            </button>

            <button
              className="btn btn-sm btn-outline-primary"
              onClick={() => sendMessage("What projects have you built?")}
            >
              🚀 Projects
            </button>

            <button
              className="btn btn-sm btn-outline-primary"
              onClick={() => sendMessage("Tell me about your experience")}
            >
              📈 Experience
            </button>

            {/* <button
              className="btn btn-sm btn-outline-primary"
              onClick={() => sendMessage("Tell me about Savel Cart")}
            >
              🐓 Savel Cart
            </button> */}

            {/* <button
              className="btn btn-sm btn-outline-primary"
              onClick={() => sendMessage("Explain your mobile app")}
            >
              📱 Mobile App
            </button> */}

            <button
              className="btn btn-sm btn-outline-primary"
              onClick={() => sendMessage("How can I contact you?")}
            >
              📞 Contact
            </button>
          </div>

          {/* Input */}
          <div
            style={{
              display: "flex",
              padding: "10px",
              gap: "8px"
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && sendMessage()
              }
              placeholder="Ask me anything..."
              disabled={isTyping}
              style={{
                flex: 1,
                minWidth: 0,
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ddd",
                outline: "none"
              }}
            />

            <button
              onClick={() => sendMessage()}
              disabled={isTyping || !input.trim()}
              aria-label="Send message"
              style={{
                width: "45px",
                height: "45px",
                flexShrink: 0,
                borderRadius: "50%",
                border: "none",
                background: "#2563eb",
                color: "#fff",
                cursor: "pointer",
                opacity:
                  isTyping || !input.trim() ? 0.5 : 1
              }}
            >
              <IoSend size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default PortfolioAssistant;
