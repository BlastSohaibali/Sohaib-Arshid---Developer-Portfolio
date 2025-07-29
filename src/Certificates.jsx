import { motion } from "framer-motion";

export default function Certificates() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <motion.h2 
        className="text-4xl font-bold text-white mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        {[1, 2, 3].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-6 rounded-2xl"
          >
            <div className="text-4xl mb-4 text-center">🏆</div>
            <h3 className="text-xl font-semibold text-white text-center mb-2">Certificate {i + 1}</h3>
            <p className="text-gray-300 text-center"></p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}