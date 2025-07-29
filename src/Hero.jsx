import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div id="hero" className="h-screen flex flex-col items-center justify-center 
      bg-gradient-to-r from-[#250b2b] via-[#0b0013] to-[#02001f] px-4">
      
      {/* Social Icons - Responsive */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 15 }}
        transition={{ duration: 1 }}
        className="flex justify-center mb-4 md:mb-8"
      >
        <div className="flex justify-center space-x-4 sm:space-x-6 md:space-x-7 text-purple-200">
          <div className="p-2 sm:p-3 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/5 backdrop-blur-full
            rounded-full flex items-center justify-center
            hover:bg-white/20 transition-all duration-300 shadow shadow-white/40">
            <i className="fa-solid fa-code text-xl sm:text-2xl md:text-3xl"></i>
          </div>

          <div className="p-2 sm:p-3 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/5 backdrop-blur-full
            shadow shadow-white/40 rounded-full flex items-center justify-center
            hover:bg-white/20 transition-all duration-300">
            <i className="fa-solid fa-user text-xl sm:text-2xl md:text-3xl"></i>
          </div>

          <div className="p-2 sm:p-3 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/5 backdrop-blur-full
            shadow shadow-white/40 rounded-full flex items-center justify-center
            hover:bg-white/20 transition-all duration-300">
            <i className="fa-brands fa-github text-2xl sm:text-3xl md:text-4xl"></i>
          </div>
        </div>
      </motion.div>
      
      {/* Heading - Responsive */}
      <motion.div
        initial={{ opacity: 0, x: -90 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Welcome To My
          </h1>
          <h1 className="mt-2 sm:mt-3 text-3xl sm:text-4xl md:text-5xl font-bold 
            bg-gradient-to-r from-[#843de7] via-[#7506c4] to-[#c60adb] 
            bg-clip-text text-transparent">
            Portfolio Website
          </h1>
        </div>
      </motion.div>
      
      {/* Button - Responsive */}
      <motion.div
        initial={{ opacity: 0, y: 90 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="mt-4 md:mt-5 flex justify-center">
          <a href="https://github.com/BlastSohaibali">
            <button className="px-4 py-1.5 sm:px-5 sm:py-2 md:px-6 md:py-2 bg-white/5 backdrop-blur-full
              shadow shadow-white/40 rounded-full flex items-center justify-center
              hover:bg-white/20 hover:text-purple-500 text-purple-100 transition duration-300
              text-sm sm:text-base">
              View My Work
            </button>
          </a>
        </div>
      </motion.div>
    </div>
  );
}