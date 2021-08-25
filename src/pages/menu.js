import React from 'react';
import HomeNavbar from '../components/HomeNavbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import flipped_classroom from '../images/flipped_classroom.png';

const Menu = () => {
  return (
    <>
      <HomeNavbar />
      <div
        className='bg-fixed bg-no-repeat bg-cover bg-bottom h-full flex flex-col justify-center items-center text-center'
        style={{
          backgroundImage: `url("https://www.teahub.io/photos/full/1-14195_4k-green-blurred-background-hd-desktop-wallpaper-blur.jpg")`,
        }}
      >
        <h1 className='lg:text-6xl md:text-4xl sm:text-3xl text-3xl font-black mb-48 bg-green-800 text-white p-4 mt-60 rounded-md opacity-90'>
          Latest News & Events
        </h1>
      </div>

      <div className='h-full flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300'>
        <h1 className='lg:text-6xl md:text-4xl sm:text-3xl text-3xl font-black mb-14 rounded-lg opacity-90'>
          News
        </h1>
        <div class='md:container md:mx-auto px-4 md:px-0 max-w-7xl'>
          <div class='mx-0 sm:mx-6'>
            <div class='bg-transparent w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t p-8'>
              <div class='bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t'>
                <div class='flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg pb-8'>
                  <Link
                    to='/menu'
                    class='flex flex-wrap no-underline hover:no-underline'
                  >
                    <img
                      src={flipped_classroom}
                      class='h-full w-full rounded-t pb-6'
                      alt='Flipped classroom'
                    />

                    <div class='w-full font-bold text-xl text-gray-900 px-6 mb-4'>
                      The Flipped Classroom Approach and Social Constructivism
                    </div>
                    <p class='text-gray-800 font-serif text-base px-6 mb-5'>
                      The flipped classroom approach’s main goal is to expose
                      the students to course content before they come to the
                      class through readings and videos. It’s like a learning
                      scaffolding, where the students learn the fundamentals of
                      the lesson and then reinforce them with facts in the class
                      discussions. It also objects to the fact that teachers are
                      no longer the source of knowledge, but rather a
                      facilitator of learning in an online environment. It
                      encourages students to learn at their own pace while
                      collaborating with other students and teachers through the
                      use of technology. Students become active creators of
                      their own learning, or, to put it another way, they learn
                      by doing. In that case, learning is more likely to be
                      retained in the students if they can experience and grasp
                      it in their own unique way. Finally, the learned knowledge
                      is contextualized in the learner’s environment.
                    </p>
                  </Link>
                  <Link
                    className=' md:py-1 sm:py-1 py-1 md:px-2 sm:px-2 px-2 mt-2 mb-8 bg-gray-400 hover:bg-gray-500 text-gray-100 rounded-full md:text-xl text-center opacity-90'
                    to='/menu'
                  >
                    Read more
                  </Link>
                </div>
                <div class='flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6'>
                  <div class='flex flex-row-reverse'>
                    <p class='text-gray-600 text-xs md:text-sm'>
                      August 24, 2021
                    </p>
                  </div>
                </div>
              </div>
              <h1 className='lg:text-6xl md:text-4xl sm:text-3xl text-3xl font-black mb-4 rounded-lg mt-20'>
                Events
              </h1>
              <div class='flex flex-wrap justify-between pt-2 -mx-6'>
                <div class='w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink'>
                  <div class='flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg pb-6'>
                    <Link
                      to='/menu'
                      class='flex flex-wrap no-underline hover:no-underline'
                    >
                      <img
                        src='https://images.squarespace-cdn.com/content/v1/569b4b681c1210c8102de462/1454370992161-5GH53HISHR8ULIREKR2O/image-asset.jpeg?format=1000w'
                        class='h-64 w-full rounded-t pb-6'
                        alt='not available1'
                      />

                      <div class='w-full font-bold text-xl text-gray-900 px-6 pb-3'>
                        Sports Day Event
                      </div>
                      <p class='text-gray-800 font-serif text-base px-6 mb-5'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam at ipsum eu nunc commodo posuere et sit amet
                        ligula.{' '}
                        <Link
                          className=' hover:text-gray-500 text-black rounded-full text-md text-center opacity-90'
                          to='/menu'
                        >
                          Read more...
                        </Link>
                      </p>
                    </Link>
                  </div>
                  <div class='flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6'>
                    <div class='flex flex-row-reverse'>
                      <p class='text-gray-600 text-xs md:text-sm'>
                        August 22, 2021
                      </p>
                    </div>
                  </div>
                </div>

                <div class='w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink'>
                  <div class='flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg pb-6'>
                    <Link
                      to='/menu'
                      class='flex flex-wrap no-underline hover:no-underline'
                    >
                      <img
                        src='https://sjasarq.files.wordpress.com/2015/08/dsc_1398.jpg'
                        class='h-64 w-full rounded-t pb-6'
                        alt='not available2'
                      />

                      <div class='w-full font-bold text-xl text-gray-900 px-6 pb-3'>
                        Buwan ng Wika Celebration
                      </div>
                      <p class='text-gray-800 font-serif text-base px-6 mb-5'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam at ip Aliquam at ipsum eu nunc commodo posuere
                        et sit amet ligula.{' '}
                        <Link
                          className=' hover:text-gray-500 text-black rounded-full text-md text-center opacity-90'
                          to='/menu'
                        >
                          Read more...
                        </Link>
                      </p>
                    </Link>
                  </div>
                  <div class='flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6'>
                    <div class='flex flex-row-reverse'>
                      <p class='text-gray-600 text-xs md:text-sm'>
                        August 21, 2021
                      </p>
                    </div>
                  </div>
                </div>

                <div class='w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink'>
                  <div class='flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg'>
                    <Link
                      to='/menu'
                      class='flex flex-wrap no-underline hover:no-underline'
                    >
                      <img
                        src='https://lh3.googleusercontent.com/proxy/WPcLAIcs3M_Ew2jZ_sVox0b7u6JxsKLjR8SKyqiIk5xIBJAtv7PTBpWMreSTdW4YkcfbnE-HUtkQ3zwlHIHycipXLRv9ILCaQ_42_NlXTuiW1ebyE8OAf16IFSIQtscm'
                        class='h-64 w-full rounded-t pb-6'
                        alt='not available3'
                      />

                      <div class='w-full font-bold text-xl text-gray-900 px-6 pb-3'>
                        Earthquake Drill Exercise
                      </div>
                      <p class='text-gray-800 font-serif text-base px-6 mb-5 text-md'>
                        Lorem ipsum eu nunc commodo posuere et sit amet ligula.{' '}
                        <Link
                          className=' hover:text-gray-500 text-black rounded-full text-md text-center opacity-90'
                          to='/menu'
                        >
                          Read more...
                        </Link>
                      </p>
                    </Link>
                  </div>
                  <div class='flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6'>
                    <div class='flex flex-row-reverse'>
                      <p class='text-gray-600 text-xs md:text-sm'>
                        August 20, 2021
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Menu;
