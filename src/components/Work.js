import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import img1 from '../assets/portfolio-img1.png';
import img2 from '../assets/portfolio-img2.png';
import img3 from '../assets/portfolio-img3.png';

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col items-center lg:flex-row gap-x-10">
          <div className="flex flex-col items-center flex-1 mb-10 lg:items-end gap-y-6 lg:mb-0">
            {/* text */}
            <motion.div
              variants={fadeIn('down', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{
                once: false,
                amount: 0.3,
              }}
            >
              <h2 className="leading-tight h2 text-accent">
                My Latest <br /> Project.
              </h2>
              <p className="mb-6 lg:max-w-sm">
                The IGP Project is a website management tool used to sell
                browser cookies to many companies.
              </p>
              <button className="btn btn-sm">View all projects</button>
            </motion.div>

            {/* images 1 */}
            <motion.div
              variants={fadeIn('down', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{
                once: false,
                amount: 0.3,
              }}
              className="relative overflow-hidden border-2 group border-white/50 lg:w-96 rounded-xl"
            >
              {/* overlay */}
              <div className="absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/70"></div>

              {/* img */}
              <img
                className="transition-all duration-500 group-hover:scale-125"
                src={img1}
                alt="img1"
              />

              {/* pretitle */}
              <div className="absolute z-50 transition-all duration-500 -bottom-full left-12 group-hover:bottom-24">
                <span className="text-gradient">UI/UX Design</span>
              </div>

              {/* title */}
              <div className="absolute z-50 transition-all duration-700 -bottom-full left-12 group-hover:bottom-14">
                <span className="text-3xl text-white">IIG Project</span>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col justify-end flex-1 gap-y-10 lg:self-end">
            {/* images 2 */}
            <motion.div
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{
                once: false,
                amount: 0.3,
              }}
              className="relative overflow-hidden border-2 group border-white/50 lg:w-96 rounded-xl"
            >
              {/* overlay */}
              <div className="absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/70"></div>

              {/* img */}
              <img
                className="transition-all duration-500 group-hover:scale-125"
                src={img2}
                alt="img2"
              />

              {/* pretitle */}
              <div className="absolute z-50 transition-all duration-500 -bottom-full left-12 group-hover:bottom-24">
                <span className="text-gradient">UI/UX Design</span>
              </div>

              {/* title */}
              <div className="absolute z-50 transition-all duration-700 -bottom-full left-12 group-hover:bottom-14">
                <span className="text-3xl text-white">IIG Project</span>
              </div>
            </motion.div>

            {/* images 3 */}
            <motion.div
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{
                once: false,
                amount: 0.3,
              }}
              className="relative overflow-hidden border-2 group border-white/50 lg:w-96 rounded-xl"
            >
              {/* overlay */}
              <div className="absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/70"></div>

              {/* img */}
              <img
                className="transition-all duration-500 group-hover:scale-125"
                src={img3}
                alt="img3"
              />

              {/* pretitle */}
              <div className="absolute z-50 transition-all duration-500 -bottom-full left-12 group-hover:bottom-24">
                <span className="text-gradient">UI/UX Design</span>
              </div>

              {/* title */}
              <div className="absolute z-50 transition-all duration-700 -bottom-full left-12 group-hover:bottom-14">
                <span className="text-3xl text-white">IIG Project</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
