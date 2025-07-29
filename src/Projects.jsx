import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const containerRef = useRef(null);
  
  const projects = [
    {
      id: 1,
      title: "Gaming Website",
      description: "Responsive gaming platform with showcases and reviews",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Web",
      githubUrl: "https://github.com/BlastSohaibali"
    },
    {
      id: 2,
      title: "Recipe Finder",
      description: "Discover recipes based on available ingredients",
      technologies: ["HTML", "CSS", "JavaScript", "API"],
      category: "Web",
      githubUrl: "https://github.com/BlastSohaibali"
    },
    {
      id: 3,
      title: "Vehicle Showroom",
      description: "E-commerce platform for showcasing vehicles",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Web",
      githubUrl: "https://github.com/BlastSohaibali"
    },
    {
      id: 4,
      title: "Chatbot",
      description: "AI-powered conversational assistant",
      technologies: ["JavaScript", "NLP"],
      category: "AI",
      githubUrl: "https://github.com/BlastSohaibali"
    },
    {
      id: 5,
      title: "Automatic Brake System",
      description: "Vehicle safety using computer vision",
      technologies: ["Python", "Computer Vision", "AI"],
      category: "AI",
      githubUrl: "https://github.com/BlastSohaibali"
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Personal portfolio with interactive UI",
      technologies: ["React", "Tailwind", "Framer Motion"],
      category: "Web",
      githubUrl: "https://github.com/BlastSohaibali"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const categories = ['All', 'Web', 'AI'];

  // Scroll to top when filter changes
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [activeFilter]);

  return (
    <div className="w-full h-full flex flex-col bg-transparent overflow-hidden">
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-1 py-2 px-4">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveFilter(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-3 py-1 text-xs rounded-full ${
              activeFilter === category
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                : 'bg-purple-900/30 text-purple-300 hover:bg-purple-800/50'
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>
      
      {/* Scrollable Projects Grid */}
      <div 
        ref={containerRef}
        className="flex-1 overflow-y-auto px-4 pb-4 hide-scrollbar"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900 backdrop-blur-sm border border-gray-700/50 rounded-lg overflow-hidden flex flex-col h-full"
            >
              {/* Project Header */}
              <div className="p-2 border-b border-gray-700/50 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    project.category === 'AI' ? 'bg-green-500' : 'bg-purple-500'
                  }`}></div>
                  <span className="text-xs text-gray-400">
                    {project.category}
                  </span>
                </div>
                <div className="flex gap-1">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span 
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-purple-500/60"
                    ></span>
                  ))}
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-2 flex-grow flex flex-col">
                <h3 className="text-sm font-bold text-white mb-1">{project.title}</h3>
                <p className="text-gray-300 text-xs mb-2 leading-tight">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-2 mt-auto">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2 py-0.5 bg-purple-900/30 text-purple-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* GitHub Button */}
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="block w-full text-center px-2 py-1 rounded-md bg-gradient-to-r from-purple-700/40 to-pink-700/40 text-purple-300 text-xs border border-purple-500/30 hover:border-purple-400/50"
                >
                  View on GitHub
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-5 w-5 h-5 rounded-full bg-purple-500 blur-xl opacity-20"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-40 right-5 w-6 h-6 rounded-full bg-pink-500 blur-xl opacity-20"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
      />
      
      <style jsx global>{`
        .hide-scrollbar {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE/Edge */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome/Safari/Opera */
        }
      `}</style>
    </div>
  );
};

export default Projects;