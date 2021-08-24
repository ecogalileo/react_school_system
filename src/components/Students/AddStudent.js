import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import AdminSidebar from '../../pages/AdminSidebar';

const AddStudent = () => {
  let history = useHistory();
  const [student, setStudent] = useState({
    name: '',
    course: '',
    major: '',
    email: '',
    address: '',
    image: '',
  });

  const { name, course, email, address, image } = student;
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
      <div class="flex-1 p-10 text-2xl font-bold">
        <div className="relative flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              {/* <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"></div> */}

              <div className="">
                <div className="">
                  <h2 className="">Add A Student</h2>
                  <form onSubmit={e => onSubmit(e)}>
                    <div className="">
                      <input
                        type="text"
                        className=""
                        placeholder="Enter Your Name"
                        name="name"
                        value={name}
                        onChange={e => onInputChange(e)}
                      />
                    </div>
                    <div className="">
                      <input
                        type="text"
                        className=""
                        placeholder="Enter Your Course"
                        name="course"
                        value={course}
                        onChange={e => onInputChange(e)}
                      />
                    </div>
                    <div className="">
                      <input
                        type="email"
                        className=""
                        placeholder="Enter Your E-mail Address"
                        name="email"
                        value={email}
                        onChange={e => onInputChange(e)}
                      />
                    </div>
                    <div className="">
                      <input
                        type="text"
                        className=""
                        placeholder="Enter Your Address"
                        name="address"
                        value={address}
                        onChange={e => onInputChange(e)}
                      />
                    </div>
                    <div className="">
                      <input
                        type="text"
                        className=""
                        placeholder="Enter Your Image"
                        name="image"
                        value={image}
                        onChange={e => onInputChange(e)}
                      />
                    </div>
                    <button className="">Add Student</button>
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
