/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a className="w-20" href="#">
            <img src={logo} alt="logo"></img>
          </a>
          <button className="btn btn-sm">Work With Me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
