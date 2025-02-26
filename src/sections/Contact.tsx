import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Dribbble } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-light to-light-dark dark:from-dark dark:to-dark-lighter">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title mx-auto">Get In Touch</h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="max-w-3xl mx-auto bg-white dark:bg-dark-lighter rounded-xl shadow-lg p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-8">
            {/* Email */}
            <motion.div
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="p-3 bg-primary/10 rounded-lg mr-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Email</h4>
                <a href="mailto:divyanshmehta21@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  divyanshmehta21@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="p-3 bg-primary/10 rounded-lg mr-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Phone</h4>
                <a href="tel:+919766718233" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  +91 9766718233
                </a>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="p-3 bg-primary/10 rounded-lg mr-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Location</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Bangalore, Karnataka, India
                </p>
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-bold mb-6 text-center">Connect With Me</h3>
            <div className="flex justify-center space-x-6">
              {[
                { icon: <Linkedin className="w-6 h-6" />, href: 'https://www.linkedin.com/in/divyansh-mehta-2153182a4', label: 'LinkedIn' },
                { icon: <Instagram className="w-6 h-6" />, href: 'https://www.instagram.com/divyanshmehta21/', label: 'Instagram' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-light-dark dark:bg-dark-lighter rounded-lg hover:bg-primary hover:text-white transition-colors"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;