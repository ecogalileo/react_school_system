import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import AdminSidebar from '../../pages/AdminSidebar';

const AddTeacher = () => {
  let history = useHistory();
  const [teacher, setTeacher] = useState({
    name: '',
<<<<<<< HEAD
    gradeLevel: '',
=======
    department: '',
>>>>>>> master
    email: '',
    address: '',
    image: '',
  });
<<<<<<< HEAD
  const { name, gradeLevel, email, address, image } = teacher;
=======

  const { name, department, email, address, image } = teacher;
>>>>>>> master
  const onInputChange = e => {
    setTeacher({ ...teacher, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:3003/teachers', teacher);
<<<<<<< HEAD
    history.push('/teacher');
=======
    history.push('/teachers');
>>>>>>> master
  };
  return (
    <div className="relative md:flex">
      <AdminSidebar />
      {/* Content Start */}
<<<<<<< HEAD
      <div class="flex-1 p-5 text-lg">
=======
      <div class="flex-1 p-10 text-2xl font-bold">
>>>>>>> master
        <div className="relative flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              {/* <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"></div> */}

<<<<<<< HEAD
              <div className="grid xl:grid-cols-2">
                <div className="container  bg-gray-300 md:w-9/12 p-6">
                  <h2 className="text-green-600 font-semibold text-3xl mb-2">Add Teacher</h2>
                  <form onSubmit={e => onSubmit(e)}>
                  <div className="flex flex-col">
                    <label className="mt-1 font-semibold">Full Name</label>
                      <input
                        type="text"
                        className="rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none border border-gray-300 px-2"
                        placeholder="Name"
=======
              <div className="">
                <div className="">
                  <h2 className="">Add A Teacher</h2>
                  <form onSubmit={e => onSubmit(e)}>
                    <div className="">
                      <input
                        type="text"
                        className=""
                        placeholder="Enter Your Name"
>>>>>>> master
                        name="name"
                        value={name}
                        onChange={e => onInputChange(e)}
                      />
                    </div>
<<<<<<< HEAD
                    <div className="flex flex-col">
                    <label className="mt-1 font-semibold">Grade Level</label>
                      <input
                        type="text"
                        className="rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none border border-gray-300 px-2"
                        placeholder="Grade Level"
                        name="gradeLevel"
                        value={gradeLevel}
                        onChange={e => onInputChange(e)}
                      />
                    </div>
                    <div className="flex flex-col">
                    <label className="mt-1 font-semibold">E-mail</label>
                      <input
                        type="email"
                        className="rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none border border-gray-300 px-2"
                        placeholder="teacher@company.com"
=======
                    <div className="">
                      <input
                        type="text"
                        className=""
                        placeholder="Enter Your Department"
                        name="department"
                        value={department}
                        onChange={e => onInputChange(e)}
                      />
                    </div>
                    <div className="">
                      <input
                        type="email"
                        className=""
                        placeholder="Enter Your E-mail Address"
>>>>>>> master
                        name="email"
                        value={email}
                        onChange={e => onInputChange(e)}
                      />
                    </div>
<<<<<<< HEAD
                    <div className="flex flex-col">
                    <label className="mt-1 font-semibold">Address</label>
                      <input
                        type="text"
                        className="rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none border border-gray-300 px-2"
                        placeholder="Address"
=======
                    <div className="">
                      <input
                        type="text"
                        className=""
                        placeholder="Enter Your Address"
>>>>>>> master
                        name="address"
                        value={address}
                        onChange={e => onInputChange(e)}
                      />
                    </div>
<<<<<<< HEAD
                    <div className="flex flex-col">
                    <label className="mt-1 font-semibold">Image</label>
                      <input
                        type="text"
                        className="rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none border border-gray-300 px-2"
                        placeholder="Enter Image"
=======
                    <div className="">
                      <input
                        type="text"
                        className=""
                        placeholder="Enter Your Image"
>>>>>>> master
                        name="image"
                        value={image}
                        onChange={e => onInputChange(e)}
                      />
                    </div>
<<<<<<< HEAD
                    <button className="bg-blue-800 hover:bg-blue-600 text-white py-1 px-4 md:w-5/12 mt-6 rounded-md">Add Teacher</button>
=======
                    <button className="">Add Teacher</button>
>>>>>>> master
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Content end */}
      </div>
    </div>
  );
};

export default AddTeacher;
