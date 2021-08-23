/* This example requires Tailwind CSS v2.0+ */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminSidebar from '../../pages/AdminSidebar';
import { Link } from 'react-router-dom';

// const students = [
//   {
//     name: 'Kimberly Anne Galileo',
//     course: 'Bachelor of Science Business Administration',
//     major: 'Major in Financial Management',
//     Address: 'Dagupan, Pangasinan',
//     email: 'kimberlyanne@example.com',
//     image:
//       'https://scontent.fmnl17-3.fna.fbcdn.net/v/t1.6435-9/186488324_2910688599202923_1355505087170525905_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGixkVIoo2LX5rG2U31zbqQNeyr7C47A0k17KvsLjsDSUKc29thqfbhYKpPOsJuJJ2ohRXzc2gbOHjN34Q0XJVe&_nc_ohc=b2YR7_7jly8AX_NP_hN&_nc_ht=scontent.fmnl17-3.fna&oh=84a703089725753fd4a1de634fc7f41e&oe=614954F9',
//   },

//   {
//     name: 'Erick Armstrong Galileo',
//     course: 'Bachelor of Science Information Technology',
//     major: 'Major in Web Development',
//     Address: 'Balungao, Pangasinan',
//     email: 'ericogalileo@example.com',
//     image:
//       'https://scontent.fmnl17-2.fna.fbcdn.net/v/t1.6435-9/141159269_3742680895771114_283658765807445518_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEDnNatwihnejIEB2E5kNznSqi7B5u9vNxKqLsHm7283FDdBI5hiIv5g0JOf0O6hm4vBJj6BaGa-iDCXm7PGPQ0&_nc_ohc=G5xWrPv46hEAX_FTXu8&_nc_ht=scontent.fmnl17-2.fna&oh=b9a37d430fff7f0729701ef6a36a89a8&oe=61489E69',
//   },
//   // More student...
// ];

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const result = await axios.get('http://localhost:3006/students');
    setStudents(result.data.reverse());
  };

  const removeStudent = async id => {
    await axios.delete(`http://localhost:3006/students/${id}`);
    loadStudents();
  };

  return (
    <>
      <div className="relative md:flex">
        <AdminSidebar />
        {/* Content Start */}
        <div class="flex-1 p-10 text-2xl font-bold">
          <div className="flex flex-row-reverse">
            {' '}
            <Link class="bg-blue-600 hover:bg-blue-800 rounded-md p-2 mb-8">
              Add Students
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
                          Status
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
                      {students.map(student => (
                        <tr key={student.email}>
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
                            <div className="text-sm text-gray-500">
                              {student.major}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Active
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {student.Address}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-white">
                            <Link
                              type="button"
                              className="bg-blue-600 hover:bg-blue-800 rounded-md mr-4 p-2"
                              to={`/students/edit/${student.id}`}
                            >
                              <i class="fas fa-edit"></i> Edit
                            </Link>
                            <Link
                              type="button"
                              className="bg-red-600 hover:bg-red-800 rounded-md p-2"
                              onClick={removeStudent(student.id)}
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
}
