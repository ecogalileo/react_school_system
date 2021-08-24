import React from 'react';
import { Link } from 'react-router-dom';
import bg_image from '../images/bg_image.jpg';

const Hero = () => {
  return (
    <div
      className='bg-fixed bg-no-repeat bg-cover bg-center h-screen flex flex-col justify-center items-center text-center pb-8'
      style={{ backgroundImage: `url(${bg_image})` }}
    >
      <h1 className='lg:text-6xl md:text-4xl sm:text-3xl text-3xl font-black mb-14 bg-gradient-to-tl from-yellow-200 via-green-200 to-green-500 text-gray-800 p-4 mt-72 rounded-lg opacity-90'>
        FEU ELEMENTARY SCHOOL
      </h1>
      <Link
        className=' md:py-5 sm:py-5 py-5 md:px-8 sm:px-8 px-8 mt-2 bg-gradient-to-tl from-yellow-200 via-green-200 to-green-500 text-gray-800 rounded-full md:text-4xl hover:bg-green-500 transition duration-300 ease-in-out flex items-center animate-bounce opacity-90'
        to='/RegistrationPage'
      >
        Enroll Now
      </Link>
    </div>
  );
};

export default Hero;
