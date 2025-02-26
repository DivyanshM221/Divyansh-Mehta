import React from 'react';
import { motion } from 'framer-motion';
import { Award, Medal, Trophy, AlignCenterVertical as Certificate } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: 'Certified in Social Media Marketing',
      organization: 'Google Digital Garage',
      year: '2023',
      icon: <Certificate className="w-10 h-10 text-primary" />,
    },
    {
      title: 'Best All-Rounder',
      organization: 'NSS Rural Camp',
      year: '2023',
      icon: <Trophy className="w-10 h-10 text-yellow-500" />,
    },
    {
      title: 'Awards in IT Competitions/Culturals',
      organization: 'St. Aloysius, Jyoti Nivas College, Christ, etc',
      year: '2022-2025',
      icon: <Medal className="w-10 h-10 text-secondary" />,
    },
    {
      title: 'Zilla Parishad Level Competitor',
      organization: 'Basketball & Athletics',
      year: '2019',
      icon: <Award className="w-10 h-10 text-green-500" />,
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-light-dark dark:bg-dark-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title mx-auto">Achievements</h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Recognition and certifications I've earned throughout my journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="mb-4 flex justify-center">
                {achievement.icon}
              </div>
              <h4 className="text-xl font-display font-bold mb-2">{achievement.title}</h4>
              <p className="text-primary font-medium mb-1">{achievement.organization}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{achievement.year}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Achievements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-display font-bold mb-6 text-center">Other Recognitions</h3>
          <div className="bg-white/5 dark:bg-dark/30 backdrop-blur-sm rounded-xl p-8 border border-white/10 dark:border-dark-lighter/20">
            <ul className="space-y-4">
              {[
                'Participated in multiple fests and design competitions',
                'Recognized for outstanding contribution to university events',
                'Featured in college magazine for creative design work',
                'Mentored junior designers and developers in university projects',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;