import React from 'react'
import { Link } from 'react-router-dom';

const RegistrationSuccess = () => {
    return (
        <div className="container m-auto my-40 md:w-7/12 text-center px-10 mt-50">
           <div className="pb-10 pt-20">
            <div className="flex flex-col">
                    <label className="md:text-5xl text-lg font-semibold bg-gradient-to-tl from-yellow-200 via-green-200 to-green-500 p-10 rounded-3xl capitalize">Your registration has been successfully submitted</label>
                    <span className="md:text-3xl my-5 font-semibold">Thank you!</span>
                </div>
                <div >
                <Link
                        type="button"
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm md:w-1/6" to="/"
                    >Home</Link>
                </div>
           </div>
        </div>
    )
}

export default RegistrationSuccess