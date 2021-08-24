import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Dropdown from './Dropdown';
const HomeNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.addEventListener('resize', hideMenu);
    };
  });
  return (
    <div>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
    </div>
  );
};

export default HomeNavbar;
