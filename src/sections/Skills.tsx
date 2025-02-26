import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technicalSkills = [
    { name: 'Graphic Design', level: 95 },
    { name: 'UI/UX Design', level: 90 },
    { name: 'Web Development', level: 75 },
    { name: 'PR & Marketing', level: 85 },
    { name: 'Leadership & Entrepreneurship', level: 90 },
  ];

  const tools = [
    { name: 'Photoshop', icon: '🎨', category: 'design' },
    { name: 'Canva', icon: '🖌️', category: 'design' },
    { name: 'Figma', icon: '✏️', category: 'design' },
    { name: 'Illustrator', icon: '🖋️', category: 'design' },
    { name: 'HTML', icon: '🌐', category: 'development' },
    { name: 'CSS', icon: '🎨', category: 'development' },
    { name: 'JavaScript', icon: '⚙️', category: 'development' },
    { name: 'React.js', icon: '⚛️', category: 'development' },
    { name: 'Power BI', icon: '📊', category: 'analytics' },
    { name: 'Google Analytics', icon: '📈', category: 'analytics' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mx-auto">Skills & Expertise</h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            My technical skills and proficiency in various tools and technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-bold mb-8">Technical Skills</h3>
            <div className="space-y-8">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-bold mb-8">Tools & Technologies</h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-4"
            >
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-light-dark dark:bg-dark-lighter px-4 py-3 rounded-lg flex items-center hover:bg-primary hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <span className="mr-2 text-xl">{tool.icon}</span>
                  <span className="font-medium">{tool.name}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Additional Skills */}
            <div className="mt-12">
              <h4 className="text-xl font-display font-bold mb-4">Additional Skills</h4>
              <motion.ul
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-y-3"
              >
                {[
                  'Project Management',
                  'Team Leadership',
                  'Content Creation',
                  'Social Media Strategy',
                  'Brand Development',
                  'Event Planning',
                  'Public Speaking',
                  'Creative Problem Solving',
                ].map((skill, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-center"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;