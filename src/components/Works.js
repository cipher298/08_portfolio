import React, { useState } from 'react';
import { MdExpandMore } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '../variants';

const workList = [
  {
    name: 'E-Learning',
    description:
      'The E-Learning Project is a website that provides users with courses and tests to assess their abilities.',
    role: 'Front-End Developer',
    tech: 'ReactJs, NextJs, Tailwind, Figma, Jira, Git',
    responsibility: {
      res1: 'Clarify requirements and design application screens',
      res2: 'Perform coding and code review',
      res3: 'Execute Testing',
    },
    toggle: 'Show more',
  },
  {
    name: 'IIJ',
    description:
      'The IGP Project is a website management tool used to sell browser cookies to many companies.',
    role: 'Front-End Developer',
    tech: 'HTML, SCSS, JavaScript, Vuejs, Nuxt3, Adobe, Backlog, Git',
    responsibility: {
      res1: 'Implement new features, web screens following code conventions of the project',
      res2: 'Integrate third-party APIs to screen features',
      res3: 'Investigating root causes, finding solutions, and resolving problems',
      res4: 'Do perform testing',
    },
    toggle: 'Show more',
  },
  {
    name: 'JOBKOREA',
    description:
      'The JK23 Project is a job search website improvement project in Korea.',
    role: 'Front-End Developer',
    tech: 'HTML, CSS, JavaScript, Figma, Backlog, Git',
    responsibility: {
      res1: 'Build new screens',
      res2: 'Do perform testing',
      res3: 'Analyze requirements and find solutions to fix errors',
    },
    toggle: 'Show more',
  },
  {
    name: 'E2H',
    description:
      'The E2H project is a hospital and pharmacy management project.',
    role: 'Front-End Developer',
    tech: 'HTML, CSS, JavaScript, Jira, Git',
    responsibility: {
      res1: 'Additional features to cover some built-in functions in Ext JS',
      res2: 'Develop new function/execute test',
      res3: 'Estimation detail for new screens',
      res4: 'Support & resolve technical issues/business issues for new members',
      res5: 'Implement new features following the request of customers',
    },
    toggle: 'Show more',
  },
  {
    name: 'SDC',
    description:
      'The SDC project is a project to research and build new screens, functions, and test screens on the old system.',
    role: 'Front-End Developer',
    tech: 'HTML, CSS, JavaScript, Jira, Git',
    responsibility: {
      res1: 'Clarify requirements and design application architecture',
      res2: 'Perform coding and code review',
      res3: 'Execute Testing',
    },
    toggle: 'Show more',
  },
];

const Works = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* text & image */}
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{
              once: false,
              amount: 0.4,
            }}
            className="p-2 lg:p-6 mx-auto bg-no-repeat bg-contain lg:bg-work lg:bg-bottom mix-blend-lighten lg:mb-0"
          >
            <h2 className="h2 text-accent">What I Do</h2>
            <h3 className="h3 lg:max-w-[300px] mb-2 lg:mb-6">
              FPT Software Ho Chi Minh - Since 2022
            </h3>
          </motion.div>

          {/* works */}
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{
              once: false,
              amount: 0.4,
            }}
            className="flex-1"
          >
            {/* work list */}
            <div>
              {workList.map((work, index) => {
                const {
                  name,
                  description,
                  toggle,
                  role,
                  responsibility,
                  tech,
                } = work;
                const responsibilityList = Object.values(responsibility);

                return (
                  <div
                    className="border-b border-white/20 mb-6 flex lg:gap-10"
                    key={index}
                  >
                    <div>
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-2">
                        {name}
                      </h4>
                      <p className="leading-tight font-secondary mb-2">
                        {description}
                      </p>
                      <AnimatePresence>
                        {expandedIndex === index && (
                          <motion.div
                            className="mt-2 ml-2 text-gray-400"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p>
                              <span className="font-semibold">Role: </span>
                              {role}
                            </p>
                            <div>
                              <p className="font-semibold">Responsibilities:</p>
                              <ul className="list-disc list-inside ml-4">
                                {responsibilityList.map((item, idx) => (
                                  <li key={idx}>{item}</li>
                                ))}
                              </ul>
                            </div>
                            <p>
                              <span className="font-semibold">
                                Technology:{' '}
                              </span>
                              {tech}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <button
                        onClick={() => handleToggle(index)}
                        className="flex items-center mt-2 text-accent"
                      >
                        {expandedIndex === index ? 'Show less' : toggle}
                        <motion.div
                          className="ml-2"
                          animate={{
                            rotate: expandedIndex === index ? 180 : 0,
                          }}
                          transition={{ duration: 0.6 }}
                        >
                          <MdExpandMore />
                        </motion.div>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Works;
