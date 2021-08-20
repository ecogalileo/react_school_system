import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ toggle }) => {
  return (
    <nav
      className='flex justify-between items-center h-16 bg-white text-black
    relative shadow-sm font-mono bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400'
      role='navigation'
    >
      <Link to='/' className='md:pl-8 text-3xl text-black'>
        LOREM IPSUM SCHOOL
      </Link>
      <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>
      <div className='pr-8 text-black md:block hidden'>
        <Link className='text-3xl p-4' to='/'>
          Home
        </Link>
        <Link className='text-3xl p-4' to='/menu'>
          Events
        </Link>
        <Link className='text-3xl p-4' to='/about'>
          About
        </Link>
        <Link className='text-3xl p-4' to='/contact'>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
