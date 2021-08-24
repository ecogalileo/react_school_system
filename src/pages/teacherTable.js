/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import AdminSidebar from './AdminSidebar';

const teacher = [
  {
    teacher_name: 'Genesis Gabiola',
    teacher_department: 'Information Technology (IT)',
    major: 'Web Development',
    teacher_address: 'example',
    teacher_email: 'Genesis@example.com',
    image:
      'https://images.unsplash.com/photo-1547320935-59b5a4f2cd1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
  },

  {
    teacher_name: 'Justine Micarandayo',
    teacher_department: 'Information Technology (IT)',
    major: 'Software Development',
    teacher_address: 'example',
    teacher_email: 'Justine@example.com',
    image:
      'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
  },
  // More teacher...
];

export default function teacherTable() {
  return (
    <>
      {/* Sidebar div start */}
      <div className='relative md:flex'>
        <AdminSidebar />
        {/* Content Start */}
        <div class='flex-1 p-10 text-2xl font-bold'>
          <div className='flex flex-row-reverse'>
            {' '}
            <button class='bg-blue-600 hover:bg-blue-800 rounded-md p-2 mb-8'>
              Add teachers
            </button>
          </div>

          <div className='relative flex flex-col'>
            <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
              <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
                <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                  {/* Table start */}
                  <table className='min-w-full divide-y divide-gray-200'>
                    <thead className='bg-gray-50'>
                      <tr>
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                        >
                          Name
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                        >
                          Department
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                        >
                          Status
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                        >
                          Address
                        </th>
                        <th scope='col' className='relative px-6 py-3'>
                          <span className='sr-only'>Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className='bg-white divide-y divide-gray-200'>
                      {teacher.map(person => (
                        <tr key={person.teacher_email}>
                          <td className='px-6 py-4 whitespace-nowrap'>
                            <div className='flex items-center'>
                              <div className='flex-shrink-0 h-10 w-10'>
                                <img
                                  className='h-10 w-10 rounded-full'
                                  src={person.image}
                                  alt=''
                                />
                              </div>
                              <div className='ml-4'>
                                <div className='text-sm font-medium text-gray-900'>
                                  {person.teacher_name}
                                </div>
                                <div className='text-sm text-gray-500'>
                                  {person.teacher_email}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap'>
                            <div className='text-sm text-gray-900'>
                              {person.teacher_department}
                            </div>
                            <div className='text-sm text-gray-500'>
                              {person.major}
                            </div>
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap'>
                            <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                              Active
                            </span>
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                            {person.teacher_address}
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-white'>
                            <button
                              type='button'
                              className='bg-blue-600 hover:bg-blue-800 rounded-md mr-4 p-2'
                            >
                              <i class='fas fa-edit'></i> Edit
                            </button>
                            <button
                              type='button'
                              className='bg-red-600 hover:bg-red-800 rounded-md p-2'
                            >
                              <i class='far fa-trash-alt'></i> Delete
                            </button>
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
        {/* Sidebar div end */}
      </div>
    </>
  );
}
