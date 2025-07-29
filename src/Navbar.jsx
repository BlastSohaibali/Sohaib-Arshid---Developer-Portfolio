import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Navigation items
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Expertise', path: '/expertise' },
    { name: 'About', path: '/about' },
    { name: 'showcase', path: '/showcase' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 mt-4 `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
              onClick={closeMenu}
            >
              Sohaib Arshid
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-sm sm:text-base text-purple-200 hover:text-purple-400 transition-colors duration-300 relative group"
                onClick={closeMenu}
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-purple-200 hover:text-purple-400 focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <FaBars className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-[#0b0013] backdrop-blur-lg border-t border-purple-900/50 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={closeMenu}
              className="block text-base sm:text-lg text-purple-200 hover:text-purple-400 transition-colors duration-300 py-2 border-b border-purple-900/30"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}