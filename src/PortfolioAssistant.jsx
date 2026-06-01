import portfolioData from "./portfolioData";
import { IoSend } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";

function PortfolioAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: `Hi 👋

I'm Digital Mari.

Ask me about my skills, projects, experience, education, certifications, or contact information.`
    }
  ]);

  useEffect(() => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages, isTyping]);

  const speak = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  };

  const getAnswer = (question) => {
    const q = question.toLowerCase();

    if (q.includes("about") || q.includes("yourself")) return portfolioData.about;
    if (q.includes("experience")) return portfolioData.experience;

    if (q.includes("skill") || q.includes("technology")) {
      return `Frontend: ${portfolioData.skills.frontend.join(", ")}. Backend: ${portfolioData.skills.backend.join(", ")}. Database: ${portfolioData.skills.database.join(", ")}.`;
    }

    if (q.includes("project")) {
      return portfolioData.projects
        .map((p) => `${p.name}: ${p.description}`)
        .join(" ");
    }

    if (q.includes("education") || q.includes("degree")) {
      return `${portfolioData.education.degree} in ${portfolioData.education.branch} from ${portfolioData.education.college} (${portfolioData.education.year}).`;
    }

    if (q.includes("contact") || q.includes("email") || q.includes("phone")) {
      return `Email: ${portfolioData.contact.email}. Phone: ${portfolioData.contact.phone}.`;
    }

    return "I can answer questions about my skills, projects, experience, education and contact information.";
  };

  const sendMessage = (question = input) => {
    if (!question.trim()) return;

    const answer = getAnswer(question);

    setMessages((prev) => [...prev, { sender: "user", text: question }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { sender: "bot", text: answer }]);
      speak(answer);
    }, 1000);
  };

  return (
    <>
      <style>{`
      @keyframes pulseBtn {
        0% {transform:scale(1);}
        50% {transform:scale(1.08);}
        100% {transform:scale(1);}
      }
      @keyframes floatCard {
        0% {transform:translateY(0);}
        50% {transform:translateY(-8px);}
        100% {transform:translateY(0);}
      }
      .typing-dot{
        display:inline-block;width:8px;height:8px;margin:0 3px;
        border-radius:50%;background:#0d6efd;animation:bounce 1.4s infinite;
      }
      .typing-dot:nth-child(2){animation-delay:.2s;}
      .typing-dot:nth-child(3){animation-delay:.4s;}
      @keyframes bounce{
        0%,80%,100%{transform:scale(0);}
        40%{transform:scale(1);}
      }
      `}</style>

      <div style={{
        position:"fixed",bottom:"100px",right:"20px",background:"#fff",
        padding:"12px 16px",borderRadius:"12px",
        boxShadow:"0 5px 20px rgba(0,0,0,.15)",zIndex:9998,
        maxWidth:"220px",animation:"floatCard 3s ease-in-out infinite"
      }}>
        <div className="fw-bold">🚀 Skip the scrolling</div>
        <div>Chat with a digital version<br/>of me instead.</div>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position:"fixed",bottom:"20px",right:"20px",
          width:"65px",height:"65px",borderRadius:"50%",
          border:"none",background:"#0d6efd",color:"#fff",
          fontSize:"28px",fontWeight:"bold",cursor:"pointer",
          zIndex:9999,animation:"pulseBtn 2s infinite"
        }}
      >
        M
      </button>

      {isOpen && (
        <div style={{
          position:"fixed",bottom:"95px",right:"20px",
          width:"360px",height:"500px",background:"#fff",
          borderRadius:"15px",boxShadow:"0 0 20px rgba(0,0,0,.2)",
          display:"flex",flexDirection:"column",zIndex:9999
        }}>
          <div style={{background:"#2563eb",color:"#fff",padding:"15px",fontWeight:"bold"}}>
            👨‍💻 Digital Mari
          </div>

          <div style={{flex:1,overflowY:"auto",padding:"10px"}}>
            {messages.map((msg,i)=>(
              <div key={i} style={{textAlign:msg.sender==="user"?"right":"left",marginBottom:"10px"}}>
                <div style={{
                  display:"inline-block",padding:"10px",borderRadius:"10px",
                  background:msg.sender==="user"?"#2563eb":"#f3f4f6",
                  color:msg.sender==="user"?"white":"black",maxWidth:"85%"
                }}>
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div>
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
              </div>
            )}

            <div ref={messagesEndRef}></div>
          </div>

          <div className="d-flex flex-wrap gap-2 p-2 border-top border-bottom">
            <button className="btn btn-sm btn-outline-primary" onClick={()=>sendMessage("Tell me about yourself")}>👋 About Me</button>
            <button className="btn btn-sm btn-outline-primary" onClick={()=>sendMessage("What skills do you have?")}>💻 Skills</button>
            <button className="btn btn-sm btn-outline-primary" onClick={()=>sendMessage("What projects have you built?")}>🚀 Projects</button>
            <button className="btn btn-sm btn-outline-primary" onClick={()=>sendMessage("Tell me about your experience")}>📈 Experience</button>
            <button className="btn btn-sm btn-outline-primary" onClick={()=>sendMessage("How can I contact you?")}>📞 Contact</button>
          </div>

          <div style={{display:"flex",padding:"10px"}}>
            <input
              type="text"
              value={input}
              onChange={(e)=>setInput(e.target.value)}
              onKeyDown={(e)=>e.key==="Enter" && sendMessage()}
              placeholder="Ask me anything..."
              style={{flex:1,padding:"10px"}}
            />
            <button
              onClick={()=>sendMessage()}
              style={{
                marginLeft:"10px",width:"45px",height:"45px",
                borderRadius:"50%",border:"none",
                background:"#2563eb",color:"#fff"
              }}
            >
              <IoSend size={20}/>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default PortfolioAssistant;
