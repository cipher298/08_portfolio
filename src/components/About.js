/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col h-screen gap-y-10 lg:flex-row lg:items-center lg:gap-x-10 lg:gap-y-0">
          {/* img */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            className="lg:flex-1 bg-about bg-contain bg-no-repeat h-[200px] lg:h-[640px] mix-blend-lighten bg-top"
          ></motion.div>

          {/* text */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <p className="mb-4">
              My strengths are the ability to learn, recognize problems quickly,
              and persevere in solving problems. My weakness is that I don't
              have much work experience and this will improve with each passing
              day.
            </p>
            <h3 className="mb-4 h4 lg:h3">
              Bachelor's Degree from HUTECH <br /> (2018-2022)
            </h3>

            {/* start */}
            <div className="flex mb-6 gap-x-6 lg:gap-x-10">
              <div>
                <div className="flex">
                  <div className="text-[20px] lg:text-[40px] font-tertiary text-gradient mb-2">
                    {inView ? <CountUp start={0} end={3} duration={6} /> : null}
                    .
                  </div>
                  <div className="text-[20px] lg:text-[40px] font-tertiary text-gradient mb-2">
                    {inView ? <CountUp start={0} end={3} duration={8} /> : null}
                    /4 GPA
                  </div>
                </div>
              </div>
            </div>

            {/* contact */}
            <div className="flex items-center gap-x-8">
              <Link
                to="contact"
                activeClass="active"
                smooth={true}
                spy={true}
                className="flex items-center justify-center cursor-pointer"
              >
                <button className="btn btn-lg">Contact Me</button>
              </Link>

              <a
                href="https://drive.google.com/file/d/1I2AVHBHW684D2lXY6SPDq0ezzYaF1nD_/view?usp=sharing"
                className="text-gradient btn-link"
              >
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
