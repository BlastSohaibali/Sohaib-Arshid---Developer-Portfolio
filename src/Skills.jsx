import { motion } from "framer-motion";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaGithub, 
  FaReact, 
  FaNodeJs,
  FaDatabase
} from "react-icons/fa";
import { 
  SiJavascript, 
  SiTailwindcss, 
  SiVite, 
  SiCplusplus 
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML", color: "#E34F26" },
    { icon: <FaCss3Alt />, name: "CSS", color: "#1572B6" },
    { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <FaReact />, name: "React", color: "#61DAFB" },
    { icon: <SiTailwindcss />, name: "Tailwind", color: "#38B2AC" },
    { icon: <FaGithub />, name: "Git/Github", color: "#181717" },
    { icon: <SiVite />, name: "Vite", color: "#646CFF" },
    { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
    { icon: <SiCplusplus />, name: "C++", color: "#00599C" },
    { icon: <FaDatabase />, name: "SQL", color: "#00758F" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section className="min-h-1000px w-full py-2 px-4 mt-1 sm:px-6 bg-gradient-to-r from-[#250b2b] via-[#0b0013] to-[#02001f]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          {/* Your header content here */}
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                boxShadow: "0 10px 25px -5px rgba(192, 132, 252, 0.2)"
              }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer border border-white/10 transition-all duration-300"
            >
              <div 
                className="p-3 rounded-full mb-3 flex items-center justify-center"
                style={{ backgroundColor: skill.color + '20' }} // Add alpha transparency
              >
                <div 
                  className="text-4xl"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>
              </div>
              <h3 className="text-purple-200 font-medium text-sm md:text-base">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}