import React from 'react';
import HomeNavbar from '../components/HomeNavbar';
import Footer from '../components/Footer';
import bg_image from '../images/bg_image.jpg';

const About = () => {
  return (
    <>
      <HomeNavbar />
      <div
        className='bg-fixed bg-no-repeat bg-cover bg-bottom h-full flex flex-col justify-center items-center text-center p-80'
        style={{
          backgroundImage: `url(${bg_image})`,
        }}
      ></div>
      <div class='md:container md:mx-auto'>
        <h1 className='md:mx-auto lg:text-6xl md:text-4xl sm:text-3xl text-3xl font-black bg-green-800 text-white text-center rounded-full py-3 px-6 mt-8 rounded-md opacity-90'>
          <p>MISSION</p>
        </h1>
        <div className='bg-fixed bg-no-repeat bg-cover bg-yellow-400 bg-bottom h-full flex flex-col justify-center items-center text-center rounded-lg p-8 mb-8 mt-2 mx-auto'>
          <h1 className='lg:text-2xl md:text-2xl sm:text-2xl text-2xl'>
            FEU Elementary School provides quality education that prepares its
            graduates for the world of work, for college, and for life. Its
            curriculum is student-centered, values-oriented, and
            competency-laden; its delivery methods are technology-enabled, and
            its learning activities are project-based.
          </h1>
        </div>
        <h1 className='md:mx-auto lg:text-6xl md:text-4xl sm:text-3xl text-3xl font-black bg-green-800 text-white text-center rounded-full py-3 px-6 mt-8 rounded-md opacity-90'>
          <p>VISION</p>
        </h1>
        <div className='bg-fixed bg-no-repeat bg-cover bg-yellow-400 bg-bottom h-full flex flex-col justify-center items-center text-center rounded-lg p-8 mb-8 mt-2 mx-auto'>
          <h1 className='lg:text-2xl md:text-2xl sm:text-2xl text-2xl'>
            FEU Elementary School graduates flourish in high-school and lead
            meaningful and rewarding lives. They are critical thinkers, good
            communicators, and digitally literate lifelong learners; morally
            upright persons; and socially responsible citizens.
          </h1>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
