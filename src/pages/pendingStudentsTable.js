/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import AdminSidebar from './AdminSidebar';

// const pendingStudents = [
//   // More pending students...
// ];

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
