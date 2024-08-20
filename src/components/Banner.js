/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import avatar from '../assets/avatar.png';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section
      className="h-screen pb-[100px] lg:min-h-[70vh] lg:pb-[200px] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col-reverse gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            {/* name */}
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{
                once: false,
                amount: 0.7,
              }}
              className="text-[55px] font-bold mb-8 lg:text-[80px]"
            >
              Võ Xuân<span className="ml-2">Thịnh</span>
            </motion.h1>

            {/* title */}
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{
                once: false,
                amount: 0.7,
              }}
              className="mb-6 text-[36px] lg:text-[40px] font-secondary 
            font-semibold uppercase leading-[1]"
            >
              <span className="mr-4 text-white">I am a</span>
              <TypeAnimation
                sequence={['Developer', 2000, 'Engineer', 2000, 'Coder', 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>

            {/* description */}
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{
                once: false,
                amount: 0.7,
              }}
              className="max-w-lg mx-auto mb-6 lg:mx-0"
            >
              With 3 years of experience in Web Development, I have 2 years of
              experience in HTML, CSS, Javascript and 6 month of Vuejs and 6
              month of Reactjs.
            </motion.p>

            {/* contact */}
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{
                once: false,
                amount: 0.7,
              }}
              className="flex items-center mx-auto mb-6 max-w-max gap-x-6 lg:mx-0"
            >
              <button className="btn btn-lg">Contact Me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </motion.div>

            {/* socials */}
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              whileInView={'show'}
              viewport={{
                once: false,
                amount: 0.7,
              }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaGithub />
              </a>
            </motion.div>
          </div>

          {/* images */}
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            whileInView={'show'}
            className="mx-auto lg:flex flex-1 max-w-[200px] lg:max-w-[360px] mix-blend-lighten"
          >
            <img src={avatar} alt="avatar"></img>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
