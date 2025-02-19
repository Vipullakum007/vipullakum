import React, { useState } from 'react';
import { Github, ExternalLink, Code2, Database, Layout, Server } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      id: 1,
      title: "DocScheduler",
      description: "Doctor Appointment Booking System built with Django and Python. Features include real-time availability, appointment management, and automated reminders.",
      techStack: ["Django", "Python", "PostgreSQL"],
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
      github: "https://github.com/Vipullakum007/DocScheduler",
      demo: "https://github.com/Vipullakum007/DocScheduler"
    },
    {
      id: 2,
      title: "Car Rental System",
      description: "Full-stack car rental application using Spring Boot and Hibernate. Includes booking management, payment integration, and admin dashboard.",
      techStack: ["Spring Boot", "Java", "Hibernate", "MySQL", "ThyemeLeaf"],
      category: "backend",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&h=500&fit=crop",
      github: "https://github.com/Vipullakum007/CarRentelApp",
      demo: "https://github.com/Vipullakum007/CarRentelApp"
    },
    {
      id: 3,
      title: "Expense-Income Tracker",
      description: "Web-based financial tracking application with data visualization, budget planning, and expense categorization features.",
      techStack: ["HTML", "CSS", "JavaScript", "SQL"],
      category: "frontend",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop",
      github: "https://github.com/Vipullakum007/Expense-Income-Tracker",
      demo: "https://expense-income-tracker-7.netlify.app/"
    },
    {
      id: 4,
      title: "CoCode",
      description: "Real-time collaborative code editor built with MERN Stack. Features include live coding, chat, and code execution.",
      techStack: ["MongoDB", "Express", "React", "Node.js"],
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop",
      github: "https://github.com/Vipullakum007/CoCode",
      demo: "https://github.com/Vipullakum007/CoCode"
    },
    {
      id: 5,
      title: "Classync",
      description: "",
      techStack: ["React", "SpringBoot", "ML"],
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop",
      github: "https://github.com/Kris0011/Classync",
      demo: "https://github.com/Kris0011/Classync"
    }
  ];

  const filters = [
    { id: 'all', label: 'All', icon: Code2 },
    { id: 'frontend', label: 'Frontend', icon: Layout },
    { id: 'backend', label: 'Backend', icon: Database },
    { id: 'fullstack', label: 'Full Stack', icon: Server }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const filteredProjects = projects.filter(project =>
    activeFilter === 'all' ? true : project.category === activeFilter
  );

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={projectVariants}
            className="text-3xl font-bold text-center mb-12 dark:text-white"
          >
            Projects
          </motion.h2>

          {/* Filters */}
          <motion.div
            variants={projectVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${activeFilter === filter.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:shadow-md'
                  }`}
              >
                <filter.icon className="w-5 h-5" />
                {filter.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  variants={projectVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg transition-shadow hover:shadow-xl"
                >
                  {/* Project Image */}
                  <motion.div
                    className="relative h-48 overflow-hidden group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-4 left-4 right-4 flex justify-end gap-3">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;