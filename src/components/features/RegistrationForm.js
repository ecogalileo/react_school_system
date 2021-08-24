import React from 'react';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
// import { Redirect } from 'react-router-dom'
// import RegistrationOutput from './RegistrationOutput'

const retrieveData = localStorage.getItem('studentData')
  ? JSON.parse(localStorage.getItem('studentData'))
  : [];

const RegistrationForm = () => {
  const [data, setData] = useState();
  const [allData, setallData] = useState(retrieveData);
  const {
    register,
    handleSubmit,
    formState: { errors }, reset
  } = useForm();
  const onSubmit = e => {
    setData(e);
    setallData([...allData, e]);
    console.log(e, data);
    reset();
  };
  const clear = () => {
      reset();
  }
  useEffect(() => {
    localStorage.setItem('studentData', JSON.stringify(allData));
  }, [allData]);
  return (
    <div className="container m-auto bg-gray-300 my-6 md:w-7/12">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Header */}
        <div className="p-6">
          <h1 className="font-semibold text-3xl">Student Registration Form</h1>
          <p className="text-md pt-1">
            Fill out the form carefully for registration
          </p>
        </div>
        {/* Student's Name */}
        <label className="px-8 text-xl font-medium">Student Name</label>
        <div className="flex flex-row px-7 flex-wrap lg:flex-nowrap mb-6">
          <div className="flex flex-col w-6/12 md:w-full md:pl-0">
            <label className="m-1">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              className="p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none border border-gray-300"
              type="text"
              placeholder="First Name"
              {...register('firstName', { required: 'This is required' })}
            />
            {errors.firstName && (
              <p className="text-xs pl-1 text-red-500">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div className="flex flex-col pl-2 w-6/12 md:w-full md:pl-0 lg:pl-2">
            <label className="m-1">Middle Name</label>
            <input
              className="p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none border border-gray-300"
              type="text"
              placeholder="Middle Name"
            ></input>
          </div>
          <div className=" flex-col flex w-full lg:pl-2">
            <label className="m-1">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              className="p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none border border-gray-300"
              type="text"
              placeholder="Last Name"
              {...register('lastName', { required: 'This is required' })}
            />
            {errors.lastName && (
              <p className="text-xs pl-1 text-red-500">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>
        <div className="md:grid md:grid-cols-3 gap-2">
                  {/* Birth Date */}
        <div className="col-span-2">
        <label className="px-7 text-xl font-medium ">Birth Date</label>
        <div className="flex px-6 lg:px-0 lg:pl-7 mb-6 ">
          <div className="flex flex-col w-full">
            <label className="m-1">
              Month <span className="text-red-500">*</span>
            </label>
            <select
              className="p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none border border-gray-300"
              {...register('birthMonth', { required: 'Please select Month' })}
            >
              <option></option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
            {errors.birthMonth && (
              <p className="text-xs pl-1 text-red-500">
                {errors.birthMonth.message}
              </p>
            )}
          </div>
          <div className="flex flex-col w-full ml-2">
            <label className="m-1">
              Day <span className="text-red-500">*</span>
            </label>
            <select
              className="p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none border border-gray-300"
              {...register('birthDay', { required: 'Please select Day' })}
            >
              <option></option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
              <option>21</option>
              <option>22</option>
              <option>23</option>
              <option>24</option>
              <option>25</option>
              <option>26</option>
              <option>27</option>
              <option>28</option>
              <option>29</option>
              <option>30</option>
              <option>31</option>
            </select>
            {errors.birthDay && (
              <p className="text-xs pl-1 text-red-500">
                {errors.birthDay.message}
              </p>
            )}
          </div>
          <div className="flex flex-col w-full ml-2">
            <label className="m-1">
              Year <span className="text-red-500">*</span>
            </label>
            <select
              className="p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none border border-gray-300"
              {...register('birthYear', { required: 'Please select Year' })}
            >
              <option></option>
              <option>2017</option>
              <option>2016</option>
              <option>2015</option>
              <option>2014</option>
              <option>2013</option>
              <option>2012</option>
              <option>2011</option>
              <option>2010</option>
              <option>2009</option>
              <option>2008</option>
              <option>2007</option>
              <option>2006</option>
              <option>2005</option>
              <option>2004</option>
              <option>2003</option>
              <option>2002</option>
              <option>2001</option>
              <option>2000</option>
            </select>
            {errors.birthYear && (
              <p className="text-xs pl-1 text-red-500">
                {errors.birthYear.message}
              </p>
            )}
          </div>
        </div>
        </div>
        {/* Gender */}
        <div className='col-span-1'>
            <label className="px-8 md:pr-7 md:px-0 text-xl font-medium ">Gender</label>
                <div className="px-7 md:pr-7 md:px-0 mb-6 ">
                <div className="flex flex-col w-full">
                    <label className="m-1">Gender <span className="text-red-500">*</span>
            </label>
                    <select
                    className="p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none border border-gray-300"
                    {...register('gender', { required: 'This is required' })}
                    >
                    <option></option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>N/A</option>
                    </select>
                    {errors.gender && (
                    <p className="text-xs pl-1 text-red-500">
                        {errors.gender.message}
                    </p>
                    )}
                </div>
                </div>
            </div>
        </div>
        {/* Address */}
        <label className="px-8 text-xl font-medium ">Address</label>
        <div className="flex flex-wrap px-7 mb-6 flex-row">
          <div className="flex flex-col w-full">
            <label className="m-1">
              Street Address <span className="text-red-500">*</span>
            </label>
            <input
              className="p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none border border-gray-300"
              type="text"
              placeholder="Street name, Barangray name"
              {...register('streetAddress', { required: 'This is required' })}
            />
            {errors.streetAddress && (
              <p className="text-xs pl-1 text-red-500">
                {errors.streetAddress.message}
              </p>
            )}
          </div>
          <div className="flex flex-col w-full lg:w-4/12">
            <label className="m-1">
              City <span className="text-red-500">*</span>
            </label>
            <input
              className="p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none border border-gray-300"
              type="text"
              placeholder="City Name"
              {...register('cityAddress', { required: 'This is required' })}
            />
            {errors.cityAddress && (
              <p className="text-xs pl-1 text-red-500">
                {errors.cityAddress.message}
              </p>
            )}
          </div>
          <div className="flex flex-col w-full lg:w-4/12 lg:pl-2">
            <label className="m-1">
              Province <span className="text-red-500">*</span>
            </label>
            <input
              className="p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none border border-gray-300"
              type="text"
              placeholder="Province Name"
              {...register('provinceAddress', { required: 'This is required' })}
            />
            {errors.provinceAddress && (
              <p className="text-xs pl-1 text-red-500">
                {errors.provinceAddress.message}
              </p>
            )}
          </div>
          <div className="flex flex-col w-full lg:w-4/12 lg:pl-2">
            <label className="m-1">
              Postal / Zip Code <span className="text-red-500">*</span>
            </label>
            <input
              className="p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none border border-gray-300"
              type="text"
              placeholder="City Postal / Zip Code"
              {...register('postalAddress', { required: 'This is required' })}
            />
            {errors.postalAddress && (
              <p className="text-xs pl-1 text-red-500">
                {errors.postalAddress.message}
              </p>
            )}
          </div>
        </div>
        {/* Parent / Guardian Information */}
        <label className="px-8 text-xl font-medium flex-wrap flex">
          Parent / Guardian Information
        </label>
        <div className="flex flex-row px-7 flex-wrap lg:flex-nowrap mb-6">
          <div className="flex flex-col w-6/12 md:w-full md:pl-0">
            <label className="m-1">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              className="p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none border border-gray-300"
              type="text"
              placeholder="First Name"
              {...register('parentFirstName', { required: 'This is required' })}
            />
            {errors.parentFirstName && (
              <p className="text-xs pl-1 text-red-500">
                {errors.parentFirstName.message}
              </p>
            )}
          </div>
          <div className="flex flex-col pl-2 w-6/12 md:w-full md:pl-0 lg:pl-2">
            <label className="m-1">Middle Name</label>
            <input
              className="p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none border border-gray-300"
              type="text"
              placeholder="Middle Name"
            />
          </div>
          <div className=" flex-col flex w-full lg:pl-2">
            <label className="m-1">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              className="p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none border border-gray-300"
              type="text"
              placeholder="Last Name"
              {...register('parentLastName', { required: 'This is required' })}
            />
            {errors.parentLastName && (
              <p className="text-xs pl-1 text-red-500">
                {errors.parentLastName.message}
              </p>
            )}
          </div>
        </div>
        {/* Parent / Gurdian Contact Details */}
        <label className="px-8 text-xl font-medium flex-wrap flex">
          Contact Information
        </label>
        <div className="flex flex-col lg:flex-row px-7 mb-6">
          <div className="flex flex-col w-full lg:w-4/12">
            <label className="m-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              className="p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none border border-gray-300"
              type="email"
              placeholder="parent@company.com"
              {...register('email', {
                required: 'This is required',
                pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              })}
            />
            {errors.email && (
              <p className="text-xs pl-1 text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="flex flex-col w-full lg:w-4/12 lg:pl-2">
            <label className="m-1">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              className="p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none border border-gray-300"
              type="text"
              placeholder="+630000000000"
              {...register('mobileNumber', {
                required: 'This is required',
                pattern: /((^(\+)(\d){12}$)|(^\d{11}$))/,
              })}
            />
            {errors.mobileNumber && (
              <p className="text-xs pl-1 text-red-500">
                {errors.mobileNumber.message}
              </p>
            )}
          </div>
          <div className="flex flex-col w-full lg:w-4/12 lg:pl-2">
            <label className="m-1">
              Phone Number <span className="text-gray-600">(Optional)</span>
            </label>
            <input
              className="p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none border border-gray-300"
              type="text"
              placeholder="(00) 0000 0000"
              {...register('phoneNumber')}
            />
          </div>
        </div>
        {/* More Information */}
        <label className="px-8 text-xl font-medium">
          More Information
        </label>
        <div className="px-7 grid md:grid-cols-2">
          <div className="flex flex-col w-full md:w-8/12">
            <label className="m-1">
              Grade Level <span className="text-red-500">*</span>
            </label>
            <select
              className="p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none border border-gray-300 text-sm"
              {...register('gradeLevel', { required: 'This is required' })}
            >
              <option></option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </select>
            {errors.gradeLevel && (
              <p className="text-xs pl-1 text-red-500">
                {errors.gradeLevel.message}
              </p>
            )}
          </div>
          {/* Birth Certificate */}
          <div className="flex flex-col w-full">
            <label className="mt-2">Scanned Birth Certificate</label>
            <input
              className="rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none border border-gray-300"
              type="file"
              placeholder="(00) 0000 0000"
              {...register('birthCertificate', {
                required: 'This is required for verification',
              })}
            />
            {errors.birthCertificate && (
              <p className="text-xs pl-1 text-red-500">
                {errors.birthCertificate.message}
              </p>
            )}
          </div>
        </div>
        {/* Buttons */}
        <div className="flex-col md:flex-row px-7 flex pb-7 md:justify-center mt-5">
            <div className="md:w-3/12 md:mx-3">
                <button className=" bg-blue-800 hover:bg-blue-600 text-white py-1 px-4 w-full my-3 rounded-md" >
                Submit Application
                </button>
            </div>
            <div className="md:w-3/12 md:mx-3">
            <button className=" bg-red-800 hover:bg-red-600 text-white py-1 px-4 w-full my-3 rounded-md" onClick={clear}>
                Clear</button>
            </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
