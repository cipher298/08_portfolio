import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaVuejs,
  FaNodeJs,
  FaReact,
  FaGit,
  FaGithub,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiBootstrap,
  SiNextdotjs,
  SiJquery,
} from 'react-icons/si';

const Work = () => {
  const excellent = [
    { icon: <FaHtml5 />, name: 'HTML' },
    { icon: <FaCss3 />, name: 'CSS' },
    { icon: <FaJs />, name: 'JavaScript' },
  ];

  const intermediate = [
    { icon: <SiTailwindcss />, name: 'Tailwind' },
    { icon: <SiBootstrap />, name: 'Bootstrap' },
    { icon: <FaFigma />, name: 'Figma' },
    { icon: <FaGit />, name: 'Git' },
    { icon: <FaGithub />, name: 'GitHub' },
    { icon: <SiJquery />, name: 'Jquery' },
  ];

  const beginner = [
    { icon: <FaReact />, name: 'ReactJs' },
    { icon: <FaVuejs />, name: 'VueJs' },
    { icon: <SiNextdotjs />, name: 'NextJs' },
    { icon: <FaNodeJs />, name: 'NodeJs' },
  ];

  return (
    <section className="section" id="skill">
      <div className="container mx-auto">
        <div className="flex flex-col h-[84vh] justify-center items-center lg:flex-row gap-x-10">
          <div className="flex flex-col items-center flex-1 justify-around lg:gap-8 lg:mb-0">
            <motion.div
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h2 className="leading-tight h2 text-accent">My Skills</h2>
            </motion.div>

            {/* Excellent skills */}
            <div className="flex flex-col w-full justify-center items-center">
              <motion.div
                variants={fadeIn('right', 0.1)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h3 className="h3 text-gradient text-center">
                  Excellent skills
                </h3>

                <ul className="flex gap-9 lg:gap-16">
                  {excellent.map((skill, index) => (
                    <li key={index} className="relative group">
                      <div className="rounded-xl flex justify-center items-center">
                        <div className="text-6xl lg:text-8xl group-hover:text-accent transition-all duration-300 relative">
                          {skill.icon}
                          <span className="absolute top-[-3rem] left-1/2 transform -translate-x-1/2 bg-gray-800 text-gray-100 px-4 py-2 text-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Intermediate skills */}
            <div className="flex flex-col w-full justify-center items-center">
              <motion.div
                variants={fadeIn('right', 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h3 className="h3 text-gradient text-center">
                  Intermediate skills
                </h3>

                <ul className="grid grid-cols-3 lg:grid-cols-6 gap-9 lg:gap-16">
                  {intermediate.map((skill, index) => (
                    <li key={index} className="relative group">
                      <div className="rounded-xl flex justify-center items-center">
                        <div className="text-6xl lg:text-8xl group-hover:text-accent transition-all duration-300 relative">
                          {skill.icon}
                          <span className="absolute top-[-3rem] left-1/2 transform -translate-x-1/2 bg-gray-800 text-gray-100 px-4 py-2 text-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Beginner skills */}
            <div className="flex flex-col w-full justify-center items-center">
              <motion.div
                variants={fadeIn('right', 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h3 className="h3 text-gradient text-center">
                  Beginner skills
                </h3>

                <ul className="flex gap-9 lg:gap-16">
                  {beginner.map((skill, index) => (
                    <li key={index} className="relative group">
                      <div className="rounded-xl flex justify-center items-center">
                        <div className="text-6xl lg:text-8xl group-hover:text-accent transition-all duration-300 relative">
                          {skill.icon}
                          <span className="absolute top-[-3rem] left-1/2 transform -translate-x-1/2 bg-gray-800 text-gray-100 px-4 py-2 text-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
