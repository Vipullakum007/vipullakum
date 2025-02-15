import React from 'react';
import { GraduationCap, School } from 'lucide-react';

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

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 text-center">
            I'm a Computer Science Engineering student passionate about web development and problem solving.
            Currently pursuing my B.Tech degree, I focus on creating efficient and innovative solutions
            while continuously learning new technologies.
          </p>
          
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">Education</h3>
            {education.map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold dark:text-white">{item.degree}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{item.institution}</p>
                    <div className="flex justify-between mt-2 text-sm text-gray-500 dark:text-gray-400">
                      <span>{item.year}</span>
                      <span>{item.score}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;