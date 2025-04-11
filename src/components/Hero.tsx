import React from 'react';
import { Github, Linkedin, Code, ArrowRight, FileDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import ProfilePhoto from "../assets/profile_photo.jpg";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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
        stiffness: 100,
        damping: 10
      }
    }
  };

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5
      }
    }
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,255,0.1),transparent_50%)]"></div>
      </motion.div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="flex-1">
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-4 dark:text-white"
            >
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Vipul Lakum
              </span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 h-[60px]"
            >
              <TypeAnimation
                sequence={[
                  'Web Developer',
                  2000,
                  'Problem Solver',
                  2000,
                  'Tech Enthusiast',
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-600 dark:text-gray-400 mb-8 text-lg"
            >
              Computer Science Engineering Student at Dharmsinh Desai University
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-purple-500/30"
              >
                View Projects
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors"
              >
                Hire Me
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/1aHVthcgDXAFveSEuxu4Wrcbcr7EslHmA/view?usp=sharing"
                download="Vipul_Lakum_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <FileDown className="w-5 h-5 mr-2" />
                Resume
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex space-x-4">
              {[
                { icon: Github, href: "https://github.com/Vipullakum007" },
                { icon: Linkedin, href: "https://linkedin.com" },
                { icon: Code, href: "https://leetcode.com/vipul_lakum_02" }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  variants={socialIconVariants}
                  whileHover="hover"
                >
                  <item.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="flex-1 flex justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 blur-lg"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <img
                src={ProfilePhoto}
                alt="Vipul Lakum"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg ring-4 ring-white dark:ring-gray-800 relative z-10"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;