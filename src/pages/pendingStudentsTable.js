/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import AdminSidebar from './AdminSidebar';

const pendingStudents = [
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
  // More pending students...
];

export default function pendingStudentsTable() {
  return (
    <>
      {/* Sidebar div start */}
      <div className="relative md:flex">
        <AdminSidebar />
        {/* Content Start */}
        <div class="flex-1 p-10 text-2xl font-bold">
          <div className="relative flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  {/* Table start */}
                  <table className="min-w-full divide-y divide-gray-200">
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
