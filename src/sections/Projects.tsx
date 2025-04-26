import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Eye } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Swappy – Access More, Own Less',
      category: 'ui-ux',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Innovative e-commerce rental platform. UI/UX case study with wireframes and prototype (in progress).',
      tags: ['UI/UX', 'Figma', 'Prototyping'],
      link: '#',
      inProgress: true,
    },
    {
      title: 'Spectrum Infotech & Securities',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Built official website for Spectrum Infotech & Securities with modern design and responsive layout.',
      tags: ['Web Development', 'HTML/CSS', 'JavaScript'],
      link: 'https://www.spectruminfotechs.in',
    },
    {
      title: 'E-Cell Social Media Campaign',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Designed a series of social media posts and stories for E-Cell events and initiatives.',
      tags: ['Social Media', 'Graphic Design'],
      link: 'https://www.instagram.com/ecellsju/',
    },
    {
      title: 'Personal Portfolio Website',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Designed and developed a personal portfolio website using React and Tailwind CSS.',
      tags: ['Web Development', 'React', 'Tailwind CSS'],
      link: '#',
    },
    {
      title: 'My work over the years',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Designed event posters and marketing materials for companies & our college.',
      tags: ['Graphic Designer', 'Canva', 'Photoshop'],
      link: 'https://www.notion.so/About-me-770670ea47e74e0ca60906db5b4f923f',
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-light-dark dark:bg-dark-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title mx-auto">Projects</h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            A showcase of my creative work across design, development, and branding.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'ui-ux', 'web', 'design'].map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 dark:bg-dark-lighter text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="project-card group relative overflow-hidden rounded-xl shadow-lg"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Project Details */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-xl font-display font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-200 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.inProgress ? (
                    <span className="text-xs px-3 py-1 bg-yellow-500/20 text-yellow-500 rounded-full">
                      In Progress
                    </span>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-primary hover:bg-primary-dark px-4 py-2 rounded-lg text-sm flex items-center transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" /> View Project
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="btn btn-outline"
          >
            <Eye className="w-5 h-5 mr-2" />
            View Full Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
