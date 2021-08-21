import React from "react";
import { Link } from "react-router-dom";
import HomeNavbar from "../components/HomeNavbar";

const login = () => {
  return (
    <>
      <HomeNavbar />
      <div class='min-h-screen bg-gray-200 flex items-center'>
        <div class='container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300'>
          <div class='py-12 p-10 bg-white rounded-xl'>
            <div class='mb-6'>
              <label
                class='mr-4 pl-2 text-gray-700 font-bold inline-block mb-2'
                for='name'
              >
                Username
              </label>
              <input
                type='text'
                class='border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded'
                placeholder='Your username'
              />
            </div>
            <div class=''>
              <label
                class='mr-4 pl-2 text-gray-700 font-bold inline-block mb-2'
                for='name'
              >
                Password
              </label>
              <input
                type='text'
                class='border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded'
                placeholder='Your password'
              />
            </div>
            <Link className='text-sm text-gray-700 inline-block mt-4 hover:text-indigo-600 hover:underline transition duration-200'>
              Forgot password
            </Link>
            <Link to='/dashboard'>
              <button class='w-full mt-6 text-indigo-50 font-bold bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300'>
                LOGIN
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
