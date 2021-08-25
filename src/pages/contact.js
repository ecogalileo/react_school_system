import React from 'react';
import HomeNavbar from '../components/HomeNavbar';
import Footer from '../components/Footer';
import contact_us from '../images/contact_us.jfif';
import { Link } from 'react-router-dom';

const contact = () => {
  return (
    <>
      <HomeNavbar />
      <div
        className='bg-fixed bg-no-repeat bg-cover bg-bottom h-full flex flex-col justify-center items-center text-center pt-28 pb-44'
        style={{
          backgroundImage: `url(${contact_us})`,
        }}
      >
        <p className='lg:text-6xl md:text-4xl sm:text-3xl text-3xl font-black mb-48 bg-transparent text-white p-4 mt-60 rounded-md opacity-90'></p>
      </div>

      {/* start of the container section */}
      <div className='md:container md:mx-auto mb-20'>
        {/* contact us pill rounded */}
        <div className='w-3/6 mx-auto bg-green-400 rounded-full py-3 px-6 mt-8 text-center'>
          <h3 className='text-4xl font-black'>Contact us</h3>
          {/* end of contact us pill rounded */}
        </div>

        {/* start of contact us contents */}
        <div className='mt-5'>
          <p className='text-2xl'>
            In our efforts to serve you better as we work from our homes during
            the quarantine, you may contact the following numbers during office
            hours:
          </p>

          {/* card box 1 */}
          <div className='w-4/6 bg-green-700 mx-auto px-8 mt-8 mb-24 py-8'>
            <h3 className='text-2xl text-yellow-400 font-black'>
              Admission Support Team
            </h3>

            <p className='text-2xl text-gray-200 mx-8'>
              To further assist you in the admission and enrollment process, you
              may reach us through the following contact numbers
            </p>

            <br />

            <h3 className='text-2xl text-yellow-400 font-black'>
              For Application and Reservation:
            </h3>

            <br />

            <p className='text-2xl text-gray-200'>
              <b>RR - </b> (0975) 568 3250
              <br />
              <b>Jencille - </b> (0999) 393 0931
              <br />
              <b>Melody - </b> (0975) 876 8985
              <br />
              <b>Jinelyn - </b> (0966) 729 1810
            </p>

            <br />
            <br />

            <h3 className='text-2xl text-yellow-400 font-black'>
              For Enrollment:
            </h3>

            <p className='text-2xl text-gray-200'>
              <b>Jay - </b> (0916) 991 8009
              <br />
              <b>Elaine - </b> (0906) 653 5786
            </p>
            {/* End of the card box 1 */}
          </div>

          <h3 className='text-2xl font-black'>
            FEU Elementary School, Inc. <br /> Nicanor Reyes St., Sampaloc,
            Manila
          </h3>

          <p className='text-2xl pt-2 mx-4 hover:text-blue-400 cursor-pointer'>
            info@feuelemschool.edu.ph
          </p>

          <hr className='border-2 border-black my-10' />

          <p>
            <strong className='text-2xl'>ACADEMIC AFFAIRS OFFICE</strong>
          </p>
          <p className='text-2xl hover:text-blue-400 cursor-pointer'>
            academics@feuelemschool.edu.ph
          </p>
          <br />

          <p>
            <strong className='text-2xl'>FINANCE OFFICE</strong>
          </p>
          <p className='text-2xl hover:text-blue-400 cursor-pointer'>
            finance@feuelemschool.edu.ph | Mobile: 0956-907-9684 (Globe),
            0968-598-4819 (Smart)
          </p>
          <br />

          <p>
            <strong className='text-2xl'>
              FACILITIES AND TECHNICAL SERVICES OFFICE
            </strong>
          </p>
          <p className='text-2xl hover:text-blue-400 cursor-pointer'>
            ftso@feuelemschool.edu.ph
          </p>
          <br />

          <p>
            <strong className='text-2xl'>GUIDANCE OFFICE</strong>
          </p>
          <p className='hover:text-blue-400 cursor-pointer text-2xl'>
            <Link to='mailto:finance@feuhighschool.edu.ph'></Link>
            guidance@feuelemschool.edu.ph
          </p>
          <br />

          <p>
            <strong className='text-2xl'>HUMAN RESOURCES OFFICE</strong>
          </p>
          <p className='text-2xl hover:text-blue-400 cursor-pointer'>
            <Link to='mailto:finance@feuhighschool.edu.ph'></Link>
            hr@feuelemschool.edu.ph
          </p>
          <br />

          <p>
            <strong className='text-2xl'>LIBRARY</strong>
          </p>
          <p className='text-2xl hover:text-blue-400 cursor-pointer'>
            <Link to='mailto:finance@feuhighschool.edu.ph'></Link>
            library@feuelemschool.edu.ph
          </p>
          <br />

          <p>
            <strong className='text-2xl'>
              ADMISSIONS AND REGISTRATION OFFICE
            </strong>
          </p>
          <p className='text-2xl hover:text-blue-400 cursor-pointer'>
            <Link to='mailto:finance@feuhighschool.edu.ph'></Link>
            registrar@feuelemschool.edu.ph | Mobile: 0947-474-2710 or
            0939-319-5319 (Smart), 0935-524-0814 (TM)
          </p>

          <p className='text-2xl hover:text-blue-400 cursor-pointer'>
            <Link to='mailto:finance@feuhighschool.edu.ph'></Link>
            <Link to='mailto:registrar@feuhighschool.edu.ph'></Link>
            scholarships@feuelemschool.edu.ph
          </p>
          <p className='text-2xl hover:text-blue-400 cursor-pointer'>
            admissions@feuelemschool.edu.ph
          </p>
          <br />

          <p className='text-2xl hover:text-blue-400 cursor-pointer'>
            <strong>STUDENT GOVERNMENT</strong>
          </p>

          <p className='text-2xl hover:text-blue-400 cursor-pointer'>
            studentgovernment@feuelemschool.edu.ph
          </p>
          {/* end of contact us contents */}
        </div>
        {/* End of the container section */}
      </div>
      <Footer />
    </>
  );
};

export default contact;
