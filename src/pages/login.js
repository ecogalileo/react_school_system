import React from "react";
import { Link } from "react-router-dom";
// import HomeNavbar from "../components/HomeNavbar";

const login = () => {
  return (
    <>
      {/* <HomeNavbar /> */}
      <div class='min-h-screen bg-gray-200 flex items-center'>
        <div class='container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300'>
          <div class='py-12 p-10 bg-white rounded-xl'>
            <div class='flex justify-center mb-4'>
              <Link to='/'>
                <img
                  src={
                    "https://www.feu.edu.ph/wp-content/themes/feu_theme2019/assets/images/logo_white2.png"
                  }
                  alt='Logo'
                  className='h-full rounded mb-1 shadow'
                ></img>
              </Link>
            </div>
            <div class='mb-6'>
              <label
                class='mr-4 pl-2 text-gray-700 font-bold inline-block mb-2'
                for='name'
              >
                Username
              </label>
              <input
                type='text'
                class='border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-yellow-300 rounded'
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
                class='border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-yellow-300 rounded'
                placeholder='Your password'
              />
            </div>
            <Link className='text-sm text-gray-700 inline-block mt-4 hover:text-indigo-600 hover:underline transition duration-200'>
              Forgot password
            </Link>
            <Link to='/AdminDashboard'>
              <button class='w-full mt-6 text-yellow-300 font-bold bg-green-600 py-3 rounded-md hover:bg-green-700 transition duration-300'>
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
