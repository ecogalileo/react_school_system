import React from "react";
// import { Link } from "react-router-dom";
import AdminSidebar from "./adminSidebar";

const AdminDashboard = () => {
  return (
    <>
      <div className='relative min-h-screen md:flex'>
        <AdminSidebar />
        {/* <!-- content --> */}
        <div className='md:flex md:flex-1 p-10 text-2xl font-bold'>
          {/* cardbox */}
          <div class='md:w-full md:w-1/2 xl:w-1/3 p-6 px-4'>
            <div class='bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5'>
              <div class='flex flex-row items-center'>
                <div class='flex-shrink pr-4'>
                  <div class='rounded-full p-5 bg-green-600'>
                    <i class='fas fa-users fa-2x fa-inverse'></i>
                  </div>
                </div>
                <div class='flex-1 text-right md:text-center'>
                  <h5 class='font-bold uppercase text-gray-600'>Students</h5>
                  <h3 class='font-bold text-3xl'>
                    150{" "}
                    <span class='text-green-500'>
                      <i class='fas fa-caret-up'></i>
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            {/* end of the cardbox */}
          </div>
          {/* cardbox */}
          <div class='md:w-full md:w-1/2 xl:w-1/3 p-6 px-4'>
            <div class='bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5'>
              <div class='flex flex-row items-center'>
                <div class='flex-shrink pr-4'>
                  <div class='rounded-full p-5 bg-pink-600'>
                    <i class='fas fa-users fa-2x fa-inverse'></i>
                  </div>
                </div>
                <div class='flex-1 text-right md:text-center'>
                  <h5 class='font-bold uppercase text-gray-600'>Teachers</h5>
                  <h3 class='font-bold text-3xl'>
                    20{" "}
                    <span class='text-pink-500'>
                      <i class='fas fa-exchange-alt'></i>
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            {/*end of the cardbox */}
          </div>
          {/* cardbox */}
          <div class='md:w-full md:w-1/2 xl:w-1/3 p-6 px-4'>
            <div
              class='
    bg-gradient-to-b
    from-yellow-200
    to-yellow-100
    border-b-4 border-yellow-600
    rounded-lg
    shadow-xl
    p-5
  '
            >
              <div class='flex flex-row items-center'>
                <div class='flex-shrink pr-4'>
                  <div class='rounded-full p-5 bg-yellow-600'>
                    <i class='far fa-calendar-alt fa-2x fa-inverse'></i>
                  </div>
                </div>
                <div class='flex-1 text-right md:text-center'>
                  <h5 class='font-bold uppercase text-gray-600'>Events</h5>
                  <h3 class='font-bold text-3xl'>
                    10
                    <span class='text-yellow-600'>
                      <i class='fas fa-caret-up'></i>
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            {/*end of the cardbox */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
