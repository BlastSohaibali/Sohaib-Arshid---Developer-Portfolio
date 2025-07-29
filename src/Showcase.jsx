import { useState } from "react";
import Skills from "./Skills";
import Certificates from "./Certificates";
import Projects from "./Projects";

export default function Showcase() {
  const [activeTab, setActiveTab] = useState("Projects");

  function renderComponent() {
    switch(activeTab) {
      case "Skills": return <Skills />;
      case "Certificates": return <Certificates />;
      case "Projects": return <Projects />;
      default: return null;
    }
  }

  return (
    <div id="showcase" className="min-h-screen flex flex-col items-center justify-between 
      bg-gradient-to-r from-[#250b2b] via-[#0b0013] to-[#02001f] p-4 md:p-0">
      
      <div className="mt-10 md:mt-20 w-full max-w-6xl">
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-6 justify-center">
          <button 
            onClick={() => setActiveTab("Projects")}
            className={`px-4 py-3 md:px-6 md:py-4 lg:px-[120px] lg:py-6 rounded-lg 
              transition-all duration-300 active:scale-95 text-sm md:text-base
              bg-gradient-to-r from-[#3a1742] via-[#0b0013] to-[#07033c]
              ${activeTab === "Projects" 
                ? "text-purple-500 shadow-[0_0_15px_rgba(159,122,234,0.7)] border border-dashed border-purple-500/50"
                : "text-purple-200 hover:text-purple-500 shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]"
              }`}
          >
            Projects
          </button>

          <button 
            onClick={() => setActiveTab("Certificates")}
            className={`px-4 py-3 md:px-6 md:py-4 lg:px-[120px] lg:py-6 rounded-lg 
              transition-all duration-300 active:scale-95 text-sm md:text-base
              bg-gradient-to-r from-[#3a1742] via-[#0b0013] to-[#07033c]
              ${activeTab === "Certificates" 
                ? "text-purple-500 shadow-[0_0_15px_rgba(159,122,234,0.7)] border border-dashed border-purple-500/50"
                : "text-purple-200 hover:text-purple-500 shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]"
              }`}
          >
            Achievement
          </button>

          <button 
            onClick={() => setActiveTab("Skills")}
            className={`px-4 py-3 md:px-6 md:py-4 lg:px-[120px] lg:py-6 rounded-lg 
              transition-all duration-300 active:scale-95 text-sm md:text-base
              bg-gradient-to-r from-[#3a1742] via-[#0b0013] to-[#07033c]
              ${activeTab === "Skills" 
                ? "text-purple-500 shadow-[0_0_15px_rgba(159,122,234,0.7)] border border-dashed border-purple-500/50"
                : "text-purple-200 hover:text-purple-500 shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]"
              }`}
          >
            Tech Stack
          </button>
        </div>
      </div>

      <div className="w-full flex-1 overflow-hidden mt-4 md:mt-0 px-2 md:px-0">
        {renderComponent()}
      </div>
    </div>
  );
}