import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Dribbble } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-light-dark dark:bg-dark-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-lg font-display font-bold text-primary mb-2">Divyansh Mehta</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Creative Designer | Entrepreneur | UI/UX Enthusiast
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-4 mt-4 md:mt-0"
          >
            <a
              href="https://www.linkedin.com/in/divyansh-mehta-2153182a4"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-dark-lighter transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/divyanshmehta21/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-dark-lighter transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 pt-4 border-t border-gray-200 dark:border-dark-lighter text-center"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {currentYear} Divyansh Mehta. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
            Designed & Developed by Divyansh Mehta
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;