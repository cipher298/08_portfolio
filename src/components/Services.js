/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const servives = [
  {
    name: 'IIJ',
    description:
      'The IGP Project is a website management tool used to sell browser cookies to many companies.',
    link: 'Learn more',
  },
  {
    name: 'JOBKOREA',
    description:
      'The JK23 Project is a job search website improvement project in Korea.',
    link: 'Learn more',
  },
  {
    name: 'E2H',
    description:
      'The E2H project is a hospital and pharmacy management project.',
    link: 'Learn more',
  },
  {
    name: 'SDC',
    description:
      'The SDC project is a project to research and build new screens, functions, and test screens on the old system.',
    link: 'Learn more',
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* text & image */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{
              once: false,
              amount: 0.4,
            }}
            className="p-6 mx-auto bg-no-repeat bg-contain lg:bg-services lg:bg-bottom mix-blend-lighten lg:mb-0"
          >
            <h2 className="h2 text-accent">What I Do</h2>
            <h3 className="h3 lg:max-w-[300px] mb-6">
              FPT Software Ho Chi Minh - Since 2022
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>

          {/* services */}
          <motion.div
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{
              once: false,
              amount: 0.4,
            }}
            className="flex-1"
          >
            {/* service list */}
            <div className="">
              {servives.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[120px] mb-6 flex lg:gap-10"
                    key={index}
                  >
                    <div>
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-2">
                        {name}
                      </h4>
                      <p className="leading-tight font-secondary">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col items-end justify-center flex-1">
                      <button className="flex items-center justify-center w-6 h-6 mb-2 btn">
                        <BsArrowRight />
                      </button>
                      <button className="text-sm text-gradient lg:text-nowrap">
                        {link}
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

export default Services;
