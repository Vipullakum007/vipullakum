import React from 'react';
import { Award, Code2, Trophy } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "LeetCode Rating: 1620",
      description: "Solved 300+ coding problems",
      icon: Code2,
      link: "https://leetcode.com/vipul_lakum_02"
    },
    {
      title: "CodeChef Rating: 1465",
      description: "Active competitive programmer",
      icon: Trophy,
      link: "https://www.codechef.com/users/vipul_lakum"
    }
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Achievements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <a
              key={index}
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <achievement.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{achievement.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;