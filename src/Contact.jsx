// src/components/ContactSection.jsx
import { useState } from 'react';
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, 
  FaFacebook, FaTelegram, FaTwitter, FaTiktok, 
  FaGithub, FaLinkedin, FaWhatsapp
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaPhone className="text-xl" />,
      title: "Phone",
      content: "0334 3319965",
      link: "tel:+923343319965"
    },
    {
      icon: <FaWhatsapp className="text-xl" />,
      title: "WhatsApp",
      content: "0320 5635455",
      link: "https://wa.me/923205635455"
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      title: "Email",
      content: "sohaibali1277@gmail.com",
      link: "mailto:sohaibali1277@gmail.com"
    },
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      title: "Location",
      content: "Haripur Hazara, Pakistan"
    }
  ];

  const socialLinks = [
    { icon: <FaInstagram />, name: "Instagram", url: "https://instagram.com/sohaibali1277", color: "bg-gradient-to-r from-[#843de7] via-[#7506c4] to-[#c60adb]" },
    { icon: <FaFacebook />, name: "Facebook", url: "https://web.facebook.com/sohaib.arshid.2025", color: "bg-blue-600" },
    { icon: <FaTelegram />, name: "Telegram", url: "https://t.me/03343319965", color: "bg-blue-400" },
    { icon: <FaTwitter />, name: "Twitter/X", url: "#", color: "bg-black" },
    { icon: <FaTiktok />, name: "TikTok", url: "#", color: "bg-gray-800" },
    { icon: <FaGithub />, name: "GitHub", url: "#", color: "bg-gray-700" },
    { icon: <FaLinkedin />, name: "LinkedIn", url: "#", color: "bg-blue-700" }
  ];

  return (
      <div id="contact" className="bg-gradient-to-r from-[#250b2b] via-[#0b0013] to-[#02001f]  overflow-hidden shadow-2xl border border-purple-900/50">
        <div className="relative p-8 md:p-12">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
          
          {/* Section title */}
          <div className="text-center mb-12 relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#843de7] via-[#7506c4] to-[#c60adb]"
            >
              Get In Touch
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-purple-200 max-w-2xl mx-auto"
            >
              Have a project in mind or want to discuss opportunities? Feel free to reach out using any method below. I'm always open to new ideas!
            </motion.p>
          </div>
          
          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact information */}
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-purple-900/50 shadow shadow-purple-900/30"
              >
                <h2 className="text-xl font-bold mb-6 text-purple-400">Contact Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#843de7] to-[#c60adb] flex items-center justify-center mr-4 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-purple-200">{item.title}</h3>
                        {item.link ? (
                          <a 
                            href={item.link} 
                            className="text-purple-300 hover:text-purple-400 transition-colors block mt-1"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-purple-300 mt-1">{item.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              {/* Social links */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-purple-900/50 shadow shadow-purple-900/30"
              >
                <h2 className="text-xl font-bold mb-6 text-purple-400">Connect With Me</h2>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} h-14 w-14 rounded-xl flex items-center justify-center text-white text-xl transition-all hover:scale-110 hover:shadow-lg shadow-md shadow-purple-900/30`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Contact form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-purple-900/50 shadow shadow-purple-900/30"
            >
              <h2 className="text-xl font-bold mb-6 text-purple-400">Send a Message</h2>
              
              {submitSuccess ? (
                <div className="bg-green-900/30 border border-green-700 rounded-xl p-6 text-center">
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="text-xl font-bold text-green-400 mb-2">Message Sent!</h3>
                  <p className="text-purple-200">
                    Thank you for reaching out! I'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-purple-300 mb-2">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/10 border border-purple-900/50 rounded-xl px-4 py-3 text-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all placeholder-purple-400/50"
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-purple-300 mb-2">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/10 border border-purple-900/50 rounded-xl px-4 py-3 text-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all placeholder-purple-400/50"
                        placeholder="Enter your email"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-purple-300 mb-2">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-purple-900/50 rounded-xl px-4 py-3 text-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all placeholder-purple-400/50"
                        placeholder="What's this about?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-purple-300 mb-2">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full bg-white/10 border border-purple-900/50 rounded-xl px-4 py-3 text-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all placeholder-purple-400/50"
                        placeholder="Write your message here..."
                      ></textarea>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 px-6 rounded-xl font-bold text-white transition-all ${
                        isSubmitting 
                          ? 'bg-gray-600 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-[#843de7] to-[#c60adb] hover:shadow-lg shadow-md shadow-purple-900/30'
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : 'Send Message'}
                    </motion.button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
          
          {/* Location section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-12 bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-purple-900/50 shadow shadow-purple-900/30"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-gradient-to-r from-[#843de7] to-[#c60adb] w-16 h-16 rounded-full flex items-center justify-center text-2xl">
                <FaMapMarkerAlt />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-purple-200">Based in Haripur Hazara</h3>
                <p className="text-purple-300 mt-2">
                  Located in the beautiful mountains of Hazara, Pakistan. Available for remote work worldwide.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Footer */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-12 pt-6 border-t border-purple-900/50 text-center text-purple-400/80"
          >
            <p>Sohaib Arshid | All Rights Reserved | Let's create something amazing together!</p>
          </motion.div>
        </div>
      </div>
  );
};

export default Contact;