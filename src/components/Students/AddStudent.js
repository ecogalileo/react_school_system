import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import AdminSidebar from '../../pages/AdminSidebar';

const AddStudent = () => {
  let history = useHistory();
  const [student, setStudent] = useState({
    name: '',
    gradeLevel: '',
    email: '',
    address: '',
    image: '',
  });
  const { name, gradeLevel, email, address, image } = student;
  const onInputChange = e => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:3003/students', student);
    history.push('/students');
  };
  return (
    <div className="relative md:flex">
      <AdminSidebar />
      {/* Content Start */}
      <div class="flex-1 p-5 text-lg">
        <div className="relative flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              {/* <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"></div> */}

              <div className="grid xl:grid-cols-2">
                <div className="container  bg-gray-300 md:w-9/12 p-6">
                  <h2 className="text-green-600 font-semibold text-3xl mb-2">Add Student</h2>
                  <form onSubmit={e => onSubmit(e)}>
                  <div className="flex flex-col">
                    <label className="mt-1 font-semibold">Full Name</label>
                      <input
                        type="text"
                        className="rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none border border-gray-300 px-2"
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={e => onInputChange(e)}
                      />
                    </div>
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
                        placeholder="student@company.com"
                        name="email"
                        value={email}
                        onChange={e => onInputChange(e)}
                      />
                    </div>
                    <div className="flex flex-col">
                    <label className="mt-1 font-semibold">Address</label>
                      <input
                        type="text"
                        className="rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none border border-gray-300 px-2"
                        placeholder="Address"
                        name="address"
                        value={address}
                        onChange={e => onInputChange(e)}
                      />
                    </div>
                    <div className="flex flex-col">
                    <label className="mt-1 font-semibold">Image</label>
                      <input
                        type="text"
                        className="rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none border border-gray-300 px-2"
                        placeholder="Enter Image"
                        name="image"
                        value={image}
                        onChange={e => onInputChange(e)}
                      />
                    </div>
                    <button className="bg-blue-800 hover:bg-blue-600 text-white py-1 px-4 md:w-5/12 mt-6 rounded-md">Add Student</button>
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

export default AddStudent;
