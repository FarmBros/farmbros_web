import React from 'react';
import Navlinks from './Navlinks';
import LoginButton from './LoginButton';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo" />
      <Navlinks />
      <LoginButton />
    </nav>
  );
};

export default Navbar;
