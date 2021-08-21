import React from "react";

import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className='relative md:flex'>
      {/* <!-- mobile menu bar --> */}
      <div className='bg-gray-800 text-gray-100 flex justify-between md:hidden'>
        {/* <!-- logo --> */}
        <Link to='/DashBoard' className='block p-4 text-white font-bold'>
          Lorem School
        </Link>
        {/* <!-- mobile menu button --> */}
        <button className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-700'>
          <svg
            className='h-5 w-5'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </div>

      {/* <!-- sidebar --> */}
      <div className='min-h-screen sidebar bg-blue-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out'>
        {/* <!-- logo --> */}
        <Link
          to='/DashBoard'
          className='text-white flex items-center space-x-2 px-4'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fill-rule='evenodd'
              d='M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z'
              clip-rule='evenodd'
            />
          </svg>
          <span className='text-2xl font-extrabold'>Lorem School</span>
        </Link>

        {/* <!-- nav --> */}
        <nav>
          <Link
            to='/DashBoard'
            className='block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white'
          >
            Dashboard
          </Link>
          <Link
            to='/AdminSidebar'
            className='block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white'
          >
            Students
          </Link>
          <Link
            to='/AdminSidebar'
            className='block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white'
          >
            Teachers
          </Link>
          <Link
            to='/AdminSidebar'
            className='block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white'
          >
            Events
          </Link>
          <hr className='border-1 mt-8'></hr>
          <Link
            to='/login'
            className='block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white'
          >
            Logout
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default AdminSidebar;
