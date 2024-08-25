/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a className="w-20" href="#">
            <img src={logo} alt="logo"></img>
          </a>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="flex items-center justify-center cursor-pointer"
          >
            <button className="btn btn-sm">Work With Me</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
