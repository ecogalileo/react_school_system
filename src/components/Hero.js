import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className='bg-fixed bg-no-repeat bg-cover bg-center h-screen flex flex-col justify-center items-center mb-8'
      style={{
        backgroundImage:
          'url("https://www.feu.edu.ph/wp-content/uploads/2019/06/SOCMED_Card.jpg")',
      }}
    >
      <h1 className='lg:text-6xl md:text-4xl sm:text-3xl text-3xl font-black mb-14'>
        LOREM IPSUM
      </h1>
      <Link
        className=' md:py-5 sm:py-5 py-5 md:px-8 sm:px-8 px-8 mt-2 bg-green-700 text-yellow-300 rounded-full md:text-4xl hover:bg-green-500 transition duration-300 ease-in-out flex items-center animate-bounce'
        to='/RegistrationPage'
      >
        Enroll Now
      </Link>
    </div>
  );
};

export default Hero;
