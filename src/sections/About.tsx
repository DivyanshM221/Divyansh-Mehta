import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Rocket, TrendingUp, Code } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const strengthItems = [
    {
      icon: <Palette className="w-10 h-10 text-primary" />,
      title: 'Graphic Design',
      description: 'Expert in Photoshop, Canva, and UI/UX design principles.',
      color: 'from-blue-500 to-purple-500',
    },
    {
      icon: <Rocket className="w-10 h-10 text-secondary" />,
      title: 'Entrepreneurship',
      description: 'Experience in building brands and business strategies.',
      color: 'from-pink-500 to-red-500',
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-green-500" />,
      title: 'Marketing',
      description: 'Skilled in PR, social media, and marketing strategies.',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: <Code className="w-10 h-10 text-yellow-500" />,
      title: 'Web Development',
      description: 'Proficient in HTML, CSS, JavaScript, and React.',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-light to-light-dark dark:from-dark dark:to-dark-lighter">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title mx-auto">
            About Me
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400"
          >
            I'm a passionate creative designer and entrepreneur with a keen eye for aesthetics and a
            drive for innovation. My journey in design and technology has equipped me with a unique
            blend of creative and technical skills.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-display font-bold mb-4">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              As a creative designer and entrepreneur, I've always been fascinated by the
              intersection of design, technology, and business. My passion for creating visually
              appealing and functional designs has led me to explore various domains including
              graphic design, UI/UX, and web development.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I believe in the power of design to solve problems and create meaningful experiences.
              Whether it's crafting a brand identity, designing a user interface, or developing a
              website, I approach each project with creativity, attention to detail, and a
              user-centered mindset.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Currently, I'm focused on building innovative digital products and helping businesses
              establish their online presence through effective design and marketing strategies.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg blur-xl opacity-20 animate-pulse-slow" />
              <motion.div
                className="relative rounded-lg overflow-hidden shadow-xl transform transition-transform duration-500 group-hover:scale-105"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="https://i.ibb.co/Gv3Dg6bP/Whats-App-Image-2025-02-27-at-02-58-15-5e4e1d03.jpg"
                  alt="Divyansh working"
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Key Strengths */}
        <h3 className="text-2xl font-display font-bold text-center mb-8">Key Strengths</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengthItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 hover:shadow-xl transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-4 flex justify-center">
                <div className={`p-3 rounded-full bg-gradient-to-r ${item.color}`}>
                  {item.icon}
                </div>
              </div>
              <h4 className="text-xl font-display font-bold mb-2 text-center">{item.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-center">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
