/* This example requires Tailwind CSS v2.0+ */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminSidebar from '../../pages/AdminSidebar';
import { Link } from 'react-router-dom';

const Students = () => {
  const [students, setStudent] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const response = await axios.get('http://localhost:3003/students');
    setStudent(response.data.reverse());
  };

  const removeStudent = async id => {
    await axios.delete(`http://localhost:3003/students/${id}`);
    loadStudents();
  };

  return (
    <>
      <div className="relative md:flex">
        <AdminSidebar />
        {/* Content Start */}
        <div class="flex-1 p-10 text-2xl font-bold">
          <div className="flex flex-row-reverse">
            <Link
              class="bg-blue-600 text-white hover:bg-blue-800 rounded-md p-2 mb-8 px-4 py-2"
              to="/students/add"
            >
              Add Student
            </Link>
          </div>

          <div className="relative flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  {/* Table start */}
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Course
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Address
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {students.map((student, idx) => (
                        <tr key={student.id}>
                          <th scope="row">{idx + 1}</th>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <img
                                  className="h-10 w-10 rounded-full"
                                  src={student.image}
                                  alt=""
                                />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {student.name}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {student.email}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {student.course}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {student.address}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-white">
                            <Link
                              className="bg-blue-600 hover:bg-blue-700 rounded-md mr-4 p-2"
                              to={`/students/${student.id}`}
                            >
                              <i class="fas fa-eye"></i> View
                            </Link>
                            <Link
                              className="bg-yellow-600 hover:bg-yellow-700 rounded-md mr-4 p-2"
                              to={`/students/edit/${student.id}`}
                            >
                              <i class="fas fa-edit"></i> Edit
                            </Link>
                            <Link
                              className="bg-red-600 hover:bg-red-700 rounded-md p-2"
                              onClick={() => removeStudent(student.id)}
                            >
                              <i class="far fa-trash-alt"></i> Delete
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    {/* Table End */}
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* Content end */}
        </div>
      </div>
    </>
  );
};

export default Students;
