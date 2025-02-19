import React from 'react';
import { GraduationCap, School, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Dharmsinh Desai University",
      year: "2022-2026",
      score: "CGPA: 9.11",
      icon: GraduationCap,
      color: "from-blue-500 to-indigo-500"
    },
    {
      degree: "Class 12",
      institution: "Vivekanand Science Academy",
      year: "2022",
      score: "88.5%",
      icon: School,
      color: "from-purple-500 to-pink-500"
    },
    {
      degree: "Class 10",
      institution: "Shikhar Public School",
      year: "2020",
      score: "90.33%",
      icon: School,
      color: "from-emerald-500 to-teal-500"
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              About Me
            </h2>
            <div className="relative">
              <motion.p
                variants={itemVariants}
                className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto"
              >
                I'm a Computer Science Engineering student passionate about web development and problem solving.
                Currently pursuing my B.Tech degree, I focus on creating efficient and innovative solutions
                while continuously learning new technologies.
              </motion.p>
              <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-blue-500 dark:border-blue-400 opacity-50" />
              <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-purple-500 dark:border-purple-400 opacity-50" />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold dark:text-white">Education Timeline</h3>
              <div className="h-px flex-1 mx-6 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
            </div>
            
            {education.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, translateX: 10 }}
                className="relative"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color}`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-xl font-bold dark:text-white">{item.degree}</h4>
                          <p className="text-gray-600 dark:text-gray-300 mt-1">{item.institution}</p>
                        </div>
                        <span className="px-4 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300">
                          {item.year}
                        </span>
                      </div>
                      <div className="mt-4 flex items-center gap-2">
                        <div className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium">
                          {item.score}
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
                {index < education.length - 1 && (
                  <div className="absolute left-8 top-full h-8 w-px bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;