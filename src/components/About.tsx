import React from 'react';
import { GraduationCap, School } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Dharmsinh Desai University",
      year: "2022-2026",
      score: "CGPA: 9.32",
      icon: GraduationCap
    },
    {
      degree: "Class 12",
      institution: "Vivekanand Science Academy",
      year: "2022",
      score: "88.5%",
      icon: School
    },
    {
      degree: "Class 10",
      institution: "Shikhar Public School",
      year: "2020",
      score: "90.33%",
      icon: School
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
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

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12 dark:text-white"
          >
            About Me
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-300 text-lg mb-12 text-center leading-relaxed"
          >
            I'm a Computer Science Engineering student passionate about web development and problem solving.
            Currently pursuing my B.Tech degree, I focus on creating efficient and innovative solutions
            while continuously learning new technologies.
          </motion.p>

          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold mb-6 dark:text-white">Education</h3>
            {education.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md transform transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                    <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold dark:text-white">{item.degree}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{item.institution}</p>
                    <div className="flex justify-between mt-2 text-sm text-gray-500 dark:text-gray-400">
                      <span>{item.year}</span>
                      <span className="font-medium text-blue-600 dark:text-blue-400">{item.score}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;