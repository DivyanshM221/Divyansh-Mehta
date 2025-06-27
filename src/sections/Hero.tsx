import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown, Download, Mail, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 animated-bg opacity-10 dark:opacity-20" />

      {/* Floating Shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-secondary/10 blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <motion.div
            className="md:w-3/5 text-center md:text-left mb-10 md:mb-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-lg md:text-xl text-primary font-medium mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm
            </motion.p>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Divyansh Mehta
            </motion.h1>
            <motion.div
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 h-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <TypeAnimation
                sequence={[
                  'Creative Designer',
                  1000,
                  'Entrepreneur',
                  1000,
                  'UI/UX Enthusiast',
                  1000,
                  'Web Developer',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-medium"
              />
            </motion.div>
            <motion.p
              className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Bringing ideas to life through design & innovation. Passionate about creating
              meaningful digital experiences that solve real problems.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <a href="#contact" className="btn btn-outline">
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </a>
              <a
                href="https://wa.me/919766718233"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
            </motion.div>
          </motion.div>

          {/* Enhanced Profile Photo */}
          <motion.div
            className="md:w-2/5 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative group">
              {/* Animated Gradient Background */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary to-secondary blur-xl opacity-30 animate-pulse-slow group-hover:opacity-50 transition-opacity duration-300" />

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300" />

              {/* Profile Photo Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden border-4 border-white dark:border-dark-light shadow-2xl group-hover:shadow-3xl transition-all duration-300 transform group-hover:scale-105">
                <img
                  src="https://i.ibb.co/Swmx8cWn/Whats-App-Image-2025-06-10-at-18-42-22-11e22edd.jpg"
                  alt="Divyansh Mehta"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Decorative Dots */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary/20 blur-sm animate-float" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 rounded-full bg-secondary/20 blur-sm animate-float-delay" />
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
