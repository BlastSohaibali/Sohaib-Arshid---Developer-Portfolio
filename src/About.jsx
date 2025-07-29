import { motion } from "framer-motion";
import Portfolio from '../assets/Portfolio.jpg';

export default function About() {
  return (
    <div id="about" className="min-h-screen flex flex-col bg-gradient-to-r from-[#250b2b] via-[#0b0013] to-[#02001f] px-4 sm:px-8 py-8">
      {/* Top Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{  duration: 0.7,  
    ease: "easeOut" }}
      >
        <div className="flex flex-col items-center justify-center h-[15vh] md:h-[20vh]">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#843de7] via-[#7506c4] to-[#c60adb] bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="mt-1 text-sm sm:text-base bg-gradient-to-r from-[#e0dde3] via-[#d7d2d8] to-[#d6cdd7] bg-clip-text text-transparent tracking-wider">
            Transforming ideas into digital experiences
          </p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between mt-4 md:mt-0">
        {/* Left Content */}
        <div className="flex-1 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y:30 }}
            animate={{ opacity: 1, y:0 }}
            transition={{ duration: 0.8,
            ease: "easeOut",
            delay: 0.1  }}
          >
            <div className="mb-4 md:mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#843de7] via-[#7506c4] to-[#c60adb] bg-clip-text text-transparent">
                Hello, I'm
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-1">
                Sohaib Arshid
              </h1>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8,
            ease: "easeOut",
            delay: 0.1  }}
          >
            <div className="mb-6 md:mb-8">
              <p className="text-sm sm:text-base md:text-lg text-gray-200 tracking-wide leading-relaxed">
                I'm Sohaib Arshid — a creative mind blending code with design.
                I specialize in crafting responsive, user-friendly websites using
                React and Tailwind CSS. Currently exploring full-stack development,
                with a vision to build meaningful digital experiences for the web.
                I enjoy solving real problems through clean code and clear logic.
                Always learning, always building one line of code at a time.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="bg-gradient-to-r from-[#843de7] via-[#7506c4] to-[#c60adb] text-purple-100 py-2 px-6 sm:px-8 rounded 
                hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition duration-300 shadow-[0_0_10px_rgba(255,255,255,0.3)]
                flex items-center justify-center">
                Download CV <i className="fa-regular fa-address-card ml-2"></i>
              </button>
              <button className="bg-black text-purple-100 py-2 px-6 sm:px-8 rounded 
                hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition duration-300 
                shadow-[0_0_10px_rgba(255,255,255,0.3)] flex items-center justify-center">
                View Project <i className="fa-solid fa-diagram-project ml-2"></i>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-8 md:mt-0 md:ml-10 flex justify-center"
        >
          <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden
            shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] 
            transition duration-300 border-2 border-purple-900">
            <img 
              src={Portfolio} 
              alt="Sohaib Arshid" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      
      <div className="hidden md:block absolute top-1/4 left-5 w-4 h-4 rounded-full bg-purple-600 blur-md"></div>
      <div className="hidden md:block absolute bottom-1/4 right-10 w-6 h-6 rounded-full bg-indigo-800 blur-lg"></div>
      <div className="hidden md:block absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-pink-700 blur-sm"></div>
    </div>
  );
}