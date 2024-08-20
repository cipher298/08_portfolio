import React from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboard, BsBriefcase, BsChatSquare } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className="fixed z-50 w-full overflow-hidden bottom-2 lg:bottom-6 ">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-16 backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
          {/* home */}
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center"
          >
            <BiHomeAlt />
          </Link>

          {/* about */}
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center"
          >
            <BiUser />
          </Link>

          {/* services */}
          <Link
            to="services"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center"
          >
            <BsClipboard />
          </Link>

          {/* work */}
          <Link
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center"
          >
            <BsBriefcase />
          </Link>

          {/* contact */}
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center"
          >
            <BsChatSquare />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
