import React from 'react'


const listOfStudents = localStorage.getItem('studentData')? JSON.parse(localStorage.getItem('studentData')) : [];

const ListOfStudentApplicants = () => {
    return (
        <div className="container m-auto bg-gray-300 my-6">
            <h1 className='px-4 text-2xl font-semibold text-green-700 pt-3'>Student Applicants</h1>
            <div className='border-t mt-3'>
                {listOfStudents.map((applicant) => 
                <div className='pt-3'>
                    <div className='bg-gray-100 px-4 p-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                        <label className='text-md font-medium text-gray-500'>
                            Full Name
                        </label>
                        <p className='mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2'>{applicant.firstName} {applicant.middleName} {applicant.lastName}</p>
                    </div>
                    <div className='bg-gray-100 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                        <label className='text-md font-medium text-gray-500'>
                            Birth date
                        </label>
                        <p className='mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2'>{applicant.birthMonth} {applicant.birthDay}, {applicant.birthYear}</p>
                    </div>
                    <div className='bg-gray-100 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                        <label className='text-md font-medium text-gray-500'>
                            Gender
                        </label>
                        <p className='mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2'>{applicant.gender}</p>
                    </div>
                    <div className='bg-gray-100 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                        <label className='text-md font-medium text-gray-500'>
                            Address
                        </label>
                        <p className='mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2'>{applicant.streetAddress}, {applicant.cityAddress}, {applicant.provinceAddress}, {applicant.postalAddress}</p>
                    </div>
                    {/* Parent/Guardian Information */}
                    <div className='bg-gray-100 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                        <label className='text-md font-medium text-gray-500'>
                            Parent/Guardian Name
                        </label>
                        <p className='mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2'>{applicant.parentFirstName} {applicant.parentMiddleName} {applicant.parentLastName}</p>
                    </div>
                    {/* Email-Address */}
                    <div className='bg-gray-100 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                        <label className='text-md font-medium text-gray-500'>
                            Email Address
                        </label>
                        <p className='mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2'>{applicant.email}</p>
                    </div>
                    <div className='bg-gray-100 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                        <label className='text-md font-medium text-gray-500'>
                        Mobile Number
                        </label>
                        <p className='mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2'>{applicant.mobileNumber}</p>
                    </div>
                    <div className='bg-gray-100 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                        <label className='text-md font-medium text-gray-500'>
                        Phone Number
                        </label>
                        <p className='mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2'>{applicant.phoneNumber}</p>
                    </div>
                    <div className='bg-gray-100 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                        <label className='text-md font-medium text-gray-500'>
                            Grade Level
                        </label>
                        <p className='mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2'>{applicant.gradeLevel}</p>
                    </div>
                    {/* <div className='flex'>
                        <label className='pr-4'>
                            Birth Certificate
                        </label>
                        <p>{applicant.birthCertificate}</p>
                    </div> */}
                </div>
                
                )}  
            </div>
        </div>
    )
}

export default ListOfStudentApplicants