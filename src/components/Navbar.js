import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ toggle }) => {
  return (
    <nav
      className='flex justify-between items-center h-16 bg-white text-black
    relative shadow-sm font-mono bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400'
      role='navigation'
    >
      <Link
        to='/'
        className='lg:pl-8 md:pl-6 sm:pl-4 lg-text-6xl md-text-4xl sm-text-3xl text-2xl text-black'
      >
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
        <Link to='/login' className='text-3xl p-4'>
          <button class='md:bg-transparent transform hover:scale-110 motion-reduce:transform-none'>
            <svg
              className='w-10 h-10'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
