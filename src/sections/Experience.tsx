import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      role: 'Co-Founder',
      company: 'Arkade Media',
      period: 'Nov 2023 - Dec 24',
      description: 'Leading branding & promotional material creation. Designing social media content and marketing strategies for clients.',
      logo: 'https://gcdnb.pbrd.co/images/awQB5NJ8kOiA.png?o=1',
    },
    {
      role: 'Software Intern',
      company: 'Terrace Tech Labs',
      period: 'Dec 2023 - Feb 2024',
      description: 'Developed UI/UX designs and implemented web solutions using HTML, CSS, and JavaScript. Collaborated with the development team on client projects.',
      logo: 'https://gcdnb.pbrd.co/images/pLgmnmJDL23s.png?o=1',
    },
    {
      role: 'General Secretary',
      company: 'E-Cell, St. Joseph\'s University',
      period: 'March 2024 - Present',
      description: 'Organizing Startup Mela and other entrepreneurship events. Fostering innovation and startup culture among students and founders.',
      logo: 'https://i.ibb.co/hRb4mNpD/Whats-App-Image-2025-02-27-at-02-37-57-826ac755.jpg',
    },
    {
      role: 'Public Relations Intern',
      company: 'St. Joseph\'s University',
      period: 'Sep 2023 - April 2024',
      description: 'Managed PR campaigns and university branding initiatives. Coordinated with media outlets and created promotional content.',
      logo: 'https://i.ibb.co/Q7XCmDkN/St-Joseph-s-University-Emblem-Transparent-1.png',
    },
    {
      role: 'Head of Design',
      company: 'E-Cell, St. Joseph\'s University',
      period: 'Sep 2023 - March 2024',
      description: 'Designed posters, brochures, and marketing materials for various events. Led a team of designers to create cohesive visual identities.',
      logo: 'https://gcdnb.pbrd.co/images/YwBFp3QHTZmk.jpg?o=1',
    },
    {
      role: 'Head of Operations',
      company: 'Cybernetics Association',
      period: 'Sep 2023 - April 2024',
      description: 'Managed events and logistics for tech-related activities. Coordinated with various departments to ensure smooth execution of programs.',
      logo: 'https://gcdnb.pbrd.co/images/7rZnXjck8goo.png?o=1',
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mx-auto">Experience</h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            My professional journey across design, technology, and entrepreneurship.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="timeline-item"
            >
              <div className="timeline-dot" />
              <div className="ml-6 mb-10">
                <div className="flex items-center mb-2">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-primary">
                    <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{exp.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
