import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center text-black items-center bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link className='p-4' to='/'>
        Home
      </Link>
      <Link className='p-4' to='/menu'>
        Events
      </Link>
      <Link className='p-4' to='/about'>
        About
      </Link>
      <Link className='p-4' to='/contact'>
        Contact
      </Link>
    </div>
  );
};

export default Dropdown;
