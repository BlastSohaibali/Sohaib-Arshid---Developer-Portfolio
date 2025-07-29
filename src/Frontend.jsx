import { motion } from "framer-motion";
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from "../assets/software engineer.json";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaProjectDiagram, 
  FaAddressCard,
  FaJs,
  FaReact,
  FaNodeJs
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { Link } from "react-router-dom";

export default function Frontend() {
  const skills = [
    { name: "Javascript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React.js", icon: <FaReact className="text-blue-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> }
  ];

  // Social media links
  const socialLinks = [
    { 
      icon: <FaFacebookF />, 
      color: "text-blue-500", 
      url: "https://web.facebook.com/sohaib.arshid.2025" 
    },
    { 
      icon: <FaTwitter />, 
      color: "text-blue-400", 
      url: "https://x.com/Sohaib4rshad" 
    },
    { 
      icon: <FaInstagram />, 
      color: "text-pink-500",
      url: "https://www.instagram.com/sohaibali1277/" 
    }
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center 
      bg-gradient-to-r from-[#250b2b] via-[#0b0013] to-[#02001f] px-4 py-8 sm:py-12 md:py-16 md:ml-[-35px]">
      
      {/* Left Content */}
      <motion.div 
        className="w-full md:w-1/2 flex flex-col items-start justify-center md:pl-8 lg:pl-12 xl:pl-16"
        initial={{ opacity: 0, y: 90 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="mb-4 sm:mb-6 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Frontend</h1>
          <h1 className="mt-1 sm:mt-2 text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#843de7] via-[#7506c4] to-[#c60adb] bg-clip-text text-transparent">
            Developer
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 sm:mb-6 w-full"
        >
          <h1 className="text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-[#b9b8ba] via-[#948f96] to-[#d6cdd7] bg-clip-text text-transparent tracking-wider">
            Artificial Intelligence Student
          </h1>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-gray-300 max-w-xl">
            Passionate about merging AI with Web Development to build smart, modern, and interactive websites.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full mb-4 sm:mb-6"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="px-3 py-2 sm:px-4 sm:py-3 bg-white/5 text-purple-100 rounded-full backdrop-blur-lg
                hover:bg-white/20 hover:text-purple-300 transition duration-300 
                shadow shadow-white/10 flex items-center justify-center gap-2"
              >
                <span className="text-base sm:text-lg">{skill.icon}</span>
                <span className="text-xs sm:text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 w-full"
        >
          {/* Link to Showcase component */}
          <Link to="/showcase" className="w-full sm:w-auto">
            <button className="w-full bg-black text-purple-100 py-2 sm:py-3 px-6 sm:px-10 rounded-xl 
              hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition duration-300 
              shadow-[0_0_10px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2">
              <FaProjectDiagram className="text-sm sm:text-base" /> 
              <span className="text-sm sm:text-base">Project</span>
            </button>
          </Link>
          
          {/* Link to Contact component */}
          <Link to="/contact" className="w-full sm:w-auto">
            <button className="w-full bg-gradient-to-r from-[#843de7] via-[#7506c4] to-[#c60adb] 
              text-purple-100 py-2 sm:py-3 px-6 sm:px-10 rounded-xl hover:shadow-[0_0_15px_rgba(159,122,234,0.7)] 
              transition duration-300 shadow-[0_0_10px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2">
              <FaAddressCard className="text-sm sm:text-base" /> 
              <span className="text-sm sm:text-base">Contact</span>
            </button>
          </Link>
        </motion.div>

        {/* Social Icons with links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <div className="flex gap-3 sm:gap-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex"
              >
                <div 
                  className="p-2 w-10 h-10 sm:p-3 sm:w-12 sm:h-12 bg-white/5 backdrop-blur-lg rounded-full flex items-center justify-center
                  hover:bg-white/20 transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0.3)] 
                  hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                >
                  <span className={`text-lg sm:text-xl ${social.color}`}>{social.icon}</span>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Right Content - Animation */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full md:w-1/2 flex items-center justify-center mt-6 sm:mt-8 md:mt-0"
      >
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <Player
            autoplay
            loop
            src={animationData}
          />
        </div>
      </motion.div>
    </div>
  );
} 