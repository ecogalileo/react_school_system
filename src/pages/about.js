import React from 'react';
import HomeNavbar from '../components/HomeNavbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <HomeNavbar />
      <div className='h-screen flex justify-center items-center bg-yellow-300'>
        <h1 className='lg:text-8xl md:text-6xl sm:text-3xl text-3xl uppercase font-black'>
          About Page
        </h1>
      </div>
      <Footer />
    </>
  );
};

export default About;
